type Props = {
  id: string;
  name: string;
  description: string;
  price: number;
  currency?: string;
};

export default function ProductJsonLd({ id, name, description, price, currency = 'EUR' }: Props) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name,
    description,
    sku: id,
    offers: {
      '@type': 'Offer',
      priceCurrency: currency,
      price: price.toFixed(2),
      availability: 'https://schema.org/InStock',
    },
    brand: { '@type': 'Brand', name: 'HelloJaiSoif' },
  } as const;

  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
  );
}

