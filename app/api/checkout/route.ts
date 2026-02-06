import { NextResponse } from 'next/server';
import Stripe from 'stripe';

// Stripe mit deinem Secret Key initialisieren
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {
  apiVersion: '2023-10-16', // Oder die aktuellste Version
});

export async function POST(req: Request) {
  try {
    const { priceId } = await req.json();

    // Erstellung der Checkout-Session
    const session = await stripe.checkout.sessions.create({
      line_items: [
        {
          price: priceId,
          quantity: 1,
        },
      ],
      mode: 'subscription',
      // Nutze die URL aus deiner .env Datei
      success_url: `${process.env.NEXT_PUBLIC_BASE_URL}/success`,
      cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL}/#pricing`,
    });

    return NextResponse.json({ url: session.url });
  } catch (err: any) {
    console.error('Stripe API Error:', err);
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
