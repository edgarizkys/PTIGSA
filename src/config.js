import { reactive } from 'vue';

export const globalConfig = reactive({
  branding: {
    name: 'PT. BERKAH JASA ABADI',
    shortName: 'PT. BERKAH JASA ABADI',
    tagline: 'Sinergi Energetik, Media Visual, dan Inovasi SaaS AI untuk Masa Depan',
  },
  links: {
    whatsapp: 'https://wa.me/6282114242634',
    email: 'info@berkahjasaabadi.co.id',
    portal: '#contact',
  },
  pillars: {
    energy: {
      title: 'Oil & Gas Energy',
      subtitle: 'Industri Bahan Bakar & Logistik Energi B30',
      desc: 'Penyediaan bahan bakar industri B30, manajemen kilang minyak, dan pemeliharaan armada tangki skala besar dengan keandalan tanpa kompromi.',
      accent: '#CCFF00',
      image: '/hero_petrova_rig.jpg',
      tags: ['BBM Industri B30', 'Tanker Fleet', 'Energy Logistics']
    },
    advertising: {
      title: 'Advertising & Media Hub',
      subtitle: 'Digital Out-of-Home & Strategic Branding',
      desc: 'Solusi periklanan videotron LED outdoor, manajemen kampanye media visual, dan eksposur merek strategis di lokasi-lokasi utama.',
      accent: '#0A0F1D',
      image: '/petrova_site_workers.jpg',
      tags: ['DOOH Videotron', 'Creative Campaign', 'Brand Strategy']
    },
    saas: {
      title: 'AI SaaS Developer & Integration',
      subtitle: 'Enterprise AI Software & IoT Telemetry',
      desc: 'Pengembangan perangkat lunak enterprise SaaS berbasis kecerdasan buatan (AI), analisis telemetri IoT, dan arsitektur cloud terpusat.',
      accent: '#CCFF00',
      image: '/petrova_engineer.jpg',
      tags: ['Enterprise AI ERP', 'IoT Telemetry', 'Cloud SaaS']
    }
  }
});
