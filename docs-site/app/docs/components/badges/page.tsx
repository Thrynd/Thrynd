import { ComponentPreview } from '../../../components/ComponentPreview'

export default function BadgesPage() {
  return (
    <div>
      <h1>Badges</h1>
      <p className="text-xl text-muted mt-4 mb-8">
        Small status indicators and labels with 5 color variants.
      </p>

      <h2>Badge Variants</h2>
      <p className="mb-4">
        Badges come in five semantic variants matching the color system.
      </p>

      <ComponentPreview
        title="Badge Variants"
        code={`<span class="badge badge-primary">Primary</span>
<span class="badge badge-secondary">Secondary</span>
<span class="badge badge-success">Success</span>
<span class="badge badge-danger">Danger</span>
<span class="badge badge-warning">Warning</span>`}
      >
        <div className="badge-group">
          <span className="badge badge-primary">Primary</span>
          <span className="badge badge-secondary">Secondary</span>
          <span className="badge badge-success">Success</span>
          <span className="badge badge-danger">Danger</span>
          <span className="badge badge-warning">Warning</span>
        </div>
      </ComponentPreview>

      <h2 className="mt-12">Pill Badges</h2>
      <p className="mb-4">
        Add <code>badge-pill</code> for fully rounded badges.
      </p>

      <ComponentPreview
        title="Pill Badges"
        code={`<span class="badge badge-primary badge-pill">New</span>
<span class="badge badge-success badge-pill">Active</span>
<span class="badge badge-danger badge-pill">12</span>
<span class="badge badge-warning badge-pill">Beta</span>`}
      >
        <div className="badge-group">
          <span className="badge badge-primary badge-pill">New</span>
          <span className="badge badge-success badge-pill">Active</span>
          <span className="badge badge-danger badge-pill">12</span>
          <span className="badge badge-warning badge-pill">Beta</span>
        </div>
      </ComponentPreview>

      <h2 className="mt-12">Badge Groups</h2>
      <p className="mb-4">
        Use <code>badge-group</code> to properly space multiple badges.
      </p>

      <ComponentPreview
        title="Badge Group"
        code={`<div class="badge-group">
  <span class="badge badge-primary">React</span>
  <span class="badge badge-primary">TypeScript</span>
  <span class="badge badge-primary">Tailwind</span>
  <span class="badge badge-secondary">+3</span>
</div>`}
      >
        <div className="badge-group">
          <span className="badge badge-primary">React</span>
          <span className="badge badge-primary">TypeScript</span>
          <span className="badge badge-primary">Tailwind</span>
          <span className="badge badge-secondary">+3</span>
        </div>
      </ComponentPreview>

      <h2 className="mt-12">Common Use Cases</h2>

      <h3 className="text-lg font-semibold mt-6 mb-3">Status Indicators</h3>
      <ComponentPreview
        title="Status Badges"
        code={`<div class="flex flex-col gap-3">
  <div class="flex items-center justify-between p-3 card">
    <span>Order #1234</span>
    <span class="badge badge-success">Delivered</span>
  </div>
  <div class="flex items-center justify-between p-3 card">
    <span>Order #1235</span>
    <span class="badge badge-warning">Pending</span>
  </div>
  <div class="flex items-center justify-between p-3 card">
    <span>Order #1236</span>
    <span class="badge badge-danger">Cancelled</span>
  </div>
</div>`}
      >
        <div className="flex flex-col gap-3">
          <div className="flex items-center justify-between p-3 card">
            <span>Order #1234</span>
            <span className="badge badge-success">Delivered</span>
          </div>
          <div className="flex items-center justify-between p-3 card">
            <span>Order #1235</span>
            <span className="badge badge-warning">Pending</span>
          </div>
          <div className="flex items-center justify-between p-3 card">
            <span>Order #1236</span>
            <span className="badge badge-danger">Cancelled</span>
          </div>
        </div>
      </ComponentPreview>

      <h3 className="text-lg font-semibold mt-8 mb-3">Notification Counts</h3>
      <ComponentPreview
        title="Notification Badges"
        code={`<button class="btn-ghost" style="position: relative;">
  Notifications
  <span class="badge badge-danger badge-pill" style="position: absolute; top: -8px; right: -8px;">5</span>
</button>

<button class="btn-ghost" style="position: relative;">
  Messages
  <span class="badge badge-primary badge-pill" style="position: absolute; top: -8px; right: -8px;">12</span>
</button>`}
      >
        <div className="flex gap-4">
          <button className="btn-ghost" style={{ position: 'relative' }}>
            Notifications
            <span className="badge badge-danger badge-pill" style={{ position: 'absolute', top: '-8px', right: '-8px' }}>5</span>
          </button>

          <button className="btn-ghost" style={{ position: 'relative' }}>
            Messages
            <span className="badge badge-primary badge-pill" style={{ position: 'absolute', top: '-8px', right: '-8px' }}>12</span>
          </button>
        </div>
      </ComponentPreview>

      <h3 className="text-lg font-semibold mt-8 mb-3">Tags and Labels</h3>
      <ComponentPreview
        title="Tags"
        code={`<article class="card max-w-md">
  <div class="card-body">
    <h4 class="font-semibold mb-2">Building Modern Web Apps</h4>
    <div class="badge-group mb-3">
      <span class="badge badge-primary">JavaScript</span>
      <span class="badge badge-primary">React</span>
      <span class="badge badge-secondary">Tutorial</span>
    </div>
    <p class="text-sm text-muted">Learn how to build scalable web applications...</p>
  </div>
</article>`}
      >
        <article className="card max-w-md">
          <div className="card-body">
            <h4 className="font-semibold mb-2">Building Modern Web Apps</h4>
            <div className="badge-group mb-3">
              <span className="badge badge-primary">JavaScript</span>
              <span className="badge badge-primary">React</span>
              <span className="badge badge-secondary">Tutorial</span>
            </div>
            <p className="text-sm text-muted">Learn how to build scalable web applications...</p>
          </div>
        </article>
      </ComponentPreview>

      <h2 className="mt-12">Best Practices</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="card">
          <div className="card-body">
            <h4 className="font-semibold text-success mb-3">✓ Do</h4>
            <ul className="text-sm space-y-2">
              <li>Use for status indicators</li>
              <li>Keep text short (1-2 words)</li>
              <li>Use consistent colors across your app</li>
              <li>Use pill variant for counts</li>
            </ul>
          </div>
        </div>

        <div className="card">
          <div className="card-body">
            <h4 className="font-semibold text-danger mb-3">✗ Don't</h4>
            <ul className="text-sm space-y-2">
              <li>Use for long text content</li>
              <li>Overuse multiple badges together</li>
              <li>Use as clickable buttons (use tags)</li>
              <li>Mix too many different colors</li>
            </ul>
          </div>
        </div>
      </div>

      <h2 className="mt-12">Accessibility</h2>
      <div className="alert alert-primary mb-6">
        <strong>Best Practices:</strong>
        <ul className="mt-2 ml-4" style={{ listStyle: 'disc' }}>
          <li>Use semantic HTML when possible</li>
          <li>Don't rely solely on color to convey meaning</li>
          <li>Add <code>aria-label</code> for icon-only badges</li>
          <li>Ensure sufficient color contrast (all variants meet WCAG AA)</li>
          <li>Use <code>role="status"</code> for dynamic count updates</li>
        </ul>
      </div>

      <div className="mt-12 pt-8" style={{ borderTop: '1px solid var(--color-border)' }}>
        <div className="flex justify-between">
          <a href="/docs/components/alerts" className="btn-ghost">
            ← Alerts
          </a>
          <a href="/docs/components/modals" className="btn-primary">
            Next: Modals →
          </a>
        </div>
      </div>
    </div>
  )
}
