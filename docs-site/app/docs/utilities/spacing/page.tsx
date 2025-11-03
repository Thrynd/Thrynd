import { ComponentPreview } from '../../../components/ComponentPreview'

export default function SpacingPage() {
  const spacingScale = [
    { class: '0', value: '0', pixels: '0px' },
    { class: '1', value: '0.25rem', pixels: '4px' },
    { class: '2', value: '0.5rem', pixels: '8px' },
    { class: '3', value: '0.75rem', pixels: '12px' },
    { class: '4', value: '1rem', pixels: '16px' },
    { class: '5', value: '1.25rem', pixels: '20px' },
    { class: '6', value: '1.5rem', pixels: '24px' },
    { class: '8', value: '2rem', pixels: '32px' },
    { class: '10', value: '2.5rem', pixels: '40px' },
    { class: '12', value: '3rem', pixels: '48px' },
    { class: '16', value: '4rem', pixels: '64px' },
    { class: '20', value: '5rem', pixels: '80px' },
    { class: '24', value: '6rem', pixels: '96px' },
  ]

  return (
    <div>
      <h1>Spacing Utilities</h1>
      <p className="text-xl text-muted mt-4 mb-8">
        Margin and padding utilities for consistent spacing using a standardized scale.
      </p>

      <h2>Spacing Scale</h2>
      <p className="mb-4">
        Thrynd uses a spacing scale from 0-24 based on multiples of 4px.
      </p>

      <div className="table-responsive mb-12">
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>Class</th>
              <th>Value</th>
              <th>Pixels</th>
              <th>Example</th>
            </tr>
          </thead>
          <tbody>
            {spacingScale.map((item) => (
              <tr key={item.class}>
                <td><code>-{item.class}</code></td>
                <td>{item.value}</td>
                <td>{item.pixels}</td>
                <td>
                  <div className="flex gap-2">
                    <code className="text-xs">m-{item.class}</code>
                    <code className="text-xs">p-{item.class}</code>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h2>Margin</h2>
      <p className="mb-4">
        Control margin on all sides or individual sides.
      </p>

      <h3 className="text-lg font-semibold mt-6 mb-3">All Sides</h3>
      <ComponentPreview
        title="Margin All Sides"
        code={`<div class="bg-gray-100 p-4">
  <div class="m-4 bg-primary text-white p-4">m-4</div>
  <div class="m-8 bg-primary text-white p-4">m-8</div>
</div>`}
      >
        <div style={{ background: 'var(--color-gray-100)', padding: '1rem' }}>
          <div className="m-4" style={{ background: 'var(--color-primary)', color: 'white', padding: '1rem' }}>m-4</div>
          <div className="m-8" style={{ background: 'var(--color-primary)', color: 'white', padding: '1rem' }}>m-8</div>
        </div>
      </ComponentPreview>

      <h3 className="text-lg font-semibold mt-8 mb-3">Individual Sides</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="card">
          <div className="card-body">
            <h4 className="font-semibold mb-3">Directional Classes</h4>
            <div className="space-y-2 text-sm">
              <div><code>mt-4</code> → margin-top</div>
              <div><code>mr-4</code> → margin-right</div>
              <div><code>mb-4</code> → margin-bottom</div>
              <div><code>ml-4</code> → margin-left</div>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="card-body">
            <h4 className="font-semibold mb-3">Axis Classes</h4>
            <div className="space-y-2 text-sm">
              <div><code>mx-4</code> → margin-left & right</div>
              <div><code>my-4</code> → margin-top & bottom</div>
              <div><code>mx-auto</code> → auto horizontal centering</div>
            </div>
          </div>
        </div>
      </div>

      <ComponentPreview
        title="Margin Directions"
        code={`<div class="bg-gray-100 p-4 flex flex-col gap-4">
  <div class="mt-8 bg-primary text-white p-4">mt-8 (margin-top)</div>
  <div class="mb-8 bg-primary text-white p-4">mb-8 (margin-bottom)</div>
  <div class="mx-8 bg-primary text-white p-4">mx-8 (margin-x)</div>
  <div class="mx-auto bg-primary text-white p-4 max-w-sm">mx-auto (centered)</div>
</div>`}
      >
        <div style={{ background: 'var(--color-gray-100)', padding: '1rem' }} className="flex flex-col gap-4">
          <div className="mt-8" style={{ background: 'var(--color-primary)', color: 'white', padding: '1rem' }}>mt-8 (margin-top)</div>
          <div className="mb-8" style={{ background: 'var(--color-primary)', color: 'white', padding: '1rem' }}>mb-8 (margin-bottom)</div>
          <div className="mx-8" style={{ background: 'var(--color-primary)', color: 'white', padding: '1rem' }}>mx-8 (margin-x)</div>
          <div className="mx-auto max-w-sm" style={{ background: 'var(--color-primary)', color: 'white', padding: '1rem' }}>mx-auto (centered)</div>
        </div>
      </ComponentPreview>

      <h2 className="mt-12">Padding</h2>
      <p className="mb-4">
        Control padding on all sides or individual sides.
      </p>

      <h3 className="text-lg font-semibold mt-6 mb-3">All Sides</h3>
      <ComponentPreview
        title="Padding All Sides"
        code={`<div class="flex gap-4">
  <div class="p-4 bg-primary text-white">p-4</div>
  <div class="p-8 bg-primary text-white">p-8</div>
  <div class="p-12 bg-primary text-white">p-12</div>
</div>`}
      >
        <div className="flex gap-4">
          <div className="p-4" style={{ background: 'var(--color-primary)', color: 'white' }}>p-4</div>
          <div className="p-8" style={{ background: 'var(--color-primary)', color: 'white' }}>p-8</div>
          <div className="p-12" style={{ background: 'var(--color-primary)', color: 'white' }}>p-12</div>
        </div>
      </ComponentPreview>

      <h3 className="text-lg font-semibold mt-8 mb-3">Individual Sides</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="card">
          <div className="card-body">
            <h4 className="font-semibold mb-3">Directional Classes</h4>
            <div className="space-y-2 text-sm">
              <div><code>pt-4</code> → padding-top</div>
              <div><code>pr-4</code> → padding-right</div>
              <div><code>pb-4</code> → padding-bottom</div>
              <div><code>pl-4</code> → padding-left</div>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="card-body">
            <h4 className="font-semibold mb-3">Axis Classes</h4>
            <div className="space-y-2 text-sm">
              <div><code>px-4</code> → padding-left & right</div>
              <div><code>py-4</code> → padding-top & bottom</div>
            </div>
          </div>
        </div>
      </div>

      <ComponentPreview
        title="Padding Directions"
        code={`<div class="flex flex-col gap-4">
  <div class="pt-8 bg-primary text-white">pt-8 (padding-top)</div>
  <div class="pb-8 bg-primary text-white">pb-8 (padding-bottom)</div>
  <div class="px-8 bg-primary text-white">px-8 (padding-x)</div>
  <div class="py-8 bg-primary text-white">py-8 (padding-y)</div>
</div>`}
      >
        <div className="flex flex-col gap-4">
          <div className="pt-8" style={{ background: 'var(--color-primary)', color: 'white' }}>pt-8 (padding-top)</div>
          <div className="pb-8" style={{ background: 'var(--color-primary)', color: 'white' }}>pb-8 (padding-bottom)</div>
          <div className="px-8" style={{ background: 'var(--color-primary)', color: 'white' }}>px-8 (padding-x)</div>
          <div className="py-8" style={{ background: 'var(--color-primary)', color: 'white' }}>py-8 (padding-y)</div>
        </div>
      </ComponentPreview>

      <h2 className="mt-12">Common Patterns</h2>

      <h3 className="text-lg font-semibold mt-6 mb-3">Card Spacing</h3>
      <ComponentPreview
        title="Card with Consistent Spacing"
        code={`<div class="card max-w-md">
  <div class="card-body">
    <h3 class="mb-4">Card Title</h3>
    <p class="mb-6">Content with consistent spacing using utilities.</p>
    <div class="flex gap-3">
      <button class="btn-primary">Action</button>
      <button class="btn-ghost">Cancel</button>
    </div>
  </div>
</div>`}
      >
        <div className="card max-w-md">
          <div className="card-body">
            <h3 className="mb-4">Card Title</h3>
            <p className="mb-6">Content with consistent spacing using utilities.</p>
            <div className="flex gap-3">
              <button className="btn-primary">Action</button>
              <button className="btn-ghost">Cancel</button>
            </div>
          </div>
        </div>
      </ComponentPreview>

      <h3 className="text-lg font-semibold mt-8 mb-3">Section Spacing</h3>
      <ComponentPreview
        title="Vertical Section Spacing"
        code={`<div>
  <section class="mb-12">
    <h2 class="text-2xl font-bold mb-4">Section One</h2>
    <p>Content with proper vertical rhythm.</p>
  </section>

  <section class="mb-12">
    <h2 class="text-2xl font-bold mb-4">Section Two</h2>
    <p>More content with consistent spacing.</p>
  </section>
</div>`}
      >
        <div>
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Section One</h2>
            <p>Content with proper vertical rhythm.</p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Section Two</h2>
            <p>More content with consistent spacing.</p>
          </section>
        </div>
      </ComponentPreview>

      <h2 className="mt-12">Negative Margin</h2>
      <p className="mb-4">
        Use negative margins with <code>-m</code> prefix for overlapping elements.
      </p>

      <ComponentPreview
        title="Negative Margin"
        code={`<div class="card">
  <div class="card-body">
    <div class="-mt-12 mb-4 avatar avatar-xl mx-auto">XL</div>
    <h3 class="text-center">Overlapping Avatar</h3>
    <p class="text-center text-muted">Avatar positioned above card edge</p>
  </div>
</div>`}
      >
        <div className="card">
          <div className="card-body">
            <div className="-mt-12 mb-4 avatar avatar-xl mx-auto">XL</div>
            <h3 className="text-center">Overlapping Avatar</h3>
            <p className="text-center text-muted">Avatar positioned above card edge</p>
          </div>
        </div>
      </ComponentPreview>

      <div className="mt-12 pt-8" style={{ borderTop: '1px solid var(--color-border)' }}>
        <div className="flex justify-between">
          <a href="/docs/utilities" className="btn-ghost">
            ← Utilities
          </a>
          <a href="/docs/utilities/colors" className="btn-primary">
            Next: Colors →
          </a>
        </div>
      </div>
    </div>
  )
}
