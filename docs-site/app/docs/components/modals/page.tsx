import { ComponentPreview } from '../../../components/ComponentPreview'
import { CodeBlock } from '../../../components/CodeBlock'

export default function ModalsPage() {
  return (
    <div>
      <h1>Modals</h1>
      <p className="text-xl text-muted mt-4 mb-8">
        Dialog windows that overlay the main content with backdrop and animations.
      </p>

      <h2>Basic Modal Structure</h2>
      <p className="mb-4">
        Modals consist of a backdrop, dialog container, header, body, and optional footer.
      </p>

      <CodeBlock language="html">{`<!-- Modal Backdrop -->
<div class="modal-backdrop">
  <!-- Modal Dialog -->
  <div class="modal">
    <div class="modal-header">
      <h3>Modal Title</h3>
      <button class="modal-close">×</button>
    </div>
    <div class="modal-body">
      <p>Modal content goes here...</p>
    </div>
    <div class="modal-footer">
      <button class="btn-ghost">Cancel</button>
      <button class="btn-primary">Confirm</button>
    </div>
  </div>
</div>`}</CodeBlock>

      <div className="alert alert-primary mt-6 mb-8">
        <strong>Note:</strong> Modals require JavaScript to show/hide. Add <code>display: flex</code> to <code>modal-backdrop</code> to show the modal, or <code>display: none</code> to hide it.
      </div>

      <h2>Modal Sizes</h2>
      <p className="mb-4">
        Control modal width with size modifiers.
      </p>

      <CodeBlock language="html">{`<!-- Small Modal -->
<div class="modal modal-sm">...</div>

<!-- Default Modal -->
<div class="modal">...</div>

<!-- Large Modal -->
<div class="modal modal-lg">...</div>

<!-- Extra Large Modal -->
<div class="modal modal-xl">...</div>

<!-- Fullscreen Modal -->
<div class="modal modal-fullscreen">...</div>`}</CodeBlock>

      <h2 className="mt-12">Confirmation Dialog</h2>
      <p className="mb-4">
        A common pattern for destructive actions.
      </p>

      <CodeBlock language="html">{`<div class="modal-backdrop" style="display: none;">
  <div class="modal modal-sm">
    <div class="modal-header">
      <h3>Delete Account</h3>
      <button class="modal-close">×</button>
    </div>
    <div class="modal-body">
      <p>Are you sure you want to delete your account? This action cannot be undone.</p>
    </div>
    <div class="modal-footer">
      <button class="btn-ghost">Cancel</button>
      <button class="btn-danger">Delete Account</button>
    </div>
  </div>
</div>`}</CodeBlock>

      <h2 className="mt-12">Form Modal</h2>
      <p className="mb-4">
        Use modals to collect user input without navigating away.
      </p>

      <CodeBlock language="html">{`<div class="modal-backdrop" style="display: none;">
  <div class="modal">
    <div class="modal-header">
      <h3>Add New User</h3>
      <button class="modal-close">×</button>
    </div>
    <div class="modal-body">
      <form>
        <div class="form-group">
          <label for="username">Username</label>
          <input type="text" id="username" class="form-input" required>
        </div>
        <div class="form-group">
          <label for="email">Email</label>
          <input type="email" id="email" class="form-input" required>
        </div>
        <div class="form-group">
          <label for="role">Role</label>
          <select id="role" class="form-select">
            <option>Admin</option>
            <option>User</option>
            <option>Guest</option>
          </select>
        </div>
      </form>
    </div>
    <div class="modal-footer">
      <button class="btn-ghost">Cancel</button>
      <button class="btn-primary">Add User</button>
    </div>
  </div>
</div>`}</CodeBlock>

      <h2 className="mt-12">JavaScript Example</h2>
      <p className="mb-4">
        Simple JavaScript to open and close modals.
      </p>

      <CodeBlock language="javascript">{`// Open modal
function openModal(modalId) {
  const modal = document.getElementById(modalId);
  modal.style.display = 'flex';
  document.body.style.overflow = 'hidden';
}

// Close modal
function closeModal(modalId) {
  const modal = document.getElementById(modalId);
  modal.style.display = 'none';
  document.body.style.overflow = '';
}

// Close on backdrop click
document.querySelectorAll('.modal-backdrop').forEach(backdrop => {
  backdrop.addEventListener('click', (e) => {
    if (e.target === backdrop) {
      closeModal(backdrop.id);
    }
  });
});

// Close on ESC key
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    document.querySelectorAll('.modal-backdrop').forEach(backdrop => {
      if (backdrop.style.display === 'flex') {
        closeModal(backdrop.id);
      }
    });
  }
});`}</CodeBlock>

      <h2 className="mt-12">Best Practices</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="card">
          <div className="card-body">
            <h4 className="font-semibold text-success mb-3">✓ Do</h4>
            <ul className="text-sm space-y-2">
              <li>Keep content focused and concise</li>
              <li>Provide clear action buttons</li>
              <li>Allow ESC key to close</li>
              <li>Disable background scrolling</li>
              <li>Use for important interruptions only</li>
            </ul>
          </div>
        </div>

        <div className="card">
          <div className="card-body">
            <h4 className="font-semibold text-danger mb-3">✗ Don't</h4>
            <ul className="text-sm space-y-2">
              <li>Show multiple modals at once</li>
              <li>Use for non-essential information</li>
              <li>Make modals too large or complex</li>
              <li>Prevent closing the modal</li>
              <li>Auto-open on page load (usually)</li>
            </ul>
          </div>
        </div>
      </div>

      <h2 className="mt-12">Accessibility</h2>
      <div className="alert alert-primary mb-6">
        <strong>Best Practices:</strong>
        <ul className="mt-2 ml-4" style={{ listStyle: 'disc' }}>
          <li>Use <code>role="dialog"</code> and <code>aria-modal="true"</code> on modal</li>
          <li>Add <code>aria-labelledby</code> pointing to modal title</li>
          <li>Trap focus within modal when open</li>
          <li>Return focus to trigger element on close</li>
          <li>Allow ESC key to close modal</li>
          <li>Ensure keyboard navigation works properly</li>
          <li>Use semantic button elements for close actions</li>
        </ul>
      </div>

      <div className="mt-12 pt-8" style={{ borderTop: '1px solid var(--color-border)' }}>
        <div className="flex justify-between">
          <a href="/docs/components/badges" className="btn-ghost">
            ← Badges
          </a>
          <a href="/docs/components/tables" className="btn-primary">
            Next: Tables →
          </a>
        </div>
      </div>
    </div>
  )
}
