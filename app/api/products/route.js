import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    /*
    -id => auto()
    -title => text()
    -slug => auto()
    -image/images => array[]
    -sku => text()
    -barcode => text()
    -description => text()
    -productPrice => number()
    -salePrice => number()
    -isActive => boolean()
    -categoryId => option()
    -farmerId => option()
    -tags => array[]
    */
    const productData = await request.json();
    console.log(productData);
    return NextResponse.json(productData);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        message: "Failed to create product",
        error,
      },
      { status: 500 }
    );
  }
}
