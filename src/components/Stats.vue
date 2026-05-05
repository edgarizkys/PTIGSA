<template>
  <section class="py-24 relative overflow-hidden border-y border-white/5 bg-black/20">
    <div class="container mx-auto px-6">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
        <div v-for="stat in stats" :key="stat.label" class="stats-reveal">
          <p class="text-6xl md:text-8xl font-black text-white mb-2 font-outfit tracking-tighter">
            {{ stat.value }}<span class="text-amber-gold">+</span>
          </p>
          <p class="text-xs font-black uppercase tracking-[0.4em] text-slate-500">
            {{ stat.label }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted } from 'vue';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const stats = [
  { value: '15', label: 'Industrial Fields' },
  { value: '250', label: 'Heavy Fleets' },
  { value: '100', label: 'Systems Integrated' },
];

onMounted(() => {
  gsap.from('.stats-reveal', {
    scrollTrigger: {
      trigger: '.stats-reveal',
      start: 'top 90%',
    },
    y: 40,
    opacity: 0,
    duration: 1,
    stagger: 0.2,
    ease: 'expo.out',
  });
});
</script>
