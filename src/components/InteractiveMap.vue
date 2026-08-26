<template>
  <section id="map" class="py-16 sm:py-20 bg-[#EFEFEF]">
    <div class="container mx-auto px-4 sm:px-6">
      
      <!-- Main Petrova Map Card Container -->
      <div class="petrova-card-white border-2 border-slate-300 shadow-2xl p-4 sm:p-8 md:p-10 bg-white relative overflow-hidden">
        
        <!-- Header & Legend inside Card -->
        <div class="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 sm:gap-6 mb-6 border-b border-slate-200 pb-6">
          <div>
            <div class="mb-2">
              <span class="petrova-tag text-[9px] sm:text-[10px]">{{ t('map.tag') }}</span>
            </div>
            <h2 class="text-2xl sm:text-4xl md:text-5xl font-black font-outfit uppercase text-slate-950 tracking-tight">
              {{ t('map.headline') }}
            </h2>
            <p class="text-slate-600 text-xs sm:text-sm leading-relaxed max-w-xl mt-1">
              {{ t('map.desc') }}
            </p>
          </div>

          <!-- Clean Map Legend Box -->
          <div class="flex items-center gap-4 bg-slate-100 px-4 py-2.5 rounded-2xl border border-slate-200 shrink-0 w-full sm:w-auto justify-between sm:justify-start">
            <div class="flex items-center gap-2">
              <div class="w-3 h-3 bg-[#CCFF00] rounded-full border-2 border-slate-950 shadow"></div>
              <span class="text-[9px] sm:text-[10px] font-black uppercase text-slate-950 tracking-wider">{{ t('map.hqHubs') }}</span>
            </div>
            <div class="flex items-center gap-2">
              <div class="w-3 h-3 bg-[#0A0F1D] rounded-full border-2 border-slate-950 shadow"></div>
              <span class="text-[9px] sm:text-[10px] font-black uppercase text-slate-950 tracking-wider">{{ t('map.nodes') }}</span>
            </div>
          </div>
        </div>

        <!-- 16:9 Realistic Indonesia Vector Map Container -->
        <div class="relative w-full aspect-[16/9] rounded-2xl bg-white border border-slate-200 overflow-hidden shadow-inner flex items-center justify-center">
          
          <!-- Realistic Indonesia Map Image - Standard 100% Fit (No distortion/scaling) -->
          <img 
            src="/indonesia_light_map.jpg" 
            alt="Peta Indonesia - Berkah Jasa Abadi" 
            class="w-full h-full object-cover select-none pointer-events-none"
          />

          <!-- Curved Interconnected Signal Lines (SVG 16:9 Aspect Ratio) -->
          <svg class="absolute inset-0 w-full h-full pointer-events-none z-10" viewBox="0 0 1000 562.5" preserveAspectRatio="none">
            <path d="M 335,382 Q 415,320 495,275" stroke="#CCFF00" stroke-width="3" stroke-dasharray="6" fill="none" class="map-path" />
            <path d="M 335,382 Q 470,410 605,371" stroke="#CCFF00" stroke-width="3" stroke-dasharray="6" fill="none" class="map-path" />
            <path d="M 495,275 Q 710,270 925,281" stroke="#0A0F1D" stroke-width="2.5" stroke-dasharray="6" fill="none" class="map-path" />
          </svg>

          <!-- Precision Operational Nodes placed exactly on Real Island Locations -->
          <div 
            v-for="point in points" 
            :key="point.name" 
            class="absolute group/point z-20 cursor-pointer"
            :style="{ top: point.y + '%', left: point.x + '%' }"
          >
            <div class="relative w-4 h-4 sm:w-6 sm:h-6 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center">
               <div 
                 class="w-3 h-3 sm:w-4 sm:h-4 rounded-full border-2 border-slate-950 shadow-xl transition-transform duration-300 group-hover/point:scale-125" 
                 :class="point.type === 'hq' ? 'bg-[#CCFF00]' : 'bg-[#0A0F1D]'"
               ></div>
               <div 
                 class="absolute inset-0 rounded-full animate-ping opacity-60" 
                 :class="point.type === 'hq' ? 'bg-[#CCFF00]' : 'bg-[#0A0F1D]'"
               ></div>
            </div>

            <!-- Island City Label Tag -->
            <div class="absolute top-3.5 sm:top-5 left-1/2 -translate-x-1/2 bg-slate-950/90 text-white px-1.5 py-0.5 sm:px-2.5 sm:py-1 rounded text-[7px] sm:text-[9px] font-black uppercase tracking-wider font-outfit shadow-md whitespace-nowrap">
              {{ point.shortName }}
            </div>

            <!-- Hover Info Tooltip -->
            <div class="absolute bottom-8 left-1/2 -translate-x-1/2 bg-slate-950 text-white px-3 py-1.5 rounded-xl whitespace-nowrap opacity-0 group-hover/point:opacity-100 transition-all duration-300 pointer-events-none translate-y-2 group-hover/point:translate-y-0 shadow-2xl border border-slate-800 z-30 hidden sm:block">
              <p class="text-[9px] font-black text-[#CCFF00] uppercase tracking-widest">{{ point.name }}</p>
              <p class="text-[8px] font-bold text-slate-300 uppercase tracking-tighter">{{ point.status }}</p>
            </div>
          </div>

        </div>

        <!-- Footer Operational Status Bar -->
        <div class="mt-4 sm:mt-6 flex flex-col sm:flex-row justify-between items-center gap-3 pt-4 border-t border-slate-200">
          <div class="inline-flex items-center gap-2.5 px-3 py-1.5 rounded-xl bg-slate-950 text-white shadow-md w-full sm:w-auto justify-center">
            <div class="w-2.5 h-2.5 rounded-full bg-[#CCFF00] animate-pulse"></div>
            <span class="text-[9px] sm:text-[10px] font-black uppercase font-outfit tracking-widest text-[#CCFF00]">
              {{ t('map.monitoring') }}
            </span>
          </div>

          <div class="text-[9px] sm:text-[10px] font-bold text-slate-500 uppercase tracking-wider text-center sm:text-right">
            BJA COMMAND SYSTEM V4.0 • REAL-TIME TELEMETRY CONNECTED
          </div>
        </div>

      </div>

    </div>
  </section>
