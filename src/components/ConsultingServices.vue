<template>
  <section class="container" id="services">
    <div class="title">
      <p>WHAT I</p>
      <p>OFFER</p>
    </div>

    <p class="intro">
      I work with founders and product teams at the point where technical decisions start
      affecting the business. Choose the engagement that fits — or just tell me what you're
      dealing with.
    </p>

    <div class="services">
      <article class="service" v-for="(service, index) in services" :key="service.title">
        <div class="service__head">
          <span class="service__number">{{ String(index + 1).padStart(2, '0') }}</span>
          <h3>{{ service.title }}</h3>
        </div>

        <p class="service__description">{{ service.description }}</p>

        <div class="service__fit">
          <span class="service__label">A good fit when</span>
          <ul>
            <li v-for="item in service.bestFor" :key="item">{{ item }}</li>
          </ul>
        </div>

        <a class="service__cta" href="#contact" :aria-label="`Ask about ${service.title}`">
          Talk to me about this <span aria-hidden="true">→</span>
        </a>
      </article>
    </div>
  </section>
</template>

<script setup>
const services = [
  {
    title: 'Technical Due Diligence',
    description: 'An outside-in review of your codebase, architecture and delivery process — the answer to "is this thing actually healthy?" before a funding round, acquisition or major hire.',
    bestFor: ['Raising investment or preparing an exit', 'Bringing in a new technical leader', 'Making a big platform bet']
  },
  {
    title: 'Architecture & Scaling Review',
    description: 'We find the real bottlenecks in your system and turn them into a pragmatic roadmap: what to fix now, what to defer, and what each decision is likely to cost.',
    bestFor: ['Performance or reliability problems', 'Traffic and team growth', 'Infrastructure costs climbing']
  },
  {
    title: 'Legacy Modernization',
    description: 'Untangle an aging stack and move it forward incrementally — no big-bang rewrite, no freezing product development while the plumbing gets fixed.',
    bestFor: ['Slow, risky releases', 'Fragile or poorly understood code', 'Dependencies nobody wants to touch']
  },
  {
    title: 'Fractional CTO & Team Mentorship',
    description: 'Senior technical direction a few days a week: hiring support, architecture decisions, code reviews, and a sounding board for engineers who need one.',
    bestFor: ['No senior technical leader yet', 'A team that needs direction, not more process', 'Making the step from startup to scale-up']
  }
]
</script>

<style scoped lang="scss">
@import '@/assets/styles/variables';

.container {
  opacity: 0;

  .title {
    @include sectionTitle;
  }

  .intro {
    color: $primaryColor;
    line-height: 1.6;
    max-width: 720px;
    margin: 20px 0 10px;

    @media (min-width: 768px) {
      margin: 30px 0 20px;
    }
  }

  .services {
    display: grid;
    grid-template-columns: 1fr;
    gap: 16px;
    margin-top: 24px;
    margin-bottom: 10px;

    @media (min-width: 768px) {
      grid-template-columns: repeat(2, 1fr);
      gap: 24px;
      margin-bottom: 30px;
    }
  }

  .service {
    background-color: $secondaryBackgroundColor;
    border: 1px solid $secondaryColor;
    border-radius: 16px;
    padding: 24px;
    display: flex;
    flex-direction: column;
    gap: 16px;
    transition: transform 0.3s ease, border-color 0.3s ease;

    &:hover {
      transform: translateY(-4px);
      border-color: $orange;
    }

    &__head {
      display: flex;
      align-items: baseline;
      gap: 12px;
    }

    &__number {
      color: $orange;
      font-weight: bold;
      font-size: 14px;
    }

    h3 {
      color: $white;
      font-size: clamp(20px, 4vw, 24px);
      line-height: 1.2;
    }

    &__description {
      color: $primaryColor;
      line-height: 1.6;
      font-size: 15px;
    }

    &__fit {
      .service__label {
        color: $white;
        font-size: 12px;
        text-transform: uppercase;
        letter-spacing: 0.08em;
      }

      ul {
        list-style: none;
        margin-top: 8px;
        display: flex;
        flex-direction: column;
        gap: 6px;
      }

      li {
        position: relative;
        padding-left: 16px;
        color: $primaryColor;
        font-size: 14px;
        line-height: 1.5;

        &::before {
          content: '';
          position: absolute;
          left: 0;
          top: 8px;
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background-color: $orange;
        }
      }
    }

    &__cta {
      margin-top: auto;
      color: $orange;
      text-decoration: none;
      font-size: 14px;
      font-weight: bold;

      &:hover,
      &:focus-visible {
        text-decoration: underline;
      }
    }
  }
}
</style>
