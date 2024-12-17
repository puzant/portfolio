<template>
  <div class="mainContainer">
    <AppNavigation />
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
</template>

<script setup>
import { onMounted, onUnmounted, ref } from 'vue';

import AppNavigation from '@/components/AppNavigation/AppNavigation.vue';
import SideBar from '@/components/Sidebar/Sidebar.vue';
import ContactForm from '@/components/ContactForm/ContactForm.vue';
import AboutMe from '@/components/AboutMe/AboutMe.vue';
import RecentProjects from '@/components/RecentProjects/RecentProjects.vue';
import AppFooter from '@/components/AppFooter/AppFooter.vue';
import TechSkills from '@/components/TechSkills/TechSkills.vue';
import MyPublications from '@/components/MyPublications/MyPublications.vue';

const sidebarRef = ref(null)
const projectsRef = ref(null)
const aboutMeRef = ref(null)
const skillsRef = ref(null)
const publicationsRef = ref(null)
const contactFormRef = ref(null)
const refs = [sidebarRef, projectsRef, aboutMeRef, skillsRef, publicationsRef, contactFormRef]
let observer = null

onMounted(() => {
  observer = new IntersectionObserver((entries) => {
    for (const entry of entries) {
      if (entry.isIntersecting) {
        entry.target.classList.add('fade-in')
      }
    }
  },{ threshold: 0.2 });

  refs.forEach(ref => {
    observer.observe(ref.value.$el)
  });
})

onUnmounted(() => {
  observer.disconnect()
})
</script>

<style>
</style>
