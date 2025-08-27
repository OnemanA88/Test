export default function AdminPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">Admin Dashboard</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white rounded-lg shadow-sm p-6"><h2 className="font-semibold mb-2">Catégories</h2><p>CRUD (bientôt)</p></div>
        <div className="bg-white rounded-lg shadow-sm p-6"><h2 className="font-semibold mb-2">Packs</h2><p>CRUD (bientôt)</p></div>
        <div className="bg-white rounded-lg shadow-sm p-6"><h2 className="font-semibold mb-2">Items</h2><p>CRUD (bientôt)</p></div>
        <div className="bg-white rounded-lg shadow-sm p-6"><h2 className="font-semibold mb-2">Commandes</h2><p>pending → paid → fulfilled → refunded</p></div>
        <div className="bg-white rounded-lg shadow-sm p-6"><h2 className="font-semibold mb-2">Coupons</h2><p>Gestion des codes promo</p></div>
        <div className="bg-white rounded-lg shadow-sm p-6"><h2 className="font-semibold mb-2">Exports</h2><p>CSV ventes/commandes</p></div>
      </div>
    </div>
  );
}

