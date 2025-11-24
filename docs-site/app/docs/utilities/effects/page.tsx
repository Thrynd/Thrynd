import { ComponentPreview } from '../../../components/ComponentPreview'

export default function EffectsPage() {
  return (
    <div>
      <h1>Effects Utilities</h1>
      <p className="text-xl text-muted mt-4 mb-8">
        Transform, transition, filter, and shadow utilities for interactive and visual effects.
      </p>

      <h2>Shadows</h2>
      <p className="mb-4">
        Add depth with box shadow utilities from subtle to dramatic.
      </p>

      <ComponentPreview
        title="Box Shadows"
        code={`<div class="grid grid-cols-1 md:grid-cols-3 gap-6">
  <div class="shadow-sm card p-6 rounded">shadow-sm</div>
  <div class="shadow card p-6 rounded">shadow</div>
  <div class="shadow-md card p-6 rounded">shadow-md</div>
  <div class="shadow-lg card p-6 rounded">shadow-lg</div>
  <div class="shadow-xl card p-6 rounded">shadow-xl</div>
  <div class="shadow-2xl card p-6 rounded">shadow-2xl</div>
</div>`}
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="shadow-sm card p-6 rounded">shadow-sm</div>
          <div className="shadow card p-6 rounded">shadow</div>
          <div className="shadow-md card p-6 rounded">shadow-md</div>
          <div className="shadow-lg card p-6 rounded">shadow-lg</div>
          <div className="shadow-xl card p-6 rounded">shadow-xl</div>
          <div className="shadow-2xl card p-6 rounded">shadow-2xl</div>
        </div>
      </ComponentPreview>

      <h2 className="mt-12">Transforms</h2>

      <h3 className="text-lg font-semibold mt-6 mb-3">Scale</h3>
      <p className="mb-4">
        Scale elements up or down on hover.
      </p>

      <ComponentPreview
        title="Scale Transform"
        code={`<div class="flex gap-4">
  <div class="bg-primary text-white p-8 rounded hover:scale-105 transition">
    hover:scale-105
  </div>
  <div class="bg-secondary text-white p-8 rounded hover:scale-110 transition">
    hover:scale-110
  </div>
  <div class="bg-success text-white p-8 rounded hover:scale-95 transition">
    hover:scale-95
  </div>
</div>`}
      >
        <div className="flex gap-4">
          <div className="bg-primary text-white p-8 rounded hover:scale-105 transition">
            hover:scale-105
          </div>
          <div className="bg-secondary text-white p-8 rounded hover:scale-110 transition">
            hover:scale-110
          </div>
          <div className="bg-success text-white p-8 rounded hover:scale-95 transition">
            hover:scale-95
          </div>
        </div>
      </ComponentPreview>

      <h3 className="text-lg font-semibold mt-8 mb-3">Rotate</h3>
      <ComponentPreview
        title="Rotate Transform"
        code={`<div class="flex gap-4">
  <div class="bg-primary text-white p-8 rounded rotate-0">rotate-0</div>
  <div class="bg-primary text-white p-8 rounded rotate-45">rotate-45</div>
  <div class="bg-primary text-white p-8 rounded rotate-90">rotate-90</div>
  <div class="bg-primary text-white p-8 rounded -rotate-45">-rotate-45</div>
</div>`}
      >
        <div className="flex gap-4">
          <div className="bg-primary text-white p-8 rounded rotate-0">rotate-0</div>
          <div className="bg-primary text-white p-8 rounded rotate-45">rotate-45</div>
          <div className="bg-primary text-white p-8 rounded rotate-90">rotate-90</div>
          <div className="bg-primary text-white p-8 rounded -rotate-45">-rotate-45</div>
        </div>
      </ComponentPreview>

      <h3 className="text-lg font-semibold mt-8 mb-3">Translate</h3>
      <ComponentPreview
        title="Translate Transform"
        code={`<div class="flex gap-16">
  <div class="bg-primary text-white p-8 rounded hover:-translate-y-2 transition">
    hover:-translate-y-2
  </div>
  <div class="bg-secondary text-white p-8 rounded hover:translate-x-2 transition">
    hover:translate-x-2
  </div>
</div>`}
      >
        <div className="flex gap-16">
          <div className="bg-primary text-white p-8 rounded hover:-translate-y-2 transition">
            hover:-translate-y-2
          </div>
          <div className="bg-secondary text-white p-8 rounded hover:translate-x-2 transition">
            hover:translate-x-2
          </div>
        </div>
      </ComponentPreview>

      <h2 className="mt-12">Transitions</h2>
      <p className="mb-4">
        Add smooth transitions to property changes.
      </p>

      <ComponentPreview
        title="Transition Utilities"
        code={`<div class="flex gap-4">
  <button class="btn-primary transition hover:bg-primary-hover">
    transition (default)
  </button>
  <button class="btn-secondary transition-all hover:scale-105">
    transition-all
  </button>
  <button class="btn-ghost transition-colors hover:bg-gray-100">
    transition-colors
  </button>
</div>`}
      >
        <div className="flex gap-4">
          <button className="btn-primary transition hover:bg-primary-hover">
            transition (default)
          </button>
          <button className="btn-secondary transition-all hover:scale-105">
            transition-all
          </button>
          <button className="btn-ghost transition-colors hover:bg-gray-100">
            transition-colors
          </button>
        </div>
      </ComponentPreview>

      <h3 className="text-lg font-semibold mt-8 mb-3">Transition Duration</h3>
      <ComponentPreview
        title="Duration Classes"
        code={`<div class="flex gap-4">
  <div class="bg-primary text-white p-8 rounded transition-all duration-150 hover:scale-110">
    duration-150 (fast)
  </div>
  <div class="bg-primary text-white p-8 rounded transition-all duration-300 hover:scale-110">
    duration-300 (normal)
  </div>
  <div class="bg-primary text-white p-8 rounded transition-all duration-500 hover:scale-110">
    duration-500 (slow)
  </div>
</div>`}
      >
        <div className="flex gap-4">
          <div className="bg-primary text-white p-8 rounded transition-all duration-150 hover:scale-110">
            duration-150 (fast)
          </div>
          <div className="bg-primary text-white p-8 rounded transition-all duration-300 hover:scale-110">
            duration-300 (normal)
          </div>
          <div className="bg-primary text-white p-8 rounded transition-all duration-500 hover:scale-110">
            duration-500 (slow)
          </div>
        </div>
      </ComponentPreview>

      <h2 className="mt-12">Filters</h2>

      <h3 className="text-lg font-semibold mt-6 mb-3">Blur</h3>
      <ComponentPreview
        title="Blur Filter"
        code={`<div class="flex gap-4">
  <div class="bg-primary text-white p-8 rounded blur-none">blur-none</div>
  <div class="bg-primary text-white p-8 rounded blur-sm">blur-sm</div>
  <div class="bg-primary text-white p-8 rounded blur">blur</div>
  <div class="bg-primary text-white p-8 rounded blur-lg">blur-lg</div>
</div>`}
      >
        <div className="flex gap-4">
          <div className="bg-primary text-white p-8 rounded blur-none">blur-none</div>
          <div className="bg-primary text-white p-8 rounded blur-sm">blur-sm</div>
          <div className="bg-primary text-white p-8 rounded blur">blur</div>
          <div className="bg-primary text-white p-8 rounded blur-lg">blur-lg</div>
        </div>
      </ComponentPreview>

      <h3 className="text-lg font-semibold mt-8 mb-3">Brightness</h3>
      <ComponentPreview
        title="Brightness Filter"
        code={`<div class="flex gap-4">
  <div class="bg-primary text-white p-8 rounded brightness-50">brightness-50</div>
  <div class="bg-primary text-white p-8 rounded brightness-75">brightness-75</div>
  <div class="bg-primary text-white p-8 rounded brightness-100">brightness-100</div>
  <div class="bg-primary text-white p-8 rounded brightness-125">brightness-125</div>
</div>`}
      >
        <div className="flex gap-4">
          <div className="bg-primary text-white p-8 rounded brightness-50">brightness-50</div>
          <div className="bg-primary text-white p-8 rounded brightness-75">brightness-75</div>
          <div className="bg-primary text-white p-8 rounded brightness-100">brightness-100</div>
          <div className="bg-primary text-white p-8 rounded brightness-125">brightness-125</div>
        </div>
      </ComponentPreview>

      <h3 className="text-lg font-semibold mt-8 mb-3">Grayscale</h3>
      <ComponentPreview
        title="Grayscale Filter"
        code={`<div class="flex gap-4">
  <div class="bg-primary text-white p-8 rounded grayscale-0 hover:grayscale transition">
    Hover me
  </div>
  <div class="bg-success text-white p-8 rounded grayscale hover:grayscale-0 transition">
    Hover me
  </div>
</div>`}
      >
        <div className="flex gap-4">
          <div className="bg-primary text-white p-8 rounded grayscale-0 hover:grayscale transition">
            Hover me
          </div>
          <div className="bg-success text-white p-8 rounded grayscale hover:grayscale-0 transition">
            Hover me
          </div>
        </div>
      </ComponentPreview>

      <h2 className="mt-12">Opacity</h2>
      <p className="mb-4">
        Control element transparency with opacity utilities.
      </p>

      <ComponentPreview
        title="Opacity"
        code={`<div class="flex gap-4">
  <div class="bg-primary text-white p-8 rounded opacity-0">opacity-0</div>
  <div class="bg-primary text-white p-8 rounded opacity-25">opacity-25</div>
  <div class="bg-primary text-white p-8 rounded opacity-50">opacity-50</div>
  <div class="bg-primary text-white p-8 rounded opacity-75">opacity-75</div>
  <div class="bg-primary text-white p-8 rounded opacity-100">opacity-100</div>
</div>`}
      >
        <div className="flex gap-4">
          <div className="bg-primary text-white p-8 rounded opacity-0">opacity-0</div>
          <div className="bg-primary text-white p-8 rounded opacity-25">opacity-25</div>
          <div className="bg-primary text-white p-8 rounded opacity-50">opacity-50</div>
          <div className="bg-primary text-white p-8 rounded opacity-75">opacity-75</div>
          <div className="bg-primary text-white p-8 rounded opacity-100">opacity-100</div>
        </div>
      </ComponentPreview>

      <h2 className="mt-12">Common Patterns</h2>

      <h3 className="text-lg font-semibold mt-6 mb-3">Interactive Card</h3>
      <ComponentPreview
        title="Card with Hover Effects"
        code={`<div class="card max-w-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer">
  <div class="card-body">
    <h3 className="font-bold mb-2">Hover Me</h3>
    <p class="text-sm text-muted">
      This card lifts and gains shadow on hover.
    </p>
  </div>
</div>`}
      >
        <div className="card max-w-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer">
          <div className="card-body">
            <h3 className="font-bold mb-2">Hover Me</h3>
            <p className="text-sm text-muted">
              This card lifts and gains shadow on hover.
            </p>
          </div>
        </div>
      </ComponentPreview>

      <h3 className="text-lg font-semibold mt-8 mb-3">Image Overlay</h3>
      <ComponentPreview
        title="Hover Overlay Effect"
        code={`<div class="relative overflow-hidden rounded-lg max-w-sm cursor-pointer group">
  <div style="height: 200px; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);"></div>
  <div class="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
  <div class="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
    <button class="btn-primary">View Details</button>
  </div>
</div>`}
      >
        <div className="relative overflow-hidden rounded-lg max-w-sm cursor-pointer group">
          <div style={{ height: '200px', background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' }}></div>
          <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <button className="btn-primary">View Details</button>
          </div>
        </div>
      </ComponentPreview>

      <h3 className="text-lg font-semibold mt-8 mb-3">Loading Spinner</h3>
      <ComponentPreview
        title="Animated Spinner"
        code={`<div class="flex items-center gap-4">
  <div class="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
  <div class="w-12 h-12 border-4 border-success border-t-transparent rounded-full animate-spin"></div>
</div>`}
      >
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
          <div className="w-12 h-12 border-4 border-success border-t-transparent rounded-full animate-spin"></div>
        </div>
      </ComponentPreview>

      <h2 className="mt-12">Performance</h2>
      <div className="alert alert-primary mb-6">
        <strong>Best Practices:</strong>
        <ul className="mt-2 ml-4" style={{ listStyle: 'disc' }}>
          <li>Use <code>transform</code> and <code>opacity</code> for smooth 60fps animations</li>
          <li>Apply <code>will-change</code> sparingly for frequently animated properties</li>
          <li>Avoid animating expensive properties like <code>width</code>, <code>height</code>, or <code>margin</code></li>
          <li>Use <code>transition</code> for simple hover effects</li>
          <li>Reduce motion for users with <code>prefers-reduced-motion</code></li>
        </ul>
      </div>

      <div className="mt-12 pt-8" style={{ borderTop: '1px solid var(--color-border)' }}>
        <div className="flex justify-between">
          <a href="/docs/utilities/borders" className="btn-ghost">
            ← Borders
          </a>
          <a href="/docs/utilities" className="btn-primary">
            Back to Utilities →
          </a>
        </div>
      </div>
    </div>
  )
}
