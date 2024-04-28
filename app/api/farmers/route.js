import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const {
      code,
      contactPerson,
      email,
      name,
      notes,
      phone,
      physicalAddress,
      terms,
      isActive,
      profileImageUrl,
    } = await request.json();
    const newFarmer = {
      code,
      contactPerson,
      email,
      name,
      notes,
      phone,
      physicalAddress,
      terms,
      isActive,
      profileImageUrl,
    };
    console.log(newFarmer);
    return NextResponse.json(newFarmer);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        message: "Failed to create farmer",
        error,
      },
      { status: 500 }
    );
  }
}
