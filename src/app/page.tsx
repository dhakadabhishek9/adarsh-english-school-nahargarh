"use client";

import React, { useState, useEffect } from "react";
// Native SVG Icons (Zero external icon dependencies)
function MapPin({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

function Phone({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

function Clock({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  );
}

function ShieldCheck({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}

function CheckCircle2({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}

function ExternalLink({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M15 3h6v6" />
      <path d="M10 14 21 3" />
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
    </svg>
  );
}

function Menu({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  );
}

function X({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  );
}

function Compass({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" />
    </svg>
  );
}

function Sparkles({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
    </svg>
  );
}

function ArrowRight({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  );
}

function Check({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}

// Clean Instagram SVG Icon
function InstagramIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

// Clean WhatsApp SVG Icon
function WhatsAppIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

// Clean Chevron Left / Right Icons for Slider
function ChevronLeft({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="15 18 9 12 15 6" />
    </svg>
  );
}

function ChevronRight({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="9 18 15 12 9 6" />
    </svg>
  );
}

function GraduationCap({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z" />
      <path d="M22 10v6" />
      <path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5" />
    </svg>
  );
}

function Award({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="8" r="6" />
      <path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526" />
    </svg>
  );
}

function BookOpen({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
      <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
    </svg>
  );
}

function Users({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  );
}

function Building2({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z" />
      <path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2" />
      <path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2" />
      <path d="M10 6h4" />
      <path d="M10 10h4" />
      <path d="M10 14h4" />
      <path d="M10 18h4" />
    </svg>
  );
}

function FlaskConical({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M10 2v7.31L4.69 19.3A2 2 0 0 0 6.44 22h11.12a2 2 0 0 0 1.75-2.7L14 9.31V2" />
      <path d="M8.5 2h7" />
      <path d="M7 16h10" />
    </svg>
  );
}

function Bus({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M8 6v6" />
      <path d="M16 6v6" />
      <path d="M4 12h16" />
      <path d="M4 17h16" />
      <circle cx="7" cy="18" r="2" />
      <path d="M9 18h6" />
      <circle cx="17" cy="18" r="2" />
      <path d="M19 18h1a2 2 0 0 0 2-2V7a3 3 0 0 0-3-3H5a3 3 0 0 0-3 3v9a2 2 0 0 0 2 2h1" />
    </svg>
  );
}

function HeartHandshake({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
      <path d="m12 5 7 7-4 4-5-5-2 2-3-3" />
    </svg>
  );
}

function Trophy({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
      <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
      <path d="M4 22h16" />
      <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" />
      <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" />
      <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z" />
    </svg>
  );
}

function Target({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <circle cx="12" cy="12" r="6" />
      <circle cx="12" cy="12" r="2" />
    </svg>
  );
}

function Stethoscope({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4.5 3v5a4.5 4.5 0 0 0 9 0V3" />
      <path d="M6 3h-3" />
      <path d="M15 3h-3" />
      <path d="M9 12.5v2.5a4 4 0 0 0 4 4h1a4 4 0 0 0 4-4v-1.5" />
      <circle cx="18" cy="10" r="2" />
    </svg>
  );
}

function Briefcase({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="20" height="14" x="2" y="7" rx="2" ry="2" />
      <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
    </svg>
  );
}

// Real images from school's Instagram account (@adarsh_english_h.s.school)
interface GalleryItem {
  id: number;
  titleEn: string;
  titleHi: string;
  category: "all" | "events" | "alumni" | "posters";
  imageUrl: string;
  captionEn: string;
  captionHi: string;
  dateBadgeEn: string;
  dateBadgeHi: string;
}

const realSchoolGallery: GalleryItem[] = [
  {
    id: 1,
    titleEn: "School Assembly & Republic Day Celebrations",
    titleHi: "विद्यालय प्रार्थना सभा एवं 26 जनवरी गणतंत्र दिवस समारोह",
    category: "events",
    imageUrl: "/school/gallery/school_insta_2.webp",
    captionEn:
      "Spacious school building courtyard, morning prayer assembly, and Republic Day celebration in Nahargarh.",
    captionHi:
      "नाहरगढ़ स्थित भव्य विद्यालय प्रांगण, दैनिक प्रार्थना सभा एवं राष्ट्रीय पर्व गणतंत्र दिवस का गरिमामयी आयोजन।",
    dateBadgeEn: "Assembly & Events",
    dateBadgeHi: "प्रार्थना व समारोह",
  },
  {
    id: 2,
    titleEn: "Annual Function & Faculty Felicitation",
    titleHi: "वार्षिक उत्सव मंच एवं शिक्षक सम्मान",
    category: "events",
    imageUrl: "/school/gallery/school_insta_1.webp",
    captionEn:
      "Founder Shri Vijay Narayan Sharma with chief guests, school staff in formal attire, and dignitaries.",
    captionHi:
      "संस्थापक श्री विजय नारायण शर्मा, मुख्य अतिथियों एवं विद्यालय के समर्पित शिक्षक दल के साथ मंच पर।",
    dateBadgeEn: "Annual Celebrations",
    dateBadgeHi: "वार्षिक उत्सव",
  },
  {
    id: 3,
    titleEn: "Student of the Year Award Ceremony 2026",
    titleHi: "स्टूडेंट ऑफ द ईयर 2026 पुरस्कार वितरण",
    category: "events",
    imageUrl: "/school/gallery/school_insta_4.webp",
    captionEn:
      "Founder & Principal Vijay Narayan Sharma presenting the prestigious Student of the Year trophy on stage.",
    captionHi:
      "प्राचार्य श्री विजय नारायण शर्मा द्वारा मेधावी छात्र को 'स्टूडेंट ऑफ द ईयर 2026' शील्ड प्रदान कर सम्मानित किया गया।",
    dateBadgeEn: "Student Honors",
    dateBadgeHi: "छात्र सम्मान",
  },
  {
    id: 4,
    titleEn: "Main 3-Story School Building",
    titleHi: "विद्यालय का भव्य 3-मंजिला भवन एवं परिसर",
    category: "events",
    imageUrl: "/school/gallery/school_insta_3.webp",
    captionEn:
      "Wide balconies, well-ventilated classrooms, and peaceful academic atmosphere for Nursery to 12th standard.",
    captionHi:
      "नाहरगढ़ में स्थित विशाल 3-मंजिला विद्यालय भवन, हवादार कक्षा-कक्ष एवं शांत शैक्षणिक वातावरण।",
    dateBadgeEn: "School Campus",
    dateBadgeHi: "विद्यालय परिसर",
  },
  {
    id: 5,
    titleEn: "Admissions Open 2026–27 Bulletin",
    titleHi: "नवीन प्रवेश प्रारंभ सत्र 2026–27 सूचना पत्र",
    category: "posters",
    imageUrl: "/school/gallery/school_insta_5.jpg",
    captionEn:
      "Creative & interactive learning, caring teachers, safe environment, and child-friendly play amenities.",
    captionHi:
      "रचनात्मक एवं रोचक शिक्षण, अनुभवी शिक्षक, सुरक्षित वातावरण तथा आधुनिक खेल सुविधाएं।",
    dateBadgeEn: "Admissions 2026–27",
    dateBadgeHi: "प्रवेश 2026–27",
  },
  {
    id: 6,
    titleEn: "25+ Years Roll of Honor & Alumni Showcase",
    titleHi: "25+ वर्ष गौरवशाली इतिहास एवं पूर्व छात्र उपलब्धि",
    category: "alumni",
    imageUrl: "/school/gallery/school_insta_7.webp",
    captionEn:
      "Official school bulletin highlighting alumni serving as Army Lieutenants, MBBS Doctors, CAs, and Engineers.",
    captionHi:
      "संस्था को गौरवान्वित करने वाले पूर्व विद्यार्थी - आर्मी लेफ्टिनेंट, MBBS डॉक्टर्स, CA, इंजीनियर्स एवं कलाकार।",
    dateBadgeEn: "Hall of Fame",
    dateBadgeHi: "गौरव गाथा",
  },
  {
    id: 7,
    titleEn: "School Alumnus Commissioned into Armed Forces",
    titleHi: "भारतीय सेना में चयनित विद्यालय के गौरवशाली पूर्व छात्र",
    category: "alumni",
    imageUrl: "/school/gallery/school_insta_6.webp",
    captionEn:
      "Adarsh English School alumnus Cadet / Lieutenant Kanishk Mod in Indian Armed Forces parade uniform.",
    captionHi:
      "आदर्श इंग्लिश स्कूल के पूर्व छात्र कनिष्क मोड़ भारतीय सेना (लेफ्टिनेंट) की दीक्षांत परेड वेशभूषा में।",
    dateBadgeEn: "Indian Army Alumnus",
    dateBadgeHi: "भारतीय सेना गौरव",
  },
];

// Hall of fame alumni from official school poster
interface AlumniProfile {
  nameEn: string;
  nameHi: string;
  roleEn: string;
  roleHi: string;
  field: "defense" | "medical" | "finance" | "engineering" | "arts";
  badgeEn: string;
  badgeHi: string;
}

const schoolAlumni: AlumniProfile[] = [
  { nameEn: "Kanishk Mod", nameHi: "कनिष्क मोड़", roleEn: "Lieutenant, Indian Armed Forces", roleHi: "लेफ्टिनेंट, भारतीय सेना", field: "defense", badgeEn: "Armed Forces", badgeHi: "भारतीय सेना" },
  { nameEn: "Dr. Ankita Haroliya", nameHi: "डॉ. अंकिता हरोलिया", roleEn: "MBBS Doctor", roleHi: "एमबीबीएस डॉक्टर", field: "medical", badgeEn: "Healthcare", badgeHi: "चिकित्सा" },
  { nameEn: "Dr. Karuna Jain", nameHi: "डॉ. करुणा जैन", roleEn: "MBBS Doctor", roleHi: "एमबीबीएस डॉक्टर", field: "medical", badgeEn: "Healthcare", badgeHi: "चिकित्सा" },
  { nameEn: "Muskan Gupta", nameHi: "मुस्कान गुप्ता", roleEn: "Chartered Accountant (CA)", roleHi: "चार्टर्ड एकाउंटेंट (CA)", field: "finance", badgeEn: "Finance / CA", badgeHi: "सीए / वित्त" },
  { nameEn: "Abhishek Dhakad", nameHi: "अभिषेक धाकड़", roleEn: "Engineer", roleHi: "इंजीनियर", field: "engineering", badgeEn: "Engineering", badgeHi: "इंजीनियरिंग" },
  { nameEn: "Jainul Mansuri", nameHi: "जैनुल मंसूरी", roleEn: "Engineer", roleHi: "इंजीनियर", field: "engineering", badgeEn: "Engineering", badgeHi: "इंजीनियरिंग" },
  { nameEn: "Dharmendra Rajput", nameHi: "धर्मेन्द्र राजपूत", roleEn: "Indian Army", roleHi: "भारतीय सेना", field: "defense", badgeEn: "Armed Forces", badgeHi: "भारतीय सेना" },
  { nameEn: "Piyush Dhakad", nameHi: "पीयूष धाकड़", roleEn: "Indian Army", roleHi: "भारतीय सेना", field: "defense", badgeEn: "Armed Forces", badgeHi: "भारतीय सेना" },
  { nameEn: "Shivam Mandloi", nameHi: "शिवम मंडलोई", roleEn: "Actor, Film Industry", roleHi: "एक्टर (फिल्म इंडस्ट्री)", field: "arts", badgeEn: "Film & Arts", badgeHi: "सिनेमा व कला" },
];

export default function SchoolLandingPage() {
  const [lang, setLang] = useState<"en" | "hi">("hi");
  const [showLanguageModal, setShowLanguageModal] = useState<boolean>(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);

  // Enquiry form state
  const [formData, setFormData] = useState({
    parentName: "",
    phoneNumber: "",
    studentName: "",
    studentClass: "Class 1",
    academicYear: "2026-2027",
    message: "",
  });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [copiedAddress, setCopiedAddress] = useState(false);

  // Check language modal preference on mount asynchronously
  useEffect(() => {
    const timer = setTimeout(() => {
      try {
        const saved = localStorage.getItem("adarsh_lang_choice");
        if (saved === "en" || saved === "hi") {
          React.startTransition(() => {
            setLang(saved);
            setShowLanguageModal(false);
          });
        }
      } catch {
        // ignore localStorage access error
      }
    }, 0);

    return () => clearTimeout(timer);
  }, []);


  // School Photo Gallery Slider state
  const [activeSlide, setActiveSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto-play photo carousel
  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % realSchoolGallery.length);
    }, 4500);
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const prevSlide = () => {
    setActiveSlide((prev) => (prev - 1 + realSchoolGallery.length) % realSchoolGallery.length);
  };

  const nextSlide = () => {
    setActiveSlide((prev) => (prev + 1) % realSchoolGallery.length);
  };

  const selectLanguage = (selected: "en" | "hi") => {
    setLang(selected);
    localStorage.setItem("adarsh_lang_choice", selected);
    setShowLanguageModal(false);
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.parentName || !formData.phoneNumber) {
      alert(lang === "hi" ? "कृपया अपना नाम और मोबाइल नंबर भरें।" : "Please enter your name and phone number.");
      return;
    }
    setFormSubmitted(true);
  };

  // WhatsApp quick text generator
  const getWhatsAppLink = (customText?: string) => {
    const defaultText =
      lang === "hi"
        ? `नमस्ते आदर्श इंग्लिश हायर सेकंडरी स्कूल नाहरगढ़, मैं प्रवेश सत्र 2026-27 के बारे में पूछताछ करना चाहता हूँ। पालक का नाम: ${formData.parentName || "अभिभावक"}, मोबाइल: ${formData.phoneNumber || ""}, कक्षा: ${formData.studentClass}।`
        : `Hello Adarsh English H.S. School Nahargarh, I would like to enquire about admission for session 2026-27. Parent Name: ${formData.parentName || "Parent"}, Mobile: ${formData.phoneNumber || ""}, Class: ${formData.studentClass}.`;
    const finalMsg = customText || defaultText;
    return `https://wa.me/919993446271?text=${encodeURIComponent(finalMsg)}`;
  };

  const copyAddress = () => {
    const textToCopy =
      "Adarsh Senior Secondary English School, Plus Code: 567P+W9P, Nahargarh, Tehsil Sitamau, Dist. Mandsaur, Madhya Pradesh - 458558";
    if (typeof navigator !== "undefined" && navigator.clipboard?.writeText) {
      navigator.clipboard.writeText(textToCopy).catch(() => {});
    }
    setCopiedAddress(true);
    setTimeout(() => setCopiedAddress(false), 3000);
  };

  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-800 antialiased flex flex-col font-sans relative selection:bg-amber-500 selection:text-white">
      {/* ============================================================== */}
      {/* LANGUAGE SELECTION WELCOME MODAL (Show before viewing details) */}
      {/* ============================================================== */}
      {showLanguageModal && (
        <div className="fixed inset-0 z-50 bg-black/75 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border-2 border-amber-500 text-center animate-in zoom-in-95 duration-200">
            {/* School Emblem in Modal */}
            <div className="w-20 h-20 mx-auto rounded-full overflow-hidden border-2 border-amber-600 shadow-md bg-white mb-4">
              <img
                src="/school/school_logo.jpg"
                alt="Adarsh English School Logo"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="inline-flex items-center space-x-1.5 px-3 py-1 bg-amber-50 text-amber-900 border border-amber-300 rounded-full text-xs font-bold mb-3 shadow-2xs">
              <Sparkles className="w-3.5 h-3.5 text-amber-600" />
              <span>Reg. 1704/97 • नाहरगढ़ (मन्दसौर)</span>
            </div>

            <h2 className="text-xl sm:text-2xl font-serif font-black text-slate-900">
              Adarsh English H.S. School
            </h2>
            <p className="text-sm font-bold text-amber-800 mt-0.5">
              आदर्श इंग्लिश हायर सेकंडरी स्कूल, नाहरगढ़
            </p>

            <div className="my-5 p-4 bg-gradient-to-r from-amber-50/60 to-blue-50/60 rounded-2xl border border-amber-200/70">
              <p className="text-xs sm:text-sm text-slate-800 font-semibold leading-relaxed">
                कृपया अपनी पसंदीदा भाषा का चयन करें /<br />
                Please choose your preferred language to continue:
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
              <button
                onClick={() => selectLanguage("hi")}
                className="w-full py-3.5 px-4 rounded-xl font-bold text-sm bg-gradient-to-r from-amber-500 via-amber-600 to-amber-700 hover:from-amber-600 hover:to-amber-800 text-white shadow-md hover:shadow-lg transition flex items-center justify-center space-x-2 active:scale-95"
              >
                <span>🇮🇳 हिन्दी में देखें</span>
              </button>

              <button
                onClick={() => selectLanguage("en")}
                className="w-full py-3.5 px-4 rounded-xl font-bold text-sm bg-gradient-to-r from-blue-700 via-indigo-700 to-blue-800 hover:from-blue-800 hover:to-indigo-900 text-white shadow-md hover:shadow-lg transition flex items-center justify-center space-x-2 active:scale-95 border border-blue-400/30"
              >
                <span>🌐 View in English</span>
              </button>
            </div>

            <p className="text-[11px] text-slate-500 mt-4">
              (You can change the language anytime from the top bar • आप बाद में भी भाषा बदल सकते हैं)
            </p>
          </div>
        </div>
      )}

      {/* ============================================================== */}
      {/* ============================================================== */}
      {/* 1. TOP ANNOUNCEMENT BAR & PERSISTENT LANGUAGE SWITCHER */}
      {/* ============================================================== */}
      <div className="bg-gradient-to-r from-blue-950 via-indigo-950 to-blue-950 text-slate-100 py-1.5 px-3 sm:px-6 border-b border-amber-500/30 shadow-xs">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-2 text-xs">
          {/* Left Badges */}
          <div className="flex items-center space-x-2 min-w-0">
            <span className="inline-flex items-center space-x-1 sm:space-x-1.5 px-2 sm:px-3 py-0.5 rounded-full font-extrabold bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 text-slate-950 shadow-xs text-[10px] sm:text-xs shrink-0">
              <Sparkles className="w-3 h-3 text-slate-950 shrink-0" />
              <span>{lang === "hi" ? "सत्र 2026–27 प्रवेश प्रारंभ" : "Admissions 2026–27 Open"}</span>
            </span>
            <span className="hidden md:inline-flex items-center space-x-1 text-slate-300 text-xs font-semibold truncate">
              <span className="text-amber-400">•</span>
              <span className="truncate">
                {lang === "hi"
                  ? "नर्सरी से 12वीं (साइंस/कॉमर्स) • स्कूल कोड: 412109"
                  : "Nursery to 12th (Science/Commerce) • Code: 412109"}
              </span>
            </span>
          </div>

          {/* Right Direct Helpline & Language */}
          <div className="flex items-center space-x-2 sm:space-x-3 text-xs shrink-0">
            {/* Live Helpline link (visible from sm: up to prevent mobile overlap) */}
            <a
              href="tel:+919993446271"
              className="hidden sm:inline-flex items-center space-x-1.5 px-2.5 py-0.5 sm:py-1 rounded-full bg-emerald-500/25 text-emerald-200 border border-emerald-400/50 hover:bg-emerald-500/35 transition font-bold text-[11px] sm:text-xs"
              title="Helpline: +91 99934 46271 (8:00 AM – 8:00 PM)"
            >
              <span className="relative flex h-2 w-2 shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400"></span>
              </span>
              <Phone className="w-3 h-3 text-emerald-300 shrink-0" />
              <span className="font-extrabold">+91 99934 46271</span>
              <span className="hidden md:inline text-amber-300 font-semibold">• 8 AM - 8 PM</span>
            </a>

            <span className="text-slate-600 hidden sm:inline">|</span>

            {/* Language Switcher Pill */}
            <div className="flex items-center space-x-0.5 sm:space-x-1 bg-white/15 rounded-full p-0.5 border border-white/25 shrink-0">
              <button
                type="button"
                onClick={() => selectLanguage("hi")}
                className={`px-2 py-0.5 rounded-full text-[10px] sm:text-xs font-black transition flex items-center space-x-1 ${
                  lang === "hi"
                    ? "bg-gradient-to-r from-amber-400 to-amber-500 text-slate-950 shadow-sm"
                    : "text-slate-300 hover:text-white"
                }`}
                title="हिन्दी"
              >
                <span>🇮🇳</span>
                <span>हिन्दी</span>
              </button>
              <button
                type="button"
                onClick={() => selectLanguage("en")}
                className={`px-2 py-0.5 rounded-full text-[10px] sm:text-xs font-black transition flex items-center space-x-1 ${
                  lang === "en"
                    ? "bg-gradient-to-r from-amber-400 to-amber-500 text-slate-950 shadow-sm"
                    : "text-slate-300 hover:text-white"
                }`}
                title="English"
              >
                <span>🌐</span>
                <span>EN</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* ============================================================== */}
      {/* 2. PREMIER INSTITUTIONAL HEADER & NAVIGATION */}
      {/* ============================================================== */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-xl border-b border-amber-500/25 shadow-sm">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-2.5 sm:py-3.5 flex items-center justify-between gap-3 sm:gap-4 min-h-[72px] sm:min-h-[84px]">
          {/* Logo & School Identity - NEVER cropped */}
          <a href="#" className="flex items-center space-x-2.5 sm:space-x-3.5 group min-w-0">
            <div className="relative w-11 h-11 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full p-0.5 ring-2 ring-amber-500 shadow-md shrink-0 bg-white group-hover:scale-105 transition-transform duration-300">
              <img
                src="/school/school_logo.jpg"
                alt="Adarsh English Higher Secondary School Logo"
                className="w-full h-full object-cover rounded-full"
              />
              <span className="absolute -bottom-1 -right-1 bg-amber-500 text-slate-950 text-[9px] sm:text-[10px] font-black px-1.5 py-0.2 rounded-full border border-white shadow-xs">
                &apos;97
              </span>
            </div>
            <div className="min-w-0">
              <span className={`${lang === "hi" ? "font-serif" : "font-display"} font-black text-sm sm:text-base md:text-xl xl:text-2xl text-slate-900 tracking-tight leading-snug sm:leading-tight block`}>
                {lang === "hi" ? "आदर्श इंग्लिश हायर सेकंडरी स्कूल" : "ADARSH ENGLISH H.S. SCHOOL"}
              </span>
              <div className="flex flex-wrap items-center gap-x-1.5 sm:gap-x-2 text-[10px] sm:text-xs font-semibold text-slate-600 mt-0.5">
                <span className="text-amber-900 font-bold shrink-0">
                  {lang === "hi" ? "नाहरगढ़ (म.प्र.)" : "Nahargarh (M.P.)"}
                </span>
                <span className="text-slate-300">•</span>
                <span className="shrink-0 text-slate-700">
                  Reg. 1704/97
                </span>
                <span className="text-slate-300">•</span>
                <span className="shrink-0 text-slate-700">
                  {lang === "hi" ? "कोड: 412109" : "Code: 412109"}
                </span>
                <span className="hidden xl:inline text-slate-300">•</span>
                <span className="hidden xl:inline text-blue-900 font-bold shrink-0">
                  {lang === "hi" ? "28+ वर्ष शैक्षणिक इतिहास" : "Estd. 1997"}
                </span>
              </div>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center space-x-0.5 xl:space-x-1.5 text-xs xl:text-sm font-bold text-slate-800 shrink-0">
            <a
              href="#campus-gallery"
              className="px-2.5 xl:px-3 py-2 rounded-xl hover:text-amber-900 hover:bg-amber-50 transition"
            >
              {lang === "hi" ? "छायाचित्र (एल्बम)" : "Album / Gallery"}
            </a>
            <a
              href="#pillars"
              className="px-2.5 xl:px-3 py-2 rounded-xl hover:text-amber-900 hover:bg-amber-50 transition"
            >
              {lang === "hi" ? "विशेषताएं" : "Why Us"}
            </a>
            <a
              href="#about-founder"
              className="px-2.5 xl:px-3 py-2 rounded-xl hover:text-amber-900 hover:bg-amber-50 transition"
            >
              {lang === "hi" ? "प्राचार्य डेस्क" : "Principal's Desk"}
            </a>
            <a
              href="#courses"
              className="px-2.5 xl:px-3 py-2 rounded-xl hover:text-amber-900 hover:bg-amber-50 transition"
            >
              {lang === "hi" ? "कक्षाएं" : "Classes"}
            </a>
            <a
              href="#hall-of-fame"
              className="px-2.5 xl:px-3 py-2 rounded-xl hover:text-amber-900 hover:bg-amber-50 transition"
            >
              {lang === "hi" ? "पूर्व छात्र" : "Alumni"}
            </a>
            <a
              href="#contact-location"
              className="px-2.5 xl:px-3 py-2 rounded-xl hover:text-amber-900 hover:bg-amber-50 transition"
            >
              {lang === "hi" ? "स्थान व मैप" : "Location & Map"}
            </a>
          </nav>

          {/* Desktop Direct CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-2 xl:space-x-2.5 shrink-0">
            <a
              href={getWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-3 xl:px-4 py-2 xl:py-2.5 rounded-xl text-xs xl:text-sm font-bold bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white shadow-sm hover:shadow transition space-x-1.5 active:scale-95"
              title="Chat on WhatsApp (+91 99934 46271)"
            >
              <WhatsAppIcon className="w-4 h-4" />
              <span>{lang === "hi" ? "व्हाट्सएप" : "WhatsApp"}</span>
            </a>

            <a
              href="#enquiry-form"
              className="inline-flex items-center justify-center px-3.5 xl:px-4.5 py-2 xl:py-2.5 rounded-xl text-xs xl:text-sm font-bold bg-gradient-to-r from-blue-700 via-indigo-700 to-blue-800 hover:from-blue-800 hover:to-indigo-900 text-white shadow-md transition space-x-1.5 border border-blue-400/30 active:scale-95"
            >
              <span>{lang === "hi" ? "प्रवेश फॉर्म" : "Enquiry Form"}</span>
              <ArrowRight className="w-3.5 h-3.5 xl:w-4 xl:h-4 text-blue-200" />
            </a>
          </div>

          {/* Mobile & Tablet Right Quick Controls (< lg) */}
          <div className="flex lg:hidden items-center space-x-2 shrink-0">
            {/* Quick Call Icon Button */}
            <a
              href="tel:+919993446271"
              className="w-10 h-10 rounded-xl bg-amber-50 border border-amber-300 text-amber-900 flex items-center justify-center shadow-xs active:bg-amber-100"
              title="Call Helpline: 8 AM - 8 PM"
              aria-label="Call Helpline"
            >
              <Phone className="w-4.5 h-4.5 text-amber-700" />
            </a>

            {/* Mobile Hamburger Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="w-10 h-10 rounded-xl bg-slate-100 text-slate-800 flex items-center justify-center border border-slate-200 active:bg-slate-200"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5 text-rose-600" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* ============================================================== */}
        {/* MOBILE NAVIGATION DRAWER & QUICK ACTION DASHBOARD */}
        {/* ============================================================== */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-slate-200 bg-white shadow-2xl animate-in slide-in-from-top-2 duration-200 max-h-[85vh] overflow-y-auto">
            {/* School Profile Bar inside Mobile Drawer */}
            <div className="px-4 py-3 bg-gradient-to-r from-blue-900 via-indigo-900 to-blue-950 text-white flex items-center justify-between">
              <div className="flex items-center space-x-2.5">
                <div className="w-10 h-10 rounded-full overflow-hidden border border-amber-400 bg-white shrink-0">
                  <img src="/school/school_logo.jpg" alt="Logo" className="w-full h-full object-cover" />
                </div>
                <div className="min-w-0 pr-2">
                  <p className="text-xs font-bold leading-tight text-white">
                    {lang === "hi" ? "आदर्श इंग्लिश हायर सेकंडरी स्कूल" : "Adarsh English H.S. School"}
                  </p>
                  <p className="text-[10px] text-amber-300 mt-0.5">
                    {lang === "hi" ? "नाहरगढ़ (म.प्र.) • कोड: 412109" : "Nahargarh (M.P.) • Code: 412109"}
                  </p>
                </div>
              </div>

              {/* Language Switcher inside Mobile Drawer */}
              <div className="flex items-center space-x-1 bg-white/10 rounded-lg p-0.5 border border-white/20 shrink-0">
                <button
                  type="button"
                  onClick={() => selectLanguage("hi")}
                  className={`px-2 py-0.5 rounded text-[11px] font-bold ${
                    lang === "hi" ? "bg-amber-400 text-slate-900" : "text-slate-200"
                  }`}
                >
                  हिन्दी
                </button>
                <button
                  type="button"
                  onClick={() => selectLanguage("en")}
                  className={`px-2 py-0.5 rounded text-[11px] font-bold ${
                    lang === "en" ? "bg-amber-400 text-slate-900" : "text-slate-200"
                  }`}
                >
                  EN
                </button>
              </div>
            </div>

            {/* 4 Quick Action Touch Tiles */}
            <div className="p-3 bg-slate-50 border-b border-slate-200 grid grid-cols-2 gap-2">
              <a
                href="tel:+919993446271"
                className="p-3 rounded-xl bg-white border border-slate-200 shadow-xs flex items-center space-x-2.5 active:bg-slate-100"
              >
                <div className="w-9 h-9 rounded-lg bg-amber-100 text-amber-800 flex items-center justify-center shrink-0">
                  <Phone className="w-4.5 h-4.5" />
                </div>
                <div className="min-w-0 text-left">
                  <p className="text-xs font-bold text-slate-900 leading-tight">
                    {lang === "hi" ? "कॉल करें" : "Call Helpline"}
                  </p>
                  <p className="text-[10px] text-emerald-700 font-semibold truncate">8 AM – 8 PM</p>
                </div>
              </a>

              <a
                href={getWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-emerald-50 border border-emerald-200 shadow-xs flex items-center space-x-2.5 active:bg-emerald-100"
              >
                <div className="w-9 h-9 rounded-lg bg-emerald-600 text-white flex items-center justify-center shrink-0">
                  <WhatsAppIcon className="w-4.5 h-4.5" />
                </div>
                <div className="min-w-0 text-left">
                  <p className="text-xs font-bold text-emerald-950 leading-tight">
                    {lang === "hi" ? "व्हाट्सएप" : "WhatsApp"}
                  </p>
                  <p className="text-[10px] text-emerald-700 font-semibold truncate">
                    {lang === "hi" ? "सीधी चैट" : "Instant Chat"}
                  </p>
                </div>
              </a>

              <a
                href="#enquiry-form"
                onClick={() => setMobileMenuOpen(false)}
                className="p-3 rounded-xl bg-blue-50 border border-blue-200 shadow-xs flex items-center space-x-2.5 active:bg-blue-100"
              >
                <div className="w-9 h-9 rounded-lg bg-blue-600 text-white flex items-center justify-center shrink-0">
                  <BookOpen className="w-4.5 h-4.5" />
                </div>
                <div className="min-w-0 text-left">
                  <p className="text-xs font-bold text-blue-950 leading-tight">
                    {lang === "hi" ? "प्रवेश फॉर्म" : "Enquiry Form"}
                  </p>
                  <p className="text-[10px] text-blue-700 font-semibold truncate">2026–27</p>
                </div>
              </a>

              <a
                href="#contact-location"
                onClick={() => setMobileMenuOpen(false)}
                className="p-3 rounded-xl bg-amber-50 border border-amber-200 shadow-xs flex items-center space-x-2.5 active:bg-amber-100"
              >
                <div className="w-9 h-9 rounded-lg bg-amber-600 text-white flex items-center justify-center shrink-0">
                  <MapPin className="w-4.5 h-4.5" />
                </div>
                <div className="min-w-0 text-left">
                  <p className="text-xs font-bold text-amber-950 leading-tight">
                    {lang === "hi" ? "स्थान व मैप" : "Google Map"}
                  </p>
                  <p className="text-[10px] text-amber-800 font-semibold truncate">567P+W9P</p>
                </div>
              </a>
            </div>

            {/* Navigation Menu List with SVG Icons */}
            <div className="p-3 space-y-1">
              <a
                href="#campus-gallery"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between p-3 rounded-xl hover:bg-slate-100 text-slate-800 text-sm font-semibold transition"
              >
                <div className="flex items-center space-x-3">
                  <span className="w-8 h-8 rounded-lg bg-purple-100 text-purple-800 flex items-center justify-center text-xs shrink-0">
                    <Sparkles className="w-4 h-4 text-purple-800" />
                  </span>
                  <span>{lang === "hi" ? "विद्यालय छायाचित्र एल्बम" : "School Photo Album"}</span>
                </div>
                <ChevronRight className="w-4 h-4 text-slate-400" />
              </a>

              <a
                href="#pillars"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between p-3 rounded-xl hover:bg-slate-100 text-slate-800 text-sm font-semibold transition"
              >
                <div className="flex items-center space-x-3">
                  <span className="w-8 h-8 rounded-lg bg-amber-100 text-amber-800 flex items-center justify-center text-xs shrink-0">
                    <Building2 className="w-4 h-4 text-amber-800" />
                  </span>
                  <span>{lang === "hi" ? "संस्था की मुख्य विशेषताएं (आधारस्तंभ)" : "Institutional Pillars"}</span>
                </div>
                <ChevronRight className="w-4 h-4 text-slate-400" />
              </a>

              <a
                href="#about-founder"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between p-3 rounded-xl hover:bg-slate-100 text-slate-800 text-sm font-semibold transition"
              >
                <div className="flex items-center space-x-3">
                  <span className="w-8 h-8 rounded-lg bg-slate-100 text-slate-800 flex items-center justify-center text-xs shrink-0">
                    <Users className="w-4 h-4 text-slate-700" />
                  </span>
                  <span>{lang === "hi" ? "संस्थापक एवं प्राचार्य परिचय" : "Founder & Principal Desk"}</span>
                </div>
                <ChevronRight className="w-4 h-4 text-slate-400" />
              </a>

              <a
                href="#courses"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between p-3 rounded-xl hover:bg-slate-100 text-slate-800 text-sm font-semibold transition"
              >
                <div className="flex items-center space-x-3">
                  <span className="w-8 h-8 rounded-lg bg-blue-100 text-blue-800 flex items-center justify-center text-xs shrink-0">
                    <BookOpen className="w-4 h-4 text-blue-800" />
                  </span>
                  <span>{lang === "hi" ? "कक्षाएं: नर्सरी से 12वीं तक" : "Classes: Nursery to 12th"}</span>
                </div>
                <ChevronRight className="w-4 h-4 text-slate-400" />
              </a>

              <a
                href="#hall-of-fame"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between p-3 rounded-xl hover:bg-slate-100 text-slate-800 text-sm font-semibold transition"
              >
                <div className="flex items-center space-x-3">
                  <span className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-800 flex items-center justify-center text-xs shrink-0">
                    <Award className="w-4 h-4 text-emerald-800" />
                  </span>
                  <span>{lang === "hi" ? "पूर्व छात्र गौरव (Army, MBBS, CA)" : "Alumni Hall of Fame"}</span>
                </div>
                <ChevronRight className="w-4 h-4 text-slate-400" />
              </a>

              <a
                href="#contact-location"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between p-3 rounded-xl hover:bg-slate-100 text-slate-800 text-sm font-semibold transition"
              >
                <div className="flex items-center space-x-3">
                  <span className="w-8 h-8 rounded-lg bg-rose-100 text-rose-800 flex items-center justify-center text-xs shrink-0">
                    <MapPin className="w-4 h-4 text-rose-800" />
                  </span>
                  <span>{lang === "hi" ? "गूगल मैप्स व पता (567P+W9P)" : "Google Map & Location"}</span>
                </div>
                <ChevronRight className="w-4 h-4 text-slate-400" />
              </a>
            </div>

            {/* Helpline Notice Footer in Drawer */}
            <div className="p-3 bg-amber-50/80 border-t border-amber-200 text-center">
              <p className="text-xs font-bold text-amber-950">
                {lang === "hi"
                  ? "हेल्पलाइन समय: प्रातः 8:00 से रात्रि 8:00 बजे तक"
                  : "Helpline Hours: 8:00 AM to 8:00 PM (Daily)"}
              </p>
              <p className="text-xs text-amber-900 mt-1 font-semibold">
                कॉल व व्हाट्सएप:{" "}
                <a href="tel:+919993446271" className="font-bold underline text-amber-950">
                  +91 99934 46271
                </a>
              </p>
            </div>
          </div>
        )}
      </header>

      <main className="flex-1 pb-24 sm:pb-8">
        {/* ============================================================== */}
        {/* 3. HERO SECTION */}
        {/* ============================================================== */}
        <section className="relative overflow-hidden bg-gradient-to-b from-amber-50/50 via-sky-50/40 to-[#f8fafc] bg-dot-pattern-light py-8 sm:py-14 lg:py-20 border-b border-amber-200/50">
          {/* Subtle decorative background glow */}
          <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-amber-400/20 rounded-full blur-3xl pointer-events-none -z-10" />
          <div className="absolute bottom-0 left-10 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none -z-10" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              {/* Left Column: Authentic School Introduction */}
              <div className="lg:col-span-7 space-y-4 sm:space-y-6 text-left">
                {/* Government & Admission Badge */}
                <div className="flex flex-wrap items-center gap-2.5">
                  <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-amber-500 via-amber-600 to-orange-600 text-white text-xs sm:text-sm font-extrabold px-4 py-2 rounded-full shadow-md shadow-amber-600/25 tracking-wide">
                    <Sparkles className="w-4 h-4 text-amber-200 shrink-0 animate-spin-slow" />
                    <span>
                      {lang === "hi"
                        ? "नवीन प्रवेश प्रारंभ 2026–27 | नर्सरी से 12 वीं तक"
                        : "Admissions Open 2026–27 | Nursery to 12th"}
                    </span>
                  </div>
                  <span className="hidden sm:inline-flex items-center text-xs font-bold text-amber-950 bg-amber-100/90 border border-amber-300 px-3.5 py-1.5 rounded-full shadow-xs">
                    MP Board Code: 412109
                  </span>
                </div>

                {/* Primary Headline */}
                <div>
                  <h1 className="text-3xl sm:text-5xl md:text-6xl font-serif font-black text-slate-900 tracking-tight leading-[1.14]">
                    {lang === "hi"
                      ? "आदर्श इंग्लिश हायर सेकंडरी स्कूल, नाहरगढ़"
                      : "Adarsh English Higher Secondary School, Nahargarh"}
                  </h1>
                  <p className="text-sm sm:text-base md:text-lg font-bold text-amber-950 mt-3 flex items-center space-x-2">
                    <span className="text-lg">📍</span>
                    <span>
                      {lang === "hi"
                        ? "तहसील सीतामऊ, जिला मन्दसौर (मध्य प्रदेश) • स्थापना 1997"
                        : "Tehsil Sitamau, Dist. Mandsaur (Madhya Pradesh) • Estd. 1997"}
                    </span>
                  </p>
                </div>

                {/* Description */}
                <p className="text-slate-700 text-base sm:text-lg md:text-xl leading-relaxed max-w-2xl font-normal">
                  {lang === "hi"
                    ? "नाहरगढ़ क्षेत्र में पिछले 28 वर्षों से समर्पित, संस्कारयुक्त एवं अंग्रेजी माध्यम की अग्रणी शिक्षण संस्था। अनुभवी शिक्षकों के व्यक्तिगत मार्गदर्शन, आधुनिक विज्ञान-कंप्यूटर प्रयोगशालाओं एवं अनुशासित वातावरण के साथ प्रत्येक विद्यार्थी का सर्वांगीण विकास।"
                    : "Over 28 years of educational excellence in Nahargarh and Sitamau region, delivering value-rooted English medium education from Nursery to Class 12th. Disciplined, culturally rich environment with individual mentoring for every student."}
                </p>

                {/* School Motto Banner */}
                <div className="bg-gradient-to-r from-amber-100/95 via-orange-50 to-amber-50/90 border-l-4 border-amber-600 border border-amber-300/80 rounded-2xl p-4 flex flex-wrap items-center justify-between gap-3 text-sm sm:text-base font-semibold text-slate-900 shadow-xs">
                  <div className="flex items-center space-x-2">
                    <span className="text-amber-950 font-bold">
                      {lang === "hi" ? "✨ मूलमंत्र: शिक्षा • सेवा • साधना" : "✨ Motto: Education • Service • Dedication"}
                    </span>
                  </div>
                  <span className="text-amber-900 text-xs sm:text-sm font-medium italic">
                    “Small progress every day leads to big results 🌄”
                  </span>
                </div>

                {/* Direct Action Bar with Calling & WhatsApp Buttons */}
                <div className="p-5 sm:p-6 bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-700 text-white rounded-3xl space-y-3.5 shadow-xl shadow-emerald-700/20 border border-emerald-500/40">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div className="flex items-center space-x-3.5">
                      <div className="w-12 h-12 rounded-2xl bg-white/20 backdrop-blur-xs text-white flex items-center justify-center shrink-0 border border-white/30 shadow-xs">
                        <WhatsAppIcon className="w-6 h-6" />
                      </div>
                      <div>
                        <p className="text-sm sm:text-base font-bold text-white">
                          {lang === "hi" ? "सीधे व्हाट्सएप पर प्रवेश पूछताछ करें" : "Direct WhatsApp Admission Helpline"}
                        </p>
                        <p className="text-xs sm:text-sm text-emerald-100 font-semibold flex items-center space-x-2 mt-1">
                          <span className="w-2.5 h-2.5 rounded-full bg-amber-300 animate-pulse shrink-0"></span>
                          <span>
                            {lang === "hi"
                              ? "सहायता समय: प्रातः 8:00 से रात्रि 8:00 बजे तक (+91 99934 46271)"
                              : "Helpline: +91 99934 46271 (Timings: 8:00 AM – 8:00 PM)"}
                          </span>
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center space-x-2.5 shrink-0">
                      <a
                        href={getWhatsAppLink()}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 sm:flex-initial px-5 py-3 bg-white hover:bg-emerald-50 text-emerald-950 rounded-xl text-sm font-black flex items-center justify-center space-x-2 transition shadow-md active:scale-95"
                      >
                        <WhatsAppIcon className="w-4.5 h-4.5 text-emerald-700" />
                        <span>{lang === "hi" ? "व्हाट्सएप चैट" : "Chat Now"}</span>
                      </a>

                      <a
                        href="tel:+919993446271"
                        className="px-4 py-3 bg-gradient-to-r from-blue-700 via-indigo-700 to-blue-800 hover:from-blue-800 hover:to-indigo-900 text-white rounded-xl text-sm font-bold flex items-center justify-center space-x-1.5 transition shadow-md border border-blue-400/30"
                        title="Call: 8:00 AM to 8:00 PM"
                      >
                        <Phone className="w-4 h-4 text-blue-200" />
                        <span>{lang === "hi" ? "कॉल" : "Call"}</span>
                      </a>
                    </div>
                  </div>
                </div>

                {/* 4 Performance Metric Cards - Redesigned for maximum readability & zero congestion */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 pt-2">
                  {/* Card 1: 28+ Years */}
                  <div className="bg-white rounded-2xl p-3.5 sm:p-4 border border-amber-200/90 border-t-4 border-t-amber-500 shadow-xs hover:shadow-md transition-all flex flex-col justify-between">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-base sm:text-lg">🏛️</span>
                      <span className="text-[10px] font-black uppercase tracking-wider text-amber-900 bg-amber-100/80 px-2 py-0.5 rounded-md">
                        1997
                      </span>
                    </div>
                    <div>
                      <p className="text-xl sm:text-2xl xl:text-3xl font-black text-slate-900 font-serif tracking-tight">
                        28+ {lang === "hi" ? "वर्ष" : "Yrs"}
                      </p>
                      <p className="text-[11px] sm:text-xs text-slate-600 font-bold mt-1 leading-snug">
                        {lang === "hi" ? "अटूट शैक्षणिक विश्वास" : "Academic Legacy"}
                      </p>
                    </div>
                  </div>

                  {/* Card 2: Nursery to 12th */}
                  <div className="bg-white rounded-2xl p-3.5 sm:p-4 border border-blue-200/90 border-t-4 border-t-blue-600 shadow-xs hover:shadow-md transition-all flex flex-col justify-between">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-base sm:text-lg">📚</span>
                      <span className="text-[10px] font-black uppercase tracking-wider text-blue-900 bg-blue-100/80 px-2 py-0.5 rounded-md">
                        MP Board
                      </span>
                    </div>
                    <div>
                      <p className="text-xl sm:text-2xl xl:text-3xl font-black text-slate-900 font-serif tracking-tight">
                        {lang === "hi" ? "नर्सरी – 12वीं" : "Nursery – 12th"}
                      </p>
                      <p className="text-[11px] sm:text-xs text-slate-600 font-bold mt-1 leading-snug">
                        {lang === "hi" ? "साइंस व कॉमर्स संकाय" : "Science & Commerce"}
                      </p>
                    </div>
                  </div>

                  {/* Card 3: 100% Board */}
                  <div className="bg-white rounded-2xl p-3.5 sm:p-4 border border-emerald-200/90 border-t-4 border-t-emerald-600 shadow-xs hover:shadow-md transition-all flex flex-col justify-between">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-base sm:text-lg">🎯</span>
                      <span className="text-[10px] font-black uppercase tracking-wider text-emerald-900 bg-emerald-100/80 px-2 py-0.5 rounded-md">
                        100%
                      </span>
                    </div>
                    <div>
                      <p className="text-xl sm:text-2xl xl:text-3xl font-black text-slate-900 font-serif tracking-tight">
                        {lang === "hi" ? "बोर्ड परिणाम" : "Board Results"}
                      </p>
                      <p className="text-[11px] sm:text-xs text-slate-600 font-bold mt-1 leading-snug">
                        {lang === "hi" ? "उत्कृष्ट मार्गदर्शन व टेस्ट" : "Excellence & Tests"}
                      </p>
                    </div>
                  </div>

                  {/* Card 4: Army, MBBS & CA Alumni */}
                  <div className="bg-white rounded-2xl p-3.5 sm:p-4 border border-indigo-200/90 border-t-4 border-t-indigo-600 shadow-xs hover:shadow-md transition-all flex flex-col justify-between">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-base sm:text-lg">🎖️</span>
                      <span className="text-[10px] font-black uppercase tracking-wider text-indigo-900 bg-indigo-100/80 px-2 py-0.5 rounded-md">
                        Alumni
                      </span>
                    </div>
                    <div>
                      <p className="text-xl sm:text-2xl xl:text-3xl font-black text-slate-900 font-serif tracking-tight">
                        {lang === "hi" ? "सेना व डॉक्टर्स" : "Army & Doctors"}
                      </p>
                      <p className="text-[11px] sm:text-xs text-slate-600 font-bold mt-1 leading-snug">
                        {lang === "hi" ? "लेफ्टिनेंट, MBBS व CA" : "Lt., MBBS & CAs"}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column: Hero Real Campus Visual Card */}
              <div className="lg:col-span-5">
                <div className="relative mx-auto max-w-md lg:max-w-none">
                  {/* Subtle golden offset frame */}
                  <div className="absolute -top-3 -left-3 w-full h-full rounded-3xl bg-gradient-to-br from-amber-400 to-orange-500 opacity-70 -z-10 transform -rotate-1 hidden sm:block"></div>

                  <div className="bg-white rounded-3xl border-2 border-amber-200/80 overflow-hidden shadow-2xl">
                    <div className="relative h-64 sm:h-76 w-full overflow-hidden bg-slate-900">
                      <img
                        src="/school/gallery/school_insta_2.webp"
                        alt="Adarsh English School Nahargarh Campus Assembly"
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute top-3 right-3 bg-gradient-to-r from-amber-500 to-orange-500 text-slate-950 text-xs font-black px-3.5 py-1.5 rounded-full shadow-md">
                        {lang === "hi" ? "सत्र 2026–27 प्रवेश" : "Session 2026–27"}
                      </div>
                      <div className="absolute bottom-3 left-3 bg-blue-950/90 text-white text-xs sm:text-sm px-3.5 py-2 rounded-xl backdrop-blur-md flex items-center space-x-2 border border-white/10 shadow-md">
                        <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                        <span className="font-semibold">Reg. 1704/97 • MP Board English Medium</span>
                      </div>
                    </div>

                    <div className="p-6 sm:p-7 space-y-4 bg-white">
                      <div className="flex items-center justify-between text-xs sm:text-sm text-slate-600 pb-3 border-b border-slate-100">
                        <span className="font-bold text-slate-800">
                          School Code: 412109 | Dise: 23190800112
                        </span>
                        <span className="font-bold text-emerald-800 bg-emerald-100/90 px-3 py-1 rounded-full border border-emerald-300 text-xs">
                          {lang === "hi" ? "प्रवेश चालू" : "Enquiries Open"}
                        </span>
                      </div>

                      <div className="space-y-3 text-sm sm:text-base text-slate-700">
                        <div className="flex items-start space-x-2.5">
                          <CheckCircle2 className="w-5 h-5 text-emerald-600 mt-0.5 shrink-0" />
                          <span className="font-medium">
                            {lang === "hi"
                              ? "कक्षा नर्सरी से 12 वीं तक (साइंस / कॉमर्स संकाय)"
                              : "Class Nursery to 12th (Science & Commerce Streams)"}
                          </span>
                        </div>
                        <div className="flex items-start space-x-2.5">
                          <CheckCircle2 className="w-5 h-5 text-emerald-600 mt-0.5 shrink-0" />
                          <span className="font-medium">
                            {lang === "hi"
                              ? "विशाल 3-मंजिला भवन, सुसज्जित प्रयोगशालाएं व खेल मैदान"
                              : "Spacious 3-story campus, science labs & playground"}
                          </span>
                        </div>
                        <div className="flex items-start space-x-2.5">
                          <CheckCircle2 className="w-5 h-5 text-emerald-600 mt-0.5 shrink-0" />
                          <span className="font-medium">
                            {lang === "hi"
                              ? "आर्मी लेफ्टिनेंट, MBBS डॉक्टर्स व CA देने वाली प्रतिष्ठित संस्था"
                              : "Proven alumni legacy: Army Officers, Doctors & CAs"}
                          </span>
                        </div>
                      </div>

                      <div className="pt-2 grid grid-cols-2 gap-2.5">
                        <a
                          href="#enquiry-form"
                          className="py-3 px-3.5 bg-gradient-to-r from-blue-700 via-indigo-700 to-blue-800 hover:from-blue-800 hover:to-indigo-900 text-white rounded-xl text-xs sm:text-sm font-bold transition text-center shadow-xs flex items-center justify-center space-x-1.5 border border-blue-400/30"
                        >
                          <span>{lang === "hi" ? "प्रवेश फॉर्म भरें" : "Admission Form"}</span>
                          <ArrowRight className="w-3.5 h-3.5 text-blue-200" />
                        </a>
                        <a
                          href={getWhatsAppLink()}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="py-3 px-3.5 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white rounded-xl text-xs sm:text-sm font-bold transition text-center shadow-xs flex items-center justify-center space-x-1.5"
                        >
                          <WhatsAppIcon className="w-4 h-4" />
                          <span>{lang === "hi" ? "व्हाट्सएप संपर्क" : "WhatsApp Chat"}</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================================== */}
        {/* 3.5 REAL SCHOOL PHOTOS & CELEBRATIONS (CAMPUS ALBUM) */}
        {/* ============================================================== */}
        <section id="campus-gallery" className="py-8 sm:py-14 lg:py-20 bg-gradient-to-b from-[#f8fafc] via-amber-50/30 to-[#f8fafc] bg-dot-pattern border-b border-amber-200/50 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-5 sm:mb-8 gap-4 sm:gap-5">
              <div>
                <span className="text-xs sm:text-sm uppercase font-extrabold tracking-widest text-slate-950 bg-gradient-to-r from-amber-400 to-amber-500 px-4 py-2 rounded-full shadow-xs">
                  {lang === "hi" ? "विद्यालय छायाचित्र स्लाइडर" : "School Photos Slider"}
                </span>
                <h2 className="text-3xl sm:text-5xl font-serif font-black text-slate-900 mt-4 tracking-tight leading-tight">
                  {lang === "hi" ? "विद्यालय के वास्तविक छायाचित्र" : "Images from Our School Life"}
                </h2>
                <p className="text-slate-600 mt-3 text-base sm:text-lg md:text-xl max-w-2xl leading-relaxed">
                  {lang === "hi"
                    ? "हमारे आधिकारिक इंस्टाग्राम अकाउंट (@adarsh_english_h.s.school) से लिए गए वार्षिक समारोह, खेलकूद व उपलब्धियों के वास्तविक चित्र।"
                    : "Real photographs from our official Instagram (@adarsh_english_h.s.school) showcasing events, student awards, and celebrations."}
                </p>
              </div>

              {/* Slider Controls & Instagram link */}
              <div className="flex flex-wrap items-center gap-2.5 sm:gap-3">
                {/* Autoplay Pause/Play toggle */}
                {/* <button
                  type="button"
                  onClick={() => setIsAutoPlaying(!isAutoPlaying)}
                  className={`w-10 h-10 rounded-xl border flex items-center justify-center font-bold transition active:scale-95 ${
                    isAutoPlaying
                      ? "bg-emerald-600 text-white border-emerald-500 shadow-xs"
                      : "bg-amber-100 text-amber-950 border-amber-300 hover:bg-amber-200"
                  }`}
                  aria-label={isAutoPlaying ? "Pause auto-slide" : "Play auto-slide"}
                  title={isAutoPlaying ? "Pause auto-slide" : "Play auto-slide"}
                >
                  <span className="text-xs">{isAutoPlaying ? "⏸︎" : "▶"}</span>
                </button> */}

                {/* Left Arrow Button */}
                {/* <button
                  type="button"
                  onClick={prevSlide}
                  className="w-10 h-10 rounded-xl bg-white border border-slate-300 text-slate-700 hover:text-blue-900 hover:border-amber-600 hover:bg-amber-50 shadow-xs flex items-center justify-center transition active:scale-95"
                  aria-label="Previous Slide"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button> */}

                {/* Right Arrow Button */}
                {/* <button
                  type="button"
                  onClick={nextSlide}
                  className="w-10 h-10 rounded-xl bg-white border border-slate-300 text-slate-700 hover:text-blue-900 hover:border-amber-600 hover:bg-amber-50 shadow-xs flex items-center justify-center transition active:scale-95"
                  aria-label="Next Slide"
                >
                  <ChevronRight className="w-5 h-5" />
                </button> */}

                {/* Instagram link button */}
                <a
                  href="https://www.instagram.com/adarsh_english_h.s.school/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold bg-gradient-to-r from-rose-500 via-pink-600 to-purple-600 text-white shadow-md shadow-pink-500/25 hover:shadow-lg transition active:scale-95"
                >
                  <InstagramIcon className="w-4 h-4" />
                  <span>@adarsh_english_h.s.school</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* MAIN SLIDER CONTAINER */}
            <div
              className="relative rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl border-2 border-amber-500/30 bg-slate-950 group"
              onMouseEnter={() => setIsAutoPlaying(false)}
              onMouseLeave={() => setIsAutoPlaying(true)}
            >
              {/* Active Image Display */}
              <div
                className="relative h-[340px] sm:h-[440px] md:h-[540px] w-full overflow-hidden bg-slate-950 flex items-center justify-center cursor-pointer"
                onClick={() => setSelectedImage(realSchoolGallery[activeSlide])}
              >
                <img
                  key={realSchoolGallery[activeSlide].id}
                  src={realSchoolGallery[activeSlide].imageUrl}
                  alt={lang === "hi" ? realSchoolGallery[activeSlide].titleHi : realSchoolGallery[activeSlide].titleEn}
                  className="w-full h-full object-contain sm:object-cover transition-all duration-700 ease-in-out"
                />

                {/* Top Badges */}
                <div className="absolute top-3 left-3 sm:top-4 sm:left-4 z-10 flex items-center space-x-2">
                  <div className="bg-gradient-to-r from-amber-500 to-orange-500 text-slate-950 text-xs sm:text-sm font-black px-4 py-1.5 rounded-full shadow-lg">
                    {lang === "hi"
                      ? realSchoolGallery[activeSlide].dateBadgeHi
                      : realSchoolGallery[activeSlide].dateBadgeEn}
                  </div>
                </div>

                <div className="absolute top-3 right-3 sm:top-4 sm:right-4 z-10 flex items-center space-x-2">
                  <span className="bg-black/75 text-white text-xs sm:text-sm font-bold px-3.5 py-1.5 rounded-full backdrop-blur-md border border-white/20 shadow-md">
                    {activeSlide + 1} / {realSchoolGallery.length}
                  </span>
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedImage(realSchoolGallery[activeSlide]);
                    }}
                    className="bg-black/75 hover:bg-black text-amber-300 text-xs sm:text-sm font-bold px-3.5 py-1.5 rounded-full backdrop-blur-md border border-amber-400/30 transition flex items-center space-x-1.5"
                  >
                    <span>🔍 {lang === "hi" ? "ज़ूम करें" : "Zoom"}</span>
                  </button>
                </div>

                {/* Floating Left & Right Navigation Buttons */}
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    prevSlide();
                  }}
                  className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 w-11 h-11 sm:w-14 sm:h-14 rounded-full bg-white/95 hover:bg-white text-slate-900 shadow-2xl flex items-center justify-center transition-all hover:scale-110 active:scale-95 z-20 border border-amber-400/40"
                  aria-label="Previous photo"
                >
                  <ChevronLeft className="w-6 h-6 sm:w-7 sm:h-7" />
                </button>

                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    nextSlide();
                  }}
                  className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 w-11 h-11 sm:w-14 sm:h-14 rounded-full bg-white/95 hover:bg-white text-slate-900 shadow-2xl flex items-center justify-center transition-all hover:scale-110 active:scale-95 z-20 border border-amber-400/40"
                  aria-label="Next photo"
                >
                  <ChevronRight className="w-6 h-6 sm:w-7 sm:h-7" />
                </button>

                {/* Bottom Caption Overlay */}
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/95 via-black/60 to-transparent p-5 sm:p-7 text-white pt-20 pointer-events-none">
                  <div className="max-w-3xl pointer-events-auto">
                    <h3 className="font-serif font-black text-lg sm:text-2xl md:text-3xl text-white drop-shadow-md">
                      {lang === "hi"
                        ? realSchoolGallery[activeSlide].titleHi
                        : realSchoolGallery[activeSlide].titleEn}
                    </h3>
                    <p className="text-slate-200 text-sm sm:text-base mt-1.5 sm:mt-2 leading-relaxed drop-shadow-sm max-w-2xl font-normal">
                      {lang === "hi"
                        ? realSchoolGallery[activeSlide].captionHi
                        : realSchoolGallery[activeSlide].captionEn}
                    </p>
                  </div>
                </div>
              </div>

              {/* Slider Bottom Progress & Dots Bar */}
              <div className="bg-slate-950 px-5 py-3.5 border-t border-amber-500/20 flex items-center justify-between">
                {/* Dot Indicators */}
                <div className="flex items-center space-x-2">
                  {realSchoolGallery.map((item, idx) => (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => setActiveSlide(idx)}
                      className={`h-2.5 rounded-full transition-all duration-300 ${
                        activeSlide === idx
                          ? "w-8 bg-gradient-to-r from-amber-400 to-amber-500 shadow-xs"
                          : "w-2.5 bg-white/30 hover:bg-white/60"
                      }`}
                      aria-label={`Go to slide ${idx + 1}`}
                    />
                  ))}
                </div>

                <div className="text-xs sm:text-sm text-slate-300 flex items-center space-x-2 font-medium">
                  <span className="hidden sm:inline">
                    {lang === "hi"
                      ? "किसी भी छायाचित्र को ज़ूम करने हेतु क्लिक करें"
                      : "Click photo to enlarge"}
                  </span>
                  <span className="text-amber-400 font-bold">
                    {activeSlide + 1} of {realSchoolGallery.length}
                  </span>
                </div>
              </div>
            </div>

            {/* THUMBNAIL STRIP */}
            <div className="mt-5 grid grid-cols-3 sm:grid-cols-4 md:grid-cols-7 gap-3 sm:gap-3.5">
              {realSchoolGallery.map((item, idx) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setActiveSlide(idx)}
                  className={`group relative rounded-xl overflow-hidden text-left border-2 transition-all duration-200 focus:outline-hidden ${
                    activeSlide === idx
                      ? "border-amber-500 shadow-lg ring-2 ring-amber-400 scale-102"
                      : "border-slate-200 hover:border-amber-400 opacity-75 hover:opacity-100"
                  }`}
                >
                  <div className="h-18 sm:h-22 w-full overflow-hidden bg-slate-100">
                    <img
                      src={item.imageUrl}
                      alt={lang === "hi" ? item.titleHi : item.titleEn}
                      className="w-full h-full object-cover group-hover:scale-105 transition"
                    />
                  </div>
                  <div className="p-2 bg-white text-xs truncate font-bold text-slate-800">
                    <span className="text-amber-800 mr-1">#{idx + 1}</span>
                    <span>{lang === "hi" ? item.dateBadgeHi : item.dateBadgeEn}</span>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* LIGHTBOX MODAL WITH PREV / NEXT NAVIGATION */}
        {selectedImage && (
          <div
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-3 sm:p-4"
            onClick={() => setSelectedImage(null)}
          >
            <div
              className="bg-slate-950 text-white rounded-3xl max-w-4xl w-full overflow-hidden shadow-2xl relative animate-in zoom-in-95 border border-slate-700"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                type="button"
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 bg-black/70 hover:bg-black text-white p-2.5 rounded-full transition z-20 border border-white/20"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Lightbox Navigation Buttons */}
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  const currentIdx = realSchoolGallery.findIndex((img) => img.id === selectedImage.id);
                  const prevIdx = (currentIdx - 1 + realSchoolGallery.length) % realSchoolGallery.length;
                  setSelectedImage(realSchoolGallery[prevIdx]);
                  setActiveSlide(prevIdx);
                }}
                className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/70 hover:bg-black text-white p-2.5 rounded-full transition z-20 border border-white/20"
                aria-label="Previous"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  const currentIdx = realSchoolGallery.findIndex((img) => img.id === selectedImage.id);
                  const nextIdx = (currentIdx + 1) % realSchoolGallery.length;
                  setSelectedImage(realSchoolGallery[nextIdx]);
                  setActiveSlide(nextIdx);
                }}
                className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/70 hover:bg-black text-white p-2.5 rounded-full transition z-20 border border-white/20"
                aria-label="Next"
              >
                <ChevronRight className="w-6 h-6" />
              </button>

              {/* Big Image View */}
              <div className="max-h-[72vh] w-full bg-black flex items-center justify-center overflow-hidden p-2">
                <img
                  src={selectedImage.imageUrl}
                  alt={lang === "hi" ? selectedImage.titleHi : selectedImage.titleEn}
                  className="max-h-[70vh] w-auto max-w-full object-contain mx-auto rounded-lg shadow-lg"
                />
              </div>

              {/* Caption Footer */}
              <div className="p-4 sm:p-6 bg-slate-900 border-t border-slate-800">
                <div className="inline-block bg-amber-500/20 text-amber-300 text-xs font-semibold px-2.5 py-0.5 rounded-md border border-amber-500/30 mb-2">
                  {lang === "hi" ? selectedImage.dateBadgeHi : selectedImage.dateBadgeEn}
                </div>
                <h3 className="font-serif font-bold text-base sm:text-xl text-white">
                  {lang === "hi" ? selectedImage.titleHi : selectedImage.titleEn}
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 mt-1 leading-relaxed">
                  {lang === "hi" ? selectedImage.captionHi : selectedImage.captionEn}
                </p>
              </div>
            </div>
          </div>
        )}

        {/* ============================================================== */}
        {/* 4. INSTITUTIONAL PILLARS OF EXCELLENCE (WHY CHOOSE ADARSH) */}
        {/* ============================================================== */}
        <section id="pillars" className="py-8 sm:py-14 lg:py-20 bg-gradient-to-b from-[#f8fafc] via-amber-50/30 to-[#f8fafc] bg-dot-pattern border-b border-slate-200/80 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center max-w-3xl mx-auto mb-6 sm:mb-10 lg:mb-14">
              <span className="inline-flex items-center space-x-2 text-xs sm:text-sm uppercase font-extrabold tracking-widest text-slate-950 bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 px-4 py-2 rounded-full shadow-xs">
                <Sparkles className="w-4 h-4 text-slate-950" />
                <span>{lang === "hi" ? "संस्था की मुख्य विशेषताएं" : "Institutional Pillars"}</span>
              </span>
              <h2 className="text-3xl sm:text-5xl font-serif font-black text-slate-900 mt-4 tracking-tight leading-tight">
                {lang === "hi"
                  ? "आदर्श इंग्लिश हायर सेकंडरी स्कूल ही क्यों चुनें?"
                  : "Why Choose Adarsh English H.S. School Nahargarh?"}
              </h2>
              <p className="text-slate-600 mt-3 text-base sm:text-lg md:text-xl leading-relaxed">
                {lang === "hi"
                  ? "नाहरगढ़ एवं सीतामऊ क्षेत्र में 28+ वर्षों का अटूट विश्वास, उत्कृष्ट परीक्षा परिणाम और विद्यार्थियों का सर्वांगीण चरित्र निर्माण।"
                  : "A legacy of 28+ years nurturing intellect, values, and leadership with modern facilities and dedicated mentoring."}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5 sm:gap-6 lg:gap-8">
              {/* Pillar 1 */}
              <div className="bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-7 border border-slate-200 border-t-4 border-t-amber-500 shadow-xs hover:shadow-xl hover:border-amber-400 transition-all duration-300 flex flex-col justify-between group">
                <div>
                  <div className="flex items-center justify-between gap-3 mb-3 sm:mb-4">
                    <div className="w-11 h-11 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-gradient-to-br from-amber-400 to-amber-600 text-white flex items-center justify-center shadow-md shadow-amber-500/25 group-hover:scale-105 transition-transform shrink-0">
                      <Building2 className="w-5 h-5 sm:w-7 sm:h-7" />
                    </div>
                    <span className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-amber-950 bg-amber-100/90 px-2.5 py-1 rounded-full border border-amber-300 text-right">
                      {lang === "hi" ? "स्थापना 1997 • 28+ वर्ष" : "Estd. 1997 • 28+ Years"}
                    </span>
                  </div>
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-serif font-black text-slate-900 leading-snug">
                    {lang === "hi" ? "28+ वर्षों का गौरवशाली शैक्षणिक इतिहास" : "28+ Years of Academic Excellence"}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                    {lang === "hi"
                      ? "1997 से निरंतर नाहरगढ़ एवं सीतामऊ अंचल के हजारों विद्यार्थियों को अनुशासित, गुणवत्तापूर्ण एवं संस्कारवान शिक्षा प्रदान करने वाली अग्रणी संस्था।"
                      : "Trusted by thousands of families across Nahargarh and Sitamau region for consistent quality education since 1997."}
                  </p>
                </div>
                <div className="pt-3.5 sm:pt-4 mt-3 sm:mt-4 border-t border-slate-100 flex items-center justify-between text-[11px] sm:text-xs text-amber-950 font-bold">
                  <span>Reg. No: 1704/97</span>
                  <span>Code: 412109</span>
                </div>
              </div>

              {/* Pillar 2 */}
              <div className="bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-7 border border-slate-200 border-t-4 border-t-blue-600 shadow-xs hover:shadow-xl hover:border-blue-400 transition-all duration-300 flex flex-col justify-between group">
                <div>
                  <div className="flex items-center justify-between gap-3 mb-3 sm:mb-4">
                    <div className="w-11 h-11 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-600 text-white flex items-center justify-center shadow-md shadow-blue-500/25 group-hover:scale-105 transition-transform shrink-0">
                      <Trophy className="w-5 h-5 sm:w-7 sm:h-7" />
                    </div>
                    <span className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-blue-950 bg-blue-100/90 px-2.5 py-1 rounded-full border border-blue-300 text-right">
                      {lang === "hi" ? "10वीं व 12वीं बोर्ड" : "10th & 12th Board Results"}
                    </span>
                  </div>
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-serif font-black text-slate-900 leading-snug">
                    {lang === "hi" ? "100% बोर्ड परीक्षा परिणाम मार्गदर्शन" : "Consistent Board Exam Success"}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                    {lang === "hi"
                      ? "मध्य प्रदेश माध्यमिक शिक्षा मंडल (MP Board) 10वीं एवं 12वीं में विषयवार गहन शिक्षण, साप्ताहिक टेस्ट श्रृंखला व व्यक्तिगत मार्गदर्शन।"
                      : "Intensive syllabus coverage, regular test series, and dedicated teacher mentorship for MP Board exams in Science & Commerce."}
                  </p>
                </div>
                <div className="pt-3.5 sm:pt-4 mt-3 sm:mt-4 border-t border-slate-100 flex items-center justify-between text-[11px] sm:text-xs text-blue-950 font-bold">
                  <span>{lang === "hi" ? "साइंस (PCM/PCB) संकाय" : "Science (PCM/PCB)"}</span>
                  <span>{lang === "hi" ? "कॉमर्स संकाय" : "Commerce Stream"}</span>
                </div>
              </div>

              {/* Pillar 3 */}
              <div className="bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-7 border border-slate-200 border-t-4 border-t-emerald-600 shadow-xs hover:shadow-xl hover:border-emerald-400 transition-all duration-300 flex flex-col justify-between group">
                <div>
                  <div className="flex items-center justify-between gap-3 mb-3 sm:mb-4">
                    <div className="w-11 h-11 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-600 text-white flex items-center justify-center shadow-md shadow-emerald-500/25 group-hover:scale-105 transition-transform shrink-0">
                      <Target className="w-5 h-5 sm:w-7 sm:h-7" />
                    </div>
                    <span className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-emerald-950 bg-emerald-100/90 px-2.5 py-1 rounded-full border border-emerald-300 text-right">
                      {lang === "hi" ? "आर्मी, मेडिकल व सीए" : "Defense, Medical & CA"}
                    </span>
                  </div>
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-serif font-black text-slate-900 leading-snug">
                    {lang === "hi" ? "सेना, डॉक्टर्स व सीए में चयनित पूर्व छात्र" : "Proven Career Pipeline"}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                    {lang === "hi"
                      ? "भारतीय सेना में लेफ्टिनेंट कनिष्क मोड़, एमबीबीएस डॉक्टर्स, सीए एवं इंजीनियर्स के रूप में देश सेवा कर रहे सफल पूर्व विद्यार्थियों का गौरव।"
                      : "Nurturing students who proudly serve as Army Lieutenants, MBBS Doctors, Chartered Accountants, and Software Engineers."}
                  </p>
                </div>
                <div className="pt-3.5 sm:pt-4 mt-3 sm:mt-4 border-t border-slate-100 flex items-center justify-between text-[11px] sm:text-xs text-emerald-950 font-bold">
                  <span>{lang === "hi" ? "लेफ्टिनेंट कनिष्क मोड़" : "Lt. Kanishk Mod"}</span>
                  <span>{lang === "hi" ? "डॉ. अंकिता हरोलिया (MBBS)" : "Dr. Ankita (MBBS)"}</span>
                </div>
              </div>

              {/* Pillar 4 */}
              <div className="bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-7 border border-slate-200 border-t-4 border-t-purple-600 shadow-xs hover:shadow-xl hover:border-purple-400 transition-all duration-300 flex flex-col justify-between group">
                <div>
                  <div className="flex items-center justify-between gap-3 mb-3 sm:mb-4">
                    <div className="w-11 h-11 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-gradient-to-br from-purple-500 to-indigo-600 text-white flex items-center justify-center shadow-md shadow-purple-500/25 group-hover:scale-105 transition-transform shrink-0">
                      <FlaskConical className="w-5 h-5 sm:w-7 sm:h-7" />
                    </div>
                    <span className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-purple-950 bg-purple-100/90 px-2.5 py-1 rounded-full border border-purple-300 text-right">
                      {lang === "hi" ? "आधुनिक प्रयोगशालाएं" : "Modern Labs"}
                    </span>
                  </div>
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-serif font-black text-slate-900 leading-snug">
                    {lang === "hi" ? "सुसज्जित विज्ञान एवं कंप्यूटर लैब्स" : "Science & Computer Infrastructure"}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                    {lang === "hi"
                      ? "भौतिक, रसायन व जीव विज्ञान के प्रायोगिक उपकरणों से युक्त आधुनिक लैब्स तथा प्राथमिक कक्षाओं से ही व्यावहारिक कंप्यूटर शिक्षा।"
                      : "Hands-on science laboratories for Physics, Chemistry, and Biology, paired with practical digital computer education."}
                  </p>
                </div>
                <div className="pt-3.5 sm:pt-4 mt-3 sm:mt-4 border-t border-slate-100 flex items-center justify-between text-[11px] sm:text-xs text-purple-950 font-bold">
                  <span>Physics • Chemistry • Biology</span>
                  <span>Digital Lab</span>
                </div>
              </div>

              {/* Pillar 5 */}
              <div className="bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-7 border border-slate-200 border-t-4 border-t-orange-500 shadow-xs hover:shadow-xl hover:border-orange-400 transition-all duration-300 flex flex-col justify-between group">
                <div>
                  <div className="flex items-center justify-between gap-3 mb-3 sm:mb-4">
                    <div className="w-11 h-11 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-gradient-to-br from-orange-500 to-amber-600 text-white flex items-center justify-center shadow-md shadow-orange-500/25 group-hover:scale-105 transition-transform shrink-0">
                      <Bus className="w-5 h-5 sm:w-7 sm:h-7" />
                    </div>
                    <span className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-orange-950 bg-orange-100/90 px-2.5 py-1 rounded-full border border-orange-300 text-right">
                      {lang === "hi" ? "परिवहन सुविधा" : "Transport Fleet"}
                    </span>
                  </div>
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-serif font-black text-slate-900 leading-snug">
                    {lang === "hi" ? "सुरक्षित स्कूल बस व ग्रामीण अंचल कनेक्टिविटी" : "Safe Rural Bus Connectivity"}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                    {lang === "hi"
                      ? "नाहरगढ़ कस्बे एवं आसपास के दर्जनों ग्रामीण क्षेत्रों से विद्यार्थियों के लिए सुरक्षित बस व वाहन सुविधा, अनुभवी चालक व सुरक्षा।"
                      : "Dedicated school bus connectivity ensuring safe and punctual transit for students from Nahargarh and neighboring villages."}
                  </p>
                </div>
                <div className="pt-3.5 sm:pt-4 mt-3 sm:mt-4 border-t border-slate-100 flex items-center justify-between text-[11px] sm:text-xs text-orange-950 font-bold">
                  <span>{lang === "hi" ? "नाहरगढ़ व निकटवर्ती गांव" : "Nahargarh & Surrounding Areas"}</span>
                  <span className="text-emerald-700 font-bold">✓ Safe & Verified</span>
                </div>
              </div>

              {/* Pillar 6 */}
              <div className="bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-7 border border-slate-200 border-t-4 border-t-rose-600 shadow-xs hover:shadow-xl hover:border-rose-400 transition-all duration-300 flex flex-col justify-between group">
                <div>
                  <div className="flex items-center justify-between gap-3 mb-3 sm:mb-4">
                    <div className="w-11 h-11 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-gradient-to-br from-rose-500 to-red-600 text-white flex items-center justify-center shadow-md shadow-rose-500/25 group-hover:scale-105 transition-transform shrink-0">
                      <HeartHandshake className="w-5 h-5 sm:w-7 sm:h-7" />
                    </div>
                    <span className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-rose-950 bg-rose-100/90 px-2.5 py-1 rounded-full border border-rose-300 text-right">
                      {lang === "hi" ? "संस्कार व अनुशासन" : "Sanatan Sanskar"}
                    </span>
                  </div>
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-serif font-black text-slate-900 leading-snug">
                    {lang === "hi" ? "सनातन संस्कार एवं सर्वांगीण व्यक्तित्व" : "Values, Ethics & Character Building"}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                    {lang === "hi"
                      ? "संस्था का मूलमंत्र: 'शिक्षा • सेवा • साधना'। दैनिक प्रार्थना, नैतिक शिक्षा, खेलकूद, राष्ट्रीय पर्व व सांस्कृतिक कार्यक्रमों का सुंदर समन्वय।"
                      : "Grounding modern English education in traditional cultural values, sports, discipline, and moral character development."}
                  </p>
                </div>
                <div className="pt-3.5 sm:pt-4 mt-3 sm:mt-4 border-t border-slate-100 flex items-center justify-between text-[11px] sm:text-xs text-rose-950 font-bold">
                  <span>{lang === "hi" ? "मूलमंत्र: शिक्षा • सेवा • साधना" : "Education • Service • Dedication"}</span>
                  <span>🏆 Holistic Growth</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================================== */}
        {/* 4. FOUNDER & PRINCIPAL DETAILS */}
        {/* ============================================================== */}
        <section id="about-founder" className="py-8 sm:py-14 lg:py-20 bg-gradient-to-b from-white via-amber-50/25 to-white bg-dot-pattern-light border-b border-amber-200/50 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center max-w-3xl mx-auto mb-6 sm:mb-10 lg:mb-14">
              <span className="inline-flex items-center space-x-2 text-xs sm:text-sm uppercase font-extrabold tracking-widest text-white bg-gradient-to-r from-amber-500 to-orange-500 px-4 py-2 rounded-full shadow-xs">
                <span>👨‍🏫</span>
                <span>{lang === "hi" ? "संस्थापक एवं प्राचार्य" : "Founder & Principal"}</span>
              </span>
              <h2 className="text-3xl sm:text-5xl font-serif font-black text-slate-900 mt-4 tracking-tight leading-tight">
                {lang === "hi" ? "संस्थापक परिचय एवं संदेश" : "Founder & Principal's Message"}
              </h2>
              <p className="text-slate-600 mt-3 text-base sm:text-lg md:text-xl leading-relaxed">
                {lang === "hi"
                  ? "नाहरगढ़ एवं सीतामऊ अंचल में शिक्षा की अलख जगाने वाले संस्थापक श्री विजय नारायण शर्मा का प्रेरणादायी संदेश।"
                  : "Leadership and educational philosophy of Founder & Principal Shri Vijay Narayan Sharma."}
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-8 lg:gap-10 items-stretch">
              {/* Founder Profile Card with Authentic Photo */}
              <div className="lg:col-span-7 bg-gradient-to-br from-amber-50/60 via-white to-orange-50/30 rounded-2xl sm:rounded-3xl p-4 sm:p-7 lg:p-9 border-2 border-amber-200/90 flex flex-col justify-between shadow-xl">
                <div>
                  <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-6 pb-6 border-b border-amber-200/70">
                    <div className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-2xl overflow-hidden bg-slate-100 ring-4 ring-amber-500 shrink-0 shadow-xl">
                      <img
                        src="/school/vijay_narayan_sharma_portrait.jpg"
                        alt="Founder & Principal Shri Vijay Narayan Sharma"
                        className="w-full h-full object-cover"
                      />
                      <span className="absolute bottom-1 right-1 bg-gradient-to-r from-amber-500 to-orange-500 text-slate-950 text-[10px] font-black px-2 py-0.5 rounded shadow">
                        1997
                      </span>
                    </div>
                    <div className="space-y-1.5">
                      <div className="flex flex-wrap items-center gap-2.5">
                        <h3 className="text-2xl sm:text-3xl md:text-4xl font-serif font-black text-slate-900">
                          {lang === "hi" ? "श्री विजय नारायण शर्मा" : "Shri Vijay Narayan Sharma"}
                        </h3>
                        <span className="bg-gradient-to-r from-amber-500 to-orange-500 text-white text-xs font-extrabold px-3 py-1 rounded-full shadow-xs">
                          {lang === "hi" ? "संस्थापक एवं प्राचार्य" : "Founder & Principal"}
                        </span>
                      </div>
                      <p className="text-amber-950 text-sm sm:text-base font-bold">
                        Adarsh Senior Secondary English School, Nahargarh (M.P.)
                      </p>

                      <div className="flex flex-wrap items-center gap-3 pt-2">
                        <a
                          href="https://www.instagram.com/vijay_narayan_1972/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center space-x-1.5 text-xs sm:text-sm text-rose-700 font-bold hover:underline bg-rose-50 px-3 py-1.5 rounded-xl border border-rose-300"
                        >
                          <InstagramIcon className="w-4 h-4" />
                          <span>@vijay_narayan_1972</span>
                        </a>

                        <a
                          href="tel:+919993446271"
                          className="inline-flex items-center space-x-1.5 text-xs sm:text-sm text-slate-800 hover:text-amber-950 font-bold bg-amber-50 px-3 py-1.5 rounded-xl border border-amber-300"
                        >
                          <Phone className="w-3.5 h-3.5 text-amber-700" />
                          <span>+91 99934 46271</span>
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 space-y-4 text-slate-700 text-sm sm:text-base leading-relaxed">
                    <div className="p-5 bg-gradient-to-r from-amber-100/90 via-orange-50 to-amber-100/80 border-l-4 border-amber-600 rounded-r-2xl shadow-xs">
                      <p className="font-semibold text-amber-950 italic text-sm sm:text-base md:text-lg leading-relaxed">
                        {lang === "hi"
                          ? "“🙏 जय श्री महाँकाल 📿 • शिक्षा, सेवा, साधना ही हमारा ध्येय है। जब 1997 में हमने नाहरगढ़ की पावन धरा पर आदर्श इंग्लिश स्कूल की नींव रखी थी, तब हमारा स्वप्न था कि इस अंचल के प्रत्येक बच्चे को उत्कृष्ट अंग्रेजी माध्यम शिक्षा व उत्तम सनातन संस्कार सुलभ हों।”"
                          : "“🙏 Jai Shree Mahakal 📿 • Education, Service, and Dedication are our driving forces. In 1997, when we laid the foundation of Adarsh English School in Nahargarh, our vision was to bring premier English medium schooling and strong character values to every child.”"}
                      </p>
                    </div>

                    <p>
                      {lang === "hi"
                        ? "आज 28 से अधिक वर्षों की सतत सेवा के पश्चात, हमारे विद्यालय के छात्र-छात्राएं भारतीय सेना (Indian Army) में लेफ्टिनेंट व सैनिक, एमबीबीएस डॉक्टर्स, सीए, इंजीनियर्स और फिल्म उद्योग में अपनी प्रतिभा का लोहा मनवा रहे हैं।"
                        : "Today, after more than 28 years of educational service, our graduates proudly serve as Lieutenants and soldiers in the Indian Army, MBBS doctors, Chartered Accountants, engineers, and creative artists."}
                    </p>
                    <p>
                      {lang === "hi"
                        ? "कक्षा नर्सरी से लेकर 12 वीं तक के प्रत्येक विद्यार्थी के सर्वांगीण विकास, नैतिक मूल्यों एवं परीक्षा परिणामों के लिए हमारा शिक्षक परिवार सदैव समर्पित है।"
                        : "Our teaching faculty is dedicated to the all-round academic, physical, and moral development of every student from Nursery up to Class 12th."}
                    </p>
                  </div>
                </div>

                <div className="pt-5 mt-6 border-t border-amber-200/70 flex flex-wrap items-center justify-between text-xs sm:text-sm text-slate-600 gap-2">
                  <span className="font-bold text-slate-800">
                    {lang === "hi" ? "संस्था पंजीकरण: 1704/97" : "Registration No: 1704/97"}
                  </span>
                  <span className="font-bold text-amber-950">
                    {lang === "hi" ? "स्थान: नाहरगढ़ (मन्दसौर, म.प्र.)" : "Nahargarh, Mandsaur (M.P.)"}
                  </span>
                </div>
              </div>

              {/* Award photo & Direct WhatsApp Contact Card */}
              <div className="lg:col-span-5 flex flex-col space-y-4 sm:space-y-6">
                <div className="bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-6 border-2 border-slate-200 shadow-md overflow-hidden">
                  <div className="relative h-48 sm:h-56 w-full rounded-xl sm:rounded-2xl overflow-hidden mb-3.5 sm:mb-4 bg-slate-900">
                    <img
                      src="/school/gallery/school_insta_4.webp"
                      alt="Award Ceremony with Founder Vijay Narayan Sharma"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute bottom-2.5 left-2.5 sm:bottom-3 sm:left-3 bg-gradient-to-r from-amber-500 to-orange-500 text-slate-950 text-xs font-black px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-lg shadow-md">
                      {lang === "hi" ? "स्टूडेंट ऑफ द ईयर 2026 समारोह" : "Student of the Year 2026 Ceremony"}
                    </div>
                  </div>
                  <h4 className="font-serif font-black text-lg sm:text-xl text-slate-900">
                    {lang === "hi" ? "प्रतिभाओं को निरंतर सम्मान व प्रोत्साहन" : "Fostering Student Talent"}
                  </h4>
                  <p className="text-slate-600 text-xs sm:text-base leading-relaxed mt-1.5 sm:mt-2">
                    {lang === "hi"
                      ? "वार्षिक पुरस्कार, स्टूडेंट ऑफ द ईयर शील्ड एवं विशेष मार्गदर्शन द्वारा विद्यार्थियों में नेतृत्व क्षमता एवं आत्मविश्वास का विकास किया जाता है।"
                      : "Annual awards, Student of the Year trophies, and individual care motivate our students to achieve outstanding results in board exams and sports."}
                  </p>
                </div>

                {/* Direct WhatsApp Callout Card */}
                <div className="bg-gradient-to-br from-blue-900 via-indigo-900 to-blue-950 text-white rounded-2xl sm:rounded-3xl p-5 sm:p-7 shadow-xl flex-1 flex flex-col justify-between space-y-4 sm:space-y-5 border-2 border-amber-400/40">
                  <div>
                    <div className="flex items-center justify-between">
                      <span className="text-xs uppercase font-black tracking-widest text-amber-400">
                        {lang === "hi" ? "सीधा संपर्क सूत्र" : "Direct Connect"}
                      </span>
                      <span className="text-xs bg-emerald-500/25 text-emerald-300 font-bold px-3 py-1 rounded-full border border-emerald-400/40">
                        8 AM – 8 PM
                      </span>
                    </div>
                    <h4 className="font-serif font-bold text-xl sm:text-2xl text-white mt-2">
                      {lang === "hi" ? "प्राचार्य जी से सीधे बात करें" : "Talk Directly with the Principal"}
                    </h4>
                    <p className="text-slate-200 text-sm sm:text-base mt-2.5 leading-relaxed">
                      {lang === "hi"
                        ? "विद्यालय में प्रवेश, पाठ्यक्रम अथवा बस सुविधा संबंधी किसी भी जानकारी के लिए सीधे व्हाट्सएप या फोन पर संपर्क करें। (संपर्क समय: प्रातः 8:00 से रात्रि 8:00 बजे तक)"
                        : "For any questions regarding admissions, syllabus, or school bus stops, send a message or call. (Contact can be made: 8:00 AM to 8:00 PM)"}
                    </p>
                  </div>

                  <a
                    href={getWhatsAppLink(
                      lang === "hi"
                        ? "नमस्ते प्राचार्य श्री विजय नारायण शर्मा जी, मैं आदर्श इंग्लिश स्कूल नाहरगढ़ में प्रवेश संबंधी जानकारी लेना चाहता हूँ।"
                        : "Hello Principal Shri Vijay Narayan Sharma ji, I would like to inquire about admissions at Adarsh English School Nahargarh."
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-4 px-5 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white rounded-2xl text-sm sm:text-base font-bold flex items-center justify-center space-x-2.5 transition shadow-xl active:scale-95 border border-white/20"
                  >
                    <WhatsAppIcon className="w-5 h-5" />
                    <span>{lang === "hi" ? "व्हाट्सएप पर संदेश भेजें (+91 99934 46271)" : "Message on WhatsApp (+91 99934 46271)"}</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================================== */}
        {/* 5. COURSES & CLASS-WISE DETAILS (Which Class to Which Class) */}
        {/* ============================================================== */}
        <section id="courses" className="py-8 sm:py-14 lg:py-20 bg-gradient-to-b from-[#f8fafc] via-blue-50/30 to-[#f8fafc] bg-dot-pattern border-b border-slate-200/80 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center max-w-3xl mx-auto mb-6 sm:mb-10 lg:mb-14">
              <span className="inline-flex items-center space-x-2 text-xs sm:text-sm uppercase font-extrabold tracking-widest text-white bg-gradient-to-r from-blue-600 to-indigo-600 px-4 py-2 rounded-full shadow-xs">
                <span>📚</span>
                <span>{lang === "hi" ? "कक्षा स्तर विवरण" : "Course Structure"}</span>
              </span>
              <h2 className="text-3xl sm:text-5xl font-serif font-black text-slate-900 mt-4 tracking-tight leading-tight">
                {lang === "hi"
                  ? "कक्षा नर्सरी से 12 वीं तक (अंग्रेजी माध्यम)"
                  : "Classes: Nursery to 12th (English Medium)"}
              </h2>
              <p className="text-slate-600 mt-3 text-base sm:text-lg md:text-xl leading-relaxed">
                {lang === "hi"
                  ? "प्रारंभिक बाल्यकाल शिक्षा से लेकर उच्चतर माध्यमिक (साइंस / कॉमर्स संकाय) तक सुनियोजित एवं संस्कारयुक्त पाठ्यक्रम।"
                  : "Complete academic pathway from Early Childhood to Senior Secondary Board Examinations."}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-5 lg:gap-6">
              {/* Level 1: Pre-Primary */}
              <div className="bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-5 lg:p-6 border border-slate-200 border-t-4 border-t-amber-500 shadow-xs flex flex-col justify-between hover:shadow-xl hover:border-amber-400 transition-all duration-300 group">
                <div>
                  <div className="flex items-center justify-between gap-2.5 mb-2.5 sm:mb-3">
                    <div className="w-11 h-11 sm:w-13 sm:h-13 rounded-xl sm:rounded-2xl bg-gradient-to-br from-amber-400 to-amber-600 text-white flex items-center justify-center shadow-md shadow-amber-500/25 group-hover:scale-105 transition-transform shrink-0">
                      <Sparkles className="w-5 h-5 sm:w-6.5 sm:h-6.5" />
                    </div>
                    <span className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-amber-950 bg-amber-100/90 px-2.5 py-1 rounded-full border border-amber-300 text-right">
                      {lang === "hi" ? "प्रारंभिक कक्षाएं" : "Foundational Stage"}
                    </span>
                  </div>
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-serif font-black text-slate-900 leading-snug">
                    Pre-Primary Wing
                  </h3>
                  <p className="text-xs sm:text-sm font-bold text-amber-950 mt-0.5">
                    Nursery, LKG, UKG (Age 3 to 5 Yrs)
                  </p>

                  {/* Micro tags */}
                  <div className="flex flex-wrap gap-1 sm:gap-1.5 mt-2.5 mb-3">
                    <span className="text-[11px] sm:text-xs bg-amber-50 text-amber-950 border border-amber-200 px-2 py-0.5 rounded-md font-bold">Phonics</span>
                    <span className="text-[11px] sm:text-xs bg-amber-50 text-amber-950 border border-amber-200 px-2 py-0.5 rounded-md font-bold">Play-Way</span>
                    <span className="text-[11px] sm:text-xs bg-amber-50 text-amber-950 border border-amber-200 px-2 py-0.5 rounded-md font-bold">Care</span>
                  </div>

                  <div className="space-y-1.5 sm:space-y-2 text-xs sm:text-sm text-slate-700">
                    <div className="flex items-start space-x-2">
                      <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>
                        {lang === "hi"
                          ? "खेल-खेल में शिक्षा (Play-way method)"
                          : "Joyful play-way & activity-based learning"}
                      </span>
                    </div>
                    <div className="flex items-start space-x-2">
                      <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>
                        {lang === "hi"
                          ? "अंग्रेजी वर्णमाला, फोनिक्स व बालगीत"
                          : "Phonics, English alphabet & rhymes"}
                      </span>
                    </div>
                    <div className="flex items-start space-x-2">
                      <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>
                        {lang === "hi"
                          ? "सुरक्षित खिलौने व स्नेहपूर्ण देखभाल"
                          : "Safe toys, motor skills & caring attendants"}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="mt-3.5 sm:mt-5 pt-3 sm:pt-3.5 border-t border-slate-100 space-y-2.5">
                  <div className="flex items-center justify-between text-[11px] sm:text-xs text-slate-600">
                    <span>{lang === "hi" ? "समय: प्रातः 8:30 से 12:30" : "8:30 AM – 12:30 PM"}</span>
                    <span className="font-bold text-amber-900">Mon - Fri</span>
                  </div>
                  <a
                    href={getWhatsAppLink(
                      lang === "hi"
                        ? "नमस्ते, मुझे नर्सरी, LKG अथवा UKG में प्रवेश संबंधी जानकारी चाहिए।"
                        : "Hello, I want details regarding Nursery/KG admissions."
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-2.5 sm:py-3 px-3 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-500 hover:to-amber-600 text-slate-950 font-black rounded-xl text-xs sm:text-sm flex items-center justify-center space-x-1.5 transition active:scale-95 shadow-xs"
                  >
                    <WhatsAppIcon className="w-4 h-4 text-slate-950" />
                    <span>{lang === "hi" ? "नर्सरी प्रवेश पूछताछ" : "Pre-Primary Enquiry"}</span>
                  </a>
                </div>
              </div>

              {/* Level 2: Primary */}
              <div className="bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-5 lg:p-6 border border-slate-200 border-t-4 border-t-blue-600 shadow-xs flex flex-col justify-between hover:shadow-xl hover:border-blue-400 transition-all duration-300 group">
                <div>
                  <div className="flex items-center justify-between gap-2.5 mb-2.5 sm:mb-3">
                    <div className="w-11 h-11 sm:w-13 sm:h-13 rounded-xl sm:rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-600 text-white flex items-center justify-center shadow-md shadow-blue-500/25 group-hover:scale-105 transition-transform shrink-0">
                      <BookOpen className="w-5 h-5 sm:w-6.5 sm:h-6.5" />
                    </div>
                    <span className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-blue-950 bg-blue-100/90 px-2.5 py-1 rounded-full border border-blue-300 text-right">
                      {lang === "hi" ? "प्राथमिक वर्ग" : "Primary Wing"}
                    </span>
                  </div>
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-serif font-black text-slate-900 leading-snug">
                    {lang === "hi" ? "कक्षा 1 से 5 (Class 1 to 5)" : "Class 1 to Class 5"}
                  </h3>
                  <p className="text-xs sm:text-sm font-bold text-blue-950 mt-0.5">
                    Primary Stage (Age 6 to 10 Yrs)
                  </p>

                  {/* Micro tags */}
                  <div className="flex flex-wrap gap-1 sm:gap-1.5 mt-2.5 mb-3">
                    <span className="text-[11px] sm:text-xs bg-blue-50 text-blue-950 border border-blue-200 px-2 py-0.5 rounded-md font-bold">English Speaking</span>
                    <span className="text-[11px] sm:text-xs bg-blue-50 text-blue-950 border border-blue-200 px-2 py-0.5 rounded-md font-bold">Math & EVS</span>
                    <span className="text-[11px] sm:text-xs bg-blue-50 text-blue-950 border border-blue-200 px-2 py-0.5 rounded-md font-bold">Computers</span>
                  </div>

                  <div className="space-y-1.5 sm:space-y-2 text-xs sm:text-sm text-slate-700">
                    <div className="flex items-start space-x-2">
                      <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>
                        {lang === "hi"
                          ? "अंग्रेजी बोलने, लिखने व पढ़ने पर विशेष बल"
                          : "English speaking, writing & phonetics"}
                      </span>
                    </div>
                    <div className="flex items-start space-x-2">
                      <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>
                        {lang === "hi"
                          ? "गणित, सामान्य विज्ञान व पर्यावरण अध्ययन"
                          : "Mathematics, General Science & EVS"}
                      </span>
                    </div>
                    <div className="flex items-start space-x-2">
                      <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>
                        {lang === "hi"
                          ? "कंप्यूटर शिक्षा, चित्रकला व नैतिक संस्कार"
                          : "Computer education, arts & moral values"}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="mt-3.5 sm:mt-5 pt-3 sm:pt-3.5 border-t border-slate-100 space-y-2.5">
                  <div className="flex items-center justify-between text-[11px] sm:text-xs text-slate-600">
                    <span>{lang === "hi" ? "समय: प्रातः 8:00 से 1:30" : "8:00 AM – 1:30 PM"}</span>
                    <span className="font-bold text-blue-900">Mon - Sat</span>
                  </div>
                  <a
                    href={getWhatsAppLink(
                      lang === "hi"
                        ? "नमस्ते, मुझे कक्षा 1 से 5 में प्रवेश संबंधी जानकारी चाहिए।"
                        : "Hello, I want details regarding Class 1 to 5 admissions."
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-2.5 sm:py-3 px-3 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold rounded-xl text-xs sm:text-sm flex items-center justify-center space-x-1.5 transition active:scale-95 shadow-xs"
                  >
                    <WhatsAppIcon className="w-4 h-4 text-white" />
                    <span>{lang === "hi" ? "प्राथमिक वर्ग पूछताछ" : "Primary Enquiry"}</span>
                  </a>
                </div>
              </div>

              {/* Level 3: Middle School */}
              <div className="bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-5 lg:p-6 border border-slate-200 border-t-4 border-t-purple-600 shadow-xs flex flex-col justify-between hover:shadow-xl hover:border-purple-400 transition-all duration-300 group">
                <div>
                  <div className="flex items-center justify-between gap-2.5 mb-2.5 sm:mb-3">
                    <div className="w-11 h-11 sm:w-13 sm:h-13 rounded-xl sm:rounded-2xl bg-gradient-to-br from-purple-500 to-violet-600 text-white flex items-center justify-center shadow-md shadow-purple-500/25 group-hover:scale-105 transition-transform shrink-0">
                      <FlaskConical className="w-5 h-5 sm:w-6.5 sm:h-6.5" />
                    </div>
                    <span className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-purple-950 bg-purple-100/90 px-2.5 py-1 rounded-full border border-purple-300 text-right">
                      {lang === "hi" ? "माध्यमिक वर्ग" : "Middle Wing"}
                    </span>
                  </div>
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-serif font-black text-slate-900 leading-snug">
                    {lang === "hi" ? "कक्षा 6 से 8 (Class 6 to 8)" : "Class 6 to Class 8"}
                  </h3>
                  <p className="text-xs sm:text-sm font-bold text-purple-950 mt-0.5">
                    Middle Stage (Age 11 to 13 Yrs)
                  </p>

                  {/* Micro tags */}
                  <div className="flex flex-wrap gap-1 sm:gap-1.5 mt-2.5 mb-3">
                    <span className="text-[11px] sm:text-xs bg-purple-50 text-purple-950 border border-purple-200 px-2 py-0.5 rounded-md font-bold">Science Labs</span>
                    <span className="text-[11px] sm:text-xs bg-purple-50 text-purple-950 border border-purple-200 px-2 py-0.5 rounded-md font-bold">Higher Math</span>
                    <span className="text-[11px] sm:text-xs bg-purple-50 text-purple-950 border border-purple-200 px-2 py-0.5 rounded-md font-bold">Debates & Quiz</span>
                  </div>

                  <div className="space-y-1.5 sm:space-y-2 text-xs sm:text-sm text-slate-700">
                    <div className="flex items-start space-x-2">
                      <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>
                        {lang === "hi"
                          ? "विज्ञान प्रयोग (फिजिक्स, केमिस्ट्री, बायो)"
                          : "Hands-on science experiments in labs"}
                      </span>
                    </div>
                    <div className="flex items-start space-x-2">
                      <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>
                        {lang === "hi"
                          ? "उच्च गणित, सामाजिक विज्ञान व कंप्यूटर"
                          : "Advanced Math, Social Studies & Computers"}
                      </span>
                    </div>
                    <div className="flex items-start space-x-2">
                      <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>
                        {lang === "hi"
                          ? "प्रश्नोत्तरी, खेलकूद व वाद-विवाद प्रतियोगिताएं"
                          : "Sports, quiz, debates & olympiad practice"}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="mt-3.5 sm:mt-5 pt-3 sm:pt-3.5 border-t border-slate-100 space-y-2.5">
                  <div className="flex items-center justify-between text-[11px] sm:text-xs text-slate-600">
                    <span>{lang === "hi" ? "समय: प्रातः 8:00 से 2:00" : "8:00 AM – 2:00 PM"}</span>
                    <span className="font-bold text-purple-900">Mon - Sat</span>
                  </div>
                  <a
                    href={getWhatsAppLink(
                      lang === "hi"
                        ? "नमस्ते, मुझे कक्षा 6 से 8 में प्रवेश संबंधी जानकारी चाहिए।"
                        : "Hello, I want details regarding Class 6 to 8 admissions."
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-2.5 sm:py-3 px-3 bg-gradient-to-r from-purple-600 to-violet-600 hover:from-purple-700 hover:to-violet-700 text-white font-bold rounded-xl text-xs sm:text-sm flex items-center justify-center space-x-1.5 transition active:scale-95 shadow-xs"
                  >
                    <WhatsAppIcon className="w-4 h-4 text-white" />
                    <span>{lang === "hi" ? "माध्यमिक पूछताछ" : "Middle Wing Enquiry"}</span>
                  </a>
                </div>
              </div>

              {/* Level 4: High School & Higher Secondary (9th to 12th) */}
              <div className="bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-5 lg:p-6 border-2 border-emerald-600 border-t-4 border-t-emerald-500 shadow-md flex flex-col justify-between relative hover:shadow-2xl transition-all duration-300 group">
                <div className="absolute -top-3 right-3 sm:right-4 bg-gradient-to-r from-amber-400 to-amber-500 text-slate-950 text-[10px] sm:text-xs font-black px-3 py-1 rounded-full uppercase tracking-wider shadow-md">
                  {lang === "hi" ? "बोर्ड परीक्षा वर्ग" : "Board Stage"}
                </div>
                <div>
                  <div className="flex items-center justify-between gap-2.5 mb-2.5 sm:mb-3">
                    <div className="w-11 h-11 sm:w-13 sm:h-13 rounded-xl sm:rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-600 text-white flex items-center justify-center shadow-md shadow-emerald-500/25 group-hover:scale-105 transition-transform shrink-0">
                      <GraduationCap className="w-5 h-5 sm:w-6.5 sm:h-6.5" />
                    </div>
                    <span className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-emerald-950 bg-emerald-100/90 px-2.5 py-1 rounded-full border border-emerald-300 text-right">
                      {lang === "hi" ? "उच्चतर माध्यमिक" : "Senior Secondary"}
                    </span>
                  </div>
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-serif font-black text-slate-900 leading-snug">
                    {lang === "hi" ? "कक्षा 9वीं से 12वीं तक" : "Class 9th to 12th"}
                  </h3>
                  <p className="text-xs sm:text-sm font-bold text-emerald-950 mt-0.5">
                    Board Examinations & Higher Secondary
                  </p>

                  {/* Micro tags */}
                  <div className="flex flex-wrap gap-1 sm:gap-1.5 mt-2.5 mb-3">
                    <span className="text-[11px] sm:text-xs bg-slate-100 text-slate-800 border border-slate-300 px-2 py-0.5 rounded-md font-bold">MP Board</span>
                    <span className="text-[11px] sm:text-xs bg-emerald-50 text-emerald-950 border border-emerald-300 px-2 py-0.5 rounded-md font-bold">Science (PCM/PCB)</span>
                    <span className="text-[11px] sm:text-xs bg-blue-50 text-blue-950 border border-blue-300 px-2 py-0.5 rounded-md font-bold">Commerce</span>
                    <span className="text-[11px] sm:text-xs bg-amber-50 text-amber-950 border border-amber-300 px-2 py-0.5 rounded-md font-bold">Defense/NEET</span>
                  </div>

                  <div className="space-y-1.5 sm:space-y-2 text-xs sm:text-sm text-slate-700">
                    <div className="flex items-start space-x-2">
                      <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>
                        {lang === "hi"
                          ? "10वीं व 12वीं बोर्ड परीक्षा की गहन तैयारी"
                          : "10th & 12th Board Exam coaching & test series"}
                      </span>
                    </div>
                    <div className="flex items-start space-x-2">
                      <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>
                        {lang === "hi"
                          ? "साइंस (PCM/PCB) एवं कॉमर्स संकाय"
                          : "Science (PCM/PCB) & Commerce streams"}
                      </span>
                    </div>
                    <div className="flex items-start space-x-2">
                      <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>
                        {lang === "hi"
                          ? "आर्मी भर्ती, NDA, NEET, JEE व CA मार्गदर्शन"
                          : "Guidance for Army recruitment, NDA, NEET, CA"}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="mt-3.5 sm:mt-5 pt-3 sm:pt-3.5 border-t border-slate-100 space-y-2.5">
                  <div className="flex items-center justify-between text-[11px] sm:text-xs text-slate-600">
                    <span>{lang === "hi" ? "समय: प्रातः 7:45 से 2:30" : "7:45 AM – 2:30 PM"}</span>
                    <span className="font-bold text-emerald-900">Mon - Sat</span>
                  </div>
                  <a
                    href={getWhatsAppLink(
                      lang === "hi"
                        ? "नमस्ते, मुझे कक्षा 9वीं से 12वीं (साइंस / कॉमर्स संकाय) प्रवेश की जानकारी चाहिए।"
                        : "Hello, I want details regarding Class 9-12 Science/Commerce admissions."
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-2.5 sm:py-3 px-3 bg-gradient-to-r from-blue-700 via-indigo-700 to-blue-800 hover:from-blue-800 hover:to-indigo-900 text-white font-bold rounded-xl text-xs sm:text-sm flex items-center justify-center space-x-1.5 transition active:scale-95 shadow-md border border-blue-400/30"
                  >
                    <WhatsAppIcon className="w-4 h-4" />
                    <span>{lang === "hi" ? "बोर्ड वर्ग पूछताछ" : "Senior Wing Enquiry"}</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Quick WhatsApp enquiry button for courses */}
            <div className="mt-6 sm:mt-8 text-center">
              <a
                href={getWhatsAppLink(
                  lang === "hi"
                    ? "नमस्ते, मुझे कक्षा 9वीं से 12वीं (साइंस/कॉमर्स) संकाय और प्रवेश प्रक्रिया की पूरी जानकारी चाहिए।"
                    : "Hello, I would like complete information about admission in Classes 9th to 12th streams."
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 px-5 py-3 sm:px-8 sm:py-4 rounded-xl sm:rounded-2xl bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-700 hover:from-emerald-700 hover:to-teal-800 text-white font-black text-xs sm:text-base shadow-lg shadow-emerald-700/25 transition active:scale-95"
              >
                <WhatsAppIcon className="w-5 h-5" />
                <span>
                  {lang === "hi"
                    ? "कक्षा व संकाय संबंधी पूछताछ व्हाट्सएप पर करें (+91 99934 46271)"
                    : "Inquire about Classes & Streams on WhatsApp (+91 99934 46271)"}
                </span>
                <ArrowRight className="w-4.5 h-4.5" />
              </a>
            </div>
          </div>
        </section>

        {/* ============================================================== */}
        {/* 6. ALUMNI ROLL OF HONOR */}
        {/* ============================================================== */}
        <section id="hall-of-fame" className="py-8 sm:py-14 lg:py-20 bg-gradient-to-b from-white via-amber-50/25 to-white bg-dot-pattern-light border-b border-amber-200/50 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center max-w-3xl mx-auto mb-6 sm:mb-10 lg:mb-14">
              <span className="inline-flex items-center space-x-2 text-xs sm:text-sm uppercase font-extrabold tracking-widest text-white bg-gradient-to-r from-emerald-600 to-teal-600 px-4 py-2 rounded-full shadow-xs">
                <span>🎖️</span>
                <span>{lang === "hi" ? "संस्था को गौरवान्वित करने वाले विद्यार्थी" : "Alumni Roll of Honor"}</span>
              </span>
              <h2 className="text-3xl sm:text-5xl font-serif font-black text-slate-900 mt-4 tracking-tight leading-tight">
                {lang === "hi" ? "विद्यालय के सफल एवं गौरवशाली पूर्व छात्र" : "Distinguished Alumni Hall of Fame"}
              </h2>
              <p className="text-slate-600 mt-3 text-base sm:text-lg md:text-xl leading-relaxed">
                {lang === "hi"
                  ? "आदर्श इंग्लिश स्कूल नाहरगढ़ से निकले विद्यार्थी आज भारतीय सेना, चिकित्सा, इंजीनियरिंग एवं कला क्षेत्र में उच्च पदों पर आसीन हैं।"
                  : "Students nurtured at Adarsh English School Nahargarh are proudly serving the nation in the Indian Armed Forces, Healthcare, and Corporate Sectors."}
              </p>
            </div>

            {/* Featured Alumni Visuals (Real Instagram Photos) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-10">
              {/* Cadet / Lieutenant Kanishk Mod Card */}
              <div className="bg-gradient-to-br from-emerald-50/70 via-white to-amber-50/40 rounded-3xl p-6 sm:p-7 border-2 border-emerald-300/90 shadow-md flex flex-col sm:flex-row items-center gap-6 hover:shadow-xl transition">
                <div className="relative w-full sm:w-48 h-56 rounded-2xl overflow-hidden bg-slate-900 shrink-0 shadow-md">
                  <img
                    src="/school/gallery/school_insta_6.webp"
                    alt="Lieutenant Kanishk Mod Indian Army"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-2.5 left-2.5 bg-gradient-to-r from-emerald-600 to-teal-600 text-white text-xs font-black px-2.5 py-1 rounded-md shadow">
                    Indian Armed Forces
                  </div>
                </div>
                <div className="space-y-2.5 text-left">
                  <span className="text-xs font-bold text-amber-950 bg-amber-100/90 px-3 py-1 rounded-full border border-amber-300">
                    {lang === "hi" ? "भारतीय सेना गौरव" : "Armed Forces Pride"}
                  </span>
                  <h3 className="font-serif font-black text-xl sm:text-2xl text-slate-900 mt-2">
                    {lang === "hi" ? "लेफ्टिनेंट कनिष्क मोड़" : "Lieutenant Kanishk Mod"}
                  </h3>
                  <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-normal">
                    {lang === "hi"
                      ? "आदर्श इंग्लिश स्कूल नाहरगढ़ के मेधावी पूर्व छात्र, जिन्होंने भारतीय सेना की प्रतिष्ठित पासिंग आउट परेड में सफलता हासिल कर विद्यालय का नाम पूरे देश में रोशन किया।"
                      : "Distinguished alumnus of Adarsh English School Nahargarh commissioned into the Indian Armed Forces."}
                  </p>
                </div>
              </div>

              {/* 25+ Years Roll of Honor Bulletin Card */}
              <div className="bg-gradient-to-br from-blue-50/70 via-white to-amber-50/40 rounded-3xl p-6 sm:p-7 border-2 border-blue-300/90 shadow-md flex flex-col sm:flex-row items-center gap-6 hover:shadow-xl transition">
                <div className="relative w-full sm:w-48 h-56 rounded-2xl overflow-hidden bg-slate-900 shrink-0 shadow-md">
                  <img
                    src="/school/gallery/school_insta_7.webp"
                    alt="School 25 Years Alumni Bulletin"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-2.5 left-2.5 bg-gradient-to-r from-blue-700 to-indigo-800 text-white text-xs font-black px-2.5 py-1 rounded-md shadow border border-blue-400/30">
                    25+ Yrs Bulletin
                  </div>
                </div>
                <div className="space-y-2.5 text-left">
                  <span className="text-xs font-bold text-blue-950 bg-blue-100/90 px-3 py-1 rounded-full border border-blue-300">
                    {lang === "hi" ? "गौरवशाली इतिहास" : "Official Roll of Honor"}
                  </span>
                  <h3 className="font-serif font-black text-xl sm:text-2xl text-slate-900 mt-2">
                    {lang === "hi" ? "डॉक्टर्स, सीए, इंजीनियर्स दल" : "Doctors, CAs & Engineers"}
                  </h3>
                  <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-normal">
                    {lang === "hi"
                      ? "विद्यालय के आधिकारिक बुलेटिन में दर्ज एमबीबीएस डॉक्टर्स, चार्टर्ड अकाउंटेंट, भारतीय सेना के जवान एवं सॉफ्टवेयर इंजीनियर्स की गौरवमयी सूची।"
                      : "Official school bulletin highlighting alumni serving as MBBS Doctors, CAs, and Army Personnel across India."}
                  </p>
                </div>
              </div>
            </div>

            {/* Alumni Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
              {schoolAlumni.map((alum, idx) => {
                const getIconAndStyle = () => {
                  switch (alum.field) {
                    case "defense":
                      return {
                        icon: <Award className="w-5 h-5 text-emerald-700" />,
                        bg: "bg-emerald-50 border-emerald-300 text-emerald-900",
                        badgeBg: "bg-emerald-100 text-emerald-950 border-emerald-300",
                      };
                    case "medical":
                      return {
                        icon: <Stethoscope className="w-5 h-5 text-rose-700" />,
                        bg: "bg-rose-50 border-rose-300 text-rose-900",
                        badgeBg: "bg-rose-100 text-rose-950 border-rose-300",
                      };
                    case "finance":
                      return {
                        icon: <Briefcase className="w-5 h-5 text-amber-700" />,
                        bg: "bg-amber-50 border-amber-300 text-amber-900",
                        badgeBg: "bg-amber-100 text-amber-950 border-amber-300",
                      };
                    case "engineering":
                      return {
                        icon: <Compass className="w-5 h-5 text-blue-700" />,
                        bg: "bg-blue-50 border-blue-300 text-blue-900",
                        badgeBg: "bg-blue-100 text-blue-950 border-blue-300",
                      };
                    default:
                      return {
                        icon: <Sparkles className="w-5 h-5 text-purple-700" />,
                        bg: "bg-purple-50 border-purple-300 text-purple-900",
                        badgeBg: "bg-purple-100 text-purple-950 border-purple-300",
                      };
                  }
                };
                const style = getIconAndStyle();

                return (
                  <div
                    key={idx}
                    className="bg-white border-2 border-slate-200/90 rounded-2xl p-4 sm:p-5 flex items-center space-x-4 hover:shadow-lg hover:border-amber-400 transition group"
                  >
                    <div className={`w-13 h-13 rounded-2xl ${style.bg} flex items-center justify-center shrink-0 border group-hover:scale-105 transition-transform`}>
                      {style.icon}
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center justify-between gap-1.5">
                        <h4 className="font-serif font-black text-base sm:text-lg text-slate-900 truncate">
                          {lang === "hi" ? alum.nameHi : alum.nameEn}
                        </h4>
                        <span className={`text-[11px] font-black px-2.5 py-0.5 rounded-full border ${style.badgeBg} shrink-0`}>
                          {lang === "hi" ? alum.badgeHi : alum.badgeEn}
                        </span>
                      </div>
                      <p className="text-xs sm:text-sm text-amber-950 font-bold mt-1 truncate">
                        {lang === "hi" ? alum.roleHi : alum.roleEn}
                      </p>
                      <span className="text-xs text-slate-500 font-medium block truncate mt-0.5">
                        {lang === "hi" ? "आदर्श स्कूल पूर्व विद्यार्थी" : "Adarsh School Alumnus"}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ============================================================== */}
        {/* 7. ADMISSION ENQUIRY FORM & DIRECT WHATSAPP */}
        {/* ============================================================== */}
        <section id="enquiry-form" className="py-8 sm:py-14 lg:py-20 bg-gradient-to-b from-white via-emerald-50/20 to-slate-50 bg-dot-pattern border-b border-slate-200/80 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-start">
              {/* Left Column: Form Details & Direct WhatsApp Quick Options */}
              <div className="lg:col-span-5 space-y-6">
                <div>
                  <span className="inline-flex items-center space-x-2 text-xs sm:text-sm uppercase font-extrabold tracking-widest text-white bg-gradient-to-r from-emerald-600 to-teal-600 px-4 py-2 rounded-full shadow-xs">
                    <span>📝</span>
                    <span>{lang === "hi" ? "प्रवेश सहायता केंद्र" : "Admission Enquiry"}</span>
                  </span>
                  <h2 className="text-3xl sm:text-5xl font-serif font-black text-slate-900 mt-4 tracking-tight leading-tight">
                    {lang === "hi" ? "प्रवेश हेतु जानकारी प्राप्त करें" : "School Admission Enquiry"}
                  </h2>
                  <p className="text-slate-600 mt-3 text-base sm:text-lg leading-relaxed">
                    {lang === "hi"
                      ? "सत्र 2026–27 में प्रवेश संबंधी पूछताछ के लिए फॉर्म भरें अथवा नीचे दिए गए 1-क्लिक व्हाट्सएप विकल्पों का उपयोग करें।"
                      : "Fill in the online form or use the 1-click WhatsApp buttons below for instant counselling (+91 99934 46271)."}
                  </p>
                </div>

                {/* Direct WhatsApp Quick Template Buttons */}
                <div className="bg-white p-6 sm:p-7 rounded-3xl border-2 border-emerald-200/90 space-y-4 shadow-lg">
                  <h4 className="font-serif font-black text-base sm:text-lg text-slate-900 flex items-center space-x-2.5">
                    <WhatsAppIcon className="w-5 h-5 text-emerald-600" />
                    <span>{lang === "hi" ? "त्वरित व्हाट्सएप संदेश (1-क्लिक):" : "Instant WhatsApp Templates:"}</span>
                  </h4>
                  <div className="space-y-3 text-xs sm:text-sm">
                    <a
                      href={getWhatsAppLink(
                        lang === "hi"
                          ? "नमस्ते, मुझे नर्सरी / KG में प्रवेश की जानकारी चाहिए।"
                          : "Hello, I want details regarding Nursery / KG admission."
                      )}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block p-4 rounded-xl bg-gradient-to-r from-emerald-50 to-teal-50 hover:from-emerald-100 hover:to-teal-100 text-emerald-950 border border-emerald-300 transition font-bold shadow-2xs active:scale-98"
                    >
                      💬 {lang === "hi" ? "नर्सरी / KG प्रवेश की जानकारी चाहिए" : "Inquire about Nursery / KG admission"}
                    </a>
                    <a
                      href={getWhatsAppLink(
                        lang === "hi"
                          ? "नमस्ते, मुझे कक्षा 1 से 8वीं तक प्रवेश प्रक्रिया और सिलेबस जानना है।"
                          : "Hello, I want details regarding Class 1 to 8 admission."
                      )}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block p-4 rounded-xl bg-gradient-to-r from-emerald-50 to-teal-50 hover:from-emerald-100 hover:to-teal-100 text-emerald-950 border border-emerald-300 transition font-bold shadow-2xs active:scale-98"
                    >
                      💬 {lang === "hi" ? "कक्षा 1 से 8वीं में प्रवेश प्रक्रिया जानना है" : "Inquire about Class 1 to 8 admission"}
                    </a>
                    <a
                      href={getWhatsAppLink(
                        lang === "hi"
                          ? "नमस्ते, मुझे 9वीं से 12वीं में साइंस (PCM/PCB) अथवा कॉमर्स संकाय में प्रवेश लेना है।"
                          : "Hello, I want details regarding Class 9-12 Science/Commerce streams."
                      )}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block p-4 rounded-xl bg-gradient-to-r from-emerald-50 to-teal-50 hover:from-emerald-100 hover:to-teal-100 text-emerald-950 border border-emerald-300 transition font-bold shadow-2xs active:scale-98"
                    >
                      💬 {lang === "hi" ? "9वीं-12वीं (साइंस / कॉमर्स संकाय) प्रवेश" : "Inquire about Class 9-12 Science/Commerce"}
                    </a>
                  </div>
                </div>

                {/* Direct Phone Box */}
                <div className="bg-gradient-to-r from-amber-50 to-orange-50 border-2 border-amber-300 rounded-3xl p-5 sm:p-6 flex items-center justify-between text-xs shadow-md">
                  <div className="flex items-center space-x-3.5">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-500 to-orange-600 text-white flex items-center justify-center shrink-0 shadow-xs">
                      <Phone className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="font-bold text-slate-900 text-xs sm:text-sm">{lang === "hi" ? "हेल्पलाइन नंबर" : "Phone Helpline"}</p>
                      <a href="tel:+919993446271" className="font-black text-amber-950 text-base sm:text-lg hover:underline">
                        +91 99934 46271
                      </a>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="text-amber-950 font-black block text-xs sm:text-base">8:00 AM – 8:00 PM</span>
                    <span className="text-xs text-emerald-800 font-bold block">
                      {lang === "hi" ? "संपर्क किया जा सकता है" : "Contact can be made"}
                    </span>
                  </div>
                </div>
              </div>

              {/* Right Column: Enquiry Form */}
              <div className="lg:col-span-7">
                <div className="bg-white rounded-3xl border-2 border-slate-200/90 p-6 sm:p-9 shadow-2xl">
                  {formSubmitted ? (
                    <div className="text-center py-10 space-y-4 animate-in fade-in">
                      <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-sm">
                        <CheckCircle2 className="w-10 h-10" />
                      </div>
                      <h3 className="font-serif font-black text-2xl sm:text-3xl text-slate-900">
                        {lang === "hi" ? "पूछताछ दर्ज हो गई है!" : "Enquiry Received Successfully!"}
                      </h3>
                      <p className="text-slate-600 text-sm sm:text-base max-w-md mx-auto leading-relaxed">
                        {lang === "hi"
                          ? `धन्यवाद, ${formData.parentName}। ${formData.studentName || "विद्यार्थी"} की ${formData.studentClass} में प्रवेश संबंधी जानकारी दर्ज कर ली गई है। हमारी टीम जल्द ही आपसे ${formData.phoneNumber} पर संपर्क करेगी।`
                          : `Thank you, ${formData.parentName}. We have recorded your admission enquiry for ${formData.studentName || "your child"} in ${formData.studentClass}. Our team will contact you at ${formData.phoneNumber} shortly.`}
                      </p>
                      <div className="pt-4 flex flex-wrap justify-center gap-3">
                        <a
                          href={getWhatsAppLink()}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-6 py-3.5 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white rounded-xl text-sm font-bold transition flex items-center space-x-2 shadow-md active:scale-95"
                        >
                          <WhatsAppIcon className="w-4.5 h-4.5" />
                          <span>{lang === "hi" ? "WhatsApp पर चर्चा जारी रखें" : "Continue on WhatsApp"}</span>
                        </a>
                        <button
                          onClick={() => {
                            setFormSubmitted(false);
                            setFormData({
                              parentName: "",
                              phoneNumber: "",
                              studentName: "",
                              studentClass: "Class 1",
                              academicYear: "2026-2027",
                              message: "",
                            });
                          }}
                          className="px-5 py-3.5 bg-slate-100 text-slate-700 rounded-xl text-sm font-semibold hover:bg-slate-200 transition"
                        >
                          {lang === "hi" ? "दूसरा फॉर्म भरें" : "Submit Another Enquiry"}
                        </button>
                      </div>
                    </div>
                  ) : (
                    <form onSubmit={handleFormSubmit} className="space-y-5">
                      <div className="border-b border-amber-200/70 pb-4 mb-3">
                        <h3 className="font-serif font-black text-xl sm:text-2xl text-slate-900 mt-2">
                          {lang === "hi"
                            ? "ऑनलाइन प्रवेश पूछताछ फॉर्म (सत्र 2026–27)"
                            : "Online Admission Enquiry Form (2026–27)"}
                        </h3>
                        <p className="text-xs sm:text-sm text-amber-950 font-semibold mt-1.5">
                          {lang === "hi"
                            ? "कृपया सही मोबाइल नंबर दें ताकि हम आवश्यक जानकारी एवं विवरण भेज सकें।"
                            : "Please provide your correct contact details for prompt response."}
                        </p>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                        {/* Parent Name */}
                        <div>
                          <label className="block text-xs sm:text-sm font-bold text-slate-900 mb-1.5">
                            {lang === "hi" ? "पालक / अभिभावक का नाम *" : "Parent / Guardian Name *"}
                          </label>
                          <input
                            type="text"
                            required
                            name="parentName"
                            value={formData.parentName}
                            onChange={handleInputChange}
                            placeholder={lang === "hi" ? "उदा. राजेश शर्मा" : "e.g. Rajesh Sharma"}
                            className="w-full px-4 py-3 text-sm sm:text-base rounded-xl border border-slate-300 focus:outline-hidden focus:ring-2 focus:ring-amber-500/30 focus:border-amber-500 transition bg-slate-50/50"
                          />
                        </div>

                        {/* Phone Number */}
                        <div>
                          <label className="block text-xs sm:text-sm font-bold text-slate-900 mb-1.5">
                            {lang === "hi" ? "मोबाइल नंबर (WhatsApp Number) *" : "Mobile Number (WhatsApp Preferred) *"}
                          </label>
                          <input
                            type="tel"
                            required
                            name="phoneNumber"
                            value={formData.phoneNumber}
                            onChange={handleInputChange}
                            placeholder="e.g. 99934 46271"
                            className="w-full px-4 py-3 text-sm sm:text-base rounded-xl border border-slate-300 focus:outline-hidden focus:ring-2 focus:ring-amber-500/30 focus:border-amber-500 transition bg-slate-50/50"
                          />
                        </div>

                        {/* Student Name */}
                        <div>
                          <label className="block text-xs sm:text-sm font-bold text-slate-900 mb-1.5">
                            {lang === "hi" ? "विद्यार्थी का नाम" : "Child / Student Name"}
                          </label>
                          <input
                            type="text"
                            name="studentName"
                            value={formData.studentName}
                            onChange={handleInputChange}
                            placeholder={lang === "hi" ? "उदा. आरव शर्मा" : "e.g. Aarav Sharma"}
                            className="w-full px-4 py-3 text-sm sm:text-base rounded-xl border border-slate-300 focus:outline-hidden focus:ring-2 focus:ring-amber-500/30 focus:border-amber-500 transition bg-slate-50/50"
                          />
                        </div>

                        {/* Class Seeking Admission */}
                        <div>
                          <label className="block text-xs sm:text-sm font-bold text-slate-900 mb-1.5">
                            {lang === "hi" ? "प्रवेश हेतु कक्षा *" : "Class Seeking Admission *"}
                          </label>
                          <select
                            name="studentClass"
                            value={formData.studentClass}
                            onChange={handleInputChange}
                            className="w-full px-4 py-3 text-sm sm:text-base rounded-xl border border-slate-300 focus:outline-hidden focus:ring-2 focus:ring-amber-500/30 focus:border-amber-500 transition bg-slate-50/50 font-medium"
                          >
                            <option value="Nursery">{lang === "hi" ? "नर्सरी (Nursery)" : "Nursery (Age 3+)"}</option>
                            <option value="LKG">LKG / Jr. KG</option>
                            <option value="UKG">UKG / Sr. KG</option>
                            <option value="Class 1">{lang === "hi" ? "कक्षा 1 (Class 1)" : "Class 1"}</option>
                            <option value="Class 2">{lang === "hi" ? "कक्षा 2 (Class 2)" : "Class 2"}</option>
                            <option value="Class 3">{lang === "hi" ? "कक्षा 3 (Class 3)" : "Class 3"}</option>
                            <option value="Class 4">{lang === "hi" ? "कक्षा 4 (Class 4)" : "Class 4"}</option>
                            <option value="Class 5">{lang === "hi" ? "कक्षा 5 (Class 5)" : "Class 5"}</option>
                            <option value="Class 6">{lang === "hi" ? "कक्षा 6 (Class 6)" : "Class 6"}</option>
                            <option value="Class 7">{lang === "hi" ? "कक्षा 7 (Class 7)" : "Class 7"}</option>
                            <option value="Class 8">{lang === "hi" ? "कक्षा 8 (Class 8)" : "Class 8"}</option>
                            <option value="Class 9">{lang === "hi" ? "कक्षा 9 (Class 9)" : "Class 9"}</option>
                            <option value="Class 10">{lang === "hi" ? "कक्षा 10 (Class 10 - Board)" : "Class 10 (Board)"}</option>
                            <option value="Class 11 (Science)">{lang === "hi" ? "कक्षा 11 (Science - PCM/PCB)" : "Class 11 (Science PCM/PCB)"}</option>
                            <option value="Class 11 (Commerce/Arts)">{lang === "hi" ? "कक्षा 11 (Commerce/Arts)" : "Class 11 (Commerce/Arts)"}</option>
                            <option value="Class 12 (Science)">{lang === "hi" ? "कक्षा 12 (Science - PCM/PCB)" : "Class 12 (Science PCM/PCB)"}</option>
                            <option value="Class 12 (Commerce/Arts)">{lang === "hi" ? "कक्षा 12 (Commerce/Arts)" : "Class 12 (Commerce/Arts)"}</option>
                          </select>
                        </div>
                      </div>

                      {/* Message */}
                      <div>
                        <label className="block text-xs sm:text-sm font-bold text-slate-900 mb-1.5">
                          {lang === "hi" ? "कोई विशेष प्रश्न / गांव / बस स्टॉप विवरण" : "Any Specific Question or Bus Stop details"}
                        </label>
                        <textarea
                          rows={3}
                          name="message"
                          value={formData.message}
                          onChange={handleInputChange}
                          placeholder={
                            lang === "hi"
                              ? "उदा. हमारा निवास नाहरगढ़ के पास है, कृपया स्कूल बस रूट और समय की जानकारी प्रदान करें।"
                              : "e.g. Please share details regarding school bus timings and required documents."
                          }
                          className="w-full px-4 py-3 text-sm sm:text-base rounded-xl border border-slate-300 focus:outline-hidden focus:ring-2 focus:ring-amber-500/30 focus:border-amber-500 transition bg-slate-50/50"
                        ></textarea>
                      </div>

                      <div className="pt-2 flex flex-col sm:flex-row gap-3">
                        <button
                          type="submit"
                          className="flex-1 py-3.5 sm:py-4 px-6 rounded-xl font-black text-sm sm:text-base bg-gradient-to-r from-blue-700 via-indigo-700 to-blue-800 hover:from-blue-800 hover:to-indigo-900 text-white shadow-lg shadow-blue-900/20 transition flex items-center justify-center space-x-2 active:scale-95 border border-blue-400/30"
                        >
                          <span>{lang === "hi" ? "पूछताछ दर्ज करें (Submit)" : "Submit Enquiry"}</span>
                          <ArrowRight className="w-4 h-4 text-blue-200" />
                        </button>

                        <a
                          href={getWhatsAppLink()}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="py-3.5 sm:py-4 px-6 rounded-xl font-bold text-sm sm:text-base bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white shadow-md transition flex items-center justify-center space-x-2 active:scale-95"
                        >
                          <WhatsAppIcon className="w-4.5 h-4.5" />
                          <span>{lang === "hi" ? "WhatsApp पर भेजें" : "Send via WhatsApp"}</span>
                        </a>
                      </div>
                    </form>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================================== */}
        {/* 9. EXACT MAP LOCATION (567P+W9P, Nahargarh, MP 458558) */}
        {/* ============================================================== */}
        {/* ============================================================== */}
        {/* 9. EXACT MAP LOCATION (567P+W9P, Nahargarh, MP 458558) */}
        {/* ============================================================== */}
        <section id="contact-location" className="py-8 sm:py-14 lg:py-20 bg-gradient-to-b from-slate-50 via-white to-slate-50 bg-dot-pattern-light border-b border-amber-200/50 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center max-w-3xl mx-auto mb-6 sm:mb-10 lg:mb-14">
              <span className="text-xs sm:text-sm uppercase font-extrabold tracking-widest text-slate-950 bg-gradient-to-r from-amber-400 to-amber-500 px-4 py-2 rounded-full shadow-xs">
                {lang === "hi" ? "विद्यालय स्थान व मानचित्र" : "Location & Directions"}
              </span>
              <h2 className="text-3xl sm:text-5xl font-serif font-black text-slate-900 mt-4 tracking-tight leading-tight">
                {lang === "hi" ? "विद्यालय मानचित्र एवं दिशा-निर्देश" : "Google Map & School Location"}
              </h2>
              <p className="text-slate-600 mt-3 text-base sm:text-lg leading-relaxed">
                Plus Code: <strong className="text-amber-950">567P+W9P, Nahargarh, Madhya Pradesh 458558</strong>.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
              {/* Map Embed Container */}
              <div className="lg:col-span-8 bg-slate-100 rounded-3xl overflow-hidden border-2 border-amber-200/80 shadow-xl relative min-h-[400px] lg:min-h-[480px] flex flex-col">
                <iframe
                  title="Adarsh English School Nahargarh Map"
                  src="https://maps.google.com/maps?q=567P%2BW9P%2C+Nahargarh%2C+Madhya+Pradesh+458558&t=&z=16&ie=UTF8&iwloc=&output=embed"
                  className="w-full h-full min-h-[400px] lg:min-h-[480px] border-0"
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>

                {/* Floating map info badge */}
                <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md p-4 rounded-2xl border-2 border-amber-300 shadow-xl max-w-xs hidden sm:block">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-700 to-indigo-800 text-white flex items-center justify-center font-bold shadow-xs">
                      <MapPin className="w-5 h-5 text-amber-400" />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-slate-900">
                        Adarsh English H.S. School
                      </p>
                      <p className="text-xs text-amber-950 font-semibold">Nahargarh, Sitamau (M.P.)</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Details & Working Hours */}
              <div className="lg:col-span-4 flex flex-col justify-between space-y-6">
                <div className="bg-gradient-to-br from-amber-50/40 via-white to-slate-50 rounded-3xl p-6 sm:p-7 border-2 border-slate-200/90 shadow-xl space-y-5">
                  <h3 className="font-serif font-black text-xl text-slate-900">
                    {lang === "hi" ? "संपर्क एवं विद्यालय विवरण" : "Contact & Campus Details"}
                  </h3>

                  {/* Address */}
                  <div className="flex items-start space-x-3.5 text-sm sm:text-base">
                    <div className="w-9 h-9 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center shrink-0 border border-amber-300 mt-0.5">
                      <MapPin className="w-5 h-5 text-amber-800" />
                    </div>
                    <div className="space-y-1">
                      <p className="font-bold text-slate-900 text-sm sm:text-base">{lang === "hi" ? "विद्यालय का पता:" : "Campus Address:"}</p>
                      <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-medium">
                        आदर्श इंग्लिश हायर सेकंडरी स्कूल (Adarsh English H.S. School)
                        <br />
                        Plus Code: <strong className="text-amber-950">567P+W9P</strong>
                        <br />
                        नाहरगढ़ (Nahargarh), तहसील सीतामऊ (Teh. Sitamau),
                        <br />
                        जिला मन्दसौर, मध्य प्रदेश — <strong>458558</strong>
                      </p>
                      <button
                        onClick={copyAddress}
                        className="text-xs font-bold text-amber-950 hover:text-amber-700 bg-amber-100/90 hover:bg-amber-200 px-3 py-1 rounded-lg border border-amber-300 inline-block transition mt-1"
                      >
                        {copiedAddress
                          ? lang === "hi" ? "✓ पता कॉपी हो गया!" : "✓ Address Copied!"
                          : lang === "hi" ? "📋 पूरा पता व प्लस कोड कॉपी करें" : "📋 Copy Address & Plus Code"}
                      </button>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex items-start space-x-3.5 text-sm sm:text-base">
                    <div className="w-9 h-9 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center shrink-0 border border-amber-300 mt-0.5">
                      <Phone className="w-5 h-5 text-amber-800" />
                    </div>
                    <div className="space-y-0.5">
                      <p className="font-bold text-slate-900 text-sm sm:text-base">{lang === "hi" ? "हेल्पलाइन / फोन:" : "Helpline / Phone:"}</p>
                      <p className="text-slate-900 font-black text-base sm:text-lg">
                        <a href="tel:+919993446271" className="hover:text-amber-800 transition">
                          +91 99934 46271
                        </a>
                      </p>
                      <p className="text-xs sm:text-sm text-emerald-800 font-bold">
                        {lang === "hi" ? "✓ प्रातः 8:00 से रात्रि 8:00 बजे तक संपर्क किया जा सकता है" : "✓ Contact can be made: 8:00 AM to 8:00 PM"}
                      </p>
                      <p className="text-xs text-slate-500 font-medium">
                        {lang === "hi" ? "(श्री विजय नारायण शर्मा, प्राचार्य)" : "(Shri Vijay Narayan Sharma, Principal)"}
                      </p>
                    </div>
                  </div>

                  {/* Direct WhatsApp Callout in Contact Card */}
                  <div className="flex items-start space-x-3.5 text-sm sm:text-base">
                    <div className="w-9 h-9 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0 border border-emerald-300 mt-0.5">
                      <WhatsAppIcon className="w-5 h-5 text-emerald-700" />
                    </div>
                    <div className="space-y-0.5">
                      <p className="font-bold text-slate-900 text-sm sm:text-base">WhatsApp Connect:</p>
                      <a
                        href={getWhatsAppLink()}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm font-black text-emerald-800 hover:underline block"
                      >
                        +91 99934 46271 (Chat Now)
                      </a>
                      <p className="text-xs text-slate-500 font-medium">
                        {lang === "hi" ? "संदेश / कॉल समय: प्रातः 8:00 से रात्रि 8:00" : "Available: 8:00 AM to 8:00 PM"}
                      </p>
                    </div>
                  </div>

                  {/* Instagram */}
                  <div className="flex items-start space-x-3.5 text-sm sm:text-base">
                    <div className="w-9 h-9 rounded-xl bg-rose-100 text-rose-800 flex items-center justify-center shrink-0 border border-rose-300 mt-0.5">
                      <InstagramIcon className="w-5 h-5 text-rose-700" />
                    </div>
                    <div className="space-y-0.5">
                      <p className="font-bold text-slate-900 text-sm sm:text-base">Instagram Handles:</p>
                      <a
                        href="https://www.instagram.com/adarsh_english_h.s.school/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs sm:text-sm text-rose-700 font-bold hover:underline block"
                      >
                        @adarsh_english_h.s.school
                      </a>
                      <a
                        href="https://www.instagram.com/vijay_narayan_1972/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs text-slate-600 font-medium hover:underline block"
                      >
                        Founder: @vijay_narayan_1972
                      </a>
                    </div>
                  </div>

                  {/* Office Hours */}
                  <div className="flex items-start space-x-3.5 text-sm sm:text-base pt-3 border-t border-slate-200">
                    <div className="w-9 h-9 rounded-xl bg-blue-100 text-blue-800 flex items-center justify-center shrink-0 border border-blue-300 mt-0.5">
                      <Clock className="w-5 h-5 text-blue-800" />
                    </div>
                    <div className="space-y-0.5 text-xs sm:text-sm text-slate-600">
                      <p className="font-bold text-slate-900 text-sm sm:text-base">
                        {lang === "hi" ? "कार्यालय समय:" : "Office Hours:"}
                      </p>
                      <p className="font-medium">{lang === "hi" ? "सोमवार से शनिवार: प्रातः 8:00 से दोपहर 3:30" : "Mon - Sat: 8:00 AM – 3:30 PM"}</p>
                      <p className="text-amber-950 font-bold">
                        {lang === "hi" ? "रविवार: पूर्व सूचना द्वारा" : "Sunday: By Appointment"}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Direct Google Directions Link */}
                <a
                  href="https://www.google.com/maps/dir/?api=1&destination=567P%2BW9P%2C+Nahargarh%2C+Madhya+Pradesh+458558"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-4 px-5 rounded-2xl font-black text-sm sm:text-base bg-gradient-to-r from-blue-700 via-indigo-700 to-blue-800 hover:from-blue-800 hover:to-indigo-900 text-white transition flex items-center justify-center space-x-2.5 shadow-lg text-center border border-blue-400/30 active:scale-95"
                >
                  <Compass className="w-5 h-5 text-blue-200" />
                  <span>{lang === "hi" ? "गूगल मैप्स पर रास्ता देखें" : "Open in Google Maps for Directions"}</span>
                  <ExternalLink className="w-4 h-4 ml-1" />
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* ============================================================== */}
      {/* 10. PRESTIGIOUS ROYAL NAVY & GOLD FOOTER */}
      {/* ============================================================== */}
      <footer className="bg-gradient-to-b from-slate-900 via-blue-950 to-slate-950 text-slate-200 pt-10 sm:pt-14 pb-24 md:pb-12 border-t-4 border-amber-500 shadow-2xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10 pb-12 border-b border-white/10">
            {/* Col 1 */}
            <div className="space-y-4">
              <div className="flex items-center space-x-3.5">
                <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-amber-400 bg-white shrink-0 shadow-md">
                  <img
                    src="/school/school_logo.jpg"
                    alt="Adarsh English School Logo"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-display font-black text-lg text-white tracking-wider">ADARSH ENGLISH</h3>
                  <p className="font-display text-xs text-amber-400 uppercase tracking-widest font-black">
                    Higher Secondary School
                  </p>
                </div>
              </div>
              <p className="text-sm text-slate-300 leading-relaxed font-medium">
                Nahargarh, Tehsil Sitamau, Dist. Mandsaur (M.P.) • Reg. 1704/97
                <br />
                Motto: <strong className="text-amber-300 font-bold">शिक्षा • सेवा • साधना</strong>
              </p>
              <div className="flex items-center space-x-3 pt-1">
                <a
                  href={getWhatsAppLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl bg-emerald-600/30 hover:bg-emerald-600 text-white flex items-center justify-center transition border border-emerald-500/40 shadow-xs"
                  title="WhatsApp"
                >
                  <WhatsAppIcon className="w-5 h-5" />
                </a>
                <a
                  href="https://www.instagram.com/adarsh_english_h.s.school/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl bg-rose-600/30 hover:bg-rose-600 text-white flex items-center justify-center transition border border-rose-500/40 shadow-xs"
                  title="School Instagram"
                >
                  <InstagramIcon className="w-5 h-5" />
                </a>
                <a
                  href="tel:+919993446271"
                  className="w-10 h-10 rounded-xl bg-amber-500/30 hover:bg-amber-500 text-amber-200 hover:text-slate-950 flex items-center justify-center transition border border-amber-400/40 shadow-xs"
                  title="Call Us"
                >
                  <Phone className="w-4.5 h-4.5" />
                </a>
              </div>
            </div>

            {/* Col 2 */}
            <div className="space-y-3">
              <h4 className="font-serif font-bold text-amber-300 text-sm sm:text-base tracking-wide border-b border-amber-500/40 pb-1.5 inline-block">
                {lang === "hi" ? "त्वरित लिंक" : "Quick Links"}
              </h4>
              <ul className="space-y-2 text-xs sm:text-sm text-slate-300 font-medium">
                <li>
                  <a href="#campus-gallery" className="hover:text-amber-400 transition">
                    {lang === "hi" ? "छायाचित्र एल्बम (Photos)" : "School Photos & Album"}
                  </a>
                </li>
                <li>
                  <a href="#pillars" className="hover:text-amber-400 transition">
                    {lang === "hi" ? "संस्था की विशेषताएं (Pillars)" : "Institutional Pillars"}
                  </a>
                </li>
                <li>
                  <a href="#about-founder" className="hover:text-amber-400 transition">
                    {lang === "hi" ? "संस्थापक: श्री विजय नारायण शर्मा" : "Founder: Vijay Narayan Sharma"}
                  </a>
                </li>
                <li>
                  <a href="#courses" className="hover:text-amber-400 transition">
                    {lang === "hi" ? "कक्षाएं: नर्सरी से 12वीं तक" : "Classes: Nursery to 12th"}
                  </a>
                </li>
                <li>
                  <a href="#hall-of-fame" className="hover:text-amber-400 transition">
                    {lang === "hi" ? "सफल पूर्व छात्र (Alumni)" : "Alumni Roll of Honor"}
                  </a>
                </li>
                <li>
                  <a href="#contact-location" className="hover:text-amber-400 transition">
                    {lang === "hi" ? "मानचित्र व स्थान (Map)" : "Map Location"}
                  </a>
                </li>
              </ul>
            </div>

            {/* Col 3 */}
            <div className="space-y-3">
              <h4 className="font-serif font-bold text-amber-300 text-sm sm:text-base tracking-wide border-b border-amber-500/40 pb-1.5 inline-block">
                {lang === "hi" ? "कक्षा स्तर (Class Wings)" : "Class Structure"}
              </h4>
              <ul className="space-y-2 text-xs sm:text-sm text-slate-300 font-medium">
                <li>• Pre-Primary: Nursery, LKG, UKG</li>
                <li>• Primary: Class 1st to 5th Std</li>
                <li>• Middle School: Class 6th to 8th Std</li>
                <li>• High School: Class 9th & 10th (Board)</li>
                <li>• Higher Secondary: Class 11th & 12th</li>
              </ul>
            </div>

            {/* Col 4 */}
            <div className="space-y-3">
              <h4 className="font-serif font-bold text-amber-300 text-sm sm:text-base tracking-wide border-b border-amber-500/40 pb-1.5 inline-block">
                {lang === "hi" ? "सीधा संपर्क सूत्र" : "Contact Information"}
              </h4>
              <p className="text-xs sm:text-sm text-slate-300">
                Helpline / WhatsApp: <strong className="text-white font-bold">+91 99934 46271</strong>
              </p>
              <p className="text-xs text-emerald-400 font-bold">
                {lang === "hi"
                  ? "• संपर्क समय: प्रातः 8:00 से रात्रि 8:00 बजे तक"
                  : "• Contact Hours: 8:00 AM – 8:00 PM"}
              </p>
              <p className="text-xs sm:text-sm text-slate-300">
                Plus Code: <span className="text-amber-300 font-bold font-mono">567P+W9P</span>
              </p>
              <p className="text-xs sm:text-sm text-slate-300">
                Nahargarh, Sitamau, Dist. Mandsaur (M.P.) — 458558
              </p>
            </div>
          </div>

          <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs sm:text-sm text-slate-400 gap-2.5">
            <p>© 2026 Adarsh Senior Secondary English School Nahargarh. All Rights Reserved.</p>
            <p className="text-slate-300">
              मूलमंत्र: <span className="text-amber-400 font-bold">शिक्षा • सेवा • साधना</span>
            </p>
          </div>
        </div>
      </footer>

      {/* ============================================================== */}
      {/* 11. FLOATING DIRECT WHATSAPP BUTTON (Desktop) */}
      {/* ============================================================== */}
      <aside aria-label="WhatsApp quick contact" className="hidden md:flex fixed bottom-6 right-6 z-40">
        <a
          href={getWhatsAppLink()}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center space-x-2.5 bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-700 hover:from-emerald-700 hover:to-teal-800 text-white px-4 py-3 sm:py-3.5 rounded-full shadow-2xl hover:scale-105 active:scale-95 transition-all duration-300 border-2 border-white/40"
          title="Direct WhatsApp Helpline (+91 99934 46271)"
        >
          <div className="relative">
            <WhatsAppIcon className="w-5 h-5 sm:w-6 sm:h-6" />
            <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-amber-400 border border-emerald-900 animate-pulse"></span>
          </div>
          <span className="font-extrabold text-xs sm:text-sm tracking-wide">
            {lang === "hi" ? "व्हाट्सएप सहायता" : "WhatsApp Helpline"}
          </span>
        </a>
      </aside>

      {/* ============================================================== */}
      {/* 12. STICKY MOBILE ACTION DOCK (Modern App-Like Navigation) */}
      {/* ============================================================== */}
      <div className="sm:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-xl border-t-2 border-amber-500/30 px-3 py-2 shadow-2xl pb-[max(env(safe-area-inset-bottom),0.65rem)]">
        <div className="flex items-center justify-between gap-2">
          {/* Call button */}
          <a
            href="tel:+919993446271"
            className="flex-1 py-2 px-2 bg-gradient-to-b from-amber-50 to-orange-50 hover:bg-amber-100 border border-amber-300 text-amber-950 rounded-xl text-xs font-bold flex flex-col items-center justify-center transition active:scale-95 min-h-[46px] shadow-2xs"
          >
            <div className="flex items-center space-x-1">
              <Phone className="w-3.5 h-3.5 text-amber-700" />
              <span>{lang === "hi" ? "कॉल करें" : "Call"}</span>
            </div>
            <span className="text-[10px] text-amber-900 font-bold">8 AM – 8 PM</span>
          </a>

          {/* WhatsApp button */}
          <a
            href={getWhatsAppLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 py-2 px-2 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 text-white rounded-xl text-xs font-bold flex flex-col items-center justify-center transition shadow-xs active:scale-95 min-h-[46px]"
          >
            <div className="flex items-center space-x-1">
              <WhatsAppIcon className="w-3.5 h-3.5" />
              <span>WhatsApp</span>
            </div>
            <span className="text-[10px] text-emerald-100 font-bold">{lang === "hi" ? "तुरंत चैट" : "Chat Now"}</span>
          </a>

          {/* Admission Form button */}
          <a
            href="#enquiry-form"
            className="flex-1 py-2 px-2 bg-gradient-to-r from-blue-700 to-indigo-800 hover:from-blue-800 hover:to-indigo-900 text-white rounded-xl text-xs font-bold flex flex-col items-center justify-center transition shadow-xs active:scale-95 min-h-[46px] border border-blue-400/30"
          >
            <div className="flex items-center space-x-1">
              <span>{lang === "hi" ? "प्रवेश फॉर्म" : "Enquiry"}</span>
              <ArrowRight className="w-3 h-3 text-blue-200" />
            </div>
            <span className="text-[10px] text-blue-100 font-medium">2026–27</span>
          </a>
        </div>
      </div>
    </div>
  );
}
