<template>
  <footer id="contact" class="py-32 relative overflow-hidden bg-bg-secondary">
    <div class="container mx-auto px-6">
      <div class="glass rounded-[4rem] p-12 md:p-24 relative overflow-hidden border-t-2 border-glass-border">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div>
            <div class="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-amber-gold/10 border border-amber-gold/20 mb-10">
              <span class="w-2 h-2 bg-amber-gold rounded-full animate-pulse"></span>
              <span class="text-[10px] font-black uppercase tracking-[0.3em] text-amber-gold">Hubungi Kami</span>
            </div>
            <h2 class="text-5xl md:text-[5rem] font-black mb-10 leading-[1] font-outfit uppercase">ISE GLOBAL <br /> <span class="text-gradient-amber">NEXUS.</span></h2>
            <p class="text-text-secondary text-xl mb-12 max-w-md leading-relaxed">
              Bermitra dengan kami untuk mendefinisikan ulang sinergi antara energi, logistik, dan kecerdasan digital.
            </p>
            
            <div class="space-y-10">
              <div class="flex items-center gap-8 group">
                <div class="w-20 h-20 rounded-3xl bg-bg-primary flex items-center justify-center border border-glass-border group-hover:border-amber-gold transition-all duration-500">
                  <Mail class="text-text-primary" :size="32" />
                </div>
                <div>
                  <p class="text-[10px] font-black uppercase tracking-widest text-slate-500 mb-2">Email Korporat</p>
                  <p class="text-2xl font-black text-text-primary font-outfit">{{ nexusConfig.links.email }}</p>
                </div>
              </div>

              <div class="flex items-center gap-8 group">
                <div class="w-20 h-20 rounded-3xl bg-bg-primary flex items-center justify-center border border-glass-border group-hover:border-electric-blue transition-all duration-500">
                  <MapPin class="text-text-primary" :size="32" />
                </div>
                <div>
                  <p class="text-[10px] font-black uppercase tracking-widest text-slate-500 mb-2">Kantor Pusat</p>
                  <p class="text-2xl font-black text-text-primary font-outfit">Jakarta, Indonesia</p>
                </div>
              </div>
            </div>
          </div>

          <div class="relative h-[500px] rounded-[3rem] overflow-hidden border border-glass-border shadow-2xl bg-bg-primary">
            <!-- Map Visualization -->
            <div class="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
            <div class="absolute inset-0 flex items-center justify-center">
               <Globe class="text-electric-blue/20 animate-pulse" :size="400" />
               <div class="absolute w-6 h-6 bg-amber-gold rounded-full shadow-[0_0_20px_#FFBF00] z-20"></div>
            </div>
            <div class="absolute bottom-10 left-10 right-10 glass p-8 rounded-3xl">
              <p class="text-lg font-black text-text-primary mb-2 font-outfit uppercase">Lokasi Strategis</p>
              <p class="text-sm text-text-secondary">Kami beroperasi di titik-titik vital perdagangan global.</p>
            </div>
          </div>
        </div>

        <div class="mt-32 pt-16 border-t border-glass-border flex flex-col md:flex-row justify-between items-center gap-10">
          <div class="flex items-center gap-4">
             <div class="w-10 h-10 bg-amber-gold rounded-xl flex items-center justify-center">
               <Zap class="text-black" :size="20" />
             </div>
             <span class="text-2xl font-black text-text-primary uppercase font-outfit tracking-tighter">{{ nexusConfig.branding.name }}</span>
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
import { Mail, MapPin, Linkedin, Twitter, Instagram, Youtube, Globe, Zap } from 'lucide-vue-next';
import { nexusConfig } from '../config';

const socials = [
  { name: 'LinkedIn', icon: Linkedin },
  { name: 'Twitter', icon: Twitter },
  { name: 'Instagram', icon: Instagram },
  { name: 'YouTube', icon: Youtube },
];
</script>
