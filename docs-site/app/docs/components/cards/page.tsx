import { ComponentPreview } from '../../../components/ComponentPreview'

export default function CardsPage() {
  return (
    <div>
      <h1>Cards</h1>
      <p className="text-xl text-muted mt-4 mb-8">
        Flexible content containers with optional headers, bodies, and footers.
      </p>

      <h2>Basic Card</h2>
      <p className="mb-4">
        The basic <code>card</code> class creates a bordered container perfect for grouping related content.
      </p>

      <ComponentPreview
        title="Basic Card"
        code={`<div class="card">
  <div class="card-body">
    <h3 class="card-title">Card Title</h3>
    <p>This is a basic card with just a body. Perfect for simple content grouping.</p>
  </div>
</div>`}
      >
        <div className="card">
          <div className="card-body">
            <h3 className="card-title">Card Title</h3>
            <p>This is a basic card with just a body. Perfect for simple content grouping.</p>
          </div>
        </div>
      </ComponentPreview>

      <h2 className="mt-12">Card Variants</h2>

      <h3 className="text-lg font-semibold mt-6 mb-3">Elevated Card</h3>
      <p className="mb-4">
        Use <code>card-elevated</code> for a card with shadow elevation effect.
      </p>

      <ComponentPreview
        title="Elevated Card"
        code={`<div class="card-elevated">
  <div class="card-body">
    <h3 class="card-title">Elevated Card</h3>
    <p>This card has a subtle shadow for a floating effect.</p>
  </div>
</div>`}
      >
        <div className="card-elevated">
          <div className="card-body">
            <h3 className="card-title">Elevated Card</h3>
            <p>This card has a subtle shadow for a floating effect.</p>
          </div>
        </div>
      </ComponentPreview>

      <h3 className="text-lg font-semibold mt-8 mb-3">Outlined Card</h3>
      <p className="mb-4">
        Use <code>card-outlined</code> for a card with a more prominent border.
      </p>

      <ComponentPreview
        title="Outlined Card"
        code={`<div class="card-outlined">
  <div class="card-body">
    <h3 class="card-title">Outlined Card</h3>
    <p>This card has a more prominent border style.</p>
  </div>
</div>`}
      >
        <div className="card-outlined">
          <div className="card-body">
            <h3 className="card-title">Outlined Card</h3>
            <p>This card has a more prominent border style.</p>
          </div>
        </div>
      </ComponentPreview>

      <h2 className="mt-12">Card Sections</h2>
      <p className="mb-4">
        Cards can include header, body, and footer sections for structured content.
      </p>

      <ComponentPreview
        title="Full Card Structure"
        code={`<div class="card-elevated max-w-md">
  <div class="card-header">
    <h3>Card Header</h3>
  </div>
  <div class="card-body">
    <p>This card demonstrates all three sections: header, body, and footer.</p>
    <p class="text-muted">The body contains the main content.</p>
  </div>
  <div class="card-footer">
    <button class="btn-primary">Action</button>
    <button class="btn-ghost">Cancel</button>
  </div>
</div>`}
      >
        <div className="card-elevated max-w-md">
          <div className="card-header">
            <h3>Card Header</h3>
          </div>
          <div className="card-body">
            <p>This card demonstrates all three sections: header, body, and footer.</p>
            <p className="text-muted">The body contains the main content.</p>
          </div>
          <div className="card-footer">
            <button className="btn-primary">Action</button>
            <button className="btn-ghost">Cancel</button>
          </div>
        </div>
      </ComponentPreview>

      <h2 className="mt-12">Common Patterns</h2>

      <h3 className="text-lg font-semibold mt-6 mb-3">Profile Card</h3>
      <ComponentPreview
        title="User Profile Card"
        code={`<div class="card max-w-sm">
  <div class="card-body text-center">
    <div class="avatar avatar-xl mx-auto mb-4">JD</div>
    <h3 class="card-title">John Doe</h3>
    <p class="text-muted mb-4">Product Designer</p>
    <div class="badge-group mb-4">
      <span class="badge badge-primary">Design</span>
      <span class="badge badge-secondary">UI/UX</span>
    </div>
    <button class="btn-primary btn-block">View Profile</button>
  </div>
</div>`}
      >
        <div className="card max-w-sm">
          <div className="card-body text-center">
            <div className="avatar avatar-xl mx-auto mb-4">JD</div>
            <h3 className="card-title">John Doe</h3>
            <p className="text-muted mb-4">Product Designer</p>
            <div className="badge-group mb-4">
              <span className="badge badge-primary">Design</span>
              <span className="badge badge-secondary">UI/UX</span>
            </div>
            <button className="btn-primary btn-block">View Profile</button>
          </div>
        </div>
      </ComponentPreview>

      <h3 className="text-lg font-semibold mt-8 mb-3">Product Card</h3>
      <ComponentPreview
        title="Product Card"
        code={`<div class="card max-w-sm">
  <div style="height: 200px; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); border-top-left-radius: var(--radius-md); border-top-right-radius: var(--radius-md);"></div>
  <div class="card-body">
    <div class="flex justify-between items-start mb-2">
      <h3 class="card-title">Premium Widget</h3>
      <span class="badge badge-success">New</span>
    </div>
    <p class="text-muted mb-4">A high-quality widget for your next project.</p>
    <div class="flex justify-between items-center">
      <span class="text-2xl font-bold">$49</span>
      <button class="btn-primary">Add to Cart</button>
    </div>
  </div>
</div>`}
      >
        <div className="card max-w-sm">
          <div style={{ height: '200px', background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', borderTopLeftRadius: 'var(--radius-md)', borderTopRightRadius: 'var(--radius-md)' }}></div>
          <div className="card-body">
            <div className="flex justify-between items-start mb-2">
              <h3 className="card-title">Premium Widget</h3>
              <span className="badge badge-success">New</span>
            </div>
            <p className="text-muted mb-4">A high-quality widget for your next project.</p>
            <div className="flex justify-between items-center">
              <span className="text-2xl font-bold">$49</span>
              <button className="btn-primary">Add to Cart</button>
            </div>
          </div>
        </div>
      </ComponentPreview>

      <h3 className="text-lg font-semibold mt-8 mb-3">Stats Card</h3>
      <ComponentPreview
        title="Statistics Card"
        code={`<div class="card">
  <div class="card-body">
    <div class="stat-label">Total Revenue</div>
    <div class="stat-value">$45,231</div>
    <div class="stat-change positive">↑ 12.5% from last month</div>
  </div>
</div>`}
      >
        <div className="card">
          <div className="card-body">
            <div className="stat-label">Total Revenue</div>
            <div className="stat-value">$45,231</div>
            <div className="stat-change positive">↑ 12.5% from last month</div>
          </div>
        </div>
      </ComponentPreview>

      <h2 className="mt-12">Card Grid</h2>
      <p className="mb-4">
        Combine cards with grid utilities for responsive layouts.
      </p>

      <ComponentPreview
        title="Card Grid"
        code={`<div class="grid grid-cols-1 md:grid-cols-3 gap-6">
  <div class="card">
    <div class="card-body">
      <h4 class="font-semibold mb-2">Feature One</h4>
      <p class="text-sm text-muted">Description of feature one.</p>
    </div>
  </div>
  <div class="card">
    <div class="card-body">
      <h4 class="font-semibold mb-2">Feature Two</h4>
      <p class="text-sm text-muted">Description of feature two.</p>
    </div>
  </div>
  <div class="card">
    <div class="card-body">
      <h4 class="font-semibold mb-2">Feature Three</h4>
      <p class="text-sm text-muted">Description of feature three.</p>
    </div>
  </div>
</div>`}
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="card">
            <div className="card-body">
              <h4 className="font-semibold mb-2">Feature One</h4>
              <p className="text-sm text-muted">Description of feature one.</p>
            </div>
          </div>
          <div className="card">
            <div className="card-body">
              <h4 className="font-semibold mb-2">Feature Two</h4>
              <p className="text-sm text-muted">Description of feature two.</p>
            </div>
          </div>
          <div className="card">
            <div className="card-body">
              <h4 className="font-semibold mb-2">Feature Three</h4>
              <p className="text-sm text-muted">Description of feature three.</p>
            </div>
          </div>
        </div>
      </ComponentPreview>

      <h2 className="mt-12">Accessibility</h2>
      <div className="alert alert-primary mb-6">
        <strong>Best Practices:</strong>
        <ul className="mt-2 ml-4" style={{ listStyle: 'disc' }}>
          <li>Use semantic heading tags (<code>h2</code>, <code>h3</code>) for card titles</li>
          <li>Ensure sufficient color contrast for text content</li>
          <li>If cards are interactive, make them keyboard accessible</li>
          <li>Use <code>aria-label</code> or <code>aria-labelledby</code> for context</li>
        </ul>
      </div>

      <div className="mt-12 pt-8" style={{ borderTop: '1px solid var(--color-border)' }}>
        <div className="flex justify-between">
          <a href="/docs/components/buttons" className="btn-ghost">
            ← Buttons
          </a>
          <a href="/docs/components/forms" className="btn-primary">
            Next: Forms →
          </a>
        </div>
      </div>
    </div>
  )
}
