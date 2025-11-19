import React from 'react';
import { Helmet } from 'react-helmet-async';
import { SEOProps } from '../types';

export const SEO: React.FC<SEOProps> = ({ title, description, canonicalUrl }) => {
  const siteTitle = "InteriorGlanz Nürnberg - Premium Autoaufbereitung";
  // Only append site title if it's not already part of the title
  const fullTitle = title.includes('InteriorGlanz') ? title : `${title} | ${siteTitle}`;

  // Enhanced Local Business Schema
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "AutoBodyShop",
    "name": "InteriorGlanz Autoaufbereitung",
    "image": [
       "https://images.unsplash.com/photo-1601362840469-51e4d8d58785"
    ],
    "@id": "https://interiorglanz.de",
    "url": "https://interiorglanz.de",
    "telephone": "+491234567890",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Musterstraße 1",
      "addressLocality": "Nürnberg",
      "postalCode": "90402",
      "addressCountry": "DE"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 49.4521,
      "longitude": 11.0767
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday"
      ],
      "opens": "08:00",
      "closes": "18:00"
    },
    "priceRange": "$$",
    "description": description,
    "areaServed": {
      "@type": "City",
      "name": "Nürnberg"
    },
    "sameAs": [
      "https://facebook.com/interiorglanz",
      "https://instagram.com/interiorglanz"
    ]
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
      
      <meta name="keywords" content="Autoaufbereitung Nürnberg, Autoreinigung Nürnberg, Fahrzeugaufbereitung, Innenraumreinigung Auto, Lackpolitur Nürnberg, Keramikversiegelung Auto" />

      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
    </Helmet>
  );
};