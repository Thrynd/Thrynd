import { ComponentPreview } from '../../../components/ComponentPreview'

export default function TypographyPage() {
  const fontSizes = [
    { class: 'xs', value: '0.75rem', pixels: '12px' },
    { class: 'sm', value: '0.875rem', pixels: '14px' },
    { class: 'base', value: '1rem', pixels: '16px' },
    { class: 'lg', value: '1.125rem', pixels: '18px' },
    { class: 'xl', value: '1.25rem', pixels: '20px' },
    { class: '2xl', value: '1.5rem', pixels: '24px' },
    { class: '3xl', value: '1.875rem', pixels: '30px' },
    { class: '4xl', value: '2.25rem', pixels: '36px' },
  ]

  return (
    <div>
      <h1>Typography Utilities</h1>
      <p className="text-xl text-muted mt-4 mb-8">
        Font size, weight, alignment, and text transformation utilities for precise typography control.
      </p>

      <h2>Font Sizes</h2>
      <p className="mb-6">
        A consistent type scale from extra small to 4xl.
      </p>

      <div className="table-responsive mb-12">
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>Class</th>
              <th>Value</th>
              <th>Pixels</th>
              <th>Preview</th>
            </tr>
          </thead>
          <tbody>
            {fontSizes.map((size) => (
              <tr key={size.class}>
                <td><code>text-{size.class}</code></td>
                <td>{size.value}</td>
                <td>{size.pixels}</td>
                <td><span className={`text-${size.class}`}>The quick brown fox</span></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <ComponentPreview
        title="Font Size Examples"
        code={`<p class="text-xs">Extra small text (12px)</p>
<p class="text-sm">Small text (14px)</p>
<p class="text-base">Base text (16px)</p>
<p class="text-lg">Large text (18px)</p>
<p class="text-xl">Extra large text (20px)</p>
<p class="text-2xl">2XL text (24px)</p>
<p class="text-3xl">3XL text (30px)</p>
<p class="text-4xl">4XL text (36px)</p>`}
      >
        <div className="space-y-2">
          <p className="text-xs">Extra small text (12px)</p>
          <p className="text-sm">Small text (14px)</p>
          <p className="text-base">Base text (16px)</p>
          <p className="text-lg">Large text (18px)</p>
          <p className="text-xl">Extra large text (20px)</p>
          <p className="text-2xl">2XL text (24px)</p>
          <p className="text-3xl">3XL text (30px)</p>
          <p className="text-4xl">4XL text (36px)</p>
        </div>
      </ComponentPreview>

      <h2 className="mt-12">Font Weight</h2>
      <p className="mb-4">
        Control the thickness of text with font weight utilities.
      </p>

      <ComponentPreview
        title="Font Weights"
        code={`<p class="font-normal">Normal weight (400)</p>
<p class="font-medium">Medium weight (500)</p>
<p class="font-semibold">Semibold weight (600)</p>
<p class="font-bold">Bold weight (700)</p>`}
      >
        <div className="space-y-2">
          <p className="font-normal">Normal weight (400)</p>
          <p className="font-medium">Medium weight (500)</p>
          <p className="font-semibold">Semibold weight (600)</p>
          <p className="font-bold">Bold weight (700)</p>
        </div>
      </ComponentPreview>

      <h2 className="mt-12">Text Alignment</h2>
      <p className="mb-4">
        Align text to the left, center, right, or justify.
      </p>

      <ComponentPreview
        title="Text Alignment"
        code={`<p class="text-left">Left aligned text</p>
<p class="text-center">Center aligned text</p>
<p class="text-right">Right aligned text</p>
<p class="text-justify">Justified text that will wrap and align evenly on both sides when it spans multiple lines.</p>`}
      >
        <div className="space-y-2">
          <p className="text-left">Left aligned text</p>
          <p className="text-center">Center aligned text</p>
          <p className="text-right">Right aligned text</p>
          <p className="text-justify">Justified text that will wrap and align evenly on both sides when it spans multiple lines.</p>
        </div>
      </ComponentPreview>

      <h2 className="mt-12">Text Transform</h2>
      <p className="mb-4">
        Transform text case with uppercase, lowercase, or capitalize utilities.
      </p>

      <ComponentPreview
        title="Text Transformations"
        code={`<p class="uppercase">uppercase text</p>
<p class="lowercase">LOWERCASE TEXT</p>
<p class="capitalize">capitalize each word</p>
<p class="normal-case">Normal Case Text</p>`}
      >
        <div className="space-y-2">
          <p className="uppercase">uppercase text</p>
          <p className="lowercase">LOWERCASE TEXT</p>
          <p className="capitalize">capitalize each word</p>
          <p className="normal-case">Normal Case Text</p>
        </div>
      </ComponentPreview>

      <h2 className="mt-12">Text Decoration</h2>
      <p className="mb-4">
        Add or remove text decorations like underline and line-through.
      </p>

      <ComponentPreview
        title="Text Decorations"
        code={`<p class="underline">Underlined text</p>
<p class="line-through">Strikethrough text</p>
<p class="no-underline">No underline text</p>`}
      >
        <div className="space-y-2">
          <p className="underline">Underlined text</p>
          <p className="line-through">Strikethrough text</p>
          <p className="no-underline">No underline text</p>
        </div>
      </ComponentPreview>

      <h2 className="mt-12">Line Height</h2>
      <p className="mb-4">
        Control the vertical spacing between lines of text.
      </p>

      <ComponentPreview
        title="Line Heights"
        code={`<p class="leading-tight">
  Tight line height. This text has reduced spacing between lines making it more compact. Good for headings.
</p>

<p class="leading-normal">
  Normal line height. This text has standard spacing between lines for comfortable reading. Good for body text.
</p>

<p class="leading-relaxed">
  Relaxed line height. This text has increased spacing between lines for better readability. Good for long-form content.
</p>`}
      >
        <div className="space-y-4">
          <p className="leading-tight">
            Tight line height. This text has reduced spacing between lines making it more compact. Good for headings.
          </p>

          <p className="leading-normal">
            Normal line height. This text has standard spacing between lines for comfortable reading. Good for body text.
          </p>

          <p className="leading-relaxed">
            Relaxed line height. This text has increased spacing between lines for better readability. Good for long-form content.
          </p>
        </div>
      </ComponentPreview>

      <h2 className="mt-12">Text Truncation</h2>
      <p className="mb-4">
        Truncate text with ellipsis when it overflows.
      </p>

      <ComponentPreview
        title="Text Overflow"
        code={`<div class="max-w-xs">
  <p class="truncate">
    This is a very long text that will be truncated with an ellipsis when it overflows its container
  </p>
</div>

<div class="max-w-xs">
  <p class="overflow-ellipsis">
    This text will also truncate with ellipsis when too long
  </p>
</div>`}
      >
        <div className="space-y-4">
          <div className="max-w-xs">
            <p className="truncate">
              This is a very long text that will be truncated with an ellipsis when it overflows its container
            </p>
          </div>

          <div className="max-w-xs">
            <p className="overflow-ellipsis">
              This text will also truncate with ellipsis when too long
            </p>
          </div>
        </div>
      </ComponentPreview>

      <h2 className="mt-12">Common Patterns</h2>

      <h3 className="text-lg font-semibold mt-6 mb-3">Heading Hierarchy</h3>
      <ComponentPreview
        title="Typography Hierarchy"
        code={`<h1 class="text-4xl font-bold mb-4">Main Heading</h1>
<h2 class="text-3xl font-bold mb-3">Section Heading</h2>
<h3 class="text-2xl font-semibold mb-3">Subsection Heading</h3>
<p class="text-base leading-relaxed mb-4">
  Body text with relaxed line height for comfortable reading.
</p>
<p class="text-sm text-muted">
  Small muted text for captions or secondary information.
</p>`}
      >
        <div>
          <h1 className="text-4xl font-bold mb-4">Main Heading</h1>
          <h2 className="text-3xl font-bold mb-3">Section Heading</h2>
          <h3 className="text-2xl font-semibold mb-3">Subsection Heading</h3>
          <p className="text-base leading-relaxed mb-4">
            Body text with relaxed line height for comfortable reading.
          </p>
          <p className="text-sm text-muted">
            Small muted text for captions or secondary information.
          </p>
        </div>
      </ComponentPreview>

      <h3 className="text-lg font-semibold mt-8 mb-3">Card Typography</h3>
      <ComponentPreview
        title="Card with Typography Utilities"
        code={`<div class="card max-w-md">
  <div class="card-body">
    <h3 class="text-xl font-bold mb-2">Article Title</h3>
    <p class="text-sm text-muted uppercase mb-3">Posted on Jan 15, 2024</p>
    <p class="text-base leading-relaxed mb-4">
      This is the article excerpt that provides a preview of the content.
    </p>
    <a href="#" class="text-primary font-semibold underline">Read more →</a>
  </div>
</div>`}
      >
        <div className="card max-w-md">
          <div className="card-body">
            <h3 className="text-xl font-bold mb-2">Article Title</h3>
            <p className="text-sm text-muted uppercase mb-3">Posted on Jan 15, 2024</p>
            <p className="text-base leading-relaxed mb-4">
              This is the article excerpt that provides a preview of the content.
            </p>
            <a href="#" className="text-primary font-semibold underline">Read more →</a>
          </div>
        </div>
      </ComponentPreview>

      <h2 className="mt-12">Accessibility</h2>
      <div className="alert alert-primary mb-6">
        <strong>Best Practices:</strong>
        <ul className="mt-2 ml-4" style={{ listStyle: 'disc' }}>
          <li>Use semantic HTML headings (h1-h6) for document structure</li>
          <li>Maintain a logical heading hierarchy</li>
          <li>Ensure minimum font size of 16px for body text</li>
          <li>Use sufficient line height (1.5 or more) for readability</li>
          <li>Avoid all-caps for long text passages</li>
          <li>Don't rely solely on text formatting for meaning</li>
        </ul>
      </div>

      <div className="mt-12 pt-8" style={{ borderTop: '1px solid var(--color-border)' }}>
        <div className="flex justify-between">
          <a href="/docs/utilities/colors" className="btn-ghost">
            ← Colors
          </a>
          <a href="/docs/utilities/layout" className="btn-primary">
            Next: Layout →
          </a>
        </div>
      </div>
    </div>
  )
}
