<template>
  <div class="outerContainer">
    <VerticalAppNavigation ref="verticalNavigationRef" :viewed-section="viewedSection" />
    <AppNavigation ref="navigationRef" />

    <div class="travelImages">
      <div class="image" :class="{ even: index % 2 === 0, odd: index % 2 !== 0 }" v-for="(image, index) in placeholderOrImages" :key="image.asset_id">
        <img v-if="!image.isPlaceholder" v-lazy-load="image" :alt='image.display_name' />
        <div v-else class="placeholder"></div>
        <div class="overlay">
          <p>{{ image.display_name }}</p>
        </div>
      </div>
    </div>

    <div class="mainContainer">
      <div class="sidebarItemsContainer">
        <SideBar ref="sidebarRef" />
      
        <div class="mainSections">
          <AboutMe ref="aboutMeRef" />
          <RecentProjects ref="projectsRef" />
          <TechSkills ref="skillsRef" />
          <MyPublications ref="publicationsRef" />
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
let travelImages = ref([])
let keepAliveInterval = ref(null)

let observer = null

onMounted(() => {
  fetchTravelImages()
  keepAliveInterval.value = setInterval(fetchTravelImages, 480000)
 
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
})

onUnmounted(() => {
  observer.disconnect()
  clearInterval(keepAliveInterval)
})

const placeholderOrImages = computed(() => {
  if (loading.value) {
    return Array.from({ length: 8 }, () => ({
      isPlaceholder: true
    }))
  }
  return travelImages.value.map((image) => ({ ...image, isPlaceholder: false }))
})

const fetchTravelImages = async () => {
  try {
    loading.value = true
    const response = await fetch(`${process.env.VUE_APP_API_URL}/api/travel-images`)
    
    if (!response.ok) {
      throw new Error(`Error: ${response.status} ${response.statusText}`)
    }
    
    const data = await response.json()
    travelImages.value = data.images
    return data
  } catch (error) {
    console.error('Failed to fetch travel images:', error.message);
  } finally {
    loading.value = false
  }
};
</script>
