<template>
  <div class="hero-illustration" aria-hidden="true">
    <svg viewBox="0 0 460 520" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="hero-glow" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(245 255) rotate(90) scale(190 190)">
          <stop stop-color="#F46C38" stop-opacity="0.22"/>
          <stop offset="1" stop-color="#F46C38" stop-opacity="0"/>
        </radialGradient>
        <linearGradient id="hero-line" x1="120" y1="120" x2="360" y2="380" gradientUnits="userSpaceOnUse">
          <stop stop-color="#F46C38" stop-opacity="0.55"/>
          <stop offset="1" stop-color="#F46C38" stop-opacity="0.05"/>
        </linearGradient>
      </defs>

      <circle cx="245" cy="255" r="190" fill="url(#hero-glow)"/>

      <circle cx="245" cy="255" r="170" stroke="#FFFFFF" stroke-opacity="0.07" stroke-width="1"/>
      <circle cx="245" cy="255" r="120" stroke="#FFFFFF" stroke-opacity="0.09" stroke-width="1"/>
      <circle cx="245" cy="255" r="70" stroke="#F46C38" stroke-opacity="0.25" stroke-width="1"/>

      <path d="M245 85 A170 170 0 0 1 415 255" stroke="url(#hero-line)" stroke-width="2" stroke-linecap="round"/>
      <path d="M245 425 A170 170 0 0 1 75 255" stroke="#FFFFFF" stroke-opacity="0.08" stroke-width="2" stroke-linecap="round"/>

      <circle cx="245" cy="85" r="5" fill="#F46C38"/>
      <circle cx="415" cy="255" r="4" fill="#F46C38" fill-opacity="0.85"/>
      <circle cx="245" cy="425" r="4" fill="#FFFFFF" fill-opacity="0.35"/>
      <circle cx="75" cy="255" r="4" fill="#FFFFFF" fill-opacity="0.25"/>

      <circle cx="245" cy="255" r="34" fill="#1C1A19" stroke="#F46C38" stroke-opacity="0.55" stroke-width="1.5"/>
      <circle cx="245" cy="255" r="7" fill="#F46C38"/>

      <g>
        <rect x="292" y="132" width="112" height="40" rx="12" fill="#1C1A19" stroke="#332F2D"/>
        <circle cx="310" cy="152" r="4" fill="#F46C38"/>
        <text x="322" y="156" fill="#D7D2D2" font-size="11" font-family="Arial, sans-serif">Strategy</text>
      </g>
      <g>
        <rect x="64" y="318" width="120" height="40" rx="12" fill="#1C1A19" stroke="#332F2D"/>
        <circle cx="82" cy="338" r="4" fill="#F46C38" fill-opacity="0.85"/>
        <text x="94" y="342" fill="#D7D2D2" font-size="11" font-family="Arial, sans-serif">Architecture</text>
      </g>
      <g>
        <rect x="296" y="346" width="100" height="40" rx="12" fill="#1C1A19" stroke="#332F2D"/>
        <circle cx="314" cy="366" r="4" fill="#FFFFFF" fill-opacity="0.55"/>
        <text x="326" y="370" fill="#D7D2D2" font-size="11" font-family="Arial, sans-serif">Delivery</text>
      </g>

      <line x1="296" y1="170" x2="271" y2="229" stroke="#FFFFFF" stroke-opacity="0.1" stroke-width="1"/>
      <line x1="171" y1="321" x2="217" y2="280" stroke="#FFFFFF" stroke-opacity="0.1" stroke-width="1"/>
      <line x1="301" y1="350" x2="272" y2="281" stroke="#FFFFFF" stroke-opacity="0.1" stroke-width="1"/>
    </svg>
  </div>
</template>

<style scoped lang="scss">
.hero-illustration {
  width: 100%;
  max-width: 460px;
  margin: 0 auto;

  svg {
    width: 100%;
    height: auto;
    display: block;
  }
}
</style>
