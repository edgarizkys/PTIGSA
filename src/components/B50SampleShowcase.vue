<template>
  <section id="b50-sample" class="py-16 sm:py-20 bg-[#EFEFEF]">
    <div class="container mx-auto px-4 sm:px-6">
      
      <!-- Section Header -->
      <div class="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-10 border-b border-slate-300 pb-6">
        <div>
          <div class="mb-2">
            <span class="petrova-tag-dark text-[9px] sm:text-[10px]">SAMPEL RESMI B50</span>
          </div>
          <h2 class="text-3xl sm:text-5xl font-black font-outfit uppercase text-slate-950 tracking-tight">
            SAMPEL B50 BIOFUEL
          </h2>
        </div>

        <div class="flex items-center gap-3 bg-white px-4 py-2 rounded-2xl border border-slate-300 shadow-sm shrink-0">
          <div class="w-8 h-8 rounded-lg bg-[#CCFF00] p-1 flex items-center justify-center border border-slate-950">
            <img src="/bja_logo.png" alt="BJA" class="w-full h-full object-contain" />
          </div>
          <span class="text-xs font-black font-outfit text-slate-950 uppercase tracking-wider">PT BERKAH JASA ABADI</span>
        </div>
      </div>

      <!-- Symmetrical Grid Layout: 2 Images Top (6/6) + 3 Images Bottom (4/4/4) -->
      <div class="space-y-6 mb-10">
        
        <!-- BARIS ATAS (2 GAMBAR SEJAJAR 50% / 50%) -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
          
          <!-- Gambar 1 Top Left: Marine Tanker Fleet Inspection -->
          <div class="petrova-card-dark relative overflow-hidden rounded-3xl border-2 border-slate-950 shadow-xl group aspect-[16/10] flex flex-col justify-end p-6">
            <img 
              src="/b50_sample_3.png" 
              alt="Uji Sampel Kapal Tanker BJA" 
              class="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 select-none"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent pointer-events-none"></div>

            <div class="relative z-10 flex justify-between items-end">
              <div>
                <span class="px-2.5 py-1 rounded bg-[#CCFF00] text-slate-950 text-[9px] font-black uppercase tracking-widest inline-block shadow mb-2">
                  ARMADA TANKER LAUT
                </span>
                <h3 class="text-lg sm:text-2xl font-black font-outfit text-white uppercase leading-tight">
                  Uji Sampel Kapal Tanker BJA
                </h3>
              </div>
              <span class="text-[10px] font-mono font-bold text-[#CCFF00] bg-slate-950/80 px-2.5 py-1 rounded-md border border-slate-800 hidden sm:block">OFFSHORE TEST</span>
            </div>
          </div>

          <!-- Gambar 2 Top Right: Hydrometer Density Test -->
          <div class="petrova-card-dark relative overflow-hidden rounded-3xl border-2 border-slate-950 shadow-xl group aspect-[16/10] flex flex-col justify-end p-6">
            <img 
              src="/b50_sample_4.jpg" 
              alt="Hydrometer Test" 
              class="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 select-none"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent pointer-events-none"></div>

            <div class="relative z-10 flex justify-between items-end">
              <div>
                <span class="px-2.5 py-1 rounded bg-slate-950 text-[#CCFF00] text-[9px] font-black uppercase tracking-wider inline-block mb-2 border border-slate-800 shadow">
                  HYDROMETER TEST
                </span>
                <h3 class="text-lg sm:text-2xl font-black font-outfit text-white uppercase leading-tight">
                  Pengujian Berat Jenis B50
                </h3>
              </div>
              <span class="text-[10px] font-mono font-bold text-white bg-slate-950/80 px-2.5 py-1 rounded-md border border-slate-800 hidden sm:block">LAB TEST</span>
            </div>
          </div>

        </div>

        <!-- BARIS BAWAH (3 GAMBAR SEJAJAR 33% / 33% / 33%) -->
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
          
          <!-- Gambar 3 Bottom Left: 3 Glass Sample Bottles -->
          <div class="petrova-card-dark relative overflow-hidden rounded-3xl border-2 border-slate-950 shadow-lg group aspect-[4/3] flex flex-col justify-end p-5">
            <img 
              src="/b50_sample_2.jpg" 
              alt="Botol Sampel BJA" 
              class="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 select-none"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent pointer-events-none"></div>

            <div class="relative z-10">
              <span class="px-2.5 py-1 rounded bg-[#CCFF00] text-slate-950 text-[9px] font-black uppercase tracking-wider inline-block mb-1.5 shadow">
                BOTOL SEGEL SAMPEL
              </span>
              <h4 class="text-base font-black font-outfit text-white uppercase">Sampel Standar BJA</h4>
            </div>
          </div>

          <!-- Gambar 4 Bottom Center: Lab Vial Test -->
          <div class="petrova-card-dark relative overflow-hidden rounded-3xl border-2 border-slate-950 shadow-lg group aspect-[4/3] flex flex-col justify-end p-5">
            <img 
              src="/b50_sample_1.png" 
              alt="Uji Kejernihan" 
              class="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 select-none"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent pointer-events-none"></div>

            <div class="relative z-10">
              <span class="px-2.5 py-1 rounded bg-slate-950 text-[#CCFF00] text-[9px] font-black uppercase tracking-wider inline-block mb-1.5 border border-slate-800 shadow">
                KEJERNIHAN B50
              </span>
              <h4 class="text-base font-black font-outfit text-white uppercase">Uji Bebas Kontaminasi</h4>
            </div>
          </div>

          <!-- Gambar 5 Bottom Right: Sample Bottle Inspection -->
          <div class="petrova-card-dark relative overflow-hidden rounded-3xl border-2 border-slate-950 shadow-lg group aspect-[4/3] flex flex-col justify-end p-5 sm:col-span-2 lg:col-span-1">
            <img 
              src="/b50_sample_5.png" 
              alt="Inspeksi Homogenitas" 
              class="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 select-none"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent pointer-events-none"></div>

            <div class="relative z-10">
              <span class="px-2.5 py-1 rounded bg-[#CCFF00] text-slate-950 text-[9px] font-black uppercase tracking-wider inline-block mb-1.5 shadow">
                HOMOGENITAS
              </span>
              <h4 class="text-base font-black font-outfit text-white uppercase">Formulasi 50% Biofuel</h4>
            </div>
          </div>

        </div>

      </div>

      <!-- Action Card directly below gallery -->
      <div class="petrova-card-white border-2 border-slate-300 p-6 sm:p-8 bg-white shadow-xl rounded-3xl flex flex-col sm:flex-row items-center justify-between gap-4 mb-14">
        <div>
          <span class="text-[9px] font-black text-slate-500 uppercase tracking-widest block mb-1">PERMINTAAN SAMPEL B50 INDUSTRI</span>
          <h3 class="text-lg sm:text-xl font-black font-outfit text-slate-950 uppercase">
            Ingin Menguji Sampel Fisik B50 di Pabrik / Depot Anda?
          </h3>
          <p class="text-xs text-slate-600 font-medium mt-1">
            Sampel botol segel fisik B50 siap dikirimkan ke lokasi industri Anda untuk pengujian independen.
          </p>
        </div>

        <a 
          href="https://wa.me/6282114242634?text=Halo%20PT%20Berkah%20Jasa%20Abadi,%20saya%20tertarik%20dengan%20BBM%20B50%20dan%20ingin%20meminta%20sampel%20fisik%20botol%20B50%20untuk%20pengujian%20industri" 
          target="_blank" 
          class="petrova-btn-lime text-xs font-black uppercase whitespace-nowrap shrink-0 text-center w-full sm:w-auto"
        >
          Minta Sampel Fisik B50 via WhatsApp →
        </a>
      </div>

      <!-- SECTION TABEL HARGA B50: JABODETABEK & PELABUHAN STS -->
      <div id="b50-pricing" class="pt-8 border-t-2 border-slate-300">
        
        <!-- Section Title Header -->
        <div class="flex flex-col md:flex-row justify-between items-start md:items-end gap-4 mb-8">
          <div>
            <div class="mb-2">
              <span class="petrova-tag-dark text-[9px] sm:text-[10px]">HARGA BBM B50 INDUSTRI</span>
            </div>
            <h3 class="text-2xl sm:text-4xl font-black font-outfit uppercase text-slate-950 tracking-tight">
              HARGA B50 JABODETABEK & PELABUHAN STS
            </h3>
            <p class="text-xs sm:text-sm text-slate-600 font-medium mt-1 max-w-2xl">
              Daftar estimasi indikatif pasokan B50 Franko Depo Darat (Jabodetabek & Banten) dan Ship-To-Ship (STS Laut) perairan pelabuhan.
            </p>
          </div>

          <div class="flex items-center gap-2 bg-slate-950 text-white px-3.5 py-2 rounded-2xl border border-slate-800 shrink-0">
            <span class="w-2.5 h-2.5 rounded-full bg-[#00E5FF] animate-pulse"></span>
            <span class="text-[10px] font-mono font-bold uppercase tracking-wider">FORMULA AKTIF 2026</span>
          </div>
        </div>

        <!-- 2 TABEL DENGAN DESAIN MODERN CLEAN: 1. FRANKO JABODETABEK, 2. STS LAUT PELABUHAN -->
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          <!-- TABEL 1: FRANKO DEPO DARAT (JABODETABEK & BANTEN) -->
          <div class="petrova-card-white border-2 border-slate-950 p-6 bg-white shadow-xl rounded-3xl flex flex-col justify-between">
            <div>
              <div class="flex items-center justify-between border-b border-slate-200 pb-4 mb-4">
                <div class="flex items-center gap-2.5">
                  <div class="w-9 h-9 rounded-xl bg-slate-950 text-[#00E5FF] flex items-center justify-center font-bold text-sm">
                    🚛
                  </div>
                  <div>
                    <span class="text-[9px] font-mono font-bold text-slate-500 uppercase tracking-widest block">SKEMA DARAT</span>
                    <h4 class="text-base font-black font-outfit text-slate-950 uppercase">FRANKO JABODETABEK & BANTEN</h4>
                  </div>
                </div>
                <span class="text-[9px] font-mono font-bold text-emerald-700 bg-emerald-50 px-2 py-1 rounded border border-emerald-200">
                  TANGKI DARAT (INC. PPN)
                </span>
              </div>

              <!-- Compact Table List -->
              <div class="space-y-2.5 mb-6">
                <div 
                  v-for="item in jabodetabekPrices" 
                  :key="item.area"
                  class="p-3.5 rounded-2xl bg-slate-50 border border-slate-200 hover:border-slate-400 transition-colors flex items-center justify-between gap-3"
                >
                  <div>
                    <h5 class="text-xs font-black font-outfit text-slate-950 uppercase">{{ item.area }}</h5>
                    <p class="text-[10px] font-medium text-slate-500 leading-tight mt-0.5">{{ item.coverage }}</p>
                  </div>

                  <div class="text-right shrink-0">
                    <span class="text-sm font-black font-outfit text-slate-950 block leading-none">{{ item.price }}</span>
                    <span class="text-[9px] font-mono text-slate-500 block mt-0.5">MOQ: {{ item.moq }}</span>
                  </div>
                </div>
              </div>
            </div>

            <!-- Footer Action Franko -->
            <a 
              href="https://wa.me/6282114242634?text=Halo%20PT%20Berkah%20Jasa%20Abadi,%20saya%20ingin%20meminta%20penawaran%20harga%20B50%20Franko%20Depo%20Darat%20Wilayah%20Jabodetabek" 
              target="_blank"
              class="w-full py-3 px-4 rounded-xl bg-slate-950 hover:bg-slate-800 text-white text-xs font-black uppercase font-outfit tracking-wider text-center transition-all shadow-md block"
            >
              Minta Penawaran Franko Jabodetabek →
            </a>
          </div>

          <!-- TABEL 2: SHIP-TO-SHIP (STS LAUT PELABUHAN UTAMA) -->
          <div class="petrova-card-white border-2 border-slate-950 p-6 bg-white shadow-xl rounded-3xl flex flex-col justify-between">
            <div>
              <div class="flex items-center justify-between border-b border-slate-200 pb-4 mb-4">
                <div class="flex items-center gap-2.5">
                  <div class="w-9 h-9 rounded-xl bg-slate-950 text-[#00E5FF] flex items-center justify-center font-bold text-sm">
                    ⚓
                  </div>
                  <div>
                    <span class="text-[9px] font-mono font-bold text-[#F97316] uppercase tracking-widest block">SKEMA LAUT / OFFSHORE</span>
                    <h4 class="text-base font-black font-outfit text-slate-950 uppercase">STS PELABUHAN & ANCHORAGE</h4>
                  </div>
                </div>
                <span class="text-[9px] font-mono font-bold text-[#00E5FF] bg-slate-950 px-2 py-1 rounded border border-slate-800">
                  BUNKER TANKER STS (INC. PPN)
                </span>
              </div>

              <!-- Compact Table List -->
              <div class="space-y-2.5 mb-6">
                <div 
                  v-for="item in portStsPrices" 
                  :key="item.port"
                  class="p-3.5 rounded-2xl bg-amber-50/70 border border-amber-200 hover:border-amber-400 transition-colors flex items-center justify-between gap-3"
                >
                  <div>
                    <h5 class="text-xs font-black font-outfit text-slate-950 uppercase">{{ item.port }}</h5>
                    <p class="text-[10px] font-medium text-slate-600 leading-tight mt-0.5">{{ item.anchorage }}</p>
                  </div>

                  <div class="text-right shrink-0">
                    <span class="text-sm font-black font-outfit text-[#F97316] block leading-none">{{ item.price }}</span>
                    <span class="text-[9px] font-mono text-slate-500 block mt-0.5">MOQ: {{ item.moq }}</span>
                  </div>
                </div>
              </div>
            </div>

            <!-- Footer Action STS -->
            <a 
              href="https://wa.me/6282114242634?text=Halo%20PT%20Berkah%20Jasa%20Abadi,%20saya%20ingin%20meminta%20penawaran%20harga%20B50%20Ship-To-Ship%20(STS)%20Perairan%20Pelabuhan" 
              target="_blank"
              class="w-full py-3 px-4 rounded-xl bg-slate-950 hover:bg-slate-800 text-white text-xs font-black uppercase font-outfit tracking-wider text-center transition-all shadow-md block"
            >
              Minta Penawaran STS Pelabuhan →
            </a>
          </div>

        </div>

        <!-- Note & WhatsApp Hotline Footer -->
        <div class="mt-6 p-4 rounded-2xl bg-slate-950 text-white border border-slate-800 text-[11px] font-mono flex flex-col sm:flex-row items-center justify-between gap-3">
          <p class="text-slate-300">
            *Harga indikatif berbasis perhitungan periode berjalan. Penawaran pasti resmi disesuaikan dengan volume & koordinat titik serah.
          </p>
          <a 
            href="https://wa.me/6282114242634?text=Halo%20PT%20Berkah%20Jasa%20Abadi,%20saya%20ingin%20berkonsultasi%20mengenai%20kebutuhan%20BBM%20B50" 
            target="_blank" 
            class="text-[#00E5FF] font-bold uppercase whitespace-nowrap hover:underline"
          >
            Konsultasi Sales BJA →
          </a>
        </div>

      </div>

    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue';
