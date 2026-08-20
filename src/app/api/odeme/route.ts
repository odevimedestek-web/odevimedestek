import { NextRequest, NextResponse } from "next/server";
import { createPaymentLink, PaymentValidationError } from "@/lib/payxem";

export async function POST(req: NextRequest) {
  try {
    const { kod, hizmet, tutar } = await req.json();

    const amountTry = Number(tutar);
    if (!kod || !hizmet || !Number.isFinite(amountTry) || amountTry <= 0) {
      return NextResponse.json(
        { error: "Eksik veya geçersiz bilgi." },
        { status: 400 }
      );
    }

    const link = await createPaymentLink({ amountTry });

    return NextResponse.json({ url: link.url, amountUsd: link.amountUsd });
  } catch (err) {
    if (err instanceof PaymentValidationError) {
      return NextResponse.json({ error: err.message }, { status: 400 });
    }
    console.error("Ödeme linki oluşturulamadı:", err);
    return NextResponse.json(
      { error: "Ödemeniz şu anda tamamlanamadı." },
      { status: 500 }
    );
  }
}
