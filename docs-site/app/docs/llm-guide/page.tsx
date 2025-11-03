export default function LLMGuide() {
  return (
    <div>
      <h1>LLM Guide</h1>
      <p className="text-xl text-muted mt-4 mb-8">
        Thrynd is the first CSS framework designed specifically for AI assistants. This guide explains how to get the best results when generating Thrynd code with ChatGPT, Claude, or other LLMs.
      </p>

      <div className="alert alert-primary mb-8">
        <strong>🤖 Target Accuracy:</strong> 95%+ correct code generation on the first try. Thrynd's structured documentation helps AI assistants understand exactly how to use each component.
      </div>

      <h2>How It Works</h2>
      <p className="mb-6">
        Thrynd includes a machine-readable component catalog that AI assistants can reference to generate accurate code. This catalog includes:
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="card">
          <div className="card-body">
            <h3 className="font-semibold mb-2">📋 Usage Patterns</h3>
            <p className="text-sm text-muted">
              Clear descriptions of when and how to use each component variant.
            </p>
          </div>
        </div>

        <div className="card">
          <div className="card-body">
            <h3 className="font-semibold mb-2">💡 Code Examples</h3>
            <p className="text-sm text-muted">
              Complete, copy-paste ready examples for every component.
            </p>
          </div>
        </div>

        <div className="card">
          <div className="card-body">
            <h3 className="font-semibold mb-2">⚠️ Anti-Patterns</h3>
            <p className="text-sm text-muted">
              Common mistakes with severity levels to prevent incorrect usage.
            </p>
          </div>
        </div>

        <div className="card">
          <div className="card-body">
            <h3 className="font-semibold mb-2">Accessibility</h3>
            <p className="text-sm text-muted">
              Built-in WCAG requirements for every component.
            </p>
          </div>
        </div>
      </div>

      <h2>Using Thrynd with AI Assistants</h2>

      <h3 className="text-lg font-semibold mt-6 mb-3">Effective Prompts</h3>
      <p className="mb-4">
        When asking an AI assistant to generate Thrynd code, be specific about your requirements:
      </p>

      <div className="card-elevated mb-6">
        <div className="card-body">
          <h4 className="font-semibold text-success mb-3">✓ Good Prompt</h4>
          <div className="code-block">
            <code>Create a login form using Thrynd CSS with email and password fields, a "Remember me" checkbox, and a primary submit button. Use the Modern theme.</code>
          </div>
        </div>
      </div>

      <div className="card-elevated mb-8">
        <div className="card-body">
          <h4 className="font-semibold text-danger mb-3">✗ Less Effective Prompt</h4>
          <div className="code-block">
            <code>Make a form</code>
          </div>
          <p className="text-sm text-muted mt-3">
            Too vague - doesn't specify which CSS framework, what fields, or styling preferences.
          </p>
        </div>
      </div>

      <h3 className="text-lg font-semibold mt-8 mb-3">Component Catalog</h3>
      <p className="mb-4">
        The Thrynd component catalog is available at <code>/components.json</code> and includes structured data for all components:
      </p>

      <div className="code-block">
        <pre><code>{`{
  "button": {
    "name": "Button",
    "category": "form",
    "variants": {
      "primary": {
        "class": "btn-primary",
        "usage": "Main call-to-action, most important action on page",
        "example": "<button class=\\"btn-primary\\">Submit</button>"
      }
    },
    "antiPatterns": [
      {
        "wrong": "btn btn-primary",
        "right": "btn-primary",
        "reason": "Variant classes include base styles",
        "severity": "error"
      }
    ]
  }
}`}</code></pre>
      </div>

      <h2 className="mt-12">Common Use Cases</h2>

      <h3 className="text-lg font-semibold mt-6 mb-3">Building a Dashboard</h3>
      <div className="card-outlined mb-6">
        <div className="card-body">
          <p className="mb-3"><strong>Prompt:</strong></p>
          <p className="text-muted mb-4">
            "Create a dashboard layout using Thrynd CSS with a sidebar navigation, header with user avatar, and a grid of stat cards showing metrics with positive/negative indicators."
          </p>
          <p className="text-sm"><strong>Components used:</strong> Sidebar, Avatar, Stats, Card, Badge</p>
        </div>
      </div>

      <h3 className="text-lg font-semibold mt-6 mb-3">User Profile Page</h3>
      <div className="card-outlined mb-6">
        <div className="card-body">
          <p className="mb-3"><strong>Prompt:</strong></p>
          <p className="text-muted mb-4">
            "Build a user profile page with Thrynd CSS including a large avatar with online status, editable form fields, and save/cancel buttons."
          </p>
          <p className="text-sm"><strong>Components used:</strong> Avatar, Form Input, Buttons, Card</p>
        </div>
      </div>

      <h3 className="text-lg font-semibold mt-6 mb-3">Data Table</h3>
      <div className="card-outlined mb-6">
        <div className="card-body">
          <p className="mb-3"><strong>Prompt:</strong></p>
          <p className="text-muted mb-4">
            "Create a responsive data table using Thrynd CSS with sortable headers, status badges, and action buttons for each row."
          </p>
          <p className="text-sm"><strong>Components used:</strong> Table, Badge, Buttons</p>
        </div>
      </div>

      <h2 className="mt-12">Best Practices</h2>

      <div className="grid grid-cols-1 gap-4 mb-8">
        <div className="alert alert-success">
          <strong>✓ Do:</strong> Mention "Thrynd CSS" explicitly in your prompt
        </div>

        <div className="alert alert-success">
          <strong>✓ Do:</strong> Specify the theme you want to use (Modern, Classic, Minimal, etc.)
        </div>

        <div className="alert alert-success">
          <strong>✓ Do:</strong> Describe the purpose and context of each component
        </div>

        <div className="alert alert-success">
          <strong>✓ Do:</strong> Request accessibility features when needed
        </div>

        <div className="alert alert-warning">
          <strong>⚠ Avoid:</strong> Mixing Thrynd with other CSS frameworks in the same prompt
        </div>

        <div className="alert alert-warning">
          <strong>⚠ Avoid:</strong> Using generic terms like "make it look good" - be specific
        </div>
      </div>

      <h2 className="mt-12">Training Your AI Assistant</h2>
      <p className="mb-4">
        You can improve results by providing the component catalog to your AI assistant:
      </p>

      <div className="card-elevated mb-6">
        <div className="card-body">
          <h4 className="font-semibold mb-3">Example Context</h4>
          <div className="code-block">
            <code>
              I'm using Thrynd CSS framework. When I ask you to create components, use the Thrynd component classes.
              Buttons use: btn-primary, btn-secondary, btn-danger, btn-ghost.
              Cards use: card, card-elevated, card-outlined with card-body, card-header, card-footer.
              Always include accessibility attributes where appropriate.
            </code>
          </div>
        </div>
      </div>

      <h2 className="mt-12">Validation</h2>
      <p className="mb-4">
        AI-generated code should follow these patterns:
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div>
          <h4 className="font-semibold text-success mb-3">✓ Correct Pattern</h4>
          <div className="code-block">
            <pre><code>{`<button class="btn-primary">
  Submit
</button>

<div class="card">
  <div class="card-body">
    Content
  </div>
</div>`}</code></pre>
          </div>
        </div>

        <div>
          <h4 className="font-semibold text-danger mb-3">✗ Incorrect Pattern</h4>
          <div className="code-block">
            <pre><code>{`<button class="btn btn-primary">
  Submit
</button>

<div class="thrynd-card">
  <div class="body">
    Content
  </div>
</div>`}</code></pre>
          </div>
        </div>
      </div>

      <div className="alert alert-primary mt-8">
        <strong>📚 Next Steps:</strong> Try the <a href="/playground" className="font-semibold underline">Interactive Playground</a> to experiment with AI-generated code or browse the <a href="/docs/components" className="font-semibold underline">Component Documentation</a> for detailed examples.
      </div>

      <div className="mt-12 pt-8" style={{ borderTop: '1px solid var(--color-border)' }}>
        <div className="flex justify-between">
          <a href="/docs/utilities" className="btn-ghost">
            ← Utilities
          </a>
          <a href="/playground" className="btn-primary">
            Try Playground →
          </a>
        </div>
      </div>
    </div>
  )
}
