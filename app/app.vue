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
        <div class="section-cta">
          <a href="#features" class="btn btn-primary btn-lg">🎯 See how Agile Agent fixes this</a>
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
        <div class="section-cta">
          <a href="#contact" class="btn btn-primary btn-lg">📧 See it in action — request a demo</a>
        </div>
      </div>
    </section>

    <!-- Integrations -->
    <section class="integrations">
      <div class="container">
        <p class="integrations-label">Connects to your existing stack</p>
        <div class="integration-logos">
          <div class="int-logo">
            <div class="int-icon">
              <svg viewBox="0 0 380 380" width="32" height="32"><path d="M282.83 170.73l-.27-.69-26.14-68.22a6.81 6.81 0 00-2.69-3.24 7 7 0 00-8 .43 7 7 0 00-2.32 3.52l-17.65 54H154.29l-17.65-54a6.86 6.86 0 00-2.32-3.53 7 7 0 00-8-.43 6.87 6.87 0 00-2.69 3.24L97.44 170l-.26.69a48.54 48.54 0 0016.1 56.07l.09.07.24.17 39.82 29.82 19.7 14.91 12 9.06a8.07 8.07 0 009.76 0l12-9.06 19.7-14.91 40.06-30 .1-.08a48.56 48.56 0 0016.08-56.04" fill="#e24329"/><path d="M282.83 170.73l-.27-.69a115.46 115.46 0 00-44.57 26.83l-47.99 43.74 31.2 23.6 40.06-30 .1-.08a48.56 48.56 0 0016.08-56.04" fill="#fc6d26"/><path d="M155.99 264.2l19.7 14.91 12 9.06a8.07 8.07 0 009.76 0l12-9.06 19.7-14.91-31.2-23.6z" fill="#fca326"/><path d="M97.44 170.04l-.26.69a48.54 48.54 0 0016.1 56.07l.09.07.24.17 39.82 29.82 31.15-23.6-48-43.74a115.46 115.46 0 00-44.53-26.82" fill="#fc6d26"/></svg>
            </div>
            <span>GitLab</span>
          </div>
          <div class="int-logo">
            <div class="int-icon">
              <svg viewBox="0 0 256 256" width="32" height="32"><defs><linearGradient id="jira-a" x1="98.03%" x2="58.89%" y1=".61%" y2="40.72%"><stop offset="18%" stop-color="#0052CC"/><stop offset="100%" stop-color="#2684FF"/></linearGradient><linearGradient id="jira-b" x1="0%" x2="41.87%" y1="100.13%" y2="58.41%"><stop offset="18%" stop-color="#0052CC"/><stop offset="100%" stop-color="#2684FF"/></linearGradient></defs><path d="M244.66 0H121.72a55.3 55.3 0 0055.28 55.28h22.4v21.6a55.3 55.3 0 0055.28 55.28V11.02A11.03 11.03 0 00244.66 0z" fill="#2684FF"/><path d="M183.82 61.26H60.89a55.3 55.3 0 0055.28 55.28h22.4v21.6a55.3 55.3 0 0055.28 55.28V72.28a11.03 11.03 0 00-11.03-11.02z" fill="url(#jira-a)"/><path d="M122.98 122.53H0a55.3 55.3 0 0055.28 55.28h22.4v21.6a55.3 55.3 0 0055.28 55.28V133.55a11.03 11.03 0 00-10.98-11.02z" fill="url(#jira-b)"/></svg>
            </div>
            <span>Jira</span>
          </div>
          <div class="int-logo">
            <div class="int-icon">
              <svg viewBox="0 0 256 256" width="32" height="32"><defs><linearGradient id="conf-a" x1="99.14%" x2="33.8%" y1="113.9%" y2="37.76%"><stop offset="0%" stop-color="#0052CC"/><stop offset="92.3%" stop-color="#2380FB"/></linearGradient><linearGradient id="conf-b" x1=".86%" x2="66.2%" y1="-13.9%" y2="62.24%"><stop offset="0%" stop-color="#0052CC"/><stop offset="92.3%" stop-color="#2380FB"/></linearGradient></defs><path d="M9.26 187.38s-5.6 7.13 2.83 11.1l76.14 36.85c0 0 5.23 3.59 10.7-2.2 0 0 51.6-63.9 3.4-108.9-46.1-43-86.8 33.4-93.1 63.1z" fill="url(#conf-a)"/><path d="M246.74 68.62s5.6-7.13-2.83-11.1L167.77 20.67s-5.23-3.59-10.7 2.2c0 0-51.6 63.9-3.4 108.9 46.1 43 86.8-33.4 93.1-63.1z" fill="url(#conf-b)"/></svg>
            </div>
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
            <div class="pricing-trial-badge">14-day free trial</div>
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
            <a href="#contact" class="btn btn-ghost" style="width: 100%; justify-content: center">Start free trial</a>
          </div>
          <div class="pricing-card featured">
            <div class="pricing-popular">Most Popular</div>
            <div class="pricing-tier">Team</div>
            <div class="pricing-price"><span class="price-strikethrough">€99</span> €79<span>/seat/mo</span></div>
            <div class="pricing-period">+ token usage costs · on-premise · launch price</div>
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

    <!-- FAQ -->
    <section id="faq" class="faq-section">
      <div class="container">
        <div class="section-header">
          <div class="section-badge">FAQ</div>
          <h2>Frequently asked questions</h2>
        </div>
        <div class="faq-list">
          <details class="faq-item">
            <summary>How does self-hosting work?</summary>
            <p>Agile Agent is distributed as a single binary. You run it on your server (bare metal, VM, Docker, or Kubernetes). All data — conversations, tool calls, and configurations — stays on your infrastructure. No cloud dependency.</p>
          </details>
          <details class="faq-item">
            <summary>Is my code or data sent to external servers?</summary>
            <p>Your code and project data are processed entirely on your infrastructure. The only external call is to your chosen LLM provider (e.g., Azure OpenAI) and only when you explicitly ask the agent a question. You control which LLM endpoint is used.</p>
          </details>
          <details class="faq-item">
            <summary>What LLMs are supported?</summary>
            <p>Any OpenAI-compatible API: ChatGPT, Azure OpenAI, Google Gemini, Anthropic Claude, Ollama (local), and more. You bring your own API key — we support any provider that follows the OpenAI chat completions format.</p>
          </details>
          <details class="faq-item">
            <summary>What are the token usage costs?</summary>
            <p>Token costs are passed through at your LLM provider's rates. We add zero markup. You use your own API key, so you pay your provider directly. Typical cost: €0.01–€0.05 per conversation depending on context length and model.</p>
          </details>
          <details class="faq-item">
            <summary>Can I try Agile Agent before buying?</summary>
            <p>Yes. The Starter plan includes a 14-day free trial with full access to all features. No credit card required. For Enterprise evaluations, we offer a guided pilot program — contact us to set it up.</p>
          </details>
          <details class="faq-item">
            <summary>How is Agile Agent different from Copilot or Cursor?</summary>
            <p>Copilot and Cursor help you write code faster. Agile Agent helps you write the <em>right</em> code. It connects to Jira, Confluence, and GitLab to understand requirements in full context — so you build what the customer actually needs, not just what autocomplete suggests.</p>
          </details>
        </div>
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
      <div class="container">
        <div class="footer-inner">
          <div class="footer-brand">
            <span class="logo-icon">🤖</span>
            <span class="logo-text">Agile Agent</span>
          </div>
          <p class="footer-copy">Quality is speed. Build the right thing.</p>
        </div>
        <div class="footer-links">
          <a href="/privacy">Privacy Policy</a>
          <a href="/terms">Terms of Service</a>
          <a href="/impressum">Impressum</a>
          <a href="mailto:andreseloysv@gmail.com">Contact</a>
        </div>
        <p class="footer-legal">© 2026 Agile Agent. All rights reserved.</p>
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

