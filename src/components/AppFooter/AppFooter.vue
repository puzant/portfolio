<template>
  <div class="footerContainer">
    <div>
      <span>Made with </span>
      <img src="@/assets/icons/heart-icon.svg" alt="">
    </div>

    <div>
      <span>| Powered By </span>
      <img src="@/assets/icons/vue-logo.svg" alt="">
    </div>
  </div>
</template>

<style scoped lang="scss">
@import '@/assets/styles/variables';

.footerContainer {
  justify-content: center;
  padding: 10px;
  margin: 0 auto;
  position: static;
  bottom: 0;
  color: $primaryColor;
  display: flex;
  font-size: clamp(14px, 4vw, 24px);
  gap: 10px;
}
</style>