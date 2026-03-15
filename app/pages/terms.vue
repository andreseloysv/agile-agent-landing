<template>
  <div class="legal-page">
    <nav class="nav">
      <div class="container nav-inner">
        <a href="/" class="logo">
          <img src="/icon.png" class="logo-icon" alt="Agile Agent Logo" />
          <span class="logo-text">Agile Agent</span>
        </a>
        <a href="/" class="btn btn-ghost btn-sm">← Back</a>
      </div>
    </nav>

    <main class="container legal-content">
      <h1>Terms of Service</h1>
      <p class="legal-date">Last updated: March 15, 2026</p>

      <section>
        <h2>1. Acceptance of Terms</h2>
        <p>By accessing the Agile Agent website or using the Agile Agent software ("the Service"), you agree to be bound by these Terms of Service. If you do not agree, do not use the Service.</p>
      </section>

      <section>
        <h2>2. Description of Service</h2>
        <p>Agile Agent is a self-hosted AI-powered code review and requirements analysis platform. The software is deployed on your own infrastructure and connects to your existing tools (GitLab, Jira, Confluence) and your chosen AI provider.</p>
      </section>

      <section>
        <h2>3. License</h2>
        <p>Subject to your compliance with these Terms, Agile Agent grants you a limited, non-exclusive, non-transferable license to install and use the software according to your subscription plan. You may not reverse engineer, modify, distribute, or resell the software.</p>
      </section>

      <section>
        <h2>4. Subscription &amp; Billing</h2>
        <p>Paid plans are billed monthly per seat. Token usage costs are passed through at your LLM provider's rates with zero markup. You may cancel your subscription at any time; access continues until the end of the billing period.</p>
      </section>

      <section>
        <h2>5. Your Responsibilities</h2>
        <p>You are responsible for maintaining the security of your self-hosted deployment, including API keys, access tokens, and network configuration. You are responsible for compliance with applicable laws in your jurisdiction regarding data processing and AI usage.</p>
      </section>

      <section>
        <h2>6. Data Ownership</h2>
        <p>All data processed by Agile Agent — including code, conversations, and configurations — remains your property. Since the software runs on your infrastructure, you retain full control over your data at all times.</p>
      </section>

      <section>
        <h2>7. Limitation of Liability</h2>
        <p>Agile Agent is provided "as is" without warranties of any kind. We are not liable for any damages arising from your use of the software, including but not limited to data loss, business interruption, or decisions made based on AI-generated recommendations.</p>
      </section>

      <section>
        <h2>8. Changes to Terms</h2>
        <p>We may update these Terms from time to time. Continued use of the Service after changes constitutes acceptance of the updated Terms.</p>
      </section>

      <section>
        <h2>9. Contact</h2>
        <p>For questions about these Terms, contact us at <a href="mailto:contact@getagileagent.com">contact@getagileagent.com</a>.</p>
      </section>
    </main>

    <footer class="legal-footer">
      <div class="container">
        <p>© 2026 Agile Agent. All rights reserved.</p>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
useHead({ title: 'Terms of Service — Agile Agent' });
</script>

<style scoped>
.legal-page {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background: var(--bg);
  color: var(--text);
  font-family: 'Inter', -apple-system, system-ui, sans-serif;
}

.nav {
  position: sticky;
  top: 0;
  z-index: 100;
  background: var(--nav-bg);
  backdrop-filter: blur(20px);
  border-bottom: 1px solid var(--border);
}

.nav-inner {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 64px;
}

.container { max-width: 1120px; margin: 0 auto; padding: 0 24px; }

.logo { display: flex; align-items: center; gap: 10px; text-decoration: none; }
.logo-icon { width: 32px; height: 32px; border-radius: 8px; object-fit: cover; }
.logo-text { font-size: 18px; font-weight: 700; color: var(--text); }

.btn {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  border-radius: 10px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  text-decoration: none;
  border: none;
}
.btn-ghost {
  background: var(--btn-ghost-bg);
  color: var(--text-secondary);
  border: 1px solid var(--border-strong);
}
.btn-ghost:hover {
  background: var(--btn-ghost-hover-bg);
  color: var(--text);
}
.btn-sm { padding: 8px 16px; font-size: 13px; }

.legal-content {
  flex: 1;
  padding: 80px 24px;
  max-width: 720px;
}

.legal-content h1 {
  font-size: 36px;
  font-weight: 800;
  letter-spacing: -0.02em;
  margin-bottom: 8px;
}

.legal-date {
  color: var(--text-muted);
  font-size: 14px;
  margin-bottom: 48px;
}

.legal-content section {
  margin-bottom: 36px;
}

.legal-content h2 {
  font-size: 18px;
  font-weight: 700;
  margin-bottom: 12px;
  color: var(--text);
}

.legal-content p {
  color: var(--text-secondary);
  font-size: 15px;
  line-height: 1.8;
  margin-bottom: 12px;
}

.legal-content a {
  color: var(--accent);
  text-decoration: none;
}
.legal-content a:hover {
  text-decoration: underline;
}

.legal-footer {
  border-top: 1px solid var(--border);
  padding: 24px 0;
}
.legal-footer p {
  text-align: center;
  font-size: 12px;
  color: var(--text-muted);
}
</style>