/* ── Section CTA ────────────────────────────────────────────────────── */
.section-cta {
  text-align: center;
  margin-top: 48px;
}

/* ── Pricing extras ─────────────────────────────────────────────────── */
.pricing-trial-badge {
  display: inline-block;
  padding: 4px 12px;
  border-radius: 100px;
  font-size: 11px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  background: rgba(34, 197, 94, 0.12);
  color: #4ade80;
  border: 1px solid rgba(34, 197, 94, 0.2);
  margin-bottom: 12px;
}

.price-strikethrough {
  font-size: 22px;
  font-weight: 500;
  color: var(--text-muted);
  text-decoration: line-through;
  margin-right: 8px;
}

/* ── FAQ ─────────────────────────────────────────────────────────────── */
.faq-section { padding: 100px 0; }

.faq-list {
  max-width: 720px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.faq-item {
  padding: 24px 28px;
  border-radius: var(--radius);
  background: var(--bg-card);
  border: 1px solid var(--border);
  transition: all 0.3s ease;
}
.faq-item:hover {
  border-color: var(--border-strong);
}
.faq-item[open] {
  border-color: rgba(124, 92, 255, 0.3);
  background: var(--bg-card-hover);
}

.faq-item summary {
  font-size: 15px;
  font-weight: 600;
  cursor: pointer;
  list-style: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.faq-item summary::-webkit-details-marker { display: none; }
.faq-item summary::after {
  content: '+';
  font-size: 20px;
  color: var(--text-muted);
  transition: transform 0.2s;
}
.faq-item[open] summary::after {
  content: '−';
  color: var(--accent-light);
}

.faq-item p {
  margin-top: 16px;
  font-size: 14px;
  color: var(--text-secondary);
  line-height: 1.7;
}

/* ── Footer ─────────────────────────────────────────────────────────── */
.footer {
  padding: 48px 0 32px;
  border-top: 1px solid var(--border);
}

.footer-inner {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
}

.footer-brand { display: flex; align-items: center; gap: 10px; }
.footer-copy { font-size: 13px; color: var(--text-muted); }

.footer-links {
  display: flex;
  gap: 24px;
  justify-content: center;
  margin-bottom: 16px;
}
.footer-links a {
  font-size: 13px;
  color: var(--text-muted);
}
.footer-links a:hover { color: var(--text-secondary); }

.footer-legal {
  text-align: center;
  font-size: 12px;
  color: var(--text-muted);
}

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