</template>

<script setup>
import { t } from '../i18n';

// 100% Precise island centroids for indonesia_light_map.jpg (16:9 Ratio)
const points = [
  { name: 'Medan (Sumatra)', shortName: 'MEDAN', x: 20, y: 36, type: 'node', status: 'Warehouse Active' },
  { name: 'Batam (Kep. Riau)', shortName: 'BATAM', x: 31, y: 45, type: 'node', status: 'Shipping Node' },
  { name: 'Jakarta / Cilegon (HQ)', shortName: 'JAKARTA (HQ)', x: 33.5, y: 68, type: 'hq', status: 'Main Fuel Hub' },
  { name: 'Surabaya (Jawa)', shortName: 'SURABAYA', x: 45.5, y: 72, type: 'node', status: 'DOOH Media' },
  { name: 'Balikpapan (Kalimantan)', shortName: 'BALIKPAPAN', x: 49.5, y: 49, type: 'hq', status: 'B30 Terminal' },
  { name: 'Makassar (Sulawesi)', shortName: 'MAKASSAR', x: 60.5, y: 66, type: 'node', status: 'Logistics Center' },
  { name: 'Jayapura (Papua)', shortName: 'JAYAPURA', x: 92.5, y: 50, type: 'node', status: 'SaaS Command' },
];
</script>

<style scoped>
.map-path {
  animation: map-flow 10s linear infinite;
}

@keyframes map-flow {
  from { stroke-dashoffset: 120; }
  to { stroke-dashoffset: 0; }
}
</style>
