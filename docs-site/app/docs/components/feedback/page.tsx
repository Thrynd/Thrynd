import { ComponentPreview } from '../../../components/ComponentPreview'

export default function FeedbackPage() {
  return (
    <div>
      <h1>Feedback Components</h1>
      <p className="text-xl text-muted mt-4 mb-8">
        Progress bars, spinners, tooltips, and toast notifications for user feedback.
      </p>

      <h2>Progress Bars</h2>
      <p className="mb-4">
        Visual indicators for task completion and loading states.
      </p>

      <ComponentPreview
        title="Basic Progress Bar"
        code={`<div class="progress">
  <div class="progress-bar" style="width: 45%;">45%</div>
</div>

<div class="progress mt-4">
  <div class="progress-bar" style="width: 75%;">75%</div>
</div>`}
      >
        <div>
          <div className="progress">
            <div className="progress-bar" style={{ width: '45%' }}>45%</div>
          </div>

          <div className="progress mt-4">
            <div className="progress-bar" style={{ width: '75%' }}>75%</div>
          </div>
        </div>
      </ComponentPreview>

      <h3 className="text-lg font-semibold mt-8 mb-3">Progress Colors</h3>
      <ComponentPreview
        title="Colored Progress Bars"
        code={`<div class="progress mb-3">
  <div class="progress-bar" style="width: 60%;">Primary</div>
</div>

<div class="progress mb-3">
  <div class="progress-bar progress-bar-success" style="width: 80%;">Success</div>
</div>

<div class="progress mb-3">
  <div class="progress-bar progress-bar-warning" style="width: 50%;">Warning</div>
</div>

<div class="progress">
  <div class="progress-bar progress-bar-danger" style="width: 30%;">Danger</div>
</div>`}
      >
        <div>
          <div className="progress mb-3">
            <div className="progress-bar" style={{ width: '60%' }}>Primary</div>
          </div>

          <div className="progress mb-3">
            <div className="progress-bar progress-bar-success" style={{ width: '80%' }}>Success</div>
          </div>

          <div className="progress mb-3">
            <div className="progress-bar progress-bar-warning" style={{ width: '50%' }}>Warning</div>
          </div>

          <div className="progress">
            <div className="progress-bar progress-bar-danger" style={{ width: '30%' }}>Danger</div>
          </div>
        </div>
      </ComponentPreview>

      <h3 className="text-lg font-semibold mt-8 mb-3">Progress Sizes</h3>
      <ComponentPreview
        title="Progress Bar Sizes"
        code={`<div class="progress progress-sm mb-3">
  <div class="progress-bar" style="width: 60%;"></div>
</div>

<div class="progress mb-3">
  <div class="progress-bar" style="width: 60%;"></div>
</div>

<div class="progress progress-lg">
  <div class="progress-bar" style="width: 60%;">60%</div>
</div>`}
      >
        <div>
          <div className="progress progress-sm mb-3">
            <div className="progress-bar" style={{ width: '60%' }}></div>
          </div>

          <div className="progress mb-3">
            <div className="progress-bar" style={{ width: '60%' }}></div>
          </div>

          <div className="progress progress-lg">
            <div className="progress-bar" style={{ width: '60%' }}>60%</div>
          </div>
        </div>
      </ComponentPreview>

      <h2 className="mt-12">Spinners</h2>
      <p className="mb-4">
        Animated loading indicators for asynchronous operations.
      </p>

      <ComponentPreview
        title="Spinner Sizes"
        code={`<div class="flex items-center gap-6">
  <div class="spinner spinner-sm"></div>
  <div class="spinner"></div>
  <div class="spinner spinner-lg"></div>
</div>`}
      >
        <div className="flex items-center gap-6">
          <div className="spinner spinner-sm"></div>
          <div className="spinner"></div>
          <div className="spinner spinner-lg"></div>
        </div>
      </ComponentPreview>

      <h3 className="text-lg font-semibold mt-8 mb-3">Spinner in Button</h3>
      <ComponentPreview
        title="Loading Button"
        code={`<button class="btn-primary" disabled>
  <span class="spinner spinner-sm" style="margin-right: 0.5rem;"></span>
  Loading...
</button>

<button class="btn-secondary" disabled>
  <span class="spinner spinner-sm" style="margin-right: 0.5rem;"></span>
  Processing
</button>`}
      >
        <div className="flex gap-3">
          <button className="btn-primary" disabled>
            <span className="spinner spinner-sm" style={{ marginRight: '0.5rem' }}></span>
            Loading...
          </button>

          <button className="btn-secondary" disabled>
            <span className="spinner spinner-sm" style={{ marginRight: '0.5rem' }}></span>
            Processing
          </button>
        </div>
      </ComponentPreview>

      <h2 className="mt-12">Tooltips</h2>
      <p className="mb-4">
        Contextual information that appears on hover.
      </p>

      <ComponentPreview
        title="Basic Tooltip"
        code={`<div class="tooltip">
  <button class="btn-primary">Hover me</button>
  <span class="tooltip-text">This is a tooltip!</span>
</div>

<div class="tooltip">
  <button class="btn-secondary">More info</button>
  <span class="tooltip-text">Additional information here</span>
</div>`}
      >
        <div className="flex gap-4">
          <div className="tooltip">
            <button className="btn-primary">Hover me</button>
            <span className="tooltip-text">This is a tooltip!</span>
          </div>

          <div className="tooltip">
            <button className="btn-secondary">More info</button>
            <span className="tooltip-text">Additional information here</span>
          </div>
        </div>
      </ComponentPreview>

      <h3 className="text-lg font-semibold mt-8 mb-3">Tooltip Positions</h3>
      <ComponentPreview
        title="Tooltip Positioning"
        code={`<div class="flex gap-8">
  <div class="tooltip">
    <button class="btn-ghost">Top (default)</button>
    <span class="tooltip-text">Tooltip on top</span>
  </div>

  <div class="tooltip tooltip-bottom">
    <button class="btn-ghost">Bottom</button>
    <span class="tooltip-text">Tooltip on bottom</span>
  </div>
</div>`}
      >
        <div className="flex gap-8">
          <div className="tooltip">
            <button className="btn-ghost">Top (default)</button>
            <span className="tooltip-text">Tooltip on top</span>
          </div>

          <div className="tooltip tooltip-bottom">
            <button className="btn-ghost">Bottom</button>
            <span className="tooltip-text">Tooltip on bottom</span>
          </div>
        </div>
      </ComponentPreview>

      <h2 className="mt-12">Toast Notifications</h2>
      <p className="mb-4">
        Temporary notification messages that appear in a fixed position.
      </p>

      <ComponentPreview
        title="Toast Examples"
        code={`<!-- Toast notifications (fixed position in actual use) -->
<div class="toast toast-success" style="position: relative; top: auto; right: auto; margin-bottom: 1rem;">
  <div class="flex justify-between items-start">
    <div>
      <strong>Success!</strong>
      <p class="text-sm mt-1">Your changes have been saved.</p>
    </div>
    <button class="btn-ghost btn-sm" style="padding: 0.25rem 0.5rem;">✕</button>
  </div>
</div>

<div class="toast toast-danger" style="position: relative; top: auto; right: auto; margin-bottom: 1rem;">
  <div class="flex justify-between items-start">
    <div>
      <strong>Error!</strong>
      <p class="text-sm mt-1">Failed to upload file.</p>
    </div>
    <button class="btn-ghost btn-sm" style="padding: 0.25rem 0.5rem;">✕</button>
  </div>
</div>

<div class="toast toast-warning" style="position: relative; top: auto; right: auto; margin-bottom: 1rem;">
  <div class="flex justify-between items-start">
    <div>
      <strong>Warning!</strong>
      <p class="text-sm mt-1">Your session will expire soon.</p>
    </div>
    <button class="btn-ghost btn-sm" style="padding: 0.25rem 0.5rem;">✕</button>
  </div>
</div>

<div class="toast toast-info" style="position: relative; top: auto; right: auto;">
  <div class="flex justify-between items-start">
    <div>
      <strong>Info</strong>
      <p class="text-sm mt-1">New update available.</p>
    </div>
    <button class="btn-ghost btn-sm" style="padding: 0.25rem 0.5rem;">✕</button>
  </div>
</div>`}
      >
        <div>
          <div className="toast toast-success" style={{ position: 'relative', top: 'auto', right: 'auto', marginBottom: '1rem' }}>
            <div className="flex justify-between items-start">
              <div>
                <strong>Success!</strong>
                <p className="text-sm mt-1">Your changes have been saved.</p>
              </div>
              <button className="btn-ghost btn-sm" style={{ padding: '0.25rem 0.5rem' }}>✕</button>
            </div>
          </div>

          <div className="toast toast-danger" style={{ position: 'relative', top: 'auto', right: 'auto', marginBottom: '1rem' }}>
            <div className="flex justify-between items-start">
              <div>
                <strong>Error!</strong>
                <p className="text-sm mt-1">Failed to upload file.</p>
              </div>
              <button className="btn-ghost btn-sm" style={{ padding: '0.25rem 0.5rem' }}>✕</button>
            </div>
          </div>

          <div className="toast toast-warning" style={{ position: 'relative', top: 'auto', right: 'auto', marginBottom: '1rem' }}>
            <div className="flex justify-between items-start">
              <div>
                <strong>Warning!</strong>
                <p className="text-sm mt-1">Your session will expire soon.</p>
              </div>
              <button className="btn-ghost btn-sm" style={{ padding: '0.25rem 0.5rem' }}>✕</button>
            </div>
          </div>

          <div className="toast toast-info" style={{ position: 'relative', top: 'auto', right: 'auto' }}>
            <div className="flex justify-between items-start">
              <div>
                <strong>Info</strong>
                <p className="text-sm mt-1">New update available.</p>
              </div>
              <button className="btn-ghost btn-sm" style={{ padding: '0.25rem 0.5rem' }}>✕</button>
            </div>
          </div>
        </div>
      </ComponentPreview>

      <h2 className="mt-12">Common Patterns</h2>

      <h3 className="text-lg font-semibold mt-6 mb-3">File Upload Progress</h3>
      <ComponentPreview
        title="Upload Progress Card"
        code={`<div class="card max-w-md">
  <div class="card-body">
    <div class="flex items-center gap-3 mb-3">
      <div class="spinner"></div>
      <div class="flex-1">
        <h4 class="font-semibold">Uploading file...</h4>
        <p class="text-sm text-muted">document.pdf</p>
      </div>
    </div>
    <div class="progress">
      <div class="progress-bar" style="width: 65%;">65%</div>
    </div>
  </div>
</div>`}
      >
        <div className="card max-w-md">
          <div className="card-body">
            <div className="flex items-center gap-3 mb-3">
              <div className="spinner"></div>
              <div className="flex-1">
                <h4 className="font-semibold">Uploading file...</h4>
                <p className="text-sm text-muted">document.pdf</p>
              </div>
            </div>
            <div className="progress">
              <div className="progress-bar" style={{ width: '65%' }}>65%</div>
            </div>
          </div>
        </div>
      </ComponentPreview>

      <h3 className="text-lg font-semibold mt-8 mb-3">Loading State</h3>
      <ComponentPreview
        title="Loading Placeholder"
        code={`<div class="card max-w-md">
  <div class="card-body text-center py-12">
    <div class="spinner spinner-lg mx-auto mb-4"></div>
    <h4 class="font-semibold mb-2">Loading...</h4>
    <p class="text-sm text-muted">Please wait while we fetch your data</p>
  </div>
</div>`}
      >
        <div className="card max-w-md">
          <div className="card-body text-center py-12">
            <div className="spinner spinner-lg mx-auto mb-4"></div>
            <h4 className="font-semibold mb-2">Loading...</h4>
            <p className="text-sm text-muted">Please wait while we fetch your data</p>
          </div>
        </div>
      </ComponentPreview>

      <h2 className="mt-12">Accessibility</h2>
      <div className="alert alert-primary mb-6">
        <strong>Best Practices:</strong>
        <ul className="mt-2 ml-4" style={{ listStyle: 'disc' }}>
          <li>Use <code>role="progressbar"</code> with <code>aria-valuenow</code>, <code>aria-valuemin</code>, and <code>aria-valuemax</code></li>
          <li>Add <code>aria-live="polite"</code> to toast notifications</li>
          <li>Use <code>aria-label</code> or <code>aria-describedby</code> for spinners</li>
          <li>Ensure tooltips are keyboard accessible</li>
          <li>Provide visual alternatives to spinners for screen readers</li>
          <li>Don't rely on color alone for progress indicators</li>
        </ul>
      </div>

      <div className="mt-12 pt-8" style={{ borderTop: '1px solid var(--color-border)' }}>
        <div className="flex justify-between">
          <a href="/docs/components/avatars" className="btn-ghost">
            ← Avatars
          </a>
          <a href="/docs/components" className="btn-primary">
            Back to Components →
          </a>
        </div>
      </div>
    </div>
  )
}
