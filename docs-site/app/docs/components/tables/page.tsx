import { ComponentPreview } from '../../../components/ComponentPreview'

export default function TablesPage() {
  return (
    <div>
      <h1>Tables</h1>
      <p className="text-xl text-muted mt-4 mb-8">
        Responsive data tables with hover states, sorting, and mobile-friendly layouts.
      </p>

      <h2>Basic Table</h2>
      <p className="mb-4">
        Use the <code>table</code> class for basic table styling with borders and hover effects.
      </p>

      <ComponentPreview
        title="Basic Table"
        code={`<table class="table">
  <thead>
    <tr>
      <th>Name</th>
      <th>Email</th>
      <th>Role</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>John Doe</td>
      <td>john@example.com</td>
      <td>Admin</td>
    </tr>
    <tr>
      <td>Jane Smith</td>
      <td>jane@example.com</td>
      <td>User</td>
    </tr>
    <tr>
      <td>Bob Johnson</td>
      <td>bob@example.com</td>
      <td>User</td>
    </tr>
  </tbody>
</table>`}
      >
        <table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>John Doe</td>
              <td>john@example.com</td>
              <td>Admin</td>
            </tr>
            <tr>
              <td>Jane Smith</td>
              <td>jane@example.com</td>
              <td>User</td>
            </tr>
            <tr>
              <td>Bob Johnson</td>
              <td>bob@example.com</td>
              <td>User</td>
            </tr>
          </tbody>
        </table>
      </ComponentPreview>

      <h2 className="mt-12">Table Variants</h2>

      <h3 className="text-lg font-semibold mt-6 mb-3">Bordered Table</h3>
      <p className="mb-4">
        Add <code>table-bordered</code> for borders on all cells.
      </p>

      <ComponentPreview
        title="Bordered Table"
        code={`<table class="table table-bordered">
  <thead>
    <tr>
      <th>Product</th>
      <th>Price</th>
      <th>Stock</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Widget A</td>
      <td>$29.99</td>
      <td>150</td>
    </tr>
    <tr>
      <td>Widget B</td>
      <td>$39.99</td>
      <td>75</td>
    </tr>
  </tbody>
</table>`}
      >
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>Product</th>
              <th>Price</th>
              <th>Stock</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Widget A</td>
              <td>$29.99</td>
              <td>150</td>
            </tr>
            <tr>
              <td>Widget B</td>
              <td>$39.99</td>
              <td>75</td>
            </tr>
          </tbody>
        </table>
      </ComponentPreview>

      <h3 className="text-lg font-semibold mt-8 mb-3">Striped Table</h3>
      <p className="mb-4">
        Add <code>table-striped</code> for alternating row colors.
      </p>

      <ComponentPreview
        title="Striped Table"
        code={`<table class="table table-striped">
  <thead>
    <tr>
      <th>ID</th>
      <th>Name</th>
      <th>Status</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>001</td>
      <td>Project Alpha</td>
      <td>Active</td>
    </tr>
    <tr>
      <td>002</td>
      <td>Project Beta</td>
      <td>Completed</td>
    </tr>
    <tr>
      <td>003</td>
      <td>Project Gamma</td>
      <td>Active</td>
    </tr>
  </tbody>
</table>`}
      >
        <table className="table table-striped">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>001</td>
              <td>Project Alpha</td>
              <td>Active</td>
            </tr>
            <tr>
              <td>002</td>
              <td>Project Beta</td>
              <td>Completed</td>
            </tr>
            <tr>
              <td>003</td>
              <td>Project Gamma</td>
              <td>Active</td>
            </tr>
          </tbody>
        </table>
      </ComponentPreview>

      <h2 className="mt-12">Table with Components</h2>
      <p className="mb-4">
        Combine tables with other Thrynd components for rich data displays.
      </p>

      <ComponentPreview
        title="Table with Avatars and Badges"
        code={`<div class="table-responsive">
  <table class="table">
    <thead>
      <tr>
        <th>User</th>
        <th>Status</th>
        <th>Role</th>
        <th class="text-right">Actions</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>
          <div class="flex items-center gap-3">
            <div class="avatar avatar-sm">JD</div>
            <span>John Doe</span>
          </div>
        </td>
        <td><span class="badge badge-success">Active</span></td>
        <td>Admin</td>
        <td class="text-right">
          <button class="btn-ghost btn-sm">Edit</button>
        </td>
      </tr>
      <tr>
        <td>
          <div class="flex items-center gap-3">
            <div class="avatar avatar-sm">JS</div>
            <span>Jane Smith</span>
          </div>
        </td>
        <td><span class="badge badge-warning">Pending</span></td>
        <td>User</td>
        <td class="text-right">
          <button class="btn-ghost btn-sm">Edit</button>
        </td>
      </tr>
    </tbody>
  </table>
</div>`}
      >
        <div className="table-responsive">
          <table className="table">
            <thead>
              <tr>
                <th>User</th>
                <th>Status</th>
                <th>Role</th>
                <th className="text-right">Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar avatar-sm">JD</div>
                    <span>John Doe</span>
                  </div>
                </td>
                <td><span className="badge badge-success">Active</span></td>
                <td>Admin</td>
                <td className="text-right">
                  <button className="btn-ghost btn-sm">Edit</button>
                </td>
              </tr>
              <tr>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar avatar-sm">JS</div>
                    <span>Jane Smith</span>
                  </div>
                </td>
                <td><span className="badge badge-warning">Pending</span></td>
                <td>User</td>
                <td className="text-right">
                  <button className="btn-ghost btn-sm">Edit</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </ComponentPreview>

      <h2 className="mt-12">Responsive Tables</h2>
      <p className="mb-4">
        Wrap tables in <code>table-responsive</code> for horizontal scrolling on small screens.
      </p>

      <ComponentPreview
        title="Responsive Wrapper"
        code={`<div class="table-responsive">
  <table class="table">
    <!-- Table content -->
  </table>
</div>`}
      >
        <div className="table-responsive">
          <table className="table">
            <thead>
              <tr>
                <th>Column 1</th>
                <th>Column 2</th>
                <th>Column 3</th>
                <th>Column 4</th>
                <th>Column 5</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Data 1</td>
                <td>Data 2</td>
                <td>Data 3</td>
                <td>Data 4</td>
                <td>Data 5</td>
              </tr>
            </tbody>
          </table>
        </div>
      </ComponentPreview>

      <h2 className="mt-12">Table Sizes</h2>

      <h3 className="text-lg font-semibold mt-6 mb-3">Small Table</h3>
      <ComponentPreview
        title="Compact Table"
        code={`<table class="table table-sm">
  <thead>
    <tr>
      <th>Name</th>
      <th>Value</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Setting 1</td>
      <td>Enabled</td>
    </tr>
    <tr>
      <td>Setting 2</td>
      <td>Disabled</td>
    </tr>
  </tbody>
</table>`}
      >
        <table className="table table-sm">
          <thead>
            <tr>
              <th>Name</th>
              <th>Value</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Setting 1</td>
              <td>Enabled</td>
            </tr>
            <tr>
              <td>Setting 2</td>
              <td>Disabled</td>
            </tr>
          </tbody>
        </table>
      </ComponentPreview>

      <h2 className="mt-12">Accessibility</h2>
      <div className="alert alert-primary mb-6">
        <strong>Best Practices:</strong>
        <ul className="mt-2 ml-4" style={{ listStyle: 'disc' }}>
          <li>Use <code>&lt;thead&gt;</code>, <code>&lt;tbody&gt;</code>, and <code>&lt;th&gt;</code> elements</li>
          <li>Add <code>scope</code> attribute to header cells</li>
          <li>Use <code>&lt;caption&gt;</code> to describe table content</li>
          <li>Ensure sufficient color contrast for all text</li>
          <li>Make sortable columns keyboard accessible</li>
          <li>Use <code>aria-label</code> for icon-only action buttons</li>
        </ul>
      </div>

      <div className="mt-12 pt-8" style={{ borderTop: '1px solid var(--color-border)' }}>
        <div className="flex justify-between">
          <a href="/docs/components/modals" className="btn-ghost">
            ← Modals
          </a>
          <a href="/docs/components/avatars" className="btn-primary">
            Next: Avatars →
          </a>
        </div>
      </div>
    </div>
  )
}