import { t } from '../i18n';

// Pricing Data Franko Depo Darat (Jabodetabek & Banten)
const jabodetabekPrices = ref([
  {
    area: 'DKI JAKARTA',
    coverage: 'Tanjung Priok, Marunda, Kamal, Cakung',
    price: 'Rp 17.200 / L',
    moq: '8.000 Liter'
  },
  {
    area: 'BEKASI & CIKARANG',
    coverage: 'Kawasan Industri MM2100, Jababeka, EJIP, Deltamas',
    price: 'Rp 17.200 / L',
    moq: '8.000 Liter'
  },
  {
    area: 'TANGERANG & TANGSEL',
    coverage: 'Cikupa, Balaraja, Pasar Kemis, BSD Industri',
    price: 'Rp 17.200 / L',
    moq: '8.000 Liter'
  },
  {
    area: 'BOGOR & DEPOK',
    coverage: 'Sentul Industri, Gunung Putri, Cileungsi, Cimanggis',
    price: 'Rp 17.200 / L',
    moq: '8.000 Liter'
  },
  {
    area: 'CILEGON & SERANG (BANTEN)',
    coverage: 'Kawasan Industri Bojonegara, Merak, Ciwandan',
    price: 'Rp 17.200 / L',
    moq: '8.000 Liter'
  }
]);

// Pricing Data Ship-To-Ship (STS) Laut Pelabuhan Utama
const portStsPrices = ref([
  {
    port: 'PELABUHAN TANJUNG PRIOK',
    anchorage: 'Perairan Anchorage Priok & Kalibaru',
    price: 'Rp 18.700 / L',
    moq: '500 KL'
  },
  {
    port: 'PELABUHAN MERAK & BOJONEGARA',
    anchorage: 'Perairan Selat Sunda & Banten Anchorage',
    price: 'Rp 18.700 / L',
    moq: '500 KL'
  },
  {
    port: 'PELABUHAN SUNDA KELAPA & MUARA BARU',
    anchorage: 'Perairan Teluk Jakarta & Offshore Anchorage',
    price: 'Rp 18.700 / L',
    moq: '300 KL'
  },
  {
    port: 'PELABUHAN MARUNDA',
    anchorage: 'Perairan Marunda & KBN Coastal Waters',
    price: 'Rp 18.700 / L',
    moq: '300 KL'
  }
]);
</script>
