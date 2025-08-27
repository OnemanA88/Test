export default function ContactPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold text-gray-900 mb-4">Contact</h1>
      <p className="text-gray-700 mb-6">Écrivez-nous: contact@hellojaisoif.com</p>
      <form className="space-y-4">
        <input className="w-full border border-gray-300 rounded-md px-3 py-2" placeholder="Votre email" />
        <textarea className="w-full border border-gray-300 rounded-md px-3 py-2" placeholder="Votre message" rows={5} />
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md">Envoyer</button>
      </form>
    </div>
  );
}

