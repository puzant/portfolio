<template>
  <div class="parentContainer">
    <div class="sidebarContainer">
      <img class="profileImage" src="@/assets/profile-image.webp" alt="">

      <img class="shape1" src="@/assets/icons/shape-1.svg" alt="shape 1">
      <img class="shape2" src="@/assets/icons/shape-2.svg" alt="shape 2">
      <img class="shape4" src="@/assets/icons/shape-4.svg" alt="shape 4">

      <div class="intro">
        <div>Puzant Bakjejian</div>
        <div>Full Stack Engineer with a flair for crafting innovative and impactful digital experiences.</div>
      </div>

      <div class="socialMediaLinks">
        <a href="https://x.com/puzantBakjejian"><img src="@/assets/icons/x-logo.svg" alt="email"></a>
        <a target="_blank" href="https://github.com/puzant"><img src="@/assets/icons/github-logo.svg" alt="github"></a>
        <a target="_blank" href="https://www.instagram.com/puzantbakjejian/"><img src="@/assets/icons/instagram-logo.svg" alt="instagram"></a>
        <a target="_blank" href="https://www.linkedin.com/in/puzant-b-006426108/"><img src="@/assets/icons/linkedin-logo.svg" alt="linkedin"></a>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'SideBar'
}
</script>

<style scoped lang="scss">
@import '@/assets/styles/variables';

.parentContainer {
  position: sticky;
  top: 40px;
  opacity: 0;
  @media (max-width: 768px) {
    position: static;
  }

  .sidebarContainer {
    background-color: $white;
    padding: 30px;
    width: 344px;
    height: fit-content;
    border-radius: 12px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 30px;
    position: relative;

    @media (max-width: 768px) {
      width: 100%;
      gap: 15px;
    }

    .profileImage {
      margin: 20px 0;
      width: 240px;
      height: 284px;
      object-fit: cover;
      border-radius: 12px;

      @media (max-width: 768px) {
        height: 210px;
      }

    }

    .shape1 {
      position: absolute;
      top: 0;
      left: 0;
      width: 65px;
      border-top-left-radius: 12px;
    }
  
    .shape2 {
      position: absolute;
      bottom: 0;
      right: 0;
      width: 65px;
      border-bottom-right-radius: 12px;
    }

    .shape4 {
      position: absolute;
  top: 92%;
  left: 2%;
  width: 70px;
  transform: translateX(-50%);
  @media (max-width: 768px) {
        width: 55px;
      }
    }

    .intro {
      text-align: center;
      display: flex;
      flex-direction: column;
      gap: 8px;

      div:first-child {
        font-size: 35px;
        font-size: clamp(24px, 6vw, 35px);
        font-weight: bold;
      }

      div:last-child {
        color: #6a6b6e;
        font-size: 18px;
      }
    }

    .socialMediaLinks {
      width: fit-content;
      display: flex;
      align-items: center;
      gap: 20px;
      // margin: 10px 0;

      img {
        cursor: pointer;
        transition: transform 0.3s;
        &:hover {
          transform: translateY(-8px);
        }
      }
    }

  }
}
</style>