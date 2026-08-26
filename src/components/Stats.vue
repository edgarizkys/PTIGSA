<template>
  <section class="py-12 bg-[#EFEFEF]">
    <div class="container mx-auto px-6">
      
      <!-- Big Bold Statement above Bento Row -->
      <div class="max-w-4xl mb-12">
        <div class="mb-3">
          <span class="petrova-tag">{{ t('stats.tag') }}</span>
        </div>
        <h2 class="text-3xl md:text-5xl font-black font-outfit text-slate-950 uppercase leading-tight tracking-tight">
          {{ t('stats.statement') }}
        </h2>
      </div>

      <!-- Petrova 3-Card Bento Row -->
      <div class="grid grid-cols-1 md:grid-cols-12 gap-6">
        
        <!-- Card 1: 150+ Stat with Topographic Map Lines -->
        <div class="md:col-span-4 petrova-card-white flex flex-col justify-between min-h-[300px]">
          <div class="relative z-10">
            <span class="text-6xl font-black font-outfit text-slate-950 block mb-2">150+</span>
            <p class="text-xs font-bold uppercase tracking-wider text-slate-500">{{ t('stats.stat1') }}</p>
          </div>

          <!-- Topographic Line Pattern SVG Overlay -->
          <svg class="absolute inset-0 w-full h-full opacity-15 pointer-events-none" viewBox="0 0 400 300" fill="none">
            <path d="M-50,200 C50,120 150,280 250,180 C350,80 450,220 500,160" stroke="#111111" stroke-width="2" />
            <path d="M-50,230 C50,150 150,310 250,210 C350,110 450,250 500,190" stroke="#111111" stroke-width="2" />
            <path d="M-50,260 C50,180 150,340 250,240 C350,140 450,280 500,220" stroke="#111111" stroke-width="2" />
          </svg>

          <div class="relative z-10 flex justify-between items-end">
            <span class="px-3 py-1 rounded bg-slate-950 text-white text-[10px] font-black uppercase tracking-widest">{{ t('stats.stat1Tag') }}</span>
            <div class="w-8 h-8 rounded-md bg-[#CCFF00] flex items-center justify-center text-slate-950 font-black text-xs">✓</div>
          </div>
        </div>

        <!-- Card 2: Interactive Solutions Card with Toggle Switch -->
        <div class="md:col-span-4 petrova-card-white flex flex-col justify-between min-h-[300px]">
          <div>
            <div class="flex justify-between items-center mb-6">
              <span class="w-6 h-6 rounded-md bg-slate-950 text-white flex items-center justify-center text-xs font-black">⚙</span>
              <div class="w-12 h-6 rounded-full bg-slate-950 p-1 flex items-center justify-end cursor-pointer">
                <div class="w-4 h-4 rounded-full bg-[#CCFF00]"></div>
              </div>
            </div>

            <h3 class="text-xl font-bold font-outfit text-slate-950 leading-snug mb-6">
              {{ t('stats.card2Text') }}
            </h3>
          </div>

          <div class="flex items-center gap-3 pt-4 border-t border-slate-150">
            <div class="w-10 h-10 rounded-full bg-slate-200 overflow-hidden border border-slate-300">
              <img src="/petrova_engineer.jpg" alt="Director" class="w-full h-full object-cover" />
            </div>
            <div>
              <p class="text-xs font-black text-slate-950">{{ t('stats.card2Board') }}</p>
              <p class="text-[10px] font-bold text-slate-500 uppercase">PT Berkah Jasa Abadi</p>
            </div>
          </div>
        </div>

        <!-- Card 3: Photo Card of Offshore Engineer with Quote -->
        <div class="md:col-span-4 relative rounded-3xl overflow-hidden shadow-xl min-h-[300px] border border-slate-300 group">
          <img src="/petrova_engineer.jpg" alt="Offshore Engineer" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
          <div class="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent"></div>

          <div class="absolute bottom-6 left-6 right-6 text-white">
            <p class="text-xs font-semibold leading-relaxed mb-3 drop-shadow">
              "{{ t('stats.engineerQuote') }}"
            </p>
            <span class="petrova-tag text-[9px]">{{ t('stats.engineerTag') }}</span>
          </div>
        </div>

      </div>

    </div>
  </section>
</template>

<script setup>
import { t } from '../i18n';
</script>
