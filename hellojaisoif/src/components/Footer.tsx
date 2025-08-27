import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">HelloJaiSoif</h3>
            <p className="text-gray-400">
              Des packs boissons prêts à partager pour tous vos moments spéciaux.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Navigation</h4>
            <ul className="space-y-2 text-gray-400">
              <li><Link href="/packs" className="hover:text-white">Packs</Link></li>
              <li><Link href="/about" className="hover:text-white">À propos</Link></li>
              <li><Link href="/faq" className="hover:text-white">FAQ</Link></li>
              <li><Link href="/contact" className="hover:text-white">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Catégories</h4>
            <ul className="space-y-2 text-gray-400">
              <li><Link href="/packs/1" className="hover:text-white">Pack Enfants</Link></li>
              <li className="text-gray-500">Événementiel (bientôt)</li>
              <li className="text-gray-500">Anniversaire (bientôt)</li>
              <li className="text-gray-500">Sport (bientôt)</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Légal</h4>
            <ul className="space-y-2 text-gray-400">
              <li><Link href="/privacy" className="hover:text-white">Politique de confidentialité</Link></li>
              <li><Link href="/terms" className="hover:text-white">Conditions générales</Link></li>
              <li><Link href="/cookies" className="hover:text-white">Politique des cookies</Link></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} HelloJaiSoif. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
}

