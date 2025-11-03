import Link from 'next/link'

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100" style={{ minHeight: '80vh', display: 'flex', alignItems: 'center' }}>
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-6xl font-bold mb-6">
            Thrynd CSS Framework
          </h1>
          <p className="text-2xl text-muted mb-8 max-w-3xl mx-auto">
            A modern, opinionated CSS framework designed for the AI age. Beautiful defaults, 6 complete themes, and LLM-optimized documentation.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link href="/docs/getting-started" className="btn-primary btn-lg">
              Get Started
            </Link>
            <Link href="/docs/components" className="btn-secondary btn-lg">
              View Components
            </Link>
            <Link href="/playground" className="btn-ghost btn-lg">
              Try Playground
            </Link>
          </div>

          {/* Quick Install */}
          <div className="card-elevated max-w-2xl mx-auto mt-12">
            <div className="card-body">
              <h3 className="text-lg font-semibold mb-3">Quick Install</h3>
              <div className="code-block">
                <code>npm install thrynd</code>
              </div>
              <div className="divider-text my-4">
                <span>or use CDN</span>
              </div>
              <div className="code-block">
                <code>{'<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/thrynd@latest/dist/thrynd.min.css">'}</code>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-4xl font-bold text-center mb-12">Why Thrynd?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="card">
            <div className="card-body">
              <div className="text-4xl mb-3">🎨</div>
              <h3 className="card-title">Beautiful Defaults</h3>
              <p className="text-muted">
                Gorgeous styling out of the box. No configuration needed to get started.
              </p>
            </div>
          </div>

          <div className="card">
            <div className="card-body">
              <div className="text-4xl mb-3">🔄</div>
              <h3 className="card-title">6 Complete Themes</h3>
              <p className="text-muted">
                Switch between Modern, Classic, Minimal, Neon, Nature, and Corporate themes instantly.
              </p>
            </div>
          </div>

          <div className="card">
            <div className="card-body">
              <div className="text-4xl mb-3">🤖</div>
              <h3 className="card-title">LLM-Optimized</h3>
              <p className="text-muted">
                Structured documentation designed for 95%+ AI accuracy. Perfect for ChatGPT and Claude.
              </p>
            </div>
          </div>

          <div className="card">
            <div className="card-body">
              <div className="text-4xl mb-3">📦</div>
              <h3 className="card-title">Zero Config</h3>
              <p className="text-muted">
                Works immediately with no setup. Add one CSS file and start building.
              </p>
            </div>
          </div>

          <div className="card">
            <div className="card-body">
              <div className="text-4xl mb-3">⚡</div>
              <h3 className="card-title">Lightweight</h3>
              <p className="text-muted">
                Only 56KB minified (75KB full). Optimized for performance.
              </p>
            </div>
          </div>

          <div className="card">
            <div className="card-body">
              <div className="text-4xl mb-3">🎯</div>
              <h3 className="card-title">Framework Agnostic</h3>
              <p className="text-muted">
                Use with React, Vue, Svelte, or vanilla JavaScript. Works everywhere.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Component Preview */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">40+ Production-Ready Components</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Buttons */}
            <div className="card-elevated">
              <div className="card-body">
                <h3 className="font-bold mb-4">Buttons</h3>
                <div className="flex gap-3 flex-wrap">
                  <button className="btn-primary">Primary</button>
                  <button className="btn-secondary">Secondary</button>
                  <button className="btn-danger">Danger</button>
                  <button className="btn-ghost">Ghost</button>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="card-elevated">
              <div className="card-body">
                <h3 className="font-bold mb-4">Forms</h3>
                <div className="form-group">
                  <label htmlFor="demo-input">Email</label>
                  <input type="email" id="demo-input" className="form-input" placeholder="your@email.com" />
                </div>
              </div>
            </div>

            {/* Alerts */}
            <div className="card-elevated">
              <div className="card-body">
                <h3 className="font-bold mb-4">Alerts</h3>
                <div className="alert alert-success">
                  <strong>Success!</strong> Operation completed
                </div>
              </div>
            </div>

            {/* Badges */}
            <div className="card-elevated">
              <div className="card-body">
                <h3 className="font-bold mb-4">Badges & Avatars</h3>
                <div className="flex items-center gap-3 mb-3">
                  <span className="badge badge-primary">New</span>
                  <span className="badge badge-success">Active</span>
                  <span className="badge badge-danger">Hot</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="avatar avatar-sm">AB</div>
                  <div className="avatar">CD</div>
                  <div className="avatar avatar-lg">EF</div>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-8">
            <Link href="/docs/components" className="btn-primary btn-lg">
              Explore All Components
            </Link>
          </div>
        </div>
      </section>

      {/* LLM-Friendly Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-6">Built for the AI Age</h2>
          <p className="text-xl text-center text-muted mb-12">
            Thrynd is the first CSS framework optimized for AI assistants. Get 95%+ accurate code generation from ChatGPT, Claude, and other LLMs.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="card-outlined">
              <div className="card-body">
                <h3 className="font-semibold mb-3">📋 Structured Component Catalog</h3>
                <p className="text-sm text-muted">
                  Machine-readable JSON schema with usage patterns, examples, and anti-patterns for every component.
                </p>
              </div>
            </div>

            <div className="card-outlined">
              <div className="card-body">
                <h3 className="font-semibold mb-3">🎯 Decision Trees</h3>
                <p className="text-sm text-muted">
                  Help AI assistants choose the right component for any use case with built-in decision logic.
                </p>
              </div>
            </div>

            <div className="card-outlined">
              <div className="card-body">
                <h3 className="font-semibold mb-3">⚠️ Anti-Pattern Detection</h3>
                <p className="text-sm text-muted">
                  Common mistakes are documented with severity levels to prevent incorrect usage.
                </p>
              </div>
            </div>

            <div className="card-outlined">
              <div className="card-body">
                <h3 className="font-semibold mb-3">Accessibility Built-In</h3>
                <p className="text-sm text-muted">
                  Every component includes accessibility requirements so AI generates WCAG-compliant code.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-indigo-100 to-blue-50 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-muted mb-8">
            Join the CSS framework built for modern development workflows.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link href="/docs/getting-started" className="btn-primary btn-lg">
              Read Documentation
            </Link>
            <a href="https://github.com/yourusername/thrynd" className="btn-secondary btn-lg">
              View on GitHub
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}
