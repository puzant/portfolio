<template>
  <div class="verticalNavigation" id="verticalNavigation">
    
    <a v-for="nav in navigation" :href="nav.href" :key="nav.name">
      <div class="tooltip">
        <img :src="viewedSection === nav.href ? nav.activeIcon : nav.icon" alt="navigation icon">
        <div class="tooltip-text">{{ nav.name }}</div>
      </div>
    </a>
  </div>
</template>

<script setup>
import { defineProps } from 'vue'
  const navigation = [
    {href: '#about', name: 'Home', icon: require('@/assets/icons/home-icon.svg'), activeIcon: require('@/assets/icons/home-active-icon.svg')},
    {href: '#projects', name: 'Projects', icon: require('@/assets/icons/project-icon.svg'), activeIcon: require('@/assets/icons/project-active-icon.svg')},
    {href: '#skills', name: 'Skills', icon: require('@/assets/icons/skill-icon.svg'), activeIcon: require('@/assets/icons/skill-active-icon.svg')},
    {href: '#stories', name: 'Publications', icon: require('@/assets/icons/write-icon.svg'), activeIcon: require('@/assets/icons/write-active-icon.svg')},
    {href: '#contact', name: 'Contact', icon: require('@/assets/icons/contact-icon.svg'), activeIcon: require('@/assets/icons/active-contact-icon.svg')}
  ]

  defineProps({ viewedSection: String })
</script>

<style scoped lang="scss">
@import '@/assets/styles/variables';

.verticalNavigation {
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

  .tooltip {
    @include tooltip(true)
  }
}
</style>