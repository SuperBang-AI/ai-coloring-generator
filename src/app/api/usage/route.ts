import { NextRequest, NextResponse } from "next/server";

const BACKEND_URL = "https://api.aicoloringcrafter.art";

/**
 * GET /api/usage — proxy to backend Worker usage endpoint
 *
 * Returns the current remaining free generation count for this IP.
 */
export async function GET(request: NextRequest) {
  try {
    // Get client ID from query string
    const url = new URL(request.url);
    const clientId = url.searchParams.get("clientId") || "";
    const clientIP =
      request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
      request.headers.get("x-real-ip") ||
      "127.0.0.1";
    const quotaId = clientId || clientIP;

    const backendResponse = await fetch(`${BACKEND_URL}/api/usage?clientId=${encodeURIComponent(quotaId)}`, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "X-Forwarded-For": clientIP,
        "X-Real-IP": clientIP,
        "X-Quota-Id": quotaId,
      },
    });

    if (!backendResponse.ok) {
      return NextResponse.json(
        { success: false, error: "Failed to fetch usage info." },
        { status: backendResponse.status }
      );
    }

    const data = await backendResponse.json();
    return NextResponse.json(data, { status: 200 });
  } catch (err) {
    console.error("Usage proxy error:", err);
    return NextResponse.json(
      { success: false, error: "Network error fetching usage." },
      { status: 502 }
    );
  }
}
