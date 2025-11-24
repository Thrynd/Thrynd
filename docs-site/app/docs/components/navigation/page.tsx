import { ComponentPreview } from '../../../components/ComponentPreview'

export default function NavigationPage() {
  return (
    <div>
      <h1>Navigation</h1>
      <p className="text-xl text-muted mt-4 mb-8">
        Navigation components including navbar, breadcrumbs, tabs, and pagination.
      </p>

      <h2>Breadcrumbs</h2>
      <p className="mb-4">
        Show the current page location within a navigational hierarchy.
      </p>

      <ComponentPreview
        title="Basic Breadcrumbs"
        code={`<nav class="breadcrumb">
  <a href="/">Home</a>
  <a href="/products">Products</a>
  <span>Current Page</span>
</nav>`}
      >
        <nav className="breadcrumb">
          <a href="/">Home</a>
          <a href="/products">Products</a>
          <span>Current Page</span>
        </nav>
      </ComponentPreview>

      <h2 className="mt-12">Tabs</h2>
      <p className="mb-4">
        Organize content into separate views with tabbed navigation.
      </p>

      <ComponentPreview
        title="Tabs"
        code={`<div class="tabs">
  <button class="tab active">Profile</button>
  <button class="tab">Settings</button>
  <button class="tab">Notifications</button>
</div>`}
      >
        <div className="tabs">
          <button className="tab active">Profile</button>
          <button className="tab">Settings</button>
          <button className="tab">Notifications</button>
        </div>
      </ComponentPreview>

      <h2 className="mt-12">Pagination</h2>
      <p className="mb-4">
        Navigate through pages of content.
      </p>

      <ComponentPreview
        title="Basic Pagination"
        code={`<nav class="pagination">
  <button class="page-link" disabled>Previous</button>
  <button class="page-link active">1</button>
  <button class="page-link">2</button>
  <button class="page-link">3</button>
  <button class="page-link">4</button>
  <button class="page-link">5</button>
  <button class="page-link">Next</button>
</nav>`}
      >
        <nav className="pagination">
          <button className="page-link" disabled>Previous</button>
          <button className="page-link active">1</button>
          <button className="page-link">2</button>
          <button className="page-link">3</button>
          <button className="page-link">4</button>
          <button className="page-link">5</button>
          <button className="page-link">Next</button>
        </nav>
      </ComponentPreview>

      <h3 className="text-lg font-semibold mt-8 mb-3">Compact Pagination</h3>
      <ComponentPreview
        title="Compact Pagination"
        code={`<nav class="pagination pagination-sm">
  <button class="page-link">‹</button>
  <button class="page-link active">1</button>
  <button class="page-link">2</button>
  <button class="page-link">3</button>
  <button class="page-link">›</button>
</nav>`}
      >
        <nav className="pagination pagination-sm">
          <button className="page-link">‹</button>
          <button className="page-link active">1</button>
          <button className="page-link">2</button>
          <button className="page-link">3</button>
          <button className="page-link">›</button>
        </nav>
      </ComponentPreview>

      <h2 className="mt-12">Navbar</h2>
      <p className="mb-4">
        Responsive navigation header for your application.
      </p>

      <ComponentPreview
        title="Navbar"
        code={`<nav class="navbar" style="border: 1px solid var(--color-border); border-radius: var(--radius-md);">
  <div class="navbar-brand">
    <a href="/" class="text-xl font-bold">Brand</a>
  </div>
  <ul class="navbar-nav">
    <li><a href="/" class="nav-link active">Home</a></li>
    <li><a href="/about" class="nav-link">About</a></li>
    <li><a href="/services" class="nav-link">Services</a></li>
    <li><a href="/contact" class="nav-link">Contact</a></li>
  </ul>
  <div class="navbar-actions">
    <button class="btn-ghost btn-sm">Sign In</button>
    <button class="btn-primary btn-sm">Sign Up</button>
  </div>
</nav>`}
      >
        <nav className="navbar" style={{ border: '1px solid var(--color-border)', borderRadius: 'var(--radius-md)' }}>
          <div className="navbar-brand">
            <a href="/" className="text-xl font-bold">Brand</a>
          </div>
          <ul className="navbar-nav">
            <li><a href="/" className="nav-link active">Home</a></li>
            <li><a href="/about" className="nav-link">About</a></li>
            <li><a href="/services" className="nav-link">Services</a></li>
            <li><a href="/contact" className="nav-link">Contact</a></li>
          </ul>
          <div className="navbar-actions">
            <button className="btn-ghost btn-sm">Sign In</button>
            <button className="btn-primary btn-sm">Sign Up</button>
          </div>
        </nav>
      </ComponentPreview>

      <h2 className="mt-12">Sidebar Navigation</h2>
      <p className="mb-4">
        Vertical navigation menu for dashboards and admin interfaces.
      </p>

      <ComponentPreview
        title="Sidebar"
        code={`<nav class="sidebar" style="max-width: 250px; border: 1px solid var(--color-border); border-radius: var(--radius-md);">
  <div class="sidebar-header">
    <h3 class="font-bold">Dashboard</h3>
  </div>
  <ul class="sidebar-nav">
    <li><a href="/" class="sidebar-link active">
      <span>Overview</span>
    </a></li>
    <li><a href="/analytics" class="sidebar-link">
      <span>Analytics</span>
    </a></li>
    <li><a href="/reports" class="sidebar-link">
      <span>Reports</span>
    </a></li>
    <li><a href="/settings" class="sidebar-link">
      <span>Settings</span>
    </a></li>
  </ul>
</nav>`}
      >
        <nav className="sidebar" style={{ maxWidth: '250px', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-md)' }}>
          <div className="sidebar-header">
            <h3 className="font-bold">Dashboard</h3>
          </div>
          <ul className="sidebar-nav">
            <li><a href="/" className="sidebar-link active">
              <span>Overview</span>
            </a></li>
            <li><a href="/analytics" className="sidebar-link">
              <span>Analytics</span>
            </a></li>
            <li><a href="/reports" className="sidebar-link">
              <span>Reports</span>
            </a></li>
            <li><a href="/settings" className="sidebar-link">
              <span>Settings</span>
            </a></li>
          </ul>
        </nav>
      </ComponentPreview>

      <h2 className="mt-12">Accessibility</h2>
      <div className="alert alert-primary mb-6">
        <strong>Best Practices:</strong>
        <ul className="mt-2 ml-4" style={{ listStyle: 'disc' }}>
          <li>Use <code>&lt;nav&gt;</code> element for navigation regions</li>
          <li>Indicate current page with <code>aria-current="page"</code></li>
          <li>Ensure keyboard navigation works properly</li>
          <li>Use semantic markup (lists for menu items)</li>
          <li>Provide skip navigation links for screen readers</li>
        </ul>
      </div>

      <div className="mt-12 pt-8" style={{ borderTop: '1px solid var(--color-border)' }}>
        <div className="flex justify-between">
          <a href="/docs/components/forms" className="btn-ghost">
            ← Forms
          </a>
          <a href="/docs/components/alerts" className="btn-primary">
            Next: Alerts →
          </a>
        </div>
      </div>
    </div>
  )
}
