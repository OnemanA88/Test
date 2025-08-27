'use client';

import { useState } from 'react';

import Link from "next/link";
import { useCartStore } from "../../../store/cart";
import { 
  ShoppingBag,
  ArrowLeft,
  Plus,
  Minus,
  Package,
  Truck,
  RotateCcw,
  Shield,
  Info,
  Star
} from "lucide-react";
import ProductJsonLd from "./ProductJsonLd";

// Mock data for pack details
interface PackItem {
  brand: string;
  productName: string;
  format: string;
  quantity: number;
  ingredients: string;
  allergens: string;
  nutrition: { [key: string]: string };
}

interface Pack {
  id: number;
  name: string;
  category: string;
  price: number;
  weight: string;
  volume: string;
  images: string[];
  description: string;
  composition: PackItem[];
  deliveryInfo: { zones: string; delay: string; cost: string };
  returnInfo: { period: string; conditions: string };
}

const mockPackData: { [key: string]: Pack } = {
  '1': {
    id: 1,
    name: "Pack Enfants",
    category: "enfants",
    price: 54.99,
    weight: "2.5 kg",
    volume: "3.2 L",
    images: ["/api/placeholder/600/400", "/api/placeholder/600/400", "/api/placeholder/600/400"],
    description: "Pack Enfants disponible dès maintenant. Livraison Île-de-France en 48h. Boissons adaptées aux plus jeunes, sans additifs nocifs.",
    composition: [
      {
        brand: "Capri-Sun",
        productName: "Jus de fruits tropical",
        format: "20 cl",
        quantity: 8,
        ingredients: "Eau, jus de fruits à base de concentrés (orange, ananas, fruit de la passion), sucre, arômes naturels, vitamine C",
        allergens: "Aucun",
        nutrition: {
          energy: "42 kcal/100ml",
          sugars: "9.8g/100ml",
          sodium: "0.01g/100ml"
        }
      },
      {
        brand: "Évian",
        productName: "Eau minérale naturelle",
        format: "33 cl",
        quantity: 6,
        ingredients: "Eau minérale naturelle",
        allergens: "Aucun",
        nutrition: {
          calcium: "78mg/L",
          magnesium: "24mg/L",
          sodium: "5mg/L"
        }
      },
      {
        brand: "Cristalline",
        productName: "Eau de source",
        format: "33 cl",
        quantity: 6,
        ingredients: "Eau de source",
        allergens: "Aucun",
        nutrition: {
          calcium: "68mg/L",
          magnesium: "18mg/L",
          sodium: "3mg/L"
        }
      },
      {
        brand: "Pressade",
        productName: "Jus de pomme 100% pur jus",
        format: "20 cl",
        quantity: 4,
        ingredients: "100% jus de pomme concentré, vitamine C",
        allergens: "Aucun",
        nutrition: {
          energy: "46 kcal/100ml",
          sugars: "10.5g/100ml",
          vitaminC: "12mg/100ml"
        }
      }
    ],
    deliveryInfo: {
      zones: "France métropolitaine",
      delay: "2-3 jours ouvrés",
      cost: "Gratuite dès 50€ d'achat"
    },
    returnInfo: {
      period: "30 jours",
      conditions: "Produits non ouverts et dans leur emballage d'origine"
    }
  }
};

interface PackPageProps {
  params: {
    id: string;
  };
}

