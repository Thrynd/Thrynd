import { Sidebar } from '../components/Sidebar'
import { ThemeSwitcher } from '../components/ThemeSwitcher'

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      {/* Top Navigation */}
      <div className="navbar" style={{ borderBottom: '1px solid var(--color-border)', position: 'sticky', top: 0, zIndex: 50, background: 'var(--color-surface, white)', backdropFilter: 'blur(10px)' }}>
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0.75rem 1.5rem' }}>
          <div className="navbar-brand">
            <a href="/" className="text-xl font-bold">Thrynd Docs</a>
          </div>
          <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
            <ThemeSwitcher />
            <a href="https://github.com/yourusername/thrynd" className="btn-ghost btn-sm">
              GitHub
            </a>
          </div>
        </div>
      </div>

      {/* Docs Container */}
      <div className="docs-container">
        <Sidebar />
        <div className="docs-content">
          {children}
        </div>
      </div>
    </>
  )
}
