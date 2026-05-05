<template>
  <section id="nexus" class="py-32 relative overflow-hidden bg-bg-primary">
    <div class="container mx-auto px-6">
      <div class="mb-20">
        <h2 class="text-4xl md:text-6xl font-black mb-6 bento-reveal font-outfit uppercase tracking-tighter text-text-primary">Pilar Utama Nexus.</h2>
        <p class="text-text-secondary max-w-xl bento-reveal text-lg font-medium">Ekosistem terpadu yang menggabungkan kekuatan fisik dan kecerdasan digital untuk masa depan industri.</p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-12 gap-6">
        <!-- Pillar: Energy (8 Columns) -->
        <div class="md:col-span-8 bento-card group bento-reveal min-h-[450px] cursor-pointer border-amber-gold/20 hover:border-amber-gold/60 transition-colors">
          <div class="relative z-10 h-full flex flex-col justify-between">
            <div>
              <div class="w-20 h-20 rounded-3xl bg-amber-gold/10 flex items-center justify-center mb-10 group-hover:scale-110 transition-transform duration-500">
                <Flame class="text-amber-gold" :size="40" />
              </div>
              <h3 class="text-5xl font-black mb-6 font-outfit uppercase text-text-primary">{{ nexusConfig.pillars.energy.title }}</h3>
              <p class="text-text-secondary max-w-md text-xl leading-relaxed mb-10 font-semibold dark:font-medium">
                {{ nexusConfig.pillars.energy.desc }}
              </p>
            </div>
            <div class="flex gap-4">
              <button class="px-6 py-2 rounded-xl bg-amber-gold text-black text-[10px] font-black uppercase tracking-widest hover:brightness-110 transition-all shadow-lg shadow-amber-gold/20">Hubungi Divisi</button>
              <button class="px-6 py-2 rounded-xl border-2 border-amber-gold/30 text-amber-gold text-[10px] font-black uppercase tracking-widest hover:bg-amber-gold/10 transition-all">Dokumentasi</button>
            </div>
          </div>
          <div class="absolute -top-24 -right-24 w-64 h-64 bg-amber-gold/5 rounded-full blur-[80px] group-hover:bg-amber-gold/20 transition-all duration-700"></div>
          <div class="absolute bottom-0 right-0 w-1/3 h-full opacity-30 grayscale group-hover:grayscale-0 group-hover:opacity-70 transition-all duration-1000 bg-[url('https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&q=80&w=1000')] bg-cover bg-center"></div>
        </div>

        <!-- Pillar: Logistics (4 Columns) -->
        <div class="md:col-span-4 bento-card group bento-reveal cursor-pointer border-electric-blue/20 hover:border-electric-blue/60 bg-gradient-to-br from-electric-blue/5 to-transparent transition-colors">
          <div class="relative z-10">
            <div class="w-16 h-16 rounded-2xl bg-electric-blue/10 flex items-center justify-center mb-8 group-hover:rotate-12 transition-transform">
              <Ship class="text-electric-blue" :size="32" />
            </div>
            <h3 class="text-3xl font-black mb-6 font-outfit uppercase text-text-primary">{{ nexusConfig.pillars.logistics.title }}</h3>
            <p class="text-text-secondary mb-10 leading-relaxed text-lg font-semibold dark:font-medium">
              {{ nexusConfig.pillars.logistics.desc }}
            </p>
            <div class="w-full h-1 bg-text-primary/10 rounded-full overflow-hidden mb-6">
              <div class="w-0 group-hover:w-full h-full bg-electric-blue transition-all duration-1000"></div>
            </div>
          </div>
          <div class="absolute -bottom-10 -right-10 w-32 h-32 bg-electric-blue/10 rounded-full blur-3xl group-hover:bg-electric-blue/30 transition-all"></div>
        </div>

        <!-- Row 2 -->
        <!-- ERP Enterprise (4 Columns) -->
        <div class="md:col-span-4 bento-card group bento-reveal cursor-pointer border-white/10 hover:border-cyan-mint/40 bg-bg-secondary">
          <div class="relative z-10">
            <div class="w-14 h-14 rounded-2xl bg-cyan-mint/10 flex items-center justify-center mb-6">
              <Database class="text-cyan-mint" :size="28" />
            </div>
            <h3 class="text-2xl font-black mb-4 font-outfit uppercase text-text-primary">ERP Enterprise</h3>
            <p class="text-text-secondary text-sm font-semibold dark:font-medium">
              Manajemen proses bisnis terpadu untuk efisiensi maksimal di seluruh lini perusahaan.
            </p>
          </div>
        </div>

        <!-- Tech Deep Dive: Medical (8 Columns) -->
        <div class="md:col-span-8 bento-card group bento-reveal overflow-hidden border-cyan-mint/10">
          <div class="flex flex-col lg:flex-row items-center gap-16">
            <div class="flex-1">
              <div class="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-cyan-mint/10 border border-cyan-mint/30 mb-8">
                <Activity class="text-cyan-mint" :size="16" />
                <span class="text-[9px] font-black uppercase tracking-widest text-cyan-mint">Medical Standard</span>
              </div>
              <h3 class="text-4xl font-black mb-6 font-outfit uppercase text-text-primary">HealthTech Integration</h3>
              <p class="text-text-secondary text-xl leading-relaxed font-semibold dark:font-medium">
                Solusi bridging **SATUSEHAT** & **VClaim BPJS** dengan enkripsi data militer.
              </p>
            </div>
            <div class="w-full lg:w-80 h-56 bg-bg-secondary rounded-[2.5rem] flex flex-col items-center justify-center border border-glass-border group-hover:border-cyan-mint/40 transition-all duration-500 overflow-hidden relative shadow-inner">
               <div class="absolute inset-0 bg-gradient-to-t from-cyan-mint/10 to-transparent"></div>
               <div class="text-5xl font-black text-text-primary mb-2 font-outfit uppercase">BPJS Ready</div>
               <div class="w-2 h-2 bg-cyan-mint rounded-full animate-ping"></div>
            </div>
          </div>
        </div>

        <!-- Row 3 -->
        <!-- Analytics (4 Columns) -->
        <div class="md:col-span-4 bento-card group bento-reveal cursor-pointer border-cyan-mint/10 hover:border-cyan-mint/40">
          <div class="relative z-10">
            <div class="w-14 h-14 rounded-2xl bg-cyan-mint/10 flex items-center justify-center mb-6">
              <BarChart2 class="text-cyan-mint" :size="28" />
            </div>
            <h3 class="text-2xl font-black mb-4 font-outfit uppercase text-text-primary">Analytics Hub</h3>
            <p class="text-text-secondary text-sm font-semibold dark:font-medium">
              Visualisasi data real-time untuk pengambilan keputusan strategis yang tepat sasaran.
            </p>
          </div>
        </div>

        <!-- Smart Warehouse (4 Columns) -->
        <div class="md:col-span-4 bento-card group bento-reveal cursor-pointer border-electric-blue/10 hover:border-electric-blue/40">
          <div class="relative z-10">
            <div class="w-14 h-14 rounded-2xl bg-electric-blue/10 flex items-center justify-center mb-6">
              <Box class="text-electric-blue" :size="28" />
            </div>
            <h3 class="text-2xl font-black mb-4 font-outfit uppercase text-text-primary">Smart Logistics</h3>
            <p class="text-text-secondary text-sm font-semibold dark:font-medium">
              Otomasi pergudangan dengan sistem pelacakan aset berbasis IoT yang akurat.
            </p>
          </div>
        </div>

        <!-- Sustainable Energy (4 Columns) -->
        <div class="md:col-span-4 bento-card group bento-reveal cursor-pointer border-amber-gold/10 hover:border-amber-gold/40">
          <div class="relative z-10">
            <div class="w-14 h-14 rounded-2xl bg-amber-gold/10 flex items-center justify-center mb-6">
              <Sun class="text-amber-gold" :size="28" />
            </div>
            <h3 class="text-2xl font-black mb-4 font-outfit uppercase text-text-primary">Green Power</h3>
            <p class="text-text-secondary text-sm font-semibold dark:font-medium">
              Integrasi energi terbarukan untuk mendukung operasional industri ramah lingkungan.
            </p>
          </div>
        </div>

        <!-- Row 4 (New Items) -->
        <!-- Digital Twin (4 Columns) -->
        <div class="md:col-span-4 bento-card group bento-reveal cursor-pointer border-cyan-mint/10 hover:border-cyan-mint/40">
          <div class="relative z-10">
            <div class="w-14 h-14 rounded-2xl bg-cyan-mint/10 flex items-center justify-center mb-6">
              <Layers class="text-cyan-mint" :size="28" />
            </div>
            <h3 class="text-2xl font-black mb-4 font-outfit uppercase text-text-primary">Digital Twin</h3>
            <p class="text-text-secondary text-sm font-semibold dark:font-medium">
              Replikasi virtual aset fisik untuk simulasi dan pemeliharaan prediktif yang canggih.
            </p>
          </div>
        </div>

        <!-- Cyber Security (4 Columns) -->
        <div class="md:col-span-4 bento-card group bento-reveal cursor-pointer border-electric-blue/10 hover:border-electric-blue/40">
          <div class="relative z-10">
            <div class="w-14 h-14 rounded-2xl bg-electric-blue/10 flex items-center justify-center mb-6">
              <ShieldCheck class="text-electric-blue" :size="28" />
            </div>
            <h3 class="text-2xl font-black mb-4 font-outfit uppercase text-text-primary">Cyber Guard</h3>
            <p class="text-text-secondary text-sm font-semibold dark:font-medium">
              Proteksi data berlapis untuk menjaga integritas informasi di seluruh jaringan Nexus.
            </p>
          </div>
        </div>

        <!-- Maintenance (4 Columns) -->
        <div class="md:col-span-4 bento-card group bento-reveal cursor-pointer border-amber-gold/10 hover:border-amber-gold/40">
          <div class="relative z-10">
            <div class="w-14 h-14 rounded-2xl bg-amber-gold/10 flex items-center justify-center mb-6">
              <Wrench class="text-amber-gold" :size="28" />
            </div>
            <h3 class="text-2xl font-black mb-4 font-outfit uppercase text-text-primary">Reliability</h3>
            <p class="text-text-secondary text-sm font-semibold dark:font-medium">
              Layanan pemeliharaan infrastruktur berkelanjutan untuk menjamin kelancaran bisnis.
            </p>
          </div>
        </div>

        <!-- Row 5 -->
        <!-- Global Connectivity (12 Columns Full Width) -->
        <div class="md:col-span-12 bento-card group bento-reveal cursor-pointer border-white/10 hover:border-white/40 bg-text-primary text-bg-primary overflow-hidden min-h-[300px] flex items-center">
          <div class="relative z-10 flex flex-col md:flex-row items-center justify-between w-full gap-10">
            <div class="max-w-2xl">
              <div class="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center mb-6">
                <Globe class="text-white" :size="28" />
              </div>
              <h3 class="text-4xl md:text-5xl font-black mb-6 font-outfit uppercase text-bg-primary">Konektivitas Global Tanpa Batas</h3>
              <p class="text-bg-primary/70 text-lg font-medium leading-relaxed">
                Menghubungkan mitra strategis di seluruh penjuru dunia melalui infrastruktur logistik dan teknologi komunikasi yang kokoh.
              </p>
            </div>
            <div class="relative w-64 h-64 opacity-20 flex items-center justify-center">
               <Globe class="text-white w-full h-full animate-pulse" :size="200" />
            </div>
          </div>
          <div class="absolute -bottom-20 -right-20 w-[500px] h-[500px] bg-white/5 rounded-full blur-[120px]"></div>
        </div>

      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted } from 'vue';
import { 
  Flame, Ship, Cpu, Activity, Database, Box, 
  Settings as Wrench, Globe, BarChart2, Sun, Layers, ShieldCheck 
} from 'lucide-vue-next';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { nexusConfig } from '../config';

gsap.registerPlugin(ScrollTrigger);

onMounted(() => {
  // Use a slight delay to ensure DOM is ready
  setTimeout(() => {
    gsap.from('.bento-reveal', {
      scrollTrigger: {
        trigger: '#nexus',
        start: 'top 85%',
      },
      y: 50,
      opacity: 0,
      duration: 1,
      stagger: 0.1,
      ease: 'power3.out',
      clearProps: 'all' // Ensure properties are cleared after animation
    });
  }, 100);
});
</script>
