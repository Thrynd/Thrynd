import { ComponentPreview } from '../../../components/ComponentPreview'

export default function AvatarsPage() {
  return (
    <div>
      <h1>Avatars</h1>
      <p className="text-xl text-muted mt-4 mb-8">
        User profile pictures with multiple sizes, status indicators, and group layouts.
      </p>

      <h2>Avatar Sizes</h2>
      <p className="mb-4">
        Avatars come in four sizes: small, medium (default), large, and extra large.
      </p>

      <ComponentPreview
        title="Avatar Sizes"
        code={`<div class="flex items-center gap-6">
  <div class="avatar avatar-sm">SM</div>
  <div class="avatar">MD</div>
  <div class="avatar avatar-lg">LG</div>
  <div class="avatar avatar-xl">XL</div>
</div>`}
      >
        <div className="flex items-center gap-6">
          <div className="avatar avatar-sm">SM</div>
          <div className="avatar">MD</div>
          <div className="avatar avatar-lg">LG</div>
          <div className="avatar avatar-xl">XL</div>
        </div>
      </ComponentPreview>

      <h2 className="mt-12">Avatar with Image</h2>
      <p className="mb-4">
        Use an <code>&lt;img&gt;</code> tag inside the avatar for profile pictures.
      </p>

      <ComponentPreview
        title="Image Avatars"
        code={`<div class="flex items-center gap-4">
  <div class="avatar avatar-sm">
    <img src="https://i.pravatar.cc/150?img=1" alt="User avatar">
  </div>
  <div class="avatar">
    <img src="https://i.pravatar.cc/150?img=2" alt="User avatar">
  </div>
  <div class="avatar avatar-lg">
    <img src="https://i.pravatar.cc/150?img=3" alt="User avatar">
  </div>
</div>`}
      >
        <div className="flex items-center gap-4">
          <div className="avatar avatar-sm">
            <img src="https://i.pravatar.cc/150?img=1" alt="User avatar" />
          </div>
          <div className="avatar">
            <img src="https://i.pravatar.cc/150?img=2" alt="User avatar" />
          </div>
          <div className="avatar avatar-lg">
            <img src="https://i.pravatar.cc/150?img=3" alt="User avatar" />
          </div>
        </div>
      </ComponentPreview>

      <h2 className="mt-12">Status Indicators</h2>
      <p className="mb-4">
        Add <code>avatar-status</code> with online, busy, or away modifiers to show user presence.
      </p>

      <ComponentPreview
        title="Avatar with Status"
        code={`<div class="flex items-center gap-6">
  <div class="avatar avatar-status online">ON</div>
  <div class="avatar avatar-status busy">BS</div>
  <div class="avatar avatar-status away">AW</div>
  <div class="avatar avatar-status">OF</div>
</div>`}
      >
        <div className="flex items-center gap-6">
          <div className="avatar avatar-status online">ON</div>
          <div className="avatar avatar-status busy">BS</div>
          <div className="avatar avatar-status away">AW</div>
          <div className="avatar avatar-status">OF</div>
        </div>
      </ComponentPreview>

      <h2 className="mt-12">Avatar Groups</h2>
      <p className="mb-4">
        Use <code>avatar-group</code> to stack avatars with overlap.
      </p>

      <ComponentPreview
        title="Avatar Group"
        code={`<div class="avatar-group">
  <div class="avatar">A</div>
  <div class="avatar">B</div>
  <div class="avatar">C</div>
  <div class="avatar">D</div>
  <div class="avatar">+5</div>
</div>`}
      >
        <div className="avatar-group">
          <div className="avatar">A</div>
          <div className="avatar">B</div>
          <div className="avatar">C</div>
          <div className="avatar">D</div>
          <div className="avatar">+5</div>
        </div>
      </ComponentPreview>

      <h2 className="mt-12">Common Patterns</h2>

      <h3 className="text-lg font-semibold mt-6 mb-3">User Profile</h3>
      <ComponentPreview
        title="Profile Header"
        code={`<div class="card max-w-md">
  <div class="card-body">
    <div class="flex items-center gap-4">
      <div class="avatar avatar-lg avatar-status online">
        <img src="https://i.pravatar.cc/150?img=5" alt="Profile">
      </div>
      <div class="flex-1">
        <h4 class="font-semibold">Sarah Johnson</h4>
        <p class="text-sm text-muted">Product Designer</p>
        <div class="badge-group mt-2">
          <span class="badge badge-primary badge-pill">Pro</span>
          <span class="badge badge-success badge-pill">Verified</span>
        </div>
      </div>
    </div>
  </div>
</div>`}
      >
        <div className="card max-w-md">
          <div className="card-body">
            <div className="flex items-center gap-4">
              <div className="avatar avatar-lg avatar-status online">
                <img src="https://i.pravatar.cc/150?img=5" alt="Profile" />
              </div>
              <div className="flex-1">
                <h4 className="font-semibold">Sarah Johnson</h4>
                <p className="text-sm text-muted">Product Designer</p>
                <div className="badge-group mt-2">
                  <span className="badge badge-primary badge-pill">Pro</span>
                  <span className="badge badge-success badge-pill">Verified</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </ComponentPreview>

      <h3 className="text-lg font-semibold mt-8 mb-3">Comment Thread</h3>
      <ComponentPreview
        title="Comment with Avatar"
        code={`<div class="card max-w-2xl">
  <div class="card-body">
    <div class="flex gap-3">
      <div class="avatar avatar-sm">
        <img src="https://i.pravatar.cc/150?img=6" alt="User">
      </div>
      <div class="flex-1">
        <div class="flex items-center gap-2 mb-1">
          <span class="font-semibold">Alex Chen</span>
          <span class="text-sm text-muted">2 hours ago</span>
        </div>
        <p class="text-sm">This looks great! I really like the new design direction.</p>
      </div>
    </div>
  </div>
</div>`}
      >
        <div className="card max-w-2xl">
          <div className="card-body">
            <div className="flex gap-3">
              <div className="avatar avatar-sm">
                <img src="https://i.pravatar.cc/150?img=6" alt="User" />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <span className="font-semibold">Alex Chen</span>
                  <span className="text-sm text-muted">2 hours ago</span>
                </div>
                <p className="text-sm">This looks great! I really like the new design direction.</p>
              </div>
            </div>
          </div>
        </div>
      </ComponentPreview>

      <h3 className="text-lg font-semibold mt-8 mb-3">Team List</h3>
      <ComponentPreview
        title="Team Members"
        code={`<div class="card max-w-md">
  <div class="card-body">
    <h4 class="card-title mb-4">Team Members</h4>
    <div class="flex flex-col gap-3">
      <div class="flex items-center justify-between">
        <div class="flex items-center gap-3">
          <div class="avatar avatar-sm avatar-status online">JD</div>
          <div>
            <div class="font-medium">John Doe</div>
            <div class="text-sm text-muted">Admin</div>
          </div>
        </div>
        <button class="btn-ghost btn-sm">Remove</button>
      </div>
      <div class="flex items-center justify-between">
        <div class="flex items-center gap-3">
          <div class="avatar avatar-sm avatar-status away">JS</div>
          <div>
            <div class="font-medium">Jane Smith</div>
            <div class="text-sm text-muted">Editor</div>
          </div>
        </div>
        <button class="btn-ghost btn-sm">Remove</button>
      </div>
    </div>
  </div>
</div>`}
      >
        <div className="card max-w-md">
          <div className="card-body">
            <h4 className="card-title mb-4">Team Members</h4>
            <div className="flex flex-col gap-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="avatar avatar-sm avatar-status online">JD</div>
                  <div>
                    <div className="font-medium">John Doe</div>
                    <div className="text-sm text-muted">Admin</div>
                  </div>
                </div>
                <button className="btn-ghost btn-sm">Remove</button>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="avatar avatar-sm avatar-status away">JS</div>
                  <div>
                    <div className="font-medium">Jane Smith</div>
                    <div className="text-sm text-muted">Editor</div>
                  </div>
                </div>
                <button className="btn-ghost btn-sm">Remove</button>
              </div>
            </div>
          </div>
        </div>
      </ComponentPreview>

      <h2 className="mt-12">Best Practices</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="card">
          <div className="card-body">
            <h4 className="font-semibold text-success mb-3">✓ Do</h4>
            <ul className="text-sm space-y-2">
              <li>Use consistent sizes across context</li>
              <li>Provide meaningful alt text for images</li>
              <li>Use initials for text-only avatars</li>
              <li>Keep avatar groups to 5-7 items max</li>
            </ul>
          </div>
        </div>

        <div className="card">
          <div className="card-body">
            <h4 className="font-semibold text-danger mb-3">✗ Don't</h4>
            <ul className="text-sm space-y-2">
              <li>Use low-quality or pixelated images</li>
              <li>Mix different shapes (circles/squares)</li>
              <li>Show too many in a group</li>
              <li>Use avatars for non-user content</li>
            </ul>
          </div>
        </div>
      </div>

      <h2 className="mt-12">Accessibility</h2>
      <div className="alert alert-primary mb-6">
        <strong>Best Practices:</strong>
        <ul className="mt-2 ml-4" style={{ listStyle: 'disc' }}>
          <li>Always provide <code>alt</code> text for image avatars</li>
          <li>Use <code>aria-label</code> to describe user status</li>
          <li>Ensure sufficient color contrast for initials</li>
          <li>Don't rely solely on color for status (use icons too)</li>
          <li>Make clickable avatars keyboard accessible</li>
        </ul>
      </div>

      <div className="mt-12 pt-8" style={{ borderTop: '1px solid var(--color-border)' }}>
        <div className="flex justify-between">
          <a href="/docs/components/tables" className="btn-ghost">
            ← Tables
          </a>
          <a href="/docs/components" className="btn-primary">
            Back to Components →
          </a>
        </div>
      </div>
    </div>
  )
}
