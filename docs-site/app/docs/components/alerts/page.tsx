import { ComponentPreview } from '../../../components/ComponentPreview'

export default function AlertsPage() {
  return (
    <div>
      <h1>Alerts</h1>
      <p className="text-xl text-muted mt-4 mb-8">
        Contextual feedback messages for typical user actions with 5 color variants.
      </p>

      <h2>Alert Variants</h2>
      <p className="mb-4">
        Alerts come in five semantic variants: primary (info), success, warning, danger, and secondary.
      </p>

      <ComponentPreview
        title="Alert Variants"
        code={`<div class="alert alert-primary">
  <strong>Info:</strong> This is a primary/info alert message.
</div>

<div class="alert alert-success">
  <strong>Success!</strong> Your changes have been saved.
</div>

<div class="alert alert-warning">
  <strong>Warning:</strong> Please review your information.
</div>

<div class="alert alert-danger">
  <strong>Error:</strong> Something went wrong. Please try again.
</div>

<div class="alert alert-secondary">
  <strong>Note:</strong> This is a secondary alert message.
</div>`}
      >
        <div className="space-y-3">
          <div className="alert alert-primary">
            <strong>Info:</strong> This is a primary/info alert message.
          </div>

          <div className="alert alert-success">
            <strong>Success!</strong> Your changes have been saved.
          </div>

          <div className="alert alert-warning">
            <strong>Warning:</strong> Please review your information.
          </div>

          <div className="alert alert-danger">
            <strong>Error:</strong> Something went wrong. Please try again.
          </div>

          <div className="alert alert-secondary">
            <strong>Note:</strong> This is a secondary alert message.
          </div>
        </div>
      </ComponentPreview>

      <h2 className="mt-12">Alert with Icon</h2>
      <p className="mb-4">
        Add icons to alerts for better visual communication.
      </p>

      <ComponentPreview
        title="Alerts with Icons"
        code={`<div class="alert alert-success">
  <span style="font-size: 1.25rem; margin-right: 0.5rem;">✓</span>
  <span><strong>Success!</strong> Your profile has been updated.</span>
</div>

<div class="alert alert-danger">
  <span style="font-size: 1.25rem; margin-right: 0.5rem;">✕</span>
  <span><strong>Error!</strong> Failed to upload file.</span>
</div>`}
      >
        <div className="space-y-3">
          <div className="alert alert-success">
            <span style={{ fontSize: '1.25rem', marginRight: '0.5rem' }}>✓</span>
            <span><strong>Success!</strong> Your profile has been updated.</span>
          </div>

          <div className="alert alert-danger">
            <span style={{ fontSize: '1.25rem', marginRight: '0.5rem' }}>✕</span>
            <span><strong>Error!</strong> Failed to upload file.</span>
          </div>
        </div>
      </ComponentPreview>

      <h2 className="mt-12">Alert with Actions</h2>
      <p className="mb-4">
        Include action buttons or links within alerts.
      </p>

      <ComponentPreview
        title="Alert with Button"
        code={`<div class="alert alert-primary">
  <div class="flex justify-between items-center">
    <div>
      <strong>New update available!</strong>
      <p class="text-sm mt-1">Version 2.0 is ready to install.</p>
    </div>
    <button class="btn-primary btn-sm">Update Now</button>
  </div>
</div>`}
      >
        <div className="alert alert-primary">
          <div className="flex justify-between items-center">
            <div>
              <strong>New update available!</strong>
              <p className="text-sm mt-1">Version 2.0 is ready to install.</p>
            </div>
            <button className="btn-primary btn-sm">Update Now</button>
          </div>
        </div>
      </ComponentPreview>

      <h2 className="mt-12">Dismissible Alerts</h2>
      <p className="mb-4">
        Add a close button to allow users to dismiss alerts.
      </p>

      <ComponentPreview
        title="Dismissible Alert"
        code={`<div class="alert alert-warning">
  <div class="flex justify-between items-start">
    <div>
      <strong>Warning:</strong> Your session will expire in 5 minutes.
    </div>
    <button class="btn-ghost btn-sm" style="padding: 0.25rem 0.5rem;">✕</button>
  </div>
</div>`}
      >
        <div className="alert alert-warning">
          <div className="flex justify-between items-start">
            <div>
              <strong>Warning:</strong> Your session will expire in 5 minutes.
            </div>
            <button className="btn-ghost btn-sm" style={{ padding: '0.25rem 0.5rem' }}>✕</button>
          </div>
        </div>
      </ComponentPreview>

      <h2 className="mt-12">Usage Guidelines</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="card">
          <div className="card-body">
            <h4 className="font-semibold mb-3">When to Use</h4>
            <ul className="text-sm space-y-2">
              <li>✓ Show success confirmations</li>
              <li>✓ Display error messages</li>
              <li>✓ Warn users about important information</li>
              <li>✓ Provide contextual help</li>
            </ul>
          </div>
        </div>

        <div className="card">
          <div className="card-body">
            <h4 className="font-semibold mb-3">When NOT to Use</h4>
            <ul className="text-sm space-y-2">
              <li>✕ For form validation (use inline errors)</li>
              <li>✕ For critical system failures (use modals)</li>
              <li>✕ For permanent information (use cards)</li>
              <li>✕ For multiple stacked messages (use toast)</li>
            </ul>
          </div>
        </div>
      </div>

      <h2 className="mt-12">Accessibility</h2>
      <div className="alert alert-primary mb-6">
        <strong>Best Practices:</strong>
        <ul className="mt-2 ml-4" style={{ listStyle: 'disc' }}>
          <li>Use <code>role="alert"</code> for important messages</li>
          <li>Use <code>aria-live="polite"</code> for non-critical alerts</li>
          <li>Ensure sufficient color contrast (all variants meet WCAG AA)</li>
          <li>Don't rely solely on color to convey meaning</li>
          <li>Make close buttons keyboard accessible</li>
        </ul>
      </div>

      <div className="mt-12 pt-8" style={{ borderTop: '1px solid var(--color-border)' }}>
        <div className="flex justify-between">
          <a href="/docs/components/navigation" className="btn-ghost">
            ← Navigation
          </a>
          <a href="/docs/components/badges" className="btn-primary">
            Next: Badges →
          </a>
        </div>
      </div>
    </div>
  )
}
