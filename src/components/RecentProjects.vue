<template>
  <div id="projects" class="container">
    <div class="title">
      <p>RECENT</p>
      <p>PROJECTS</p>
    </div>

    <div class="projects-container">
      <a class="project" v-for="project in projects.filter(p => p.active)" :key="project._id || project.name" :href="project.link" target="_blank">
        <div class="project-preview">
          <img :src="project.preview" :alt="project.description">
        </div>

        <div class="project-info">
          <div class="project-info__head">
            <p>{{ project.name }}</p>
            <img class="arrow" src="@/assets/icons/arrow-up-right.svg" alt="" aria-hidden="true">
          </div>
          <p>{{ project.description }}</p>
        </div>
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
    display: grid;
    grid-template-columns: 1fr;
    gap: 16px;
    margin: 10px 0;

    @media (min-width: 768px) {
      grid-template-columns: repeat(2, 1fr);
      gap: 24px;
      margin: 30px 0;
    }

    .project {
      display: flex;
      flex-direction: column;
      gap: 16px;
      color: $white;
      cursor: pointer;
      border-radius: 16px;
      transition: 0.3s ease, box-shadow 0.3s ease;
      padding: 16px;
      text-decoration: none;
      border: 1px solid transparent;

      @include liftEffect;

      .project-preview {
        aspect-ratio: 16 / 9;
        overflow: hidden;
        width: 100%;
        border-radius: 8px;

        img {
          height: 100%;
          width: 100%;
          object-fit: cover;
          display: block;
        }
      }

      .project-info {
        display: flex;
        flex-direction: column;
        gap: 6px;

        &__head {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          gap: 12px;

          p {
            font-size: 22px;
            line-height: 1.2;
          }

          .arrow {
            width: 18px;
            height: 18px;
            flex-shrink: 0;
            margin-top: 2px;
          }
        }

        > p {
          color: $primaryColor;
          line-height: 1.5;
        }
      }
    }
  }
}
</style>