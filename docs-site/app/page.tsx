import Link from 'next/link'
import Image from 'next/image'
import { CodeBlock } from './components/CodeBlock'

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100" style={{ minHeight: '90vh', display: 'flex', alignItems: 'center' }}>
        <div className="container mx-auto px-6 py-24 text-center">
          <div className="flex justify-center mb-10">
            <Image src="/assets/thrynd.png" alt="Thrynd Logo" width={140} height={140} priority />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Thrynd CSS Framework
          </h1>
          <p className="text-xl md:text-2xl text-muted mb-12 max-w-3xl mx-auto leading-relaxed">
            A modern, opinionated CSS framework designed for the AI age. Beautiful defaults, 6 complete themes, and LLM-optimized documentation.
          </p>
          <div className="flex gap-4 justify-center flex-wrap mb-16">
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
          <div className="card-elevated max-w-2xl mx-auto">
            <div className="card-body p-8">
              <h3 className="text-lg font-semibold mb-6">Quick Install</h3>
              <CodeBlock language="bash">npm install thrynd</CodeBlock>
              <div className="divider-text my-6">
                <span>or use CDN</span>
              </div>
              <CodeBlock language="html">{'<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/thrynd@latest/dist/thrynd.min.css">'}</CodeBlock>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-6">Why Thrynd?</h2>
          <p className="text-xl text-muted text-center mb-16 max-w-2xl mx-auto">Everything you need to build beautiful, accessible interfaces faster.</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="card-elevated">
            <div className="card-body p-8">
              <h3 className="card-title mb-3">Beautiful Defaults</h3>
              <p className="text-muted">
                Gorgeous styling out of the box. No configuration needed to get started.
              </p>
            </div>
          </div>

          <div className="card-elevated">
            <div className="card-body p-8">
              <h3 className="card-title mb-3">6 Complete Themes</h3>
              <p className="text-muted">
                Switch between Modern, Classic, Minimal, Neon, Nature, and Corporate themes instantly.
              </p>
            </div>
          </div>

          <div className="card-elevated">
            <div className="card-body p-8">
              <h3 className="card-title mb-3">LLM-Optimized</h3>
              <p className="text-muted">
                Structured documentation designed for 95%+ AI accuracy. Perfect for ChatGPT and Claude.
              </p>
            </div>
          </div>

          <div className="card-elevated">
            <div className="card-body p-8">
              <h3 className="card-title mb-3">Zero Config</h3>
              <p className="text-muted">
                Works immediately with no setup. Add one CSS file and start building.
              </p>
            </div>
          </div>

          <div className="card-elevated">
            <div className="card-body p-8">
              <h3 className="card-title mb-3">Lightweight</h3>
              <p className="text-muted">
                Only 56KB minified (75KB full). Optimized for performance.
              </p>
            </div>
          </div>

          <div className="card-elevated">
            <div className="card-body p-8">
              <h3 className="card-title mb-3">Framework Agnostic</h3>
              <p className="text-muted">
                Use with React, Vue, Svelte, or vanilla JavaScript. Works everywhere.
              </p>
            </div>
          </div>
          </div>
        </div>
      </section>

      {/* Component Preview */}
      <section className="bg-gray-50 py-24">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-6">40+ Production-Ready Components</h2>
          <p className="text-xl text-muted text-center mb-16 max-w-2xl mx-auto">Buttons, forms, cards, modals, and more. All fully themed and accessible.</p>
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

          <div className="text-center mt-12">
            <Link href="/docs/components" className="btn-primary btn-lg">
              Explore All Components
            </Link>
          </div>
        </div>
      </section>

      {/* LLM-Friendly Section */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-6">Built for the AI Age</h2>
            <p className="text-xl text-center text-muted mb-16 max-w-2xl mx-auto">
              The first CSS framework optimized for AI assistants. Get 95%+ accurate code generation from ChatGPT, Claude, and other LLMs.
            </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="card-outlined">
              <div className="card-body p-6">
                <h3 className="font-semibold mb-3">Structured Component Catalog</h3>
                <p className="text-sm text-muted">
                  Machine-readable JSON schema with usage patterns, examples, and anti-patterns for every component.
                </p>
              </div>
            </div>

            <div className="card-outlined">
              <div className="card-body p-6">
                <h3 className="font-semibold mb-3">Decision Trees</h3>
                <p className="text-sm text-muted">
                  Help AI assistants choose the right component for any use case with built-in decision logic.
                </p>
              </div>
            </div>

            <div className="card-outlined">
              <div className="card-body p-6">
                <h3 className="font-semibold mb-3">Anti-Pattern Detection</h3>
                <p className="text-sm text-muted">
                  Common mistakes are documented with severity levels to prevent incorrect usage.
                </p>
              </div>
            </div>

            <div className="card-outlined">
              <div className="card-body p-6">
                <h3 className="font-semibold mb-3">Accessibility Built-In</h3>
                <p className="text-sm text-muted">
                  Every component includes accessibility requirements so AI generates WCAG-compliant code.
                </p>
              </div>
            </div>
          </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-indigo-100 to-blue-50 py-24">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-muted mb-12 max-w-2xl mx-auto">
            Join thousands of developers using the CSS framework built for modern development workflows.
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

      {/* Footer */}
      <footer className="py-12 border-t" style={{ borderColor: 'var(--color-border)' }}>
        <div className="container mx-auto px-6 text-center">
          <div className="flex justify-center mb-4">
            <Image src="/assets/thrynd.png" alt="Thrynd" width={40} height={40} />
          </div>
          <p className="text-muted mb-4">Built with care for the AI age</p>
          <div className="flex gap-6 justify-center text-sm text-muted">
            <a href="https://github.com/yourusername/thrynd" className="hover:text-primary">GitHub</a>
            <a href="/docs/getting-started" className="hover:text-primary">Documentation</a>
            <a href="/docs/components" className="hover:text-primary">Components</a>
          </div>
        </div>
      </footer>
    </main>
  )
}
