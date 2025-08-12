import { NextResponse } from "next/server";

// Redirect to provided CV URL
export function GET() {
  return NextResponse.redirect(
    "https://smallpdf.com/file#s=bb384792-8e1b-4d43-9a27-eac347294660",
    { status: 302 }
  );
}
