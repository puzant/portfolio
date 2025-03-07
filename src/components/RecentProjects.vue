<template>
  <div id="projects" class="container">
    <div class="title">
      <p>RECENT</p>
      <p>PROJECTS</p>
    </div>

    <div class="projects-container">
      <a class="project" v-for="project in projects" :key="project" :href="project.link" target="_blank">
        
        <div class="inner-container">
          <div class="project-preview">
            <img :src="project.preview" :alt="project.description">
          </div>

          <div class="project-info">
            <p>{{ project.name }}</p>
            <p>{{ project.description }}</p>
          </div>
        </div>

        <img class="arrow" src="@/assets/icons/arrow-up-right.svg" alt="arrrow up icon">
      </a>
    </div>

  </div>
</template>

<script setup>
import { defineProps } from 'vue'

defineProps({
  projects: Array
})
</script>

<style scoped lang="scss">
@import '@/assets/styles/variables';

.container {
  opacity: 0;
  .title {
    @include sectionTitle;
  }

  .projects-container {
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
      padding: 16px 15px;
      text-decoration: none;
      border: 1px solid transparent;

      @include liftEffect;

      .inner-container {
        display: flex;
        align-items: center;
        gap: 20px;
        
        .project-preview {
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

        .project-info {
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