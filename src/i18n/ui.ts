// src/i18n/ui.ts

export type UIStrings = {
  nav: {
    features: string;
    cardMeanings: string;
    blog: string;
  };
  hero: {
    title: string;
    subtitle: string;
  };
  features: {
    title: string;
    cardLayoutsTitle: string;
    cardLayoutsDesc: string;
    libraryTitle: string;
    libraryDesc: string;
    personalizedTitle: string;
    personalizedDesc: string;
  };
  socialProof: {
    title: string;
  };
  finalCta: {
    title: string;
    subtitle: string;
    button: string;
  };
  footer: {
    copyright: string;
    privacyPolicy: string;
  };
};

// Tüm diller için çeviriler burada olacak
export const translations: Record<string, UIStrings> = {
  // İngilizce (Varsayılan)
  en: {
    nav: {
      features: "Features",
      cardMeanings: "Card Meanings",
      blog: "Blog",
    },
    hero: {
      title: "Illuminate Your Future",
      subtitle: "Embark on your inner journey with the guidance of mysterious Tarot cards. Get instant readings, explore card meanings.",
    },
    features: {
      title: "Why Virtual Tarot?",
      cardLayoutsTitle: "Various Card Spreads",
      cardLayoutsDesc: "Find clear answers to your questions with various spreads like Daily Card, One-Card Love Reading, and the Celtic Cross.",
      libraryTitle: "Detailed Card Library",
      libraryDesc: "The meanings, history, and interpretations of all 78 Major and Minor Arcana cards are at your fingertips.",
      personalizedTitle: "Personalized Experience",
      personalizedDesc: "Keep your own journal, save the cards you draw, and track your progress over time.",
    },
    socialProof: {
      title: "What Our Users Are Saying?",
    },
    finalCta: {
      title: "Discover Now, Gain Insight",
      subtitle: "Like thousands of other users, illuminate your future.",
      button: "Learn More",
    },
    footer: {
      copyright: `© ${new Date().getFullYear()} Virtual Tarot. All rights reserved.`,
      privacyPolicy: "Privacy Policy",
    },
  },
  // Türkçe
  tr: {
    nav: {
      features: "Özellikler",
      cardMeanings: "Kart Anlamları",
      blog: "Blog",
    },
    hero: {
      title: "Geleceğinize Işık Tutun",
      subtitle: "Virtual Tarot ile gizemli Tarot kartlarının rehberliğinde içsel yolculuğunuza çıkın. Anında falınızı baktırın, kartların anlamlarını keşfedin.",
    },
    features: {
      title: "Neden Virtual Tarot?",
      cardLayoutsTitle: "Çeşitli Kart Açılımları",
      cardLayoutsDesc: "Günlük kart, tek kart aşk falı, Kelt haçı ve daha birçok farklı açılım ile sorularınıza net cevaplar bulun.",
      libraryTitle: "Detaylı Kart Kütüphanesi",
      libraryDesc: "78 Major ve Minor Arcana kartının tüm anlamları, tarihçeleri ve yorumları elinizin altında.",
      personalizedTitle: "Kişiselleştirilmiş Deneyim",
      personalizedDesc: "Kendi günlük tutun, çektiğiniz kartları kaydedin ve zaman içindeki gelişiminizi takip edin.",
    },
    socialProof: {
      title: "Kullanıcılarımız Ne Diyor?",
    },
    finalCta: {
      title: "Hemen Keşfedin, İçgörülerinizi Kazanın",
      subtitle: "Binlerce kullanıcı gibi siz de geleceğinize ışık tutun.",
      button: "Daha Fazla Öğren",
    },
    footer: {
      copyright: `© ${new Date().getFullYear()} Virtual Tarot. Tüm hakları saklıdır.`,
      privacyPolicy: "Gizlilik Politikası",
    },
  },
  // İspanyolca (YENİ EKLENDİ)
  es: {
    nav: {
      features: "Características",
      cardMeanings: "Significado de las Cartas",
      blog: "Blog",
    },
    hero: {
      title: "Ilumina tu Futuro",
      subtitle: "Embárcate en tu viaje interior con la guía de las misteriosas cartas del Tarot. Obtén lecturas instantáneas, explora los significados de las cartas.",
    },
    features: {
      title: "¿Por qué Virtual Tarot?",
      cardLayoutsTitle: "Varias Tiradas de Cartas",
      cardLayoutsDesc: "Encuentra respuestas claras a tus preguntas con varias tiradas como la Carta del Día, el Tiraje de Amor de una Carta y la Cruz Céltica.",
      libraryTitle: "Biblioteca de Cartas Detallada",
      libraryDesc: "Los significados, la historia y las interpretaciones de las 78 cartas del Arcano Mayor y Menor están a tu alcance.",
      personalizedTitle: "Experiencia Personalizada",
      personalizedDesc: "Mantén tu propio diario, guarda las cartas que sacas y rastrea tu progreso con el tiempo.",
    },
    socialProof: {
      title: "¿Qué Dicen Nuestros Usuarios?",
    },
    finalCta: {
      title: "Descubre Ahora, Gana Perspicacia",
      subtitle: "Como miles de otros usuarios, ilumina tu futuro.",
      button: "Aprende Más",
    },
    footer: {
      copyright: `© ${new Date().getFullYear()} Virtual Tarot. Todos los derechos reservados.`,
      privacyPolicy: "Política de Privacidad",
    },
  },
};