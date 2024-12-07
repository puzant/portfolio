<template>
  <div class="navigation">
    <img src="@/assets/home-icon.svg" alt="">
    <img src="@/assets/project-icon.svg" alt="">
    <img src="@/assets/suitcase-icon.svg" alt="">
    <img src="@/assets/skill-icon.svg" alt="">
    <img src="@/assets/write-icon.svg" alt="">
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

  img {
    cursor: pointer;
  }
}
</style>