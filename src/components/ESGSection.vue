<template>
  <section id="esg" class="py-20 bg-[#EFEFEF]">
    <div class="container mx-auto px-6">
      
      <!-- Petrova ESG White Container -->
      <div class="petrova-card-white border-2 border-slate-300 p-8 md:p-16 flex flex-col lg:flex-row items-center gap-12 bg-white shadow-2xl">
        
        <!-- Left Text Column -->
        <div class="flex-1">
          <div class="mb-4">
            <span class="petrova-tag">{{ t('esg.tag') }}</span>
          </div>
          <h2 class="text-4xl md:text-6xl font-black font-outfit uppercase text-slate-950 tracking-tight leading-tight mb-6">
            {{ t('esg.headline') }}
          </h2>
          <p class="text-slate-600 text-base md:text-lg font-normal leading-relaxed mb-10">
            {{ t('esg.desc') }}
          </p>

          <!-- 2 Metric Cards -->
          <div class="grid grid-cols-2 gap-6">
            <div class="petrova-card-white border border-slate-200 p-6 bg-slate-50">
              <span class="text-4xl md:text-5xl font-black font-outfit text-slate-950 block mb-1">{{ t('esg.stat1Val') }}</span>
              <span class="text-xs font-bold uppercase tracking-wider text-slate-500">{{ t('esg.stat1Label') }}</span>
            </div>
            <div class="petrova-card-white border border-slate-200 p-6 bg-slate-50">
              <span class="text-4xl md:text-5xl font-black font-outfit text-[#CCFF00] bg-slate-950 px-3 py-1 rounded-lg inline-block mb-1">{{ t('esg.stat2Val') }}</span>
              <span class="text-xs font-bold uppercase tracking-wider text-slate-500 block mt-1">{{ t('esg.stat2Label') }}</span>
            </div>
          </div>
        </div>

        <!-- Right Realistic Industrial Photo Container -->
        <div class="w-full lg:w-[520px] aspect-square rounded-3xl overflow-hidden relative shadow-2xl border border-slate-300 group">
          <!-- Realistic Photo Asset -->
          <img 
            src="/esg_sustainable_energy.jpg" 
            alt="ESG Sustainable Energy Facility" 
            class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" 
          />
          
          <div class="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent"></div>
          
          <!-- Top Floating Tag -->
          <div class="absolute top-6 left-6">
            <span class="petrova-tag-dark">{{ t('esg.imageTag') }}</span>
          </div>

          <!-- Bottom Status Pill -->
          <div class="absolute bottom-6 left-6 right-6 petrova-card-dark p-4 rounded-2xl flex items-center justify-between border border-slate-800">
            <div>
              <p class="text-xs font-black text-white uppercase font-outfit">Sertifikasi Keberlanjutan ISO-14001</p>
              <p class="text-[9px] font-bold text-[#CCFF00] uppercase tracking-widest">NET ZERO CARBON PROGRAM</p>
            </div>
            <div class="w-8 h-8 rounded-lg bg-[#CCFF00] text-slate-950 flex items-center justify-center font-black text-xs">
              ✓
            </div>
          </div>
        </div>

      </div>

    </div>
  </section>
</template>

<script setup>
import { t } from '../i18n';
</script>
