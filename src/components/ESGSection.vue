<template>
  <section id="esg" class="py-20 md:py-28 relative overflow-hidden bg-bg-primary">
    <div class="container mx-auto px-6">
      <div class="glass rounded-[2rem] md:rounded-[4rem] p-8 md:p-24 border-l-8 border-cyan-mint flex flex-col md:flex-row items-center gap-10 md:gap-16">
        <div class="flex-1">
          <div class="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-cyan-mint/10 border border-cyan-mint/20 mb-10 esg-reveal">
            <ShieldCheck class="text-cyan-mint" :size="20" />
            <span class="text-[10px] font-black uppercase tracking-[0.3em] text-cyan-mint">Operasional Berkelanjutan</span>
          </div>
          <h2 class="text-3xl md:text-5xl font-black mb-6 leading-[1.1] md:leading-[1] font-outfit esg-reveal uppercase">Transformasi <br /> <span class="text-gradient-cyan">Industri Hijau.</span></h2>
          <p class="text-text-secondary text-lg md:text-xl mb-12 leading-relaxed esg-reveal font-medium">
            Kami mengintegrasikan teknologi modern dengan efisiensi advertising kreatif untuk meminimalkan dampak lingkungan dan memaksimalkan jangkauan.
          </p>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-8 esg-reveal">
            <div class="p-4 md:p-6 rounded-2xl md:rounded-3xl bg-bg-secondary border border-glass-border">
              <p class="text-3xl md:text-4xl font-black text-text-primary mb-2">40%</p>
              <p class="text-[9px] md:text-[10px] font-bold uppercase tracking-widest text-slate-500">Efisiensi Armada</p>
            </div>
            <div class="p-4 md:p-6 rounded-2xl md:rounded-3xl bg-bg-secondary border border-glass-border">
              <p class="text-3xl md:text-4xl font-black text-text-primary mb-2">100%</p>
              <p class="text-[9px] md:text-[10px] font-bold uppercase tracking-widest text-slate-500">Kepatuhan ESG</p>
            </div>
          </div>
        </div>

        <!-- Mining & Shipping Animation Container -->
        <div class="w-full md:w-[500px] aspect-square rounded-[3rem] bg-bg-secondary border-4 border-glass-border flex items-center justify-center relative overflow-hidden esg-reveal group shadow-2xl">
          <!-- Background Image -->
          <img src="/mining_shipping_sustainability.png" alt="Mining & Shipping" class="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:scale-110 transition-transform duration-[2000ms]" />
          
          <!-- Animated Overlays -->
          <div class="absolute inset-0 bg-gradient-to-t from-bg-primary via-transparent to-transparent"></div>
          
          <!-- Floating UI Elements -->
          <div class="absolute top-8 right-8 flex flex-col gap-3">
             <div class="w-12 h-12 glass rounded-xl flex items-center justify-center border border-cyan-mint/30 animate-bounce">
               <Megaphone class="text-cyan-mint" :size="24" />
             </div>
             <div class="w-12 h-12 glass rounded-xl flex items-center justify-center border border-amber-gold/30 [animation-delay:500ms] animate-bounce">
               <HardHat class="text-amber-gold" :size="24" />
             </div>
          </div>

          <!-- Bottom Label -->
          <div class="absolute bottom-8 left-8 right-8 glass p-6 rounded-2xl border border-glass-border">
            <p class="text-xs font-black text-text-primary uppercase tracking-widest mb-1">Advertising Terintegrasi</p>
            <div class="w-full h-1 bg-white/10 rounded-full overflow-hidden">
               <div class="w-2/3 h-full bg-cyan-mint animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted } from 'vue';
import { ShieldCheck, Megaphone, HardHat } from 'lucide-vue-next';
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
