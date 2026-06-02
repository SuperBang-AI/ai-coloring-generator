import { NextResponse } from "next/server";

const BACKEND_URL = "https://coloring-generator.ai-coloring.workers.dev";

/**
 * GET /api/usage — proxy to backend Worker usage endpoint
 *
 * Returns the current remaining free generation count for this IP.
 */
export async function GET() {
  try {
    const backendResponse = await fetch(`${BACKEND_URL}/api/usage`, {
      method: "GET",
      headers: { Accept: "application/json" },
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
