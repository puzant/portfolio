<template>
  <div id="stories" class="container">
    <div class="title">
      <p>RECENT</p>
      <p>PUBLICATIONS</p>
    </div>

    <div class="publicationsContainer">
      <a class="story" v-for="publication in $publications" :key="publication" :href="publication.link" target="_blank">
        <div class="titleContainer">
          <p>{{ publication.title }}</p>
          <img class="arrow" src="@/assets/icons/arrow-up-right.svg" alt="arrow up right">
        </div>

        <p>{{ publication.preview }}</p>

        <div>
          <p>{{ publication.publishedDate }}</p>
          <p>{{ publication.duration }} min read</p>
        </div>
      </a>
    </div>

  </div>
</template>

<script>
export default {
  name: 'MyPublications',
  data() {
    return {
      userId: null,
      error: null
    }
  },
}
</script>

<style scoped lang="scss">
@import '@/assets/styles/variables';

.container {
  opacity: 0;
  .title {
    @include sectionTitle;
  }

  .publicationsContainer {
    display: flex;
    flex-direction: column;
    margin: 20px 0;
    
    @media (max-width: 768px) {
      margin: 10px 0;
    }

    .story {
      text-decoration: none;
      display: flex;
      flex-direction: column;
      border-radius: 16px;
      transition: 0.3s ease, box-shadow 0.3s ease;
      padding: 30px 15px;
      cursor: pointer;
      border: 1px solid transparent;
      
      @media (max-width: 768px) {
        padding: 20px 10px;
      }

      @include liftEffect;

      .titleContainer {
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