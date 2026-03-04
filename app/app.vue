<template>
  <div class="landing">
    <!-- Navigation -->
    <nav class="nav">
      <div class="container nav-inner">
        <div class="logo">
          <span class="logo-icon">🤖</span>
          <span class="logo-text">Agile Agent</span>
        </div>
        <div class="nav-links">
          <a href="#problem">The Problem</a>
          <a href="#features">How It Works</a>
          <a href="#pricing">Pricing</a>
          <a href="#contact" class="btn btn-primary btn-sm">Request a Demo</a>
        </div>
      </div>
    </nav>

    <!-- Hero -->
    <section class="hero">
      <div class="hero-glow"></div>
      <div class="container hero-inner">
        <div class="hero-badge">🎯 Build the right thing — implement once, implement right</div>
        <h1>Build the exact feature<br>your customers <span class="gradient-text">ask for</span></h1>
        <p class="hero-sub">
          <strong>50% of user stories are incorrectly specified.</strong> Requirements change mid-sprint.
          "Closed" stories come back as bugs. Agile Agent gives teams an AI-assisted workspace
          to define, debate, and refine requirements — so you build exactly what the customer needs.
        </p>
        <div class="hero-actions">
          <a href="#contact" class="btn btn-primary btn-lg">
            <span>🎯</span> Request a Demo
          </a>
          <a href="#problem" class="btn btn-ghost btn-lg">See the problem →</a>
        </div>
        <div class="hero-image">
          <div class="hero-image-glow"></div>
          <img src="/hero-screenshot.png" alt="Agile Agent UI showing AI-assisted requirements refinement with GitLab and Jira integration" />
        </div>
      </div>
    </section>

    <!-- Stats Bar -->
    <section class="stats-bar">
      <div class="container">
        <div class="stats-grid">
          <div class="stat">
            <div class="stat-number">69%</div>
            <div class="stat-label">of software projects fail or are challenged</div>
            <div class="stat-source">Standish Group CHAOS Report</div>
          </div>
          <div class="stat">
            <div class="stat-number">$2.41T</div>
            <div class="stat-label">cost of poor software quality in the U.S. alone</div>
            <div class="stat-source">CISQ, 2022</div>
          </div>
          <div class="stat">
            <div class="stat-number">20–40%</div>
            <div class="stat-label">of engineering capacity consumed by technical debt</div>
            <div class="stat-source">McKinsey</div>
          </div>
        </div>
      </div>
    </section>

    <!-- The Problem -->
    <section id="problem" class="problem-section">
      <div class="container">
        <div class="section-header">
          <div class="section-badge">The Problem</div>
          <h2>Agile promised speed.<br>It delivered <span class="gradient-text">rework.</span></h2>
          <p>The Agile Manifesto was signed in 2001 by 17 developers trying to fix broken software projects. It worked — until it didn't.</p>
        </div>
        <div class="problems-grid">
          <div class="problem-card">
            <div class="problem-icon">🔄</div>
            <h3>"Responding to change" became an excuse to never finish</h3>
            <p>Scope creep was institutionalized and rebranded as "sprint replanning" — one of the top drivers of cost overruns.</p>
          </div>
          <div class="problem-card">
            <div class="problem-icon">📉</div>
            <h3>"Working software over documentation" gutted knowledge</h3>
            <p>Only 12% of developers feel their codebase is well-documented. Technical debt became structural, not incidental.</p>
          </div>
          <div class="problem-card">
            <div class="problem-icon">📊</div>
            <h3>"Velocity" replaced quality</h3>
            <p>Story points. Burn-down charts. Throughput. None of these measure whether the software is actually good — or what the customer actually needed.</p>
          </div>
          <div class="problem-card">
            <div class="problem-icon">🧩</div>
            <h3>Two-week sprints killed systems thinking</h3>
            <p>You don't design systems anymore — you assemble features. The result: fragmented architectures and codebases no single engineer fully understands.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- The Solution -->
    <section id="features" class="features">
      <div class="container">
        <div class="section-header">
          <div class="section-badge">The Solution</div>
          <h2>Build accurate, not fast.<br><span class="gradient-text">Quality is speed.</span></h2>
          <p>Every hour spent on rework is an hour that could have gone into upfront design. Agile Agent treats software delivery as a production system with defined inputs, quality gates, and measurable outputs.</p>
        </div>
        <div class="features-grid">
          <div class="feature-card">
            <div class="feature-icon">🎯</div>
            <h3>Requirements That Stick</h3>
            <p>AI-assisted requirement analysis pulls in Jira tickets, linked stories, and Confluence specs to surface contradictions and gaps before a single line of code is written.</p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">🔍</div>
            <h3>Full Codebase Context</h3>
            <p>Search across GitLab repos, read files, and understand existing architecture. The agent knows what's already built so you don't rebuild it differently.</p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">📄</div>
            <h3>Documentation Built In</h3>
            <p>Architecture decisions, design rationale, and requirement traceability are captured in the conversation — not bolted on after 40 sprints.</p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">🧠</div>
            <h3>Bring Your Own LLM</h3>
            <p>Works with ChatGPT, Azure OpenAI, Gemini, and more. Use your company's preferred AI provider — your data stays on your infrastructure.</p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">🔒</div>
            <h3>Self-Hosted & Secure</h3>
            <p>Runs entirely on your infrastructure as a single binary. No data leaves your network. No cloud dependency. Your code stays yours.</p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">⚡</div>
            <h3>Real-time Collaboration</h3>
            <p>WebSocket-powered streaming of thinking, tool calls, and responses. Teams debate requirements together with the agent as a facilitator.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Integrations -->
    <section class="integrations">
      <div class="container">
        <p class="integrations-label">Connects to your existing stack</p>
        <div class="integration-logos">
          <div class="int-logo">
            <div class="int-icon">🦊</div>
            <span>GitLab</span>
          </div>
          <div class="int-logo">
            <div class="int-icon">📋</div>
            <span>Jira</span>
          </div>
          <div class="int-logo">
            <div class="int-icon">📄</div>
            <span>Confluence</span>
          </div>
          <div class="int-logo">
            <div class="int-icon">🧠</div>
            <span>Any LLM</span>
          </div>
        </div>
      </div>
    </section>

    <!-- The Ask Yourself Section -->
    <section class="ask-section">
      <div class="container">
        <div class="ask-card">
          <div class="install-glow"></div>
          <h2>If your team measures success in story points,<br>ask yourself:</h2>
          <div class="ask-grid">
            <div class="ask-item">
              <span class="ask-icon">🐛</span>
              <p>What's your <strong>defect rate</strong>?</p>
            </div>
            <div class="ask-item">
              <span class="ask-icon">📖</span>
              <p>What's your <strong>documentation coverage</strong>?</p>
            </div>
            <div class="ask-item">
              <span class="ask-icon">🧑‍💻</span>
              <p>How long to <strong>onboard a new engineer</strong>?</p>
            </div>
            <div class="ask-item">
              <span class="ask-icon">🚨</span>
              <p>What's your <strong>incident frequency</strong>?</p>
            </div>
          </div>
          <p class="ask-cta">If you don't like the answers, it's time for a different model.</p>
        </div>
      </div>
    </section>

    <!-- Pricing -->
    <section id="pricing" class="pricing">
      <div class="container">
        <div class="section-header">
          <div class="section-badge">Pricing</div>
          <h2>Transparent, usage-based pricing</h2>
          <p>Pay per seat plus token usage. No hidden costs. No lock-in.</p>
        </div>
        <div class="pricing-grid">
          <div class="pricing-card">
            <div class="pricing-tier">Starter</div>
            <div class="pricing-price">€3.99<span>/seat/mo</span></div>
            <div class="pricing-period">+ token usage costs</div>
            <ul class="pricing-features">
              <li>✅ All integrations (GitLab, Jira, Confluence)</li>
              <li>✅ Unlimited conversations</li>
              <li>✅ Self-hosted deployment</li>
              <li>✅ Bring your own LLM API key</li>
              <li>✅ Community support</li>
            </ul>
            <a href="#contact" class="btn btn-ghost" style="width: 100%; justify-content: center">Get started</a>
          </div>
          <div class="pricing-card featured">
            <div class="pricing-popular">Most Popular</div>
            <div class="pricing-tier">Team</div>
            <div class="pricing-price">€79<span>/seat/mo</span></div>
            <div class="pricing-period">+ token usage costs · on-premise</div>
            <ul class="pricing-features">
              <li>✅ Everything in Starter</li>
              <li>✅ Up to 50 seats</li>
              <li>✅ SSO / Azure AD integration</li>
              <li>✅ Priority support (24h SLA)</li>
              <li>✅ Custom system prompts per team</li>
              <li>✅ Usage analytics dashboard</li>
            </ul>
            <a href="#contact" class="btn btn-primary" style="width: 100%; justify-content: center">Contact Sales</a>
          </div>
          <div class="pricing-card">
            <div class="pricing-tier">Enterprise</div>
            <div class="pricing-price">Custom</div>
            <div class="pricing-period">volume-based pricing · enterprise licensing</div>
            <ul class="pricing-features">
              <li>✅ Everything in Team</li>
              <li>✅ Unlimited seats</li>
              <li>✅ On-premise LLM (no external API)</li>
              <li>✅ Dedicated account manager</li>
              <li>✅ Priority SLA & guided onboarding</li>
              <li>✅ Audit logging & compliance</li>
              <li>✅ Organizational volume discounts</li>
            </ul>
            <a href="#contact" class="btn btn-ghost" style="width: 100%; justify-content: center">Get a quote</a>
          </div>
        </div>
        <p class="pricing-note">💡 Token costs are passed through at provider rates. You bring your own API key — we don't mark up LLM usage.</p>
      </div>
    </section>

    <!-- Contact -->
    <section id="contact" class="contact-section">
      <div class="container">
        <div class="contact-card">
          <div class="install-glow"></div>
          <h2>Ready to build the right thing?</h2>
          <p>Book a 15-minute demo and see how Agile Agent eliminates rework in your development workflow.</p>
          <div class="contact-actions">
            <a href="mailto:andreseloysv@gmail.com?subject=Agile%20Agent%20Demo%20Request" class="btn btn-primary btn-lg">📧 Request a Demo</a>
            <a href="mailto:andreseloysv@gmail.com?subject=Agile%20Agent%20Inquiry" class="btn btn-ghost btn-lg">💬 Ask a question</a>
          </div>
          <p class="contact-email">Or email directly: <a href="mailto:andreseloysv@gmail.com">andreseloysv@gmail.com</a></p>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="footer">
      <div class="container footer-inner">
        <div class="footer-brand">
          <span class="logo-icon">🤖</span>
          <span class="logo-text">Agile Agent</span>
        </div>
        <p class="footer-copy">Quality is speed. Build the right thing.</p>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
