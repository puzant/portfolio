<template>
  <div class="container" id="about">
    <h1 class="visually-hidden">Puzant Bakjejian — Tech Consultant &amp; Full Stack Engineer</h1>

    <div class="hero-layout">
      <div class="hero-layout__content">
        <div class="identity">
          <img class="identity__avatar" src="@/assets/profile-image-2.webp" alt="Puzant Bakjejian">
          <div class="identity__text">
            <p class="identity__name">Puzant Bakjejian</p>
            <p class="identity__role">Technical Consultant · Full Stack Engineer</p>
          </div>
          <div class="identity__socials">
            <a href="https://www.linkedin.com/in/puzant-b-006426108/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <img src="@/assets/icons/linkedin-logo.svg" alt="">
            </a>
            <a href="https://github.com/puzant" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <img src="@/assets/icons/github-logo.svg" alt="">
            </a>
            <a href="https://x.com/puzantBakjejian" target="_blank" rel="noopener noreferrer" aria-label="X">
              <img src="@/assets/icons/x-logo.svg" alt="">
            </a>
            <a href="https://www.instagram.com/puzantbakjejian/?hl=en" target="_blank" rel="noopener noreferrer" aria-label="X">
              <img src="@/assets/icons/instagram-logo.svg" alt="">
            </a>
          </div>
        </div>

        <p class="container__eyebrow">Full stack engineer · Architecture &amp; delivery advisor</p>

        <div class="container__title">
          <p>TECHNICAL</p>
          <p>CONSULTANT</p>
        </div>

        <p class="container__intro">
          I help founders and product teams make confident technical decisions — from untangling
          legacy systems to scaling architecture and shipping products that last. Six years of
          hands-on engineering across React, Vue, PHP and Node.js.
        </p>

        <div class="actions">
          <a class="cta" href="#contact">
            <span>Book a discovery call</span>
            <span aria-hidden="true">→</span>
          </a>

          <div class="stats">
            <div class="stat">
              <span class="stat__value">6+</span>
              <span class="stat__label">YEARS OF<br>EXPERIENCE</span>
            </div>
            <div class="stat">
              <span class="stat__value">20+</span>
              <span class="stat__label">PROJECTS<br>COMPLETED</span>
            </div>
          </div>
        </div>
      </div>

      <div class="hero-layout__visual">
        <HeroIllustration />
      </div>
    </div>
  </div>
</template>

<script setup>
import HeroIllustration from '@/components/HeroIllustration.vue'
</script>

<style scoped lang="scss">
@import '@/assets/styles/variables';

.container {
  opacity: 0;
}

.hero-layout {
  display: grid;
  grid-template-columns: 1fr;
  gap: 40px;
  align-items: center;

  @media (min-width: 1024px) {
    grid-template-columns: minmax(0, 1fr) minmax(0, 460px);
    gap: 56px;
  }

  &__visual {
    display: none;

    @media (min-width: 1024px) {
      display: block;
    }
  }
}

.identity {
  display: flex;
  align-items: center;
  gap: 14px;
  margin-bottom: 28px;
  flex-wrap: wrap;

  &__avatar {
    width: 56px;
    height: 56px;
    border-radius: 50%;
    object-fit: cover;
    border: 2px solid #2a2726;
    flex-shrink: 0;

    @media (min-width: 768px) {
      width: 72px;
      height: 72px;
    }
  }

  &__text {
    min-width: 0;
  }

  &__name {
    color: $white;
    font-size: 18px;
    font-weight: 700;
    line-height: 1.2;

    @media (min-width: 768px) {
      font-size: 20px;
    }
  }

  &__role {
    color: $primaryColor;
    font-size: 14px;
    margin-top: 4px;
    line-height: 1.4;
  }

  &__socials {
    display: flex;
    align-items: center;
    gap: 10px;
    margin-left: auto;

    @media (max-width: 640px) {
      width: 100%;
      margin-left: 0;
    }

    a {
      width: 36px;
      height: 36px;
      border-radius: 10px;
      background-color: $secondaryBackgroundColor;
      border: 1px solid $secondaryColor;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      transition: transform 0.2s ease, border-color 0.2s ease;

      &:hover {
        transform: translateY(-2px);
        border-color: $orange;
      }
    }

    img {
      width: 18px;
      height: 18px;
    }
  }
}

.container__eyebrow {
  color: $orange;
  font-size: clamp(13px, 3vw, 14px);
  letter-spacing: 0.08em;
  text-transform: uppercase;
  font-weight: 600;
  margin-bottom: 16px;
}

.container__title {
  @include sectionTitle;
  margin-bottom: 24px;
}

.container__intro {
  color: $primaryColor;
  font-size: 17px;
  line-height: 1.7;
  max-width: 640px;
  margin: 0 0 32px;
}

.actions {
  display: flex;
  align-items: center;
  gap: 28px;
  flex-wrap: wrap;
}

.cta {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  background-color: $orangeDeep;
  color: $white;
  padding: 14px 20px;
  border-radius: 10px;
  font-weight: 700;
  font-size: 15px;
  text-decoration: none;
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 20px rgba(244, 108, 56, 0.25);
  }
}

.stats {
  display: flex;
  gap: 32px;
}

.stat {
  display: flex;
  flex-direction: column;

  &__value {
    color: $white;
    font-size: clamp(40px, 6vw, 56px);
    font-weight: 800;
    line-height: 1;
  }

  &__label {
    color: $primaryColor;
    font-size: 12px;
    letter-spacing: 0.08em;
    line-height: 1.4;
    margin-top: 6px;
  }
}
</style>
