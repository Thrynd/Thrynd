import { Metadata } from 'next'
import { ComponentPreview } from '../../components/ComponentPreview'
import { CodeBlock } from '../../components/CodeBlock'

export const metadata: Metadata = {
  title: 'Getting Started',
  description: 'Get up and running with Thrynd CSS in minutes. Installation guides for CDN, NPM, and popular frameworks like React, Vue, and Svelte.',
}

export default function GettingStarted() {
  return (
    <div>
      <h1>Getting Started</h1>
      <p className="text-xl text-muted mt-4 mb-8">
        Get up and running with Thrynd CSS in minutes. No configuration required.
      </p>

      <h2>Installation</h2>

      <h3 className="text-lg font-semibold mt-6 mb-3">CDN (Fastest)</h3>
      <p className="mb-4">
        The quickest way to try Thrynd is via CDN. Add this to your HTML <code>&lt;head&gt;</code>:
      </p>

      <CodeBlock language="html">{`<!DOCTYPE html>
<html lang="en">
<head>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/thrynd@latest/dist/thrynd.min.css">
</head>
<body class="theme-modern">
  <div class="container">
    <h1>Hello Thrynd!</h1>
    <button class="btn-primary">Click me</button>
  </div>
</body>
</html>`}</CodeBlock>

      <h3 className="text-lg font-semibold mt-8 mb-3">NPM</h3>
      <p className="mb-4">
        For production projects, install Thrynd via NPM:
      </p>

      <CodeBlock language="bash">npm install thrynd</CodeBlock>

      <p className="mt-4 mb-4">
        Then import it in your CSS file:
      </p>

      <CodeBlock language="css">{`/* In your main CSS file */
@import 'thrynd';`}</CodeBlock>

      <h2 className="mt-12">First Component</h2>
      <p className="mb-4">
        Let's create your first Thrynd component - a simple card with a button:
      </p>

      <ComponentPreview
        title="Hello World Card"
        code={`<div class="card max-w-md">
  <div class="card-body">
    <h3 class="card-title">Hello Thrynd!</h3>
    <p class="text-muted mb-4">
      This is your first Thrynd component.
      Notice how beautiful it looks with zero configuration.
    </p>
    <button class="btn-primary">Get Started</button>
  </div>
</div>`}
      >
        <div className="card max-w-md">
          <div className="card-body">
            <h3 className="card-title">Hello Thrynd!</h3>
            <p className="text-muted mb-4">
              This is your first Thrynd component.
              Notice how beautiful it looks with zero configuration.
            </p>
            <button className="btn-primary">Get Started</button>
          </div>
        </div>
      </ComponentPreview>

      <h2 className="mt-12">Theme Selection</h2>
      <p className="mb-4">
        Thrynd comes with 6 pre-configured themes. Switch themes by changing the <code>class</code> on your <code>&lt;body&gt;</code> tag:
      </p>

      <CodeBlock language="html">{`<!-- Modern (default) -->
<body class="theme-modern">

<!-- Classic - Traditional, elegant -->
<body class="theme-classic">

<!-- Minimal - Brutalist, monochrome -->
<body class="theme-minimal">

<!-- Neon - Cyberpunk aesthetic -->
<body class="theme-neon">

<!-- Nature - Earthy, organic -->
<body class="theme-nature">

<!-- Corporate - Professional -->
<body class="theme-corporate">`}</CodeBlock>

      <div className="alert alert-primary mt-6">
        <strong>Pro Tip:</strong> Try switching themes using the theme switcher in the top navigation bar to see all themes in action!
      </div>

      <h2 className="mt-12">Progressive Enhancement</h2>
      <p className="mb-4">
        Thrynd uses a three-level progressive enhancement system:
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-6">
        <div className="card">
          <div className="card-body">
            <div className="badge badge-primary mb-3">Level 1</div>
            <h4 className="font-semibold mb-2">Semantic HTML</h4>
            <p className="text-sm text-muted">
              Start with proper HTML structure. Thrynd styles look good even without classes.
            </p>
          </div>
        </div>

        <div className="card">
          <div className="card-body">
            <div className="badge badge-primary mb-3">Level 2</div>
            <h4 className="font-semibold mb-2">Component Classes</h4>
            <p className="text-sm text-muted">
              Add component classes like <code>btn-primary</code> or <code>card</code> for styled components.
            </p>
          </div>
        </div>

        <div className="card">
          <div className="card-body">
            <div className="badge badge-primary mb-3">Level 3</div>
            <h4 className="font-semibold mb-2">Utility Classes</h4>
            <p className="text-sm text-muted">
              Fine-tune with utilities like <code>mt-4</code>, <code>text-center</code>, or <code>flex</code>.
            </p>
          </div>
        </div>
      </div>

      <h2 className="mt-12">Framework Integration</h2>
      <p className="mb-4">
        Thrynd works seamlessly with any JavaScript framework:
      </p>

      <h3 className="text-lg font-semibold mt-6 mb-3">React</h3>
      <CodeBlock language="jsx">{`import 'thrynd/dist/thrynd.css'

function App() {
  return (
    <div className="container">
      <h1>Hello from React!</h1>
      <button className="btn-primary">Click me</button>
    </div>
  )
}`}</CodeBlock>

      <h3 className="text-lg font-semibold mt-6 mb-3">Vue</h3>
      <CodeBlock language="html">{`<!-- In main.js or App.vue -->
import 'thrynd/dist/thrynd.css'

<template>
  <div class="container">
    <h1>Hello from Vue!</h1>
    <button class="btn-primary">Click me</button>
  </div>
</template>`}</CodeBlock>

      <h3 className="text-lg font-semibold mt-6 mb-3">Svelte</h3>
      <CodeBlock language="html">{`<!-- In App.svelte -->
<svelte:head>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/thrynd@latest/dist/thrynd.min.css">
</svelte:head>

<div class="container">
  <h1>Hello from Svelte!</h1>
  <button class="btn-primary">Click me</button>
</div>`}</CodeBlock>

      <div className="alert alert-success mt-8">
        <strong>You're all set!</strong> Continue to the <a href="/docs/components" className="font-semibold underline">Components</a> section to explore all available components.
      </div>

      <div className="mt-12 pt-8" style={{ borderTop: '1px solid var(--color-border)' }}>
        <div className="flex justify-between">
          <div></div>
          <a href="/docs/themes" className="btn-primary">
            Next: Themes →
          </a>
        </div>
      </div>
    </div>
  )
}
