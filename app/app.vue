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
          <a href="#features">Features</a>
          <a href="#how-it-works">How it works</a>
          <a href="#pricing">Pricing</a>
          <a href="#contact" class="btn btn-primary btn-sm">Contact Sales</a>
        </div>
      </div>
    </nav>

    <!-- Hero -->
    <section class="hero">
      <div class="hero-glow"></div>
      <div class="container hero-inner">
        <div class="hero-badge">✨ Self-hosted AI agent — no cloud dependency</div>
        <h1>Ship code faster<br>with AI that <span class="gradient-text">understands your stack</span></h1>
        <p class="hero-sub">
          An AI code review agent that reads your <strong>GitLab repos</strong>,
          <strong>Jira tickets</strong>, and <strong>Confluence docs</strong> — all in one conversation.
          Runs as a single binary. No Node.js required.
        </p>
        <div class="hero-actions">
          <a href="#install" class="btn btn-primary btn-lg">
            <span>⚡</span> Install in 30 seconds
          </a>
          <a href="#features" class="btn btn-ghost btn-lg">Learn more →</a>
        </div>
        <div class="hero-image">
          <div class="hero-image-glow"></div>
          <img src="/hero-screenshot.png" alt="Agile Agent UI showing AI code review with GitLab and Jira integration" />
        </div>
      </div>
    </section>

    <!-- Logos / Integrations -->
    <section class="integrations">
      <div class="container">
        <p class="integrations-label">Integrates with your existing stack</p>
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

    <!-- Features -->
    <section id="features" class="features">
      <div class="container">
        <div class="section-header">
          <div class="section-badge">Features</div>
          <h2>Everything your team needs<br>to accelerate development</h2>
          <p>Built for developers who use GitLab, Jira, and Confluence daily.</p>
        </div>
        <div class="features-grid">
          <div class="feature-card">
            <div class="feature-icon">🔍</div>
            <h3>GitLab Code Search</h3>
            <p>Search across repositories, read files, and review code directly from your conversations. Full URL auto-parsing.</p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">📋</div>
            <h3>Jira Integration</h3>
            <p>Fetch tickets, linked stories, and solution documents. The agent understands your project context.</p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">📄</div>
            <h3>Confluence Docs</h3>
            <p>Pull architecture docs, design decisions, and runbooks into the conversation automatically.</p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">🧠</div>
            <h3>Bring Your Own LLM</h3>
            <p>Works with ChatGPT, Azure OpenAI, Gemini, and more. Use your company's preferred AI provider.</p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">⚡</div>
            <h3>Real-time Streaming</h3>
            <p>WebSocket-powered streaming of thinking, tool calls, and responses. See exactly what the agent is doing.</p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">🔒</div>
            <h3>Self-hosted & Secure</h3>
            <p>Runs entirely on your machine. No data leaves your network. Your code stays yours.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- How it works -->
    <section id="how-it-works" class="how-it-works">
      <div class="container">
        <div class="section-header">
          <div class="section-badge">How it works</div>
          <h2>From install to first review<br>in under a minute</h2>
        </div>
        <div class="steps">
          <div class="step">
            <div class="step-number">1</div>
            <div class="step-content">
              <h3>Install with one command</h3>
              <p>A single curl command downloads the binary, sets up the background service, and opens the web UI.</p>
              <code>curl -fsSL https://...install.sh | bash</code>
            </div>
          </div>
          <div class="step">
            <div class="step-number">2</div>
            <div class="step-content">
              <h3>Add your API keys</h3>
              <p>Configure your ChatGPT / Azure OpenAI, GitLab, Jira, and Confluence tokens in the Settings page. One-click import/export.</p>
            </div>
          </div>
          <div class="step">
            <div class="step-number">3</div>
            <div class="step-content">
              <h3>Create a project & start chatting</h3>
              <p>Point the agent at your GitLab project and Jira board, set a system prompt, and ask it anything.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Install / CTA -->
    <section id="install" class="install-section">
      <div class="container">
        <div class="install-card">
          <div class="install-glow"></div>
          <h2>Get started in 30 seconds</h2>
          <p>One command. No Node.js. No Docker. Just a native binary that runs on macOS.</p>
          <div class="install-code">
            <code>curl -fsSL https://raw.githubusercontent.com/andreseloysv/agile-agent-release/main/install.sh | bash</code>
            <button class="copy-btn" @click="copyInstall">{{ copied ? '✓ Copied' : '📋 Copy' }}</button>
          </div>
          <div class="install-details">
            <span>✅ macOS (Apple Silicon & Intel)</span>
            <span>✅ 61MB single binary</span>
            <span>✅ Starts on boot automatically</span>
          </div>
        </div>
      </div>
    </section>

    <!-- Pricing -->
    <section id="pricing" class="pricing">
      <div class="container">
        <div class="section-header">
          <div class="section-badge">Pricing</div>
          <h2>Simple, transparent pricing</h2>
          <p>Start free. Scale when you're ready.</p>
        </div>
        <div class="pricing-grid">
          <div class="pricing-card">
            <div class="pricing-tier">Starter</div>
            <div class="pricing-price">$3.99<span>/mo</span></div>
            <div class="pricing-period">per user · billed monthly</div>
            <ul class="pricing-features">
              <li>✅ All integrations (GitLab, Jira, Confluence)</li>
              <li>✅ Unlimited conversations</li>
              <li>✅ Single user</li>
              <li>✅ Self-hosted</li>
              <li>✅ Community support</li>
            </ul>
            <a href="#install" class="btn btn-ghost" style="width: 100%; justify-content: center">Start free trial</a>
          </div>
          <div class="pricing-card featured">
            <div class="pricing-popular">Most Popular</div>
            <div class="pricing-tier">Team</div>
            <div class="pricing-price">€79<span>/user/month</span></div>
            <div class="pricing-period">billed annually · on-premise deployment</div>
            <ul class="pricing-features">
              <li>✅ Everything in Starter</li>
              <li>✅ Up to 50 users</li>
              <li>✅ SSO / Azure AD integration</li>
              <li>✅ Priority support (24h response)</li>
              <li>✅ Custom system prompts per team</li>
              <li>✅ Usage analytics dashboard</li>
            </ul>
            <a href="#contact" class="btn btn-primary" style="width: 100%; justify-content: center">Contact Sales</a>
          </div>
          <div class="pricing-card">
            <div class="pricing-tier">Enterprise</div>
            <div class="pricing-price">Custom</div>
            <div class="pricing-period">tailored to your organization · from €50k/year</div>
            <ul class="pricing-features">
              <li>✅ Everything in Team</li>
              <li>✅ Unlimited users</li>
              <li>✅ On-premise LLM support (no external API)</li>
              <li>✅ Audit logging & compliance</li>
              <li>✅ Dedicated account manager</li>
              <li>✅ SLA with guaranteed uptime</li>
              <li>✅ Custom integrations & onboarding</li>
            </ul>
            <a href="#contact" class="btn btn-ghost" style="width: 100%; justify-content: center">Get a quote</a>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact -->
    <section id="contact" class="contact-section">
      <div class="container">
        <div class="contact-card">
          <div class="install-glow"></div>
          <h2>Ready to accelerate your team?</h2>
          <p>Book a 15-minute demo and see how Agile Agent fits into your development workflow.</p>
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
        <p class="footer-copy">Built with ❤️ for developers</p>
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
  max-width: 640px;
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

