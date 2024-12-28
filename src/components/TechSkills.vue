<template>
  <div id="skills" class="container">
    <div class="title">
      <p>TECH</p>
      <p>SKILLS</p>
    </div>

    <div class="skillsContainer">
      <div class="skill" v-for="skill in $skills" :key="skill">
        <div class="skillIcon"><img :src="skill.icon" alt="skills" /></div>
        <p>{{ skill.name }}</p>
      </div>
    </div>
  </div>
</template>


<style scoped lang="scss">
@import '@/assets/styles/variables';

.container {
  opacity: 0;
  .title {
    @include sectionTitle;
  }

  .skillsContainer {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 10px;
    margin: 30px 0;

    .skill {
      display: flex;
      align-items: center;
      gap: 10px;
      color: $white;
      transition: 0.3s ease, box-shadow 0.3s ease;
      padding: 8px;
      border-radius: 16px;

      &:hover {
        background-color: #1A1817;
        box-shadow: 0 8px 15px rgba(0, 0, 0, 0.2);
      }

      .skillIcon {
        background-color: $white;
        width: 60px;
        height: 60px;
        border-radius: 10px;
        padding: 8px;

        img {
          width: 100%;
          height: 100%;
          object-fit: contain
        }
      }
    }
  }
}
</style>