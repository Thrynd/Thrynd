import Link from 'next/link'

export default function TemplatesPage() {
  const templates = [
    {
      title: 'Landing Page',
      description: 'Modern landing page with hero section, features, and call-to-action',
      href: '/docs/templates/landing',
      preview: '🎯'
    },
    {
      title: 'Dashboard',
      description: 'Admin dashboard with sidebar navigation, stats cards, and data tables',
      href: '/docs/templates/dashboard',
      preview: '📊'
    },
    {
      title: 'Authentication',
      description: 'Login and signup forms with validation and social auth options',
      href: '/docs/templates/auth',
      preview: '🔐'
    },
    {
      title: 'Blog',
      description: 'Blog layout with article cards, sidebar, and pagination',
      href: '/docs/templates/blog',
      preview: '📝'
    },
    {
      title: 'E-commerce',
      description: 'Product page with image gallery, details, and cart functionality',
      href: '/docs/templates/ecommerce',
      preview: '🛍️'
    },
  ]

  return (
    <div>
      <h1>Page Templates</h1>
      <p className="text-xl text-muted mt-4 mb-8">
        Complete page layouts and templates built with Thrynd CSS components.
      </p>

      <div className="alert alert-primary mb-8">
        <strong>💡 Getting Started:</strong>
        <p className="mt-2">
          These templates are ready-to-use page layouts that demonstrate best practices
          and common patterns. Copy the HTML and customize it for your needs.
        </p>
      </div>

      <h2 className="mb-6">Available Templates</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {templates.map((template) => (
          <Link key={template.href} href={template.href} className="card hover:shadow-xl transition-all">
            <div className="card-body">
              <div className="text-4xl mb-4">{template.preview}</div>
              <h3 className="text-xl font-bold mb-2">{template.title}</h3>
              <p className="text-sm text-muted mb-4">{template.description}</p>
              <div className="flex justify-end">
                <span className="text-primary font-semibold text-sm">View template →</span>
              </div>
            </div>
          </Link>
        ))}
      </div>

      <h2 className="mt-12 mb-4">Using Templates</h2>

      <div className="card mb-6">
        <div className="card-body">
          <h4 className="font-semibold mb-3">How to Use These Templates</h4>
          <ol className="ml-6 space-y-2" style={{ listStyle: 'decimal' }}>
            <li>Browse the template that matches your needs</li>
            <li>Copy the HTML code from the example</li>
            <li>Paste it into your project</li>
            <li>Customize colors, text, and components</li>
            <li>Add your own functionality and content</li>
          </ol>
        </div>
      </div>

      <div className="card mb-6">
        <div className="card-body">
          <h4 className="font-semibold mb-3">Customization Tips</h4>
          <ul className="ml-6 space-y-2" style={{ listStyle: 'disc' }}>
            <li>All templates use standard Thrynd classes - easy to modify</li>
            <li>Switch themes by changing the <code>body</code> class</li>
            <li>Adjust spacing with utility classes (<code>mt-4</code>, <code>p-6</code>, etc.)</li>
            <li>Replace placeholder content with your own text and images</li>
            <li>Add interactivity with vanilla JavaScript or your framework of choice</li>
          </ul>
        </div>
      </div>

      <h2 className="mt-12 mb-4">Framework Integration</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        <div className="card">
          <div className="card-body">
            <h4 className="font-semibold mb-2">React / Next.js</h4>
            <p className="text-sm text-muted">
              Convert class names to className and use components. Perfect for modern React apps.
            </p>
          </div>
        </div>

        <div className="card">
          <div className="card-body">
            <h4 className="font-semibold mb-2">Vue / Nuxt</h4>
            <p className="text-sm text-muted">
              Use templates as-is or break them into Vue components. Works with both Vue 2 and 3.
            </p>
          </div>
        </div>

        <div className="card">
          <div className="card-body">
            <h4 className="font-semibold mb-2">Plain HTML</h4>
            <p className="text-sm text-muted">
              Copy and paste directly. No build step required - just include the CSS file.
            </p>
          </div>
        </div>
      </div>

      <div className="mt-12 pt-8" style={{ borderTop: '1px solid var(--color-border)' }}>
        <div className="flex justify-between">
          <Link href="/docs/llm-guide" className="btn-ghost">
            ← LLM Guide
          </Link>
          <Link href="/" className="btn-primary">
            Back to Home →
          </Link>
        </div>
      </div>
    </div>
  )
}
