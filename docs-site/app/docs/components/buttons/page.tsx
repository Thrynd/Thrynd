import { ComponentPreview } from '../../../components/ComponentPreview'

export default function ButtonsPage() {
  return (
    <div>
      <h1>Buttons</h1>
      <p className="text-xl text-muted mt-4 mb-8">
        Versatile button components with multiple variants, sizes, and modifiers.
      </p>

      <h2>Variants</h2>
      <p className="mb-4">
        Thrynd provides 4 button variants for different use cases:
      </p>

      <ComponentPreview
        title="Button Variants"
        code={`<button class="btn-primary">Primary</button>
<button class="btn-secondary">Secondary</button>
<button class="btn-danger">Danger</button>
<button class="btn-ghost">Ghost</button>`}
      >
        <div className="flex gap-3 flex-wrap">
          <button className="btn-primary">Primary</button>
          <button className="btn-secondary">Secondary</button>
          <button className="btn-danger">Danger</button>
          <button className="btn-ghost">Ghost</button>
        </div>
      </ComponentPreview>

      <div className="mt-6">
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>Variant</th>
              <th>Usage</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><code>btn-primary</code></td>
              <td>Main call-to-action, most important action on page</td>
            </tr>
            <tr>
              <td><code>btn-secondary</code></td>
              <td>Secondary actions, less prominent</td>
            </tr>
            <tr>
              <td><code>btn-danger</code></td>
              <td>Destructive actions like delete, remove</td>
            </tr>
            <tr>
              <td><code>btn-ghost</code></td>
              <td>Minimal style for tertiary actions</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 className="mt-12">Sizes</h2>
      <p className="mb-4">
        Buttons come in three sizes: small, medium (default), and large.
      </p>

      <ComponentPreview
        title="Button Sizes"
        code={`<button class="btn-primary btn-sm">Small</button>
<button class="btn-primary">Medium</button>
<button class="btn-primary btn-lg">Large</button>`}
      >
        <div className="flex gap-3 items-center flex-wrap">
          <button className="btn-primary btn-sm">Small</button>
          <button className="btn-primary">Medium</button>
          <button className="btn-primary btn-lg">Large</button>
        </div>
      </ComponentPreview>

      <h2 className="mt-12">Modifiers</h2>

      <h3 className="text-lg font-semibold mt-6 mb-3">Outline</h3>
      <p className="mb-4">
        Add <code>btn-outline</code> for a bordered button style:
      </p>

      <ComponentPreview
        title="Outline Buttons"
        code={`<button class="btn-primary btn-outline">Primary Outline</button>
<button class="btn-secondary btn-outline">Secondary Outline</button>
<button class="btn-danger btn-outline">Danger Outline</button>`}
      >
        <div className="flex gap-3 flex-wrap">
          <button className="btn-primary btn-outline">Primary Outline</button>
          <button className="btn-secondary btn-outline">Secondary Outline</button>
          <button className="btn-danger btn-outline">Danger Outline</button>
        </div>
      </ComponentPreview>

      <h3 className="text-lg font-semibold mt-8 mb-3">Full Width</h3>
      <p className="mb-4">
        Use <code>btn-block</code> or <code>w-full</code> utility for full-width buttons:
      </p>

      <ComponentPreview
        title="Full Width Button"
        code={`<button class="btn-primary btn-block">Full Width Button</button>`}
      >
        <button className="btn-primary btn-block">Full Width Button</button>
      </ComponentPreview>

      <h3 className="text-lg font-semibold mt-8 mb-3">Loading State</h3>
      <p className="mb-4">
        Add <code>btn-loading</code> to indicate a loading state:
      </p>

      <ComponentPreview
        title="Loading Button"
        code={`<button class="btn-primary btn-loading">Loading...</button>`}
      >
        <button className="btn-primary btn-loading">Loading...</button>
      </ComponentPreview>

      <h3 className="text-lg font-semibold mt-8 mb-3">Disabled</h3>
      <p className="mb-4">
        Use the <code>disabled</code> attribute to disable a button:
      </p>

      <ComponentPreview
        title="Disabled Buttons"
        code={`<button class="btn-primary" disabled>Disabled Primary</button>
<button class="btn-secondary" disabled>Disabled Secondary</button>`}
      >
        <div className="flex gap-3 flex-wrap">
          <button className="btn-primary" disabled>Disabled Primary</button>
          <button className="btn-secondary" disabled>Disabled Secondary</button>
        </div>
      </ComponentPreview>

      <h2 className="mt-12">Combining Modifiers</h2>
      <p className="mb-4">
        You can combine multiple modifiers for custom button styles:
      </p>

      <ComponentPreview
        title="Combined Modifiers"
        code={`<button class="btn-primary btn-lg btn-outline">Large Outline</button>
<button class="btn-danger btn-sm">Small Danger</button>
<button class="btn-secondary btn-lg btn-block">Large Block</button>`}
      >
        <div className="flex flex-col gap-3">
          <button className="btn-primary btn-lg btn-outline">Large Outline</button>
          <button className="btn-danger btn-sm">Small Danger</button>
          <button className="btn-secondary btn-lg btn-block">Large Block</button>
        </div>
      </ComponentPreview>

      <h2 className="mt-12">Accessibility</h2>
      <div className="alert alert-primary mb-6">
        <strong>Best Practices:</strong>
        <ul className="mt-2 ml-4" style={{ listStyle: 'disc' }}>
          <li>Use descriptive text that explains the action</li>
          <li>Add <code>aria-label</code> for icon-only buttons</li>
          <li>Use <code>disabled</code> attribute instead of <code>aria-disabled</code> when possible</li>
          <li>Ensure sufficient color contrast (all Thrynd buttons meet WCAG AA)</li>
        </ul>
      </div>

      <h2 className="mt-12">Common Patterns</h2>

      <h3 className="text-lg font-semibold mt-6 mb-3">Button Group</h3>
      <ComponentPreview
        title="Button Group"
        code={`<div class="flex gap-2">
  <button class="btn-secondary">Cancel</button>
  <button class="btn-primary">Save</button>
</div>`}
      >
        <div className="flex gap-2">
          <button className="btn-secondary">Cancel</button>
          <button className="btn-primary">Save</button>
        </div>
      </ComponentPreview>

      <h3 className="text-lg font-semibold mt-8 mb-3">Form Actions</h3>
      <ComponentPreview
        title="Form with Buttons"
        code={`<form class="card max-w-md">
  <div class="card-body">
    <div class="form-group">
      <label for="email">Email</label>
      <input type="email" id="email" class="form-input" required>
    </div>
    <div class="flex gap-2 justify-end">
      <button type="button" class="btn-ghost">Cancel</button>
      <button type="submit" class="btn-primary">Submit</button>
    </div>
  </div>
</form>`}
      >
        <form className="card max-w-md">
          <div className="card-body">
            <div className="form-group">
              <label htmlFor="email-demo">Email</label>
              <input type="email" id="email-demo" className="form-input" required />
            </div>
            <div className="flex gap-2 justify-end">
              <button type="button" className="btn-ghost">Cancel</button>
              <button type="submit" className="btn-primary">Submit</button>
            </div>
          </div>
        </form>
      </ComponentPreview>

      <div className="mt-12 pt-8" style={{ borderBottom: '1px solid var(--color-border)' }}>
        <div className="flex justify-between">
          <a href="/docs/components" className="btn-ghost">
            ← Back to Components
          </a>
          <a href="/docs/components/cards" className="btn-primary">
            Next: Cards →
          </a>
        </div>
      </div>
    </div>
  )
}
