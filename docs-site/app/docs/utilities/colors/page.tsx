import { ComponentPreview } from '../../../components/ComponentPreview'

export default function ColorsPage() {
  const semanticColors = [
    { name: 'Primary', class: 'primary', hex: '#3b82f6', description: 'Main brand color' },
    { name: 'Secondary', class: 'secondary', hex: '#6b7280', description: 'Secondary actions' },
    { name: 'Success', class: 'success', hex: '#10b981', description: 'Positive outcomes' },
    { name: 'Danger', class: 'danger', hex: '#ef4444', description: 'Errors and warnings' },
    { name: 'Warning', class: 'warning', hex: '#f59e0b', description: 'Caution states' },
  ]

  const grayColors = [
    { name: 'Gray 50', class: 'gray-50', hex: '#f9fafb' },
    { name: 'Gray 100', class: 'gray-100', hex: '#f3f4f6' },
    { name: 'Gray 200', class: 'gray-200', hex: '#e5e7eb' },
    { name: 'Gray 300', class: 'gray-300', hex: '#d1d5db' },
    { name: 'Gray 400', class: 'gray-400', hex: '#9ca3af' },
    { name: 'Gray 500', class: 'gray-500', hex: '#6b7280' },
    { name: 'Gray 600', class: 'gray-600', hex: '#4b5563' },
    { name: 'Gray 700', class: 'gray-700', hex: '#374151' },
    { name: 'Gray 800', class: 'gray-800', hex: '#1f2937' },
    { name: 'Gray 900', class: 'gray-900', hex: '#111827' },
  ]

  return (
    <div>
      <h1>Color Utilities</h1>
      <p className="text-xl text-muted mt-4 mb-8">
        Text, background, and border color utilities using semantic and grayscale colors.
      </p>

      <div className="alert alert-primary mb-12">
        <strong>💡 Theme-Aware:</strong> Semantic colors (primary, success, etc.) automatically adapt to your selected theme.
      </div>

      <h2>Semantic Colors</h2>
      <p className="mb-6">
        Use semantic colors for consistent meaning across your application.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
        {semanticColors.map((color) => (
          <div key={color.class} className="card">
            <div className="card-body">
              <div
                className={`h-16 rounded mb-3 bg-${color.class}`}
                style={{ background: `var(--color-${color.class})` }}
              />
              <h4 className="font-semibold">{color.name}</h4>
              <p className="text-sm text-muted mb-2">{color.description}</p>
              <div className="space-y-1 text-xs">
                <div><code>text-{color.class}</code></div>
                <div><code>bg-{color.class}</code></div>
                <div><code>border-{color.class}</code></div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <h2>Gray Scale</h2>
      <p className="mb-6">
        A complete grayscale palette from light to dark.
      </p>

      <div className="grid grid-cols-2 md:grid-cols-5 gap-3 mb-12">
        {grayColors.map((color) => (
          <div key={color.class} className="text-center">
            <div
              className={`h-16 rounded mb-2 border`}
              style={{ background: color.hex }}
            />
            <div className="text-sm font-semibold">{color.name}</div>
            <div className="text-xs text-muted">{color.hex}</div>
          </div>
        ))}
      </div>

      <h2>Text Colors</h2>
      <p className="mb-4">
        Use <code>text-*</code> utilities to set text color.
      </p>

      <ComponentPreview
        title="Text Colors"
        code={`<p class="text-primary">Primary text color</p>
<p class="text-secondary">Secondary text color</p>
<p class="text-success">Success text color</p>
<p class="text-danger">Danger text color</p>
<p class="text-warning">Warning text color</p>
<p class="text-muted">Muted text color</p>`}
      >
        <div className="space-y-2">
          <p className="text-primary">Primary text color</p>
          <p className="text-secondary">Secondary text color</p>
          <p className="text-success">Success text color</p>
          <p className="text-danger">Danger text color</p>
          <p className="text-warning">Warning text color</p>
          <p className="text-muted">Muted text color</p>
        </div>
      </ComponentPreview>

      <h2 className="mt-12">Background Colors</h2>
      <p className="mb-4">
        Use <code>bg-*</code> utilities to set background color.
      </p>

      <ComponentPreview
        title="Background Colors"
        code={`<div class="flex flex-wrap gap-4">
  <div class="bg-primary text-white p-4 rounded">bg-primary</div>
  <div class="bg-secondary text-white p-4 rounded">bg-secondary</div>
  <div class="bg-success text-white p-4 rounded">bg-success</div>
  <div class="bg-danger text-white p-4 rounded">bg-danger</div>
  <div class="bg-warning text-white p-4 rounded">bg-warning</div>
</div>`}
      >
        <div className="flex flex-wrap gap-4">
          <div className="bg-primary text-white p-4 rounded">bg-primary</div>
          <div className="bg-secondary text-white p-4 rounded">bg-secondary</div>
          <div className="bg-success text-white p-4 rounded">bg-success</div>
          <div className="bg-danger text-white p-4 rounded">bg-danger</div>
          <div className="bg-warning text-white p-4 rounded">bg-warning</div>
        </div>
      </ComponentPreview>

      <h3 className="text-lg font-semibold mt-8 mb-3">Gray Backgrounds</h3>
      <ComponentPreview
        title="Gray Background Utilities"
        code={`<div class="flex flex-wrap gap-4">
  <div class="bg-gray-50 p-4 rounded border">bg-gray-50</div>
  <div class="bg-gray-100 p-4 rounded">bg-gray-100</div>
  <div class="bg-gray-200 p-4 rounded">bg-gray-200</div>
  <div class="bg-gray-800 text-white p-4 rounded">bg-gray-800</div>
  <div class="bg-gray-900 text-white p-4 rounded">bg-gray-900</div>
</div>`}
      >
        <div className="flex flex-wrap gap-4">
          <div className="bg-gray-50 p-4 rounded border">bg-gray-50</div>
          <div className="bg-gray-100 p-4 rounded">bg-gray-100</div>
          <div className="bg-gray-200 p-4 rounded">bg-gray-200</div>
          <div className="bg-gray-800 text-white p-4 rounded">bg-gray-800</div>
          <div className="bg-gray-900 text-white p-4 rounded">bg-gray-900</div>
        </div>
      </ComponentPreview>

      <h2 className="mt-12">Border Colors</h2>
      <p className="mb-4">
        Use <code>border-*</code> utilities to set border color.
      </p>

      <ComponentPreview
        title="Border Colors"
        code={`<div class="flex flex-wrap gap-4">
  <div class="border-2 border-primary p-4 rounded">border-primary</div>
  <div class="border-2 border-success p-4 rounded">border-success</div>
  <div class="border-2 border-danger p-4 rounded">border-danger</div>
  <div class="border-2 border-warning p-4 rounded">border-warning</div>
</div>`}
      >
        <div className="flex flex-wrap gap-4">
          <div className="border-2 border-primary p-4 rounded">border-primary</div>
          <div className="border-2 border-success p-4 rounded">border-success</div>
          <div className="border-2 border-danger p-4 rounded">border-danger</div>
          <div className="border-2 border-warning p-4 rounded">border-warning</div>
        </div>
      </ComponentPreview>

      <h2 className="mt-12">Common Patterns</h2>

      <h3 className="text-lg font-semibold mt-6 mb-3">Status Indicators</h3>
      <ComponentPreview
        title="Colored Status Cards"
        code={`<div class="grid grid-cols-1 md:grid-cols-3 gap-4">
  <div class="card border-l-4 border-success">
    <div class="card-body">
      <div class="text-success font-semibold mb-2">Active</div>
      <p class="text-sm">System is running normally</p>
    </div>
  </div>

  <div class="card border-l-4 border-warning">
    <div class="card-body">
      <div class="text-warning font-semibold mb-2">Warning</div>
      <p class="text-sm">High CPU usage detected</p>
    </div>
  </div>

  <div class="card border-l-4 border-danger">
    <div class="card-body">
      <div class="text-danger font-semibold mb-2">Error</div>
      <p class="text-sm">Connection failed</p>
    </div>
  </div>
</div>`}
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="card border-l-4 border-success">
            <div className="card-body">
              <div className="text-success font-semibold mb-2">Active</div>
              <p className="text-sm">System is running normally</p>
            </div>
          </div>

          <div className="card border-l-4 border-warning">
            <div className="card-body">
              <div className="text-warning font-semibold mb-2">Warning</div>
              <p className="text-sm">High CPU usage detected</p>
            </div>
          </div>

          <div className="card border-l-4 border-danger">
            <div className="card-body">
              <div className="text-danger font-semibold mb-2">Error</div>
              <p className="text-sm">Connection failed</p>
            </div>
          </div>
        </div>
      </ComponentPreview>

      <h3 className="text-lg font-semibold mt-8 mb-3">Colored Sections</h3>
      <ComponentPreview
        title="Background Sections"
        code={`<div class="bg-primary text-white p-8 rounded-lg mb-4">
  <h3 class="font-bold mb-2">Primary Section</h3>
  <p>Important content with primary background.</p>
</div>

<div class="bg-gray-50 p-8 rounded-lg">
  <h3 class="font-bold mb-2">Gray Section</h3>
  <p>Secondary content with subtle background.</p>
</div>`}
      >
        <div>
          <div className="bg-primary text-white p-8 rounded-lg mb-4">
            <h3 className="font-bold mb-2">Primary Section</h3>
            <p>Important content with primary background.</p>
          </div>

          <div className="bg-gray-50 p-8 rounded-lg">
            <h3 className="font-bold mb-2">Gray Section</h3>
            <p>Secondary content with subtle background.</p>
          </div>
        </div>
      </ComponentPreview>

      <h2 className="mt-12">Accessibility</h2>
      <div className="alert alert-primary mb-6">
        <strong>Best Practices:</strong>
        <ul className="mt-2 ml-4" style={{ listStyle: 'disc' }}>
          <li>Ensure sufficient color contrast (WCAG AA: 4.5:1 for text)</li>
          <li>Don't rely solely on color to convey meaning</li>
          <li>Use semantic colors consistently</li>
          <li>Test colors in both light and dark themes</li>
          <li>Combine color with icons or text for clarity</li>
        </ul>
      </div>

      <div className="mt-12 pt-8" style={{ borderTop: '1px solid var(--color-border)' }}>
        <div className="flex justify-between">
          <a href="/docs/utilities/spacing" className="btn-ghost">
            ← Spacing
          </a>
          <a href="/docs/utilities/typography" className="btn-primary">
            Next: Typography →
          </a>
        </div>
      </div>
    </div>
  )
}
