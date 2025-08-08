<template>
  <main class="main-page">
    <canvas ref="bgCanvas" class="bg-canvas"></canvas>

    <!-- Sections: each has an id that the router will scroll to -->
    <section id="summary" class="section">
      <h2>Summary</h2>
      <p class="lead">
        2+ years of experience as a Software Engineer at LTIMindtree, focused on
        maintaining platform stability and ensuring high system reliability.
        Played a key role in addressing website vulnerabilities and delivering
        critical bug fixes. Actively contributed to the successful migration
        from on-premises infrastructure to Microsoft Azure, gaining practical
        expertise in Azure services and Azure DevOps. Implemented monitoring and
        alerting using Azure Monitor and Log Analytics to improve system
        observability and performance tracking.
      </p>
    </section>

    <section id="skills" class="section">
      <h2>Skills</h2>
      <div class="skills-grid">
        <div class="skill" v-for="s in skills" :key="s.name">
          <div>{{ s.name }}</div>
          <div class="bar">
            <div class="fill" :data-percent="s.pct" :aria-valuenow="s.pct">
              {{ s.pct }}
            </div>
          </div>
        </div>
      </div>
      <!-- <p class="muted">
        Hover or scroll to see the bars animate. Percentages are sample values.
      </p> -->
    </section>

    <section id="education" class="section">
      <h2>Education</h2>
      <div class="card">
        <strong>BTech, Computer Science Engineering</strong>
        <div class="sub">SRM IST, Chennai 2019–2023</div>
        <p>9.4 CGPA</p>
      </div>
    </section>

    <section id="experience" class="section">
      <h2>Experience</h2>
      <div class="card">
        <strong> Site Reliability Engineer — LTIMindtree</strong>
        <div class="sub">2023 — Present</div>
        <ul>
          <li>
            Monitored and resolved application issues to maintain high
            availability and performance. Collaborated with development and
            operations teams to improve system stability. Worked with Docker and
            Kubernetes to support containerized deployments and scalable
            infrastructure
          </li>
          <li>
            Remediated critical vulnerabilities such as Clickjacking, Lucky13,
            and LOGJAM by applying security best practices and updating the
            system configurations.
          </li>
          <li>
            Hands-on experience with Azure services and Azure DevOps for
            infrastructure management and resource monitoring in cloud
            environments.
          </li>
          <li>
            Assisted in migrating applications from on-premises to Microsoft
            Azure, focusing on optimizing resource allocation for better
            performance and cost efficiency.
          </li>
          <li>
            Managed 10+ SSL/TLS certificate renewals, preventing potential
            outages and ensuring continuous secure communication.
          </li>
          <li>
            Automated Kubernetes operations including deployments, scaling, and
            monitoring, using shell scripts, reducing manual intervention by 40%
            to 50% and improving the reliability of the system.
          </li>
        </ul>
      </div>

      <div class="card">
        <strong>Intern — HighRadius</strong>
        <div class="sub">2022</div>
        <p>
          Played a key role in front-end development using Vue.js, building
          dynamic UI components and delivering a seamless user experience.
          Contributed to designing user workflows, integrating AI features, and
          supporting full-stack development of an AI-enabled B2B fintech cloud
          application.
        </p>
      </div>
    </section>

    <section id="contacts" class="section">
      <h2>Contacts</h2>
      <div class="contacts">
        <div class="contact" @click="copy('prasun.karn@example.com')">
          <svg class="icon" viewBox="0 0 24 24">
            <path fill="currentColor" d="M4 4h16v12H4z"></path>
          </svg>
          <div>
            <div class="label">Email</div>
            <div class="value">prasunkarn13@gamil.com</div>
          </div>
        </div>

        <div class="contact" @click="copy('+91 98765 43210')">
          <svg class="icon" viewBox="0 0 24 24">
            <path fill="currentColor" d="M6 2h12v2H6z"></path>
          </svg>
          <div>
            <div class="label">Phone</div>
            <div class="value">+91-7678385590</div>
          </div>
        </div>

        <a
          class="contact"
          href="https://www.linkedin.com/in/prasunkarn"
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg class="icon" viewBox="0 0 24 24">
            <path
              fill="currentColor"
              d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 
             2.76 2.24 5 5 5h14c2.76 0 
             5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 
             19h-3v-9h3v9zm-1.5-10.29c-.96 
             0-1.75-.79-1.75-1.75s.79-1.75 
             1.75-1.75 1.75.79 1.75 
             1.75-.79 1.75-1.75 1.75zm13.5 
             10.29h-3v-4.5c0-1.08-.92-2-2-2s-2 
             .92-2 2v4.5h-3v-9h3v1.28c.84-1.15 
             2.23-1.78 3.72-1.78 2.35 
             0 4.28 1.93 4.28 4.28v5.22z"
            />
          </svg>
          <div>
            <div class="label">LinkedIn</div>
            <div class="value">linkedin.com/in/prasunkarn</div>
          </div>
        </a>
      </div>
      <!-- <p class="muted">Click email or phone to copy to clipboard (demo).</p> -->
    </section>

    <footer class="footer">
      © {{ new Date().getFullYear() }} — Replace text with your footer info.
    </footer>
  </main>
</template>

<script setup>
import { onMounted, ref, reactive } from "vue";

const bgCanvas = ref(null);
const skills = reactive([
  { name: "Docker", pct: "85%" },
  { name: "Kubernetes", pct: "90%" },
  { name: "Linux", pct: "75%" },
  { name: "Azure Monitor", pct: "80%" },
  { name: "Shell Scripting", pct: "70%" },
  { name: "Jenkins", pct: "65%" },
  { name: "Vue.js", pct: "60%" },
]);

