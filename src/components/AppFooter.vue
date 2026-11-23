<template>
  <footer class="footer-container">
    <p>&copy; {{ year }} Puzant Bakjejian <span class="separator">·</span> Technical Consultant</p>
  </footer>
</template>

<script>
export default {
  name: 'AppFooter',
  data() {
    return {
      year: new Date().getFullYear()
    }
  }
}
</script>

<style scoped lang="scss">
@import '@/assets/styles/variables';

.footer-container {
  padding: 28px 16px;
  margin: 0 auto;
  color: rgba($primaryColor, 0.75);
  text-align: center;
  font-size: 12px;
  letter-spacing: 0.04em;

  p {
    margin: 0;
  }

  .separator {
    margin: 0 8px;
    color: $orange;
    opacity: 0.85;
  }
}
</style>
