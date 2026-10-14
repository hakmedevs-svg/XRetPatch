* {
  box-sizing: border-box;
}

:root {
  --bg: #070b14;
  --bg-soft: #0f1729;
  --panel: rgba(15, 23, 41, 0.8);
  --panel-border: rgba(148, 163, 184, 0.18);
  --text: #e2e8f0;
  --muted: #a5b4cf;
  --primary: #7c3aed;
  --primary-2: #1ed8d8;
  --accent: #f59e0b;
  --success: #34d399;
  --shadow: 0 24px 60px rgba(124, 58, 237, 0.28);
}

html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
  font-family: "Inter", sans-serif;
  background:
    radial-gradient(circle at top left, rgba(124, 58, 237, 0.18), transparent 20%),
    radial-gradient(circle at bottom right, rgba(30, 216, 216, 0.12), transparent 25%),
    var(--bg);
  color: var(--text);
  min-height: 100vh;
  line-height: 1.6;
}

img {
  max-width: 100%;
  display: block;
}

.bg-grid {
  position: fixed;
  inset: 0;
  background-image: linear-gradient(rgba(148, 163, 184, 0.04) 1px, transparent 1px),
    linear-gradient(90deg, rgba(148, 163, 184, 0.04) 1px, transparent 1px);
  background-size: 32px 32px;
  pointer-events: none;
  mask-image: radial-gradient(circle at center, black 55%, transparent 100%);
}

.topbar,
main,
.footer {
  position: relative;
  z-index: 1;
}

.topbar {
  max-width: 1200px;
  margin: 0 auto;
  padding: 22px 28px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
}

.brand {
  display: inline-flex;
  align-items: center;
  gap: 12px;
  font-weight: 800;
  letter-spacing: 0.02em;
}

.brand-mark {
  width: 40px;
  height: 40px;
  display: grid;
  place-items: center;
  border-radius: 12px;
  color: #fff;
  font-size: 1.2rem;
  font-weight: 900;
  background: linear-gradient(135deg, var(--primary), var(--primary-2));
  box-shadow: var(--shadow);
}

.nav {
  display: flex;
  align-items: center;
  gap: 22px;
  flex-wrap: wrap;
}

.nav a {
  color: var(--muted);
  text-decoration: none;
  font-weight: 500;
  transition: color 0.2s ease;
}

.nav a:hover {
  color: var(--text);
}

.btn {
  appearance: none;
  border: 1px solid transparent;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.8rem 1.3rem;
  border-radius: 999px;
  font-weight: 700;
  text-decoration: none;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  cursor: pointer;
}

.btn:hover {
  transform: translateY(-2px);
}

.btn-primary {
  color: #fff;
  background: linear-gradient(135deg, var(--primary), #8b5cf6);
  box-shadow: 0 18px 38px rgba(124, 58, 237, 0.35);
}

.btn-secondary {
  color: var(--text);
  background: rgba(148, 163, 184, 0.05);
  border-color: rgba(148, 163, 184, 0.18);
}

main {
  max-width: 1200px;
  margin: 0 auto;
  padding: 28px 28px 56px;
}

.hero {
  display: grid;
  grid-template-columns: 1.2fr 0.8fr;
  align-items: center;
  gap: 32px;
  padding-top: 34px;
  min-height: 620px;
}

.eyebrow {
  margin: 0 0 14px;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--primary-2);
  font-weight: 700;
  font-size: 0.78rem;
}

.hero-copy h1 {
  margin: 0;
  font-size: clamp(3rem, 5vw, 5.6rem);
  line-height: 0.96;
  letter-spacing: -0.06em;
}

.subtitle {
  margin: 18px 0 15px;
  font-size: clamp(1.1rem, 2vw, 1.7rem);
  color: #d8e1f3;
  font-weight: 600;
}

.lead {
  max-width: 680px;
  color: var(--muted);
  font-size: 1.04rem;
}

.actions {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  margin-top: 28px;
}

.chips {
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  padding: 0;
  margin: 30px 0 0;
}

.chips li {
  padding: 0.65rem 0.95rem;
  border: 1px solid rgba(148, 163, 184, 0.2);
  border-radius: 999px;
  background: rgba(15, 23, 41, 0.65);
  color: var(--text);
  font-size: 0.8rem;
}

.hero-visual {
  display: flex;
  justify-content: center;
}

.logo-shell {
  width: min(100%, 480px);
  aspect-ratio: 1;
  display: grid;
  place-items: center;
  border-radius: 30px;
  background: linear-gradient(135deg, rgba(124, 58, 237, 0.16), rgba(30, 216, 216, 0.06));
  border: 1px solid rgba(148, 163, 184, 0.2);
  box-shadow: var(--shadow);
  position: relative;
  overflow: hidden;
}

.logo-shell::before {
  content: "";
  position: absolute;
  inset: 12% 10%;
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 28px;
}

.logo-orb {
  position: relative;
  width: 220px;
  height: 220px;
  display: grid;
  place-items: center;
  border-radius: 50%;
  background: radial-gradient(circle at 35% 35%, rgba(255,255,255,0.35), rgba(124, 58, 237, 0.1) 30%, rgba(15, 23, 41, 0.4) 70%);
  box-shadow: inset 0 0 30px rgba(255,255,255,0.12), 0 18px 32px rgba(124, 58, 237, 0.2);
  animation: float 5s ease-in-out infinite;
}

