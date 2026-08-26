<template>
  <div>
    <!-- Section 1: Partner & Client Reviews ([REVIEWS]) - Infinite Horizontal Marquee Carousel -->
    <section id="reviews" class="py-16 sm:py-20 bg-[#EFEFEF] overflow-hidden">
      <div class="container mx-auto px-4 sm:px-6 mb-8 sm:mb-12">
        <div class="max-w-3xl">
          <div class="mb-3">
            <span class="petrova-tag text-[9px] sm:text-[10px]">{{ t('reviews.tag') }}</span>
          </div>
          <h2 class="text-2xl sm:text-4xl md:text-5xl font-black font-outfit uppercase text-slate-950 leading-tight">
            {{ t('reviews.headline') }}
          </h2>
        </div>
      </div>

      <!-- Infinite Marquee Slider Container (Moving continuously from Left to Right) -->
      <div class="relative w-full overflow-hidden flex select-none py-2">
        <div class="marquee-track flex gap-6 shrink-0">
          <div 
            v-for="(review, idx) in [...reviews, ...reviews, ...reviews]" 
            :key="idx" 
            class="petrova-card-white flex flex-col justify-between p-6 sm:p-8 w-[300px] sm:w-[360px] shrink-0 border-2 border-slate-300 hover:border-slate-950 transition-all duration-300"
          >
            <p class="text-xs text-slate-700 leading-relaxed font-medium mb-6">
              "{{ t(review.quoteKey) }}"
            </p>

            <div class="flex items-center gap-3 pt-4 border-t border-slate-150">
              <div class="w-9 h-9 rounded-full bg-[#CCFF00] p-1.5 flex items-center justify-center shrink-0 border border-slate-950 shadow">
                <img src="/bja_logo.png" alt="BJA Logo" class="w-full h-full object-contain" />
              </div>
              <div>
                <p class="text-xs font-bold text-slate-950">{{ review.author }}</p>
                <p class="text-[9px] font-bold text-slate-500 uppercase">{{ t(review.roleKey) }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

    </section>

    <!-- Section 2: Giant Dark Petrova Footer ([GET IN TOUCH]) -->
    <footer id="contact" class="py-16 sm:py-24 bg-[#0A0F1D] text-white border-t border-slate-800">
      <div class="container mx-auto px-4 sm:px-6">
        
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 mb-16 sm:mb-20 items-start">
          <div class="lg:col-span-7">
            <div class="mb-4 sm:mb-6">
              <span class="petrova-tag-dark text-[9px] sm:text-[10px]">{{ t('footer.tag') }}</span>
            </div>
            <h2 class="text-3xl sm:text-5xl md:text-7xl font-black font-outfit uppercase leading-none tracking-tight mb-6 sm:mb-8">
              {{ t('footer.headline') }}
            </h2>
            <p class="text-slate-400 text-sm sm:text-base md:text-lg max-w-xl leading-relaxed mb-8">
              {{ t('footer.desc') }}
            </p>
            
            <a :href="globalConfig.links.whatsapp" target="_blank" class="petrova-btn-lime text-xs">
              <span>{{ t('footer.connectWa') }}</span>
              <ArrowUpRight :size="14" class="ml-2" />
            </a>
          </div>

          <div class="lg:col-span-5 space-y-6 sm:space-y-8 glass p-6 sm:p-8 rounded-3xl border border-slate-800 bg-slate-900/60">
            <div class="flex items-center gap-3 pb-4 border-b border-slate-800">
              <div class="w-10 h-10 rounded-xl bg-[#CCFF00] p-1.5 flex items-center justify-center shadow-lg">
                <img src="/bja_logo.png" alt="BJA Logo" class="w-full h-full object-contain" />
              </div>
              <span class="text-lg font-black font-outfit text-white uppercase tracking-wider">PT BERKAH JASA ABADI</span>
            </div>
            <div>
              <p class="text-[10px] font-black uppercase tracking-widest text-[#CCFF00] mb-1">{{ t('footer.emailTag') }}</p>
              <p class="text-lg sm:text-xl font-bold font-outfit text-white break-all">{{ globalConfig.links.email }}</p>
            </div>
            <div>
              <p class="text-[10px] font-black uppercase tracking-widest text-[#CCFF00] mb-1">{{ t('footer.hqTag') }}</p>
              <p class="text-lg sm:text-xl font-bold font-outfit text-white">{{ t('footer.hqVal') }}</p>
            </div>
            <div>
              <p class="text-[10px] font-black uppercase tracking-widest text-[#CCFF00] mb-1">{{ t('footer.divTag') }}</p>
              <p class="text-xs text-slate-400 leading-relaxed">
                {{ t('footer.div1') }}<br />
                {{ t('footer.div2') }}<br />
                {{ t('footer.div3') }}
              </p>
            </div>
          </div>
        </div>

        <!-- Giant Petrova Footer Brand Header -->
        <div class="pt-12 sm:pt-16 border-t border-slate-800">
          <h1 class="text-3xl sm:text-6xl md:text-8xl lg:text-[8.5rem] font-black uppercase font-outfit tracking-tighter text-white leading-none select-none break-words">
            BERKAH JASA ABADI<span class="text-[#CCFF00]">.</span>
          </h1>
          <div class="flex flex-col md:flex-row justify-between items-center gap-4 mt-8 text-xs text-slate-500 font-medium">
            <p>{{ t('footer.rights') }}</p>
            <p>High-Performance Industrial Holding System</p>
          </div>
        </div>

      </div>
    </footer>
  </div>
</template>

<script setup>
import { ArrowUpRight } from 'lucide-vue-next';
import { globalConfig } from '../config';
import { t } from '../i18n';

const reviews = [
  {
    quoteKey: 'reviews.r1Quote',
    author: 'Randi Pratama',
    roleKey: 'reviews.r1Role',
    initials: 'RP'
  },
  {
    quoteKey: 'reviews.r2Quote',
    author: 'Siti Rahmawati',
    roleKey: 'reviews.r2Role',
    initials: 'SR'
  },
  {
    quoteKey: 'reviews.r3Quote',
    author: 'Dr. H. Hendra',
    roleKey: 'reviews.r3Role',
    initials: 'HH'
  },
  {
    quoteKey: 'reviews.r4Quote',
    author: 'Budi Santoso',
    roleKey: 'reviews.r4Role',
    initials: 'BS'
  }
];
</script>

<style scoped>
.marquee-track {
  display: flex;
  width: max-content;
  animation: marquee-left-to-right 30s linear infinite;
}

.marquee-track:hover {
  animation-play-state: paused;
}

@keyframes marquee-left-to-right {
  0% {
    transform: translateX(-50%);
  }
  100% {
    transform: translateX(0%);
  }
}
</style>
