import { Car, Sparkles, ShieldCheck, Droplets, Zap, Clock } from 'lucide-react';
import { ServiceItem, PricingTier } from './types';

export const CONTACT_INFO = {
  phone: "+49 123 4567890", // Placeholder - user should update
  email: "info@interiorglanz.de",
  address: "Musterstraße 1, 90402 Nürnberg",
  city: "Nürnberg"
};

export const SERVICES: ServiceItem[] = [
  {
    id: 'innenraum',
    title: 'Innenraumreinigung',
    description: 'Tiefenreinigung der Polster, Teppiche und Armaturen. Entfernung von Flecken und unangenehmen Gerüchen für ein Neuwagen-Gefühl.',
    icon: Car,
    priceStart: 'ab 89€'
  },
  {
    id: 'politur',
    title: 'Lackaufbereitung & Politur',
    description: 'Entfernung von Kratzern und Hologrammen. Hochglanzpolitur für perfekten Spiegelglanz Ihres Fahrzeugs.',
    icon: Sparkles,
    priceStart: 'ab 149€'
  },
  {
    id: 'keramik',
    title: 'Keramikversiegelung',
    description: 'Langzeitschutz für Ihren Lack. Wasserabweisend, schmutzabweisend und extrem widerstandsfähig gegen Umwelteinflüsse.',
    icon: ShieldCheck,
    priceStart: 'ab 299€'
  },
  {
    id: 'polster',
    title: 'Polster- & Lederpflege',
    description: 'Schonende Reinigung und Pflege von Ledersitzen und Stoffpolstern. Rückfettung für geschmeidiges Leder.',
    icon: Droplets,
    priceStart: 'ab 69€'
  },
  {
    id: 'express',
    title: 'Express Wäsche',
    description: 'Schnelle und gründliche Handwäsche für zwischendurch. Innen und außen in unter 60 Minuten.',
    icon: Zap,
    priceStart: 'ab 49€'
  },
  {
    id: 'leasing',
    title: 'Leasingrückgabe',
    description: 'Vermeiden Sie hohe Nachzahlungen. Wir bereiten Ihr Fahrzeug perfekt für die Rückgabe an das Autohaus vor.',
    icon: Clock,
    priceStart: 'auf Anfrage'
  }
];

export const PRICING_PACKAGES: PricingTier[] = [
  {
    name: "Basis Glanz",
    price: "89€",
    description: "Perfekt für die regelmäßige Pflege zwischendurch.",
    features: [
      "Handwäsche Außen",
      "Felgenreinigung",
      "Staubsaugen Innenraum",
      "Scheibenreinigung",
      "Cockpit abwischen"
    ]
  },
  {
    name: "Premium Tiefenreinigung",
    price: "179€",
    description: "Unser Bestseller für sichtbar saubere Ergebnisse.",
    recommended: true,
    features: [
      "Alles aus Basis Glanz",
      "Intensiv-Polsterreinigung",
      "Lederpflege",
      "Hochglanzpolitur (1 Stufe)",
      "Kunststoffpflege Außen",
      "Geruchsneutralisierung"
    ]
  },
  {
    name: "High-End Detailing",
    price: "349€",
    description: "Das Rundum-Sorglos-Paket für Liebhaber.",
    features: [
      "Alles aus Premium",
      "Lackdefektkorrektur",
      "Keramikversiegelung (1 Jahr)",
      "Motorraumreinigung",
      "Dachhimmelreinigung",
      "Cabrioverdeck Imprägnierung"
    ]
  }
];