import { NextResponse } from "next/server";

/**
 * POST /api/generate — placeholder for backend API
 *
 * This endpoint will be connected to the actual AI generation service
 * once the backend is complete. Currently returns a placeholder response.
 */
export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { prompt, difficulty } = body;

    // Validate input
    if (!prompt || typeof prompt !== "string" || prompt.trim().length < 3) {
      return NextResponse.json(
        { error: "Prompt must be at least 3 characters." },
        { status: 400 }
      );
    }

    const validDifficulties = ["simple", "medium", "complex"];
    if (difficulty && !validDifficulties.includes(difficulty)) {
      return NextResponse.json(
        { error: "Invalid difficulty. Use: simple, medium, or complex." },
        { status: 400 }
      );
    }

    // TODO: Connect to actual AI generation service
    // 1. Sanitize the prompt
    // 2. Call AI model (e.g., via Fal.ai / Replicate / custom endpoint)
    // 3. Process the result into print-ready PNG
    // 4. Return the image URL or base64 data

    return NextResponse.json(
      {
        message: "Backend API not yet connected. This is a placeholder.",
        prompt: prompt.trim(),
        difficulty: difficulty || "medium",
        status: "placeholder",
      },
      { status: 200 }
    );
  } catch {
    return NextResponse.json(
      { error: "Invalid request body." },
      { status: 400 }
    );
  }
}
