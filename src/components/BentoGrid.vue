<template>
  <section id="services" class="py-20 bg-[#EFEFEF]">
    <div class="container mx-auto px-4 sm:px-6">
      
      <!-- Section Header -->
      <div class="mb-12">
        <div class="mb-3">
          <span class="petrova-tag">{{ t('services.tag') }}</span>
        </div>
        <h2 class="text-3xl sm:text-5xl md:text-6xl font-black font-outfit uppercase text-slate-950 tracking-tight">
          {{ t('services.headline') }}
        </h2>
      </div>

      <!-- Services Grid & Technical Blueprint Layout -->
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        
        <!-- Left Column: 4 Petrova Feature Cards -->
        <div class="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
          
          <!-- Box 1: Bright Acid Lime Card (#CCFF00) - Oil & Gas -->
          <div class="petrova-card-lime flex flex-col justify-between min-h-[260px] p-6 sm:p-8">
            <div>
              <span class="px-2.5 py-1 rounded bg-slate-950 text-white text-[9px] font-black uppercase tracking-widest block w-max mb-4">{{ t('services.div1Tag') }}</span>
              <h3 class="text-xl sm:text-2xl font-black font-outfit uppercase text-slate-950 mb-2">{{ t('services.div1Title') }}</h3>
              <p class="text-slate-900 text-xs font-semibold leading-relaxed">
                {{ t('services.div1Desc') }}
              </p>
            </div>
            <div class="pt-4 border-t border-slate-950/20 flex justify-between items-center text-[10px] font-black uppercase">
              <span>{{ t('services.div1Link') }}</span>
              <span>→</span>
            </div>
          </div>

          <!-- Box 2: Metric Gauge Box (90%) -->
          <div class="petrova-card-white flex flex-col justify-between min-h-[260px] p-6 sm:p-8">
            <div>
              <div class="flex justify-between items-center mb-4">
                <div class="w-7 h-7 rounded bg-slate-950 p-1 flex items-center justify-center">
                  <img src="/bja_logo.png" alt="BJA" class="w-full h-full object-contain" />
                </div>
                <span class="text-[10px] font-bold text-slate-500 uppercase">{{ t('services.gaugeTitle') }}</span>
              </div>
              <span class="text-5xl sm:text-6xl font-black font-outfit text-slate-950 block mb-2">90%</span>
              <p class="text-slate-600 text-xs leading-relaxed font-medium">
                {{ t('services.gaugeDesc') }}
              </p>
            </div>
            <div class="h-2 w-full bg-slate-200 rounded-full overflow-hidden">
              <div class="h-full bg-[#CCFF00] w-[90%]"></div>
            </div>
          </div>

          <!-- Box 3: Dark Slate Box (#0A0F1D) - Advertising Media -->
          <div class="petrova-card-dark flex flex-col justify-between min-h-[260px] p-6 sm:p-8">
            <div>
              <span class="px-2.5 py-1 rounded bg-[#CCFF00] text-slate-950 text-[9px] font-black uppercase tracking-widest block w-max mb-4">{{ t('services.div2Tag') }}</span>
              <h3 class="text-xl sm:text-2xl font-black font-outfit uppercase text-white mb-2">{{ t('services.div2Title') }}</h3>
              <p class="text-slate-300 text-xs leading-relaxed font-normal">
                {{ t('services.div2Desc') }}
              </p>
            </div>
            <div class="pt-4 border-t border-slate-800 flex justify-between items-center text-[10px] font-black uppercase text-[#CCFF00]">
              <span>{{ t('services.div2Link') }}</span>
              <span>→</span>
            </div>
          </div>

          <!-- Box 4: White Box with Lime Accent Border - AI SaaS Developer -->
          <div class="petrova-card-white border-2 border-[#CCFF00] flex flex-col justify-between min-h-[260px] p-6 sm:p-8">
            <div>
              <span class="px-2.5 py-1 rounded bg-slate-950 text-white text-[9px] font-black uppercase tracking-widest block w-max mb-4">{{ t('services.div3Tag') }}</span>
              <h3 class="text-xl sm:text-2xl font-black font-outfit uppercase text-slate-950 mb-2">{{ t('services.div3Title') }}</h3>
              <p class="text-slate-600 text-xs leading-relaxed font-medium">
                {{ t('services.div3Desc') }}
              </p>
            </div>
            <div class="pt-4 border-t border-slate-200 flex justify-between items-center text-[10px] font-black uppercase text-slate-950">
              <span>{{ t('services.div3Link') }}</span>
              <span>→</span>
            </div>
          </div>

        </div>

        <!-- Right Column: 100% Crystal-Clear Interconnected HTML Flowchart Cards -->
        <div class="lg:col-span-6 petrova-card-white border-2 border-slate-300 bg-white flex flex-col justify-between p-6 sm:p-8 relative overflow-hidden min-h-[550px]">
          <div>
            <div class="flex justify-between items-center mb-3">
              <span class="petrova-tag-dark text-[9px] sm:text-[10px]">BAGAN KORPORAT TERHUBUNG</span>
              <div class="w-6 h-6 rounded bg-[#CCFF00] p-1 flex items-center justify-center shadow">
                <img src="/bja_logo.png" alt="BJA Logo" class="w-full h-full object-contain" />
              </div>
            </div>
            <h3 class="text-lg sm:text-xl font-bold font-outfit text-slate-950 uppercase mb-1">
              Arsitektur Sinergi Holding BJA
            </h3>
            <p class="text-slate-500 text-xs mb-6 font-medium">
              Alur berkesinambungan antara pasokan BBM B50, pemantauan telemetri AI SaaS, dan penyiaran iklan DOOH Videotron.
            </p>
          </div>

          <!-- Continuous Interconnected Cards Container -->
          <div class="my-auto space-y-3 relative">
            
            <!-- STAGE 1: Logistik Pengiriman BBM B50 -->
            <div class="p-4 sm:p-5 rounded-2xl bg-slate-50 border-2 border-slate-950 shadow-md relative z-10 flex items-start gap-3 sm:gap-4">
              <div class="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-slate-950 p-2 flex items-center justify-center shrink-0 border border-slate-800">
                <img src="/bja_logo.png" alt="BJA Logo" class="w-full h-full object-contain" />
              </div>
              <div class="min-w-0 flex-1">
                <div class="flex items-center justify-between gap-2 mb-1">
                  <h4 class="text-xs sm:text-sm font-black font-outfit uppercase text-slate-950 tracking-tight">
                    LOGISTIK & PENGIRIMAN BBM B50
                  </h4>
                  <span class="px-2 py-0.5 rounded bg-slate-950 text-white text-[8px] font-black uppercase tracking-widest hidden sm:inline">DIVISI 01</span>
                </div>
                <p class="text-[11px] sm:text-xs text-slate-600 font-medium leading-tight mb-2">
                  Kilang Suplai B50 ➔ Armada Tangki Tanker ➔ Klien Industri
                </p>
                <div class="inline-flex items-center gap-1.5 px-2 py-0.5 rounded bg-[#CCFF00]/40 border border-[#b8e600] text-[9px] font-black text-slate-950 uppercase">
                  <span>STATUS: REFUELING ACTIVE • ISO-9001</span>
                </div>
              </div>
            </div>

            <!-- Connector Stream 1 -> 2 -->
            <div class="flex items-center justify-center gap-2 py-1">
              <div class="w-0.5 h-6 bg-slate-950 relative">
                <div class="w-2 h-2 rounded-full bg-[#CCFF00] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-ping"></div>
              </div>
              <span class="text-[8px] font-black uppercase tracking-widest text-slate-400 font-mono">TELEMETRY STREAM</span>
            </div>

            <!-- STAGE 2: Dashboard Telemetri & Monitoring AI SaaS -->
            <div class="p-4 sm:p-5 rounded-2xl bg-[#0A0F1D] text-white border-2 border-slate-950 shadow-xl relative z-10 flex items-start gap-3 sm:gap-4">
              <div class="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-[#CCFF00] p-2 flex items-center justify-center shrink-0 border border-black">
                <img src="/bja_logo.png" alt="BJA Logo" class="w-full h-full object-contain" />
              </div>
              <div class="min-w-0 flex-1">
                <div class="flex items-center justify-between gap-2 mb-1">
                  <h4 class="text-xs sm:text-sm font-black font-outfit uppercase text-white tracking-tight">
                    DASHBOARD TELEMETRI & MONITORING AI
                  </h4>
                  <span class="px-2 py-0.5 rounded bg-[#CCFF00] text-slate-950 text-[8px] font-black uppercase tracking-widest hidden sm:inline">DIVISI 03</span>
                </div>
                <p class="text-[11px] sm:text-xs text-slate-300 font-normal leading-tight mb-2">
                  Cloud AI Telemetry Engine ➔ Real-Time Analytics Optimization
                </p>
                <div class="inline-flex items-center gap-1.5 px-2 py-0.5 rounded bg-[#CCFF00] text-slate-950 text-[9px] font-black uppercase">
                  <span>AI ENGINE: OPTIMIZING ROUTE & FUEL (+18.4%)</span>
                </div>
              </div>
            </div>

            <!-- Connector Stream 2 -> 3 -->
            <div class="flex items-center justify-center gap-2 py-1">
              <div class="w-0.5 h-6 bg-slate-950 relative">
                <div class="w-2 h-2 rounded-full bg-[#CCFF00] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-ping"></div>
              </div>
              <span class="text-[8px] font-black uppercase tracking-widest text-slate-400 font-mono">AD BROADCAST SIGNAL</span>
            </div>

            <!-- STAGE 3: Billboard Advertising DOOH Videotron -->
            <div class="p-4 sm:p-5 rounded-2xl bg-slate-50 border-2 border-slate-950 shadow-md relative z-10 flex items-start gap-3 sm:gap-4">
              <div class="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-slate-950 p-2 flex items-center justify-center shrink-0 border border-slate-800">
                <img src="/bja_logo.png" alt="BJA Logo" class="w-full h-full object-contain" />
              </div>
              <div class="min-w-0 flex-1">
                <div class="flex items-center justify-between gap-2 mb-1">
                  <h4 class="text-xs sm:text-sm font-black font-outfit uppercase text-slate-950 tracking-tight">
                    BILLBOARD ADVERTISING DOOH VIDEOTRON
                  </h4>
                  <span class="px-2 py-0.5 rounded bg-slate-950 text-white text-[8px] font-black uppercase tracking-widest hidden sm:inline">DIVISI 02</span>
                </div>
                <p class="text-[11px] sm:text-xs text-slate-600 font-medium leading-tight mb-2">
                  Server Penyiaran Iklan Digital ➔ Outdoor LED Videotron 4K
                </p>
                <div class="inline-flex items-center gap-1.5 px-2 py-0.5 rounded bg-slate-950 text-[#CCFF00] text-[9px] font-black uppercase">
                  <span>BROADCAST: 4K ULTRA HD HIGH IMPACT</span>
                </div>
              </div>
            </div>

          </div>

          <!-- Footer Certificate -->
          <div class="flex justify-between items-center text-[9px] sm:text-[10px] font-bold text-slate-500 pt-4 border-t border-slate-200 mt-4">
            <span>BJA HOLDING INTEGRATED FLOWCHART</span>
            <span>SYSTEM AUDITED & CERTIFIED</span>
          </div>
        </div>

      </div>

    </div>
  </section>
</template>

<script setup>
import { t } from '../i18n';
</script>
