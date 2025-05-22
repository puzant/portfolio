<template>
  <div class="vertical-navigation" id="verticalNavigation">
    
    <a v-for="nav in $verticalNavigationLinks" :href="nav.href" :key="nav.name">
      <div class="vertical-navigation__tooltip">
        <img :src="viewedSection === nav.href ? nav.activeIcon : nav.icon" alt="navigation icon">
        <div class="tooltip-text">{{ nav.name }}</div>
      </div>
    </a>
  </div>
</template>

<script setup>
import { defineProps } from 'vue'
  defineProps({ viewedSection: String })
</script>

<style scoped lang="scss">
@import '@/assets/styles/variables';

.vertical-navigation {
  z-index: 1000;
  background-color: $secondaryBackgroundColor;
  padding: 10px 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 230px;
  border-top-left-radius: 14px;
  border-bottom-left-radius: 14px;
  margin: 30px auto;
  position: fixed;
  right: 0;
  top: 40px;
  opacity: 0;

  @media (max-width: 768px) {
    display: none;
  }

  &__tooltip {
    @include tooltip(true)
  }
}
</style>