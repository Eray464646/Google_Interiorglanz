import React from 'react';
import { Helmet } from 'react-helmet-async';
import { SEOProps } from '../types';
import { FAQ_ITEMS } from '../constants';

export const SEO: React.FC<SEOProps> = ({ title, description, canonicalUrl }) => {
  const siteTitle = "InteriorGlanz Nürnberg";
  // Only append site title if it's not already part of the title
  const fullTitle = title.includes('InteriorGlanz') ? title : `${title} | ${siteTitle}`;

  // Enhanced Local Business Schema for "Autoaufbereitung Nürnberg"
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "AutoBodyShop",
    "name": "InteriorGlanz Mobile Autoaufbereitung Nürnberg",
    "image": [
       "https://images.unsplash.com/photo-1601362840469-51e4d8d58785"
    ],
    "@id": "https://interiorglanz.de",
    "url": "https://interiorglanz.de",
    "telephone": "+491709095730",
    "email": "info@interiorglanz.de",
    "priceRange": "€€",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Nürnberg",
      "postalCode": "90402",
      "addressCountry": "DE"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 49.4521,
      "longitude": 11.0767
    },
    "areaServed": [
      {
        "@type": "City",
        "name": "Nürnberg"
      },
      {
        "@type": "City",
        "name": "Fürth"
      },
      {
        "@type": "City",
        "name": "Erlangen"
      }
    ],
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
      ],
      "opens": "08:00",
      "closes": "18:00"
    },
    "description": description,
    "sameAs": [
      "https://facebook.com/interiorglanz",
      "https://instagram.com/interiorglanz"
    ]
  };

  // FAQPage Schema for better Google Rich Snippets
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": FAQ_ITEMS.map(item => ({
      "@type": "Question",
      "name": item.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.answer
      }
    }))
  };

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonicalUrl || "https://interiorglanz.de"} />
      
      <meta property="og:site_name" content="InteriorGlanz Nürnberg" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:locale" content="de_DE" />
      <meta property="og:image" content="https://images.unsplash.com/photo-1601362840469-51e4d8d58785?q=80&w=1200" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      
      <meta name="keywords" content="Autoreinigung Nürnberg, Autoaufbereitung Nürnberg, Mobile Autopflege, Innenraumreinigung Auto, Lackpolitur Nürnberg, Keramikversiegelung, Fahrzeugaufbereitung Vor Ort, Mobile Autoreinigung" />

      {/* Local Business Schema */}
      <script type="application/ld+json">
        {JSON.stringify(localBusinessSchema)}
      </script>
      
      {/* FAQ Schema */}
      <script type="application/ld+json">
        {JSON.stringify(faqSchema)}
      </script>
    </Helmet>
  );
};