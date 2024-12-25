<template>
  <div id="projects" class="container">
    <div class="title">
      <p>RECENT</p>
      <p>PROJECTS</p>
    </div>

    <div class="projectsContainer">
      <a class="project" v-for="project in projects" :key="project" :href="project.link" target="_blank">
        
        <div class="innerContainer">
          <div class="projectPreview">
            <img :src="project.preview" :alt="project.description">
          </div>

          <div class="projectInfo">
            <p>{{ project.name }}</p>
            <p>{{ project.description }}</p>
          </div>
        </div>

        <img class="arrow" src="@/assets/icons/arrow-up-right.svg" alt="arrrow up icon">
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
        {name: 'Locus', description: 'Real-Estate Management Platform', preview: require('@/assets/project-1.webp'), link: 'https://www.locus.eu/', tech: ['React', 'Tailwind', 'React Query', 'Formik']},
        {name: 'TMDB Clone', description: 'Explore And Search Movies', preview: require('@/assets/project-2.webp'), link: 'https://react-app-movies-tracker.netlify.app/', tech: ['React', 'Tailwind', 'React Query', 'TypeScript', ]},
        {name: 'Puzant CV', description: 'Interactive Online CV', preview: require('@/assets/project-3.webp'), link: 'https://puzant-cv.netlify.app/', tech: ['AlpineJs', 'JavaScript', 'HTML', 'CSS']},
        {name: 'Password Generator', description: 'Complex Password Generator', preview: require('@/assets/project-4.webp'), link: 'https://complex-password-generator-app.netlify.app/', tech: ['JavaScript', 'HTML', 'Tailwind']},
      ]
    }
  }
}
</script>

<style scoped lang="scss">
@import '@/assets/styles/variables';

.container {
  opacity: 0;
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
      color: $white;
      cursor: pointer;
      border-radius: 16px;
      transition: 0.3s ease, box-shadow 0.3s ease;
      padding: 20px 5px;
      text-decoration: none;

      @include liftEffect;

      .innerContainer {
        display: flex;
        align-items: center;
        gap: 20px;
        
        .projectPreview {
          aspect-ratio: .9649122807017544 / 1;
          overflow: hidden;
          width: 130px;
          height: 160px;

          @media (max-width: 768px) {
            width: 90px;
            height: 93px;
          }

          img {
            height: 100%;
            width: 100%;
            object-fit: cover;
            border-radius: 8px;
          }
        }

        .projectInfo {
          display: flex;
          flex-direction: column;
          gap: 3px;

          p:first-child {
            font-size: 24px;
          }

          p:nth-child(2) {
            color: $primaryColor;
          }
        }
      }
      .arrow {
        align-self: flex-start;
      }
    }
  }
}
</style>