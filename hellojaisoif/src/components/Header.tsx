"use client";

import Link from "next/link";
import { ShoppingBag } from "lucide-react";
import { useCartStore } from "../store/cart";

export default function Header() {
  const cartItemCount = useCartStore((state) => state.items.reduce((sum, item) => sum + item.quantity, 0));

  return (
    <header className="bg-white shadow-sm border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0">
              <h1 className="text-2xl font-bold text-blue-600">HelloJaiSoif</h1>
            </Link>
          </div>
          <nav className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link href="/" className="text-gray-900 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">
                Accueil
              </Link>
              <Link href="/packs" className="text-gray-500 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">
                Packs
              </Link>
              <Link href="/about" className="text-gray-500 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">
                À propos
              </Link>
              <Link href="/faq" className="text-gray-500 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">
                FAQ
              </Link>
              <Link href="/contact" className="text-gray-500 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">
                Contact
              </Link>
              <Link href="/account" className="text-gray-500 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">
                Mon compte
              </Link>
            </div>
          </nav>
          <div className="flex items-center">
            <Link href="/cart" className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm font-medium flex items-center">
              <ShoppingBag className="h-4 w-4 mr-2" />
              Panier ({cartItemCount})
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

