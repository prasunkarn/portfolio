<template>
  <div id="app">
    <ProfileCard />
    <TopNav />
    <router-view />
  </div>
</template>

<script setup>
import ProfileCard from "./components/ProfileCard.vue";
import TopNav from "./components/TopNav.vue";
</script>