const copied = ref(false);

function copyInstall() {
  navigator.clipboard.writeText('curl -fsSL https://raw.githubusercontent.com/andreseloysv/agile-agent-release/main/install.sh | bash');
  copied.value = true;
  setTimeout(() => copied.value = false, 2000);
}
</script>

<style>
/* ── Reset & Base ───────────────────────────────────────────────────── */
*, *::before, *::after { margin: 0; padding: 0; box-sizing: border-box; }

:root {
  --bg: #08080f;
  --bg-card: #12121e;
  --bg-card-hover: #1a1a2e;
  --border: rgba(255, 255, 255, 0.06);
  --border-strong: rgba(255, 255, 255, 0.1);
  --text: #e8e8f0;
  --text-secondary: #9898b0;
  --text-muted: #5a5a78;
  --accent: #7c5cff;
  --accent-light: #9b7fff;
  --accent-glow: rgba(124, 92, 255, 0.12);
  --gradient: linear-gradient(135deg, #7c5cff 0%, #c084fc 50%, #f472b6 100%);
  --red: #ef4444;
  --red-glow: rgba(239, 68, 68, 0.12);
  --radius: 12px;
  --radius-lg: 20px;
  --font: 'Inter', -apple-system, system-ui, sans-serif;
}

html { scroll-behavior: smooth; }
body {
  font-family: var(--font);
  background: var(--bg);
  color: var(--text);
  line-height: 1.6;
  -webkit-font-smoothing: antialiased;
}

a { color: var(--text-secondary); text-decoration: none; transition: color 0.2s; }
a:hover { color: var(--text); }

.container { max-width: 1120px; margin: 0 auto; padding: 0 24px; }

/* ── Buttons ────────────────────────────────────────────────────────── */
.btn {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  border: none;
  border-radius: 10px;
  font-family: var(--font);
  font-weight: 600;
  cursor: pointer;
  transition: all 0.25s ease;
  text-decoration: none;
}

.btn-primary {
  background: var(--accent);
  color: #fff;
  box-shadow: 0 0 24px rgba(124, 92, 255, 0.3);
}
.btn-primary:hover {
  background: var(--accent-light);
  box-shadow: 0 0 40px rgba(124, 92, 255, 0.5);
  transform: translateY(-1px);
  color: #fff;
}

.btn-ghost {
  background: transparent;
  color: var(--text-secondary);
  border: 1px solid var(--border-strong);
}
.btn-ghost:hover {
  color: var(--text);
  border-color: rgba(255,255,255,0.2);
  background: rgba(255,255,255,0.03);
}

.btn-sm { padding: 8px 16px; font-size: 13px; }
.btn-lg { padding: 14px 28px; font-size: 15px; }

/* ── Navigation ─────────────────────────────────────────────────────── */
.nav {
  position: fixed;
  top: 0; left: 0; right: 0;
  z-index: 100;
  background: rgba(8, 8, 15, 0.8);
  backdrop-filter: blur(20px);
  border-bottom: 1px solid var(--border);
}

.nav-inner {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 64px;
}

.logo { display: flex; align-items: center; gap: 10px; }
.logo-icon { font-size: 24px; }
.logo-text { font-size: 18px; font-weight: 700; color: var(--text); }

.nav-links {
  display: flex;
  align-items: center;
  gap: 32px;
  font-size: 14px;
  font-weight: 500;
}

/* ── Hero ────────────────────────────────────────────────────────────── */
.hero {
  position: relative;
  padding: 160px 0 80px;
  text-align: center;
  overflow: hidden;
}

.hero-glow {
  position: absolute;
  top: -200px;
  left: 50%;
  transform: translateX(-50%);
  width: 800px;
  height: 600px;
  background: radial-gradient(ellipse, rgba(124, 92, 255, 0.15) 0%, transparent 70%);
  pointer-events: none;
}

.hero-badge {
  display: inline-block;
  padding: 6px 16px;
  border-radius: 100px;
  font-size: 13px;
  font-weight: 500;
  color: var(--accent-light);
  background: var(--accent-glow);
  border: 1px solid rgba(124, 92, 255, 0.2);
  margin-bottom: 32px;
}

.hero h1 {
  font-size: clamp(36px, 5vw, 64px);
  font-weight: 800;
  line-height: 1.1;
  letter-spacing: -0.03em;
  margin-bottom: 24px;
}

.gradient-text {
  background: var(--gradient);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.hero-sub {
  font-size: 18px;
  line-height: 1.7;
  color: var(--text-secondary);
  max-width: 680px;
  margin: 0 auto 40px;
}
.hero-sub strong { color: var(--text); font-weight: 600; }

.hero-actions {
  display: flex;
  justify-content: center;
  gap: 16px;
  margin-bottom: 64px;
}

.hero-image {
  position: relative;
  max-width: 900px;
  margin: 0 auto;
  border-radius: var(--radius-lg);
  overflow: hidden;
  border: 1px solid var(--border-strong);
  box-shadow: 0 40px 100px rgba(0, 0, 0, 0.5), 0 0 60px rgba(124, 92, 255, 0.1);
}
.hero-image img { width: 100%; display: block; }
.hero-image-glow {
  position: absolute;
  inset: -2px;
  border-radius: var(--radius-lg);
  background: var(--gradient);
  opacity: 0.15;
  z-index: -1;
}

/* ── Stats Bar ──────────────────────────────────────────────────────── */
.stats-bar {
  padding: 64px 0;
  border-top: 1px solid var(--border);
  border-bottom: 1px solid var(--border);
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 40px;
  text-align: center;
}

.stat-number {
  font-size: 40px;
  font-weight: 800;
  background: linear-gradient(135deg, var(--red) 0%, #f97316 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  line-height: 1;
  margin-bottom: 8px;
}

.stat-label {
  font-size: 14px;
  color: var(--text-secondary);
  line-height: 1.4;
  margin-bottom: 6px;
}

.stat-source {
  font-size: 11px;
  color: var(--text-muted);
  font-style: italic;
}

/* ── Section Headers ────────────────────────────────────────────────── */
.section-header {
  text-align: center;
  margin-bottom: 64px;
}

.section-badge {
  display: inline-block;
  padding: 4px 14px;
  border-radius: 100px;
  font-size: 12px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: var(--accent-light);
  background: var(--accent-glow);
  border: 1px solid rgba(124, 92, 255, 0.15);
  margin-bottom: 20px;
}

.section-header h2 {
  font-size: clamp(28px, 3.5vw, 42px);
  font-weight: 800;
  line-height: 1.15;
  letter-spacing: -0.02em;
  margin-bottom: 16px;
}

.section-header p {
  color: var(--text-secondary);
  font-size: 17px;
  max-width: 640px;
  margin: 0 auto;
}

/* ── Problem Section ────────────────────────────────────────────────── */
.problem-section { padding: 100px 0; }

.problems-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
}

.problem-card {
  padding: 32px;
  border-radius: var(--radius);
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-left: 3px solid var(--red);
  transition: all 0.3s ease;
}
.problem-card:hover {
  background: var(--bg-card-hover);
  transform: translateY(-2px);
  box-shadow: 0 16px 32px rgba(0, 0, 0, 0.3);
}

.problem-icon {
  font-size: 24px;
  margin-bottom: 12px;
}

.problem-card h3 {
  font-size: 15px;
  font-weight: 700;
  margin-bottom: 8px;
  line-height: 1.4;
}

.problem-card p {
  font-size: 14px;
  color: var(--text-secondary);
  line-height: 1.6;
}

/* ── Features ───────────────────────────────────────────────────────── */
.features { padding: 100px 0; }

.features-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}

.feature-card {
  padding: 32px;
  border-radius: var(--radius);
  background: var(--bg-card);
  border: 1px solid var(--border);
  transition: all 0.3s ease;
}
.feature-card:hover {
  background: var(--bg-card-hover);
  border-color: var(--border-strong);
  transform: translateY(-4px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
}

.feature-icon {
  font-size: 28px;
  margin-bottom: 16px;
  width: 52px;
  height: 52px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--accent-glow);
  border-radius: 14px;
}

.feature-card h3 {
  font-size: 16px;
  font-weight: 700;
  margin-bottom: 8px;
}

.feature-card p {
  font-size: 14px;
  color: var(--text-secondary);
  line-height: 1.6;
}

/* ── Integrations ───────────────────────────────────────────────────── */
.integrations {
  padding: 64px 0;
  border-top: 1px solid var(--border);
  border-bottom: 1px solid var(--border);
}

.integrations-label {
  text-align: center;
  font-size: 13px;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: var(--text-muted);
  margin-bottom: 32px;
}

.integration-logos {
  display: flex;
  justify-content: center;
  gap: 64px;
  flex-wrap: wrap;
}

.int-logo {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  color: var(--text-secondary);
  font-size: 13px;
  font-weight: 500;
}

.int-icon {
  font-size: 32px;
  width: 64px;
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--bg-card);
  border-radius: 16px;
  border: 1px solid var(--border);
}

