'use client'

import { useState } from 'react'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism'

interface CodeBlockProps {
  children: string
  language?: string
  showCopy?: boolean
}

export function CodeBlock({ children, language = 'html', showCopy = true }: CodeBlockProps) {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(children)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error('Failed to copy:', err)
    }
  }

  return (
    <div className="code-block" style={{ margin: '1rem 0', position: 'relative' }}>
      {showCopy && (
        <button
          onClick={handleCopy}
          style={{
            position: 'absolute',
            top: '0.5rem',
            right: '0.5rem',
            background: copied ? 'var(--color-success)' : 'rgba(255,255,255,0.1)',
            border: 'none',
            borderRadius: 'var(--radius-sm)',
            padding: '0.375rem 0.75rem',
            fontSize: '0.75rem',
            color: 'white',
            cursor: 'pointer',
            zIndex: 10,
            transition: 'all 0.2s',
          }}
          onMouseEnter={(e) => {
            if (!copied) e.currentTarget.style.background = 'rgba(255,255,255,0.2)'
          }}
          onMouseLeave={(e) => {
            if (!copied) e.currentTarget.style.background = 'rgba(255,255,255,0.1)'
          }}
        >
          {copied ? 'Copied!' : 'Copy'}
        </button>
      )}
      <SyntaxHighlighter
        language={language}
        style={vscDarkPlus}
        customStyle={{
          margin: 0,
          borderRadius: 'var(--radius-md)',
          fontSize: '0.875rem',
          lineHeight: '1.6',
          paddingRight: showCopy ? '5rem' : undefined,
        }}
      >
        {children}
      </SyntaxHighlighter>
    </div>
  )
}
