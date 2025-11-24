import { ComponentPreview } from '../../../components/ComponentPreview'
import Link from 'next/link'

export default function ResponsivePage() {
  return (
    <div>
      <h1>Responsive Design Utilities</h1>
      <p className="text-xl text-muted mt-4 mb-8">
        Mobile-first responsive utilities with breakpoint prefixes for building adaptive layouts.
      </p>

      <div className="alert alert-primary mb-8">
        <strong>📱 Mobile-First Approach:</strong>
        <p className="mt-2">
          Thrynd uses a mobile-first methodology. Unprefixed utilities apply to all screen sizes,
          and responsive prefixes (sm:, md:, lg:, xl:, 2xl:) apply from that breakpoint and up.
        </p>
      </div>

      <h2>Breakpoints</h2>
      <p className="mb-4">
        Thrynd includes five responsive breakpoints based on common device sizes.
      </p>

      <div className="table-responsive mb-8">
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>Prefix</th>
              <th>Min-width</th>
              <th>Devices</th>
              <th>Example</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><code>sm:</code></td>
              <td>640px</td>
              <td>Large phones, small tablets</td>
              <td><code>sm:w-1/2</code></td>
            </tr>
            <tr>
              <td><code>md:</code></td>
              <td>768px</td>
              <td>Tablets</td>
              <td><code>md:grid-cols-2</code></td>
            </tr>
            <tr>
              <td><code>lg:</code></td>
              <td>1024px</td>
              <td>Laptops, desktops</td>
              <td><code>lg:flex-row</code></td>
            </tr>
            <tr>
              <td><code>xl:</code></td>
              <td>1280px</td>
              <td>Large desktops</td>
              <td><code>xl:grid-cols-4</code></td>
            </tr>
            <tr>
              <td><code>2xl:</code></td>
              <td>1536px</td>
              <td>Extra large screens</td>
              <td><code>2xl:max-w-7xl</code></td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 className="mt-12">Responsive Display</h2>
      <p className="mb-4">
        Show or hide elements at different breakpoints.
      </p>

      <ComponentPreview
        title="Responsive Display Classes"
        code={`<!-- Hide on mobile, show on tablets and up -->
<div class="hidden md:block">
  Visible on tablets and larger
</div>

<!-- Show on mobile, hide on desktop -->
<div class="block lg:hidden">
  Visible only on mobile and tablets
</div>

<!-- Complex responsive display -->
<div class="block md:flex lg:grid">
  Block on mobile, flex on tablet, grid on desktop
</div>`}
      >
        <div className="space-y-4">
          <div className="card">
            <div className="card-body">
              <div className="hidden md:block bg-primary text-white p-4 rounded text-center">
                📱 Visible on tablets and larger (md:block)
              </div>
              <p className="text-sm text-muted mt-2 text-center">
                Resize your browser window to see the effect
              </p>
            </div>
          </div>

          <div className="card">
            <div className="card-body">
              <div className="block lg:hidden bg-secondary text-white p-4 rounded text-center">
                💻 Visible only on mobile and tablets (lg:hidden)
              </div>
              <p className="text-sm text-muted mt-2 text-center">
                This disappears on large screens
              </p>
            </div>
          </div>
        </div>
      </ComponentPreview>

      <h2 className="mt-12">Responsive Grid</h2>
      <p className="mb-4">
        Create adaptive grid layouts that change based on screen size.
      </p>

      <ComponentPreview
        title="Responsive Grid Columns"
        code={`<!-- 1 column on mobile, 2 on tablet, 3 on desktop -->
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
  <div class="bg-primary text-white p-6 rounded text-center">1</div>
  <div class="bg-primary text-white p-6 rounded text-center">2</div>
  <div class="bg-primary text-white p-6 rounded text-center">3</div>
  <div class="bg-primary text-white p-6 rounded text-center">4</div>
  <div class="bg-primary text-white p-6 rounded text-center">5</div>
  <div class="bg-primary text-white p-6 rounded text-center">6</div>
</div>`}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="bg-primary text-white p-6 rounded text-center">1</div>
          <div className="bg-primary text-white p-6 rounded text-center">2</div>
          <div className="bg-primary text-white p-6 rounded text-center">3</div>
          <div className="bg-primary text-white p-6 rounded text-center">4</div>
          <div className="bg-primary text-white p-6 rounded text-center">5</div>
          <div className="bg-primary text-white p-6 rounded text-center">6</div>
        </div>
      </ComponentPreview>

      <h2 className="mt-12">Responsive Width</h2>
      <p className="mb-4">
        Adjust element widths based on breakpoints.
      </p>

      <ComponentPreview
        title="Adaptive Width"
        code={`<!-- Full width on mobile, half width on tablet, third on desktop -->
<div class="w-full md:w-1/2 lg:w-1/3 bg-primary text-white p-4 rounded">
  Responsive width
</div>

<!-- Auto width on mobile, fixed on desktop -->
<div class="w-auto lg:w-96 bg-secondary text-white p-4 rounded mt-4">
  Auto to fixed width
</div>`}
      >
        <div className="space-y-4">
          <div className="w-full md:w-1/2 lg:w-1/3 bg-primary text-white p-4 rounded text-center">
            w-full md:w-1/2 lg:w-1/3
          </div>
          <div className="w-auto lg:w-96 bg-secondary text-white p-4 rounded text-center">
            w-auto lg:w-96
          </div>
        </div>
      </ComponentPreview>

      <h2 className="mt-12">Responsive Flex Direction</h2>
      <p className="mb-4">
        Change flex direction at different breakpoints.
      </p>

      <ComponentPreview
        title="Responsive Flexbox"
        code={`<!-- Column on mobile, row on tablet -->
<div class="flex flex-col md:flex-row gap-4">
  <div class="bg-primary text-white p-6 rounded flex-1">Item 1</div>
  <div class="bg-secondary text-white p-6 rounded flex-1">Item 2</div>
  <div class="bg-success text-white p-6 rounded flex-1">Item 3</div>
</div>`}
      >
        <div className="flex flex-col md:flex-row gap-4">
          <div className="bg-primary text-white p-6 rounded flex-1 text-center">Item 1</div>
          <div className="bg-secondary text-white p-6 rounded flex-1 text-center">Item 2</div>
          <div className="bg-success text-white p-6 rounded flex-1 text-center">Item 3</div>
        </div>
      </ComponentPreview>

      <h2 className="mt-12">Responsive Text Alignment</h2>
      <p className="mb-4">
        Adjust text alignment for different screen sizes.
      </p>

      <ComponentPreview
        title="Adaptive Text Alignment"
        code={`<!-- Center on mobile, left on desktop -->
<p class="text-center lg:text-left">
  This text is centered on mobile but left-aligned on large screens.
</p>

<!-- Right align on tablets and up -->
<p class="text-left md:text-right mt-4">
  Left on mobile, right on tablets and up.
</p>`}
      >
        <div className="space-y-4">
          <p className="text-center lg:text-left bg-gray-100 p-4 rounded">
            This text is centered on mobile but left-aligned on large screens.
          </p>
          <p className="text-left md:text-right bg-gray-100 p-4 rounded">
            Left on mobile, right on tablets and up.
          </p>
        </div>
      </ComponentPreview>

      <h2 className="mt-12">Responsive Spacing</h2>
      <p className="mb-4">
        Adjust padding and margins at different breakpoints.
      </p>

      <ComponentPreview
        title="Responsive Padding"
        code={`<!-- Small padding on mobile, larger on desktop -->
<div class="bg-primary text-white p-4 lg:p-8 rounded">
  p-4 on mobile, p-8 on large screens
</div>

<!-- Responsive margin -->
<div class="bg-secondary text-white p-4 rounded mt-4 m-0 md:m-auto md:max-w-md">
  Centered on tablets and up
</div>`}
      >
        <div className="space-y-4">
          <div className="bg-primary text-white p-4 lg:p-8 rounded text-center">
            p-4 on mobile, p-8 on large screens
          </div>
          <div className="bg-secondary text-white p-4 rounded m-0 md:m-auto md:max-w-md text-center">
            Centered on tablets and up
          </div>
        </div>
      </ComponentPreview>

      <h2 className="mt-12">Common Patterns</h2>

      <h3 className="text-lg font-semibold mt-6 mb-3">Responsive Navbar</h3>
      <ComponentPreview
        title="Mobile-First Navigation"
        code={`<nav class="bg-primary text-white p-4">
  <div class="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
    <div class="text-xl font-bold">Logo</div>
    <div class="flex flex-col md:flex-row gap-4">
      <a href="#" class="hover:underline">Home</a>
      <a href="#" class="hover:underline">About</a>
      <a href="#" class="hover:underline">Contact</a>
    </div>
  </div>
</nav>`}
      >
        <nav className="bg-primary text-white p-4 rounded">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div className="text-xl font-bold">Logo</div>
            <div className="flex flex-col md:flex-row gap-4">
              <a href="#" className="hover:underline">Home</a>
              <a href="#" className="hover:underline">About</a>
              <a href="#" className="hover:underline">Contact</a>
            </div>
          </div>
        </nav>
      </ComponentPreview>

      <h3 className="text-lg font-semibold mt-8 mb-3">Responsive Card Grid</h3>
      <ComponentPreview
        title="Adaptive Card Layout"
        code={`<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
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
  <div class="card">
    <div class="card-body">
      <h4 class="font-semibold mb-2">Card 4</h4>
      <p class="text-sm text-muted">Content here</p>
    </div>
  </div>
</div>`}
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
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
          <div className="card">
            <div className="card-body">
              <h4 className="font-semibold mb-2">Card 4</h4>
              <p className="text-sm text-muted">Content here</p>
            </div>
          </div>
        </div>
      </ComponentPreview>

      <h3 className="text-lg font-semibold mt-8 mb-3">Responsive Hero Section</h3>
      <ComponentPreview
        title="Adaptive Hero"
        code={`<div class="bg-gradient-to-br from-primary to-secondary text-white p-8 lg:p-16 rounded">
  <div class="max-w-3xl mx-auto text-center">
    <h1 class="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
      Responsive Hero
    </h1>
    <p class="text-lg md:text-xl mb-6 md:mb-8">
      Text size and spacing adapt to screen size
    </p>
    <div class="flex flex-col sm:flex-row justify-center gap-4">
      <button class="btn-white">Get Started</button>
      <button class="btn-ghost" style="color: white; border-color: white;">
        Learn More
      </button>
    </div>
  </div>
</div>`}
      >
        <div className="bg-gradient-to-br from-primary to-secondary text-white p-8 lg:p-16 rounded">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Responsive Hero
            </h1>
            <p className="text-lg md:text-xl mb-6 md:mb-8">
              Text size and spacing adapt to screen size
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button className="btn-white">Get Started</button>
              <button className="btn-ghost" style={{ color: 'white', borderColor: 'white' }}>
                Learn More
              </button>
            </div>
          </div>
        </div>
      </ComponentPreview>

      <h2 className="mt-12">Best Practices</h2>
      <div className="alert alert-primary mb-8">
        <strong>Tips for Responsive Design:</strong>
        <ul className="mt-2 ml-4" style={{ listStyle: 'disc' }}>
          <li>Start with mobile styles first (unprefixed utilities)</li>
          <li>Add complexity at larger breakpoints progressively</li>
          <li>Test on real devices, not just browser resize</li>
          <li>Use <code>container</code> class to constrain maximum width</li>
          <li>Prefer flexbox and grid over fixed positioning</li>
          <li>Consider touch targets (minimum 44x44px) on mobile</li>
          <li>Use responsive images with appropriate breakpoints</li>
          <li>Test with browser dev tools in responsive mode</li>
        </ul>
      </div>

      <h2 className="mt-12">Available Responsive Utilities</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="card">
          <div className="card-body">
            <h4 className="font-semibold mb-3">Display & Layout</h4>
            <ul className="text-sm space-y-1" style={{ listStyle: 'disc', paddingLeft: '1.5rem' }}>
              <li>Display (block, flex, grid, hidden)</li>
              <li>Flex direction (row, column)</li>
              <li>Justify content & align items</li>
              <li>Grid columns (1-12)</li>
            </ul>
          </div>
        </div>

        <div className="card">
          <div className="card-body">
            <h4 className="font-semibold mb-3">Sizing</h4>
            <ul className="text-sm space-y-1" style={{ listStyle: 'disc', paddingLeft: '1.5rem' }}>
              <li>Width (full, fractional, auto)</li>
              <li>Max-width (xs, sm, md, lg, xl, 2xl-7xl)</li>
              <li>Height utilities</li>
              <li>Aspect ratios</li>
            </ul>
          </div>
        </div>

        <div className="card">
          <div className="card-body">
            <h4 className="font-semibold mb-3">Typography</h4>
            <ul className="text-sm space-y-1" style={{ listStyle: 'disc', paddingLeft: '1.5rem' }}>
              <li>Text alignment (left, center, right)</li>
              <li>Font sizes</li>
              <li>Line height</li>
            </ul>
          </div>
        </div>

        <div className="card">
          <div className="card-body">
            <h4 className="font-semibold mb-3">Spacing</h4>
            <ul className="text-sm space-y-1" style={{ listStyle: 'disc', paddingLeft: '1.5rem' }}>
              <li>Padding (all sides)</li>
              <li>Margin (including auto)</li>
              <li>Gap for flex/grid</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="mt-12 pt-8" style={{ borderTop: '1px solid var(--color-border)' }}>
        <div className="flex justify-between">
          <Link href="/docs/utilities/effects" className="btn-ghost">
            ← Effects
          </Link>
          <Link href="/docs/utilities" className="btn-primary">
            Back to Utilities →
          </Link>
        </div>
      </div>
    </div>
  )
}
