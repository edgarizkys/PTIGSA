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

      <!-- Action Card directly below gallery (No COA Table) -->
      <div class="petrova-card-white border-2 border-slate-300 p-6 sm:p-8 bg-white shadow-xl rounded-3xl flex flex-col sm:flex-row items-center justify-between gap-4">
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

    </div>
  </section>
</template>

<script setup>
import { t } from '../i18n';
</script>
