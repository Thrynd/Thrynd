import { ComponentPreview } from '../../components/ComponentPreview'
import Link from 'next/link'

export default function DeploymentPage() {
  return (
    <div>
      <h1>Deployment & Build</h1>
      <p className="text-xl text-muted mt-4 mb-8">
        Learn how to build, customize, and deploy Thrynd CSS in your projects.
      </p>

      <h2>Installation</h2>
      <p className="mb-4">
        There are several ways to use Thrynd CSS in your project.
      </p>

      <h3 className="text-lg font-semibold mt-6 mb-3">Via CDN (Quick Start)</h3>
      <ComponentPreview
        title="CDN Installation"
        language="html"
        code={`<!-- In your HTML <head> -->
<link rel="stylesheet" href="https://unpkg.com/@thrynd/css/dist/thrynd.min.css">

<!-- Optional: Include a specific theme -->
<link rel="stylesheet" href="https://unpkg.com/@thrynd/css/dist/themes/modern.css">

<!-- In your <body> tag -->
<body class="theme-modern">
  <!-- Your content -->
</body>`}
      >
        <div></div>
      </ComponentPreview>

      <h3 className="text-lg font-semibold mt-8 mb-3">Via npm</h3>
      <ComponentPreview
        title="npm Installation"
        language="bash"
        code={`# Install via npm
npm install @thrynd/css

# Or with yarn
yarn add @thrynd/css

# Or with pnpm
pnpm add @thrynd/css`}
      >
        <div></div>
      </ComponentPreview>

      <p className="mt-4 mb-4">Then import in your project:</p>

      <ComponentPreview
        title="Import in JavaScript/TypeScript"
        language="javascript"
        code={`// Import the main CSS file
import '@thrynd/css/dist/thrynd.min.css'

// Or import a specific theme
import '@thrynd/css/dist/themes/modern.css'

// Or import from source (requires PostCSS setup)
import '@thrynd/css/src/index.css'`}
      >
        <div></div>
      </ComponentPreview>

      <h3 className="text-lg font-semibold mt-8 mb-3">Download & Self-Host</h3>
      <div className="card mb-6">
        <div className="card-body">
          <h4 className="font-semibold mb-3">Manual Download</h4>
          <ol className="ml-6 space-y-2 text-sm" style={{ listStyle: 'decimal' }}>
            <li>Download the latest release from GitHub</li>
            <li>Extract the <code>dist</code> folder</li>
            <li>Copy <code>thrynd.min.css</code> to your project</li>
            <li>Link it in your HTML: <code>&lt;link rel="stylesheet" href="/path/to/thrynd.min.css"&gt;</code></li>
          </ol>
        </div>
      </div>

      <h2 className="mt-12">Building from Source</h2>
      <p className="mb-4">
        Clone the repository and build the CSS yourself for maximum customization.
      </p>

      <ComponentPreview
        title="Build Process"
        language="bash"
        code={`# Clone the repository
git clone https://github.com/yourusername/thrynd-css.git
cd thrynd-css

# Install dependencies
npm install

# Build all CSS files
npm run build:all

# Or build specific parts
npm run build:core      # Core styles only
npm run build:components # Components only
npm run build:utilities  # Utilities only
npm run build:themes     # All themes

# Watch for changes during development
npm run watch`}
      >
        <div></div>
      </ComponentPreview>

      <h2 className="mt-12">Customization</h2>

      <h3 className="text-lg font-semibold mt-6 mb-3">CSS Variables</h3>
      <p className="mb-4">
        Override CSS variables to customize colors, spacing, and more without rebuilding.
      </p>

      <ComponentPreview
        title="Custom Variables"
        language="css"
        code={`/* In your custom CSS file */
:root {
  /* Override primary color */
  --color-primary: #your-color;
  --color-primary-hover: #your-hover-color;

  /* Adjust spacing scale */
  --space-1: 0.25rem;
  --space-2: 0.5rem;
  --space-3: 0.75rem;
  --space-4: 1rem;

  /* Modify border radius */
  --radius-sm: 0.25rem;
  --radius-base: 0.375rem;
  --radius-md: 0.5rem;
  --radius-lg: 0.75rem;

  /* Change font family */
  --font-sans: 'Your Font', system-ui, sans-serif;
}`}
      >
        <div></div>
      </ComponentPreview>

      <h3 className="text-lg font-semibold mt-8 mb-3">Custom Theme</h3>
      <p className="mb-4">
        Create your own theme by defining a new class with custom variables.
      </p>

      <ComponentPreview
        title="Custom Theme Class"
        language="css"
        code={`/* custom-theme.css */
.theme-custom {
  /* Semantic colors */
  --color-primary: #6366f1;
  --color-secondary: #8b5cf6;
  --color-success: #10b981;
  --color-warning: #f59e0b;
  --color-danger: #ef4444;
  --color-info: #3b82f6;

  /* Background colors */
  --color-background: #ffffff;
  --color-surface: #f9fafb;

  /* Text colors */
  --color-text: #111827;
  --color-text-secondary: #6b7280;
  --color-heading: #000000;

  /* Border and divider */
  --color-border: #e5e7eb;

  /* Shadows */
  --shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  --shadow-lg: 0 10px 25px rgba(0, 0, 0, 0.15);

  /* Typography */
  --font-sans: 'Inter', system-ui, sans-serif;
  --font-mono: 'Fira Code', monospace;
}

/* Apply to body */
body.theme-custom {
  font-family: var(--font-sans);
  color: var(--color-text);
  background: var(--color-background);
}`}
      >
        <div></div>
      </ComponentPreview>

      <h3 className="text-lg font-semibold mt-8 mb-3">PostCSS Configuration</h3>
      <p className="mb-4">
        Customize the build process with your own PostCSS configuration.
      </p>

      <ComponentPreview
        title="postcss.config.js"
        language="javascript"
        code={`module.exports = {
  plugins: [
    require('postcss-import'),
    require('postcss-custom-properties')({
      preserve: false
    }),
    require('autoprefixer'),
    require('cssnano')({
      preset: ['default', {
        discardComments: {
          removeAll: true
        }
      }]
    })
  ]
}`}
      >
        <div></div>
      </ComponentPreview>

      <h2 className="mt-12">Framework Integration</h2>

      <h3 className="text-lg font-semibold mt-6 mb-3">React / Next.js</h3>
      <ComponentPreview
        title="Next.js Integration"
        language="javascript"
        code={`// pages/_app.js or app/layout.js
import '@thrynd/css/dist/thrynd.min.css'
import '@thrynd/css/dist/themes/modern.css'

export default function App({ Component, pageProps }) {
  return (
    <div className="theme-modern">
      <Component {...pageProps} />
    </div>
  )
}

// Or use in a component
import { useState } from 'react'

function MyComponent() {
  const [theme, setTheme] = useState('theme-modern')

  return (
    <div className={theme}>
      <button
        className="btn-primary"
        onClick={() => setTheme('theme-minimal')}
      >
        Switch Theme
      </button>
    </div>
  )
}`}
      >
        <div></div>
      </ComponentPreview>

      <h3 className="text-lg font-semibold mt-8 mb-3">Vue / Nuxt</h3>
      <ComponentPreview
        title="Vue Integration"
        language="javascript"
        code={`// main.js or nuxt.config.js
import '@thrynd/css/dist/thrynd.min.css'
import '@thrynd/css/dist/themes/modern.css'

// In a Vue component
<template>
  <div :class="theme">
    <button class="btn-primary" @click="toggleTheme">
      Switch Theme
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      theme: 'theme-modern'
    }
  },
  methods: {
    toggleTheme() {
      this.theme = this.theme === 'theme-modern'
        ? 'theme-minimal'
        : 'theme-modern'
    }
  }
}
</script>`}
      >
        <div></div>
      </ComponentPreview>

      <h3 className="text-lg font-semibold mt-8 mb-3">Vite</h3>
      <ComponentPreview
        title="Vite Configuration"
        language="javascript"
        code={`// vite.config.js
import { defineConfig } from 'vite'

export default defineConfig({
  css: {
    postcss: './postcss.config.js'
  }
})

// In your main.js
import '@thrynd/css/dist/thrynd.min.css'`}
      >
        <div></div>
      </ComponentPreview>

      <h2 className="mt-12">Production Optimization</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="card">
          <div className="card-body">
            <h4 className="font-semibold mb-3">🗜️ Minification</h4>
            <p className="text-sm text-muted mb-3">
              The production build is automatically minified with cssnano, reducing file size by ~40%.
            </p>
            <div className="text-xs text-muted">
              <div>Development: ~85KB</div>
              <div>Production: ~50KB</div>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="card-body">
            <h4 className="font-semibold mb-3">Gzip Compression</h4>
            <p className="text-sm text-muted mb-3">
              Enable gzip compression on your server for an additional 70% reduction.
            </p>
            <div className="text-xs text-muted">
              <div>Minified: ~50KB</div>
              <div>Gzipped: ~15KB</div>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="card-body">
            <h4 className="font-semibold mb-3">Tree Shaking</h4>
            <p className="text-sm text-muted">
              Import only the components you need by importing source files directly and using PurgeCSS.
            </p>
          </div>
        </div>

        <div className="card">
          <div className="card-body">
            <h4 className="font-semibold mb-3">CDN Caching</h4>
            <p className="text-sm text-muted">
              Use a CDN like unpkg or jsDelivr for automatic caching and global distribution.
            </p>
          </div>
        </div>
      </div>

      <h3 className="text-lg font-semibold mt-8 mb-3">PurgeCSS Setup</h3>
      <ComponentPreview
        title="PurgeCSS Configuration"
        language="javascript"
        code={`// postcss.config.js
const purgecss = require('@fullhuman/postcss-purgecss')

module.exports = {
  plugins: [
    require('postcss-import'),
    require('autoprefixer'),
    ...(process.env.NODE_ENV === 'production'
      ? [
          purgecss({
            content: [
              './src/**/*.html',
              './src/**/*.jsx',
              './src/**/*.tsx',
              './src/**/*.vue',
            ],
            safelist: [
              /^theme-/,
              /^is-/,
              /^has-/,
            ]
          }),
          require('cssnano')
        ]
      : [])
  ]
}`}
      >
        <div></div>
      </ComponentPreview>

      <h2 className="mt-12">Deployment Checklist</h2>

      <div className="card mb-8">
        <div className="card-body">
          <h4 className="font-semibold mb-4">Pre-Deployment</h4>
          <ul className="space-y-2" style={{ listStyle: 'none', padding: 0 }}>
            <li className="flex items-start gap-2">
              <input type="checkbox" className="form-checkbox mt-1" />
              <span className="text-sm">Build production CSS with <code>npm run build:all</code></span>
            </li>
            <li className="flex items-start gap-2">
              <input type="checkbox" className="form-checkbox mt-1" />
              <span className="text-sm">Test all pages in target browsers</span>
            </li>
            <li className="flex items-start gap-2">
              <input type="checkbox" className="form-checkbox mt-1" />
              <span className="text-sm">Verify responsive design on mobile/tablet/desktop</span>
            </li>
            <li className="flex items-start gap-2">
              <input type="checkbox" className="form-checkbox mt-1" />
              <span className="text-sm">Run accessibility audit with Lighthouse</span>
            </li>
            <li className="flex items-start gap-2">
              <input type="checkbox" className="form-checkbox mt-1" />
              <span className="text-sm">Enable gzip/brotli compression on server</span>
            </li>
            <li className="flex items-start gap-2">
              <input type="checkbox" className="form-checkbox mt-1" />
              <span className="text-sm">Set proper cache headers for CSS files</span>
            </li>
            <li className="flex items-start gap-2">
              <input type="checkbox" className="form-checkbox mt-1" />
              <span className="text-sm">Configure CDN if using</span>
            </li>
            <li className="flex items-start gap-2">
              <input type="checkbox" className="form-checkbox mt-1" />
              <span className="text-sm">Test theme switching functionality</span>
            </li>
          </ul>
        </div>
      </div>

      <h2 className="mt-12">Troubleshooting</h2>

      <div className="space-y-4 mb-8">
        <div className="card">
          <div className="card-body">
            <h4 className="font-semibold mb-2">Styles not applying?</h4>
            <ul className="text-sm text-muted space-y-1" style={{ listStyle: 'disc', paddingLeft: '1.5rem' }}>
              <li>Check that CSS file is properly linked in HTML</li>
              <li>Verify class names match documentation exactly</li>
              <li>Ensure no conflicting CSS is overriding Thrynd styles</li>
              <li>Check browser console for 404 errors</li>
            </ul>
          </div>
        </div>

        <div className="card">
          <div className="card-body">
            <h4 className="font-semibold mb-2">Theme not switching?</h4>
            <ul className="text-sm text-muted space-y-1" style={{ listStyle: 'disc', paddingLeft: '1.5rem' }}>
              <li>Ensure theme class is on <code>&lt;body&gt;</code> or parent wrapper</li>
              <li>Verify theme CSS file is loaded</li>
              <li>Check for typos in theme class names (e.g., <code>theme-modern</code>)</li>
              <li>Inspect element to see if CSS variables are being applied</li>
            </ul>
          </div>
        </div>

        <div className="card">
          <div className="card-body">
            <h4 className="font-semibold mb-2">Build failing?</h4>
            <ul className="text-sm text-muted space-y-1" style={{ listStyle: 'disc', paddingLeft: '1.5rem' }}>
              <li>Delete <code>node_modules</code> and reinstall dependencies</li>
              <li>Check Node.js version (requires 16+)</li>
              <li>Ensure PostCSS and plugins are properly installed</li>
              <li>Review build logs for specific error messages</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="mt-12 pt-8" style={{ borderTop: '1px solid var(--color-border)' }}>
        <div className="flex justify-between">
          <Link href="/docs/templates" className="btn-ghost">
            ← Templates
          </Link>
          <Link href="/docs/llm-guide" className="btn-primary">
            Next: LLM Guide →
          </Link>
        </div>
      </div>
    </div>
  )
}
