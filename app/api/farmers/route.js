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
    };
    console.log(newFarmer);
    return NextResponse.json(newFarmer);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        error: "Failed to create farmer",
      },
      { status: 500 }
    );
  }
}
