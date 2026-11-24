<template>
  <div class="travel-image">
    <div class="travel-image__image" :class="{ 'travel-image--even': index % 2 === 0, 'travel-image--odd': index % 2 !== 0, 'travel-image__image--placeholder': image.isPlaceholder }" v-for="(image, index) in images" :key="image.asset_id || `placeholder-${index}`">
      <img v-if="!image.isPlaceholder" v-lazy-load="image" :alt='image.display_name' />
      <div v-else class="travel-image__image__placeholder"></div>
      <div v-if="!image.isPlaceholder" class="travel-image__overlay">
        <p>{{ image.display_name }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from 'vue';

defineProps({ images: Array })
</script>