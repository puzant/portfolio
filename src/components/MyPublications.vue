<template>
  <div id="stories" class="container">
    <div class="title">
      <p>RECENT</p>
      <p>PUBLICATIONS</p>
    </div>

    <div class="publications-container">
      <a class="story" v-for="publication in formattedPublications" :key="publication._id" :href="publication.link" target="_blank">
        <div class="title-container">
          <p>{{ publication.title }}</p>
          <img class="arrow" src="@/assets/icons/arrow-up-right.svg" alt="arrow up right">
        </div>

        <p>{{ publication.preview }}</p>

        <div>
          <p>{{ publication.formattedDate }}</p>
          <p>{{ publication.duration }} min read</p>
        </div>
      </a>
    </div>

  </div>
</template>

<script setup>
import { defineProps, computed } from 'vue'

const props = defineProps({
  publications: Array
})

const formattedPublications = computed(() => {
  return props.publications.map(publication => {
    const date = new Date(publication.publishedDate);
    const formattedDate = date.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric"
    });
    
    return { ...publication, formattedDate }
  })
})
</script>

<style scoped lang="scss">
@import '@/assets/styles/variables';

.container {
  opacity: 0;
  .title {
    @include sectionTitle;
  }

  .publications-container {
    display: flex;
    flex-direction: column;
    margin: 10px 0;
    
    @media (min-width: 768px) {
      margin: 20px 0;
    }

    .story {
      text-decoration: none;
      display: flex;
      flex-direction: column;
      border-radius: 16px;
      transition: 0.3s ease, box-shadow 0.3s ease;
      cursor: pointer;
      border: 1px solid transparent;
      padding: 20px 10px;
      
      @media (min-width: 768px) {
        padding: 30px 15px;
      }

      @include liftEffect;

      .title-container {
        margin: 10px 0;
        display: flex;
        justify-content: space-between;
        align-items: start;

        p {
          color: $white;
          font-size: clamp(20px, 6vw, 26px);
        }
      }

      p {
        color: $primaryColor;
      }

      div {
        margin: 20px 0;
        display: flex;
        justify-content: space-between;
      }

    }

  }
}
</style>