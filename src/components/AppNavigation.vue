<template>
  <div class="navigation" id="navbar">
    
    <a v-for="nav in navigation" :href="nav.href" :key="nav.name">
      <div class="tooltip">
        <img :src="nav.icon" alt="navigation icon">
        <div class="tooltip-text">{{ nav.name }}</div>
      </div>
    </a>
  </div>
</template>

<script>
export default {
  name: 'AppNavigation',
  data() {
    return {
      navigation: [
        {href: '#home', name: 'Home', icon: require('@/assets/icons/home-icon.svg')},
        {href: '#projects', name: 'Projects', icon: require('@/assets/icons/project-icon.svg')},
        {href: '#skills', name: 'Skills', icon: require('@/assets/icons/skill-icon.svg')},
        {href: '#stories', name: 'Publications', icon: require('@/assets/icons/write-icon.svg')},
        {href: '#contact', name: 'Contact', icon: require('@/assets/icons/contact-icon.svg')}
      ]
    }
  }
}

</script>
<style scoped lang="scss">
@import '@/assets/styles/variables';

.navigation {
  background-color: $secondaryBackgroundColor;
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  border-radius: 14px;
  width: 300px;
  margin: 30px auto;

  .tooltip {
    @include tooltip
  }
}
</style>