<template>
  <div class="fixed bottom-3 right-3 sm:bottom-8 sm:right-8 z-[200] flex flex-col items-end gap-2 sm:gap-4">
    <!-- Email Copy Chip (Compact on Mobile, Full-Size on Desktop) -->
    <transition name="pop">
      <div 
        v-if="showEmailChip" 
        class="bg-slate-950/95 backdrop-blur-md px-3 py-2 sm:px-5 sm:py-3.5 rounded-xl sm:rounded-2xl flex items-center gap-2.5 sm:gap-4 shadow-2xl border border-slate-800 text-white max-w-[260px] sm:max-w-none"
      >
        <div class="w-6 h-6 sm:w-9 sm:h-9 rounded-md sm:rounded-xl bg-[#CCFF00] text-slate-950 flex items-center justify-center font-black shrink-0">
          <Mail class="w-3.5 h-3.5 sm:w-5 sm:h-5" />
        </div>
        <div class="min-w-0">
          <p class="text-[7px] sm:text-[9px] font-black text-[#CCFF00] uppercase tracking-widest leading-none mb-0.5">Email Resmi</p>
          <p class="text-[10px] sm:text-sm font-bold truncate leading-tight">{{ globalConfig.links.email }}</p>
        </div>
        <button @click="copyEmail" class="p-1 sm:p-2 hover:bg-slate-800 rounded-lg transition-colors shrink-0">
          <Copy v-if="!copied" class="w-3 h-3 sm:w-4 sm:h-4 text-slate-300" />
          <Check v-else class="w-3 h-3 sm:w-4 sm:h-4 text-[#CCFF00]" />
        </button>
      </div>
    </transition>

    <!-- Main Floating Buttons (Small w-8 on Mobile, Full-Size w-14/w-16 on Desktop) -->
    <div class="flex items-center gap-2 sm:gap-3">
      <!-- Black Email Toggle Button -->
      <button 
        @click="showEmailChip = !showEmailChip" 
        class="w-8 h-8 sm:w-14 sm:h-14 bg-slate-950 text-white rounded-lg sm:rounded-2xl flex items-center justify-center shadow-xl hover:scale-105 transition-transform border border-slate-800 shrink-0"
        title="Email"
      >
        <Mail v-if="!showEmailChip" class="w-4 h-4 sm:w-6 sm:h-6" />
        <X v-else class="w-4 h-4 sm:w-6 sm:h-6" />
      </button>

      <!-- WhatsApp Button -->
      <a 
        :href="globalConfig.links.whatsapp" 
        target="_blank" 
        class="w-8 h-8 sm:w-16 sm:h-16 bg-[#25D366] rounded-lg sm:rounded-2xl flex items-center justify-center text-white shadow-[0_10px_25px_rgba(37,211,102,0.4)] hover:scale-105 transition-transform duration-300 relative border border-white/30 shrink-0"
        title="WhatsApp"
      >
        <MessageCircle class="w-4 h-4 sm:w-7 sm:h-7" />
        <span class="absolute -top-0.5 -right-0.5 sm:-top-1 sm:-right-1 w-2.5 h-2.5 sm:w-4 sm:h-4 bg-red-500 rounded-full border-2 border-white animate-pulse"></span>
      </a>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { MessageCircle, Mail, Copy, Check, X } from 'lucide-vue-next';
import { globalConfig } from '../config';

const showEmailChip = ref(false);
const copied = ref(false);

const copyEmail = () => {
  navigator.clipboard.writeText(globalConfig.links.email);
  copied.value = true;
  setTimeout(() => {
    copied.value = false;
  }, 2000);
};
</script>

<style scoped>
.pop-enter-active,
.pop-leave-active {
  transition: all 0.2s ease;
}

.pop-enter-from,
.pop-leave-to {
  opacity: 0;
  transform: scale(0.9) translateY(6px);
}
</style>
