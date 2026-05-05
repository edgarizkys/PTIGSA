<template>
  <section class="relative min-h-screen flex items-center pt-20 overflow-hidden">
    <!-- Cinematic Background -->
    <div class="absolute inset-0 z-0 overflow-hidden">
      <img 
        src="/hero_industrial_cinematic.png" 
        alt="Industrial Infrastructure" 
        class="hero-bg-img w-full h-full object-cover scale-110 opacity-60 dark:opacity-40 transition-opacity duration-1000"
      />
      <!-- Gradient Overlays for Readability -->
      <div class="absolute inset-0 bg-gradient-to-r from-bg-primary via-bg-primary/80 to-transparent z-1"></div>
      <div class="absolute inset-0 bg-gradient-to-t from-bg-primary via-transparent to-transparent z-1"></div>
      
      <!-- Tech Particles Overlay -->
      <div class="absolute inset-0 z-2 opacity-30 pointer-events-none">
        <div v-for="i in 20" :key="i" 
             class="particle absolute bg-cyan-mint/20 rounded-full blur-sm"
             :style="randomParticleStyle()"></div>
      </div>
    </div>

    <div class="container mx-auto px-6 relative z-10">
      <div class="max-w-5xl">
        <div class="inline-flex items-center gap-3 px-5 py-2 rounded-full glass border border-glass-border mb-10 hero-reveal">
          <div class="flex gap-1">
            <span class="w-1.5 h-1.5 bg-amber-gold rounded-full animate-pulse"></span>
            <span class="w-1.5 h-1.5 bg-electric-blue rounded-full animate-pulse [animation-delay:200ms]"></span>
            <span class="w-1.5 h-1.5 bg-cyan-mint rounded-full animate-pulse [animation-delay:400ms]"></span>
          </div>
          <span class="text-[10px] font-black uppercase tracking-[0.4em] text-text-primary">Corporate Excellence V2.1</span>
        </div>
        
        <h1 class="text-4xl md:text-6xl lg:text-[6.8rem] font-black mb-10 leading-[0.9] md:leading-[0.85] hero-reveal font-outfit uppercase tracking-tighter text-text-primary">
          Masa Depan <br />
          <span class="text-gradient-amber">Energi</span> & <span class="text-gradient-blue">Logistik.</span>
        </h1>
        
        <p class="text-xl md:text-2xl text-text-secondary mb-16 max-w-3xl leading-relaxed hero-reveal font-medium">
          Membangun sinergi cerdas antara infrastruktur fisik dan kecerdasan digital untuk menggerakkan ekonomi global yang berkelanjutan.
        </p>

        <div class="flex flex-wrap gap-8 hero-reveal">
          <button ref="btn1" @mousemove="handleMagnetic" @mouseleave="resetMagnetic" class="btn-magnetic px-12 py-6 text-sm uppercase tracking-[0.2em] shadow-2xl shadow-electric-blue/20">
            Pelajari Selengkapnya
          </button>
          <button ref="btn2" @mousemove="handleMagnetic" @mouseleave="resetMagnetic" class="px-12 py-6 rounded-full border-2 border-glass-border glass hover:bg-text-primary hover:text-bg-primary transition-all duration-500 font-black flex items-center gap-4 group text-sm uppercase tracking-[0.2em] shadow-xl">
            Profil Korporat
            <ArrowRight :size="20" class="group-hover:translate-x-2 transition-transform" />
          </button>
        </div>
      </div>
    </div>

    <!-- Floating UI Dashboard Widget -->
    <div class="absolute bottom-20 right-20 hidden xl:block hero-reveal z-20">
       <div class="glass p-10 rounded-[4rem] border-b-8 border-amber-gold shadow-[0_50px_100px_rgba(0,0,0,0.1)] hover:-translate-y-4 transition-transform duration-700">
          <div class="flex items-center gap-6 mb-8">
            <div class="w-16 h-16 bg-amber-gold rounded-[1.5rem] flex items-center justify-center shadow-lg shadow-amber-gold/20">
              <Zap class="text-black" :size="32" />
            </div>
            <div>
              <p class="text-3xl font-black text-text-primary font-outfit">ISE-CORE</p>
              <p class="text-[10px] font-bold text-slate-500 uppercase tracking-[0.3em]">Operational Live</p>
            </div>
          </div>
          <div class="space-y-4">
             <div class="flex justify-between items-end mb-1">
               <span class="text-[10px] font-black uppercase text-text-secondary">Efficiency</span>
               <span class="text-xs font-black text-amber-gold">94%</span>
             </div>
             <div class="h-2 w-56 bg-text-primary/5 rounded-full overflow-hidden">
               <div class="h-full bg-amber-gold w-[94%] animate-pulse"></div>
             </div>
             <div class="flex justify-between items-end mb-1">
               <span class="text-[10px] font-black uppercase text-text-secondary">System Sync</span>
               <span class="text-xs font-black text-cyan-mint">Live</span>
             </div>
             <div class="h-2 w-56 bg-text-primary/5 rounded-full overflow-hidden">
               <div class="h-full bg-cyan-mint w-[70%] animate-pulse [animation-delay:500ms]"></div>
             </div>
          </div>
       </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import { ArrowRight, Zap } from 'lucide-vue-next';
import gsap from 'gsap';

const btn1 = ref(null);
const btn2 = ref(null);

const handleMagnetic = (e) => {
  const btn = e.currentTarget;
  const rect = btn.getBoundingClientRect();
  const x = e.clientX - rect.left - rect.width / 2;
  const y = e.clientY - rect.top - rect.height / 2;
  
  gsap.to(btn, {
    x: x * 0.4,
    y: y * 0.4,
    duration: 0.3,
    ease: 'power2.out'
  });
};

const resetMagnetic = (e) => {
  gsap.to(e.currentTarget, {
    x: 0,
    y: 0,
    duration: 0.5,
    ease: 'elastic.out(1, 0.3)'
  });
};

const randomParticleStyle = () => {
  return {
    width: Math.random() * 4 + 2 + 'px',
    height: Math.random() * 4 + 2 + 'px',
    top: Math.random() * 100 + '%',
    left: Math.random() * 100 + '%',
    animationDelay: Math.random() * 5 + 's',
    animationDuration: Math.random() * 10 + 10 + 's'
  };
};

onMounted(() => {
  // Hero reveal animation
  gsap.from('.hero-reveal', {
    y: 70,
    opacity: 0,
    duration: 1.5,
    stagger: 0.2,
    ease: 'power4.out',
  });

  // Background parallax
  gsap.to('.hero-bg-img', {
    scale: 1.2,
    scrollTrigger: {
      trigger: 'section',
      start: 'top top',
      end: 'bottom top',
      scrub: true
    }
  });

  // Particles animation
  gsap.to('.particle', {
    y: '-100vh',
    x: 'random(-50, 50)',
    opacity: 0,
    duration: 'random(10, 20)',
    repeat: -1,
    ease: 'none',
    stagger: {
      amount: 10,
      from: 'random'
    }
  });
});
</script>

<style scoped>
.particle {
  pointer-events: none;
}

@keyframes pulse-soft {
  0%, 100% { opacity: 0.2; }
  50% { opacity: 0.5; }
}
</style>
