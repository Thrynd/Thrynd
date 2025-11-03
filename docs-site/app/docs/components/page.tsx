import Link from 'next/link'

export default function ComponentsOverview() {
  const components = [
    {
      category: 'Form Controls',
      items: [
        { name: 'Buttons', href: '/docs/components/buttons', description: 'Primary, secondary, danger, ghost variants with multiple sizes' },
        { name: 'Forms', href: '/docs/components/forms', description: 'Inputs, textareas, selects, checkboxes, and radio buttons' },
      ],
    },
    {
      category: 'Layout',
      items: [
        { name: 'Cards', href: '/docs/components/cards', description: 'Flexible content containers with headers, bodies, and footers' },
        { name: 'Modals', href: '/docs/components/modals', description: 'Dialog windows with multiple sizes and animations' },
      ],
    },
    {
      category: 'Navigation',
      items: [
        { name: 'Navigation', href: '/docs/components/navigation', description: 'Navbar, sidebar, breadcrumbs, tabs, and pagination' },
      ],
    },
    {
      category: 'Feedback',
      items: [
        { name: 'Alerts', href: '/docs/components/alerts', description: 'Contextual feedback messages in 5 variants' },
        { name: 'Badges', href: '/docs/components/badges', description: 'Small status indicators and labels' },
      ],
    },
    {
      category: 'Data Display',
      items: [
        { name: 'Tables', href: '/docs/components/tables', description: 'Responsive tables with sorting and filtering' },
        { name: 'Avatars', href: '/docs/components/avatars', description: 'User profile pictures with status indicators' },
      ],
    },
  ]

  return (
    <div>
      <h1>Components</h1>
      <p className="text-xl text-muted mt-4 mb-12">
        Thrynd includes 40+ production-ready components. All components work across all 6 themes and are fully responsive.
      </p>

      {components.map((category) => (
        <div key={category.category} className="mb-12">
          <h2 className="text-2xl font-bold mb-6">{category.category}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {category.items.map((item) => (
              <Link key={item.name} href={item.href} className="card card-elevated hover:shadow-lg transition-all" style={{ textDecoration: 'none' }}>
                <div className="card-body">
                  <h3 className="card-title">{item.name}</h3>
                  <p className="text-muted text-sm">{item.description}</p>
                  <div className="mt-4">
                    <span className="text-primary text-sm font-semibold">View documentation →</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      ))}

      <div className="alert alert-primary mt-12">
        <strong>🤖 LLM-Friendly:</strong> All components are documented with machine-readable schemas. Check out the <Link href="/docs/llm-guide" className="font-semibold underline">LLM Guide</Link> to learn how AI assistants can generate perfect Thrynd code.
      </div>
    </div>
  )
}
