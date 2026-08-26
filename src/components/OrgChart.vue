<template>
  <section id="organization" class="py-24 bg-[#EFEFEF]">
    <div class="container mx-auto px-6">
      
      <!-- Section Header -->
      <div class="mb-16 max-w-4xl">
        <div class="mb-3">
          <span class="petrova-tag">{{ t('org.tag') }}</span>
        </div>
        <h2 class="text-4xl md:text-6xl font-black font-outfit uppercase text-slate-950 tracking-tight leading-none mb-4">
          {{ t('org.headline') }}
        </h2>
        <p class="text-slate-600 text-base md:text-lg font-normal max-w-2xl leading-relaxed">
          {{ t('org.subhead') }}
        </p>
      </div>

      <!-- Petrova Org Chart Layout -->
      <div class="max-w-6xl mx-auto">
        
        <!-- President Director Level (Featured Main Card) -->
        <div class="mb-12 relative flex justify-center">
          <div class="petrova-card-dark p-8 md:p-10 shadow-2xl max-w-2xl w-full text-center border-2 border-[#CCFF00]/50 relative z-10 group">
            
            <!-- Real High-Res Portrait Photo -->
            <div class="w-28 h-28 rounded-full overflow-hidden border-4 border-[#CCFF00] mx-auto mb-6 shadow-2xl group-hover:scale-105 transition-transform duration-500 bg-slate-900">
              <img src="/isolurroja_haris.jpg" alt="Isolurroja Haris, S.E., CFP - President Director" class="w-full h-full object-cover" />
            </div>

            <span class="petrova-tag mb-3">{{ t('org.presTitle') }}</span>
            <h3 class="text-2xl md:text-4xl font-black font-outfit text-white uppercase tracking-tight mb-2">
              Isolurroja Haris, S.E., CFP
            </h3>
            <p class="text-slate-300 text-sm font-medium leading-relaxed max-w-lg mx-auto">
              {{ t('org.presDesc') }}
            </p>
          </div>

          <!-- Vertical Connector Line -->
          <div class="absolute top-full left-1/2 w-0.5 h-12 bg-slate-950 -translate-x-1/2 hidden md:block"></div>
        </div>

        <!-- Horizontal Hierarchy Connector Bar -->
        <div class="w-3/4 mx-auto h-0.5 bg-slate-950 mb-12 hidden md:block"></div>

        <!-- Executive Directors Row (3 Directors) -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          
          <!-- Director 1: EGI Purnama -->
          <div class="petrova-card-white flex flex-col justify-between group border-2 border-slate-300">
            <div>
              <div class="flex justify-between items-center mb-6">
                <!-- Portrait Photo -->
                <div class="w-16 h-16 rounded-full overflow-hidden border-2 border-slate-950 shadow-md group-hover:scale-105 transition-transform">
                  <img src="/egi_purnama.jpg" alt="EGI Purnama" class="w-full h-full object-cover" />
                </div>
                <span class="petrova-tag-dark">MEDIA</span>
              </div>

              <h4 class="text-xl font-black font-outfit text-slate-950 uppercase mb-1">
                EGI Purnama
              </h4>
              <p class="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-4">
                VP of Advertising Media
              </p>
              <p class="text-xs text-slate-600 leading-relaxed font-medium">
                {{ t('org.vpadDesc') }}
              </p>
            </div>

            <div class="pt-4 border-t border-slate-200 text-[10px] font-bold text-slate-500 uppercase flex justify-between">
              <span>Division 02</span>
              <span class="text-slate-950 font-black">ACTIVE</span>
            </div>
          </div>

          <!-- Director 2: Rini Romli -->
          <div class="petrova-card-white flex flex-col justify-between group border-2 border-slate-300">
            <div>
              <div class="flex justify-between items-center mb-6">
                <!-- Portrait Photo -->
                <div class="w-16 h-16 rounded-full overflow-hidden border-2 border-slate-950 shadow-md group-hover:scale-105 transition-transform">
                  <img src="/rini_romli.jpg" alt="Rini Romli" class="w-full h-full object-cover" />
                </div>
                <span class="petrova-tag-dark">FINANCE</span>
              </div>

              <h4 class="text-xl font-black font-outfit text-slate-950 uppercase mb-1">
                Rini Romli
              </h4>
              <p class="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-4">
                Secretary & Treasurer
              </p>
              <p class="text-xs text-slate-600 leading-relaxed font-medium">
                {{ t('org.treasurerDesc') }}
              </p>
            </div>

            <div class="pt-4 border-t border-slate-200 text-[10px] font-bold text-slate-500 uppercase flex justify-between">
              <span>Treasury</span>
              <span class="text-slate-950 font-black">ACTIVE</span>
            </div>
          </div>

          <!-- Director 3: Dian Rizky Siregar -->
          <div class="petrova-card-white flex flex-col justify-between group border-2 border-slate-300">
            <div>
              <div class="flex justify-between items-center mb-6">
                <!-- Portrait Photo -->
                <div class="w-16 h-16 rounded-full overflow-hidden border-2 border-[#CCFF00] bg-slate-950 shadow-md group-hover:scale-105 transition-transform">
                  <img src="/dian_rizky_siregar.jpg" alt="Dian Rizky Siregar" class="w-full h-full object-cover" />
                </div>
                <span class="petrova-tag-dark">SAAS & TECH</span>
              </div>

              <h4 class="text-xl font-black font-outfit text-slate-950 uppercase mb-1">
                Dian Rizky Siregar
              </h4>
              <p class="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-4">
                Chief Technology Officer
              </p>
              <p class="text-xs text-slate-600 leading-relaxed font-medium">
                {{ t('org.ctoDesc') }}
              </p>
            </div>

            <div class="pt-4 border-t border-slate-200 text-[10px] font-bold text-slate-500 uppercase flex justify-between">
              <span>Division 03</span>
              <span class="text-slate-950 font-black">ACTIVE</span>
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
