<template>
  <div class="parent-container">
    <div class="sidebar-container">
      <img class="profile-image" src="@/assets/profile-image-2.webp" alt="">

      <img class="shape1" src="@/assets/icons/shape-1.svg" alt="shape 1">
      <img class="shape2" src="@/assets/icons/shape-2.svg" alt="shape 2">
      <img class="shape4" src="@/assets/icons/shape-4.svg" alt="shape 4">

      <div class="intro">
        <div>Puzant Bakjejian</div>
        <div>Full Stack Engineer & Traveler, building immersive digital experiences while chasing new adventures</div>
      </div>

      <div class="social-media-links">
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

.parent-container {
  position: sticky;
  top: 40px;
  opacity: 0;
  @media (max-width: 768px) {
    position: static;
  }

  .sidebar-container {
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

    .profile-image {
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

    .social-media-links {
      width: fit-content;
      display: flex;
      align-items: center;
      gap: 20px;

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