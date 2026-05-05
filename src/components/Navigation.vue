<template>
  <nav class="fixed top-0 left-0 w-full z-[100] transition-all duration-500" :class="{ 'py-4': !scrolled, 'py-2': scrolled }">
    <div class="container mx-auto px-6">
      <div class="glass rounded-full px-8 py-4 flex justify-between items-center transition-all duration-500 shadow-xl">
        <div class="flex items-center gap-3 group cursor-pointer">
          <div class="w-10 h-10 bg-amber-gold rounded-xl flex items-center justify-center group-hover:rotate-12 transition-transform duration-500">
            <Zap class="text-black" :size="24" />
          </div>
          <div class="flex flex-col leading-tight">
            <span class="text-xl font-black tracking-tighter text-text-primary uppercase font-outfit">{{ globalConfig.branding.shortName }}</span>
            <span class="text-[8px] font-bold text-amber-gold tracking-widest uppercase">Global Anugerah</span>
          </div>
        </div>

        <div class="hidden md:flex items-center gap-8">
          <a v-for="link in links" :key="link.name" :href="link.href" 
             class="text-[10px] font-black uppercase tracking-widest text-text-secondary hover:text-amber-gold transition-colors duration-300">
            {{ link.name }}
          </a>
        </div>

        <div class="flex items-center gap-4">
          <!-- Theme Toggle -->
          <button @click="toggleTheme" class="w-10 h-10 rounded-full flex items-center justify-center bg-bg-secondary border border-glass-border hover:scale-110 transition-transform">
            <Moon v-if="!isDark" :size="18" class="text-text-primary" />
            <Sun v-else :size="18" class="text-amber-gold" />
          </button>

          <!-- Partner Portal -->
          <button class="hidden lg:flex items-center gap-2 px-5 py-2.5 rounded-xl bg-text-primary text-bg-primary text-[10px] font-black uppercase tracking-widest hover:opacity-90 transition-opacity">
            <Lock :size="14" />
            Partner Portal
          </button>

          <!-- Mobile Toggle -->
          <button class="md:hidden text-text-primary">
            <Menu :size="28" />
          </button>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import { Zap, Menu, Moon, Sun, Lock } from 'lucide-vue-next';
import { globalConfig } from '../config';

const scrolled = ref(false);
const isDark = ref(true);

const links = [
  { name: 'Energi', href: '#energy' },
  { name: 'Logistik', href: '#logistics' },
  { name: 'Teknologi', href: '#tech' },
  { name: 'Ekosistem', href: '#ecosystem' },
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
