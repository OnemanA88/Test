'use client';

import { useState } from 'react';

import Link from "next/link";
import { 
  Filter, 
  Search, 
  ShoppingBag,
  Package,
  Users,
  Calendar,
  Trophy,
  Building,
  GraduationCap,
  Sparkles
} from "lucide-react";

// Mock data for packs
const mockPacks = [
  {
    id: 1,
    name: "Pack Enfants",
    category: "enfants",
    price: 54.99,
    image: "/api/placeholder/300/200",
    description: "Boissons adaptées aux plus jeunes, sans additifs nocifs",
    available: true,
    popular: true
  },
  {
    id: 2,
    name: "Pack Événementiel Standard",
    category: "evenementiel",
    price: 89.99,
    image: "/api/placeholder/300/200",
    description: "Parfait pour vos événements et rassemblements",
    available: false,
    popular: false
  },
  {
    id: 3,
    name: "Pack Anniversaire Festif",
    category: "anniversaire",
    price: 69.99,
    image: "/api/placeholder/300/200",
    description: "Célébrez en grand avec nos packs festifs",
    available: false,
    popular: true
  },
  {
    id: 4,
    name: "Pack Sport Performance",
    category: "sport",
    price: 79.99,
    image: "/api/placeholder/300/200",
    description: "Boissons énergisantes pour vos activités sportives",
    available: false,
    popular: false
  },
  {
    id: 5,
    name: "Pack Entreprise Premium",
    category: "entreprise",
    price: 129.99,
    image: "/api/placeholder/300/200",
    description: "Solution professionnelle pour vos réunions",
    available: false,
    popular: false
  },
  {
    id: 6,
    name: "Pack Scolarité",
    category: "scolarite",
    price: 45.99,
    image: "/api/placeholder/300/200",
    description: "Boissons saines pour les sorties scolaires",
    available: false,
    popular: false
  }
];

const categories = [
  { id: 'all', name: 'Toutes les catégories', icon: Package },
  { id: 'enfants', name: 'Enfants', icon: Package },
  { id: 'evenementiel', name: 'Événementiel', icon: Users },
  { id: 'anniversaire', name: 'Anniversaire', icon: Calendar },
  { id: 'sport', name: 'Sport', icon: Trophy },
  { id: 'entreprise', name: 'Entreprise', icon: Building },
  { id: 'scolarite', name: 'Scolarité', icon: GraduationCap },
  { id: 'edition-limitee', name: 'Éditions limitées', icon: Sparkles }
];

export default function PacksPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('popular');
  const [showAvailableOnly, setShowAvailableOnly] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  const filteredPacks = mockPacks.filter(pack => {
    const matchesCategory = selectedCategory === 'all' || pack.category === selectedCategory;
    const matchesAvailability = !showAvailableOnly || pack.available;
    const matchesSearch = pack.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         pack.description.toLowerCase().includes(searchTerm.toLowerCase());
    
    return matchesCategory && matchesAvailability && matchesSearch;
  });

  const sortedPacks = [...filteredPacks].sort((a, b) => {
    switch (sortBy) {
      case 'price-asc':
        return a.price - b.price;
      case 'price-desc':
        return b.price - a.price;
      case 'name':
        return a.name.localeCompare(b.name);
      case 'popular':
      default:
        return b.popular ? 1 : -1;
    }
  });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header moved to layout */}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Nos Packs de Boissons</h1>
          <p className="text-lg text-gray-600">
            Découvrez notre sélection de packs adaptés à tous vos besoins
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Filters */}
          <div className="lg:w-1/4">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                <Filter className="h-5 w-5 mr-2" />
                Filtres
              </h3>

              {/* Search */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Rechercher
                </label>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Nom du pack..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
              </div>

              {/* Categories */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Catégorie
                </label>
                <div className="space-y-2">
                  {categories.map((category) => {
                    const Icon = category.icon;
                    return (
                      <button
                        key={category.id}
                        onClick={() => setSelectedCategory(category.id)}
                        className={`w-full text-left px-3 py-2 rounded-md text-sm flex items-center transition-colors ${
                          selectedCategory === category.id
                            ? 'bg-blue-100 text-blue-700'
                            : 'text-gray-600 hover:bg-gray-100'
                        }`}
                      >
                        <Icon className="h-4 w-4 mr-2" />
                        {category.name}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Availability */}
              <div className="mb-6">
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    checked={showAvailableOnly}
                    onChange={(e) => setShowAvailableOnly(e.target.checked)}
                    className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                  />
                  <span className="ml-2 text-sm text-gray-700">
                    Disponibles uniquement
                  </span>
                </label>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:w-3/4">
            {/* Sort and Results Count */}
            <div className="flex justify-between items-center mb-6">
              <p className="text-gray-600">
                {sortedPacks.length} pack{sortedPacks.length > 1 ? 's' : ''} trouvé{sortedPacks.length > 1 ? 's' : ''}
              </p>
              <div className="flex items-center space-x-4">
                <label className="text-sm text-gray-700">Trier par:</label>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="border border-gray-300 rounded-md px-3 py-1 text-sm focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value="popular">Popularité</option>
                  <option value="price-asc">Prix croissant</option>
                  <option value="price-desc">Prix décroissant</option>
                  <option value="name">Nom A-Z</option>
                </select>
              </div>
            </div>

            {/* Products Grid */}
            <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
              {sortedPacks.map((pack) => (
                <div key={pack.id} className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow">
                  <div className="relative">
                    <div className="w-full h-48 bg-gradient-to-br from-blue-100 to-green-100 flex items-center justify-center">
                      <Package className="h-16 w-16 text-blue-600" />
                    </div>
                    {pack.popular && (
                      <div className="absolute top-2 left-2 bg-orange-500 text-white px-2 py-1 rounded-md text-xs font-medium">
                        Populaire
                      </div>
                    )}
                    {!pack.available && (
                      <div className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded-md text-xs font-medium">
                        Indisponible
                      </div>
                    )}
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-blue-600 font-medium capitalize">
                        {pack.category}
                      </span>
                      <span className="text-2xl font-bold text-gray-900">
                        {pack.price.toFixed(2)} €
                      </span>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {pack.name}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4">
                      {pack.description}
                    </p>
                    <Link
                      href={`/packs/${pack.id}`}
                      className={`w-full py-2 px-4 rounded-md font-medium text-center inline-block transition-colors ${
                        pack.available
                          ? 'bg-blue-600 hover:bg-blue-700 text-white'
                          : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                      }`}
                    >
                      {pack.available ? 'Voir le pack' : 'Indisponible'}
                    </Link>
                  </div>
                </div>
              ))}
            </div>

            {sortedPacks.length === 0 && (
              <div className="text-center py-12">
                <Package className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                <h3 className="text-lg font-medium text-gray-900 mb-2">
                  Aucun pack trouvé
                </h3>
                <p className="text-gray-600">
                  Essayez de modifier vos filtres ou votre recherche
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

