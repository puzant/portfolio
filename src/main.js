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

app.config.globalProperties.$skills = [
  {name: 'React', icon: require('@/assets/icons/react-logo.svg')},
  {name: 'Vue', icon: require('@/assets/icons/vue-logo.svg')},
  {name: 'Tailwind', icon: require('@/assets/icons/tailwind-logo.svg')},
  {name: 'NodeJs', icon: require('@/assets/icons/nodejs-logo.svg')},
  {name: 'Mysql', icon: require('@/assets/icons/mysql-logo.svg')},
  {name: 'Mongodb', icon: require('@/assets/icons/mongodb-logo.svg')},
  {name: 'Typescript', icon: require('@/assets/icons/typescript-logo.svg')},
  {name: 'Python', icon: require('@/assets/icons/python-logo.svg')},
]

app.mount('#app')
