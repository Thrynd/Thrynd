import { ComponentPreview } from '../../../components/ComponentPreview'

export default function BordersPage() {
  return (
    <div>
      <h1>Border Utilities</h1>
      <p className="text-xl text-muted mt-4 mb-8">
        Border width, style, radius, and divide utilities for component styling.
      </p>

      <h2>Border Width</h2>
      <p className="mb-4">
        Control border thickness on all sides or individual sides.
      </p>

      <ComponentPreview
        title="Border Widths"
        code={`<div class="flex flex-wrap gap-4">
  <div class="border p-4">border (1px)</div>
  <div class="border-2 p-4">border-2 (2px)</div>
  <div class="border-4 p-4">border-4 (4px)</div>
  <div class="border-8 p-4">border-8 (8px)</div>
</div>`}
      >
        <div className="flex flex-wrap gap-4">
          <div className="border p-4">border (1px)</div>
          <div className="border-2 p-4">border-2 (2px)</div>
          <div className="border-4 p-4">border-4 (4px)</div>
          <div className="border-8 p-4">border-8 (8px)</div>
        </div>
      </ComponentPreview>

      <h3 className="text-lg font-semibold mt-8 mb-3">Individual Sides</h3>
      <ComponentPreview
        title="Border Sides"
        code={`<div class="flex flex-wrap gap-4">
  <div class="border-t-4 p-4">border-top</div>
  <div class="border-r-4 p-4">border-right</div>
  <div class="border-b-4 p-4">border-bottom</div>
  <div class="border-l-4 p-4">border-left</div>
</div>`}
      >
        <div className="flex flex-wrap gap-4">
          <div className="border-t-4 p-4">border-top</div>
          <div className="border-r-4 p-4">border-right</div>
          <div className="border-b-4 p-4">border-bottom</div>
          <div className="border-l-4 p-4">border-left</div>
        </div>
      </ComponentPreview>

      <h2 className="mt-12">Border Radius</h2>
      <p className="mb-4">
        Round corners with border radius utilities.
      </p>

      <ComponentPreview
        title="Border Radius"
        code={`<div class="flex flex-wrap gap-4">
  <div class="bg-primary text-white p-8 rounded-none">rounded-none</div>
  <div class="bg-primary text-white p-8 rounded-sm">rounded-sm</div>
  <div class="bg-primary text-white p-8 rounded">rounded</div>
  <div class="bg-primary text-white p-8 rounded-md">rounded-md</div>
  <div class="bg-primary text-white p-8 rounded-lg">rounded-lg</div>
  <div class="bg-primary text-white p-8 rounded-xl">rounded-xl</div>
  <div class="bg-primary text-white p-8 rounded-2xl">rounded-2xl</div>
  <div class="bg-primary text-white p-8 rounded-full">rounded-full</div>
</div>`}
      >
        <div className="flex flex-wrap gap-4">
          <div className="bg-primary text-white p-8 rounded-none">rounded-none</div>
          <div className="bg-primary text-white p-8 rounded-sm">rounded-sm</div>
          <div className="bg-primary text-white p-8 rounded">rounded</div>
          <div className="bg-primary text-white p-8 rounded-md">rounded-md</div>
          <div className="bg-primary text-white p-8 rounded-lg">rounded-lg</div>
          <div className="bg-primary text-white p-8 rounded-xl">rounded-xl</div>
          <div className="bg-primary text-white p-8 rounded-2xl">rounded-2xl</div>
          <div className="bg-primary text-white p-8 rounded-full">rounded-full</div>
        </div>
      </ComponentPreview>

      <h3 className="text-lg font-semibold mt-8 mb-3">Rounded Corners</h3>
      <ComponentPreview
        title="Individual Corners"
        code={`<div class="flex flex-wrap gap-4">
  <div class="bg-primary text-white p-8 rounded-tl-xl">top-left</div>
  <div class="bg-primary text-white p-8 rounded-tr-xl">top-right</div>
  <div class="bg-primary text-white p-8 rounded-bl-xl">bottom-left</div>
  <div class="bg-primary text-white p-8 rounded-br-xl">bottom-right</div>
</div>

<div class="flex flex-wrap gap-4 mt-4">
  <div class="bg-secondary text-white p-8 rounded-t-xl">top</div>
  <div class="bg-secondary text-white p-8 rounded-b-xl">bottom</div>
  <div class="bg-secondary text-white p-8 rounded-l-xl">left</div>
  <div class="bg-secondary text-white p-8 rounded-r-xl">right</div>
</div>`}
      >
        <div>
          <div className="flex flex-wrap gap-4">
            <div className="bg-primary text-white p-8 rounded-tl-xl">top-left</div>
            <div className="bg-primary text-white p-8 rounded-tr-xl">top-right</div>
            <div className="bg-primary text-white p-8 rounded-bl-xl">bottom-left</div>
            <div className="bg-primary text-white p-8 rounded-br-xl">bottom-right</div>
          </div>

          <div className="flex flex-wrap gap-4 mt-4">
            <div className="bg-secondary text-white p-8 rounded-t-xl">top</div>
            <div className="bg-secondary text-white p-8 rounded-b-xl">bottom</div>
            <div className="bg-secondary text-white p-8 rounded-l-xl">left</div>
            <div className="bg-secondary text-white p-8 rounded-r-xl">right</div>
          </div>
        </div>
      </ComponentPreview>

      <h2 className="mt-12">Border Style</h2>
      <p className="mb-4">
        Change border style with solid, dashed, or dotted variants.
      </p>

      <ComponentPreview
        title="Border Styles"
        code={`<div class="flex flex-col gap-4">
  <div class="border-2 border-solid p-4">Solid Border (default)</div>
  <div class="border-2 border-dashed p-4">Dashed Border</div>
  <div class="border-2 border-dotted p-4">Dotted Border</div>
  <div class="border-none p-4 bg-gray-100">No Border</div>
</div>`}
      >
        <div className="flex flex-col gap-4">
          <div className="border-2 border-solid p-4">Solid Border (default)</div>
          <div className="border-2 border-dashed p-4">Dashed Border</div>
          <div className="border-2 border-dotted p-4">Dotted Border</div>
          <div className="border-none p-4 bg-gray-100">No Border</div>
        </div>
      </ComponentPreview>

      <h2 className="mt-12">Divide</h2>
      <p className="mb-4">
        Add borders between child elements with divide utilities.
      </p>

      <ComponentPreview
        title="Divide Utilities"
        code={`<div class="divide-y border rounded p-4">
  <div class="py-3">Item 1</div>
  <div class="py-3">Item 2</div>
  <div class="py-3">Item 3</div>
</div>

<div class="flex divide-x border rounded p-4 mt-4">
  <div class="px-4">Column 1</div>
  <div class="px-4">Column 2</div>
  <div class="px-4">Column 3</div>
</div>`}
      >
        <div>
          <div className="divide-y border rounded p-4">
            <div className="py-3">Item 1</div>
            <div className="py-3">Item 2</div>
            <div className="py-3">Item 3</div>
          </div>

          <div className="flex divide-x border rounded p-4 mt-4">
            <div className="px-4">Column 1</div>
            <div className="px-4">Column 2</div>
            <div className="px-4">Column 3</div>
          </div>
        </div>
      </ComponentPreview>

      <h2 className="mt-12">Ring (Outline)</h2>
      <p className="mb-4">
        Add focus rings and outlines with ring utilities.
      </p>

      <ComponentPreview
        title="Ring Utilities"
        code={`<div class="flex flex-wrap gap-4">
  <button class="btn-ghost ring-2 ring-primary">ring-2</button>
  <button class="btn-ghost ring-4 ring-success">ring-4</button>
  <button class="btn-ghost ring ring-offset-2 ring-danger">ring-offset</button>
</div>`}
      >
        <div className="flex flex-wrap gap-4">
          <button className="btn-ghost ring-2 ring-primary">ring-2</button>
          <button className="btn-ghost ring-4 ring-success">ring-4</button>
          <button className="btn-ghost ring ring-offset-2 ring-danger">ring-offset</button>
        </div>
      </ComponentPreview>

      <h2 className="mt-12">Common Patterns</h2>

      <h3 className="text-lg font-semibold mt-6 mb-3">Card with Border Accent</h3>
      <ComponentPreview
        title="Accent Border Card"
        code={`<div class="card border-l-4 border-primary max-w-md">
  <div class="card-body">
    <h3 class="font-bold mb-2">Featured Item</h3>
    <p class="text-sm text-muted">A card with a colored left border for emphasis.</p>
  </div>
</div>`}
      >
        <div className="card border-l-4 border-primary max-w-md">
          <div className="card-body">
            <h3 className="font-bold mb-2">Featured Item</h3>
            <p className="text-sm text-muted">A card with a colored left border for emphasis.</p>
          </div>
        </div>
      </ComponentPreview>

      <h3 className="text-lg font-semibold mt-8 mb-3">Rounded Button Group</h3>
      <ComponentPreview
        title="Connected Buttons"
        code={`<div class="flex">
  <button class="btn-primary rounded-l-lg rounded-r-none">First</button>
  <button class="btn-primary rounded-none">Middle</button>
  <button class="btn-primary rounded-r-lg rounded-l-none">Last</button>
</div>`}
      >
        <div className="flex">
          <button className="btn-primary rounded-l-lg rounded-r-none">First</button>
          <button className="btn-primary rounded-none">Middle</button>
          <button className="btn-primary rounded-r-lg rounded-l-none">Last</button>
        </div>
      </ComponentPreview>

      <h3 className="text-lg font-semibold mt-8 mb-3">List with Dividers</h3>
      <ComponentPreview
        title="Divided List"
        code={`<div class="card max-w-md">
  <div class="divide-y">
    <div class="p-4 hover:bg-gray-50">
      <h4 class="font-semibold">Item One</h4>
      <p class="text-sm text-muted">Description text</p>
    </div>
    <div class="p-4 hover:bg-gray-50">
      <h4 class="font-semibold">Item Two</h4>
      <p class="text-sm text-muted">Description text</p>
    </div>
    <div class="p-4 hover:bg-gray-50">
      <h4 class="font-semibold">Item Three</h4>
      <p class="text-sm text-muted">Description text</p>
    </div>
  </div>
</div>`}
      >
        <div className="card max-w-md">
          <div className="divide-y">
            <div className="p-4 hover:bg-gray-50">
              <h4 className="font-semibold">Item One</h4>
              <p className="text-sm text-muted">Description text</p>
            </div>
            <div className="p-4 hover:bg-gray-50">
              <h4 className="font-semibold">Item Two</h4>
              <p className="text-sm text-muted">Description text</p>
            </div>
            <div className="p-4 hover:bg-gray-50">
              <h4 className="font-semibold">Item Three</h4>
              <p className="text-sm text-muted">Description text</p>
            </div>
          </div>
        </div>
      </ComponentPreview>

      <div className="mt-12 pt-8" style={{ borderTop: '1px solid var(--color-border)' }}>
        <div className="flex justify-between">
          <a href="/docs/utilities/layout" className="btn-ghost">
            ← Layout
          </a>
          <a href="/docs/utilities/effects" className="btn-primary">
            Next: Effects →
          </a>
        </div>
      </div>
    </div>
  )
}
