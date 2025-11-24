'use client'

import { useState } from 'react'
import { CodeBlock } from './CodeBlock'

interface ComponentPreviewProps {
  children: React.ReactNode
  code: string
  title?: string
  language?: string
}

export function ComponentPreview({ children, code, title, language = 'html' }: ComponentPreviewProps) {
  // Default to 'code' tab if there's no preview content
  const hasPreview = children !== undefined && children !== null
  const [activeTab, setActiveTab] = useState<'preview' | 'code'>(hasPreview ? 'preview' : 'code')

  return (
    <div className="preview-container">
      {title && (
        <div style={{ padding: '1rem 1.5rem', borderBottom: '1px solid var(--color-border)', background: 'var(--color-surface, var(--color-gray-50))' }}>
          <h4 className="font-semibold">{title}</h4>
        </div>
      )}

      {hasPreview && (
        <div className="preview-tabs">
          <button
            className={`preview-tab ${activeTab === 'preview' ? 'active' : ''}`}
            onClick={() => setActiveTab('preview')}
          >
            Preview
          </button>
          <button
            className={`preview-tab ${activeTab === 'code' ? 'active' : ''}`}
            onClick={() => setActiveTab('code')}
          >
            Code
          </button>
        </div>
      )}

      {activeTab === 'preview' && hasPreview ? (
        <div className="preview-content">
          {children}
        </div>
      ) : (
        <div className="preview-code" style={{ margin: 0 }}>
          <CodeBlock language={language}>{code}</CodeBlock>
        </div>
      )}
    </div>
  )
}
