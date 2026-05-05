<template>
  <div class="fixed bottom-10 right-10 z-[200] flex flex-col items-end gap-6">
    <!-- Email Copy Chip -->
    <div v-if="showEmailChip" class="glass px-6 py-4 rounded-2xl flex items-center gap-4 shadow-2xl animate-bounce-subtle border border-cyan-mint/20">
      <div class="w-10 h-10 rounded-xl bg-cyan-mint/10 flex items-center justify-center">
        <Mail class="text-cyan-mint" :size="20" />
      </div>
      <div>
        <p class="text-[9px] font-black text-slate-500 uppercase tracking-widest mb-1">Email Saluran Resmi</p>
        <p class="text-xs font-bold text-text-primary">{{ nexusConfig.links.email }}</p>
      </div>
      <button @click="copyEmail" class="ml-4 p-2 hover:bg-text-primary/10 rounded-lg transition-colors">
        <Copy v-if="!copied" :size="16" class="text-text-primary" />
        <Check v-else :size="16" class="text-cyan-mint" />
      </button>
    </div>

    <!-- Main Floating Group -->
    <div class="flex items-center gap-4">
      <!-- Email Toggle -->
      <button @click="showEmailChip = !showEmailChip" 
              class="w-14 h-14 glass rounded-2xl flex items-center justify-center text-text-primary shadow-xl hover:scale-110 transition-transform">
        <Mail v-if="!showEmailChip" :size="24" />
        <X v-else :size="24" />
      </button>

      <!-- WhatsApp Button -->
      <a :href="nexusConfig.links.whatsapp" target="_blank" 
         class="w-20 h-20 bg-[#25D366] rounded-3xl flex items-center justify-center text-white shadow-[0_20px_40px_rgba(37,211,102,0.3)] pulse-wa hover:scale-110 transition-transform duration-500 group border-2 border-white/20 relative">
        <MessageCircle :size="36" />
        
        <!-- Notification Pulse -->
        <span class="absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-full border-2 border-white animate-pulse"></span>

        <!-- Tooltip -->
        <div class="absolute right-24 bg-text-primary text-bg-primary px-6 py-3 rounded-2xl text-[10px] font-black uppercase tracking-widest whitespace-nowrap opacity-0 group-hover:opacity-100 transition-all duration-500 pointer-events-none shadow-2xl translate-x-5 group-hover:translate-x-0">
          Konsultasi Sinergi
        </div>
      </a>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { MessageCircle, Mail, Copy, Check, X } from 'lucide-vue-next';
import { nexusConfig } from '../config';

const showEmailChip = ref(false);
const copied = ref(false);

const copyEmail = () => {
  navigator.clipboard.writeText(nexusConfig.links.email);
  copied.value = true;
  setTimeout(() => {
    copied.value = false;
  }, 2000);
};
</script>

<style scoped>
.animate-bounce-subtle {
  animation: bounce-subtle 3s infinite;
}

@keyframes bounce-subtle {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
}

.pulse-wa {
  animation: pulse-wa 2s infinite;
}

@keyframes pulse-wa {
  0% { box-shadow: 0 0 0 0 rgba(37, 211, 102, 0.4); }
  70% { box-shadow: 0 0 0 25px rgba(37, 211, 102, 0); }
  100% { box-shadow: 0 0 0 0 rgba(37, 211, 102, 0); }
}
</style>
