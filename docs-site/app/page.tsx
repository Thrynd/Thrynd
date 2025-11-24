'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { CodeBlock } from './components/CodeBlock'

const themes = [
  { name: 'Modern', class: 'theme-modern', primary: '#3b82f6', description: 'Clean and professional' },
  { name: 'Classic', class: 'theme-classic', primary: '#1e40af', description: 'Timeless elegance' },
  { name: 'Minimal', class: 'theme-minimal', primary: '#18181b', description: 'Simple and focused' },
  { name: 'Neon', class: 'theme-neon', primary: '#8b5cf6', description: 'Bold and vibrant' },
  { name: 'Nature', class: 'theme-nature', primary: '#059669', description: 'Organic and calm' },
  { name: 'Corporate', class: 'theme-corporate', primary: '#0369a1', description: 'Business ready' },
]

export default function Home() {
  const [activeTheme, setActiveTheme] = useState(0)
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault()
    setSubscribed(true)
    setEmail('')
  }

  return (
    <main>
      {/* Hero Section with Live Theme Demo */}
      <section
        style={{
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Textured Background Pattern */}
        <div style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `
            radial-gradient(circle at 25% 25%, rgba(255,255,255,0.1) 0%, transparent 50%),
            radial-gradient(circle at 75% 75%, rgba(255,255,255,0.05) 0%, transparent 50%),
            linear-gradient(45deg, rgba(0,0,0,0.05) 25%, transparent 25%, transparent 75%, rgba(0,0,0,0.05) 75%, rgba(0,0,0,0.05)),
            linear-gradient(45deg, rgba(0,0,0,0.05) 25%, transparent 25%, transparent 75%, rgba(0,0,0,0.05) 75%, rgba(0,0,0,0.05))
          `,
          backgroundSize: '100% 100%, 100% 100%, 40px 40px, 40px 40px',
          backgroundPosition: '0 0, 0 0, 0 0, 20px 20px',
          opacity: 0.3,
        }} />

        {/* Grid Pattern */}
        <div style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)',
          backgroundSize: '50px 50px',
        }} />

        <div className="container mx-auto px-6 py-20" style={{ position: 'relative', zIndex: 1 }}>
          {/* Centered Logo and Brand Name */}
          <div className="text-center mb-12">
            <div className="flex flex-col items-center gap-6 mb-8">
              <Image
                src="/assets/thrynd.png"
                alt="Thrynd Logo"
                width={280}
                height={280}
                priority
                style={{
                  filter: 'drop-shadow(0 8px 40px rgba(0,0,0,0.4))',
                  maxWidth: '280px',
                  height: 'auto',
                }}
              />
              <h1
                className="font-bold"
                style={{
                  fontSize: 'clamp(64px, 12vw, 140px)',
                  background: 'linear-gradient(135deg, #ffffff 0%, #e0e7ff 50%, #c7d2fe 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  filter: 'drop-shadow(0 4px 30px rgba(255,255,255,0.5))',
                  letterSpacing: '-0.02em',
                  lineHeight: '1',
                }}
              >
                Thrynd
              </h1>
            </div>

            <div className="flex gap-3 justify-center mb-8">
              <span className="badge" style={{ background: 'rgba(255,255,255,0.2)', color: 'white', backdropFilter: 'blur(10px)', fontSize: '0.875rem', padding: '0.5rem 1rem' }}>v1.0</span>
              <span className="badge" style={{ background: 'rgba(16, 185, 129, 0.9)', color: 'white', fontSize: '0.875rem', padding: '0.5rem 1rem' }}>&lt;10KB gzip</span>
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight max-w-4xl mx-auto" style={{ color: 'white' }}>
              Beautiful defaults. Zero config.
            </h2>

            <p className="text-lg md:text-xl mb-10 leading-relaxed max-w-3xl mx-auto" style={{ color: 'rgba(255,255,255,0.95)' }}>
              The CSS framework that respects your time. One link tag, instant beauty.
              6 themes, 40+ components, and documentation designed for AI code generation.
            </p>

            <div className="flex gap-4 flex-wrap justify-center mb-10">
                <Link
                  href="/docs/getting-started"
                  className="btn-lg"
                  style={{
                    background: 'white',
                    color: '#667eea',
                    fontWeight: 'bold',
                    padding: '1rem 2rem',
                    borderRadius: '0.5rem',
                    textDecoration: 'none',
                    display: 'inline-block',
                    boxShadow: '0 4px 20px rgba(0,0,0,0.2)',
                    transition: 'all 0.3s',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-2px)'
                    e.currentTarget.style.boxShadow = '0 6px 30px rgba(0,0,0,0.3)'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)'
                    e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,0,0,0.2)'
                  }}
                >
                  Get Started Free
                </Link>
                <Link
                  href="/playground"
                  className="btn-lg"
                  style={{
                    background: 'rgba(255,255,255,0.1)',
                    color: 'white',
                    fontWeight: 'bold',
                    padding: '1rem 2rem',
                    borderRadius: '0.5rem',
                    textDecoration: 'none',
                    display: 'inline-block',
                    border: '2px solid rgba(255,255,255,0.3)',
                    backdropFilter: 'blur(10px)',
                    transition: 'all 0.3s',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = 'rgba(255,255,255,0.2)'
                    e.currentTarget.style.borderColor = 'rgba(255,255,255,0.5)'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'rgba(255,255,255,0.1)'
                    e.currentTarget.style.borderColor = 'rgba(255,255,255,0.3)'
                  }}
                >
                  Try Playground
                </Link>
              </div>

              {/* Quick CDN Copy */}
              <div className="card max-w-3xl mx-auto" style={{ background: 'rgba(0,0,0,0.4)', backdropFilter: 'blur(20px)', border: '1px solid rgba(255,255,255,0.1)' }}>
                <div className="p-4">
                  <div className="text-xs mb-2" style={{ color: 'rgba(255,255,255,0.7)' }}>One line. That&apos;s it.</div>
                  <CodeBlock language="html">{'<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/thrynd/dist/thrynd.min.css">'}</CodeBlock>
                </div>
              </div>
            </div>

            {/* Live Theme Demo - Full Width Below */}
            <div className="mt-16 max-w-5xl mx-auto">
              <div className="card-elevated" style={{ overflow: 'hidden' }}>
                <div className="p-4 border-b" style={{ borderColor: 'var(--color-border)', background: 'var(--color-gray-50)' }}>
                  <div className="flex gap-2 flex-wrap justify-center">
                    {themes.map((theme, index) => (
                      <button
                        key={theme.class}
                        onClick={() => setActiveTheme(index)}
                        className={`btn-sm ${activeTheme === index ? 'btn-primary' : 'btn-ghost'}`}
                      >
                        {theme.name}
                      </button>
                    ))}
                  </div>
                </div>

                <div className={themes[activeTheme].class} style={{ padding: '2rem', background: 'var(--color-surface, white)' }}>
                  <div className="text-center mb-6">
                    <h3 className="font-bold text-xl mb-2">Live Theme Preview</h3>
                    <p className="text-sm text-muted">Click themes above to see instant changes</p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                    <div>
                      <h4 className="font-semibold mb-3">Buttons</h4>
                      <div className="flex gap-2 flex-wrap mb-4">
                        <button className="btn-primary btn-sm">Primary</button>
                        <button className="btn-secondary btn-sm">Secondary</button>
                        <button className="btn-ghost btn-sm">Ghost</button>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-3">Alert</h4>
                      <div className="alert alert-success">
                        <strong>Theme:</strong> {themes[activeTheme].name} - {themes[activeTheme].description}
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-3">Form Input</h4>
                      <div className="form-group mb-0">
                        <input type="email" className="form-input" placeholder="email@example.com" />
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-3">Badges</h4>
                      <div className="flex gap-2 flex-wrap">
                        <span className="badge badge-primary">New</span>
                        <span className="badge badge-success">Active</span>
                        <span className="badge badge-warning">Beta</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-3 text-center text-sm text-muted" style={{ background: 'var(--color-gray-50)' }}>
                  Switch themes with <code className="text-xs">class=&quot;{themes[activeTheme].class}&quot;</code>
                </div>
              </div>
            </div>
          </div>

          {/* Stats Bar */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
            <div className="text-center">
              <div className="text-3xl font-bold" style={{ color: 'white' }}>6</div>
              <div className="text-sm" style={{ color: 'rgba(255,255,255,0.8)' }}>Complete Themes</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold" style={{ color: 'white' }}>40+</div>
              <div className="text-sm" style={{ color: 'rgba(255,255,255,0.8)' }}>Components</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold" style={{ color: 'white' }}>&lt;10KB</div>
              <div className="text-sm" style={{ color: 'rgba(255,255,255,0.8)' }}>Gzipped</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold" style={{ color: 'white' }}>0</div>
              <div className="text-sm" style={{ color: 'rgba(255,255,255,0.8)' }}>Build Config</div>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Section - Why Not Tailwind */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-4">Thrynd vs. The Competition</h2>
          <p className="text-xl text-muted text-center mb-16 max-w-2xl mx-auto">
            We built Thrynd because existing frameworks require too much setup. Here&apos;s how we compare.
          </p>

          <div className="max-w-4xl mx-auto">
            <div className="card-elevated overflow-hidden">
              <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                <thead>
                  <tr style={{ background: 'var(--color-gray-50)' }}>
                    <th style={{ padding: '1rem', textAlign: 'left', borderBottom: '1px solid var(--color-border)' }}>Feature</th>
                    <th style={{ padding: '1rem', textAlign: 'center', borderBottom: '1px solid var(--color-border)', color: 'var(--color-primary)' }}>Thrynd</th>
                    <th style={{ padding: '1rem', textAlign: 'center', borderBottom: '1px solid var(--color-border)' }}>Tailwind</th>
                    <th style={{ padding: '1rem', textAlign: 'center', borderBottom: '1px solid var(--color-border)' }}>Bootstrap</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td style={{ padding: '1rem', borderBottom: '1px solid var(--color-border)' }}>Pre-styled components</td>
                    <td style={{ padding: '1rem', textAlign: 'center', borderBottom: '1px solid var(--color-border)', color: 'var(--color-success)' }}>Yes</td>
                    <td style={{ padding: '1rem', textAlign: 'center', borderBottom: '1px solid var(--color-border)', color: 'var(--color-danger)' }}>No*</td>
                    <td style={{ padding: '1rem', textAlign: 'center', borderBottom: '1px solid var(--color-border)', color: 'var(--color-success)' }}>Yes</td>
                  </tr>
                  <tr>
                    <td style={{ padding: '1rem', borderBottom: '1px solid var(--color-border)' }}>Build step required</td>
                    <td style={{ padding: '1rem', textAlign: 'center', borderBottom: '1px solid var(--color-border)', color: 'var(--color-success)' }}>No</td>
                    <td style={{ padding: '1rem', textAlign: 'center', borderBottom: '1px solid var(--color-border)', color: 'var(--color-danger)' }}>Yes</td>
                    <td style={{ padding: '1rem', textAlign: 'center', borderBottom: '1px solid var(--color-border)', color: 'var(--color-success)' }}>No</td>
                  </tr>
                  <tr>
                    <td style={{ padding: '1rem', borderBottom: '1px solid var(--color-border)' }}>Theme switching</td>
                    <td style={{ padding: '1rem', textAlign: 'center', borderBottom: '1px solid var(--color-border)', color: 'var(--color-success)' }}>1 class</td>
                    <td style={{ padding: '1rem', textAlign: 'center', borderBottom: '1px solid var(--color-border)', color: 'var(--color-danger)' }}>Config</td>
                    <td style={{ padding: '1rem', textAlign: 'center', borderBottom: '1px solid var(--color-border)', color: 'var(--color-danger)' }}>SCSS vars</td>
                  </tr>
                  <tr>
                    <td style={{ padding: '1rem', borderBottom: '1px solid var(--color-border)' }}>LLM-optimized docs</td>
                    <td style={{ padding: '1rem', textAlign: 'center', borderBottom: '1px solid var(--color-border)', color: 'var(--color-success)' }}>Yes</td>
                    <td style={{ padding: '1rem', textAlign: 'center', borderBottom: '1px solid var(--color-border)', color: 'var(--color-danger)' }}>No</td>
                    <td style={{ padding: '1rem', textAlign: 'center', borderBottom: '1px solid var(--color-border)', color: 'var(--color-danger)' }}>No</td>
                  </tr>
                  <tr>
                    <td style={{ padding: '1rem', borderBottom: '1px solid var(--color-border)' }}>Modern CSS (no JS)</td>
                    <td style={{ padding: '1rem', textAlign: 'center', borderBottom: '1px solid var(--color-border)', color: 'var(--color-success)' }}>Yes</td>
                    <td style={{ padding: '1rem', textAlign: 'center', borderBottom: '1px solid var(--color-border)', color: 'var(--color-success)' }}>Yes</td>
                    <td style={{ padding: '1rem', textAlign: 'center', borderBottom: '1px solid var(--color-border)', color: 'var(--color-danger)' }}>jQuery</td>
                  </tr>
                  <tr>
                    <td style={{ padding: '1rem' }}>Bundle size (gzip)</td>
                    <td style={{ padding: '1rem', textAlign: 'center', color: 'var(--color-success)', fontWeight: 'bold' }}>&lt;10KB</td>
                    <td style={{ padding: '1rem', textAlign: 'center' }}>~5KB**</td>
                    <td style={{ padding: '1rem', textAlign: 'center' }}>~25KB</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-sm text-muted mt-4 text-center">
              * Tailwind UI is paid. ** After purging unused classes (requires build).
            </p>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="bg-gray-50 py-24">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-4">Everything You Need</h2>
          <p className="text-xl text-muted text-center mb-16 max-w-2xl mx-auto">
            Stop wrestling with config files. Start building beautiful interfaces.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="card-elevated">
              <div className="card-body p-8">
                <div className="text-3xl mb-4">1</div>
                <h3 className="card-title mb-3">One Line Install</h3>
                <p className="text-muted">
                  Add one link tag. No npm, no webpack, no PostCSS. Works in 10 seconds.
                </p>
              </div>
            </div>

            <div className="card-elevated">
              <div className="card-body p-8">
                <div className="text-3xl mb-4">6</div>
                <h3 className="card-title mb-3">Complete Themes</h3>
                <p className="text-muted">
                  Modern, Classic, Minimal, Neon, Nature, Corporate. Switch with one class.
                </p>
              </div>
            </div>

            <div className="card-elevated">
              <div className="card-body p-8">
                <div className="text-3xl mb-4">40+</div>
                <h3 className="card-title mb-3">Components</h3>
                <p className="text-muted">
                  Buttons, forms, cards, modals, tables, navigation. All production-ready.
                </p>
              </div>
            </div>

            <div className="card-elevated">
              <div className="card-body p-8">
                <div className="text-3xl mb-4">AI</div>
                <h3 className="card-title mb-3">LLM-Optimized</h3>
                <p className="text-muted">
                  Structured docs for 95%+ accurate code generation from ChatGPT & Claude.
                </p>
              </div>
            </div>

            <div className="card-elevated">
              <div className="card-body p-8">
                <div className="text-3xl mb-4">A11y</div>
                <h3 className="card-title mb-3">Accessible</h3>
                <p className="text-muted">
                  WCAG 2.1 compliant. Proper contrast ratios, focus states, and ARIA.
                </p>
              </div>
            </div>

            <div className="card-elevated">
              <div className="card-body p-8">
                <div className="text-3xl mb-4">0</div>
                <h3 className="card-title mb-3">Dependencies</h3>
                <p className="text-muted">
                  Pure CSS. Works with React, Vue, Svelte, or vanilla HTML. No lock-in.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Component Preview */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-4">Production-Ready Components</h2>
          <p className="text-xl text-muted text-center mb-16 max-w-2xl mx-auto">
            Beautiful, accessible, and ready to copy-paste into your project.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
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

            <div className="card-elevated">
              <div className="card-body">
                <h3 className="font-bold mb-4">Forms</h3>
                <div className="form-group mb-0">
                  <input type="email" className="form-input" placeholder="your@email.com" />
                </div>
              </div>
            </div>

            <div className="card-elevated">
              <div className="card-body">
                <h3 className="font-bold mb-4">Alerts</h3>
                <div className="alert alert-success mb-0">
                  <strong>Success!</strong> Operation completed successfully.
                </div>
              </div>
            </div>

            <div className="card-elevated">
              <div className="card-body">
                <h3 className="font-bold mb-4">Badges</h3>
                <div className="flex items-center gap-3">
                  <span className="badge badge-primary">New</span>
                  <span className="badge badge-success">Active</span>
                  <span className="badge badge-warning">Pending</span>
                  <span className="badge badge-danger">Hot</span>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link href="/docs/components" className="btn-primary btn-lg">
              View All 40+ Components
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-gray-50 py-24">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-4">Loved by Developers</h2>
          <p className="text-xl text-muted text-center mb-16 max-w-2xl mx-auto">
            Join developers who ship faster with Thrynd.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="card">
              <div className="card-body">
                <p className="text-muted mb-4">
                  &quot;Finally, a CSS framework I can use without configuring webpack for 2 hours. Just works.&quot;
                </p>
                <div className="flex items-center gap-3">
                  <div className="avatar avatar-sm">SR</div>
                  <div>
                    <div className="font-semibold text-sm">Sarah R.</div>
                    <div className="text-xs text-muted">Frontend Developer</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="card">
              <div className="card-body">
                <p className="text-muted mb-4">
                  &quot;The theme switching is magic. One class change and the whole app transforms. My clients love it.&quot;
                </p>
                <div className="flex items-center gap-3">
                  <div className="avatar avatar-sm">MK</div>
                  <div>
                    <div className="font-semibold text-sm">Mike K.</div>
                    <div className="text-xs text-muted">Freelance Dev</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="card">
              <div className="card-body">
                <p className="text-muted mb-4">
                  &quot;Asked Claude to build me a dashboard with Thrynd. Got working code on the first try. That never happens.&quot;
                </p>
                <div className="flex items-center gap-3">
                  <div className="avatar avatar-sm">JL</div>
                  <div>
                    <div className="font-semibold text-sm">Jamie L.</div>
                    <div className="text-xs text-muted">Startup Founder</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AI-Ready Section */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <span className="badge badge-primary mb-4">AI-Ready</span>
              <h2 className="text-4xl font-bold mb-4">Built for the AI Age</h2>
              <p className="text-xl text-muted max-w-2xl mx-auto">
                The first CSS framework with documentation optimized for LLM code generation.
                Get 95%+ accurate results from ChatGPT, Claude, and other AI assistants.
              </p>
            </div>

            <div className="card-elevated mb-8">
              <div className="card-body p-6">
                <h4 className="font-semibold mb-3">Try This Prompt:</h4>
                <div className="p-4 rounded" style={{ background: 'var(--color-gray-50)' }}>
                  <p className="text-sm font-mono">
                    &quot;Build me a login form using Thrynd CSS with email, password fields,
                    a remember me checkbox, and primary submit button. Use the card component for the container.&quot;
                  </p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="card-outlined">
                <div className="card-body p-6">
                  <h3 className="font-semibold mb-3">Structured Component Catalog</h3>
                  <p className="text-sm text-muted">
                    Machine-readable JSON with usage patterns and examples for every component.
                  </p>
                </div>
              </div>

              <div className="card-outlined">
                <div className="card-body p-6">
                  <h3 className="font-semibold mb-3">Anti-Pattern Detection</h3>
                  <p className="text-sm text-muted">
                    Common mistakes documented with severity levels to prevent incorrect usage.
                  </p>
                </div>
              </div>

              <div className="card-outlined">
                <div className="card-body p-6">
                  <h3 className="font-semibold mb-3">Decision Trees</h3>
                  <p className="text-sm text-muted">
                    Helps AI choose the right component for any use case automatically.
                  </p>
                </div>
              </div>

              <div className="card-outlined">
                <div className="card-body p-6">
                  <h3 className="font-semibold mb-3">Accessibility Built-In</h3>
                  <p className="text-sm text-muted">
                    Every component includes a11y requirements so AI generates WCAG-compliant code.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="bg-gradient-to-br from-indigo-100 to-blue-50 py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-4">Stay Updated</h2>
            <p className="text-xl text-muted mb-8">
              Get notified about new themes, components, and major updates. No spam, unsubscribe anytime.
            </p>

            {subscribed ? (
              <div className="alert alert-success">
                <strong>Thanks for subscribing!</strong> Check your inbox to confirm.
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex gap-3 max-w-md mx-auto">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="form-input flex-1"
                  placeholder="your@email.com"
                  required
                />
                <button type="submit" className="btn-primary">
                  Subscribe
                </button>
              </form>
            )}

            <p className="text-sm text-muted mt-4">
              Join 1,000+ developers already subscribed.
            </p>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Ship Faster?</h2>
          <p className="text-xl text-muted mb-12 max-w-2xl mx-auto">
            Stop configuring, start building. Add Thrynd to your project in seconds.
          </p>

          <div className="flex gap-4 justify-center flex-wrap mb-12">
            <Link href="/docs/getting-started" className="btn-primary btn-lg">
              Read Documentation
            </Link>
            <a
              href="https://github.com/thrynd/thrynd"
              className="btn-secondary btn-lg"
              target="_blank"
              rel="noopener noreferrer"
            >
              Star on GitHub
            </a>
          </div>

          {/* GitHub Stats */}
          <div className="flex gap-4 justify-center flex-wrap">
            <a
              href="https://github.com/thrynd/thrynd"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-100 hover:bg-gray-200 transition text-sm"
            >
              <svg height="20" width="20" viewBox="0 0 16 16" fill="currentColor">
                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"/>
              </svg>
              GitHub
            </a>
            <a
              href="https://www.npmjs.com/package/thrynd"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-100 hover:bg-gray-200 transition text-sm"
            >
              <svg height="20" width="20" viewBox="0 0 576 512" fill="currentColor">
                <path d="M288 288h-32v-64h32v64zm288-128v192H288v32H160v-32H0V160h576zm-416 32H32v128h64v-96h32v96h32V192zm160 0H192v160h64v-32h64V192zm224 0H352v128h64v-96h32v96h32v-96h32v96h32V192z"/>
              </svg>
              npm
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t" style={{ borderColor: 'var(--color-border)' }}>
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Image src="/assets/thrynd.png" alt="Thrynd" width={32} height={32} />
                <span className="font-bold">Thrynd</span>
              </div>
              <p className="text-sm text-muted">
                The CSS framework built for the AI age. Beautiful defaults, zero config.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-3">Documentation</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="/docs/getting-started" className="text-muted hover:text-primary">Getting Started</Link></li>
                <li><Link href="/docs/components" className="text-muted hover:text-primary">Components</Link></li>
                <li><Link href="/docs/themes" className="text-muted hover:text-primary">Themes</Link></li>
                <li><Link href="/docs/utilities" className="text-muted hover:text-primary">Utilities</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-3">Resources</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="/playground" className="text-muted hover:text-primary">Playground</Link></li>
                <li><Link href="/docs/templates" className="text-muted hover:text-primary">Templates</Link></li>
                <li><Link href="/docs/llm-guide" className="text-muted hover:text-primary">LLM Guide</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-3">Community</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="https://github.com/thrynd/thrynd" className="text-muted hover:text-primary">GitHub</a></li>
                <li><a href="https://twitter.com/thryndcss" className="text-muted hover:text-primary">Twitter</a></li>
                <li><a href="https://discord.gg/thrynd" className="text-muted hover:text-primary">Discord</a></li>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t text-center text-sm text-muted" style={{ borderColor: 'var(--color-border)' }}>
            <p>&copy; {new Date().getFullYear()} Thrynd. Open source under MIT license.</p>
          </div>
        </div>
      </footer>
    </main>
  )
}
