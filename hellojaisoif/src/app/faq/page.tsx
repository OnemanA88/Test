export default function FaqPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">FAQ</h1>
      <div className="space-y-6">
        <div>
          <h2 className="font-semibold text-gray-900">Livraison</h2>
          <p className="text-gray-700">Île-de-France en 48h. France métropolitaine 2-3 jours ouvrés.</p>
        </div>
        <div>
          <h2 className="font-semibold text-gray-900">Paiement</h2>
          <p className="text-gray-700">Stripe (3D Secure) et PayPal (Smart Buttons).</p>
        </div>
      </div>
    </div>
  );
}

