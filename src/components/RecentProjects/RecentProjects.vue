<template>
  <div class="container">
    <div class="title">
      <p>RECENT</p>
      <p>PROJECTS</p>
    </div>

    <div class="projectsContainer">
      <a class="project" v-for="project in projects" :key="project" :href="project.link" target="_blank">
        
        <div class="innerContainer">
          <div class="projectPreview">
            <img :src="project.preview" alt="">
          </div>

          <div class="projectInfo">
            <p>{{ project.name }}</p>
            <p>{{ project.description }}</p>
          </div>
        </div>
      
        <img class="arrow" src="@/assets/arrow-up-right.svg" alt="">
      </a>
    </div>

  </div>
</template>

<script>
export default {
  name: 'RecentProjects',
  data() {
    return {
      projects: [
        {name: 'Locus', description: 'Real-Estate Management PLatform', preview: require('@/assets/project-1.png'), link: 'https://www.locus.eu/'},
        {name: 'TMDB Clone', description: 'Explore And Search Movies', preview: require('@/assets/project-2.png'), link: 'https://react-app-movies-tracker.netlify.app/'},
        {name: 'Puzant CV', description: 'Interactive Online CV', preview: require('@/assets/project-3.png'), link: 'https://puzant-cv.netlify.app/'},
        {name: 'Password Generator', description: 'Complex Password Generator', preview: require('@/assets/project-4.png'), link: 'https://complex-password-generator-app.netlify.app/'},
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

  .projectsContainer {
    display: flex;
    flex-direction: column;
    margin: 30px 0;

    @media (max-width: 768px) {
      margin: 10px 0;
    }
    
    .project {
      display: flex;
      align-items: center;
      justify-content: space-between;
      color: var(--white);
      cursor: pointer;
      border-radius: 16px;
      transition: 0.3s ease, box-shadow 0.3s ease;
      padding: 20px 8px;
      text-decoration: none;

      &:hover {
        transform: translateY(-5px);
        background-color: #1A1817;
        box-shadow: 0 8px 15px rgba(0, 0, 0, 0.2);
      }

      .innerContainer {
        display: flex;
        align-items: center;
        gap: 20px;
      }
      
      .projectPreview {
        aspect-ratio: .9649122807017544 / 1;
        overflow: hidden;
        width: 150px;
        height: 180px;

        @media (max-width: 768px) {
          width: 90px;
          height: 93px;
        }

        img {
          height: 100%;
          width: 100%;
          object-fit: cover;
          border-radius: 12px;
        }
      }

      .projectInfo {
        display: block;

        p:first-child {
          font-size: 24px;
        }
        p:last-child {
          color: #998f8f;
          margin: 5px 0;
        }
      }

      .arrow {
        align-self: flex-start;
      }
    }
  }
}
</style>