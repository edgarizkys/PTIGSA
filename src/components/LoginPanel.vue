<template>
  <section class="py-32 bg-white relative">
    <div class="container mx-auto px-6 flex flex-col md:flex-row items-center gap-20">
      <!-- Left: Content -->
      <div class="flex-1">
        <h4 class="text-industrial-orange font-bold uppercase tracking-[0.3em] text-xs mb-4">Secure Portal</h4>
        <h2 class="text-4xl md:text-5xl font-black text-deep-navy mb-8 uppercase">Operational <br/> Intelligence Access</h2>
        <p class="text-slate-500 text-lg mb-8 max-w-md">
          Authorized personnel only. Access our global command center and real-time monitoring infrastructure.
        </p>
        <div class="space-y-4">
          <div class="flex items-center gap-4 text-deep-navy font-bold">
            <div class="w-2 h-2 bg-industrial-orange"></div>
            <span>Two-Factor Authentication</span>
          </div>
          <div class="flex items-center gap-4 text-deep-navy font-bold">
            <div class="w-2 h-2 bg-industrial-orange"></div>
            <span>End-to-End Encryption</span>
          </div>
          <div class="flex items-center gap-4 text-deep-navy font-bold">
            <div class="w-2 h-2 bg-industrial-orange"></div>
            <span>Global Session Sync</span>
          </div>
        </div>
      </div>

      <!-- Right: Login Card -->
      <div 
        v-motion
        :initial="{ opacity: 0, x: 30 }"
        :visible="{ opacity: 1, x: 0, transition: { duration: 800 } }"
        class="w-full max-w-md bg-white border border-border-subtle p-12 shadow-2xl relative overflow-hidden"
      >
        <!-- Scanning Line -->
        <div v-if="isScanning" class="absolute inset-0 z-20 pointer-events-none">
           <div class="w-1 h-full bg-industrial-orange shadow-[0_0_15px_#ff7e00] animate-scanning-clean"></div>
           <div class="absolute inset-0 bg-industrial-orange/5 animate-pulse"></div>
        </div>

        <div class="mb-10">
          <h3 class="text-2xl font-black text-deep-navy uppercase mb-2">Member Login</h3>
          <p class="text-slate-400 text-xs font-mono uppercase tracking-widest">Enterprise Security Active</p>
        </div>

        <form @submit.prevent="handleLogin" class="space-y-6">
          <div>
            <input 
              type="text" 
              placeholder="Operator ID"
              class="w-full bg-light-slate border border-border-subtle px-6 py-4 text-deep-navy focus:outline-none focus:border-industrial-orange transition-all placeholder:text-slate-400 font-bold text-sm"
            />
          </div>
          
          <div>
            <input 
              type="password" 
              placeholder="Access Key"
              class="w-full bg-light-slate border border-border-subtle px-6 py-4 text-deep-navy focus:outline-none focus:border-industrial-orange transition-all placeholder:text-slate-400 font-bold text-sm"
            />
          </div>

          <button 
            type="submit"
            :disabled="isScanning"
            class="btn-primary w-full py-5 relative group"
          >
            <span v-if="!isScanning">Authenticate</span>
            <span v-else class="flex items-center justify-center gap-2">
              <RefreshCw class="animate-spin" :size="16" />
              Verifying...
            </span>
          </button>
        </form>

        <p class="mt-8 text-center text-xs text-slate-400">
          Forgot your access key? <a href="#" class="text-industrial-orange font-bold">Contact Admin</a>
        </p>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue';
import { RefreshCw } from 'lucide-vue-next';

const isScanning = ref(false);

const handleLogin = () => {
  isScanning.value = true;
  setTimeout(() => {
    isScanning.value = false;
  }, 3000);
};
</script>
