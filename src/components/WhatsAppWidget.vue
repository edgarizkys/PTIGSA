<template>
  <button 
    @click="openWhatsApp"
    class="fixed bottom-8 right-8 z-50 w-16 h-16 bg-emerald-500 rounded-full shadow-2xl flex items-center justify-center text-white hover:scale-110 transition-transform animate-pulse-orange group"
    aria-label="Contact on WhatsApp"
  >
    <MessageCircle :size="32" class="group-hover:rotate-12 transition-transform" />
    
    <!-- Tooltip -->
    <div class="absolute right-20 bg-deep-charcoal border border-white/10 px-4 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
       <p class="text-xs font-bold text-white">Contact Command Center</p>
    </div>
  </button>
</template>

<script setup>
import { MessageCircle } from 'lucide-vue-next';

const phoneNumber = '628123456789';

const openWhatsApp = () => {
  const message = encodeURIComponent('Initializing contact with PTIGSA Control Center. Requesting system overview.');
  window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
};
</script>
