import { ComponentPreview } from '../../../components/ComponentPreview'

export default function DropdownsPage() {
  return (
    <div>
      <h1>Dropdowns & Popovers</h1>
      <p className="text-xl text-muted mt-4 mb-8">
        Contextual overlays for menus, options, and additional content.
      </p>

      <h2>Dropdowns</h2>
      <p className="mb-4">
        Toggleable contextual overlays for displaying lists of links and actions.
      </p>

      <ComponentPreview
        title="Basic Dropdown"
        code={`<div class="dropdown">
  <button class="btn-primary">
    Menu
  </button>
  <div class="dropdown-menu">
    <a href="#" class="dropdown-item">Action</a>
    <a href="#" class="dropdown-item">Another action</a>
    <a href="#" class="dropdown-item">Something else</a>
  </div>
</div>

<script>
  // Toggle dropdown on button click
  document.querySelectorAll('.dropdown > button').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation()
      const dropdown = btn.parentElement
      dropdown.classList.toggle('open')
    })
  })

  // Close dropdown when clicking outside
  document.addEventListener('click', () => {
    document.querySelectorAll('.dropdown.open').forEach(d => {
      d.classList.remove('open')
    })
  })
</script>`}
      >
        <div className="flex gap-4">
          <div className="dropdown">
            <button className="btn-primary">
              Menu
            </button>
            <div className="dropdown-menu">
              <a href="#" className="dropdown-item">Action</a>
              <a href="#" className="dropdown-item">Another action</a>
              <a href="#" className="dropdown-item">Something else</a>
            </div>
          </div>
        </div>
      </ComponentPreview>

      <h3 className="text-lg font-semibold mt-8 mb-3">Dropdown Alignment</h3>
      <ComponentPreview
        title="Left & Right Aligned"
        code={`<div class="dropdown">
  <button class="btn-secondary">
    Left Aligned (default)
  </button>
  <div class="dropdown-menu">
    <a href="#" class="dropdown-item">Profile</a>
    <a href="#" class="dropdown-item">Settings</a>
    <a href="#" class="dropdown-item">Logout</a>
  </div>
</div>

<div class="dropdown">
  <button class="btn-secondary">
    Right Aligned
  </button>
  <div class="dropdown-menu dropdown-menu-right">
    <a href="#" class="dropdown-item">Profile</a>
    <a href="#" class="dropdown-item">Settings</a>
    <a href="#" class="dropdown-item">Logout</a>
  </div>
</div>`}
      >
        <div className="flex gap-4 justify-between">
          <div className="dropdown">
            <button className="btn-secondary">
              Left Aligned (default)
            </button>
            <div className="dropdown-menu">
              <a href="#" className="dropdown-item">Profile</a>
              <a href="#" className="dropdown-item">Settings</a>
              <a href="#" className="dropdown-item">Logout</a>
            </div>
          </div>

          <div className="dropdown">
            <button className="btn-secondary">
              Right Aligned
            </button>
            <div className="dropdown-menu dropdown-menu-right">
              <a href="#" className="dropdown-item">Profile</a>
              <a href="#" className="dropdown-item">Settings</a>
              <a href="#" className="dropdown-item">Logout</a>
            </div>
          </div>
        </div>
      </ComponentPreview>

      <h3 className="text-lg font-semibold mt-8 mb-3">Dropdown with Dividers</h3>
      <ComponentPreview
        title="Grouped Items"
        code={`<div class="dropdown">
  <button class="btn-ghost">
    Options
  </button>
  <div class="dropdown-menu">
    <a href="#" class="dropdown-item">Edit</a>
    <a href="#" class="dropdown-item">Duplicate</a>
    <div class="dropdown-divider"></div>
    <a href="#" class="dropdown-item">Archive</a>
    <div class="dropdown-divider"></div>
    <a href="#" class="dropdown-item text-danger">Delete</a>
  </div>
</div>`}
      >
        <div className="dropdown">
          <button className="btn-ghost">
            Options
          </button>
          <div className="dropdown-menu">
            <a href="#" className="dropdown-item">Edit</a>
            <a href="#" className="dropdown-item">Duplicate</a>
            <div className="dropdown-divider"></div>
            <a href="#" className="dropdown-item">Archive</a>
            <div className="dropdown-divider"></div>
            <a href="#" className="dropdown-item text-danger">Delete</a>
          </div>
        </div>
      </ComponentPreview>

      <h3 className="text-lg font-semibold mt-8 mb-3">Dropdown Headers</h3>
      <ComponentPreview
        title="With Section Headers"
        code={`<div class="dropdown">
  <button class="btn-primary">
    Account
  </button>
  <div class="dropdown-menu">
    <div class="dropdown-header">My Account</div>
    <a href="#" class="dropdown-item">Profile</a>
    <a href="#" class="dropdown-item">Billing</a>
    <div class="dropdown-divider"></div>
    <div class="dropdown-header">Preferences</div>
    <a href="#" class="dropdown-item">Settings</a>
    <a href="#" class="dropdown-item">Help</a>
    <div class="dropdown-divider"></div>
    <a href="#" class="dropdown-item">Sign Out</a>
  </div>
</div>`}
      >
        <div className="dropdown">
          <button className="btn-primary">
            Account
          </button>
          <div className="dropdown-menu">
            <div className="dropdown-header">My Account</div>
            <a href="#" className="dropdown-item">Profile</a>
            <a href="#" className="dropdown-item">Billing</a>
            <div className="dropdown-divider"></div>
            <div className="dropdown-header">Preferences</div>
            <a href="#" className="dropdown-item">Settings</a>
            <a href="#" className="dropdown-item">Help</a>
            <div className="dropdown-divider"></div>
            <a href="#" className="dropdown-item">Sign Out</a>
          </div>
        </div>
      </ComponentPreview>

      <h2 className="mt-12">Popovers</h2>
      <p className="mb-4">
        Small overlays that provide contextual information or actions.
      </p>

      <ComponentPreview
        title="Basic Popover"
        code={`<div class="popover-container">
  <button class="btn-secondary">
    Show Popover
  </button>
  <div class="popover popover-top">
    <div class="popover-content">
      <h4 className="font-semibold mb-2">Popover Title</h4>
      <p className="text-sm">This is popover content with more detailed information.</p>
    </div>
  </div>
</div>

<script>
  document.querySelectorAll('.popover-container > button').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation()
      const container = btn.parentElement
      container.classList.toggle('open')
    })
  })

  document.addEventListener('click', () => {
    document.querySelectorAll('.popover-container.open').forEach(c => {
      c.classList.remove('open')
    })
  })
</script>`}
      >
        <div className="flex gap-4">
          <div className="popover-container">
            <button className="btn-secondary">
              Show Popover
            </button>
            <div className="popover popover-top">
              <div className="popover-content">
                <h4 className="font-semibold mb-2">Popover Title</h4>
                <p className="text-sm">This is popover content with more detailed information.</p>
              </div>
            </div>
          </div>
        </div>
      </ComponentPreview>

      <h3 className="text-lg font-semibold mt-8 mb-3">Popover Positions</h3>
      <ComponentPreview
        title="Positioning"
        code={`<div class="flex gap-8 flex-wrap">
  <div class="popover-container">
    <button class="btn-ghost">Top</button>
    <div class="popover popover-top">
      <div class="popover-content">
        <p className="text-sm">Popover on top</p>
      </div>
    </div>
  </div>

  <div class="popover-container">
    <button class="btn-ghost">Bottom</button>
    <div class="popover popover-bottom">
      <div class="popover-content">
        <p className="text-sm">Popover on bottom</p>
      </div>
    </div>
  </div>

  <div class="popover-container">
    <button class="btn-ghost">Left</button>
    <div class="popover popover-left">
      <div class="popover-content">
        <p className="text-sm">Popover on left</p>
      </div>
    </div>
  </div>

  <div class="popover-container">
    <button class="btn-ghost">Right</button>
    <div class="popover popover-right">
      <div class="popover-content">
        <p className="text-sm">Popover on right</p>
      </div>
    </div>
  </div>
</div>`}
      >
        <div className="flex gap-8 flex-wrap">
          <div className="popover-container">
            <button className="btn-ghost">Top</button>
            <div className="popover popover-top">
              <div className="popover-content">
                <p className="text-sm">Popover on top</p>
              </div>
            </div>
          </div>

          <div className="popover-container">
            <button className="btn-ghost">Bottom</button>
            <div className="popover popover-bottom">
              <div className="popover-content">
                <p className="text-sm">Popover on bottom</p>
              </div>
            </div>
          </div>

          <div className="popover-container">
            <button className="btn-ghost">Left</button>
            <div className="popover popover-left">
              <div className="popover-content">
                <p className="text-sm">Popover on left</p>
              </div>
            </div>
          </div>

          <div className="popover-container">
            <button className="btn-ghost">Right</button>
            <div className="popover popover-right">
              <div className="popover-content">
                <p className="text-sm">Popover on right</p>
              </div>
            </div>
          </div>
        </div>
      </ComponentPreview>

      <h2 className="mt-12">Common Patterns</h2>

      <h3 className="text-lg font-semibold mt-6 mb-3">User Menu</h3>
      <ComponentPreview
        title="Profile Dropdown"
        code={`<div class="dropdown">
  <button class="btn-ghost flex items-center gap-2">
    <div class="avatar avatar-sm">
      <img src="https://via.placeholder.com/40" alt="User" />
    </div>
    <span>John Doe</span>
  </button>
  <div class="dropdown-menu dropdown-menu-right">
    <div class="dropdown-header">john@example.com</div>
    <div class="dropdown-divider"></div>
    <a href="#" class="dropdown-item">Your Profile</a>
    <a href="#" class="dropdown-item">Settings</a>
    <a href="#" class="dropdown-item">Billing</a>
    <div class="dropdown-divider"></div>
    <a href="#" class="dropdown-item">Sign Out</a>
  </div>
</div>`}
      >
        <div className="flex justify-end">
          <div className="dropdown">
            <button className="btn-ghost flex items-center gap-2">
              <div className="avatar avatar-sm">
                <img src="https://via.placeholder.com/40" alt="User" />
              </div>
              <span>John Doe</span>
            </button>
            <div className="dropdown-menu dropdown-menu-right">
              <div className="dropdown-header">john@example.com</div>
              <div className="dropdown-divider"></div>
              <a href="#" className="dropdown-item">Your Profile</a>
              <a href="#" className="dropdown-item">Settings</a>
              <a href="#" className="dropdown-item">Billing</a>
              <div className="dropdown-divider"></div>
              <a href="#" className="dropdown-item">Sign Out</a>
            </div>
          </div>
        </div>
      </ComponentPreview>

      <h3 className="text-lg font-semibold mt-8 mb-3">Actions Menu</h3>
      <ComponentPreview
        title="Context Menu"
        code={`<div class="card max-w-md">
  <div class="card-body">
    <div class="flex justify-between items-start">
      <div>
        <h4 class="font-semibold">Project Document</h4>
        <p class="text-sm text-muted">Updated 2 hours ago</p>
      </div>
      <div class="dropdown">
        <button class="btn-ghost btn-sm">⋮</button>
        <div class="dropdown-menu dropdown-menu-right">
          <a href="#" class="dropdown-item">Edit</a>
          <a href="#" class="dropdown-item">Copy Link</a>
          <a href="#" class="dropdown-item">Download</a>
          <a href="#" class="dropdown-item">Share</a>
          <div class="dropdown-divider"></div>
          <a href="#" class="dropdown-item">Move to...</a>
          <a href="#" class="dropdown-item">Archive</a>
          <div class="dropdown-divider"></div>
          <a href="#" class="dropdown-item text-danger">Delete</a>
        </div>
      </div>
    </div>
  </div>
</div>`}
      >
        <div className="card max-w-md">
          <div className="card-body">
            <div className="flex justify-between items-start">
              <div>
                <h4 className="font-semibold">Project Document</h4>
                <p className="text-sm text-muted">Updated 2 hours ago</p>
              </div>
              <div className="dropdown">
                <button className="btn-ghost btn-sm">⋮</button>
                <div className="dropdown-menu dropdown-menu-right">
                  <a href="#" className="dropdown-item">Edit</a>
                  <a href="#" className="dropdown-item">Copy Link</a>
                  <a href="#" className="dropdown-item">Download</a>
                  <a href="#" className="dropdown-item">Share</a>
                  <div className="dropdown-divider"></div>
                  <a href="#" className="dropdown-item">Move to...</a>
                  <a href="#" className="dropdown-item">Archive</a>
                  <div className="dropdown-divider"></div>
                  <a href="#" className="dropdown-item text-danger">Delete</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </ComponentPreview>

      <h3 className="text-lg font-semibold mt-8 mb-3">Notification Popover</h3>
      <ComponentPreview
        title="Rich Popover Content"
        code={`<div class="popover-container">
  <button class="btn-ghost relative">
    Notifications
    <span class="badge badge-danger badge-sm" style="position: absolute; top: 0; right: 0;">3</span>
  </button>
  <div class="popover popover-bottom" style="width: 320px;">
    <div class="popover-content">
      <h4 class="font-semibold mb-3">Notifications</h4>
      <div class="divide-y">
        <div class="py-3">
          <p class="text-sm font-medium">New comment on your post</p>
          <p class="text-xs text-muted mt-1">2 minutes ago</p>
        </div>
        <div class="py-3">
          <p class="text-sm font-medium">Team invitation</p>
          <p class="text-xs text-muted mt-1">1 hour ago</p>
        </div>
        <div class="py-3">
          <p class="text-sm font-medium">Your report is ready</p>
          <p class="text-xs text-muted mt-1">3 hours ago</p>
        </div>
      </div>
      <div class="mt-3 pt-3 border-t">
        <a href="#" class="text-sm text-primary font-semibold">View all notifications →</a>
      </div>
    </div>
  </div>
</div>`}
      >
        <div className="popover-container">
          <button className="btn-ghost relative">
            Notifications
            <span className="badge badge-danger badge-sm" style={{ position: 'absolute', top: 0, right: 0 }}>3</span>
          </button>
          <div className="popover popover-bottom" style={{ width: '320px' }}>
            <div className="popover-content">
              <h4 className="font-semibold mb-3">Notifications</h4>
              <div className="divide-y">
                <div className="py-3">
                  <p className="text-sm font-medium">New comment on your post</p>
                  <p className="text-xs text-muted mt-1">2 minutes ago</p>
                </div>
                <div className="py-3">
                  <p className="text-sm font-medium">Team invitation</p>
                  <p className="text-xs text-muted mt-1">1 hour ago</p>
                </div>
                <div className="py-3">
                  <p className="text-sm font-medium">Your report is ready</p>
                  <p className="text-xs text-muted mt-1">3 hours ago</p>
                </div>
              </div>
              <div className="mt-3 pt-3 border-t">
                <a href="#" className="text-sm text-primary font-semibold">View all notifications →</a>
              </div>
            </div>
          </div>
        </div>
      </ComponentPreview>

      <h2 className="mt-12">JavaScript Implementation</h2>
      <div className="card mb-6">
        <div className="card-body">
          <h4 className="font-semibold mb-3">Basic Toggle Script</h4>
          <p className="text-sm mb-4">
            Add this JavaScript to enable dropdown and popover functionality:
          </p>
          <ComponentPreview
            title="Toggle Implementation"
            language="javascript"
            code={`// Dropdown toggle
document.querySelectorAll('.dropdown > button').forEach(button => {
  button.addEventListener('click', (e) => {
    e.stopPropagation()
    const dropdown = button.parentElement

    // Close other open dropdowns
    document.querySelectorAll('.dropdown.open').forEach(d => {
      if (d !== dropdown) d.classList.remove('open')
    })

    dropdown.classList.toggle('open')
  })
})

// Popover toggle
document.querySelectorAll('.popover-container > button').forEach(button => {
  button.addEventListener('click', (e) => {
    e.stopPropagation()
    const container = button.parentElement

    // Close other open popovers
    document.querySelectorAll('.popover-container.open').forEach(c => {
      if (c !== container) c.classList.remove('open')
    })

    container.classList.toggle('open')
  })
})

// Close on outside click
document.addEventListener('click', () => {
  document.querySelectorAll('.dropdown.open, .popover-container.open').forEach(el => {
    el.classList.remove('open')
  })
})

// Close on escape key
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    document.querySelectorAll('.dropdown.open, .popover-container.open').forEach(el => {
      el.classList.remove('open')
    })
  }
})`}
          >
            <div></div>
          </ComponentPreview>
        </div>
      </div>

      <h2 className="mt-12">Accessibility</h2>
      <div className="alert alert-primary mb-6">
        <strong>Best Practices:</strong>
        <ul className="mt-2 ml-4" style={{ listStyle: 'disc' }}>
          <li>Use <code>role="menu"</code> on dropdown menus with <code>role="menuitem"</code> on items</li>
          <li>Add <code>aria-haspopup="true"</code> and <code>aria-expanded</code> to trigger buttons</li>
          <li>Ensure keyboard navigation (Arrow keys, Enter, Escape)</li>
          <li>Trap focus within open dropdowns and popovers</li>
          <li>Return focus to trigger button when closing</li>
          <li>Use <code>aria-labelledby</code> to associate popovers with their triggers</li>
          <li>Ensure sufficient color contrast for dropdown items</li>
          <li>Make clickable areas at least 44×44 pixels</li>
        </ul>
      </div>

      <div className="mt-12 pt-8" style={{ borderTop: '1px solid var(--color-border)' }}>
        <div className="flex justify-between">
          <a href="/docs/components/feedback" className="btn-ghost">
            ← Feedback
          </a>
          <a href="/docs/components" className="btn-primary">
            Back to Components →
          </a>
        </div>
      </div>
    </div>
  )
}
