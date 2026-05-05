<template>
  <section id="esg" class="py-32 relative overflow-hidden bg-bg-primary">
    <div class="container mx-auto px-6">
      <div class="glass rounded-[4rem] p-12 md:p-24 border-l-8 border-cyan-mint flex flex-col md:flex-row items-center gap-16">
        <div class="flex-1">
          <div class="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-cyan-mint/10 border border-cyan-mint/20 mb-10 esg-reveal">
            <Leaf class="text-cyan-mint" :size="20" />
            <span class="text-[10px] font-black uppercase tracking-[0.3em] text-cyan-mint">ESG & Sustainability</span>
          </div>
          <h2 class="text-5xl md:text-7xl font-black mb-8 leading-[1] font-outfit esg-reveal">Transisi Energi <br /> <span class="text-gradient-cyan">Berkelanjutan.</span></h2>
          <p class="text-text-secondary text-xl mb-12 leading-relaxed esg-reveal">
            Kami berkomitmen untuk mengurangi jejak karbon melalui teknologi efisiensi tinggi dan integrasi energi terbarukan dalam operasional industri.
          </p>
          <div class="grid grid-cols-2 gap-8 esg-reveal">
            <div>
              <p class="text-4xl font-black text-text-primary mb-2">35%</p>
              <p class="text-[10px] font-bold uppercase tracking-widest text-slate-500">Carbon Reduction</p>
            </div>
            <div>
              <p class="text-4xl font-black text-text-primary mb-2">100%</p>
              <p class="text-[10px] font-bold uppercase tracking-widest text-slate-500">Digital Governance</p>
            </div>
          </div>
        </div>
        <div class="w-full md:w-96 aspect-square rounded-[3rem] bg-cyan-mint/5 border border-cyan-mint/10 flex items-center justify-center relative overflow-hidden esg-reveal group">
          <Globe class="text-cyan-mint opacity-20 absolute scale-150 group-hover:rotate-12 transition-transform duration-1000" :size="300" />
          <div class="relative z-10 text-center">
            <Zap class="text-cyan-mint mb-4 mx-auto" :size="64" />
            <p class="font-black text-text-primary uppercase tracking-widest">Green Nexus</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted } from 'vue';
import { Leaf, Globe, Zap } from 'lucide-vue-next';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

onMounted(() => {
  gsap.from('.esg-reveal', {
    scrollTrigger: {
      trigger: '#esg',
      start: 'top 80%',
    },
    y: 50,
    opacity: 0,
    duration: 1.2,
    stagger: 0.2,
    ease: 'power4.out',
  });
});
</script>
