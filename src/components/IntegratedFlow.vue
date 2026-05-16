<template>
  <section id="ecosystem" class="py-32 relative overflow-hidden bg-bg-secondary">
    <div class="container mx-auto px-6">
      <div class="text-center mb-20">
        <div class="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-cyan-mint/10 border border-cyan-mint/20 mb-6 flow-reveal">
          <span class="w-2 h-2 bg-cyan-mint rounded-full animate-pulse"></span>
          <span class="text-[10px] font-black uppercase tracking-[0.3em] text-cyan-mint">Mesin Sinergi BJA</span>
        </div>
        <h2 class="text-4xl md:text-6xl font-black mb-6 flow-reveal font-outfit uppercase text-text-primary">Ekosistem Terintegrasi.</h2>
        <p class="text-text-secondary max-w-2xl mx-auto text-lg flow-reveal font-medium">
          Bagaimana Teknologi menjadi otak yang mengoptimalkan aliran Energi dan presisi Logistik secara real-time.
        </p>
      </div>

      <div class="relative h-[600px] flex items-center justify-center">
        <!-- Center Brain (Tech) -->
        <div class="absolute z-20 w-52 h-52 glass rounded-[3rem] flex flex-col items-center justify-center border-2 border-cyan-mint/40 shadow-[0_0_50px_rgba(0,255,209,0.15)] bg-bg-primary">
          <Cpu class="text-cyan-mint mb-3 animate-pulse" :size="56" />
          <p class="text-[10px] font-black uppercase tracking-[0.3em] text-cyan-mint">Intelligence</p>
        </div>

        <!-- SVG Flow Lines -->
        <svg class="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 1000 600">
          <!-- Energy to Tech -->
          <path d="M250,150 Q500,100 500,220" stroke="url(#gradient-amber)" stroke-width="3" fill="none" class="dash-flow" />
          <!-- Logistics to Tech -->
          <path d="M750,150 Q500,100 500,220" stroke="url(#gradient-blue)" stroke-width="3" fill="none" class="dash-flow" />
          <!-- Tech to Outputs -->
          <path d="M500,380 Q500,500 250,450" stroke="url(#gradient-cyan)" stroke-width="3" fill="none" class="dash-flow" />
          <path d="M500,380 Q500,500 750,450" stroke="url(#gradient-cyan)" stroke-width="3" fill="none" class="dash-flow" />

          <defs>
            <linearGradient id="gradient-amber" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stop-color="var(--color-amber-gold)" />
              <stop offset="100%" stop-color="var(--color-cyan-mint)" />
            </linearGradient>
            <linearGradient id="gradient-blue" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stop-color="var(--color-electric-blue)" />
              <stop offset="100%" stop-color="var(--color-cyan-mint)" />
            </linearGradient>
            <linearGradient id="gradient-cyan" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stop-color="var(--color-cyan-mint)" />
              <stop offset="100%" stop-color="transparent" />
            </linearGradient>
          </defs>
        </svg>

        <!-- Peripheral Nodes -->
        <div class="absolute top-10 left-[12%] w-44 h-44 glass rounded-3xl flex flex-col items-center justify-center border-2 border-amber-gold/30 bg-bg-primary shadow-xl">
          <Flame class="text-amber-gold mb-3" :size="40" />
          <p class="text-xs font-black uppercase text-text-primary tracking-widest">Energi</p>
          <p class="text-[8px] font-bold text-slate-500 mt-1 uppercase">Fuel Stream</p>
        </div>
        <div class="absolute top-10 right-[12%] w-44 h-44 glass rounded-3xl flex flex-col items-center justify-center border-2 border-electric-blue/30 bg-bg-primary shadow-xl">
          <Ship class="text-electric-blue mb-3" :size="40" />
          <p class="text-xs font-black uppercase text-text-primary tracking-widest">Logistik</p>
          <p class="text-[8px] font-bold text-slate-500 mt-1 uppercase">Integrated Supply</p>
        </div>
        <div class="absolute bottom-10 left-[12%] w-44 h-44 glass rounded-3xl flex flex-col items-center justify-center border border-glass-border bg-bg-primary shadow-xl">
          <BarChart4 class="text-text-primary mb-3" :size="40" />
          <p class="text-xs font-black uppercase text-text-primary tracking-widest">Optimasi</p>
          <p class="text-[8px] font-bold text-slate-500 mt-1 uppercase">Efficiency +35%</p>
        </div>
        <div class="absolute bottom-10 right-[12%] w-44 h-44 glass rounded-3xl flex flex-col items-center justify-center border border-glass-border bg-bg-primary shadow-xl">
          <ShieldCheck class="text-text-primary mb-3" :size="40" />
          <p class="text-xs font-black uppercase text-text-primary tracking-widest">Keunggulan</p>
          <p class="text-[8px] font-bold text-slate-500 mt-1 uppercase">Quality Assured</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted } from 'vue';
import { Cpu, Flame, Ship, BarChart4, ShieldCheck } from 'lucide-vue-next';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

onMounted(() => {
  gsap.from('.flow-reveal', {
    scrollTrigger: {
      trigger: '#ecosystem',
      start: 'top 80%',
    },
    y: 50,
    opacity: 0,
    duration: 1,
    stagger: 0.2,
    ease: 'power3.out',
  });
});
</script>

<style scoped>
.dash-flow {
  stroke-dasharray: 12;
  animation: dash 15s linear infinite;
}

@keyframes dash {
  from { stroke-dashoffset: 600; }
  to { stroke-dashoffset: 0; }
}
</style>
