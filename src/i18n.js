import { ref, computed } from 'vue';

export const currentLang = ref(localStorage.getItem('bja_lang') || 'id');

export const setLang = (lang) => {
  currentLang.value = lang;
  localStorage.setItem('bja_lang', lang);
};

export const toggleLang = () => {
  setLang(currentLang.value === 'id' ? 'en' : 'id');
};

const translations = {
  id: {
    nav: {
      services: 'Divisi Bisnis',
      projects: 'Proyek Utama',
      ecosystem: 'Sinergi Holding',
      organization: 'Organisasi',
      map: 'Peta Logistik',
      esg: 'Industri Hijau',
      reviews: 'Testimoni',
      contact: 'Kontak',
      getInTouch: 'Hubungi Kami',
      holding: 'HOLDING KORPORAT'
    },
    hero: {
      offshoreTag: 'LOGISTIK ENERGI & INDUSTRI TERPADU',
      holdingBadge: 'HOLDING KORPORAT MULTI-SEKTOR',
      companyName: 'PT. BERKAH JASA ABADI',
      headline: 'Sinergi Energi B50, Advertising, & AI SaaS',
      aboutUsTag: '[TENTANG KAMI]',
      introStatement: 'PT Berkah Jasa Abadi memadukan rantai pasok BBM B50 industri, media visual outdoor DOOH, dan perangkat lunak SaaS berbasis AI.',
      desc: 'BJA Holding menggabungkan keandalan pasokan bahan bakar industri B50, eksposur periklanan visual outdoor videotron, dan kecerdasan SaaS AI enterprise untuk efisiensi operasional.',
      exploreServices: 'Jelajahi Divisi'
    },
    stats: {
      tag: '[KAPABILITAS]',
      statement: 'Sinergi Keahlian Multi-Sektor Dengan Teknologi AI Terkini.',
      stat1: 'Hub Logistik Aktif',
      stat1Tag: 'Skala Nasional',
      card2Text: 'BJA Holding menyelesaikan tantangan operasional pasokan energi, media visual, dan software AI.',
      card2Board: 'Dewan Direksi Korporat',
      engineerQuote: 'Presisi rekayasa, keselamatan kerja, dan kendali software AI di setiap tingkat operasional.',
      engineerTag: '[KEUNGGULAN OPERASIONAL]'
    },
    services: {
      tag: '[01 / DIVISI BISNIS]',
      headline: 'Teknologi Terpadu Multi-Sektor',
      div1Tag: 'DIVISI 01',
      div1Title: 'Oil & Gas Energy',
      div1Desc: 'Suplai bahan bakar minyak industri B50 skala besar, armada tanker logistik, & pemeliharaan alat berat.',
      div1Link: 'BBM B50 Supply',
      
      div2Tag: 'DIVISI 02',
      div2Title: 'Advertising & Media',
      div2Desc: 'Digital Out-of-Home (DOOH Videotron) lokasi strategis perkotaan, kampanye visual, & strategi branding.',
      div2Link: 'DOOH Videotron',
      
      div3Tag: 'DIVISI 03',
      div3Title: 'AI SaaS Developer',
      div3Desc: 'Pengembangan perangkat lunak enterprise SaaS berbasis kecerdasan buatan (AI), analisis telemetri, & cloud ERP.',
      div3Link: 'AI SaaS Systems',

      gaugeTitle: 'Target Efisiensi',
      gaugeDesc: 'Peningkatan efisiensi rantai pasok dan pemantauan distribusi energi terintegrasi secara real-time.',

      blueprintTag: 'SKEMATIK CETAK BIRU TERINTEGRASI',
      blueprintTitle: 'Arsitektur Skematik Sistem',
      blueprintDesc: 'Pilih tab untuk melihat skema teknis pengiriman BBM B50, dashboard monitoring AI, atau billboard advertising.'
    },
    projects: {
      tag: '[PROYEK UTAMA]',
      headline: 'Performa & Ketahanan',
      desc: 'Solusi teruji PT Berkah Jasa Abadi pada 3 sektor bisnis terdepan dengan standar keselamatan dan efisiensi AI tanpa kompromi.',
      item1Title: 'Distribusi BBM Industri B50',
      item1Desc: 'Suplai bahan bakar industri berkelanjutan menggunakan armada tangki berstandar keselamatan tinggi di seluruh Indonesia.',
      item1Stat1: 'Armada Tanker',
      item1Stat2: 'Wilayah Suplai',
      item1Stat3: 'Keandalan',
      item2Title: 'Media DOOH Videotron Outdoor',
      item3Title: 'Pengembangan Platform AI SaaS Enterprise',
      bannerTag: '(02 / 04)',
      bannerTitle: 'Keunggulan dari kilang hingga cloud AI',
      bannerDesc: 'Komitmen operasional lapangan yang didukung integrasi software cloud telemetri.'
    },
    map: {
      tag: '[JANGKAUAN NASIONAL]',
      headline: 'Peta Logistik Indonesia',
      desc: 'Menghubungkan simpul industri dari Sabang sampai Merauke melalui infrastruktur energi B50, media visual, dan SaaS AI.',
      monitoring: 'SISTEM KENDALI OPERASIONAL TERHUBUNG',
      hqHubs: 'Kantor Pusat & Terminal BBM',
      nodes: 'Simpul Distribusi & Media'
    },
    esg: {
      tag: '[ESG & SUSTAINABILITY]',
      headline: 'Industri Hijau Berkelanjutan',
      desc: 'Kami mengintegrasikan energi bersih B50, pemanfaatan panel surya & tenaga angin, serta analisis AI telemetri.',
      stat1Val: '40%',
      stat1Label: 'Efisiensi Armada',
      stat2Val: '100%',
      stat2Label: 'Kepatuhan ESG',
      imageTag: 'FASILITAS ENERGI HIJAU TERINTEGRASI'
    },
    org: {
      tag: '[ORGANISASI]',
      headline: 'Dewan Direksi Korporat',
      subhead: 'Kepemimpinan eksekutif profesional untuk memastikan keunggulan operasional di seluruh pilar bisnis PT Berkah Jasa Abadi.',
      presTitle: 'PRESIDENT DIRECTOR',
      presDesc: 'Memimpin visi strategis, tata kelola korporat, dan ekspansi holding terpadu.',
      vpadTitle: 'VP OF ADVERTISING MEDIA',
      vpadDesc: 'Mengawasi ekspansi jaringan media outdoor DOOH videotron & kampanye merek visual.',
      treasurerTitle: 'SECRETARY & TREASURER',
      treasurerDesc: 'Mengelola keuangan korporat, kepatuhan perbendaharaan, dan administrasi direksi.',
      ctoTitle: 'CHIEF TECHNOLOGY OFFICER',
      ctoDesc: 'Memimpin arsitektur software AI SaaS, telemetri IoT, serta infrastruktur cloud enterprise.'
    },
    reviews: {
      tag: '[TESTIMONI MITRA]',
      headline: 'Testimoni Operator',
      r1Quote: 'Solusi pasokan BBM B50 industri dari BJA Holding sangat andal, tepat waktu, dan memenuhi seluruh sertifikasi ISO.',
      r1Role: 'Direktur Operasional Energi',
      r2Quote: 'Jaringan videotron LED outdoor milik divisi advertising BJA memberikan jangkauan eksposur merek yang sangat signifikan.',
      r2Role: 'Kepala Pemasaran',
      r3Quote: 'Platform AI SaaS buatan tim BJA bekerja 100% presisi dan meningkatkan efisiensi sistem pemantauan kami.',
      r3Role: 'CTO Enterprise System',
      r4Quote: 'Kerja sama holding yang sangat profesional di 3 sektor usaha dengan jaminan keselamatan tinggi.',
      r4Role: 'VP Supply Chain'
    },
    footer: {
      tag: '[HUBUNGI KAMI]',
      headline: 'Inovasi Energi, Media & SaaS',
      desc: 'Bermitra dengan PT Berkah Jasa Abadi untuk rantai pasok bahan bakar industri B50, media periklanan visual outdoor, dan solusi perangkat lunak AI SaaS terpusat.',
      connectWa: 'Hubungi via WhatsApp',
      emailTag: 'Email Korporat',
      hqTag: 'Kantor Pusat',
      hqVal: 'Cilegon, Banten - Indonesia',
      divTag: 'Divisi Utama Holding',
      div1: '01. Suplai BBM Industri B50 & Logistik Tanker',
      div2: '02. Advertising DOOH Videotron Media Outdoor',
      div3: '03. AI SaaS Developer & Cloud Systems',
      rights: '© 2026 PT Berkah Jasa Abadi. Seluruh hak cipta dilindungi.'
    }
  },
  en: {
    nav: {
      services: 'Business Divisions',
      projects: 'Key Projects',
      ecosystem: 'Holding Synergy',
      organization: 'Organization',
      map: 'Logistics Map',
      esg: 'Green Industry',
      reviews: 'Testimonials',
      contact: 'Contact',
      getInTouch: 'Get in Touch',
      holding: 'CORPORATE HOLDING'
    },
    hero: {
      offshoreTag: 'INTEGRATED ENERGY & INDUSTRIAL LOGISTICS',
      holdingBadge: 'MULTI-SECTOR CORPORATE HOLDING',
      companyName: 'PT. BERKAH JASA ABADI',
      headline: 'Synergy of B50 Energy, Advertising, & AI SaaS',
      aboutUsTag: '[ABOUT US]',
      introStatement: 'PT Berkah Jasa Abadi merges B50 industrial fuel supply chain, outdoor visual ad media, and AI-powered SaaS software.',
      desc: 'BJA Holding combines reliable B50 industrial fuel supply, outdoor videotron visual ad exposure, and enterprise AI SaaS intelligence for operational efficiency.',
      exploreServices: 'Explore Divisions'
    },
    stats: {
      tag: '[CAPABILITIES]',
      statement: 'Multi-Sector Expertise Synergized With Cutting-Edge AI.',
      stat1: 'Active Logistics Hubs',
      stat1Tag: 'Nationwide Scale',
      card2Text: 'BJA Holding solves operational challenges across energy supply, visual media, and AI software.',
      card2Board: 'Executive Corporate Board',
      engineerQuote: 'Precision engineering, safety compliance, and AI software control at every operational level.',
      engineerTag: '[OPERATIONAL EXCELLENCE]'
    },
    services: {
      tag: '[01 / BUSINESS DIVISIONS]',
      headline: 'Next-Gen Multi-Sector Tech',
      div1Tag: 'DIVISION 01',
      div1Title: 'Oil & Gas Energy',
      div1Desc: 'Large-scale B50 biofuel supply, logistics tanker fleets, & heavy equipment maintenance.',
      div1Link: 'B50 Fuel Supply',
      
      div2Tag: 'DIVISION 02',
      div2Title: 'Advertising & Media',
      div2Desc: 'Prime outdoor Digital Out-of-Home (DOOH Videotron) locations, visual campaigns, & branding.',
      div2Link: 'DOOH Videotron',
      
      div3Tag: 'DIVISION 03',
      div3Title: 'AI SaaS Developer',
      div3Desc: 'AI-powered enterprise SaaS software development, telemetry analytics, & cloud ERP systems.',
      div3Link: 'AI SaaS Systems',

      gaugeTitle: 'Efficiency Target',
      gaugeDesc: 'Supply chain efficiency optimization and real-time integrated energy distribution monitoring.',

      blueprintTag: 'INTEGRATED SCHEMATIC BLUEPRINT',
      blueprintTitle: 'Systems Schematic Architecture',
      blueprintDesc: 'Select tabs to view technical schematics for B50 fuel delivery, AI monitoring dashboard, or billboard advertising.'
    },
    projects: {
      tag: '[KEY PROJECTS]',
      headline: 'Built to Perform',
      desc: 'Proven solutions by PT Berkah Jasa Abadi across 3 leading business sectors with uncompromised safety and AI efficiency.',
      item1Title: 'Industrial B50 Fuel Distribution',
      item1Desc: 'Sustainable industrial fuel supply using high-safety fleet tankers across Indonesia.',
      item1Stat1: 'Tanker Fleets',
      item1Stat2: 'Supply Regions',
      item1Stat3: 'Reliability',
      item2Title: 'Outdoor DOOH Videotron Media',
      item3Title: 'Enterprise AI SaaS Platform Development',
      bannerTag: '(02 / 04)',
      bannerTitle: 'Excellence from refinery to AI cloud',
      bannerDesc: 'Field commitment backed by telemetry cloud software integration.'
    },
    map: {
      tag: '[NATIONAL PRESENCE]',
      headline: 'Indonesia Logistics Map',
      desc: 'Connecting industrial nodes nationwide through B50 energy infrastructure, visual media, and AI SaaS.',
      monitoring: 'CONNECTED OPERATIONAL CONTROL SYSTEM',
      hqHubs: 'Headquarters & Fuel Terminals',
      nodes: 'Distribution & Media Nodes'
    },
    esg: {
      tag: '[ESG & SUSTAINABILITY]',
      headline: 'Green Sustainable Industry',
      desc: 'We integrate B50 clean energy, solar and wind adoption, and AI telemetry analytics.',
      stat1Val: '40%',
      stat1Label: 'Fleet Efficiency',
      stat2Val: '100%',
      stat2Label: 'ESG Compliance',
      imageTag: 'INTEGRATED GREEN ENERGY FACILITY'
    },
    org: {
      tag: '[ORGANIZATION]',
      headline: 'Executive Board',
      subhead: 'Professional executive leadership ensuring operational excellence across all business pillars of PT Berkah Jasa Abadi.',
      presTitle: 'PRESIDENT DIRECTOR',
      presDesc: 'Leading strategic vision, corporate governance, and integrated holding expansion.',
      vpadTitle: 'VP OF ADVERTISING MEDIA',
      vpadDesc: 'Overseeing outdoor DOOH videotron media expansion & visual brand campaigns.',
      treasurerTitle: 'SECRETARY & TREASURER',
      treasurerDesc: 'Managing corporate finance, treasury compliance, and board administration.',
      ctoTitle: 'CHIEF TECHNOLOGY OFFICER',
      ctoDesc: 'Leading AI SaaS software architecture, IoT telemetry, and enterprise cloud infrastructure.'
    },
    reviews: {
      tag: '[PARTNER REVIEWS]',
      headline: 'Operator Reviews',
      r1Quote: 'Industrial B50 fuel supply solution from BJA Holding is highly reliable, punctual, and fulfills all ISO certifications.',
      r1Role: 'Director of Energy Ops',
      r2Quote: 'Outdoor LED videotron network owned by BJA advertising division delivers significant brand exposure reach.',
      r2Role: 'Head of Marketing',
      r3Quote: 'AI SaaS platform built by BJA team works 100% precisely and boosted our system monitoring efficiency.',
      r3Role: 'Enterprise System CTO',
      r4Quote: 'Highly professional holding collaboration across 3 business sectors with high safety guarantees.',
      r4Role: 'VP Supply Chain'
    },
    footer: {
      tag: '[GET IN TOUCH]',
      headline: 'Energy, Media & SaaS Innovation',
      desc: 'Partner with PT Berkah Jasa Abadi for B50 fuel supply chain, outdoor visual ad media, and centralized AI SaaS software.',
      connectWa: 'Connect via WhatsApp',
      emailTag: 'Corporate Email',
      hqTag: 'Headquarters',
      hqVal: 'Cilegon, Banten - Indonesia',
      divTag: 'Core Holding Divisions',
      div1: '01. B50 Industrial Fuel Supply & Tanker Logistics',
      div2: '02. DOOH Outdoor Videotron Advertising Media',
      div3: '03. AI SaaS Developer & Cloud Systems',
      rights: '© 2026 PT Berkah Jasa Abadi. All rights reserved.'
    }
  }
};

export const t = (keyPath) => {
  const keys = keyPath.split('.');
  let obj = translations[currentLang.value] || translations['id'];
  for (const k of keys) {
    if (obj && obj[k] !== undefined) {
      obj = obj[k];
    } else {
      return keyPath;
    }
  }
  return obj;
};
