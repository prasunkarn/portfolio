<template>
  <aside class="profile-card">
    <img :src="profileSrc" alt="Profile" class="avatar" />
    <div class="meta">
      <div class="name">Prasun Karn</div>
      <div class="role">Software Engineer • LTIMindtree</div>
    </div>
  </aside>
</template>

<script setup>
const profileSrc = new URL("../assets/profile.jpg.png", import.meta.url).href;
</script>

<style scoped>
.profile-card {
  position: fixed;
  left: 20px;
  top: 20px;
  width: 20vw; /* stays at ~20% of screen width */
  min-width: 160px;
  max-width: 300px;
  background: rgba(255, 255, 255, 0.03);
  padding: 16px;
  border-radius: 12px;
  display: flex;
  flex-direction: column; /* stack vertically */
  align-items: center; /* center horizontally */
  gap: 12px;
  z-index: 120;
  backdrop-filter: blur(6px);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.6);
}

.avatar {
  width: 150px; /* bigger profile picture */
  height: 150px;
  border-radius: 50%;
  object-fit: cover;
  border: 2px solid rgba(255, 255, 255, 0.06);
}

.name {
  color: var(--text);
  font-weight: 700;
  font-size: 1.1rem; /* slightly bigger font */
  text-align: center;
}

.role {
  color: var(--muted);
  font-size: 0.85rem;
  text-align: center;
}

@media (max-width: 700px) {
  .profile-card {
    width: 28vw;
    left: 12px;
    top: 12px;
    padding: 12px;
  }
  .avatar {
    width: 80px;
    height: 80px;
  }
}
</style>
