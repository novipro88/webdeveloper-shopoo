import db from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    /* 
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
      products,
      landSize,
      mainCrop,
      userId,
    */
    const farmerData = await request.json();
    const newFarmerProfile = await db.farmerProfile.create({
      data: {
        code: farmerData.code,
        contactPerson: farmerData.contactPerson,
        email: farmerData.email,
        name: farmerData.name,
        notes: farmerData.notes,
        phone: farmerData.phone,
        physicalAddress: farmerData.physicalAddress,
        terms: farmerData.terms,
        isActive: farmerData.isActive,
        profileImageUrl: farmerData.profileImageUrl,
        products: farmerData.products,
        landSize: parseFloat(farmerData.landSize),
        mainCrop: farmerData.mainCrop,
        userId: farmerData.userId,
      },
    });
    console.log(newFarmerProfile);
    return NextResponse.json(newFarmerProfile);
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

export async function GET(request) {
  try {
    const profiles = await db.farmerProfile.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });
    return NextResponse.json(profiles);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        message: "Failed to fetch farmer profile",
        error,
      },
      { status: 500 }
    );
  }
}
