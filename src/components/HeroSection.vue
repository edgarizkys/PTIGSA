<template>
  <section class="relative min-h-screen flex items-center overflow-hidden">
    <!-- Hero Image with Professional Overlay -->
    <div class="absolute inset-0 z-0">
      <img 
        src="../assets/hero-bg.jpg" 
        alt="Industrial Oil Rig" 
        class="w-full h-full object-cover"
      />
      <!-- Gradient Overlay for readability -->
      <div class="absolute inset-0 bg-gradient-to-r from-deep-navy via-deep-navy/80 to-deep-navy/20"></div>
    </div>

    <!-- Content -->
    <div class="container mx-auto px-6 relative z-10">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <!-- Left: Typography -->
        <div 
          v-motion
          :initial="{ opacity: 0, y: 30 }"
          :enter="{ opacity: 1, y: 0, transition: { duration: 800 } }"
        >
          <div class="inline-flex items-center gap-2 mb-6">
            <div class="w-10 h-1 bg-industrial-orange"></div>
            <span class="text-xs font-bold tracking-[0.3em] text-white uppercase">Industrial Excellence</span>
          </div>
          
          <h1 class="text-6xl md:text-8xl font-black text-white mb-8 tracking-tighter leading-[0.9] uppercase">
            Pioneering the <br/>
            <span class="text-industrial-orange">Energy Frontier</span>
          </h1>
          
          <p class="max-w-xl text-slate-300 text-lg md:text-xl mb-12 leading-relaxed font-medium">
            Providing sustainable and high-performance energy solutions for the global market. 
            Reliability, innovation, and industrial strength at our core.
          </p>

          <div class="flex flex-wrap gap-4">
            <button class="btn-primary">
              Our Solutions
            </button>
            <button class="px-8 py-4 bg-white/10 backdrop-blur-md text-white font-bold rounded-sm hover:bg-white hover:text-deep-navy transition-all duration-300 border border-white/20">
              Company Overview
            </button>
          </div>
        </div>

        <!-- Right: Analytics Preview -->
        <div 
          v-motion
          :initial="{ opacity: 0, scale: 0.95 }"
          :enter="{ opacity: 1, scale: 1, transition: { duration: 1000, delay: 200 } }"
          class="hidden lg:block"
        >
          <EnergyMetrics />
        </div>
      </div>
    </div>

    <!-- Stats Bar Overlay (Bottom) -->
    <div class="absolute bottom-0 left-0 w-full bg-industrial-orange py-6 z-20">
      <div class="container mx-auto px-6 flex justify-between items-center text-white">
        <div class="flex items-center gap-4">
          <Globe :size="24" />
          <span class="text-sm font-bold uppercase tracking-widest">Global Operations</span>
        </div>
        <div class="h-8 w-px bg-white/20"></div>
        <div class="flex items-center gap-4">
          <ShieldCheck :size="24" />
          <span class="text-sm font-bold uppercase tracking-widest">Certified Safety</span>
        </div>
        <div class="h-8 w-px bg-white/20"></div>
        <div class="flex items-center gap-4">
          <Zap :size="24" />
          <span class="text-sm font-bold uppercase tracking-widest">High Efficiency</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { Globe, ShieldCheck, Zap } from 'lucide-vue-next';
import EnergyMetrics from './EnergyMetrics.vue';
</script>
