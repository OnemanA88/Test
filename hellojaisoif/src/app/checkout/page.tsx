'use client';

import { PayPalScriptProvider, PayPalButtons } from '@paypal/react-paypal-js';
import Link from 'next/link';
import { useCartStore } from '../../store/cart';

export default function CheckoutPage() {
  const { items, clear } = useCartStore();
  const subtotal = items.reduce((sum, i) => sum + i.price * i.quantity, 0);
  const tva = subtotal * 0.2;
  const total = subtotal + tva;

  const hasItems = items.length > 0;

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">Paiement</h1>
      {!hasItems ? (
        <div className="text-center py-16">
          <p className="text-gray-600 mb-6">Votre panier est vide.</p>
          <Link href="/packs" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md">Voir les packs</Link>
        </div>
      ) : (
        <div className="space-y-6">
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-xl font-semibold mb-4">Résumé de commande</h2>
            <div className="space-y-2 text-sm text-gray-700">
              <div className="flex justify-between"><span>Sous-total</span><span>{subtotal.toFixed(2)} €</span></div>
              <div className="flex justify-between"><span>TVA (20%)</span><span>{tva.toFixed(2)} €</span></div>
              <div className="border-t pt-2 flex justify-between font-semibold"><span>Total</span><span>{total.toFixed(2)} €</span></div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-6 space-y-4">
            <h2 className="text-xl font-semibold">Payer avec</h2>
            <div>
              <form action="/api/checkout/stripe" method="POST">
                <button type="submit" className="w-full bg-black text-white py-3 rounded-md font-semibold">Stripe Checkout</button>
              </form>
            </div>
            <div>
              <PayPalScriptProvider options={{ clientId: process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID || 'test', currency: 'EUR' }}>
                <PayPalButtons
                  style={{ layout: 'vertical' }}
                  createOrder={(_, actions) => {
                    return actions.order.create({
                      purchase_units: [{
                        amount: { value: total.toFixed(2), currency_code: 'EUR' },
                        description: 'HelloJaiSoif — Commande',
                      }],
                    });
                  }}
                  onApprove={async (_, actions) => {
                    await actions.order?.capture();
                    clear();
                    window.location.href = '/thank-you';
                  }}
                />
              </PayPalScriptProvider>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

