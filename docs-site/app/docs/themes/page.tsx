'use client'

import { useState } from 'react'
import { CodeBlock } from '../../components/CodeBlock'

const themes = [
  {
    name: 'Modern',
    value: 'theme-modern',
    color: 'linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)',
    description: 'Clean, contemporary design with vibrant blue colors and smooth transitions. Perfect for modern web applications.',
    features: ['Vibrant blue primary', 'Smooth animations', 'Contemporary feel'],
  },
  {
    name: 'Classic',
    value: 'theme-classic',
    color: 'linear-gradient(135deg, #1e3a8a 0%, #78716c 100%)',
    description: 'Traditional, elegant design with serif fonts and muted colors. Ideal for content-heavy sites and professional applications.',
    features: ['Serif typography', 'Elegant colors', 'Traditional styling'],
  },
  {
    name: 'Minimal',
    value: 'theme-minimal',
    color: 'linear-gradient(135deg, #000000 0%, #6b7280 100%)',
    description: 'Brutalist, monochrome design with stark contrasts and sharp edges. For bold, statement-making interfaces.',
    features: ['Monochrome palette', 'Sharp edges', 'High contrast'],
  },
  {
    name: 'Neon',
    value: 'theme-neon',
    color: 'linear-gradient(135deg, #00f0ff 0%, #b026ff 100%)',
    description: 'Cyberpunk aesthetic with electric colors and glowing effects on dark background. Perfect for gaming and creative applications.',
    features: ['Electric colors', 'Glowing effects', 'Dark background'],
  },
  {
    name: 'Nature',
    value: 'theme-nature',
    color: 'linear-gradient(135deg, #2d6a4f 0%, #52b788 100%)',
    description: 'Earthy, organic design with natural colors and warm background textures. Great for eco-friendly and wellness brands.',
    features: ['Natural colors', 'Warm textures', 'Organic feel'],
  },
  {
    name: 'Corporate',
    value: 'theme-corporate',
    color: 'linear-gradient(135deg, #0066cc 0%, #5a6c7d 100%)',
    description: 'Professional, trustworthy design inspired by enterprise software. Perfect for business applications and dashboards.',
    features: ['Professional blue', 'Enterprise feel', 'High readability'],
  },
]