/* ── How it works ───────────────────────────────────────────────────── */
.how-it-works { padding: 100px 0; }

.steps {
  max-width: 640px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 40px;
}

.step {
  display: flex;
  gap: 24px;
  align-items: flex-start;
}

.step-number {
  flex-shrink: 0;
  width: 44px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 12px;
  background: var(--accent);
  color: #fff;
  font-size: 18px;
  font-weight: 800;
  box-shadow: 0 0 20px rgba(124, 92, 255, 0.3);
}

.step-content h3 {
  font-size: 18px;
  font-weight: 700;
  margin-bottom: 6px;
}

.step-content p {
  font-size: 14px;
  color: var(--text-secondary);
  line-height: 1.6;
  margin-bottom: 12px;
}

.step-content code {
  display: inline-block;
  padding: 8px 14px;
  border-radius: 8px;
  background: var(--bg-card);
  border: 1px solid var(--border);
  font-size: 13px;
  font-family: 'SF Mono', 'Fira Code', monospace;
  color: var(--accent-light);
}

/* ── Install Section ────────────────────────────────────────────────── */
.install-section { padding: 100px 0; }

.install-card {
  position: relative;
  text-align: center;
  padding: 72px 48px;
  border-radius: var(--radius-lg);
  background: var(--bg-card);
  border: 1px solid var(--border-strong);
  overflow: hidden;
}

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

.install-card h2 {
  font-size: 32px;
  font-weight: 800;
  margin-bottom: 12px;
}

.install-card > p {
  color: var(--text-secondary);
  font-size: 16px;
  margin-bottom: 32px;
}

.install-code {
  display: flex;
  align-items: center;
  gap: 12px;
  max-width: 700px;
  margin: 0 auto 24px;
  padding: 16px 20px;
  border-radius: 12px;
  background: var(--bg);
  border: 1px solid var(--border-strong);
}

.install-code code {
  flex: 1;
  font-size: 13px;
  font-family: 'SF Mono', 'Fira Code', monospace;
  color: var(--accent-light);
  text-align: left;
  word-break: break-all;
}

.copy-btn {
  padding: 8px 16px;
  border-radius: 8px;
  background: var(--accent-glow);
  color: var(--accent-light);
  border: 1px solid rgba(124, 92, 255, 0.2);
  font-family: var(--font);
  font-size: 13px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;
  white-space: nowrap;
}
.copy-btn:hover {
  background: rgba(124, 92, 255, 0.2);
}

.install-details {
  display: flex;
  justify-content: center;
  gap: 32px;
  font-size: 13px;
  color: var(--text-secondary);
  flex-wrap: wrap;
}

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

/* ── Responsive ─────────────────────────────────────────────────────── */
@media (max-width: 768px) {
  .features-grid { grid-template-columns: 1fr; }
  .hero-actions { flex-direction: column; align-items: center; }
  .nav-links a:not(.btn) { display: none; }
  .integration-logos { gap: 32px; }
  .install-code { flex-direction: column; }
  .install-details { flex-direction: column; align-items: center; gap: 8px; }
  .step { flex-direction: column; }
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

.contact-email {
  font-size: 14px;
  color: var(--text-muted);
}
.contact-email a {
  color: var(--accent-light);
}
.contact-email a:hover {
  color: var(--accent);
}

@media (max-width: 768px) {
  .pricing-grid { grid-template-columns: 1fr; }
  .contact-card { padding: 48px 24px; }
  .contact-actions { flex-direction: column; align-items: center; }
}
</style>