/* ── Ask Yourself ───────────────────────────────────────────────────── */
.ask-section { padding: 100px 0; }

.ask-card {
  position: relative;
  text-align: center;
  padding: 72px 48px;
  border-radius: var(--radius-lg);
  background: var(--bg-card);
  border: 1px solid var(--border-strong);
  overflow: hidden;
}

.ask-card h2 {
  font-size: clamp(22px, 2.5vw, 28px);
  font-weight: 700;
  margin-bottom: 40px;
  line-height: 1.4;
}

.ask-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
  margin-bottom: 32px;
}

.ask-item {
  padding: 24px 16px;
  border-radius: var(--radius);
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid var(--border);
}

.ask-icon { font-size: 28px; display: block; margin-bottom: 12px; }

.ask-item p {
  font-size: 14px;
  color: var(--text-secondary);
}
.ask-item strong { color: var(--text); }

.ask-cta {
  font-size: 18px;
  font-weight: 600;
  color: var(--accent-light);
}

/* ── Pricing ─────────────────────────────────────────────────────────── */
.pricing { padding: 100px 0; }

.pricing-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  align-items: start;
}

.pricing-card {
  padding: 36px 32px;
  border-radius: var(--radius);
  background: var(--bg-card);
  border: 1px solid var(--border);
  transition: all 0.3s ease;
  position: relative;
}
.pricing-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
}

