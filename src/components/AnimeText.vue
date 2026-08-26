<template>
  <component :is="tag" ref="textRef" :class="customClass">
    <span 
      v-for="(char, index) in characters" 
      :key="index" 
      class="anime-char inline-block"
      :style="{ opacity: 0 }"
    >
      {{ char === ' ' ? '\u00A0' : char }}
    </span>
  </component>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';
import { animate, stagger } from 'animejs';

const props = defineProps({
  text: {
    type: String,
    required: true
  },
  tag: {
    type: String,
    default: 'h1'
  },
  customClass: {
    type: String,
    default: ''
  },
  delay: {
    type: Number,
    default: 0
  },
  duration: {
    type: Number,
    default: 800
  }
});

const textRef = ref(null);

const characters = computed(() => {
  return props.text.split('');
});

onMounted(() => {
  if (!textRef.value) return;

  animate(textRef.value.querySelectorAll('.anime-char'), {
    translateY: [40, 0],
    opacity: [0, 1],
    ease: 'outExpo',
    duration: props.duration,
    delay: stagger(35, { start: props.delay }),
  });
});
</script>
