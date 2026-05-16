import { reactive } from 'vue';

export const globalConfig = reactive({
  branding: {
    name: 'PT. BERKAH JASA ABADI',
    shortName: 'BERKAH JASA',
    tagline: 'Sinergi Keahlian, Logistik, dan Integritas untuk Masa Depan Abadi',
  },
  links: {
    whatsapp: 'https://wa.me/6281234567890',
    email: 'contact@iseglobalanugerah.com',
    portal: '#portal',
  },
  pillars: {
    energy: {
      title: 'Energi & Infrastruktur',
      desc: 'Penyediaan bahan bakar industri dan pemeliharaan infrastruktur energi skala besar dengan keandalan tanpa kompromi.',
      accent: '#FFBF00',
    },
    logistics: {
      title: 'Logistik Cerdas',
      desc: 'Manajemen rantai pasok global, pengiriman kargo, dan mobilisasi aset dengan presisi tinggi.',
      accent: '#007BFF',
    },
    tech: {
      title: 'Inovasi Sistem',
      desc: 'Integrasi sistem ERP dan solusi teknologi medis (SATUSEHAT & VClaim BPJS) untuk efisiensi cerdas.',
      accent: '#00FFD1',
    }
  }
});
