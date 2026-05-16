<template>
  <nav class="fixed top-0 left-0 w-full z-[100] transition-all duration-500" :class="{ 'py-4': !scrolled, 'py-2': scrolled }">
    <div class="container mx-auto px-6">
      <div class="glass rounded-full px-6 md:px-8 py-3 md:py-4 flex justify-between items-center transition-all duration-500 shadow-xl">
        <div class="flex items-center group cursor-pointer" @click="window.scrollTo({top: 0, behavior: 'smooth'})">
          <div class="flex flex-col leading-tight">
            <span class="text-xl md:text-2xl font-black tracking-tighter text-text-primary uppercase font-outfit">{{ globalConfig.branding.shortName }}</span>
            <span class="text-[8px] md:text-[10px] font-bold text-amber-gold tracking-[0.3em] uppercase">PT. Berkah Jasa Abadi</span>
          </div>
        </div>

        <!-- Desktop Menu -->
        <div class="hidden md:flex items-center gap-8">
          <a v-for="link in links" :key="link.name" :href="link.href" 
             class="text-[10px] font-black uppercase tracking-widest text-text-secondary hover:text-amber-gold transition-colors duration-300">
            {{ link.name }}
          </a>
        </div>

        <div class="flex items-center gap-2 md:gap-4">
          <!-- Theme Toggle -->
          <button @click="toggleTheme" class="w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center bg-bg-secondary border border-glass-border hover:scale-110 transition-transform">
            <Moon v-if="!isDark" :size="16" class="text-text-primary" />
            <Sun v-else :size="16" class="text-amber-gold" />
          </button>

          <!-- Partner Portal -->
          <button class="hidden lg:flex items-center gap-2 px-5 py-2.5 rounded-xl bg-text-primary text-bg-primary text-[10px] font-black uppercase tracking-widest hover:opacity-90 transition-opacity">
            <Lock :size="14" />
            Partner Portal
          </button>

          <!-- Mobile Toggle -->
          <button @click="isMobileMenuOpen = !isMobileMenuOpen" class="md:hidden text-text-primary p-2">
            <Menu v-if="!isMobileMenuOpen" :size="24" />
            <X v-else :size="24" />
          </button>
        </div>
      </div>
    </div>

    <!-- Mobile Menu Overlay -->
    <transition name="menu">
      <div v-if="isMobileMenuOpen" class="fixed inset-0 z-[-1] bg-bg-primary/95 backdrop-blur-xl flex flex-col items-center justify-center p-10 md:hidden">
        <div class="flex flex-col items-center gap-8 text-center">
          <a v-for="link in links" :key="link.name" :href="link.href" 
             @click="isMobileMenuOpen = false"
             class="text-4xl font-black uppercase font-outfit text-text-primary hover:text-amber-gold transition-colors tracking-tighter">
            {{ link.name }}
          </a>
          <button class="mt-10 px-8 py-4 rounded-2xl bg-text-primary text-bg-primary font-black uppercase tracking-widest text-sm">
            Partner Portal
          </button>
        </div>
      </div>
    </transition>
  </nav>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import { Zap, Menu, Moon, Sun, Lock, X } from 'lucide-vue-next';
import { globalConfig } from '../config';

const scrolled = ref(false);
const isDark = ref(true);
const isMobileMenuOpen = ref(false);

const links = [
  { name: 'Energi', href: '#energy' },
  { name: 'Advertising', href: '#advertising' },
  { name: 'Teknologi', href: '#tech' },
  { name: 'Ekosistem', href: '#ecosystem' },
  { name: 'Organisasi', href: '#organization' },
  { name: 'ESG', href: '#esg' },
];

const toggleTheme = () => {
  isDark.value = !isDark.value;
  document.documentElement.classList.toggle('dark');
  localStorage.setItem('theme', isDark.value ? 'dark' : 'light');
};

const handleScroll = () => {
  scrolled.value = window.scrollY > 50;
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
  const savedTheme = localStorage.getItem('theme') || 'dark';
  isDark.value = savedTheme === 'dark';
  if (isDark.value) {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>

<style scoped>
.menu-enter-active,
.menu-leave-active {
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
}

.menu-enter-from,
.menu-leave-to {
  opacity: 0;
  transform: translateY(-20px);
}
</style>
