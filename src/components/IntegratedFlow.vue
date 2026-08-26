<template>
  <section id="projects" class="py-20 bg-[#EFEFEF]">
    <div class="container mx-auto px-4 sm:px-6">
      
      <!-- Section 1: Built to Perform Accordion Showcase -->
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-20 items-start">
        
        <!-- Left Title Column -->
        <div class="lg:col-span-5">
          <div class="mb-4">
            <span class="petrova-tag">{{ t('projects.tag') }}</span>
          </div>
          <h2 class="text-4xl md:text-6xl font-black font-outfit uppercase text-slate-950 leading-none tracking-tight mb-6">
            {{ t('projects.headline') }}
          </h2>
          <p class="text-slate-600 text-base leading-relaxed mb-8 font-normal">
            {{ t('projects.desc') }}
          </p>

          <!-- Small Thumbnail Photos -->
          <div class="flex items-center gap-4">
            <div class="w-20 h-20 rounded-2xl overflow-hidden shadow-md border border-slate-300">
              <img src="/hero_petrova_rig.jpg" alt="Rig" class="w-full h-full object-cover" />
            </div>
            <div class="w-20 h-20 rounded-2xl overflow-hidden shadow-md border border-slate-300">
              <img src="/petrova_site_workers.jpg" alt="Workers" class="w-full h-full object-cover" />
            </div>
          </div>
        </div>

        <!-- Right Accordion Column (Expanded Dark Card) -->
        <div class="lg:col-span-7 space-y-4">
          
          <!-- Item 1 (Expanded Dark Petrova Card) -->
          <div class="petrova-card-dark p-8 shadow-2xl">
            <div class="flex justify-between items-center mb-6">
              <h3 class="text-2xl font-black font-outfit text-white uppercase tracking-tight">
                {{ t('projects.item1Title') }}
              </h3>
              <span class="px-2.5 py-1 rounded bg-[#CCFF00] text-slate-950 text-[10px] font-black uppercase">ACTIVE</span>
            </div>

            <p class="text-slate-300 text-xs leading-relaxed mb-8">
              {{ t('projects.item1Desc') }}
            </p>

            <!-- Expanded Spec Metrics Row -->
            <div class="grid grid-cols-3 gap-4 pt-6 border-t border-slate-800 text-center">
              <div>
                <span class="text-2xl font-black text-[#CCFF00] font-outfit block">250+</span>
                <span class="text-[9px] font-bold text-slate-400 uppercase tracking-widest">{{ t('projects.item1Stat1') }}</span>
              </div>
              <div>
                <span class="text-2xl font-black text-[#CCFF00] font-outfit block">15+</span>
                <span class="text-[9px] font-bold text-slate-400 uppercase tracking-widest">{{ t('projects.item1Stat2') }}</span>
              </div>
              <div>
                <span class="text-2xl font-black text-[#CCFF00] font-outfit block">99.8%</span>
                <span class="text-[9px] font-bold text-slate-400 uppercase tracking-widest">{{ t('projects.item1Stat3') }}</span>
              </div>
            </div>
          </div>

          <!-- Item 2 (White Accordion Tab) -->
          <div class="petrova-card-white p-6 flex justify-between items-center cursor-pointer hover:bg-white">
            <h3 class="text-xl font-bold font-outfit text-slate-950 uppercase">
              {{ t('projects.item2Title') }}
            </h3>
            <span class="petrova-tag-dark">Show Details →</span>
          </div>

          <!-- Item 3 (White Accordion Tab) -->
          <div class="petrova-card-white p-6 flex justify-between items-center cursor-pointer hover:bg-white">
            <h3 class="text-xl font-bold font-outfit text-slate-950 uppercase">
              {{ t('projects.item3Title') }}
            </h3>
            <span class="petrova-tag-dark">Show Details →</span>
          </div>

        </div>

      </div>

      <!-- Section 2: Full-Width Industrial Slider Banner (02 / 04) -->
      <div class="relative w-full h-[400px] md:h-[500px] rounded-3xl overflow-hidden shadow-2xl border border-slate-300 group">
        <img 
          src="/petrova_site_workers.jpg" 
          alt="Site Workers - Petrova" 
          class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
        />
        <!-- Darker Gradient Overlay for 100% Crisp White Text Contrast -->
        <div class="absolute inset-0 bg-gradient-to-t from-black/95 via-black/60 to-transparent"></div>

        <!-- Overlay Text & Indicator -->
        <div class="absolute top-8 left-8">
          <span class="petrova-tag">{{ t('projects.bannerTag') }}</span>
        </div>

        <div class="absolute bottom-8 left-8 right-8 flex flex-col md:flex-row md:items-end justify-between gap-6 text-white">
          <div class="max-w-2xl">
            <!-- 100% Pure White Bold Font Title -->
            <h3 class="text-2xl sm:text-4xl md:text-5xl font-black font-outfit uppercase tracking-tight mb-2 text-white drop-shadow-lg leading-tight">
              {{ t('projects.bannerTitle') }}
            </h3>
            <p class="text-slate-200 text-xs sm:text-sm font-medium drop-shadow-sm">
              {{ t('projects.bannerDesc') }}
            </p>
          </div>

          <div class="flex items-center gap-3">
            <button class="w-12 h-12 rounded-full bg-[#CCFF00] text-slate-950 flex items-center justify-center font-black shadow-lg hover:scale-105 transition-transform">→</button>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup>
import { t } from '../i18n';
</script>
