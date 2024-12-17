<template>
  <div class="outerContainer">
    <VerticalAppNavigation ref="verticalNavigationRef" :viewed-section="viewedSection" />

    <div class="mainContainer">
      <AppNavigation ref="navigationRef" />
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
import { onMounted, onUnmounted, ref } from 'vue';

import AppNavigation from '@/components/AppNavigation/AppNavigation.vue';
import VerticalAppNavigation from '@/components/VerticalAppNavigation.vue'
import SideBar from '@/components/Sidebar/Sidebar.vue';
import ContactForm from '@/components/ContactForm/ContactForm.vue';
import AboutMe from '@/components/AboutMe/AboutMe.vue';
import RecentProjects from '@/components/RecentProjects/RecentProjects.vue';
import AppFooter from '@/components/AppFooter/AppFooter.vue';
import TechSkills from '@/components/TechSkills/TechSkills.vue';
import MyPublications from '@/components/MyPublications/MyPublications.vue';

const navigationRef = ref(null)
const verticalNavigationRef = ref(null)
const sidebarRef = ref(null)
const projectsRef = ref(null)
const aboutMeRef = ref(null)
const skillsRef = ref(null)
const publicationsRef = ref(null)
const contactFormRef = ref(null)

const refs = [sidebarRef, projectsRef, aboutMeRef, skillsRef, publicationsRef, contactFormRef, navigationRef, verticalNavigationRef]
// used to check which scetion is the user currently is on
let viewedSection = ref(null)
let observer = null


onMounted(() => {
  observer = new IntersectionObserver((entries) => {
    for (const entry of entries) {
      if (!entry.isIntersecting && entry.target.id === 'navbar') {
        verticalNavigationRef.value.$el.classList.remove('hidden')
        verticalNavigationRef.value.$el.classList.add('fade-in')
      } else if (entry.isIntersecting && entry.target.id === 'navbar') {
        verticalNavigationRef.value.$el.classList.remove('fade-in')
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
})
</script>
