import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const enfants = await prisma.category.upsert({
    where: { slug: 'enfants' },
    update: {},
    create: { name: 'Enfants', slug: 'enfants', active: true },
  });

  const pack = await prisma.pack.upsert({
    where: { slug: 'pack-enfants' },
    update: {},
    create: {
      name: 'Pack Enfants',
      slug: 'pack-enfants',
      description: 'Pack Enfants disponible dès maintenant. Livraison Île-de-France en 48h.',
      categoryId: enfants.id,
      price: 5499,
      images: [],
      weight: '2.5 kg',
      volume: '3.2 L',
      stock: 100,
      items: {
        create: [
          { brand: 'Capri-Sun', productName: 'Jus de fruits tropical', format: '20 cl', ingredients: 'Eau, jus...', allergens: 'Aucun', nutrition: JSON.stringify({energy:'42 kcal/100ml'}), qty: 8 },
          { brand: 'Évian', productName: 'Eau minérale', format: '33 cl', ingredients: 'Eau', allergens: 'Aucun', nutrition: JSON.stringify({calcium:'78mg/L'}), qty: 6 },
        ],
      },
    },
  });

  console.log('Seeded:', { category: enfants.slug, pack: pack.slug });
}

main().finally(async () => {
  await prisma.$disconnect();
});

