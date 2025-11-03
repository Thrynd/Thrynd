'use client'

import { useState, useEffect } from 'react'
import { ThemeSwitcher } from '../components/ThemeSwitcher'

const defaultCode = `<div class="container py-8">
  <h1 class="text-4xl font-bold mb-6">Interactive Playground</h1>

  <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
    <div class="card-elevated">
      <div class="card-body">
        <h3 class="card-title">Welcome to Thrynd!</h3>
        <p class="text-muted mb-4">
          Edit the code on the left to see live changes.
          Try switching themes to see how components adapt.
        </p>
        <button class="btn-primary">Get Started</button>
      </div>
    </div>

    <div class="card">
      <div class="card-body">
        <h3 class="card-title">Quick Example</h3>
        <div class="alert alert-success mb-3">
          Success! All components are responsive.
        </div>
        <div class="badge-group">
          <span class="badge badge-primary">New</span>
          <span class="badge badge-success">Active</span>
        </div>
      </div>
    </div>
  </div>

  <div class="mt-8">
    <h2 class="text-2xl font-bold mb-4">Try More Components</h2>
    <div class="flex gap-3 flex-wrap mb-6">
      <button class="btn-primary">Primary</button>
      <button class="btn-secondary">Secondary</button>
      <button class="btn-danger">Danger</button>
      <button class="btn-ghost">Ghost</button>
    </div>

    <div class="card max-w-md">
      <div class="card-body">
        <h4 class="font-semibold mb-3">Sample Form</h4>
        <div class="form-group">
          <label for="email">Email</label>
          <input type="email" id="email" class="form-input" placeholder="your@email.com">
        </div>
        <button class="btn-primary w-full">Submit</button>
      </div>
    </div>
  </div>
</div>`

export default function Playground() {
  const [code, setCode] = useState(defaultCode)
  const [renderedHtml, setRenderedHtml] = useState(defaultCode)
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  useEffect(() => {
    // Debounce the rendering to avoid too many updates
    const timer = setTimeout(() => {
      setRenderedHtml(code)
    }, 500)

    return () => clearTimeout(timer)
  }, [code])

  if (!isClient) {
    return null // Prevent SSR mismatch
  }

  return (
    <div style={{ height: '100vh', display: 'flex', flexDirection: 'column' }}>
      {/* Top Bar */}
      <div className="navbar" style={{ borderBottom: '1px solid var(--color-border)', background: 'var(--color-surface, white)', backdropFilter: 'blur(10px)' }}>
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0.75rem 1.5rem' }}>
          <div className="flex items-center gap-4">
            <a href="/" className="text-xl font-bold">Thrynd</a>
            <span className="text-muted">Playground</span>
          </div>
          <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
            <ThemeSwitcher />
            <a href="/docs/getting-started" className="btn-ghost btn-sm">
              Docs
            </a>
            <button
              className="btn-secondary btn-sm"
              onClick={() => setCode(defaultCode)}
            >
              Reset
            </button>
          </div>
        </div>
      </div>

      {/* Editor and Preview */}
      <div style={{ flex: 1, display: 'grid', gridTemplateColumns: '1fr 1fr', overflow: 'hidden' }}>
        {/* Code Editor */}
        <div style={{ display: 'flex', flexDirection: 'column', borderRight: '1px solid var(--color-border)' }}>
          <div style={{ padding: '1rem', background: 'var(--color-surface, var(--color-gray-50))', borderBottom: '1px solid var(--color-border)' }}>
            <h3 className="font-semibold">HTML Code</h3>
            <p className="text-sm text-muted">Edit your code here</p>
          </div>
          <div style={{ flex: 1, overflow: 'auto' }}>
            <textarea
              value={code}
              onChange={(e) => setCode(e.target.value)}
              spellCheck={false}
              style={{
                width: '100%',
                height: '100%',
                padding: '1rem',
                border: 'none',
                fontFamily: 'monospace',
                fontSize: '14px',
                lineHeight: '1.6',
                resize: 'none',
                outline: 'none',
                background: 'var(--color-gray-900)',
                color: 'var(--color-gray-100)',
              }}
            />
          </div>
        </div>

        {/* Preview */}
        <div style={{ display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
          <div style={{ padding: '1rem', background: 'var(--color-surface, var(--color-gray-50))', borderBottom: '1px solid var(--color-border)' }}>
            <h3 className="font-semibold">Live Preview</h3>
            <p className="text-sm text-muted">See your changes in real-time</p>
          </div>
          <div
            style={{
              flex: 1,
              overflow: 'auto',
              background: 'var(--color-background, white)',
            }}
            dangerouslySetInnerHTML={{ __html: renderedHtml }}
          />
        </div>
      </div>

      {/* Instructions */}
      <div style={{ borderTop: '1px solid var(--color-border)', padding: '0.75rem 1.5rem', background: 'var(--color-gray-50)' }}>
        <div className="container flex items-center justify-between">
          <div className="text-sm text-muted">
            💡 Tip: Try switching themes to see how components adapt automatically
          </div>
          <div className="text-sm">
            <a href="/docs/components" className="text-primary font-semibold">
              View Components →
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
