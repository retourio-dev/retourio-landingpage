import { NextResponse } from 'next/server';
import Stripe from 'stripe';

export async function POST(req: Request) {
  try {
    const stripeKey = process.env.STRIPE_SECRET_KEY;
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

    // Sicherheits-Check für Vercel Umgebungsvariablen
    if (!stripeKey) {
      console.error("CRITICAL: STRIPE_SECRET_KEY is missing in Vercel Settings");
      return NextResponse.json({ error: "Server Configuration Error (API Key)" }, { status: 500 });
    }

    if (!baseUrl) {
      console.error("CRITICAL: NEXT_PUBLIC_BASE_URL is missing in Vercel Settings");
      return NextResponse.json({ error: "Server Configuration Error (Base URL)" }, { status: 500 });
    }

    const stripe = new Stripe(stripeKey, {
      apiVersion: '2026-01-28.clover' as any,
    });

    const { priceId } = await req.json();

    if (!priceId) {
      return NextResponse.json({ error: 'Missing priceId' }, { status: 400 });
    }

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card', 'sepa_debit'],
      line_items: [{ price: priceId, quantity: 1 }],
      mode: 'subscription',
      success_url: `${baseUrl}/success`,
      cancel_url: `${baseUrl}/#pricing`,
    });

    return NextResponse.json({ url: session.url });
  } catch (err: any) {
    console.error("Stripe Session Error:", err.message);
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}