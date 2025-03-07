<template>
  <div class="footer-container">
    <div>
      <span>Made with </span>
      <img src="@/assets/icons/heart-icon.svg" alt="heart icon">
    </div>

    <div>
      <span>| Powered By </span>
      <img src="@/assets/icons/vue-logo.svg" alt="vuejs icon">
    </div>
  </div>
</template>

<style scoped lang="scss">
@import '@/assets/styles/variables';

.footer-container {
  justify-content: center;
  padding: 10px;
  margin: 0 auto;
  position: static;
  bottom: 0;
  color: $primaryColor;
  display: flex;
  font-size: clamp(14px, 4vw, 22px);
  gap: 10px;
}
</style>