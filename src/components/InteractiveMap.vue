<template>
  <section id="map" class="py-32 relative overflow-hidden bg-bg-secondary">
    <div class="container mx-auto px-6">
      <div class="text-center mb-20">
        <div class="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-electric-blue/10 border border-electric-blue/20 mb-6">
          <Globe class="text-electric-blue" :size="20" />
          <span class="text-[10px] font-black uppercase tracking-[0.3em] text-electric-blue">National Presence</span>
        </div>
        <h2 class="text-4xl md:text-6xl font-black mb-6 font-outfit uppercase tracking-tighter text-text-primary">Jejak Operasional Indonesia.</h2>
        <p class="text-text-secondary max-w-2xl mx-auto text-lg leading-relaxed font-medium">
          Menghubungkan simpul-simpul industri strategis dari Sabang sampai Merauke melalui infrastruktur energi dan logistik yang terintegrasi.
        </p>
      </div>

      <!-- Indonesia Map Container -->
      <div class="relative w-full aspect-[21/9] glass rounded-[4rem] overflow-hidden border-2 border-glass-border shadow-2xl bg-bg-primary group">
        
        <!-- Generated Tech Map as Background -->
        <div class="absolute inset-0 z-0 scale-110">
          <img src="/indonesia_tech_map_1777988083519.png" alt="Indonesia Tech Map" class="w-full h-full object-cover opacity-90 dark:opacity-100 dark:invert-0 invert transition-all duration-700" />
        </div>

        <!-- Connection Lines (SVG) -->
        <svg class="absolute inset-0 w-full h-full pointer-events-none z-10" viewBox="0 0 1000 428">
           <defs>
             <linearGradient id="map-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
               <stop offset="0%" stop-color="var(--color-electric-blue)" stop-opacity="0.2" />
               <stop offset="50%" stop-color="var(--color-amber-gold)" stop-opacity="0.5" />
               <stop offset="100%" stop-color="var(--color-electric-blue)" stop-opacity="0.2" />
             </linearGradient>
           </defs>
           <path d="M250,278 Q335,214 420,214" stroke="url(#map-gradient)" stroke-width="2" fill="none" class="map-path" />
           <path d="M250,278 Q300,300 350,300" stroke="url(#map-gradient)" stroke-width="2" fill="none" class="map-path" />
        </svg>

        <!-- Operational Points -->
        <div v-for="point in points" :key="point.name" 
             class="absolute group/point z-20"
             :style="{ top: point.y + '%', left: point.x + '%' }">
          
          <div class="relative w-6 h-6 -translate-x-1/2 -translate-y-1/2 cursor-pointer flex items-center justify-center">
             <div class="w-4 h-4 rounded-full border-2 border-white shadow-xl" :class="point.type === 'hq' ? 'bg-amber-gold' : 'bg-electric-blue'"></div>
             <div class="absolute inset-0 rounded-full animate-ping opacity-60" :class="point.type === 'hq' ? 'bg-amber-gold' : 'bg-electric-blue'"></div>
          </div>

          <!-- Label -->
          <div class="absolute top-6 left-1/2 -translate-x-1/2 glass px-4 py-2 rounded-xl whitespace-nowrap opacity-0 group-hover/point:opacity-100 transition-all duration-300 pointer-events-none translate-y-2 group-hover/point:translate-y-0 shadow-2xl border border-glass-border">
            <p class="text-[10px] font-black text-text-primary uppercase mb-0.5 tracking-widest">{{ point.name }}</p>
            <p class="text-[8px] font-bold text-slate-500 uppercase tracking-tighter">{{ point.status }}</p>
          </div>
        </div>

        <!-- Legend Overlay -->
        <div class="absolute top-10 right-10 glass p-6 rounded-3xl border border-glass-border hidden md:block">
           <div class="flex items-center gap-3 mb-2">
             <div class="w-2 h-2 bg-amber-gold rounded-full"></div>
             <p class="text-[10px] font-black uppercase text-text-primary tracking-widest">HQ & Energy Hubs</p>
           </div>
           <div class="flex items-center gap-3">
             <div class="w-2 h-2 bg-electric-blue rounded-full"></div>
             <p class="text-[10px] font-black uppercase text-text-primary tracking-widest">Logistics Nodes</p>
           </div>
        </div>

        <!-- Floating Info -->
        <div class="absolute bottom-10 left-10 glass p-6 rounded-3xl border-l-4 border-amber-gold shadow-2xl">
          <div class="flex items-center gap-4">
             <div class="w-12 h-12 bg-amber-gold/20 rounded-2xl flex items-center justify-center">
               <Zap class="text-amber-gold" :size="24" />
             </div>
             <div>
               <p class="text-sm font-black text-text-primary uppercase font-outfit">Sistem Monitoring Aktif</p>
               <p class="text-[9px] font-bold text-slate-500 uppercase tracking-widest">ISE-GLOBAL V2.1</p>
             </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { Globe, Zap } from 'lucide-vue-next';

const points = [
  { name: 'Medan', x: 12, y: 38, type: 'node', status: 'Warehouse Active' },
  { name: 'Batam', x: 18, y: 45, type: 'node', status: 'Shipping Node' },
  { name: 'Jakarta (HQ)', x: 25, y: 65, type: 'hq', status: 'Main Hub' },
  { name: 'Surabaya', x: 35, y: 70, type: 'node', status: 'Operational' },
  { name: 'Balikpapan', x: 42, y: 50, type: 'hq', status: 'Fuel Terminal' },
  { name: 'Makassar', x: 55, y: 65, type: 'node', status: 'Logistics Center' },
  { name: 'Jayapura', x: 92, y: 55, type: 'node', status: 'Regional Reach' },
];
</script>

<style scoped>
.map-path {
  stroke-dasharray: 10;
  animation: map-flow 12s linear infinite;
}

@keyframes map-flow {
  from { stroke-dashoffset: 200; }
  to { stroke-dashoffset: 0; }
}
</style>
