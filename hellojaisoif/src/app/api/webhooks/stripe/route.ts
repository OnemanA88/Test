import { NextResponse } from 'next/server';
import Stripe from 'stripe';

export async function POST(req: Request) {
  const stripeSecretKey = process.env.STRIPE_SECRET_KEY;
  const endpointSecret = process.env.STRIPE_WEBHOOK_SECRET;
  if (!stripeSecretKey || !endpointSecret) {
    return NextResponse.json({ error: 'Stripe not configured' }, { status: 500 });
  }

  const payload = await req.text();
  const signature = req.headers.get('stripe-signature') || '';
  const stripe = new Stripe(stripeSecretKey, { apiVersion: '2024-10-28.acacia' as any });

  try {
    const event = stripe.webhooks.constructEvent(payload, signature, endpointSecret);
    // Handle event types: checkout.session.completed, charge.refunded, etc.
    switch (event.type) {
      case 'checkout.session.completed':
        // update order to paid
        break;
      case 'charge.refunded':
        // update order to refunded
        break;
      default:
        break;
    }
    return NextResponse.json({ received: true });
  } catch (err: any) {
    return NextResponse.json({ error: `Webhook Error: ${err.message}` }, { status: 400 });
  }
}

