<template>
  <div class="hidden lg:block">
    <div ref="dot" class="custom-cursor"></div>
    <div ref="follower" class="custom-cursor-follower"></div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import gsap from 'gsap';

const dot = ref(null);
const follower = ref(null);

const onMouseMove = (e) => {
  gsap.to(dot.value, {
    x: e.clientX - 10,
    y: e.clientY - 10,
    duration: 0.1
  });
  gsap.to(follower.value, {
    x: e.clientX - 20,
    y: e.clientY - 20,
    duration: 0.3
  });
};

onMounted(() => {
  window.addEventListener('mousemove', onMouseMove);
});

onUnmounted(() => {
  window.removeEventListener('mousemove', onMouseMove);
});
</script>
