<template>
  <div></div>
  <div class="outer-container">
    <VerticalAppNavigation ref="verticalNavigationRef" :viewed-section="viewedSection" />
    <AppNavigation ref="navigationRef" />

    <TravelImages :images="placeholderOrImages" />

    <div class="main-container">
      <div class="sidebar-items-container">
        <SideBar ref="sidebarRef" />
      
        <div class="main-sections">
          <AboutMe ref="aboutMeRef" />
          <RecentProjects ref="projectsRef" :projects="projects" />
          <TechSkills ref="skillsRef" />
          <MyPublications ref="publicationsRef" :publications="publications" />
          <ContactForm ref="contactFormRef" />
        </div>
      </div>
      <AppFooter />
    </div>
  </div>
</template>

<script setup>
import { onMounted, onUnmounted, ref, computed } from 'vue'
import AppNavigation from '@/components/AppNavigation.vue'
import VerticalAppNavigation from '@/components/VerticalAppNavigation.vue'
import SideBar from '@/components/Sidebar.vue'
import ContactForm from '@/components/ContactForm.vue'
import AboutMe from '@/components/AboutMe.vue'
import RecentProjects from '@/components/RecentProjects.vue'
import AppFooter from '@/components/AppFooter.vue'
import TechSkills from '@/components/TechSkills.vue'
import MyPublications from '@/components/MyPublications.vue'
import TravelImages from '@/components/TravelImages.vue'

const navigationRef = ref(null)
const verticalNavigationRef = ref(null)
const sidebarRef = ref(null)
const projectsRef = ref(null)
const aboutMeRef = ref(null)
const skillsRef = ref(null)
const publicationsRef = ref(null)
const contactFormRef = ref(null)
const loading = ref(false)

const refs = [sidebarRef, projectsRef, aboutMeRef, skillsRef, publicationsRef, contactFormRef, navigationRef, verticalNavigationRef]
// used to check which scetion is the user currently is on
let viewedSection = ref(null)

let projects = ref([])
let publications = ref([])
let travelImages = ref([])

let observer = null

async function fetchData() {
  try {
    loading.value = true
    const [projectsRes, publicationsRes, travelImagesRes] = await Promise.all([
      fetch(`${process.env.VUE_APP_API_URL}/v1/projects`).then(res => res.json()),
      fetch(`${process.env.VUE_APP_API_URL}/v1/publications`).then(res => res.json()),
      fetch(`${process.env.VUE_APP_API_URL}/v1/travel-images`).then(res => res.json()),
    ])

    travelImages.value = travelImagesRes.data
    projects.value = projectsRes.data
    publications.value = publicationsRes.data
  } catch (err) {
    console.log(err)
  } finally {
    loading.value = false
  }
}

function setupObserver() {
  observer = new IntersectionObserver((entries) => {
    for (const entry of entries) {
      if (!entry.isIntersecting && entry.target.id === 'navbar') {
        verticalNavigationRef.value.$el.classList.remove('hidden')
        verticalNavigationRef.value.$el.classList.add('fade-in')
      } else if (entry.isIntersecting && entry.target.id === 'navbar') {
        verticalNavigationRef.value.$el.classList.remove('fade-in', 'no-translate')
        verticalNavigationRef.value.$el.classList.add('hidden')
      }
      
      //  apply for other sections
      if (entry.isIntersecting && entry.target.id !== 'verticalNavigation' && entry.target.id !== 'navbar') {
        entry.target.classList.add('fade-in')
        viewedSection.value = '#' + entry.target.id
      }
    }
  },{ threshold: .2 });

  refs.forEach(ref => {
    observer.observe(ref.value.$el)
  });
}

onMounted(async () => {
  await fetchData()
  setupObserver()
})

onUnmounted(() => {
  observer.disconnect()
})

const placeholderOrImages = computed(() => {
  if (loading.value) {
    return Array.from({ length: 8 }, () => ({
      isPlaceholder: true
    }))
  }

  return travelImages.value.map((image) => ({ ...image, isPlaceholder: false }))
})
</script>