onMounted(() => {
  // --- Starry background (simple animated starfield) ---
  const canvas = bgCanvas.value;
  const ctx = canvas.getContext("2d");
  function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }
  resize();
  window.addEventListener("resize", resize);

  const numStars = Math.max(
    80,
    Math.floor((canvas.width * canvas.height) / 12000)
  );
  const stars = Array.from({ length: numStars }).map(() => ({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    r: Math.random() * 1.4 + 0.2,
    s: Math.random() * 0.6 + 0.2,
  }));

  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (const s of stars) {
      s.y -= s.s;
      if (s.y < 0) {
        s.y = canvas.height;
        s.x = Math.random() * canvas.width;
      }
      ctx.beginPath();
      ctx.fillStyle = `rgba(255,255,255,${0.4 + s.s * 0.8})`;
      ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
      ctx.fill();
    }
    requestAnimationFrame(draw);
  }
  draw();

  // --- Intersections: reveal sections and animate skill bars ---
  const obs = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add("in-view");
          // animate fills inside this section
          const fills = e.target.querySelectorAll(".fill");
          fills.forEach((f) => {
            const percent = f.dataset.percent || "0%";
            f.style.width = percent;
          });
        }
      });
    },
    { threshold: 0.18 }
  );

  document.querySelectorAll(".section").forEach((s) => obs.observe(s));
});

// copy helper
async function copy(text) {
  try {
    await navigator.clipboard.writeText(text);
    // tiny notification — replace with fancier toast if you like
    alert(`Copied: ${text}`);
  } catch {
    alert("Copy failed — try selecting and copying manually.");
  }
}
</script>

function draw() { ctx.clearRect(0, 0, canvas.width, canvas.height); for (const s
of stars) { s.y -= s.s; if (s.y < 0) { s.y = canvas.height; s.x = Math.random()
* canvas.width; } ctx.beginPath(); ctx.fillStyle = `rgba(255,255,255,${0.4 + s.s
* 0.8})`; ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2); ctx.fill(); }
requestAnimationFrame(draw); } draw(); // --- Intersections: reveal sections and
animate skill bars --- const obs = new IntersectionObserver( (entries) => {
entries.forEach((e) => { if (e.isIntersecting) {
e.target.classList.add("in-view"); // animate fills inside this section const
fills = e.target.querySelectorAll(".fill"); fills.forEach((f) => { const percent
= f.dataset.percent || "0%"; f.style.width = percent; }); } }); }, { threshold:
0.18 } ); document.querySelectorAll(".section").forEach((s) => obs.observe(s));
}); // copy helper async function copy(text) { try { await
navigator.clipboard.writeText(text); // tiny notification — replace with fancier
toast if you like alert(`Copied: ${text}`); } catch { alert("Copy failed — try
selecting and copying manually."); } }

<style scoped>
/* Layout */
.main-page {
  min-height: 100vh;
  padding: 140px 6% 80px calc(20vw + 90px); /* leaves space for the profile card */
  position: relative;
  z-index: 1;
  color: var(--text);
}

/* Background canvas */
.bg-canvas {
  position: fixed;
  inset: 0;
  z-index: 0;
  pointer-events: none;
  mix-blend-mode: screen;
}

/* sections */
.section {
  margin-bottom: 48px;
  background: rgba(255, 255, 255, 0.02);
  padding: 22px;
  border-radius: 12px;
  backdrop-filter: blur(4px);
  transform: translateY(10px);
  opacity: 0;
  transition: all 550ms cubic-bezier(0.2, 0.9, 0.2, 1);
}
.section.in-view {
  transform: none;
  opacity: 1;
}

/* headers */
.section h2 {
  margin: 0 0 10px 0;
  color: var(--text);
}

/* skills bars */
.skills-grid {
  display: flex;
  flex-direction: column;
  gap: 12px;
  max-width: 720px;
}
.skill {
  display: flex;
  gap: 12px;
  align-items: center;
  justify-content: space-between;
}
.bar {
  flex: 1;
  margin-left: 12px;
  height: 14px;
  background: rgba(255, 255, 255, 0.03);
  border-radius: 10px;
  overflow: hidden;
}
.fill {
  width: 0;
  height: 100%;
  background: linear-gradient(
    90deg,
    rgba(124, 58, 237, 0.9),
    rgba(99, 102, 241, 0.9)
  );
  color: transparent;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding-right: 8px;
  transition: width 900ms cubic-bezier(0.2, 0.9, 0.2, 1);
}
.muted {
  color: var(--muted);
  margin-top: 8px;
}

/* cards & contacts */
.card {
  background: rgba(255, 255, 255, 0.02);
  padding: 14px;
  border-radius: 10px;
  margin-bottom: 12px;
}
.sub {
  color: var(--muted);
  font-size: 0.9rem;
  margin-top: 6px;
}
.contacts {
  display: flex;
  flex-direction: column;
  gap: 12px;
  max-width: 720px;
}
.contact {
  display: flex;
  gap: 12px;
  align-items: center;
  padding: 10px;
  border-radius: 10px;
  background: rgba(255, 255, 255, 0.01);
  cursor: pointer;
}
.contact:hover {
  background: rgba(255, 255, 255, 0.03);
}
.contact .icon {
  width: 34px;
  height: 34px;
  opacity: 0.9;
  margin-right: 6px;
}

/* footer */
.footer {
  margin-top: 36px;
  color: var(--muted);
  text-align: center;
}

/* small screen adjustments */
@media (max-width: 900px) {
  .main-page {
    padding-left: 92px;
    padding-right: 6%;
    padding-top: 110px;
  }
}
@media (max-width: 520px) {
  .main-page {
    padding-left: 12px;
    padding-right: 12px;
    padding-top: 110px;
  }
  .profile-card {
    display: none;
  } /* if you prefer, you can keep it — adjust as needed */
}
</style>
