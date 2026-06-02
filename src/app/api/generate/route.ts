import { NextResponse } from "next/server";

const BACKEND_URL = "https://coloring-generator.ai-coloring.workers.dev";

/**
 * POST /api/generate — proxy to backend Cloudflare Worker
 *
 * Forwards the request to the actual AI generation service.
 * Returns binary PNG on success (with X-Remaining header),
 * or JSON error on failure.
 */
export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { prompt, difficulty, style } = body;

    // Validate input
    if (!prompt || typeof prompt !== "string" || prompt.trim().length < 3) {
      return NextResponse.json(
        { success: false, error: "Prompt must be at least 3 characters." },
        { status: 400 }
      );
    }

    if (prompt.trim().length > 500) {
      return NextResponse.json(
        { success: false, error: "Prompt too long. Maximum 500 characters." },
        { status: 400 }
      );
    }

    // Normalize: accept both 'difficulty' and 'style' for backward compat
    const styleValue = style || difficulty;
    const validStyles = ["simple", "medium", "complex"];
    const normalizedStyle = validStyles.includes(styleValue) ? styleValue : "medium";

    // Forward to backend Worker
    const backendResponse = await fetch(`${BACKEND_URL}/api/generate`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        prompt: prompt.trim(),
        style: normalizedStyle,
      }),
    });

    const remaining = backendResponse.headers.get("X-Remaining") || "0";

    if (!backendResponse.ok) {
      // Try to parse error from backend as JSON
      let errorMessage = "Generation failed. Please try again.";
      let errorCode = "UNKNOWN_ERROR";

      try {
        const errorData = await backendResponse.json();
        errorMessage = errorData.error || errorMessage;
        errorCode = errorData.code || errorCode;
      } catch {
        // Backend returned non-JSON error (e.g., HTML error page)
        errorMessage = `Backend error (${backendResponse.status}). Please try again.`;
      }

      return NextResponse.json(
        {
          success: false,
          error: errorMessage,
          code: errorCode,
          remaining: parseInt(remaining, 10) || 0,
        },
        { status: backendResponse.status }
      );
    }

    // Backend returned image binary — pass through with relevant headers
    const imageBlob = await backendResponse.blob();
    const imageUrl = backendResponse.headers.get("X-Image-Url") || "";

    return new NextResponse(imageBlob, {
      status: 200,
      headers: {
        "Content-Type": imageBlob.type || "image/png",
        "X-Remaining": remaining,
        "X-Image-Url": imageUrl,
        "Cache-Control": "public, max-age=300",
      },
    });
  } catch (err) {
    console.error("Proxy error:", err);
    return NextResponse.json(
      {
        success: false,
        error: "Network error. Please check your connection and try again.",
        code: "NETWORK_ERROR",
      },
      { status: 502 }
    );
  }
}
