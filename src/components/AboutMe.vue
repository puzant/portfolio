<template>
  <div class="container" id="about">
    <h1 class="visually-hidden">Puzant Bakjejian — Tech Consultant &amp; Full Stack Engineer</h1>
    <div class="container__title">
      <p>TECH</p>
      <p>CONSULTANT</p>
    </div>

    <p class="container__eyebrow">Full stack engineer · Architecture &amp; delivery advisor</p>

    <div class="container__intro">
      I help founders and product teams make confident technical decisions — from untangling
      legacy systems to scaling architecture and shipping products that last. Six years of
      hands-on engineering across React, Vue, PHP and Node.js.
    </div>

    <div class="stats-container">
      <div class="stats">
        <div>
          <span>6+</span>
          <span class="line-break">YEARS OF</span>
          <span class="line-break">EXPERIENCE</span>
        </div>

        <div>
          <span>20+</span>
          <span class="line-break">PROJECTS</span>
          <span class="line-break">COMPLETED</span>
        </div>
      </div>

      <div class="talkBtn">
        <img src="@/assets/icons/stack-icon.svg" alt="stack icon">
        
        <a href="#contact">
          <span class="line-break">Book a</span>
          
          <div class="work-together-box">
            <span>discovery call</span>
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

  &__eyebrow {
    color: $orange;
    font-size: clamp(13px, 3vw, 15px);
    letter-spacing: 0.05em;
    text-transform: uppercase;
    margin-top: 12px;
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
    margin: 20px 0;

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