import type { Metadata, Viewport } from "next";
import "./globals.css";

export const viewport: Viewport = {
  themeColor: "#1e3a8a",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://adarshenglishschool.com"),
  title: {
    default: "Adarsh English Higher Secondary School | Nahargarh, Mandsaur (M.P.)",
    template: "%s | Adarsh English H.S. School Nahargarh",
  },
  description:
    "Adarsh Senior Secondary English School, Nahargarh, Tehsil Sitamau, Dist. Mandsaur (M.P.) — 458558. Premier English medium education from Nursery to Class 12th (Science PCM/PCB & Commerce). Estd. 1997 • Reg. 1704/97 • MP Board Code: 412109 • U-DISE: 23190800112. Founder & Principal: Shri Vijay Narayan Sharma. Helpline / WhatsApp: +91 99934 46271 (8:00 AM – 8:00 PM). Admissions Open 2026–27.",
  applicationName: "Adarsh English H.S. School",
  authors: [
    {
      name: "Shri Vijay Narayan Sharma (Founder & Principal)",
      url: "https://www.instagram.com/vijay_narayan_1972/",
    },
  ],
  keywords: [
    "Adarsh English School Nahargarh",
    "Adarsh English Higher Secondary School",
    "आदर्श इंग्लिश हायर सेकंडरी स्कूल नाहरगढ़",
    "Vijay Narayan Sharma Nahargarh",
    "Best School in Nahargarh Mandsaur",
    "English Medium School Sitamau",
    "MP Board School 412109",
    "School Admission 2026-27",
    "Nursery to Class 12th Mandsaur",
    "Science PCM PCB Commerce Nahargarh",
    "567P+W9P Nahargarh",
    "9993446271",
  ],
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.png", type: "image/png", sizes: "192x192" },
      { url: "/icon-192.png", type: "image/png", sizes: "192x192" },
      { url: "/icon-512.png", type: "image/png", sizes: "512x512" },
    ],
    shortcut: ["/favicon.ico"],
    apple: [
      { url: "/apple-icon.png", sizes: "180x180", type: "image/png" },
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  manifest: "/manifest.json",
  openGraph: {
    type: "website",
    locale: "hi_IN",
    alternateLocale: ["en_IN"],
    url: "https://adarshenglishschool.com",
    siteName: "Adarsh English Higher Secondary School Nahargarh",
    title: "Adarsh English Higher Secondary School | Admissions Open 2026–27",
    description:
      "Premier English Medium Education from Nursery to 12th (Science & Commerce) in Nahargarh, Dist. Mandsaur (M.P.). Estd. 1997 • MP Board Code 412109. Helpline: +91 99934 46271 (Daily 8:00 AM – 8:00 PM).",
    images: [
      {
        url: "/school/gallery/school_insta_2.webp",
        width: 1200,
        height: 630,
        alt: "Adarsh English Higher Secondary School Nahargarh Campus Assembly",
      },
      {
        url: "/school/school_logo.jpg",
        width: 400,
        height: 400,
        alt: "Adarsh English School Official Emblem",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Adarsh English Higher Secondary School | Nahargarh (M.P.)",
    description:
      "Admissions Open 2026–27 • Nursery to Class 12th. Founder: Shri Vijay Narayan Sharma. WhatsApp/Call: +91 99934 46271 (8 AM to 8 PM).",
    images: ["/school/gallery/school_insta_2.webp"],
  },
  robots: {
    index: false,
    follow: false,
    googleBot: {
      index: false,
      follow: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://adarshenglishschool.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Schema.org Structured Data (School / EducationalOrganization)
  const schoolSchema = {
    "@context": "https://schema.org",
    "@type": "School",
    name: "Adarsh English Higher Secondary School",
    alternateName: "आदर्श इंग्लिश हायर सेकंडरी स्कूल, नाहरगढ़",
    url: "https://adarshenglishschool.com",
    logo: "https://adarshenglishschool.com/school/school_logo.jpg",
    image: "https://adarshenglishschool.com/school/gallery/school_insta_2.webp",
    description:
      "Premier English Medium Higher Secondary School in Nahargarh, Sitamau, Mandsaur (M.P.) offering Nursery to Class 12th education in Science & Commerce streams. Estd. 1997.",
    telephone: "+919993446271",
    priceRange: "₹₹",
    foundingDate: "1997",
    founder: {
      "@type": "Person",
      name: "Shri Vijay Narayan Sharma",
      jobTitle: "Founder & Principal",
      sameAs: "https://www.instagram.com/vijay_narayan_1972/",
    },
    address: {
      "@type": "PostalAddress",
      streetAddress: "Plus Code 567P+W9P, Nahargarh",
      addressLocality: "Nahargarh, Tehsil Sitamau",
      addressRegion: "Madhya Pradesh",
      postalCode: "458558",
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "24.1691",
      longitude: "75.3688",
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ],
        opens: "08:00",
        closes: "15:30",
      },
    ],
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+919993446271",
      contactType: "Admissions Helpline",
      areaServed: "IN",
      availableLanguage: ["Hindi", "English"],
      hoursAvailable: {
        "@type": "OpeningHoursSpecification",
        opens: "08:00",
        closes: "20:00",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
      },
    },
    sameAs: [
      "https://www.instagram.com/adarsh_english_h.s.school/",
      "https://www.instagram.com/vijay_narayan_1972/",
    ],
  };

  return (
    <html lang="hi" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schoolSchema) }}
        />
      </head>
      <body className="min-h-screen bg-[#f8fafc] text-slate-900 antialiased selection:bg-amber-500 selection:text-white font-sans text-base">
        {children}
      </body>
    </html>
  );
}
