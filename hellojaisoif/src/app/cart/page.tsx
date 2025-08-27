'use client';

import Link from 'next/link';
import { useCartStore } from '../../store/cart';

export default function CartPage() {
  const { items, updateQuantity, removeItem } = useCartStore();
  const subtotal = items.reduce((sum, i) => sum + i.price * i.quantity, 0);
  const tva = subtotal * 0.2;
  const total = subtotal + tva;

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Votre panier</h1>
      {items.length === 0 ? (
        <div className="text-center py-16">
          <p className="text-gray-600 mb-6">Votre panier est vide.</p>
          <Link href="/packs" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md">Voir les packs</Link>
        </div>
      ) : (
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-4">
            {items.map((item) => (
              <div key={item.id} className="bg-white rounded-lg shadow-sm p-6 flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">{item.name}</h3>
                  <p className="text-gray-600">{item.price.toFixed(2)} € TTC</p>
                </div>
                <div className="flex items-center space-x-4">
                  <input
                    type="number"
                    min={1}
                    value={item.quantity}
                    onChange={(e) => updateQuantity(item.id, Math.max(1, Number(e.target.value)))}
                    className="w-20 border border-gray-300 rounded-md px-2 py-1"
                  />
                  <button onClick={() => removeItem(item.id)} className="text-red-600 hover:underline">Supprimer</button>
                </div>
              </div>
            ))}
          </div>
          <div>
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-xl font-semibold mb-4">Récapitulatif</h2>
              <div className="space-y-2 text-sm text-gray-700">
                <div className="flex justify-between"><span>Sous-total</span><span>{subtotal.toFixed(2)} €</span></div>
                <div className="flex justify-between"><span>TVA (20%)</span><span>{tva.toFixed(2)} €</span></div>
                <div className="border-t pt-2 flex justify-between font-semibold"><span>Total</span><span>{total.toFixed(2)} €</span></div>
              </div>
              <Link href="/checkout" className="mt-6 inline-block w-full text-center bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-md font-semibold">Passer au paiement</Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

