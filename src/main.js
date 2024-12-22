import { createApp } from 'vue'
import App from './App.vue'
import '@/assets/styles/styles.scss'

const app = createApp(App)

app.directive('lazy-load', (el, binding) => {
  el.style.opacity = '0'
  el.style.transition = 'opacity 0.5s'

  const observer = new IntersectionObserver(([entry]) => {
    if (entry.isIntersecting) {
      el.src = binding.value.url
      el.style.opacity = '1'

      observer.unobserve(el)
    }
  })
  
  observer.observe(el)
})

createApp(App).mount('#app')

app.mount('#app')