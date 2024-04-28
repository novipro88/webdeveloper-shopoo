import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const {
      name,
      password,
      email,
      phone,
      physicalAddress,
      nin,
      dob,
      notes,
      code,
      isActive,
    } = await request.json();
    const newStaff = {
      name,
      password,
      email,
      phone,
      physicalAddress,
      nin,
      dob,
      notes,
      code,
      isActive,
    };
    console.log(newStaff);
    return NextResponse.json(newStaff);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        message: "Failed to recruit new Staff",
        error,
      },
      { status: 500 }
    );
  }
}
