<template>
  <footer id="contact" class="py-20 md:py-28 relative overflow-hidden bg-bg-secondary">
    <div class="container mx-auto px-6">
      <div class="glass rounded-[4rem] p-12 md:p-24 relative overflow-hidden border-t-2 border-glass-border">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div>
            <div class="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-amber-gold/10 border border-amber-gold/20 mb-10">
              <span class="w-2 h-2 bg-amber-gold rounded-full animate-pulse"></span>
              <span class="text-[10px] font-black uppercase tracking-[0.3em] text-amber-gold">Hubungi Kami</span>
            </div>
            <h2 class="text-4xl md:text-[5rem] font-black mb-10 leading-[1] font-outfit uppercase">PT. BERKAH JASA <br /> <span class="text-gradient-amber">ABADI.</span></h2>
            <p class="text-text-secondary text-xl mb-12 max-w-md leading-relaxed">
              Bermitra dengan kami untuk mendefinisikan ulang sinergi antara energi, advertising, dan kecerdasan digital dalam skala profesional.
            </p>
            
            <div class="space-y-10">
              <div class="flex items-center gap-8 group">
                <div class="w-16 h-16 md:w-20 md:h-20 rounded-2xl md:rounded-3xl bg-bg-primary flex items-center justify-center border border-glass-border group-hover:border-amber-gold transition-all duration-500 shrink-0">
                  <Mail class="text-text-primary" :size="24" />
                </div>
                <div class="min-w-0">
                  <p class="text-[10px] font-black uppercase tracking-widest text-slate-500 mb-2">Email Korporat</p>
                  <p class="text-lg md:text-2xl font-black text-text-primary font-outfit break-all">{{ globalConfig.links.email }}</p>
                </div>
              </div>

              <div class="flex items-center gap-8 group">
                <div class="w-16 h-16 md:w-20 md:h-20 rounded-2xl md:rounded-3xl bg-bg-primary flex items-center justify-center border border-glass-border group-hover:border-electric-blue transition-all duration-500 shrink-0">
                  <MapPin class="text-text-primary" :size="24" />
                </div>
                <div class="min-w-0">
                  <p class="text-[10px] font-black uppercase tracking-widest text-slate-500 mb-2">Kantor Pusat</p>
                  <p class="text-lg md:text-2xl font-black text-text-primary font-outfit">Cilegon, Indonesia</p>
                </div>
              </div>
            </div>
          </div>

          <!-- Energy & Mining Visual Section -->
          <div class="relative h-[400px] md:h-[550px] rounded-[2rem] md:rounded-[4rem] overflow-hidden border-4 border-glass-border shadow-2xl bg-bg-primary group">
            <!-- Background Image -->
            <img src="/energy_mining_hub.png" alt="Energy & Mining Industrial Hub" class="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-1000" />
            
            <!-- Dark Overlay -->
            <div class="absolute inset-0 bg-gradient-to-t from-bg-primary via-transparent to-transparent"></div>
            
            <!-- Floating Icons -->
            <div class="absolute top-12 left-12 flex gap-4">
               <div class="w-16 h-16 glass rounded-2xl flex items-center justify-center border border-amber-gold/30">
                 <Flame class="text-amber-gold" :size="28" />
               </div>
               <div class="w-16 h-16 glass rounded-2xl flex items-center justify-center border border-electric-blue/30">
                 <HardHat class="text-electric-blue" :size="28" />
               </div>
            </div>

            <!-- Content Card -->
            <div class="absolute bottom-6 left-6 right-6 md:bottom-10 md:left-10 md:right-10 glass p-6 md:p-10 rounded-[2rem] md:rounded-[2.5rem] border border-glass-border translate-y-4 group-hover:translate-y-0 transition-transform duration-500 shadow-2xl">
              <div class="flex items-center gap-4 mb-4">
                 <div class="w-8 h-8 md:w-10 md:h-10 bg-amber-gold/20 rounded-xl flex items-center justify-center">
                    <Factory class="text-amber-gold" :size="16" />
                 </div>
                 <p class="text-base md:text-xl font-black text-text-primary font-outfit uppercase tracking-tighter">Sinergi Energi & Pertambangan</p>
              </div>
              <p class="text-[12px] md:text-sm text-text-secondary leading-relaxed font-medium">
                Pusat operasional strategis yang mendukung rantai pasok energi dan manajemen infrastruktur pertambangan.
              </p>
            </div>
          </div>
        </div>

        <!-- Footer Bottom -->
        <div class="mt-32 pt-16 border-t border-glass-border flex flex-col md:flex-row justify-between items-center gap-10">
          <div class="flex items-center gap-4">
             <div class="w-16 h-16 bg-white rounded-2xl flex items-center justify-center overflow-hidden p-1 shadow-2xl border border-slate-100 mb-6">
               <img src="../assets/logo.png" alt="Logo" class="w-full h-full object-contain scale-125" />
             </div>
             <span class="text-2xl font-black text-text-primary uppercase font-outfit tracking-tighter">{{ globalConfig.branding.name }}</span>
          </div>
          <div class="flex gap-10">
            <a v-for="social in socials" :key="social.name" href="#" class="text-text-secondary hover:text-text-primary transition-colors">
              <component :is="social.icon" :size="24" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { Mail, MapPin, Linkedin, Twitter, Instagram, Youtube, Flame, HardHat, Zap, Factory } from 'lucide-vue-next';
import { globalConfig } from '../config';

const socials = [
  { name: 'LinkedIn', icon: Linkedin },
  { name: 'Twitter', icon: Twitter },
  { name: 'Instagram', icon: Instagram },
  { name: 'YouTube', icon: Youtube },
];
</script>
