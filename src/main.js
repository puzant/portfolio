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

app.config.globalProperties.$projects = [
  {name: 'Locus', description: 'Real-Estate Management Platform', preview: require('@/assets/project-1.webp'), link: 'https://www.locus.eu/', tech: ['React', 'Tailwind', 'React Query', 'Formik']},
  {name: 'TMDB Clone', description: 'Explore And Search Movies', preview: require('@/assets/project-2.webp'), link: 'https://react-app-movies-tracker.netlify.app/', tech: ['React', 'Tailwind', 'React Query', 'TypeScript', ]},
  {name: 'Puzant CV', description: 'Interactive Online CV', preview: require('@/assets/project-3.webp'), link: 'https://puzant-cv.netlify.app/', tech: ['AlpineJs', 'JavaScript', 'HTML', 'CSS']},
  {name: 'Password Generator', description: 'Complex Password Generator', preview: require('@/assets/project-4.webp'), link: 'https://complex-password-generator-app.netlify.app/', tech: ['JavaScript', 'HTML', 'Tailwind']},
]

app.config.globalProperties.$publications = [
  {
    title: 'Efficient Data Fetching and Mutation in React with Generic Hooks and HOCs',
    preview: 'In the ever-evolving landscape of web development, one constant remains: the need to interact with APIs. Whether you’re building web…',
    publishedDate: 'Sep 5, 2023',
    duration: '4',
    link: 'https://medium.com/@puzant24/efficient-data-fetching-and-mutation-in-react-with-generic-hooks-and-hocs-37728b444ac8'
  },
  {
    title: 'Building A Simple Images Carousel With ReactJs',
    preview: 'Carousel allows multiple image & videos to be displayed in a nice & interactive way',
    publishedDate: 'Feb 3, 2021',
    duration: '4',
    link: 'https://medium.com/@puzant24/building-a-simple-images-carousel-with-reactjs-377256bedc61'
  },
  {
    title: 'Infinite Scroll With ReactJs & Redux',
    preview: 'Infinite scroll has been widely used in today’s web & mobile apps, it simply loads data as you scroll down the page, this eliminated the…',
    publishedDate: 'Jul 8, 2020',
    duration: '3',
    link: 'https://medium.com/@puzant24/infinite-scroll-with-reactjs-redux-23bccea01dd0'
  }
]

app.mount('#app')
