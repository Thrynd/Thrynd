'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

interface NavItem {
  title: string
  href: string
  items?: NavItem[]
}

const navigation: NavItem[] = [
  {
    title: 'Getting Started',
    href: '/docs/getting-started',
  },
  {
    title: 'Themes',
    href: '/docs/themes',
  },
  {
    title: 'Components',
    href: '/docs/components',
    items: [
      { title: 'Buttons', href: '/docs/components/buttons' },
      { title: 'Cards', href: '/docs/components/cards' },
      { title: 'Forms', href: '/docs/components/forms' },
      { title: 'Navigation', href: '/docs/components/navigation' },
      { title: 'Alerts', href: '/docs/components/alerts' },
      { title: 'Badges', href: '/docs/components/badges' },
      { title: 'Modals', href: '/docs/components/modals' },
      { title: 'Tables', href: '/docs/components/tables' },
      { title: 'Avatars', href: '/docs/components/avatars' },
      { title: 'Feedback', href: '/docs/components/feedback' },
      { title: 'Dropdowns', href: '/docs/components/dropdowns' },
    ],
  },
  {
    title: 'Utilities',
    href: '/docs/utilities',
    items: [
      { title: 'Spacing', href: '/docs/utilities/spacing' },
      { title: 'Colors', href: '/docs/utilities/colors' },
      { title: 'Typography', href: '/docs/utilities/typography' },
      { title: 'Layout', href: '/docs/utilities/layout' },
      { title: 'Borders', href: '/docs/utilities/borders' },
      { title: 'Effects', href: '/docs/utilities/effects' },
      { title: 'Responsive', href: '/docs/utilities/responsive' },
    ],
  },
  {
    title: 'Templates',
    href: '/docs/templates',
    items: [
      { title: 'Landing Page', href: '/docs/templates/landing' },
      { title: 'Dashboard', href: '/docs/templates/dashboard' },
      { title: 'Authentication', href: '/docs/templates/auth' },
    ],
  },
  {
    title: 'Deployment',
    href: '/docs/deployment',
  },
  {
    title: 'LLM Guide',
    href: '/docs/llm-guide',
  },
]

export function Sidebar() {
  const pathname = usePathname()

  return (
    <nav className="docs-sidebar">
      <div className="mb-6">
        <Link href="/" className="text-2xl font-bold text-primary">
          Thrynd
        </Link>
        <p className="text-sm text-muted mt-1">v0.1.0</p>
      </div>

      <ul className="list-group">
        {navigation.map((item) => (
          <li key={item.href}>
            <Link
              href={item.href}
              className={`list-group-item ${pathname === item.href ? 'active' : ''}`}
            >
              {item.title}
            </Link>
            {item.items && (
              <ul style={{ paddingLeft: '1rem', marginTop: '0.5rem' }}>
                {item.items.map((subItem) => (
                  <li key={subItem.href} style={{ listStyle: 'none', marginBottom: '0.25rem' }}>
                    <Link
                      href={subItem.href}
                      className={`text-sm ${
                        pathname === subItem.href
                          ? 'text-primary font-semibold'
                          : 'text-muted hover:text-primary'
                      }`}
                      style={{ display: 'block', padding: '0.5rem 0.75rem' }}
                    >
                      {subItem.title}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </nav>
  )
}
