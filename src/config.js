import { reactive } from 'vue';

export const globalConfig = reactive({
  branding: {
    name: 'PT. BERKAH JASA ABADI',
    shortName: 'PT. BERKAH JASA',
    tagline: 'Sinergi Keahlian, Energi, dan Integritas untuk Masa Depan Abadi',
  },
  links: {
    whatsapp: 'https://wa.me/6281234567890',
    email: 'info@berkahjasaabadi.co.id',
    portal: '#portal',
  },
  pillars: {
    energy: {
      title: 'Energi & Infrastruktur',
      desc: 'Penyediaan bahan bakar industri dan pemeliharaan infrastruktur energi skala besar dengan keandalan tanpa kompromi.',
      accent: '#FFBF00',
    },
    logistics: {
      title: 'Advertising & Media',
      desc: 'Solusi periklanan kreatif, manajemen kampanye digital, dan branding strategis untuk visibilitas maksimal.',
      accent: '#007BFF',
    },
    tech: {
      title: 'Inovasi Sistem',
      desc: 'Integrasi sistem ERP dan solusi teknologi medis (SATUSEHAT & VClaim BPJS) untuk efisiensi cerdas.',
      accent: '#00FFD1',
    }
  }
});
