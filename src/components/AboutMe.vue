<template>
  <div class="container" id="about">
    <div class="container__title">
      <p>FULL STACK</p>
      <p>ENGINEER</p>
    </div>

    <div class="container__intro">
      👋 With over five years of professional experience in software development, 
      I possess expertise in a range of JavaScript frameworks, including React, Vue, and Angular. 
      My proficiency extends beyond the client-side as I also have a strong grasp of back-end technologies such as Node.js, MySQL, and MongoDB.
    </div>

    <div class="stats-container">
      <div class="stats">
        <div>
          <span>+6</span>
          <span class="line-break">YEARS OF</span>
          <span class="line-break">EXPERIENCE</span>
        </div>

        <div>
          <span>+4</span>
          <span class="line-break">PROJECTS</span>
          <span class="line-break">COMPLETED</span>
        </div>
      </div>

      <div class="talkBtn">
        <img src="@/assets/icons/stack-icon.svg" alt="stack icon">
        
        <a href="#contact">
          <span class="line-break">Let’s build something</span>
          
          <div class="work-together-box">
            <span>extraordinary together!</span>
            <img src="@/assets/icons/arrow-down-icon.svg" alt="arrow down icon">
          </div>
        </a>
      </div>
    </div>

  </div>
</template>

<style scoped lang="scss">
@import '@/assets/styles/variables';

.container {
  opacity: 0;
  &__title {
    @include sectionTitle;
  }

  &__intro {
    color: $primaryColor;
    line-height: 1.6;
    width: 100%;
    margin: 10px 0;
    
    @media (min-width: 768px) {
      margin: 30px 0;
    }
  }

  .stats-container {
    @include responsive-flex-container;
    margin: 10px 0;

    @media (min-width: 768px) {
      margin: 60px 0;
    }

    .line-break {
      display: block;
      line-height: 1.4;
    }

    .stats {
      display: flex;
      gap: 30px;
    
      div {
        display: flex;
        flex-direction: column;
        color: $white;
      
        span:first-child {
          color: $white;
          font-size: clamp(40px, 6vw, 70px);
        }
      
        span {
          color: $primaryColor;
        }
      }
    }

    .line-break {
      display: block;
    }

    .talkBtn {
      background-image: url('@/assets/icons/shape-3.svg');
      padding: 20px;
      margin: 20px 0;
      border-radius: 12px;
      font-size: 20px;
      background-color: $orange;
      color: $white;
      display: flex;
      flex-direction: column;
      gap: 10px;
      align-items: start;
      cursor: pointer;
      width: 100%;
      
      @media (min-width: 768px) {
        width: fit-content;
      }

      a {
        text-decoration: none;
        color: $white;

        .work-together-box {
          @include responsive-flex-container;

          img:last-child {
            border: 1px solid $white;
            border-radius: 4px;
            transition: transform 0.3s;
          }
        }
      }

      &:hover img:last-child {
        transform: translateY(8px);
      } 
    }
  }
}
</style>