export default function ThemesPage() {
  const [selectedTheme, setSelectedTheme] = useState('theme-modern')

  const switchTheme = (themeValue: string) => {
    setSelectedTheme(themeValue)
    document.body.className = themeValue
  }

  return (
    <div>
      <h1>Themes</h1>
      <p className="text-xl text-muted mt-4 mb-8">
        Thrynd includes 6 complete themes. Switch themes by changing the class on your <code>&lt;body&gt;</code> tag.
      </p>

      <div className="alert alert-primary mb-12">
        <strong>💡 Try it now:</strong> Click on any theme below to see this entire page change instantly. All components adapt automatically!
      </div>

      {/* Theme Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {themes.map((theme) => (
          <div
            key={theme.value}
            className={`card ${selectedTheme === theme.value ? 'card-elevated' : ''}`}
            style={{
              cursor: 'pointer',
              border: selectedTheme === theme.value ? '2px solid var(--color-primary)' : '',
              transition: 'all 0.2s',
            }}
            onClick={() => switchTheme(theme.value)}
          >
            <div
              style={{
                height: '100px',
                background: theme.color,
                borderTopLeftRadius: 'var(--radius-md)',
                borderTopRightRadius: 'var(--radius-md)',
              }}
            />
            <div className="card-body">
              <div className="flex items-center justify-between mb-2">
                <h3 className="card-title">{theme.name}</h3>
                {selectedTheme === theme.value && (
                  <span className="badge badge-primary">Active</span>
                )}
              </div>
              <p className="text-sm text-muted mb-4">{theme.description}</p>
              <div className="flex flex-wrap gap-2">
                {theme.features.map((feature) => (
                  <span key={feature} className="badge badge-secondary badge-pill">
                    {feature}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      <h2>Usage</h2>
      <p className="mb-4">
        Apply a theme by adding the theme class to your <code>&lt;body&gt;</code> tag:
      </p>

      <CodeBlock language="html">{`<!DOCTYPE html>
<html lang="en">
<head>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/thrynd@latest/dist/thrynd.min.css">
</head>
<body class="theme-modern">  <!-- Change this class to switch themes -->
  <div class="container">
    <h1>Hello Thrynd!</h1>
  </div>
</body>
</html>`}</CodeBlock>

      <h2>Dynamic Theme Switching</h2>
      <p className="mb-4">
        Switch themes dynamically with JavaScript:
      </p>

      <CodeBlock language="javascript">{`// Switch to neon theme
document.body.className = 'theme-neon';

// Save user preference
localStorage.setItem('theme', 'theme-neon');

// Load saved theme on page load
const savedTheme = localStorage.getItem('theme') || 'theme-modern';
document.body.className = savedTheme;`}</CodeBlock>

      <h2>Theme Characteristics</h2>
      <p className="mb-6">
        Each theme customizes:
      </p>

      <ul className="list-group mb-8">
        <li className="list-group-item">
          <strong>Color Palette:</strong> Primary, secondary, success, danger, and warning colors
        </li>
        <li className="list-group-item">
          <strong>Typography:</strong> Font families, sizes, and weights
        </li>
        <li className="list-group-item">
          <strong>Borders:</strong> Border radius and styles
        </li>
        <li className="list-group-item">
          <strong>Shadows:</strong> Shadow depths and styles
        </li>
        <li className="list-group-item">
          <strong>Backgrounds:</strong> Page and component backgrounds
        </li>
        <li className="list-group-item">
          <strong>Effects:</strong> Transitions, animations, and hover states
        </li>
      </ul>

      <h2>Component Examples</h2>
      <p className="mb-6">
        Here are some components in the current theme ({themes.find(t => t.value === selectedTheme)?.name}):
      </p>

      {/* Buttons */}
      <div className="mb-8">
        <h3 className="text-lg font-semibold mb-4">Buttons</h3>
        <div className="flex gap-3 flex-wrap">
          <button className="btn-primary">Primary</button>
          <button className="btn-secondary">Secondary</button>
          <button className="btn-danger">Danger</button>
          <button className="btn-ghost">Ghost</button>
        </div>
      </div>

      {/* Alerts */}
      <div className="mb-8">
        <h3 className="text-lg font-semibold mb-4">Alerts</h3>
        <div className="alert alert-success mb-3">
          <strong>Success!</strong> Operation completed successfully
        </div>
        <div className="alert alert-warning mb-3">
          <strong>Warning:</strong> Please review this information
        </div>
        <div className="alert alert-danger">
          <strong>Error:</strong> Something went wrong
        </div>
      </div>

      {/* Form */}
      <div className="mb-8">
        <h3 className="text-lg font-semibold mb-4">Form</h3>
        <div className="card max-w-md">
          <div className="card-body">
            <div className="form-group">
              <label htmlFor="demo-email">Email</label>
              <input type="email" id="demo-email" className="form-input" placeholder="your@email.com" />
            </div>
            <div className="form-group">
              <label htmlFor="demo-message">Message</label>
              <textarea id="demo-message" className="form-input" rows={3} placeholder="Your message..."></textarea>
            </div>
            <button className="btn-primary w-full">Submit</button>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="mb-8">
        <h3 className="text-lg font-semibold mb-4">Stats</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="card">
            <div className="card-body">
              <div className="stat-label">Total Users</div>
              <div className="stat-value">12,345</div>
              <div className="stat-change positive">↑ 12%</div>
            </div>
          </div>
          <div className="card">
            <div className="card-body">
              <div className="stat-label">Revenue</div>
              <div className="stat-value">$45.2K</div>
              <div className="stat-change positive">↑ 8.3%</div>
            </div>
          </div>
          <div className="card">
            <div className="card-body">
              <div className="stat-label">Conversion</div>
              <div className="stat-value">3.24%</div>
              <div className="stat-change negative">↓ 2.1%</div>
            </div>
          </div>
        </div>
      </div>

      <div className="alert alert-primary mt-12">
        <strong>🎨 Explore More:</strong> Visit the <a href="/playground" className="font-semibold underline">Interactive Playground</a> to experiment with all themes and components.
      </div>

      <div className="mt-12 pt-8" style={{ borderTop: '1px solid var(--color-border)' }}>
        <div className="flex justify-between">
          <a href="/docs/getting-started" className="btn-ghost">
            ← Getting Started
          </a>
          <a href="/docs/components" className="btn-primary">
            Next: Components →
          </a>
        </div>
      </div>
    </div>
  )
}
