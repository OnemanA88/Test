import { NextResponse } from 'next/server';
import Stripe from 'stripe';
import { rateLimit } from '../../../../lib/rateLimit';

export async function POST(req: Request) {
  const ip = (req.headers.get('x-forwarded-for') || '').split(',')[0] || 'local';
  const rl = rateLimit(`stripe:${ip}`, 5, 60_000);
  if (!rl.allowed) {
    return NextResponse.json({ error: 'Too Many Requests' }, { status: 429 });
  }
  const stripeSecretKey = process.env.STRIPE_SECRET_KEY;
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';

  if (!stripeSecretKey) {
    return NextResponse.json({ error: 'Stripe not configured' }, { status: 500 });
  }

  const stripe = new Stripe(stripeSecretKey, { apiVersion: '2024-10-28.acacia' as any });

  try {
    const session = await stripe.checkout.sessions.create({
      mode: 'payment',
      payment_method_types: ['card'],
      success_url: `${baseUrl}/thank-you?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${baseUrl}/checkout`,
      line_items: [
        {
          price_data: {
            currency: 'eur',
            unit_amount: 5499,
            product_data: {
              name: 'Pack Enfants',
              description: 'Pack de boissons — disponible dès maintenant',
            },
          },
          quantity: 1,
        },
      ],
      allow_promotion_codes: true,
    });

    return NextResponse.redirect(session.url!, { status: 303 });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

