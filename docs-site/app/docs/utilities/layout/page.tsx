import { ComponentPreview } from '../../../components/ComponentPreview'

export default function LayoutPage() {
  return (
    <div>
      <h1>Layout Utilities</h1>
      <p className="text-xl text-muted mt-4 mb-8">
        Flexbox, grid, positioning, and display utilities for building responsive layouts.
      </p>

      <h2>Display</h2>
      <p className="mb-4">
        Control the display property of elements.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="card">
          <div className="card-body">
            <h4 className="font-semibold mb-3">Display Classes</h4>
            <div className="space-y-2 text-sm">
              <div><code>block</code> → display: block</div>
              <div><code>inline-block</code> → display: inline-block</div>
              <div><code>inline</code> → display: inline</div>
              <div><code>flex</code> → display: flex</div>
              <div><code>inline-flex</code> → display: inline-flex</div>
              <div><code>grid</code> → display: grid</div>
              <div><code>hidden</code> → display: none</div>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="card-body">
            <h4 className="font-semibold mb-3">Responsive Display</h4>
            <div className="space-y-2 text-sm">
              <div><code>md:block</code> → block on medium+</div>
              <div><code>lg:flex</code> → flex on large+</div>
              <div><code>md:hidden</code> → hide on medium+</div>
            </div>
          </div>
        </div>
      </div>

      <h2>Flexbox</h2>
      <p className="mb-4">
        Build flexible layouts with flexbox utilities.
      </p>

      <h3 className="text-lg font-semibold mt-6 mb-3">Flex Direction</h3>
      <ComponentPreview
        title="Flex Direction"
        code={`<div class="flex flex-row gap-2 mb-4">
  <div class="bg-primary text-white p-4">1</div>
  <div class="bg-primary text-white p-4">2</div>
  <div class="bg-primary text-white p-4">3</div>
</div>

<div class="flex flex-col gap-2">
  <div class="bg-secondary text-white p-4">1</div>
  <div class="bg-secondary text-white p-4">2</div>
  <div class="bg-secondary text-white p-4">3</div>
</div>`}
      >
        <div>
          <div className="flex flex-row gap-2 mb-4">
            <div className="bg-primary text-white p-4">1</div>
            <div className="bg-primary text-white p-4">2</div>
            <div className="bg-primary text-white p-4">3</div>
          </div>

          <div className="flex flex-col gap-2">
            <div className="bg-secondary text-white p-4">1</div>
            <div className="bg-secondary text-white p-4">2</div>
            <div className="bg-secondary text-white p-4">3</div>
          </div>
        </div>
      </ComponentPreview>

      <h3 className="text-lg font-semibold mt-8 mb-3">Justify Content</h3>
      <ComponentPreview
        title="Justify Content"
        code={`<div class="flex justify-start gap-2 bg-gray-100 p-4 mb-3">
  <div class="bg-primary text-white p-4">Start</div>
</div>

<div class="flex justify-center gap-2 bg-gray-100 p-4 mb-3">
  <div class="bg-primary text-white p-4">Center</div>
</div>

<div class="flex justify-end gap-2 bg-gray-100 p-4 mb-3">
  <div class="bg-primary text-white p-4">End</div>
</div>

<div class="flex justify-between gap-2 bg-gray-100 p-4">
  <div class="bg-primary text-white p-4">Between</div>
  <div class="bg-primary text-white p-4">Items</div>
</div>`}
      >
        <div>
          <div className="flex justify-start gap-2 bg-gray-100 p-4 mb-3">
            <div className="bg-primary text-white p-4">Start</div>
          </div>

          <div className="flex justify-center gap-2 bg-gray-100 p-4 mb-3">
            <div className="bg-primary text-white p-4">Center</div>
          </div>

          <div className="flex justify-end gap-2 bg-gray-100 p-4 mb-3">
            <div className="bg-primary text-white p-4">End</div>
          </div>

          <div className="flex justify-between gap-2 bg-gray-100 p-4">
            <div className="bg-primary text-white p-4">Between</div>
            <div className="bg-primary text-white p-4">Items</div>
          </div>
        </div>
      </ComponentPreview>

      <h3 className="text-lg font-semibold mt-8 mb-3">Align Items</h3>
      <ComponentPreview
        title="Align Items"
        code={`<div class="flex items-start gap-2 bg-gray-100 p-4 mb-3" style="height: 100px;">
  <div class="bg-primary text-white p-4">Start</div>
</div>

<div class="flex items-center gap-2 bg-gray-100 p-4 mb-3" style="height: 100px;">
  <div class="bg-primary text-white p-4">Center</div>
</div>

<div class="flex items-end gap-2 bg-gray-100 p-4" style="height: 100px;">
  <div class="bg-primary text-white p-4">End</div>
</div>`}
      >
        <div>
          <div className="flex items-start gap-2 bg-gray-100 p-4 mb-3" style={{ height: '100px' }}>
            <div className="bg-primary text-white p-4">Start</div>
          </div>

          <div className="flex items-center gap-2 bg-gray-100 p-4 mb-3" style={{ height: '100px' }}>
            <div className="bg-primary text-white p-4">Center</div>
          </div>

          <div className="flex items-end gap-2 bg-gray-100 p-4" style={{ height: '100px' }}>
            <div className="bg-primary text-white p-4">End</div>
          </div>
        </div>
      </ComponentPreview>

      <h3 className="text-lg font-semibold mt-8 mb-3">Gap</h3>
      <ComponentPreview
        title="Flex Gap"
        code={`<div class="flex gap-2 mb-3">
  <div class="bg-primary text-white p-4">gap-2</div>
  <div class="bg-primary text-white p-4">gap-2</div>
</div>

<div class="flex gap-4 mb-3">
  <div class="bg-primary text-white p-4">gap-4</div>
  <div class="bg-primary text-white p-4">gap-4</div>
</div>

<div class="flex gap-8">
  <div class="bg-primary text-white p-4">gap-8</div>
  <div class="bg-primary text-white p-4">gap-8</div>
</div>`}
      >
        <div>
          <div className="flex gap-2 mb-3">
            <div className="bg-primary text-white p-4">gap-2</div>
            <div className="bg-primary text-white p-4">gap-2</div>
          </div>

          <div className="flex gap-4 mb-3">
            <div className="bg-primary text-white p-4">gap-4</div>
            <div className="bg-primary text-white p-4">gap-4</div>
          </div>

          <div className="flex gap-8">
            <div className="bg-primary text-white p-4">gap-8</div>
            <div className="bg-primary text-white p-4">gap-8</div>
          </div>
        </div>
      </ComponentPreview>

      <h2 className="mt-12">Grid</h2>
      <p className="mb-4">
        Create responsive grid layouts with grid utilities.
      </p>

      <h3 className="text-lg font-semibold mt-6 mb-3">Grid Columns</h3>
      <ComponentPreview
        title="Grid Layout"
        code={`<div class="grid grid-cols-3 gap-4 mb-4">
  <div class="bg-primary text-white p-4 text-center">1</div>
  <div class="bg-primary text-white p-4 text-center">2</div>
  <div class="bg-primary text-white p-4 text-center">3</div>
</div>

<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
  <div class="bg-secondary text-white p-4 text-center">Responsive</div>
  <div class="bg-secondary text-white p-4 text-center">Grid</div>
  <div class="bg-secondary text-white p-4 text-center">Layout</div>
  <div class="bg-secondary text-white p-4 text-center">Demo</div>
</div>`}
      >
        <div>
          <div className="grid grid-cols-3 gap-4 mb-4">
            <div className="bg-primary text-white p-4 text-center">1</div>
            <div className="bg-primary text-white p-4 text-center">2</div>
            <div className="bg-primary text-white p-4 text-center">3</div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-secondary text-white p-4 text-center">Responsive</div>
            <div className="bg-secondary text-white p-4 text-center">Grid</div>
            <div className="bg-secondary text-white p-4 text-center">Layout</div>
            <div className="bg-secondary text-white p-4 text-center">Demo</div>
          </div>
        </div>
      </ComponentPreview>

      <h2 className="mt-12">Container</h2>
      <p className="mb-4">
        Center and constrain content width with the container class.
      </p>

      <ComponentPreview
        title="Container"
        code={`<div class="container">
  <div class="bg-gray-100 p-8">
    <h3 class="font-bold mb-2">Centered Container</h3>
    <p>Content is centered and has max-width constraints.</p>
  </div>
</div>`}
      >
        <div className="container">
          <div className="bg-gray-100 p-8">
            <h3 className="font-bold mb-2">Centered Container</h3>
            <p>Content is centered and has max-width constraints.</p>
          </div>
        </div>
      </ComponentPreview>

      <h2 className="mt-12">Common Patterns</h2>

      <h3 className="text-lg font-semibold mt-6 mb-3">Navbar Layout</h3>
      <ComponentPreview
        title="Flex Navbar"
        code={`<nav class="flex items-center justify-between bg-primary text-white p-4">
  <div class="font-bold text-xl">Brand</div>
  <div class="flex items-center gap-4">
    <a href="#" class="hover:underline">Home</a>
    <a href="#" class="hover:underline">About</a>
    <a href="#" class="hover:underline">Contact</a>
  </div>
</nav>`}
      >
        <nav className="flex items-center justify-between bg-primary text-white p-4">
          <div className="font-bold text-xl">Brand</div>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:underline">Home</a>
            <a href="#" className="hover:underline">About</a>
            <a href="#" className="hover:underline">Contact</a>
          </div>
        </nav>
      </ComponentPreview>

      <h3 className="text-lg font-semibold mt-8 mb-3">Card Grid</h3>
      <ComponentPreview
        title="Responsive Card Grid"
        code={`<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  <div class="card">
    <div class="card-body">
      <h4 class="font-semibold mb-2">Card 1</h4>
      <p class="text-sm text-muted">Content here</p>
    </div>
  </div>
  <div class="card">
    <div class="card-body">
      <h4 class="font-semibold mb-2">Card 2</h4>
      <p class="text-sm text-muted">Content here</p>
    </div>
  </div>
  <div class="card">
    <div class="card-body">
      <h4 class="font-semibold mb-2">Card 3</h4>
      <p class="text-sm text-muted">Content here</p>
    </div>
  </div>
</div>`}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="card">
            <div className="card-body">
              <h4 className="font-semibold mb-2">Card 1</h4>
              <p className="text-sm text-muted">Content here</p>
            </div>
          </div>
          <div className="card">
            <div className="card-body">
              <h4 className="font-semibold mb-2">Card 2</h4>
              <p className="text-sm text-muted">Content here</p>
            </div>
          </div>
          <div className="card">
            <div className="card-body">
              <h4 className="font-semibold mb-2">Card 3</h4>
              <p className="text-sm text-muted">Content here</p>
            </div>
          </div>
        </div>
      </ComponentPreview>

      <div className="mt-12 pt-8" style={{ borderTop: '1px solid var(--color-border)' }}>
        <div className="flex justify-between">
          <a href="/docs/utilities/typography" className="btn-ghost">
            ← Typography
          </a>
          <a href="/docs/utilities/borders" className="btn-primary">
            Next: Borders →
          </a>
        </div>
      </div>
    </div>
  )
}
