import { createApp } from 'vue'
import App from './App.vue'
import '@/assets/styles/styles.scss'

const app = createApp(App)

app.directive('lazy-load', (el, binding) => {
  el.src = '@/assets/black-bg.jpg'
  
  const observer = new IntersectionObserver(([entry]) => {
    if (entry.isIntersecting) {
      el.src = binding.value.url
      observer.unobserve(el)
    }
  })
  
  observer.observe(el)
})

createApp(App).mount('#app')

app.mount('#app')