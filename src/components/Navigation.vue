<template>
  <nav class="fixed top-0 left-0 w-full z-[100] transition-all duration-300" :class="{ 'py-3': !scrolled, 'py-1.5': scrolled }">
    <div class="container mx-auto px-3 sm:px-6">
      <div class="rounded-xl px-4 sm:px-6 py-2.5 sm:py-3.5 flex justify-between items-center bg-[#0A0F1D] border border-slate-800 shadow-2xl text-white">
        <!-- Logo & Brand Header -->
        <div class="flex items-center gap-2.5 cursor-pointer group" @click="scrollToTop">
          <!-- Official Company Logo Badge -->
          <div class="w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-[#CCFF00] flex items-center justify-center p-1 shadow-lg shrink-0 group-hover:scale-105 transition-transform">
            <img src="/bja_logo.png" alt="BJA Logo" class="w-full h-full object-contain" />
          </div>
          <div class="flex flex-col leading-tight">
            <span class="text-xs sm:text-base font-black tracking-wider uppercase font-outfit text-white whitespace-nowrap">
              <span class="hidden sm:inline">BERKAH JASA ABADI</span>
              <span class="sm:hidden">BJA HOLDING</span>
            </span>
            <span class="text-[7px] sm:text-[8px] font-black text-[#CCFF00] tracking-[0.2em] sm:tracking-[0.3em] uppercase hidden sm:block">
              {{ t('nav.holding') }}
            </span>
          </div>
        </div>

        <!-- Center Nav Links (Desktop) -->
        <div class="hidden md:flex items-center gap-6 lg:gap-8">
          <a 
            v-for="link in navLinks" 
            :key="link.name" 
            :href="link.href" 
            class="text-[11px] font-bold uppercase tracking-[0.15em] lg:tracking-[0.2em] text-slate-300 hover:text-[#CCFF00] transition-colors duration-300 relative py-1"
          >
            {{ link.name }}
          </a>
        </div>

        <!-- Right Action Controls: Language Switcher & CTA -->
        <div class="flex items-center gap-2 sm:gap-3">
          <!-- Language Toggle Switcher (ID | EN) -->
          <div class="flex items-center rounded-lg bg-slate-900 border border-slate-800 p-0.5 sm:p-1 font-outfit">
            <button 
              @click="setLang('id')" 
              class="px-2 py-0.5 sm:px-2.5 sm:py-1 rounded text-[9px] sm:text-[10px] font-black uppercase transition-all"
              :class="currentLang === 'id' ? 'bg-[#CCFF00] text-slate-950 shadow' : 'text-slate-400 hover:text-white'"
            >
              ID
            </button>
            <button 
              @click="setLang('en')" 
              class="px-2 py-0.5 sm:px-2.5 sm:py-1 rounded text-[9px] sm:text-[10px] font-black uppercase transition-all"
              :class="currentLang === 'en' ? 'bg-[#CCFF00] text-slate-950 shadow' : 'text-slate-400 hover:text-white'"
            >
              EN
            </button>
          </div>

          <a 
            href="#contact" 
            class="petrova-btn-lime hidden lg:flex items-center gap-2 text-[10px] px-4 py-2"
          >
            <span>{{ t('nav.getInTouch') }}</span>
            <ArrowUpRight :size="12" />
          </a>

          <!-- Mobile Menu Toggle Button -->
          <button @click="isMobileMenuOpen = !isMobileMenuOpen" class="md:hidden text-white p-1.5 focus:outline-none">
            <Menu v-if="!isMobileMenuOpen" :size="20" />
            <X v-else :size="20" />
          </button>
        </div>
      </div>
    </div>

    <!-- Mobile Drawer -->
    <transition name="menu">
      <div v-if="isMobileMenuOpen" class="fixed inset-0 z-[-1] bg-[#0A0F1D]/98 backdrop-blur-2xl flex flex-col items-center justify-center p-6 md:hidden text-white">
        <div class="flex flex-col items-center gap-6 text-center">
          <div class="w-14 h-14 rounded-2xl bg-[#CCFF00] flex items-center justify-center p-2 mb-2 shadow-xl">
            <img src="/bja_logo.png" alt="BJA Logo" class="w-full h-full object-contain" />
          </div>
          <a 
            v-for="link in navLinks" 
            :key="link.name" 
            :href="link.href" 
            @click="isMobileMenuOpen = false"
            class="text-xl sm:text-2xl font-black uppercase font-outfit text-white hover:text-[#CCFF00] transition-colors tracking-tight"
          >
            {{ link.name }}
          </a>
          <a 
            href="#contact" 
            @click="isMobileMenuOpen = false" 
            class="petrova-btn-lime mt-4 text-xs font-black uppercase"
          >
            {{ t('nav.getInTouch') }}
          </a>
        </div>
      </div>
    </transition>
  </nav>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue';
import { ArrowUpRight, Menu, X } from 'lucide-vue-next';
import { currentLang, setLang, t } from '../i18n';

const scrolled = ref(false);
const isMobileMenuOpen = ref(false);

const navLinks = computed(() => [
  { name: t('nav.services'), href: '#services' },
  { name: t('nav.projects'), href: '#projects' },
  { name: t('nav.ecosystem'), href: '#integrated-flow' },
  { name: t('nav.organization'), href: '#organization' },
  { name: t('nav.reviews'), href: '#reviews' },
  { name: t('nav.contact'), href: '#contact' },
]);

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

const handleScroll = () => {
  scrolled.value = window.scrollY > 40;
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>

<style scoped>
.menu-enter-active,
.menu-leave-active {
  transition: all 0.3s ease;
}

.menu-enter-from,
.menu-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>
