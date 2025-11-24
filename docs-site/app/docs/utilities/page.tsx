import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Utilities',
  description: 'Comprehensive utility classes for spacing, colors, typography, layout, borders, and more. Tailwind-like utilities with responsive variants.',
}

export default function UtilitiesOverview() {
  const utilities = [
    {
      name: 'Spacing',
      href: '/docs/utilities/spacing',
      description: 'Margin and padding utilities for consistent spacing throughout your application.',
      examples: ['m-4', 'p-6', 'mt-8', 'px-4 py-2'],
    },
    {
      name: 'Colors',
      href: '/docs/utilities/colors',
      description: 'Text, background, and border color utilities for semantic and custom colors.',
      examples: ['text-primary', 'bg-success', 'border-danger'],
    },
    {
      name: 'Typography',
      href: '/docs/utilities/typography',
      description: 'Font size, weight, alignment, and text utilities for better typography control.',
      examples: ['text-xl', 'font-bold', 'text-center', 'uppercase'],
    },
    {
      name: 'Layout',
      href: '/docs/utilities/layout',
      description: 'Flexbox, grid, positioning, and display utilities for responsive layouts.',
      examples: ['flex', 'grid', 'items-center', 'justify-between'],
    },
    {
      name: 'Borders',
      href: '/docs/utilities/borders',
      description: 'Border width, style, radius, and divide utilities for component styling.',
      examples: ['border', 'rounded-lg', 'border-2', 'divide-y'],
    },
    {
      name: 'Effects',
      href: '/docs/utilities/effects',
      description: 'Transform, transition, filter, and animation utilities for interactive elements.',
      examples: ['hover:scale-105', 'transition', 'blur-sm', 'rotate-45'],
    },
  ]

  return (
    <div>
      <h1>Utilities</h1>
      <p className="text-xl text-muted mt-4 mb-12">
        Thrynd includes comprehensive utility classes for rapid UI development. Use utilities to fine-tune spacing, colors, typography, and more.
      </p>

      <div className="alert alert-primary mb-12">
        <strong>💡 Philosophy:</strong> Utilities are low-level classes that do one thing well. Combine them with component classes for maximum flexibility.
      </div>

      <div className="grid grid-cols-1 gap-6 mb-12">
        {utilities.map((utility) => (
          <Link
            key={utility.name}
            href={utility.href}
            className="card card-elevated hover:shadow-lg transition-all"
            style={{ textDecoration: 'none' }}
          >
            <div className="card-body">
              <div className="flex items-start justify-between mb-3">
                <h3 className="card-title">{utility.name}</h3>
                <span className="text-primary text-sm font-semibold">View docs →</span>
              </div>
              <p className="text-muted mb-4">{utility.description}</p>
              <div className="flex flex-wrap gap-2">
                {utility.examples.map((example) => (
                  <code key={example} className="text-sm">
                    {example}
                  </code>
                ))}
              </div>
            </div>
          </Link>
        ))}
      </div>

      <h2>Using Utilities</h2>
      <p className="mb-4">
        Utilities follow a predictable naming convention:
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="card">
          <div className="card-body">
            <h4 className="font-semibold mb-3">Property-Value Pattern</h4>
            <div className="space-y-2 text-sm">
              <div><code>m-4</code> → margin: 1rem</div>
              <div><code>p-6</code> → padding: 1.5rem</div>
              <div><code>text-xl</code> → font-size: 1.25rem</div>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="card-body">
            <h4 className="font-semibold mb-3">Directional Modifiers</h4>
            <div className="space-y-2 text-sm">
              <div><code>mt-4</code> → margin-top: 1rem</div>
              <div><code>px-6</code> → padding-left & right: 1.5rem</div>
              <div><code>border-t</code> → border-top</div>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="card-body">
            <h4 className="font-semibold mb-3">Responsive Modifiers</h4>
            <div className="space-y-2 text-sm">
              <div><code>md:flex</code> → flex on medium screens+</div>
              <div><code>lg:text-xl</code> → text-xl on large screens+</div>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="card-body">
            <h4 className="font-semibold mb-3">State Modifiers</h4>
            <div className="space-y-2 text-sm">
              <div><code>hover:bg-primary</code> → on hover</div>
              <div><code>focus:ring</code> → on focus</div>
            </div>
          </div>
        </div>
      </div>

      <h2 className="mt-12">Best Practices</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="card">
          <div className="card-body">
            <h4 className="font-semibold text-success mb-3">✓ Do</h4>
            <ul className="text-sm space-y-2">
              <li>• Use utilities for spacing and layout adjustments</li>
              <li>• Combine with component classes</li>
              <li>• Use responsive modifiers for mobile-first design</li>
              <li>• Keep utility chains reasonable (5-7 classes max)</li>
            </ul>
          </div>
        </div>

        <div className="card">
          <div className="card-body">
            <h4 className="font-semibold text-danger mb-3">✗ Don't</h4>
            <ul className="text-sm space-y-2">
              <li>• Build entire components with only utilities</li>
              <li>• Use utilities when a component class exists</li>
              <li>• Chain 10+ utility classes on one element</li>
              <li>• Override component styles with utilities</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
