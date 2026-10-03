<template>
  <div id="caseStudies" class="container">
    <div class="title">
      <p>CASE</p>
      <p>STUDIES</p>
    </div>

    <div class="case-studies-container">
      <a class="case-study" v-for="study in sortedCaseStudies" :key="study.id" :href="study.link" target="_blank" rel="noopener noreferrer">
        <div class="case-study__preview">
          <img :src="study.cover" :alt="study.title" loading="lazy">
        </div>

        <div class="case-study__info">
          <p class="case-study__name">{{ study.title }}</p>
          <p class="case-study__description">{{ study.description }}</p>

          <div class="case-study__footer">
            <p>{{ formattedDate(study.published) }}</p>
            <img src="@/assets/icons/arrow-up-right.svg" alt="open case study">
          </div>
        </div>
      </a>
    </div>
  </div>
</template>

<script setup>
import { defineProps, computed } from 'vue'

const props = defineProps({
  caseStudies: Array
})

const sortedCaseStudies = computed(() => {
  return [...(props.caseStudies ?? [])].sort((a, b) => a.order - b.order)
})

function formattedDate(date) {
  // notion sends a plain YYYY-MM-DD, without a time component it gets parsed as utc
  // and renders a day early in negative offset timezones
  return new Date(`${date}T00:00:00`).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric'
  })
}
</script>

<style scoped lang="scss">
@import '@/assets/styles/variables';

.container {
  opacity: 0;

  .title {
    @include sectionTitle;
  }

  .case-studies-container {
    display: flex;
    flex-direction: column;
    gap: 15px;
    margin: 10px 0;

    @media (min-width: 768px) {
      margin: 20px 0;
    }

    .case-study {
      display: flex;
      flex-direction: column;
      border-radius: 16px;
      transition: 0.3s ease, box-shadow 0.3s ease;
      cursor: pointer;
      padding: 10px;
      border: 1px solid transparent;
      text-decoration: none;
      color: $white;

      @include liftEffect;

      &:hover {
        // liftEffect swaps the border in on hover which resizes the card and
        // nudges everything below it, keep the width fixed and fake the accent bar instead
        border-left-width: 1px;
        box-shadow: 0 8px 15px #00000033, inset 4px 0 0 $orange;
      }

      &__preview {
        overflow: hidden;
        border-radius: 8px;
        height: 140px;
        background-color: $secondaryBackgroundColor;

        @media (min-width: 768px) {
          height: 180px;
        }

        img {
          display: block;
          width: 100%;
          height: 100%;
          object-fit: cover ;
        }
      }

      &__info {
        display: flex;
        flex-direction: column;
        gap: 6px;
        padding-top: 12px;
      }

      &__name {
        font-size: 20px;
      }

      &__description {
        color: $primaryColor;
        line-height: 1.5;
        font-size: 15px;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        overflow: hidden;
      }

      &__footer {
        display: flex;
        align-items: center;
        justify-content: space-between;
        color: $primaryColor;
        font-size: 13px;

        img {
          width: 16px;
          transition: transform 0.3s;
        }
      }

      &:hover &__footer img {
        transform: translateX(5px);
      }
    }
  }
}
</style>