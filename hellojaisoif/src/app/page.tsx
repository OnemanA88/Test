
import Link from "next/link";
import { 
  ShoppingBag, 
  Shield, 
  Eye, 
  Truck, 
  RotateCcw, 
  Headphones,
  Star,
  ArrowRight,
  Package,
  Users,
  Calendar
} from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header moved to layout */}

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-green-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Des packs boissons prêts à partager,
              <span className="text-blue-600"> livrés rapidement</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Découvrez nos packs de boissons soigneusement sélectionnés pour tous vos moments : 
              enfants, événements, anniversaires et bien plus encore.
            </p>
            <Link 
              href="/packs/1"
              className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg text-lg font-semibold inline-flex items-center transition-colors"
            >
              Découvrir le Pack Enfants
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* USP Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <ShoppingBag className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Pratique</h3>
                <p className="text-gray-600">
                  Des packs pr&ecirc;ts &agrave; l&apos;emploi pour tous vos besoins. Plus besoin de chercher, 
                  tout est d&eacute;j&agrave; s&eacute;lectionn&eacute; pour vous.
                </p>
            </div>
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Eye className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Transparence</h3>
                <p className="text-gray-600">
                  Ingr&eacute;dients, allerg&egrave;nes et valeurs nutritionnelles clairement indiqu&eacute;s 
                  pour chaque produit de nos packs.
                </p>
            </div>
            <div className="text-center">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Sécurité</h3>
                <p className="text-gray-600">
                  Paiements s&eacute;curis&eacute;s avec Stripe et PayPal. Vos donn&eacute;es sont prot&eacute;g&eacute;es 
                  selon les standards les plus &eacute;lev&eacute;s.
                </p>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Nos catégories populaires</h2>
            <p className="text-lg text-gray-600">
              Trouvez le pack parfait pour chaque occasion
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <div className="bg-gradient-to-br from-yellow-100 to-orange-100 p-8 text-center">
                <Package className="h-12 w-12 text-orange-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Pack Enfants</h3>
                <p className="text-gray-600 mb-4">
                      Boissons adapt&eacute;es aux plus jeunes, sans additifs nocifsifs
                </p>
                <span className="text-2xl font-bold text-orange-600">54,99 €</span>
              </div>
              <div className="p-6">
                <Link 
                  href="/packs/enfants"
                  className="w-full bg-orange-500 hover:bg-orange-600 text-white py-2 px-4 rounded-md font-medium inline-block text-center transition-colors"
                >
                  Découvrir
                </Link>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <div className="bg-gradient-to-br from-blue-100 to-purple-100 p-8 text-center">
                <Users className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Pack Événementiel</h3>
                <p className="text-gray-600 mb-4">
                  Parfait pour vos événements et rassemblements
                </p>
                <span className="text-2xl font-bold text-blue-600">Bientôt disponible</span>
              </div>
              <div className="p-6">
                <Link 
                  href="/packs/evenementiel"
                  className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md font-medium inline-block text-center transition-colors"
                >
                  Découvrir
                </Link>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <div className="bg-gradient-to-br from-pink-100 to-red-100 p-8 text-center">
                <Calendar className="h-12 w-12 text-pink-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Pack Anniversaire</h3>
                <p className="text-gray-600 mb-4">
                  Célébrez en grand avec nos packs festifs
                </p>
                <span className="text-2xl font-bold text-pink-600">Bientôt disponible</span>
              </div>
              <div className="p-6">
                <Link 
                  href="/packs/anniversaire"
                  className="w-full bg-pink-500 hover:bg-pink-600 text-white py-2 px-4 rounded-md font-medium inline-block text-center transition-colors"
                >
                  Découvrir
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reassurance Banner */}
      <section className="py-12 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="flex items-center justify-center">
              <Truck className="h-8 w-8 text-blue-200 mr-3" />
              <div className="text-left">
                <h3 className="text-white font-semibold">Livraison rapide</h3>
                <p className="text-blue-200 text-sm">Expédition sous 24-48h</p>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <RotateCcw className="h-8 w-8 text-blue-200 mr-3" />
              <div className="text-left">
                <h3 className="text-white font-semibold">Retours faciles</h3>
                <p className="text-blue-200 text-sm">30 jours pour changer d'avis</p>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <Headphones className="h-8 w-8 text-blue-200 mr-3" />
              <div className="text-left">
                <h3 className="text-white font-semibold">Support client</h3>
                <p className="text-blue-200 text-sm">Équipe disponible 7j/7</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Ce que disent nos clients</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-4">
                                "Parfait pour l&apos;anniversaire de ma fille ! Les boissons &eacute;taient vari&eacute;es et de qualit&eacute;. 
                Livraison ultra rapide."
              </p>
              <p className="font-semibold text-gray-900">Marie L.</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-4">
                                "Id&eacute;al pour notre &eacute;v&eacute;nement d&apos;entreprise. La transparence sur les ingr&eacute;dients 
                nous a convaincus."
              </p>
              <p className="font-semibold text-gray-900">Thomas R.</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-4">
                                "Service client au top et packs vraiment pratiques. Je recommande vivement !"
              </p>
              <p className="font-semibold text-gray-900">Sophie M.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer moved to layout */}
    </div>
  );
}

