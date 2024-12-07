<template>
  <div class="container">
    <div class="title">
      <p>FULL STACK</p>
      <p>ENGINEER</p>
    </div>

    <div class="intro">
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
          <span>+5</span>
          <span class="line-break">PROJECTS</span>
          <span class="line-break">COMPLETED</span>
        </div>
      </div>

      <div class="talkBtn">
        <img src="@/assets/stack-icon.svg" alt="">
        
        <div>
          <span class="line-break">Let’s build something</span>
          
          <div class="flex-container">
            <span>extraordinary together!</span>
            <img src="@/assets/arrow-down-icon.svg" alt="">
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>

export default {
  name: 'AboutMe'
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

  .intro {
    color: #998f8f;
    line-height: 1.6;
    margin: 30px 0;
    
    
    @media (max-width: 768px) {
      width: 100%;
      margin: 10px 0;
    }
  }

  .line-break {
    display: block;
    line-height: 1.4;
  }

  .stats-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 20px;
    margin: 60px 0;

    @media (max-width: 768px) {
      margin: 10px 0;
    }

    .stats {
      display: flex;
      gap: 30px;;
    
      div {
        display: flex;
        flex-direction: column;
        color: var(--white);
      
        span:first-child {
          color: var(--white);
          font-size: clamp(40px, 6vw, 70px);
        }
      
        span {
          color: #998f8f;
        }
      }
    }

    .line-break {
      display: block;
    }

    .talkBtn {
      background-image: url('@/assets/shape-3.svg');
      padding: 20px;
      margin: 20px 0;
      border-radius: 12px;
      width: fit-content;
      font-size: 20px;
      background-color: #f46c38;
      color: var(--white);
      display: flex;
      flex-direction: column;
      gap: 10px;
      align-items: start;
      cursor: pointer;

      img:last-child {
        border: 1px solid var(--white);
        border-radius: 4px;
        transition: transform 0.3s;
      }

      &:hover img:last-child {
        transform: translateY(8px);
      } 
    }
  }

  .flex-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 20px;
  }
}
</style>