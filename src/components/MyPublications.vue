<template>
  <div id="stories" class="container">
    <div class="title">
      <p>RECENT</p>
      <p>PUBLICATIONS</p>
    </div>

    <div class="publicationsContainer">
      <a class="story" v-for="story in stories" :key="story" :href="story.link" target="_blank">
        <div class="titleContainer">
          <p>{{ story.title }}</p>
          <img class="arrow" src="@/assets/icons/arrow-up-right.svg" alt="arrow up right">
        </div>

        <p>{{ story.preview }}</p>

        <div>
          <p>{{ story.publishedDate }}</p>
          <p>{{ story.duration }} min read</p>
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
      stories: [
        {
          title: 'Efficient Data Fetching and Mutation in React with Generic Hooks and HOCs',
          preview: 'In the ever-evolving landscape of web development, one constant remains: the need to interact with APIs. Whether you’re building web…',
          publishedDate: 'Sep 5, 2023',
          duration: '4',
          link: 'https://medium.com/@puzant24/efficient-data-fetching-and-mutation-in-react-with-generic-hooks-and-hocs-37728b444ac8'
        },
        {
          title: 'Building A Simple Images Carousel With ReactJs',
          preview: 'Carousel allows multiple image & videos to be displayed in a nice & interactive way',
          publishedDate: 'Feb 3, 2021',
          duration: '4',
          link: 'https://medium.com/@puzant24/building-a-simple-images-carousel-with-reactjs-377256bedc61'
        },
        {
          title: 'Infinite Scroll With ReactJs & Redux',
          preview: 'Infinite scroll has been widely used in today’s web & mobile apps, it simply loads data as you scroll down the page, this eliminated the…',
          publishedDate: 'Jul 8, 2020',
          duration: '3',
          link: 'https://medium.com/@puzant24/infinite-scroll-with-reactjs-redux-23bccea01dd0'
        }
      ],
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