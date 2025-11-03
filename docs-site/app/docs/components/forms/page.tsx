import { ComponentPreview } from '../../../components/ComponentPreview'

export default function FormsPage() {
  return (
    <div>
      <h1>Forms</h1>
      <p className="text-xl text-muted mt-4 mb-8">
        Beautiful, accessible form controls including inputs, textareas, selects, checkboxes, and radio buttons.
      </p>

      <h2>Text Inputs</h2>
      <p className="mb-4">
        Use the <code>form-input</code> class for text inputs. Wrap in <code>form-group</code> with a <code>label</code> for proper spacing.
      </p>

      <ComponentPreview
        title="Basic Input"
        code={`<div class="form-group">
  <label for="email">Email</label>
  <input type="email" id="email" class="form-input" placeholder="your@email.com" required>
</div>`}
      >
        <div className="form-group">
          <label htmlFor="email-demo">Email</label>
          <input type="email" id="email-demo" className="form-input" placeholder="your@email.com" required />
        </div>
      </ComponentPreview>

      <h3 className="text-lg font-semibold mt-8 mb-3">Input with Help Text</h3>
      <ComponentPreview
        title="Input with Help Text"
        code={`<div class="form-group">
  <label for="password">Password</label>
  <input type="password" id="password" class="form-input" required>
  <small class="form-help">Must be at least 8 characters long.</small>
</div>`}
      >
        <div className="form-group">
          <label htmlFor="password-demo">Password</label>
          <input type="password" id="password-demo" className="form-input" required />
          <small className="form-help">Must be at least 8 characters long.</small>
        </div>
      </ComponentPreview>

      <h3 className="text-lg font-semibold mt-8 mb-3">Input States</h3>
      <ComponentPreview
        title="Input States"
        code={`<div class="form-group">
  <label for="input-success">Success</label>
  <input type="text" id="input-success" class="form-input form-input-success" value="Valid input">
</div>

<div class="form-group">
  <label for="input-error">Error</label>
  <input type="text" id="input-error" class="form-input form-input-error" value="Invalid input">
  <small class="form-error">This field is required.</small>
</div>

<div class="form-group">
  <label for="input-disabled">Disabled</label>
  <input type="text" id="input-disabled" class="form-input" value="Disabled" disabled>
</div>`}
      >
        <div>
          <div className="form-group">
            <label htmlFor="input-success">Success</label>
            <input type="text" id="input-success" className="form-input form-input-success" defaultValue="Valid input" />
          </div>

          <div className="form-group">
            <label htmlFor="input-error">Error</label>
            <input type="text" id="input-error" className="form-input form-input-error" defaultValue="Invalid input" />
            <small className="form-error">This field is required.</small>
          </div>

          <div className="form-group">
            <label htmlFor="input-disabled">Disabled</label>
            <input type="text" id="input-disabled" className="form-input" defaultValue="Disabled" disabled />
          </div>
        </div>
      </ComponentPreview>

      <h2 className="mt-12">Textarea</h2>
      <p className="mb-4">
        Textareas use the same <code>form-input</code> class as regular inputs.
      </p>

      <ComponentPreview
        title="Textarea"
        code={`<div class="form-group">
  <label for="message">Message</label>
  <textarea id="message" class="form-input" rows="4" placeholder="Your message here..."></textarea>
</div>`}
      >
        <div className="form-group">
          <label htmlFor="message-demo">Message</label>
          <textarea id="message-demo" className="form-input" rows={4} placeholder="Your message here..."></textarea>
        </div>
      </ComponentPreview>

      <h2 className="mt-12">Select</h2>
      <p className="mb-4">
        Dropdown select inputs with consistent styling.
      </p>

      <ComponentPreview
        title="Select"
        code={`<div class="form-group">
  <label for="country">Country</label>
  <select id="country" class="form-select">
    <option>United States</option>
    <option>Canada</option>
    <option>United Kingdom</option>
    <option>Australia</option>
  </select>
</div>`}
      >
        <div className="form-group">
          <label htmlFor="country-demo">Country</label>
          <select id="country-demo" className="form-select">
            <option>United States</option>
            <option>Canada</option>
            <option>United Kingdom</option>
            <option>Australia</option>
          </select>
        </div>
      </ComponentPreview>

      <h2 className="mt-12">Checkboxes</h2>
      <p className="mb-4">
        Custom-styled checkboxes with labels.
      </p>

      <ComponentPreview
        title="Checkboxes"
        code={`<div class="form-group">
  <label class="form-checkbox">
    <input type="checkbox" checked>
    <span>I agree to the terms and conditions</span>
  </label>
  <label class="form-checkbox">
    <input type="checkbox">
    <span>Subscribe to newsletter</span>
  </label>
  <label class="form-checkbox">
    <input type="checkbox" disabled>
    <span>Disabled option</span>
  </label>
</div>`}
      >
        <div className="form-group">
          <label className="form-checkbox">
            <input type="checkbox" defaultChecked />
            <span>I agree to the terms and conditions</span>
          </label>
          <label className="form-checkbox">
            <input type="checkbox" />
            <span>Subscribe to newsletter</span>
          </label>
          <label className="form-checkbox">
            <input type="checkbox" disabled />
            <span>Disabled option</span>
          </label>
        </div>
      </ComponentPreview>

      <h2 className="mt-12">Radio Buttons</h2>
      <p className="mb-4">
        Radio button groups for single selection.
      </p>

      <ComponentPreview
        title="Radio Buttons"
        code={`<div class="form-group">
  <label>Preferred Contact Method</label>
  <label class="form-radio">
    <input type="radio" name="contact" value="email" checked>
    <span>Email</span>
  </label>
  <label class="form-radio">
    <input type="radio" name="contact" value="phone">
    <span>Phone</span>
  </label>
  <label class="form-radio">
    <input type="radio" name="contact" value="sms">
    <span>SMS</span>
  </label>
</div>`}
      >
        <div className="form-group">
          <label>Preferred Contact Method</label>
          <label className="form-radio">
            <input type="radio" name="contact-demo" value="email" defaultChecked />
            <span>Email</span>
          </label>
          <label className="form-radio">
            <input type="radio" name="contact-demo" value="phone" />
            <span>Phone</span>
          </label>
          <label className="form-radio">
            <input type="radio" name="contact-demo" value="sms" />
            <span>SMS</span>
          </label>
        </div>
      </ComponentPreview>

      <h2 className="mt-12">Complete Form Example</h2>
      <p className="mb-4">
        A full contact form demonstrating all form elements together.
      </p>

      <ComponentPreview
        title="Contact Form"
        code={`<form class="card max-w-2xl">
  <div class="card-body">
    <h3 class="card-title mb-6">Contact Us</h3>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div class="form-group">
        <label for="fname">First Name</label>
        <input type="text" id="fname" class="form-input" required>
      </div>

      <div class="form-group">
        <label for="lname">Last Name</label>
        <input type="text" id="lname" class="form-input" required>
      </div>
    </div>

    <div class="form-group">
      <label for="email-full">Email</label>
      <input type="email" id="email-full" class="form-input" required>
    </div>

    <div class="form-group">
      <label for="subject">Subject</label>
      <select id="subject" class="form-select">
        <option>General Inquiry</option>
        <option>Technical Support</option>
        <option>Sales</option>
        <option>Feedback</option>
      </select>
    </div>

    <div class="form-group">
      <label for="message-full">Message</label>
      <textarea id="message-full" class="form-input" rows="4" required></textarea>
    </div>

    <div class="form-group">
      <label class="form-checkbox">
        <input type="checkbox" required>
        <span>I agree to the privacy policy</span>
      </label>
    </div>

    <div class="flex gap-3 justify-end">
      <button type="button" class="btn-ghost">Cancel</button>
      <button type="submit" class="btn-primary">Send Message</button>
    </div>
  </div>
</form>`}
      >
        <form className="card max-w-2xl">
          <div className="card-body">
            <h3 className="card-title mb-6">Contact Us</h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="form-group">
                <label htmlFor="fname">First Name</label>
                <input type="text" id="fname" className="form-input" required />
              </div>

              <div className="form-group">
                <label htmlFor="lname">Last Name</label>
                <input type="text" id="lname" className="form-input" required />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="email-full">Email</label>
              <input type="email" id="email-full" className="form-input" required />
            </div>

            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <select id="subject" className="form-select">
                <option>General Inquiry</option>
                <option>Technical Support</option>
                <option>Sales</option>
                <option>Feedback</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="message-full">Message</label>
              <textarea id="message-full" className="form-input" rows={4} required></textarea>
            </div>

            <div className="form-group">
              <label className="form-checkbox">
                <input type="checkbox" required />
                <span>I agree to the privacy policy</span>
              </label>
            </div>

            <div className="flex gap-3 justify-end">
              <button type="button" className="btn-ghost">Cancel</button>
              <button type="submit" className="btn-primary">Send Message</button>
            </div>
          </div>
        </form>
      </ComponentPreview>

      <h2 className="mt-12">Accessibility</h2>
      <div className="alert alert-primary mb-6">
        <strong>Best Practices:</strong>
        <ul className="mt-2 ml-4" style={{ listStyle: 'disc' }}>
          <li>Always use <code>label</code> elements with <code>for</code> attribute matching input <code>id</code></li>
          <li>Use <code>required</code> attribute for required fields</li>
          <li>Provide helpful error messages with <code>form-error</code> class</li>
          <li>Use appropriate <code>type</code> attributes (email, tel, url, etc.)</li>
          <li>Include <code>autocomplete</code> attributes for better UX</li>
          <li>Ensure sufficient color contrast for all states</li>
        </ul>
      </div>

      <div className="mt-12 pt-8" style={{ borderTop: '1px solid var(--color-border)' }}>
        <div className="flex justify-between">
          <a href="/docs/components/cards" className="btn-ghost">
            ← Cards
          </a>
          <a href="/docs/components/navigation" className="btn-primary">
            Next: Navigation →
          </a>
        </div>
      </div>
    </div>
  )
}
