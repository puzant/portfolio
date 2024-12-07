<template>
  <div class="mainContainer">
    <AppNavigation />
    <div class="sidebarItemsContainer">
      <SideBar />
      
      <div class="mainSections">
        <AboutMe />
        <RecentProjects />
        <ContactForm />
      </div>
    </div>
    <AppFooter />
  </div>
</template>

<script>
import AppNavigation from '@/components/AppNavigation/AppNavigation.vue';
import SideBar from '@/components/Sidebar/Sidebar.vue';
import ContactForm from '@/components/ContactForm/ContactForm.vue';
import AboutMe from '@/components/AboutMe/AboutMe.vue';
import RecentProjects from '@/components/RecentProjects/RecentProjects.vue';
import AppFooter from '@/components/AppFooter/AppFooter.vue';

export default {
  name: 'App',
  components: { AppNavigation, SideBar, AboutMe, ContactForm, RecentProjects, AppFooter }
}
</script>

<style>
</style>
