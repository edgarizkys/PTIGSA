<template>
  <div class="selection:bg-amber-gold/30">
    <CustomCursor />
    <Navigation />
    
    <main>
      <Hero />
      <Stats />
      <BentoGrid />
      <B50SampleShowcase />
      <IntegratedFlow />
      <OrgChart />
      <InteractiveMap />
      <ContactHub />
    </main>

    <ContactFloating />
  </div>
</template>

<script setup>
import { onMounted } from 'vue';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import CustomCursor from './components/CustomCursor.vue';
import Navigation from './components/Navigation.vue';
import Hero from './components/Hero.vue';
import Stats from './components/Stats.vue';
import BentoGrid from './components/BentoGrid.vue';
import B50SampleShowcase from './components/B50SampleShowcase.vue';
import IntegratedFlow from './components/IntegratedFlow.vue';
import InteractiveMap from './components/InteractiveMap.vue';
import ContactHub from './components/ContactHub.vue';
import OrgChart from './components/OrgChart.vue';
import ContactFloating from './components/ContactFloating.vue';

gsap.registerPlugin(ScrollTrigger);

onMounted(() => {
  // Smooth Scroll implementation (Standard)
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
});
</script>

<style>
/* Global resets and transitions */
* {
  cursor: none !important;
}

@media (max-width: 1024px) {
  * {
    cursor: auto !important;
  }
}

html {
  scroll-behavior: smooth;
}

/* Custom Scrollbar */
::-webkit-scrollbar {
  width: 10px;
}

::-webkit-scrollbar-track {
  background: var(--bg-primary);
}

::-webkit-scrollbar-thumb {
  background: var(--glass-border);
  border-radius: 5px;
}

::-webkit-scrollbar-thumb:hover {
  background: var(--color-amber-gold);
}
</style>
