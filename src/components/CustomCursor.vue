<template>
  <div class="hidden lg:block pointer-events-none">
    <!-- Inner Acid Lime Cursor Dot -->
    <div 
      ref="dot" 
      class="fixed top-0 left-0 w-3 h-3 rounded-full bg-[#CCFF00] border border-slate-950 pointer-events-none z-[999999] shadow-[0_0_10px_#CCFF00]"
    ></div>

    <!-- Outer Follower Ring -->
    <div 
      ref="follower" 
      class="fixed top-0 left-0 w-9 h-9 rounded-full border-2 border-[#CCFF00] pointer-events-none z-[999998] transition-transform duration-100 ease-out bg-[#CCFF00]/10"
    ></div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import gsap from 'gsap';

const dot = ref(null);
const follower = ref(null);

const onMouseMove = (e) => {
  if (!dot.value || !follower.value) return;
  
  gsap.to(dot.value, {
    x: e.clientX - 6,
    y: e.clientY - 6,
    duration: 0.05,
    ease: 'power2.out'
  });

  gsap.to(follower.value, {
    x: e.clientX - 18,
    y: e.clientY - 18,
    duration: 0.25,
    ease: 'power2.out'
  });
};

const onMouseDown = () => {
  if (!follower.value) return;
  gsap.to(follower.value, { scale: 0.7, duration: 0.1 });
};

const onMouseUp = () => {
  if (!follower.value) return;
  gsap.to(follower.value, { scale: 1, duration: 0.1 });
};

onMounted(() => {
  window.addEventListener('mousemove', onMouseMove);
  window.addEventListener('mousedown', onMouseDown);
  window.addEventListener('mouseup', onMouseUp);
});

onUnmounted(() => {
  window.removeEventListener('mousemove', onMouseMove);
  window.removeEventListener('mousedown', onMouseDown);
  window.removeEventListener('mouseup', onMouseUp);
});
</script>