export default function PackPage({ params }: PackPageProps) {
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);
  const addItem = useCartStore((s) => s.addItem);
  
  const pack = mockPackData[params.id];

  if (!pack) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <Package className="h-16 w-16 text-gray-400 mx-auto mb-4" />
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Pack non trouvé</h1>
          <p className="text-gray-600 mb-4">Le pack que vous recherchez n'existe pas.</p>
          <Link href="/packs" className="text-blue-600 hover:text-blue-700">
            Retour aux packs
          </Link>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    addItem({ id: String(pack.id), name: pack.name, price: pack.price, quantity });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <ProductJsonLd id={String(pack.id)} name={pack.name} description={pack.description} price={pack.price} />
      {/* Header moved to layout */}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumb */}
        <div className="flex items-center mb-8">
          <Link href="/packs" className="flex items-center text-blue-600 hover:text-blue-700">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Retour aux packs
          </Link>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Images Gallery */}
          <div>
            <div className="bg-white rounded-lg shadow-sm overflow-hidden mb-4">
              <div className="w-full h-96 bg-gradient-to-br from-blue-100 to-green-100 flex items-center justify-center">
                <Package className="h-32 w-32 text-blue-600" />
              </div>
            </div>
            <div className="grid grid-cols-3 gap-2">
              {pack.images.map((image: string, index: number) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`bg-white rounded-lg shadow-sm overflow-hidden h-24 flex items-center justify-center ${
                    selectedImage === index ? 'ring-2 ring-blue-500' : ''
                  }`}
                >
                  <Package className="h-8 w-8 text-blue-600" />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div>
            <div className="bg-white rounded-lg shadow-sm p-8">
              <div className="mb-6">
                <span className="text-sm text-blue-600 font-medium capitalize">
                  {pack.category}
                </span>
                <h1 className="text-3xl font-bold text-gray-900 mt-2 mb-4">
                  {pack.name}
                </h1>
                <div className="flex items-center mb-4">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <span className="ml-2 text-sm text-gray-600">(24 avis)</span>
                </div>
                <p className="text-gray-600 text-lg leading-relaxed">
                  {pack.description}
                </p>
              </div>

              <div className="mb-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-3xl font-bold text-gray-900">
                    {pack.price.toFixed(2)} € TTC
                  </span>
                  <div className="text-sm text-gray-600">
                    <p>Poids: {pack.weight}</p>
                    <p>Volume: {pack.volume}</p>
                  </div>
                </div>
              </div>

              {/* Quantity Selector */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Quantité
                </label>
                <div className="flex items-center space-x-3">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="p-2 border border-gray-300 rounded-md hover:bg-gray-50"
                  >
                    <Minus className="h-4 w-4" />
                  </button>
                  <span className="text-lg font-medium px-4">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="p-2 border border-gray-300 rounded-md hover:bg-gray-50"
                  >
                    <Plus className="h-4 w-4" />
                  </button>
                </div>
              </div>

              {/* Add to Cart Button */}
              <button
                onClick={handleAddToCart}
                className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 px-6 rounded-lg font-semibold text-lg flex items-center justify-center transition-colors"
              >
                <ShoppingBag className="h-5 w-5 mr-2" />
                Ajouter au panier - {(pack.price * quantity).toFixed(2)} €
              </button>

              {/* Delivery Info */}
              <div className="mt-8 space-y-4">
                <div className="flex items-center text-sm text-gray-600">
                  <Truck className="h-5 w-5 mr-3 text-green-600" />
                  <div>
                    <p className="font-medium">Livraison {pack.deliveryInfo.cost}</p>
                    <p>{pack.deliveryInfo.delay} - {pack.deliveryInfo.zones}</p>
                  </div>
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <RotateCcw className="h-5 w-5 mr-3 text-blue-600" />
                  <div>
                    <p className="font-medium">Retours gratuits</p>
                    <p>{pack.returnInfo.period} - {pack.returnInfo.conditions}</p>
                  </div>
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <Shield className="h-5 w-5 mr-3 text-purple-600" />
                  <div>
                    <p className="font-medium">Paiement sécurisé</p>
                    <p>Stripe et PayPal</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Detailed Composition */}
        <div className="mt-12">
          <div className="bg-white rounded-lg shadow-sm p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <Info className="h-6 w-6 mr-2" />
              Composition détaillée
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {pack.composition.map((item: any, index: number) => (
                <div key={index} className="border border-gray-200 rounded-lg p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-semibold text-gray-900">
                      {item.brand} - {item.productName}
                    </h3>
                    <span className="text-sm bg-blue-100 text-blue-800 px-2 py-1 rounded">
                      {item.quantity}x {item.format}
                    </span>
                  </div>
                  
                  <div className="space-y-3">
                    <div>
                      <h4 className="font-medium text-gray-700 mb-1">Ingrédients:</h4>
                      <p className="text-sm text-gray-600">{item.ingredients}</p>
                    </div>
                    
                    <div>
                      <h4 className="font-medium text-gray-700 mb-1">Allergènes:</h4>
                      <p className="text-sm text-gray-600">{item.allergens}</p>
                    </div>
                    
                    <div>
                      <h4 className="font-medium text-gray-700 mb-1">Valeurs nutritionnelles:</h4>
                      <div className="text-sm text-gray-600 space-y-1">
                        {Object.entries(item.nutrition).map(([key, value]) => (
                          <div key={key} className="flex justify-between">
                            <span className="capitalize">{key.replace(/([A-Z])/g, ' $1').toLowerCase()}:</span>
                            <span>{value as string}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

