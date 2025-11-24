'use client'

import { useState, useEffect, useCallback } from 'react'
import { ThemeSwitcher } from '../components/ThemeSwitcher'
import Link from 'next/link'

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

const templates = [
  { name: 'Default', code: defaultCode },
  {
    name: 'Login Form',
    code: `<div class="container py-12">
  <div class="max-w-md mx-auto">
    <div class="card">
      <div class="card-body p-8">
        <h2 class="text-2xl font-bold text-center mb-6">Sign In</h2>

        <form>
          <div class="form-group">
            <label for="email">Email</label>
            <input type="email" id="email" class="form-input" placeholder="you@example.com">
          </div>

          <div class="form-group">
            <label for="password">Password</label>
            <input type="password" id="password" class="form-input" placeholder="Enter password">
          </div>

          <div class="form-group">
            <label class="flex items-center gap-2">
              <input type="checkbox" class="form-checkbox">
              <span class="text-sm">Remember me</span>
            </label>
          </div>

          <button type="submit" class="btn-primary w-full">Sign In</button>
        </form>

        <p class="text-center text-sm text-muted mt-4">
          Don't have an account? <a href="#" class="text-primary">Sign up</a>
        </p>
      </div>
    </div>
  </div>
</div>`
  },
  {
    name: 'Dashboard Card',
    code: `<div class="container py-8">
  <h1 class="text-3xl font-bold mb-6">Dashboard</h1>

  <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
    <div class="card">
      <div class="card-body">
        <div class="text-sm text-muted mb-1">Total Users</div>
        <div class="text-3xl font-bold">12,543</div>
        <div class="text-sm text-success mt-2">+12% from last month</div>
      </div>
    </div>

    <div class="card">
      <div class="card-body">
        <div class="text-sm text-muted mb-1">Revenue</div>
        <div class="text-3xl font-bold">$45,231</div>
        <div class="text-sm text-success mt-2">+8% from last month</div>
      </div>
    </div>

    <div class="card">
      <div class="card-body">
        <div class="text-sm text-muted mb-1">Active Projects</div>
        <div class="text-3xl font-bold">23</div>
        <div class="text-sm text-danger mt-2">-2 from last month</div>
      </div>
    </div>
  </div>

  <div class="card">
    <div class="card-body">
      <h3 class="font-bold mb-4">Recent Activity</h3>
      <div class="divide-y">
        <div class="py-3 flex items-center justify-between">
          <div>
            <div class="font-medium">New user registered</div>
            <div class="text-sm text-muted">john@example.com</div>
          </div>
          <span class="badge badge-success">New</span>
        </div>
        <div class="py-3 flex items-center justify-between">
          <div>
            <div class="font-medium">Payment received</div>
            <div class="text-sm text-muted">$299.00</div>
          </div>
          <span class="badge badge-primary">Completed</span>
        </div>
      </div>
    </div>
  </div>
</div>`
  },
  {
    name: 'Pricing Table',
    code: `<div class="container py-12">
  <h1 class="text-4xl font-bold text-center mb-4">Pricing Plans</h1>
  <p class="text-xl text-muted text-center mb-12">Choose the plan that works for you</p>

  <div class="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
    <div class="card">
      <div class="card-body p-8">
        <h3 class="text-xl font-bold mb-2">Starter</h3>
        <div class="text-3xl font-bold mb-4">$9<span class="text-lg font-normal text-muted">/mo</span></div>
        <ul class="space-y-3 mb-6 text-sm">
          <li>5 Projects</li>
          <li>10GB Storage</li>
          <li>Email Support</li>
        </ul>
        <button class="btn-ghost w-full">Get Started</button>
      </div>
    </div>

    <div class="card-elevated border-2 border-primary">
      <div class="card-body p-8">
        <span class="badge badge-primary mb-2">Popular</span>
        <h3 class="text-xl font-bold mb-2">Pro</h3>
        <div class="text-3xl font-bold mb-4">$29<span class="text-lg font-normal text-muted">/mo</span></div>
        <ul class="space-y-3 mb-6 text-sm">
          <li>Unlimited Projects</li>
          <li>100GB Storage</li>
          <li>Priority Support</li>
          <li>Custom Domain</li>
        </ul>
        <button class="btn-primary w-full">Get Started</button>
      </div>
    </div>

    <div class="card">
      <div class="card-body p-8">
        <h3 class="text-xl font-bold mb-2">Enterprise</h3>
        <div class="text-3xl font-bold mb-4">$99<span class="text-lg font-normal text-muted">/mo</span></div>
        <ul class="space-y-3 mb-6 text-sm">
          <li>Everything in Pro</li>
          <li>Unlimited Storage</li>
          <li>24/7 Phone Support</li>
          <li>SLA Guarantee</li>
        </ul>
        <button class="btn-ghost w-full">Contact Sales</button>
      </div>
    </div>
  </div>
</div>`
  },
]

// Compress code to base64 for URL sharing
function compressCode(code: string): string {
  try {
    return btoa(encodeURIComponent(code))
  } catch {
    return ''
  }
}

