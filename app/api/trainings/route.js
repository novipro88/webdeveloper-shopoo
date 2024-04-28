import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const {
      title,
      slug,
      categoryId,
      imageUrl,
      description,
      isActive,
      content,
    } = await request.json();
    const newTraining = {
      title,
      slug,
      categoryId,
      imageUrl,
      description,
      isActive,
      content,
    };
    console.log(newTraining);
    return NextResponse.json(newTraining);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        message: "Failed to create training",
        error,
      },
      { status: 500 }
    );
  }
}
