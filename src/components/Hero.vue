<template>
  <section class="relative pt-20 sm:pt-28 pb-12 sm:pb-16 bg-[#EFEFEF]">
    <div class="container mx-auto px-4 sm:px-6">
      
      <!-- Top Hero Full-Width Offshore Rig Image Banner -->
      <div class="relative w-full h-[260px] sm:h-[420px] md:h-[540px] rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl mb-6 sm:mb-8 group border border-slate-300">
        <img 
          src="/hero_petrova_rig.jpg" 
          alt="Offshore Platform - Berkah Jasa Abadi" 
          class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
        />
        <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
        
        <!-- Floating Corner Tag -->
        <div class="absolute top-4 right-4 sm:top-6 sm:right-6 flex items-center gap-2">
          <span class="petrova-tag text-[8px] sm:text-[10px] px-2 py-0.5 sm:px-3 sm:py-1">{{ t('hero.offshoreTag') }}</span>
        </div>
      </div>

      <!-- Giant Petrova Brand Header Typography -->
      <div class="mb-8 sm:mb-12 border-b-2 border-slate-300 pb-6 sm:pb-8">
        <h1 class="text-3xl sm:text-6xl md:text-8xl lg:text-[8.5rem] font-black uppercase font-outfit tracking-tighter text-slate-950 leading-[0.95] select-none break-words">
          BERKAH JASA ABADI<span class="text-[#CCFF00] font-black text-3xl sm:text-6xl md:text-8xl">©</span>
        </h1>
      </div>

      <!-- Intro Statement with [ABOUT US] Acid Lime Tag Pill -->
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-start">
        <div class="lg:col-span-5">
          <div class="mb-3 sm:mb-4">
            <span class="petrova-tag text-[9px] sm:text-[10px]">{{ t('hero.aboutUsTag') }}</span>
          </div>
          <p class="text-slate-900 text-base sm:text-lg md:text-xl font-bold leading-snug">
            {{ t('hero.introStatement') }}
          </p>
        </div>

        <div class="lg:col-span-7 lg:pl-12">
          <p class="text-slate-600 text-sm sm:text-base leading-relaxed mb-6 font-normal">
            {{ t('hero.desc') }}
          </p>
          <a href="#services" class="petrova-btn-lime text-xs">
            <span>{{ t('hero.exploreServices') }}</span>
            <ArrowRight :size="14" class="ml-2" />
          </a>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup>
import { ArrowRight } from 'lucide-vue-next';
import { t } from '../i18n';
</script>
