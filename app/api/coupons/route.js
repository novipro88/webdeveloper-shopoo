import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const { title, couponCode, expiryDate } = await request.json();
    const newCoupon = { title, couponCode, expiryDate };
    console.log(newCoupon);
    return NextResponse.json(newCoupon);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        error: "Failed to create coupon",
      },
      { status: 500 }
    );
  }
}
