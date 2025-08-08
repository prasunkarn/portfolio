<template>
  <nav class="top-nav">
    <div class="nav-inner">
      <!-- <div class="logo" @click="goHome">PRASUN</div> -->

      <div :class="['links', { open: open }]">
        <router-link
          v-for="r in items"
          :key="r.path"
          :to="r.path"
          @click="closeMobile"
        >
          {{ r.label }}
        </router-link>
      </div>

      <button class="hamburger" @click="toggle">{{ open ? "✕" : "☰" }}</button>
    </div>
  </nav>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
const router = useRouter();

const items = [
  { path: "/summary", label: "Summary" },
  { path: "/skills", label: "Skills" },
  { path: "/education", label: "Education" },
  { path: "/experience", label: "Experience" },
  { path: "/contacts", label: "Contacts" },
];
const open = ref(false);
function toggle() {
  open.value = !open.value;
}
function closeMobile() {
  if (window.innerWidth < 700) open.value = false;
}
function goHome() {
  router.push("/");
  closeMobile();
}
</script>

<style scoped>
.top-nav {
  position: fixed;
  top: 18px;
  left: calc(20vw + 40px); /* avoid overlaying the left profile card */
  right: 18px;
  z-index: 110;
}
.nav-inner {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  background: rgba(255, 255, 255, 0.02);
  padding: 8px 12px;
  border-radius: 10px;
  backdrop-filter: blur(4px);
}
.logo {
  color: var(--accent);
  font-weight: 700;
  cursor: pointer;
}
.links {
  display: flex;
  gap: 50px;
  align-items: center;
}
.links a {
  color: var(--muted);
  text-decoration: none;
  padding: 6px 8px;
  border-radius: 6px;
}
.router-link-active {
  color: var(--text);
  background: rgba(255, 255, 255, 0.03);
}

.hamburger {
  display: none;
  background: none;
  border: none;
  color: var(--text);
  font-size: 18px;
  cursor: pointer;
}

@media (max-width: 700px) {
  .top-nav {
    left: 12px;
    right: 12px;
    top: 86px;
  } /* push down so it doesn't overlay the profile card */
  .links {
    display: none;
    position: absolute;
    top: 48px;
    left: 0;
    right: 0;
    flex-direction: column;
    padding: 8px;
    background: rgba(0, 0, 0, 0.5);
    border-radius: 8px;
  }
  .links.open {
    display: flex;
  }
  .hamburger {
    display: inline-block;
  }
  .links a {
    padding: 10px 12px;
    width: 100%;
  }
}
</style>
