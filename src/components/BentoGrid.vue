<template>
  <section id="business" class="py-32 relative overflow-hidden bg-bg-primary">
    <div class="container mx-auto px-6">
      <div class="mb-20">
        <h2 class="text-4xl md:text-6xl font-black mb-6 bento-reveal font-outfit uppercase tracking-tighter text-text-primary">Pilar Bisnis Utama.</h2>
        <p class="text-text-secondary max-w-xl bento-reveal text-lg font-medium">Ekosistem terpadu yang menggabungkan kekuatan fisik dan kecerdasan digital untuk masa depan industri.</p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-12 gap-6">
        <!-- Row 1: Energy & Infrastructure (UPDATED IMAGE) -->
        <div class="md:col-span-8 bento-card group bento-reveal min-h-[450px] cursor-pointer border-amber-gold/20 hover:border-amber-gold/60 transition-colors">
          <div class="relative z-10 h-full flex flex-col justify-between">
            <div>
              <div class="w-20 h-20 rounded-3xl bg-amber-gold/10 flex items-center justify-center mb-10 group-hover:scale-110 transition-transform duration-500">
                <Flame class="text-amber-gold" :size="40" />
              </div>
              <h3 class="text-5xl font-black mb-6 font-outfit uppercase text-text-primary">{{ globalConfig.pillars.energy.title }}</h3>
              <p class="text-text-secondary max-w-md text-xl leading-relaxed mb-10 font-semibold dark:font-medium">
                {{ globalConfig.pillars.energy.desc }}
              </p>
            </div>
            <div class="flex gap-4">
              <button class="px-6 py-2 rounded-xl bg-amber-gold text-black text-[10px] font-black uppercase tracking-widest hover:brightness-110 transition-all shadow-lg shadow-amber-gold/20">Hubungi Divisi</button>
              <button class="px-6 py-2 rounded-xl border-2 border-amber-gold/30 text-amber-gold text-[10px] font-black uppercase tracking-widest hover:bg-amber-gold/10 transition-all">Dokumentasi</button>
            </div>
          </div>
          <!-- New Energy & Mining Image Overlay -->
          <div class="absolute bottom-0 right-0 w-1/2 h-full opacity-40 grayscale group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-1000 bg-[url('/mining_energy_main.png')] bg-cover bg-center shadow-2xl">
             <div class="absolute inset-0 bg-gradient-to-r from-bg-primary via-transparent to-transparent"></div>
          </div>
        </div>

        <div class="md:col-span-4 bento-card group bento-reveal cursor-pointer border-electric-blue/20 hover:border-electric-blue/60 bg-gradient-to-br from-electric-blue/5 to-transparent transition-colors overflow-hidden">
          <div class="relative z-10">
            <div class="w-16 h-16 rounded-2xl bg-electric-blue/10 flex items-center justify-center mb-8 group-hover:rotate-12 transition-transform">
              <Ship class="text-electric-blue" :size="32" />
            </div>
            <h3 class="text-3xl font-black mb-6 font-outfit uppercase text-text-primary">{{ globalConfig.pillars.logistics.title }}</h3>
            <p class="text-text-secondary mb-10 leading-relaxed text-lg font-semibold dark:font-medium">
              {{ globalConfig.pillars.logistics.desc }}
            </p>
            
            <div class="relative w-full h-1 bg-text-primary/10 rounded-full overflow-hidden mb-6">
              <div class="absolute inset-0 w-0 group-hover:w-full h-full bg-electric-blue transition-all duration-1000"></div>
              <div class="absolute inset-0 flex justify-around opacity-0 group-hover:opacity-100 transition-opacity">
                 <div v-for="i in 3" :key="i" class="w-1 h-1 bg-white rounded-full animate-ping"></div>
              </div>
            </div>
            
            <div class="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-all translate-y-2 group-hover:translate-y-0 duration-500">
               <div class="w-2 h-2 bg-electric-blue rounded-full"></div>
               <span class="text-[10px] font-black uppercase text-electric-blue tracking-widest">Real-time Tracking Active</span>
            </div>
          </div>
          <div class="absolute -bottom-10 -right-10 w-32 h-32 bg-electric-blue/10 rounded-full blur-3xl group-hover:bg-electric-blue/30 transition-all"></div>
        </div>

        <!-- Row 2: Tech & Integrated Operations -->
        <div class="md:col-span-4 bento-card group bento-reveal cursor-pointer border-white/10 hover:border-cyan-mint/40 bg-bg-secondary">
          <div class="relative z-10">
            <div class="w-14 h-14 rounded-2xl bg-cyan-mint/10 flex items-center justify-center mb-6">
              <Database class="text-cyan-mint" :size="28" />
            </div>
            <h3 class="text-2xl font-black mb-4 font-outfit uppercase text-text-primary">ERP Enterprise</h3>
            <p class="text-text-secondary text-sm font-semibold dark:font-medium">Manajemen data terintegrasi untuk efisiensi rantai pasok energi dan pertambangan.</p>
          </div>
        </div>

        <div class="md:col-span-8 bento-card group bento-reveal overflow-hidden border-cyan-mint/20 bg-bg-primary">
          <div class="flex flex-col lg:flex-row items-center gap-10 h-full p-2">
            <div class="flex-1 p-6 relative z-10">
              <div class="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-cyan-mint/10 border border-cyan-mint/30 mb-8">
                <Terminal class="text-cyan-mint" :size="16" />
                <span class="text-[9px] font-black uppercase tracking-widest text-cyan-mint">Operation Intelligence</span>
              </div>
              <h3 class="text-4xl font-black mb-6 font-outfit uppercase text-text-primary">Integrated Monitoring Center</h3>
              <p class="text-text-secondary text-lg leading-relaxed font-semibold dark:font-medium">
                Pusat kendali operasional digital untuk pengawasan real-time distribusi energi dan aktivitas pertambangan di seluruh wilayah kerja.
              </p>
              <div class="flex gap-6 mt-10">
                 <div class="flex flex-col">
                    <span class="text-2xl font-black text-cyan-mint font-outfit">24/7</span>
                    <span class="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Active Guard</span>
                 </div>
                 <div class="flex flex-col">
                    <span class="text-2xl font-black text-amber-gold font-outfit">Real-Time</span>
                    <span class="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Data Sync</span>
                 </div>
              </div>
            </div>
            <div class="w-full lg:w-[400px] h-full min-h-[300px] relative rounded-[2.5rem] overflow-hidden border-2 border-glass-border shadow-2xl">
               <img src="/industrial_control_center.png" alt="Control Center" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" />
               <div class="absolute inset-0 bg-gradient-to-t from-bg-primary/80 to-transparent"></div>
               <div class="absolute bottom-6 left-6 flex items-center gap-3">
                  <div class="w-2 h-2 bg-cyan-mint rounded-full animate-ping"></div>
                  <span class="text-[10px] font-black uppercase tracking-widest text-white">System Online</span>
               </div>
            </div>
          </div>
        </div>

        <!-- Row 3: Diversification - HIGH VISIBILITY / BRIGHT -->
        <div class="md:col-span-12 bento-card group bento-reveal border-electric-blue/40 bg-white dark:bg-slate-900 overflow-hidden min-h-[500px] flex items-center shadow-[0_50px_100px_rgba(0,123,255,0.15)] transition-all duration-700">
          <div class="relative z-10 w-full grid grid-cols-1 lg:grid-cols-2 gap-16 px-10 py-16">
            <div>
              <div class="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-electric-blue/10 border border-electric-blue/30 mb-8">
                <Globe class="text-electric-blue" :size="24" />
                <span class="text-[10px] font-black uppercase tracking-[0.3em] text-electric-blue">Ekspansi Global Terpadu</span>
              </div>
              <h3 class="text-5xl md:text-7xl font-black mb-8 font-outfit uppercase text-slate-950 dark:text-white leading-[0.9] tracking-tighter">Konektivitas Global Tanpa Batas.</h3>
              <p class="text-slate-600 dark:text-slate-400 text-xl font-semibold leading-relaxed max-w-xl">
                Menyatukan kekuatan industri energi, logistik maritim, dan integrasi sistem digital dalam satu ekosistem yang tangguh dan transparan.
              </p>
            </div>
            
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
               <div class="p-8 rounded-[2.5rem] bg-slate-50 dark:bg-slate-800/50 border-2 border-slate-200 dark:border-slate-700 hover:border-amber-gold transition-all duration-500 group/item">
                  <div class="w-12 h-12 rounded-xl bg-amber-gold/10 flex items-center justify-center mb-6">
                    <Flame class="text-amber-gold" :size="28" />
                  </div>
                  <p class="text-xl font-black font-outfit uppercase text-slate-900 dark:text-white mb-2">Solar B30</p>
                  <p class="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Biofuel & Energy Supply</p>
               </div>
               <div class="p-8 rounded-[2.5rem] bg-slate-50 dark:bg-slate-800/50 border-2 border-slate-200 dark:border-slate-700 hover:border-electric-blue transition-all duration-500 group/item">
                  <div class="w-12 h-12 rounded-xl bg-electric-blue/10 flex items-center justify-center mb-6">
                    <Ship class="text-electric-blue" :size="28" />
                  </div>
                  <p class="text-xl font-black font-outfit uppercase text-slate-900 dark:text-white mb-2">Perkapalan</p>
                  <p class="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Maritime Logistics Hub</p>
               </div>
               <div class="p-8 rounded-[2.5rem] bg-slate-50 dark:bg-slate-800/50 border-2 border-slate-200 dark:border-slate-700 hover:border-cyan-mint transition-all duration-500 group/item">
                  <div class="w-12 h-12 rounded-xl bg-cyan-mint/10 flex items-center justify-center mb-6">
                    <Megaphone class="text-cyan-mint" :size="28" />
                  </div>
                  <p class="text-xl font-black font-outfit uppercase text-slate-900 dark:text-white mb-2">Advertising</p>
                  <p class="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Digital Media Presence</p>
               </div>
               <div class="p-8 rounded-[2.5rem] bg-slate-50 dark:bg-slate-800/50 border-2 border-slate-200 dark:border-slate-700 hover:border-text-primary transition-all duration-500 group/item">
                  <div class="w-12 h-12 rounded-xl bg-slate-200 dark:bg-slate-700 flex items-center justify-center mb-6">
                    <Monitor class="text-slate-900 dark:text-white" :size="28" />
                  </div>
                  <p class="text-xl font-black font-outfit uppercase text-slate-900 dark:text-white mb-2">Sistem Digital</p>
                  <p class="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Software & Hardware</p>
               </div>
            </div>
          </div>
          <div class="absolute -bottom-20 -right-20 w-[600px] h-[600px] bg-electric-blue/10 rounded-full blur-[150px] opacity-40"></div>
          <div class="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-electric-blue/5 to-transparent"></div>
        </div>

      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted } from 'vue';
import { 
  Flame, Ship, Cpu, Activity, Database, Box, 
  Settings as Wrench, Globe, BarChart2, Sun, Layers, ShieldCheck,
  Megaphone, Monitor, Terminal
} from 'lucide-vue-next';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { globalConfig } from '../config';

gsap.registerPlugin(ScrollTrigger);

onMounted(() => {
  setTimeout(() => {
    gsap.from('.bento-reveal', {
      scrollTrigger: {
        trigger: '#business',
        start: 'top 85%',
      },
      y: 50,
      opacity: 0,
      duration: 1,
      stagger: 0.1,
      ease: 'power3.out',
      clearProps: 'all'
    });
  }, 100);
});
</script>
