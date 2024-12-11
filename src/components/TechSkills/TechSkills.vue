<template>
  <div id="skills" class="container">
    <div class="title">
      <p>TECH</p>
      <p>SKILLS</p>
    </div>

    <div class="skillsContainer">
      <div class="skill" v-for="tech in skills" :key="tech">
        <div class="skillIcon"><img :src="tech.icon" alt="skills" /></div>
        <p>{{ tech.name }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TechSkills',
  data() {
    return {
      skills: [
        {name: 'React', icon: require('@/assets/icons/react-logo.svg')},
        {name: 'Vue', icon: require('@/assets/icons/vue-logo.svg')},
        {name: 'Tailwind', icon: require('@/assets/icons/tailwind-logo.svg')},
        {name: 'NodeJs', icon: require('@/assets/icons/nodejs-logo.svg')},
        {name: 'Mysql', icon: require('@/assets/icons/mysql-logo.svg')},
        {name: 'Mongodb', icon: require('@/assets/icons/mongodb-logo.svg')},
        {name: 'Typescript', icon: require('@/assets/icons/typescript-logo.svg')},
        {name: 'Python', icon: require('@/assets/icons/python-logo.svg')},
      ]
    }
  }
}
</script>

<style scoped lang="scss">
@import '@/assets/styles/variables';

.container {
  .title {
    font-size: clamp(40px, 6vw, 90px);
    line-height: 1;
    
    font-weight: bold;
    p:first-child {
      color: $white;
    }
    p:last-child {
      color: $secondaryColor;
    }
  }

  .skillsContainer {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 10px;
    margin: 30px 0;

    @media (max-width: 768px) {
      // grid-template-columns: 1fr;
    }

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