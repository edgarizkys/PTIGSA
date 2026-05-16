<template>
  <section id="organization" class="py-24 md:py-32 bg-bg-primary relative overflow-hidden">
    <div class="container mx-auto px-6">
      <div class="text-center mb-24">
        <div class="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-amber-gold/10 border border-amber-gold/20 mb-6">
          <Users class="text-amber-gold" :size="20" />
          <span class="text-[10px] font-black uppercase tracking-[0.3em] text-amber-gold">Leadership Team</span>
        </div>
        <h2 class="text-4xl md:text-6xl font-black mb-6 font-outfit uppercase tracking-tighter text-text-primary">Struktur Organisasi.</h2>
        <p class="text-text-secondary max-w-2xl mx-auto text-lg leading-relaxed font-medium">
          Sinergi kepemimpinan profesional untuk memastikan keunggulan operasional di setiap pilar bisnis kami.
        </p>
      </div>

      <!-- Org Chart Container -->
      <div class="relative max-w-7xl mx-auto">
        <!-- CEO Level -->
        <div class="flex justify-center mb-20 relative">
          <div class="org-node glass p-8 rounded-[2.5rem] border-2 border-amber-gold/50 shadow-[0_0_50px_rgba(255,191,0,0.1)] group hover:scale-105 transition-all duration-500 w-72 text-center relative z-10">
            <div class="w-20 h-20 bg-amber-gold/20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:rotate-12 transition-transform">
              <UserCheck class="text-amber-gold" :size="40" />
            </div>
            <h3 class="text-xl font-black text-text-primary font-outfit uppercase">Isolurroja Haris, S.E., CFP</h3>
            <p class="text-[10px] font-bold text-amber-gold uppercase tracking-widest mt-2">President Director</p>
          </div>
          <!-- Vertical Line Down -->
          <div class="absolute top-full left-1/2 w-0.5 h-20 bg-gradient-to-b from-amber-gold/50 to-electric-blue/30 -translate-x-1/2 hidden md:block"></div>
        </div>

        <!-- Horizontal Connector -->
        <div class="absolute top-[18.5rem] left-[12.5%] right-[12.5%] h-0.5 bg-electric-blue/30 hidden md:block"></div>

        <!-- Executive Level -->
        <div class="grid grid-cols-1 md:grid-cols-4 gap-6 relative">
          <!-- Advertising -->
          <div class="flex flex-col items-center">
            <div class="w-0.5 h-12 bg-electric-blue/30 mb-0 hidden md:block"></div>
            <div class="org-node glass p-6 rounded-[2rem] border border-electric-blue/30 group hover:border-electric-blue transition-all duration-500 w-full text-center h-full">
              <div class="w-14 h-14 bg-electric-blue/10 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Megaphone class="text-electric-blue" :size="24" />
              </div>
              <h4 class="text-sm font-black text-text-primary uppercase">EGI Purnama</h4>
              <p class="text-[8px] font-bold text-slate-500 uppercase tracking-widest mt-1">VP of Advertising</p>
            </div>
          </div>

          <!-- Finance/Secretary -->
          <div class="flex flex-col items-center">
            <div class="w-0.5 h-12 bg-electric-blue/30 mb-0 hidden md:block"></div>
            <div class="org-node glass p-6 rounded-[2rem] border border-electric-blue/30 group hover:border-electric-blue transition-all duration-500 w-full text-center h-full">
              <div class="w-14 h-14 bg-electric-blue/10 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Briefcase class="text-electric-blue" :size="24" />
              </div>
              <h4 class="text-sm font-black text-text-primary uppercase">Rini Romli</h4>
              <p class="text-[8px] font-bold text-slate-500 uppercase tracking-widest mt-1">Secretary & Treasurer</p>
            </div>
          </div>

          <!-- Marketing/Legal -->
          <div class="flex flex-col items-center">
            <div class="w-0.5 h-12 bg-electric-blue/30 mb-0 hidden md:block"></div>
            <div class="org-node glass p-6 rounded-[2rem] border border-electric-blue/30 group hover:border-electric-blue transition-all duration-500 w-full text-center h-full">
              <div class="w-14 h-14 bg-electric-blue/10 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Scale class="text-electric-blue" :size="24" />
              </div>
              <h4 class="text-sm font-black text-text-primary uppercase">Sakti Siregar</h4>
              <p class="text-[8px] font-bold text-slate-500 uppercase tracking-widest mt-1">Marketing & Legal Officer</p>
            </div>
          </div>

          <!-- CTO -->
          <div class="flex flex-col items-center">
            <div class="w-0.5 h-12 bg-electric-blue/30 mb-0 hidden md:block"></div>
            <div class="org-node glass p-6 rounded-[2rem] border border-electric-blue/30 group hover:border-electric-blue transition-all duration-500 w-full text-center h-full">
              <div class="w-14 h-14 bg-electric-blue/10 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Cpu class="text-electric-blue" :size="24" />
              </div>
              <h4 class="text-sm font-black text-text-primary uppercase">Dian Rizky Siregar</h4>
              <p class="text-[8px] font-bold text-slate-500 uppercase tracking-widest mt-1">Chief Technology Officer</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Bottom Tagline -->
      <div class="mt-24 text-center">
        <p class="text-[10px] font-black uppercase tracking-[0.5em] text-slate-500">PT. BERKAH JASA ABADI - Excellence in Unity</p>
      </div>
    </div>
  </section>
</template>

<script setup>
import { Users, UserCheck, Megaphone, Briefcase, Cpu, Scale } from 'lucide-vue-next';
import { onMounted } from 'vue';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

onMounted(() => {
  gsap.from('.org-node', {
    scrollTrigger: {
      trigger: '#organization',
      start: 'top 80%',
    },
    y: 30,
    opacity: 0,
    duration: 1,
    stagger: 0.1,
    ease: 'power3.out',
  });
});
</script>

<style scoped>
.org-node {
  background: rgba(255, 255, 255, 0.03);
  backdrop-filter: blur(20px);
}

.dark .org-node {
  background: rgba(15, 23, 42, 0.4);
}
</style>
