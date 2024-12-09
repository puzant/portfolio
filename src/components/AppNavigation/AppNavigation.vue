<template>
  <div class="navigation">
    
    <a v-for="nav in navigation" :href="nav.href" :key="nav.name">
      <div class="tooltip">
        <img :src="nav.icon" alt="">
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
    position: relative;
    display: inline-block;
    cursor: pointer;

    &:hover .tooltip-text {
    visibility: visible;
    opacity: 1;
  }

    .tooltip-text {
      visibility: hidden;
      background-color: $secondaryBackgroundColor;
      color: $white;
      text-align: center;
      padding: 7px 12px;
      border-radius: 12px;
      position: absolute;
      z-index: 1;
      top: 150%;
      left: 50%;
      transform: translateX(-50%);
      opacity: 0;
      transition: opacity 1s;
    }

  }
}
</style>