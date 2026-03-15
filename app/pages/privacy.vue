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
      <h1>Privacy Policy</h1>
      <p class="legal-date">Last updated: March 15, 2026</p>

      <section>
        <h2>1. Overview</h2>
        <p>Agile Agent ("we", "us", "our") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard information when you use our website and software products.</p>
      </section>

      <section>
        <h2>2. Information We Collect</h2>
        <h3>2.1 Website</h3>
        <p>When you visit our website, we may collect basic anonymized analytics data such as page views, referral source, and country. We do not use cookies for tracking purposes.</p>
        <h3>2.2 Agile Agent Software</h3>
        <p>Agile Agent is a self-hosted application. All data — including conversations, tool calls, code analysis, and configurations — is processed and stored entirely on your own infrastructure. <strong>No data is sent to our servers.</strong></p>
      </section>

      <section>
        <h2>3. Third-Party Services</h2>
        <p>When using Agile Agent, the only external communication is with your chosen LLM provider (e.g., Azure OpenAI, Google Gemini). This connection is configured and controlled entirely by you. We have no access to these communications.</p>
      </section>

      <section>
        <h2>4. Data Storage</h2>
        <p>We do not store any customer data on our servers. All project data, conversations, and configurations reside on your self-hosted infrastructure. Your API keys and credentials are stored locally and never transmitted to us.</p>
      </section>

      <section>
        <h2>5. Contact Information</h2>
        <p>If you submit your email address to request a demo or contact us, we will use it solely to respond to your inquiry. We do not sell or share email addresses with third parties.</p>
      </section>

      <section>
        <h2>6. Your Rights</h2>
        <p>You have the right to request access to, correction of, or deletion of any personal data we hold. Since Agile Agent is self-hosted, you have full control over your data at all times.</p>
      </section>

      <section>
        <h2>7. Contact</h2>
        <p>For any privacy-related questions, contact us at <a href="mailto:contact@getagileagent.com">contact@getagileagent.com</a>.</p>
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
useHead({ title: 'Privacy Policy — Agile Agent' });
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

.legal-content h3 {
  font-size: 15px;
  font-weight: 600;
  margin: 16px 0 8px;
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