.pricing-card.featured {
  border-color: var(--accent);
  box-shadow: 0 0 40px rgba(124, 92, 255, 0.15);
}

.pricing-popular {
  position: absolute;
  top: -12px;
  left: 50%;
  transform: translateX(-50%);
  padding: 4px 16px;
  border-radius: 100px;
  font-size: 11px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  background: var(--accent);
  color: #fff;
  white-space: nowrap;
}

.pricing-tier {
  font-size: 14px;
  font-weight: 600;
  color: var(--text-secondary);
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-bottom: 12px;
}

.pricing-price {
  font-size: 42px;
  font-weight: 800;
  line-height: 1;
  margin-bottom: 4px;
}
.pricing-price span {
  font-size: 15px;
  font-weight: 500;
  color: var(--text-secondary);
}

.pricing-period {
  font-size: 13px;
  color: var(--text-muted);
  margin-bottom: 24px;
}

.pricing-features {
  list-style: none;
  margin-bottom: 28px;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.pricing-features li {
  font-size: 13px;
  color: var(--text-secondary);
  line-height: 1.4;
}

.pricing-note {
  text-align: center;
  margin-top: 32px;
  font-size: 13px;
  color: var(--text-muted);
}

/* ── Contact ─────────────────────────────────────────────────────────── */
.contact-section { padding: 100px 0; }

.contact-card {
  position: relative;
  text-align: center;
  padding: 72px 48px;
  border-radius: var(--radius-lg);
  background: var(--bg-card);
  border: 1px solid var(--border-strong);
  overflow: hidden;
}

.contact-card h2 {
  font-size: 32px;
  font-weight: 800;
  margin-bottom: 12px;
}

.contact-card > p {
  color: var(--text-secondary);
  font-size: 16px;
  margin-bottom: 32px;
}

.contact-actions {
  display: flex;
  justify-content: center;
  gap: 16px;
  margin-bottom: 24px;
  flex-wrap: wrap;
}

.contact-email { font-size: 14px; color: var(--text-muted); }
.contact-email a { color: var(--accent-light); }
.contact-email a:hover { color: var(--accent); }

/* ── Footer ─────────────────────────────────────────────────────────── */
.footer {
  padding: 40px 0;
  border-top: 1px solid var(--border);
}

.footer-inner {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.footer-brand { display: flex; align-items: center; gap: 10px; }
.footer-copy { font-size: 13px; color: var(--text-muted); }

/* ── Shared ─────────────────────────────────────────────────────────── */
.install-glow {
  position: absolute;
  top: -100px;
  left: 50%;
  transform: translateX(-50%);
  width: 500px;
  height: 300px;
  background: radial-gradient(ellipse, rgba(124, 92, 255, 0.12) 0%, transparent 70%);
  pointer-events: none;
}

/* ── Responsive ─────────────────────────────────────────────────────── */
@media (max-width: 768px) {
  .features-grid { grid-template-columns: 1fr; }
  .problems-grid { grid-template-columns: 1fr; }
  .pricing-grid { grid-template-columns: 1fr; }
  .stats-grid { grid-template-columns: 1fr; gap: 32px; }
  .ask-grid { grid-template-columns: 1fr 1fr; }
  .hero-actions { flex-direction: column; align-items: center; }
  .nav-links a:not(.btn) { display: none; }
  .integration-logos { gap: 32px; }
  .contact-card { padding: 48px 24px; }
  .ask-card { padding: 48px 24px; }
  .contact-actions { flex-direction: column; align-items: center; }
}
</style>