.orb-ring {
  position: absolute;
  border: 1px solid rgba(30, 216, 216, 0.7);
  border-radius: 50%;
  inset: 10%;
  animation: spin 13s linear infinite;
}

.ring-two {
  inset: 20%;
  border-color: rgba(124, 58, 237, 0.75);
  animation-duration: 18s;
  animation-direction: reverse;
}

.logo-x {
  position: relative;
  font-size: clamp(4rem, 7vw, 6rem);
  font-weight: 900;
  letter-spacing: -0.12em;
  background: linear-gradient(135deg, #ffffff, #b4c4ff 30%, #7dd3fc 70%, #a78bfa 100%);
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  filter: drop-shadow(0 10px 30px rgba(124, 58, 237, 0.38));
}

.stats,
.feature-grid,
.section-grid,
.goal-list,
.two-column {
  display: grid;
  gap: 20px;
}

.stats {
  grid-template-columns: repeat(4, minmax(0, 1fr));
  margin-top: 30px;
}

.stat-card,
.info-card,
.feature-card,
.list-card,
.warning-card,
.goal-item,
.community-box,
.disclaimer-box {
  background: var(--panel);
  border: 1px solid var(--panel-border);
  border-radius: 20px;
  box-shadow: 0 14px 35px rgba(15, 23, 41, 0.25);
}

.stat-card {
  padding: 22px 18px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 120px;
}

.stat-card strong {
  font-size: 1.35rem;
  margin-bottom: 4px;
}

.stat-card span {
  color: var(--muted);
}

.content-section {
  padding-top: 96px;
}

.section-heading {
  margin-bottom: 24px;
}

.section-heading h2 {
  margin: 0;
  font-size: clamp(2rem, 3vw, 3rem);
  letter-spacing: -0.04em;
}

.section-grid {
  grid-template-columns: repeat(2, minmax(0, 1fr));
}

.info-card,
.feature-card,
.list-card,
.goal-item,
.community-box,
.disclaimer-box {
  padding: 28px 24px;
}

.info-card h3,
.feature-card h3,
.list-card h3 {
  margin-top: 0;
  margin-bottom: 12px;
  font-size: 1.3rem;
}

.info-card p,
.feature-card p,
.list-card p,
.goal-item p,
.community-box p,
.disclaimer-box p {
  margin-bottom: 0;
  color: var(--muted);
}

.feature-grid {
  grid-template-columns: repeat(3, minmax(0, 1fr));
}

.feature-card {
  min-height: 220px;
}

.icon {
  display: inline-flex;
  width: 58px;
  height: 58px;
  align-items: center;
  justify-content: center;
  border-radius: 16px;
  background: linear-gradient(135deg, rgba(124, 58, 237, 0.18), rgba(30, 216, 216, 0.12));
  font-size: 1.7rem;
  margin-bottom: 18px;
}

.goal-list {
  grid-template-columns: repeat(2, minmax(0, 1fr));
}

.goal-item {
  display: flex;
  align-items: flex-start;
  gap: 18px;
}

.goal-item span {
  display: inline-flex;
  min-width: 48px;
  height: 48px;
  border-radius: 12px;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, rgba(124, 58, 237, 0.25), rgba(30, 216, 216, 0.12));
  font-weight: 800;
  color: #fff;
}

.two-column {
  grid-template-columns: repeat(2, minmax(0, 1fr));
}

.list-card ul {
  margin: 0;
  padding-left: 20px;
  color: var(--muted);
  display: grid;
  gap: 8px;
}

.warning-card {
  border-color: rgba(245, 158, 11, 0.4);
  background: rgba(245, 158, 11, 0.06);
}

.warning-card h3 {
  color: #fbbf24;
}

.community-box,
.disclaimer-box {
  display: flex;
  flex-direction: column;
  gap: 18px;
  align-items: flex-start;
}

.footer {
  max-width: 1200px;
  margin: 0 auto;
  padding: 12px 28px 40px;
  display: flex;
  justify-content: space-between;
  gap: 20px;
  flex-wrap: wrap;
  color: var(--muted);
}

.footer strong {
  color: var(--text);
}

.reveal {
  opacity: 0;
  transform: translateY(18px);
  transition: opacity 0.7s ease, transform 0.7s ease;
}

.reveal.visible {
  opacity: 1;
  transform: translateY(0);
}

@keyframes spin {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

@keyframes float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
}

@media (max-width: 920px) {
  .hero,
  .section-grid,
  .two-column,
  .goal-list,
  .feature-grid,
  .stats {
    grid-template-columns: 1fr;
  }

  .topbar {
    flex-wrap: wrap;
    justify-content: center;
  }

  .nav {
    justify-content: center;
  }

  .hero {
    padding-top: 10px;
  }
}

@media (max-width: 560px) {
  .topbar,
  main,
  .footer {
    padding-left: 18px;
    padding-right: 18px;
  }

  .nav {
    gap: 12px 18px;
  }

  .actions {
    flex-direction: column;
    align-items: stretch;
  }

  .btn {
    width: 100%;
  }
}
