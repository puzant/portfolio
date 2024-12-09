<template>
  <div class="navigation">
    <div class="tooltip">
      <img src="@/assets/home-icon.svg" alt="">
      <div class="tooltip-text">Home</div>
    </div>
    <div class="tooltip">
      <img src="@/assets/project-icon.svg" alt="">
      <div class="tooltip-text">Projects</div>
    </div>
    <div class="tooltip">
      <img src="@/assets/skill-icon.svg" alt="">
      <div class="tooltip-text">Skills</div>
    </div>
    <div class="tooltip">
      <img src="@/assets/write-icon.svg" alt="">
      <div class="tooltip-text">Publication</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AppNavigation'
}

</script>

<style scoped lang="scss">
.navigation {
  background-color: #1C1A19;
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
      background-color: #1C1A19;
      color: #fff;
      text-align: center;
      padding: 7px 12px;
      border-radius: 12px;
      position: absolute;
      z-index: 1;
      top: 150%;
      left: 50%;
      transform: translateX(-50%);
      opacity: 0;
      transition: opacity 0.3s;
    }

  }
}
</style>