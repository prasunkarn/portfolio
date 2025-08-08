<template>
  <nav class="topnav" aria-label="Primary">
    <ul class="links">
      <li><router-link to="/">Home</router-link></li>
      <li><router-link to="/summary">Summary</router-link></li>
      <li><router-link to="/skills">Skills</router-link></li>
      <li><router-link to="/education">Education</router-link></li>
      <li><router-link to="/experience">Experience</router-link></li>
      <li><router-link to="/contacts">Contact</router-link></li>
    </ul>

    <!-- simple hamburger for small screens (opens native anchors via routes) -->
    <button class="hamburger" @click="open = !open" aria-label="Menu">☰</button>

    <div v-if="open" class="mobile-menu">
      <router-link @click.native="open = false" to="/summary"
        >Summary</router-link
      >
      <router-link @click.native="open = false" to="/skills"
        >Skills</router-link
      >
      <router-link @click.native="open = false" to="/education"
        >Education</router-link
      >
      <router-link @click.native="open = false" to="/experience"
        >Experience</router-link
      >
      <router-link @click.native="open = false" to="/contacts"
        >Contact</router-link
      >
    </div>
  </nav>
</template>

<script setup>
import { ref } from "vue";
const open = ref(false);
</script>

<style scoped>
.topnav {
  position: fixed;
  top: 12px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 45;
  background: rgba(6, 8, 10, 0.55);
  padding: 8px 12px;
  border-radius: 999px;
  border: 1px solid rgba(255, 255, 255, 0.04);
  display: flex;
  gap: 10px;
  align-items: center;
}
.links {
  display: flex;
  gap: 10px;
  list-style: none;
  margin: 0;
  padding: 0;
}
a {
  color: #cfe;
  text-decoration: none;
  padding: 6px 8px;
  border-radius: 6px;
  font-size: 0.95rem;
}
a.router-link-active {
  background: rgba(255, 255, 255, 0.06);
  color: #fff;
}
.hamburger {
  display: none;
  background: none;
  border: none;
  color: #fff;
  font-size: 18px;
  padding: 6px;
  border-radius: 6px;
}
.mobile-menu {
  position: fixed;
  top: 56px;
  left: 50%;
  transform: translateX(-50%);
  background: rgba(8, 10, 14, 0.9);
  padding: 8px;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  gap: 6px;
}

/* mobile adjustments */
@media (max-width: 720px) {
  .links {
    display: none;
  }
  .hamburger {
    display: block;
  }
}
</style>
