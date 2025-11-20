import { Car, Sparkles, ShieldCheck, Droplets, Zap, Clock } from 'lucide-react';
import { ServiceItem, PricingTier, AddonItem, FAQItem } from './types';

export const CONTACT_INFO = {
  phone: "0170 909 57 30", 
  email: "info@interiorglanz.de",
  address: "Nürnberg & Umgebung",
  city: "Nürnberg"
};

export const SERVICES: ServiceItem[] = [
  {
    id: 'innenraum',
    title: 'Innenraumreinigung',
    description: 'Tiefenreinigung der Polster, Teppiche und Armaturen. Entfernung von Flecken und unangenehmen Gerüchen.',
    icon: Car,
    priceStart: 'ab 59,90€'
  },
  {
    id: 'politur',
    title: 'Lackaufbereitung',
    description: 'Schonende Handwäsche und Lackpflege für strahlenden Glanz und Werterhalt.',
    icon: Sparkles,
    priceStart: 'ab 149€'
  },
  {
    id: 'keramik',
    title: 'Keramikversiegelung',
    description: 'Langzeitschutz für Ihren Lack. Wasserabweisend, schmutzabweisend und extrem widerstandsfähig.',
    icon: ShieldCheck,
    priceStart: 'ab 49,90€'
  },
  {
    id: 'polster',
    title: 'Polster- & Lederpflege',
    description: 'Schonende Reinigung und Pflege von Ledersitzen und Stoffpolstern.',
    icon: Droplets,
    priceStart: 'im Paket'
  },
  {
    id: 'ozon',
    title: 'Geruchsneutralisierung',
    description: 'Ozonbehandlung gegen hartnäckige Gerüche, Bakterien und Keime.',
    icon: Zap,
    priceStart: '49,90€'
  },
  {
    id: 'leasing',
    title: 'Leasingrückgabe',
    description: 'Wir bereiten Ihr Fahrzeug perfekt für die Rückgabe vor, um Nachzahlungen zu vermeiden.',
    icon: Clock,
    priceStart: 'auf Anfrage'
  }
];

export const ADDONS: AddonItem[] = [
  {
    title: "Keramikversiegelung",
    price: "49,90€",
    description: "Verleihen Sie Ihrem Fahrzeug den ultimativen Schutz. Schützt bis zu 4 Monate vor Schmutz, UV-Strahlung und Umwelteinflüssen. Der Abperleffekt sorgt für langanhaltenden Glanz.",
    duration: "+30 Minuten",
    note: "Nur in Kombination mit der Außenwäsche Deluxe buchbar."
  },
  {
    title: "Ozonbehandlung",
    price: "49,90€",
    description: "Neutralisiert hartnäckige Gerüche, Bakterien und Schimmelsporen im Innenraum. Ideal für Raucherfahrzeuge oder Allergiker.",
    duration: "+ 1 Stunde",
    note: "Nur in Kombination mit Innenreinigung Premium/Deluxe buchbar."
  }
];

export const PRICING_PACKAGES: PricingTier[] = [
  {
    name: "Komplettpaket Deluxe",
    price: "249€",
    originalPrice: "279€",
    description: "Innen- & Außenaufbereitung auf höchstem Niveau. Unser Bestseller.",
    recommended: true,
    duration: "ca. 5 - 6 Std.",
    features: [
      "Komplette Innenreinigung Deluxe",
      "Komplette Außenwäsche Deluxe",
      "Lackschonende Handwäsche",
      "Intensive Tiefenpflege aller Materialien",
      "Perfekt für Leasingrückläufer & Verkauf"
    ]
  },
  {
    name: "Außenwäsche Deluxe",
    price: "149€",
    description: "Intensive Außenreinigung für den perfekten Glanz.",
    features: [
      "Aktivschaum-Vorreinigung",
      "Handwäsche mit pH-neutralem Shampoo",
      "Felgenreinigung mit Spezialreiniger",
      "Streifenfreie Trocknung (Mikrofaser)",
      "Detailreinigung (Türfalzen, Tankdeckel)"
    ]
  },
  {
    name: "Innenreinigung Deluxe",
    price: "129,90€",
    description: "Rundum-Pflege auf höchstem Niveau.",
    features: [
      "Alle Leistungen aus Premium",
      "Materialpflege für Leder, Alcantara & Textil",
      "Schutz & Versiegelung empfindlicher Bereiche",
      "Versiegelung der Scheiben",
      "Gummipflege im Innenraum"
    ]
  },
  {
    name: "Innenreinigung Premium",
    price: "89,90€",
    description: "Tiefenreinigung für besonderen Komfort.",
    features: [
      "Alle Leistungen aus Basic",
      "Intensive Reinigung der Sitze & Polster",
      "Gründliche Reinigung aller Kunststoffoberflächen",
      "Reinigung von Lüftungsschlitzen",
      "Entfernung von Flecken (Sitze/Teppiche)"
    ]
  },
  {
    name: "Innenreinigung Basic",
    price: "59,90€",
    description: "Die gründliche Basisreinigung für zwischendurch.",
    features: [
      "Gründliches Saugen des Kofferraums",
      "Saugen der Fußmatten & des Fußraums",
      "Entstauben aller Oberflächen",
      "Reinigung aller Scheiben (innen)",
      "Saugen der Sitze"
    ]
  }
];

export const FAQ_ITEMS: FAQItem[] = [
  {
    question: "Was kostet eine mobile Autoreinigung in Nürnberg?",
    answer: "Die Kosten variieren je nach gewähltem Paket und Fahrzeugzustand. Unsere Innenreinigung startet ab 59,90€, die Außenwäsche Deluxe liegt bei 149€. Für das Komplettpaket Deluxe berechnen wir 249€. Alle Preise sind transparent und fair."
  },
  {
    question: "Wie lange dauert eine professionelle Autoaufbereitung?",
    answer: "Die Dauer hängt vom gewählten Leistungsumfang ab. Eine Basis-Innenreinigung dauert etwa 1,5 bis 2 Stunden. Unser umfangreiches Komplettpaket Deluxe beansprucht ca. 5 bis 6 Stunden für ein perfektes Ergebnis."
  },
  {
    question: "Kommt ihr zu mir nach Hause oder ins Büro?",
    answer: "Ja, wir sind ein zu 100% mobiler Service für Autoreinigung in Nürnberg und Umgebung. Wir kommen direkt zu Ihrem Wunschort – egal ob Privathaus, Firmenparkplatz oder Garage."
  },
  {
    question: "Muss ich Wasser und Strom bereitstellen?",
    answer: "Nein, unser Service-Fahrzeug ist voll ausgestattet ('autark'). Wir haben Strom und Wasser an Bord. Sollte ein Anschluss vor Ort verfügbar sein, nutzen wir diesen gerne, es ist jedoch keine Voraussetzung."
  },
  {
    question: "Welche Leistungen kann ich kombinieren?",
    answer: "Sie können alle Pakete flexibel buchen. Beliebt ist die Kombination aus Innenreinigung Deluxe und einer Ozonbehandlung zur Geruchsneutralisierung. Auch Keramikversiegelungen können als Upgrade zur Außenwäsche gebucht werden."
  },
  {
    question: "Ist die Anfahrt in Nürnberg wirklich kostenlos?",
    answer: "Ja, innerhalb des Stadtgebiets Nürnberg berechnen wir keine Anfahrtskosten. Für umliegende Regionen wie Fürth oder Erlangen sprechen Sie uns bitte für ein individuelles Angebot an."
  }
];