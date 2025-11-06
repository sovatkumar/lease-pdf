import React from "react";
import { NextResponse } from "next/server";
import { renderToStream } from "@react-pdf/renderer";
import LeasePDF from "@/app/components/pdf/LeasePDF";

export async function POST(req: Request) {
  try {
    const data = await req.json();
    const element = React.createElement(LeasePDF, data);
    const nodeStream:any = await renderToStream(element);
    return new NextResponse(nodeStream, {
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": 'attachment; filename="lease_agreement.pdf"',
      },
    });
  } catch (err: any) {
    console.error("PDF generation error:", err);
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
