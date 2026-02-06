import { NextResponse } from 'next/server';
import Stripe from 'stripe';

// Stripe mit deinem Secret Key initialisieren
// Die apiVersion wurde auf den von TypeScript geforderten Wert '2026-01-28.clover' aktualisiert
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {
  apiVersion: '2026-01-28.clover' as any, 
});

export async function POST(req: Request) {
  try {
    const { priceId } = await req.json();

    if (!priceId) {
      return NextResponse.json({ error: 'Missing priceId' }, { status: 400 });
    }

    // Erstellung der Checkout-Session
    const session = await stripe.checkout.sessions.create({
      line_items: [
        {
          price: priceId,
          quantity: 1,
        },
      ],
      mode: 'subscription',
      // WICHTIG: Die URLs müssen exakt mit deiner .env übereinstimmen
      success_url: `${process.env.NEXT_PUBLIC_BASE_URL}/success`,
      cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL}/#pricing`,
    });

    return NextResponse.json({ url: session.url });
  } catch (err: any) {
    console.error("Stripe API Error:", err);
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}