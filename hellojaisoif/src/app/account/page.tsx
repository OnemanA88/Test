'use client';

import { useState } from 'react';

export default function AccountPage() {
  const [mode, setMode] = useState<'login' | 'register'>('login');
  return (
    <div className="max-w-md mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">Mon compte</h1>
      <div className="bg-white rounded-lg shadow-sm p-6">
        <div className="flex space-x-4 mb-6">
          <button onClick={() => setMode('login')} className={`px-4 py-2 rounded ${mode==='login'?'bg-blue-600 text-white':'bg-gray-100'}`}>Connexion</button>
          <button onClick={() => setMode('register')} className={`px-4 py-2 rounded ${mode==='register'?'bg-blue-600 text-white':'bg-gray-100'}`}>Inscription</button>
        </div>
        {mode === 'login' ? (
          <form className="space-y-4">
            <input type="email" placeholder="Email" className="w-full border border-gray-300 rounded-md px-3 py-2" />
            <input type="password" placeholder="Mot de passe" className="w-full border border-gray-300 rounded-md px-3 py-2" />
            <button type="button" className="w-full bg-blue-600 text-white py-2 rounded-md">Se connecter</button>
          </form>
        ) : (
          <form className="space-y-4">
            <input type="email" placeholder="Email" className="w-full border border-gray-300 rounded-md px-3 py-2" />
            <input type="password" placeholder="Mot de passe" className="w-full border border-gray-300 rounded-md px-3 py-2" />
            <button type="button" className="w-full bg-blue-600 text-white py-2 rounded-md">Créer un compte</button>
          </form>
        )}
        <p className="text-xs text-gray-500 mt-4">Achat invité autorisé au checkout.</p>
      </div>
    </div>
  );
}

