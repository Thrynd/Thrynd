import { ComponentPreview } from '../../../components/ComponentPreview'
import Link from 'next/link'

export default function DashboardTemplatePage() {
  return (
    <div>
      <h1>Dashboard Template</h1>
      <p className="text-xl text-muted mt-4 mb-8">
        Admin dashboard with sidebar navigation, statistics, charts, and data tables.
      </p>

      <div className="alert alert-primary mb-8">
        <strong>📋 Template Includes:</strong>
        <ul className="mt-2 ml-4" style={{ listStyle: 'disc' }}>
          <li>Responsive sidebar navigation</li>
          <li>Top header with user menu</li>
          <li>Statistics cards</li>
          <li>Data tables with actions</li>
          <li>Activity feed</li>
          <li>Chart placeholders</li>
        </ul>
      </div>

      <h2 className="mb-4">Full Template</h2>

      <ComponentPreview
        title="Complete Dashboard"
        code={`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Dashboard - Admin Panel</title>
  <link rel="stylesheet" href="path/to/thrynd.css">
  <style>
    .dashboard-layout {
      display: flex;
      min-height: 100vh;
    }
    .dashboard-sidebar {
      width: 250px;
      background: var(--color-gray-900);
      color: white;
      padding: 1.5rem;
      flex-shrink: 0;
    }
    .dashboard-main {
      flex: 1;
      display: flex;
      flex-direction: column;
    }
    .dashboard-header {
      background: var(--color-surface, white);
      padding: 1rem 2rem;
      border-bottom: 1px solid var(--color-border);
    }
    .dashboard-content {
      padding: 2rem;
      background: var(--color-gray-50);
      flex: 1;
    }
    .sidebar-nav a {
      display: block;
      padding: 0.75rem 1rem;
      color: rgba(255, 255, 255, 0.7);
      text-decoration: none;
      border-radius: var(--radius-md);
      margin-bottom: 0.25rem;
      transition: all 0.2s;
    }
    .sidebar-nav a:hover,
    .sidebar-nav a.active {
      background: rgba(255, 255, 255, 0.1);
      color: white;
    }
    .stat-card {
      background: var(--card-background, white);
      padding: 1.5rem;
      border-radius: var(--radius-lg);
      box-shadow: var(--shadow);
    }
    @media (max-width: 768px) {
      .dashboard-sidebar {
        display: none;
      }
    }
  </style>
</head>
<body class="theme-modern">

  <div class="dashboard-layout">
    <!-- Sidebar -->
    <aside class="dashboard-sidebar">
      <div class="mb-8">
        <h2 class="text-xl font-bold">AdminPanel</h2>
        <p class="text-sm opacity-75 mt-1">v1.0.0</p>
      </div>

      <nav class="sidebar-nav">
        <a href="#" class="active">
          📊 Dashboard
        </a>
        <a href="#">
          👥 Users
        </a>
        <a href="#">
          📦 Products
        </a>
        <a href="#">
          📈 Analytics
        </a>
        <a href="#">
          💳 Orders
        </a>
        <a href="#">
          ⚙️ Settings
        </a>
      </nav>

      <div class="mt-12 pt-8" style="border-top: 1px solid rgba(255,255,255,0.1);">
        <a href="#" class="flex items-center gap-3 text-sm opacity-75 hover:opacity-100">
          <div class="avatar avatar-sm">
            <img src="https://via.placeholder.com/40" alt="Admin" />
          </div>
          <div>
            <div class="font-medium">John Admin</div>
            <div class="text-xs">Administrator</div>
          </div>
        </a>
      </div>
    </aside>

    <!-- Main Content -->
    <div class="dashboard-main">
      <!-- Header -->
      <header class="dashboard-header">
        <div class="flex items-center justify-between">
          <div>
            <h1 class="text-2xl font-bold">Dashboard Overview</h1>
            <p class="text-sm text-muted mt-1">Welcome back, John!</p>
          </div>

          <div class="flex items-center gap-4">
            <button class="btn-ghost relative">
              🔔
              <span class="badge badge-danger badge-sm" style="position: absolute; top: -4px; right: -4px;">3</span>
            </button>

            <div class="dropdown">
              <button class="btn-ghost flex items-center gap-2">
                <div class="avatar avatar-sm">
                  <img src="https://via.placeholder.com/40" alt="User" />
                </div>
              </button>
              <div class="dropdown-menu dropdown-menu-right">
                <a href="#" class="dropdown-item">Profile</a>
                <a href="#" class="dropdown-item">Settings</a>
                <div class="dropdown-divider"></div>
                <a href="#" class="dropdown-item">Logout</a>
              </div>
            </div>
          </div>
        </div>
      </header>

      <!-- Content Area -->
      <main class="dashboard-content">
        <!-- Stats Cards -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div class="stat-card">
            <div class="flex justify-between items-start mb-2">
              <div class="text-muted text-sm">Total Revenue</div>
              <div class="text-success text-2xl">💰</div>
            </div>
            <div class="text-3xl font-bold mb-1">$45,231</div>
            <div class="text-sm text-success">↑ 12.5% from last month</div>
          </div>

          <div class="stat-card">
            <div class="flex justify-between items-start mb-2">
              <div class="text-muted text-sm">New Users</div>
              <div class="text-primary text-2xl">👥</div>
            </div>
            <div class="text-3xl font-bold mb-1">1,420</div>
            <div class="text-sm text-success">↑ 8.2% from last month</div>
          </div>

          <div class="stat-card">
            <div class="flex justify-between items-start mb-2">
              <div class="text-muted text-sm">Total Orders</div>
              <div class="text-warning text-2xl">📦</div>
            </div>
            <div class="text-3xl font-bold mb-1">892</div>
            <div class="text-sm text-danger">↓ 3.1% from last month</div>
          </div>

          <div class="stat-card">
            <div class="flex justify-between items-start mb-2">
              <div class="text-muted text-sm">Active Sessions</div>
              <div class="text-info text-2xl font-bold">kW</div>
            </div>
            <div class="text-3xl font-bold mb-1">573</div>
            <div class="text-sm text-success">↑ 5.7% from last hour</div>
          </div>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <!-- Recent Orders Table -->
          <div class="lg:col-span-2">
            <div class="card">
              <div class="card-body">
                <div class="flex justify-between items-center mb-6">
                  <h3 class="text-xl font-bold">Recent Orders</h3>
                  <button class="btn-ghost btn-sm">View All</button>
                </div>

                <div class="table-responsive">
                  <table class="table">
                    <thead>
                      <tr>
                        <th>Order ID</th>
                        <th>Customer</th>
                        <th>Amount</th>
                        <th>Status</th>
                        <th>Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>#3210</td>
                        <td>
                          <div class="flex items-center gap-2">
                            <div class="avatar avatar-sm">
                              <img src="https://via.placeholder.com/32" alt="" />
                            </div>
                            Sarah Johnson
                          </div>
                        </td>
                        <td>$349.00</td>
                        <td><span class="badge badge-success">Completed</span></td>
                        <td>
                          <div class="dropdown">
                            <button class="btn-ghost btn-sm">⋮</button>
                            <div class="dropdown-menu">
                              <a href="#" class="dropdown-item">View</a>
                              <a href="#" class="dropdown-item">Edit</a>
                              <div class="dropdown-divider"></div>
                              <a href="#" class="dropdown-item text-danger">Cancel</a>
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>#3209</td>
                        <td>
                          <div class="flex items-center gap-2">
                            <div class="avatar avatar-sm">
                              <img src="https://via.placeholder.com/32" alt="" />
                            </div>
                            Mike Chen
                          </div>
                        </td>
                        <td>$129.50</td>
                        <td><span class="badge badge-warning">Pending</span></td>
                        <td>
                          <div class="dropdown">
                            <button class="btn-ghost btn-sm">⋮</button>
                            <div class="dropdown-menu">
                              <a href="#" class="dropdown-item">View</a>
                              <a href="#" class="dropdown-item">Edit</a>
                              <div class="dropdown-divider"></div>
                              <a href="#" class="dropdown-item text-danger">Cancel</a>
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>#3208</td>
                        <td>
                          <div class="flex items-center gap-2">
                            <div class="avatar avatar-sm">
                              <img src="https://via.placeholder.com/32" alt="" />
                            </div>
                            Emma Davis
                          </div>
                        </td>
                        <td>$599.99</td>
                        <td><span class="badge badge-primary">Processing</span></td>
                        <td>
                          <div class="dropdown">
                            <button class="btn-ghost btn-sm">⋮</button>
                            <div class="dropdown-menu">
                              <a href="#" class="dropdown-item">View</a>
                              <a href="#" class="dropdown-item">Edit</a>
                              <div class="dropdown-divider"></div>
                              <a href="#" class="dropdown-item text-danger">Cancel</a>
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>#3207</td>
                        <td>
                          <div class="flex items-center gap-2">
                            <div class="avatar avatar-sm">
                              <img src="https://via.placeholder.com/32" alt="" />
                            </div>
                            Alex Brown
                          </div>
                        </td>
                        <td>$89.00</td>
                        <td><span class="badge badge-success">Completed</span></td>
                        <td>
                          <div class="dropdown">
                            <button class="btn-ghost btn-sm">⋮</button>
                            <div class="dropdown-menu">
                              <a href="#" class="dropdown-item">View</a>
                              <a href="#" class="dropdown-item">Edit</a>
                              <div class="dropdown-divider"></div>
                              <a href="#" class="dropdown-item text-danger">Cancel</a>
                            </div>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>

          <!-- Recent Activity -->
          <div>
            <div class="card">
              <div class="card-body">
                <h3 class="text-xl font-bold mb-6">Recent Activity</h3>

                <div class="divide-y">
                  <div class="py-3">
                    <div class="flex items-start gap-3">
                      <div class="bg-success text-white p-2 rounded-full text-sm">✓</div>
                      <div class="flex-1">
                        <p class="text-sm font-medium">Order #3210 completed</p>
                        <p class="text-xs text-muted mt-1">2 minutes ago</p>
                      </div>
                    </div>
                  </div>

                  <div class="py-3">
                    <div class="flex items-start gap-3">
                      <div class="bg-primary text-white p-2 rounded-full text-sm">👤</div>
                      <div class="flex-1">
                        <p class="text-sm font-medium">New user registered</p>
                        <p class="text-xs text-muted mt-1">15 minutes ago</p>
                      </div>
                    </div>
                  </div>

                  <div class="py-3">
                    <div class="flex items-start gap-3">
                      <div class="bg-warning text-white p-2 rounded-full text-sm">📦</div>
                      <div class="flex-1">
                        <p class="text-sm font-medium">Order #3209 pending</p>
                        <p class="text-xs text-muted mt-1">1 hour ago</p>
                      </div>
                    </div>
                  </div>

                  <div class="py-3">
                    <div class="flex items-start gap-3">
                      <div class="bg-info text-white p-2 rounded-full text-sm">💳</div>
                      <div class="flex-1">
                        <p class="text-sm font-medium">Payment received</p>
                        <p class="text-xs text-muted mt-1">2 hours ago</p>
                      </div>
                    </div>
                  </div>

                  <div class="py-3">
                    <div class="flex items-start gap-3">
                      <div class="bg-success text-white p-2 rounded-full text-sm">✓</div>
                      <div class="flex-1">
                        <p class="text-sm font-medium">Order #3208 shipped</p>
                        <p class="text-xs text-muted mt-1">3 hours ago</p>
                      </div>
                    </div>
                  </div>
                </div>

                <button class="btn-ghost btn-sm w-full mt-4">View All Activity</button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  </div>

</body>
</html>`}
      >
        <div className="bg-gray-100 p-4 rounded text-center">
          <p className="text-muted">Full dashboard template - copy the code to see it in action</p>
        </div>
      </ComponentPreview>

      <h2 className="mt-12 mb-4">Key Features</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="card">
          <div className="card-body">
            <h4 className="font-semibold mb-3">📱 Responsive Sidebar</h4>
            <p className="text-sm text-muted">
              Sidebar automatically hides on mobile devices. Add a hamburger menu toggle for mobile navigation.
            </p>
          </div>
        </div>

        <div className="card">
          <div class Name="card-body">
            <h4 className="font-semibold mb-3">📊 Statistics Cards</h4>
            <p className="text-sm text-muted">
              Display key metrics with trend indicators. Easy to customize colors and icons.
            </p>
          </div>
        </div>

        <div className="card">
          <div className="card-body">
            <h4 className="font-semibold mb-3">📋 Data Tables</h4>
            <p className="text-sm text-muted">
              Responsive tables with action menus. Add sorting and pagination as needed.
            </p>
          </div>
        </div>

        <div className="card">
          <div className="card-body">
            <h4 className="font-semibold mb-3">🔔 Activity Feed</h4>
            <p className="text-sm text-muted">
              Real-time activity stream with icons and timestamps. Perfect for audit logs.
            </p>
          </div>
        </div>
      </div>

      <div className="mt-12 pt-8" style={{ borderTop: '1px solid var(--color-border)' }}>
        <div className="flex justify-between">
          <Link href="/docs/templates/landing" className="btn-ghost">
            ← Landing Page
          </Link>
          <Link href="/docs/templates/auth" className="btn-primary">
            Next: Authentication →
          </Link>
        </div>
      </div>
    </div>
  )
}