// Decompress code from base64
function decompressCode(compressed: string): string {
  try {
    return decodeURIComponent(atob(compressed))
  } catch {
    return defaultCode
  }
}

export default function Playground() {
  const [code, setCode] = useState(defaultCode)
  const [renderedHtml, setRenderedHtml] = useState(defaultCode)
  const [isClient, setIsClient] = useState(false)
  const [copied, setCopied] = useState(false)
  const [showTemplates, setShowTemplates] = useState(false)

  // Load code from URL on mount
  useEffect(() => {
    setIsClient(true)
    const params = new URLSearchParams(window.location.search)
    const sharedCode = params.get('code')
    if (sharedCode) {
      const decompressed = decompressCode(sharedCode)
      setCode(decompressed)
      setRenderedHtml(decompressed)
    }
  }, [])

  // Debounced rendering
  useEffect(() => {
    const timer = setTimeout(() => {
      setRenderedHtml(code)
    }, 500)
    return () => clearTimeout(timer)
  }, [code])

  // Share URL
  const handleShare = useCallback(async () => {
    const compressed = compressCode(code)
    const url = `${window.location.origin}/playground?code=${compressed}`

    try {
      await navigator.clipboard.writeText(url)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      // Fallback: update URL
      window.history.pushState({}, '', `/playground?code=${compressed}`)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    }
  }, [code])

  // Export to CodePen
  const handleExportCodePen = useCallback(() => {
    const html = code
    const css = ''
    const js = ''

    const data = {
      title: 'Thrynd CSS Playground',
      html: html,
      css: css,
      js: js,
      css_external: 'https://cdn.jsdelivr.net/npm/thrynd/dist/thrynd.min.css',
    }

    const form = document.createElement('form')
    form.method = 'POST'
    form.action = 'https://codepen.io/pen/define'
    form.target = '_blank'

    const input = document.createElement('input')
    input.type = 'hidden'
    input.name = 'data'
    input.value = JSON.stringify(data)

    form.appendChild(input)
    document.body.appendChild(form)
    form.submit()
    document.body.removeChild(form)
  }, [code])

  if (!isClient) {
    return null
  }

  return (
    <div style={{ height: '100vh', display: 'flex', flexDirection: 'column' }}>
      {/* Top Bar */}
      <div className="navbar" style={{ borderBottom: '1px solid var(--color-border)', background: 'var(--color-surface, white)', backdropFilter: 'blur(10px)' }}>
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0.75rem 1.5rem' }}>
          <div className="flex items-center gap-4">
            <Link href="/" className="text-xl font-bold">Thrynd</Link>
            <span className="text-muted">Playground</span>
          </div>
          <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
            <ThemeSwitcher />
            <div className="relative">
              <button
                className="btn-ghost btn-sm"
                onClick={() => setShowTemplates(!showTemplates)}
              >
                Templates
              </button>
              {showTemplates && (
                <div
                  className="card"
                  style={{
                    position: 'absolute',
                    top: '100%',
                    right: 0,
                    marginTop: '0.5rem',
                    zIndex: 100,
                    minWidth: '180px',
                    boxShadow: 'var(--shadow-lg)',
                  }}
                >
                  {templates.map((template) => (
                    <button
                      key={template.name}
                      className="block w-full text-left px-4 py-2 hover:bg-gray-50 text-sm"
                      onClick={() => {
                        setCode(template.code)
                        setShowTemplates(false)
                      }}
                    >
                      {template.name}
                    </button>
                  ))}
                </div>
              )}
            </div>
            <button
              className={`btn-sm ${copied ? 'btn-success' : 'btn-secondary'}`}
              onClick={handleShare}
            >
              {copied ? 'Copied!' : 'Share'}
            </button>
            <button
              className="btn-ghost btn-sm"
              onClick={handleExportCodePen}
              title="Open in CodePen"
            >
              CodePen
            </button>
            <button
              className="btn-ghost btn-sm"
              onClick={() => setCode(defaultCode)}
            >
              Reset
            </button>
            <Link href="/docs/getting-started" className="btn-ghost btn-sm">
              Docs
            </Link>
          </div>
        </div>
      </div>

      {/* Editor and Preview */}
      <div style={{ flex: 1, display: 'grid', gridTemplateColumns: '1fr 1fr', overflow: 'hidden' }}>
        {/* Code Editor */}
        <div style={{ display: 'flex', flexDirection: 'column', borderRight: '1px solid var(--color-border)' }}>
          <div style={{ padding: '1rem', background: 'var(--color-surface, var(--color-gray-50))', borderBottom: '1px solid var(--color-border)' }}>
            <h3 className="font-semibold">HTML Code</h3>
            <p className="text-sm text-muted">Edit your code here - changes preview live</p>
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

      {/* Bottom Bar */}
      <div style={{ borderTop: '1px solid var(--color-border)', padding: '0.75rem 1.5rem', background: 'var(--color-gray-50)' }}>
        <div className="container flex items-center justify-between">
          <div className="text-sm text-muted">
            Tip: Click &quot;Share&quot; to copy a link to your playground
          </div>
          <div className="text-sm">
            <Link href="/docs/components" className="text-primary font-semibold">
              View Components →
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
