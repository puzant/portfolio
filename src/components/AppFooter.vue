<template>
  <footer class="footer-container">
    <div>
      <span>Made with </span>
      <img src="@/assets/icons/heart-icon.svg" alt="love">
    </div>

    <div>
      <span>| Powered By </span>
      <img src="@/assets/icons/vue-logo.svg" alt="Vue.js">
    </div>
  </footer>
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

  div {
    display: flex;
    align-items: center;
    gap: 8px;

    img {
      height: 20px;
    }
  }
}
</style>