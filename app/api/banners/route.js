import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const { title, link, imageUrl } = await request.json();
    const newBanner = { title, link, imageUrl };
    console.log(newBanner);
    return NextResponse.json(newBanner);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        error: "Failed to create banner",
      },
      { status: 500 }
    );
  }
}
