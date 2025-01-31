<template>
  <div class="travelImages">
    {{ test }}
    <div class="image" :class="{ even: index % 2 === 0, odd: index % 2 !== 0 }" v-for="(image, index) in images" :key="image.asset_id">
      <img v-if="!image.isPlaceholder" v-lazy-load="image" :alt='image.display_name' />
      <div v-else class="placeholder"></div>
      <div class="overlay">
        <p>{{ image.display_name }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from 'vue';

defineProps({ images: Array })
</script>