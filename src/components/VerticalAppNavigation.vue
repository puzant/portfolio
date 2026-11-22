<template>
  <nav class="vertical-navigation" id="verticalNavigation" aria-label="Section navigation">
    <a
      v-for="nav in $verticalNavigationLinks"
      :key="nav.name"
      :href="nav.href"
      class="vertical-navigation__item"
      :class="{ 'vertical-navigation__item--active': viewedSection === nav.href }"
      :aria-label="nav.name"
    >
      <img :src="viewedSection === nav.href ? nav.activeIcon : nav.icon" alt="" aria-hidden="true">
      <span class="vertical-navigation__label">{{ nav.name }}</span>
    </a>
  </nav>
</template>

<script setup>
import { defineProps } from 'vue'
  defineProps({ viewedSection: String })
</script>

<style scoped lang="scss">
@import '@/assets/styles/variables';

.vertical-navigation {
  z-index: 1000;
  position: fixed;
  right: 0;
  top: 40px;
  display: flex;
  flex-direction: column;
  gap: 4px;
  padding: 12px 10px;
  background-color: $secondaryBackgroundColor;
  border-top-left-radius: 14px;
  border-bottom-left-radius: 14px;
  opacity: 0;
  transition: padding 0.28s ease, box-shadow 0.28s ease;

  @media (max-width: 768px) {
    display: none;
  }

  &:hover {
    padding: 12px 14px 12px 12px;
    box-shadow: -8px 8px 24px rgba(0, 0, 0, 0.25);
  }

  &__item {
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 8px 10px;
    border-radius: 10px;
    color: $primaryColor;
    transition: background-color 0.2s ease;

    img {
      height: 20px;
      width: 20px;
      object-fit: contain;
      flex-shrink: 0;
    }

    &:hover {
      background-color: rgba(255, 255, 255, 0.04);
    }

    &--active .vertical-navigation__label {
      color: $orange;
    }
  }

  &__label {
    font-size: 13px;
    font-weight: 500;
    white-space: nowrap;
    max-width: 0;
    opacity: 0;
    overflow: hidden;
    transform: translateX(-6px);
    margin-left: 0;
    color: $primaryColor;
    transition:
      max-width 0.28s cubic-bezier(0.4, 0, 0.2, 1),
      opacity 0.2s ease,
      transform 0.28s cubic-bezier(0.4, 0, 0.2, 1),
      margin-left 0.28s cubic-bezier(0.4, 0, 0.2, 1),
      color 0.2s ease;
  }

  &:hover &__label {
    max-width: 160px;
    opacity: 1;
    transform: translateX(0);
    margin-left: 10px;
  }
}
</style>