import { NextResponse } from "next/server";

// Redirect to provided CV URL
export function GET() {
  return NextResponse.redirect(
    "https://smallpdf.com/file#s=52b60756-1ac1-4586-a2e0-4a41903d1d55",
    { status: 302 }
  );
}
