<template>
  <div class="fixed bottom-10 right-10 z-[200]">
    <a :href="waLink" target="_blank" 
       class="w-20 h-20 bg-[#25D366] rounded-3xl flex items-center justify-center text-white shadow-[0_20px_40px_rgba(37,211,102,0.3)] pulse-wa hover:scale-110 transition-transform duration-500 group border-2 border-white/20">
      <MessageCircle :size="36" />
      
      <!-- Tooltip -->
      <div class="absolute right-24 bg-white text-black px-6 py-3 rounded-2xl text-xs font-black uppercase tracking-widest whitespace-nowrap opacity-0 group-hover:opacity-100 transition-all duration-500 pointer-events-none shadow-2xl translate-x-5 group-hover:translate-x-0">
        Inquire with Expert
      </div>
    </a>
  </div>
</template>

<script setup>
import { MessageCircle } from 'lucide-vue-next';
import { computed } from 'vue';

const phoneNumber = '6281234567890';
const message = 'Hello PT ISE Global Anugerah, I am interested in your industrial energy and logistics solutions. Can we discuss synergy opportunities?';

const waLink = computed(() => {
  return `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
});
</script>

<style scoped>
.pulse-wa {
  animation: pulse-wa 2s infinite;
}

@keyframes pulse-wa {
  0% {
    box-shadow: 0 0 0 0 rgba(37, 211, 102, 0.4);
  }
  70% {
    box-shadow: 0 0 0 25px rgba(37, 211, 102, 0);
  }
  100% {
    box-shadow: 0 0 0 0 rgba(37, 211, 102, 0);
  }
}
</style>
