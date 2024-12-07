<template>
  <div class="container">
    <div class="title">
      <p>TECH</p>
      <p>SKILLS</p>
    </div>

    <div class="skillsContainer">
      <div class="skill" v-for="tech in skills" :key="tech">
        <div class="skillIcon"><img :src="tech.icon" alt="" /></div>
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
        {name: 'React', icon: require('@/assets/react-logo.svg')},
        {name: 'Vue', icon: require('@/assets/vue-logo.svg')},
        {name: 'Tailwind', icon: require('@/assets/tailwind-logo.svg')},
        {name: 'NodeJs', icon: require('@/assets/nodejs-logo.svg')},
        {name: 'Mysql', icon: require('@/assets/mysql-logo.svg')},
        {name: 'Mongodb', icon: require('@/assets/mongodb-logo.svg')},
        {name: 'Typescript', icon: require('@/assets/typescript-logo.svg')},
        {name: 'Python', icon: require('@/assets/python-logo.svg')},
      ]
    }
  }
}
</script>

<style scoped lang="scss">
.container {
  .title {
    font-size: clamp(40px, 6vw, 90px);
    line-height: 1;
    
    font-weight: bold;
    p:first-child {
      color: #fff;
    }
    p:last-child {
      color: #b6b4bd33;
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
      color: var(--white);
      transition: 0.3s ease, box-shadow 0.3s ease;
      padding: 8px;
      border-radius: 16px;

      &:hover {
        background-color: #1A1817;
        box-shadow: 0 8px 15px rgba(0, 0, 0, 0.2);
      }

      .skillIcon {
        background-color: #fff;
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