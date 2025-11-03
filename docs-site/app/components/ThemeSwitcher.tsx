'use client'

import { useState, useEffect } from 'react'

const themes = [
  { name: 'Modern', value: 'theme-modern', color: 'linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)' },
  { name: 'Classic', value: 'theme-classic', color: 'linear-gradient(135deg, #1e3a8a 0%, #78716c 100%)' },
  { name: 'Minimal', value: 'theme-minimal', color: 'linear-gradient(135deg, #000000 0%, #6b7280 100%)' },
  { name: 'Neon', value: 'theme-neon', color: 'linear-gradient(135deg, #00f0ff 0%, #b026ff 100%)' },
  { name: 'Nature', value: 'theme-nature', color: 'linear-gradient(135deg, #2d6a4f 0%, #52b788 100%)' },
  { name: 'Corporate', value: 'theme-corporate', color: 'linear-gradient(135deg, #0066cc 0%, #5a6c7d 100%)' },
]

export function ThemeSwitcher() {
  const [currentTheme, setCurrentTheme] = useState('theme-modern')
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const savedTheme = localStorage.getItem('thrynd-theme') || 'theme-modern'
    setCurrentTheme(savedTheme)
    document.body.className = savedTheme
  }, [])

  const switchTheme = (themeValue: string) => {
    setCurrentTheme(themeValue)
    document.body.className = themeValue
    localStorage.setItem('thrynd-theme', themeValue)
    setIsOpen(false)
  }

  return (
    <div className="dropdown" style={{ position: 'relative' }}>
      <button
        className="btn-ghost"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Switch theme"
      >
        🎨 Theme
      </button>

      {isOpen && (
        <div
          className="dropdown-menu"
          style={{
            display: 'block',
            position: 'absolute',
            right: 0,
            top: '100%',
            marginTop: '0.5rem',
            minWidth: '200px',
          }}
        >
          {themes.map((theme) => (
            <button
              key={theme.value}
              className="dropdown-item"
              onClick={() => switchTheme(theme.value)}
              style={{
                width: '100%',
                textAlign: 'left',
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem',
              }}
            >
              <div
                style={{
                  width: '1.5rem',
                  height: '1.5rem',
                  borderRadius: '0.25rem',
                  background: theme.color,
                }}
              />
              <span>{theme.name}</span>
              {currentTheme === theme.value && <span className="badge badge-primary badge-pill" style={{ marginLeft: 'auto' }}>✓</span>}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
