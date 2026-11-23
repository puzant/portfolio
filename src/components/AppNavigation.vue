<template>
  <nav class="navigation" id="navbar" aria-label="Primary navigation">
    <a v-for="nav in navigation" :href="nav.href" :key="nav.name" class="navigation__item">
      <img :src="nav.icon" alt="" aria-hidden="true">
      <span>{{ nav.name }}</span>
    </a>
  </nav>
</template>

<script>
export default {
  name: 'AppNavigation',
  data() {
    return {
      navigation: [
        { href: '#about', name: 'Home', icon: require('@/assets/icons/home-icon.svg') },
        { href: '#services', name: 'Services', icon: require('@/assets/icons/services-icon.svg') },
        { href: '#caseStudies', name: 'Case Studies', icon: require('@/assets/icons/case-study-icon.svg') },
        { href: '#projects', name: 'Projects', icon: require('@/assets/icons/project-icon.svg') },
        { href: '#stories', name: 'Publications', icon: require('@/assets/icons/write-icon.svg') },
        { href: '#contact', name: 'Contact', icon: require('@/assets/icons/contact-icon.svg') },
      ]
    }
  }
}
</script>

<style scoped lang="scss">
@import '@/assets/styles/variables';

.navigation {
  background-color: $secondaryBackgroundColor;
  padding: 8px 14px;
  display: flex;
  justify-content: space-between;
  gap: 8px;
  border-radius: 14px;
  width: min(560px, calc(100% - 24px));
  margin: 24px auto;

  &__item {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 4px;
    text-decoration: none;
    color: $primaryColor;
    min-width: 0;
    flex: 1;
    transition: color 0.2s ease, transform 0.2s ease;

    img {
      height: 18px;
      width: 18px;
      object-fit: contain;
    }

    span {
      font-size: 10px;
      line-height: 1.2;
      text-align: center;
      white-space: nowrap;

      @media (max-width: 520px) {
        font-size: 9px;
      }
    }

    &:hover {
      color: $white;
      transform: translateY(-1px);
    }
  }
}
</style>
