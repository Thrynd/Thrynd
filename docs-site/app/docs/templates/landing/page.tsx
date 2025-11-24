import { ComponentPreview } from '../../../components/ComponentPreview'
import Link from 'next/link'

export default function LandingTemplatePage() {
  return (
    <div>
      <h1>Landing Page Template</h1>
      <p className="text-xl text-muted mt-4 mb-8">
        Modern landing page with hero section, features, testimonials, and call-to-action.
      </p>

      <div className="alert alert-primary mb-8">
        <strong>Template Includes:</strong>
        <ul className="mt-2 ml-4" style={{ listStyle: 'disc' }}>
          <li>Navigation bar with logo and menu</li>
          <li>Hero section with headline and CTA</li>
          <li>Feature cards with icons</li>
          <li>Testimonials section</li>
          <li>Pricing table</li>
          <li>Footer with links</li>
        </ul>
      </div>

      <h2 className="mb-4">Full Template</h2>

      <ComponentPreview
        title="Complete Landing Page"
        code={`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Product Name - Your Solution</title>
  <link rel="stylesheet" href="path/to/thrynd.css">
</head>
<body class="theme-modern">

  <!-- Navigation -->
  <nav class="bg-white shadow-sm">
    <div class="container">
      <div class="flex items-center justify-between py-4">
        <div class="text-2xl font-bold text-primary">YourLogo</div>
        <div class="flex items-center gap-6">
          <a href="#features" class="text-muted hover:text-primary">Features</a>
          <a href="#pricing" class="text-muted hover:text-primary">Pricing</a>
          <a href="#about" class="text-muted hover:text-primary">About</a>
          <button class="btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  </nav>

  <!-- Hero Section -->
  <section class="py-20 bg-gradient-to-br from-primary to-secondary">
    <div class="container">
      <div class="max-w-3xl mx-auto text-center text-white">
        <h1 class="text-4xl font-bold mb-6">
          Build Amazing Products Faster
        </h1>
        <p class="text-xl mb-8 opacity-90">
          The complete solution for modern web development.
          Ship beautiful, responsive interfaces in record time.
        </p>
        <div class="flex justify-center gap-4">
          <button class="btn-white btn-lg">Start Free Trial</button>
          <button class="btn-ghost btn-lg" style="color: white; border-color: white;">
            View Demo
          </button>
        </div>
      </div>
    </div>
  </section>

  <!-- Features Section -->
  <section id="features" class="py-20">
    <div class="container">
      <div class="text-center mb-12">
        <h2 class="text-3xl font-bold mb-4">Powerful Features</h2>
        <p class="text-xl text-muted max-w-2xl mx-auto">
          Everything you need to build modern web applications
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div class="card text-center">
          <div class="card-body">
            <div class="text-4xl mb-4 font-bold">*</div>
            <h3 class="text-xl font-bold mb-3">Lightning Fast</h3>
            <p class="text-muted">
              Optimized for performance with minimal CSS footprint
            </p>
          </div>
        </div>

        <div class="card text-center">
          <div class="card-body">
            <div class="text-4xl mb-4">🎨</div>
            <h3 class="text-xl font-bold mb-3">Beautiful Themes</h3>
            <p class="text-muted">
              6 stunning themes included, easily customizable
            </p>
          </div>
        </div>

        <div class="card text-center">
          <div class="card-body">
            <div class="text-4xl mb-4">📱</div>
            <h3 class="text-xl font-bold mb-3">Fully Responsive</h3>
            <p class="text-muted">
              Works perfectly on all devices and screen sizes
            </p>
          </div>
        </div>

        <div class="card text-center">
          <div class="card-body">
            <div class="text-4xl mb-4">♿</div>
            <h3 class="text-xl font-bold mb-3">Accessible</h3>
            <p class="text-muted">
              WCAG 2.1 compliant with semantic HTML
            </p>
          </div>
        </div>

        <div class="card text-center">
          <div class="card-body">
            <div class="text-4xl mb-4">🔧</div>
            <h3 class="text-xl font-bold mb-3">Easy to Customize</h3>
            <p class="text-muted">
              CSS variables make theming a breeze
            </p>
          </div>
        </div>

        <div class="card text-center">
          <div class="card-body">
            <div class="text-4xl mb-4">📦</div>
            <h3 class="text-xl font-bold mb-3">No Dependencies</h3>
            <p class="text-muted">
              Pure CSS, no JavaScript required
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Testimonials -->
  <section class="py-20 bg-gray-50">
    <div class="container">
      <div class="text-center mb-12">
        <h2 class="text-3xl font-bold mb-4">What Developers Say</h2>
        <p class="text-xl text-muted">Join thousands of happy users</p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div class="card">
          <div class="card-body">
            <div class="flex items-center gap-3 mb-4">
              <div class="avatar">
                <img src="https://via.placeholder.com/48" alt="User" />
              </div>
              <div>
                <div class="font-semibold">Sarah Johnson</div>
                <div class="text-sm text-muted">Lead Developer</div>
              </div>
            </div>
            <p class="text-sm">
              "Thrynd saved us weeks of development time. The components
              are beautiful and the documentation is excellent."
            </p>
          </div>
        </div>

        <div class="card">
          <div class="card-body">
            <div class="flex items-center gap-3 mb-4">
              <div class="avatar">
                <img src="https://via.placeholder.com/48" alt="User" />
              </div>
              <div>
                <div class="font-semibold">Mike Chen</div>
                <div class="text-sm text-muted">Full Stack Engineer</div>
              </div>
            </div>
            <p class="text-sm">
              "Finally, a CSS framework that's both powerful and easy to use.
              The LLM-friendly docs are a game changer."
            </p>
          </div>
        </div>

        <div class="card">
          <div class="card-body">
            <div class="flex items-center gap-3 mb-4">
              <div class="avatar">
                <img src="https://via.placeholder.com/48" alt="User" />
              </div>
              <div>
                <div class="font-semibold">Emma Davis</div>
                <div class="text-sm text-muted">Product Designer</div>
              </div>
            </div>
            <p class="text-sm">
              "The theming system is incredible. We shipped 3 different
              brand variants in a single afternoon."
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Pricing -->
  <section id="pricing" class="py-20">
    <div class="container">
      <div class="text-center mb-12">
        <h2 class="text-3xl font-bold mb-4">Simple Pricing</h2>
        <p class="text-xl text-muted">Choose the plan that's right for you</p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        <div class="card">
          <div class="card-body">
            <h3 class="text-xl font-bold mb-2">Free</h3>
            <div class="text-3xl font-bold mb-4">$0<span class="text-base font-normal text-muted">/mo</span></div>
            <ul class="space-y-3 mb-6" style="list-style: none; padding: 0;">
              <li>✓ Basic components</li>
              <li>✓ 2 themes</li>
              <li>✓ Community support</li>
              <li>✓ MIT License</li>
            </ul>
            <button class="btn-ghost w-full">Get Started</button>
          </div>
        </div>

        <div class="card card-elevated border-primary" style="border-width: 2px;">
          <div class="card-body">
            <span class="badge badge-primary mb-3">Popular</span>
            <h3 class="text-xl font-bold mb-2">Pro</h3>
            <div class="text-3xl font-bold mb-4">$29<span class="text-base font-normal text-muted">/mo</span></div>
            <ul class="space-y-3 mb-6" style="list-style: none; padding: 0;">
              <li>✓ All components</li>
              <li>✓ 6 themes</li>
              <li>✓ Priority support</li>
              <li>✓ Advanced templates</li>
              <li>✓ Custom themes</li>
            </ul>
            <button class="btn-primary w-full">Start Trial</button>
          </div>
        </div>

        <div class="card">
          <div class="card-body">
            <h3 class="text-xl font-bold mb-2">Enterprise</h3>
            <div class="text-3xl font-bold mb-4">Custom</div>
            <ul class="space-y-3 mb-6" style="list-style: none; padding: 0;">
              <li>✓ Everything in Pro</li>
              <li>✓ Dedicated support</li>
              <li>✓ Custom development</li>
              <li>✓ SLA guarantee</li>
              <li>✓ Training included</li>
            </ul>
            <button class="btn-ghost w-full">Contact Sales</button>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- CTA Section -->
  <section class="py-20 bg-primary text-white">
    <div class="container text-center">
      <h2 class="text-3xl font-bold mb-4">Ready to Get Started?</h2>
      <p class="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
        Join thousands of developers building beautiful applications with Thrynd
      </p>
      <button class="btn-white btn-lg">Start Your Free Trial</button>
    </div>
  </section>

  <!-- Footer -->
  <footer class="py-12 bg-gray-900 text-white">
    <div class="container">
      <div class="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
        <div>
          <div class="text-xl font-bold mb-4">YourLogo</div>
          <p class="text-sm opacity-75">
            Building the future of web development, one component at a time.
          </p>
        </div>
        <div>
          <h4 class="font-semibold mb-4">Product</h4>
          <ul class="space-y-2 text-sm">
            <li><a href="#" class="opacity-75 hover:opacity-100">Features</a></li>
            <li><a href="#" class="opacity-75 hover:opacity-100">Pricing</a></li>
            <li><a href="#" class="opacity-75 hover:opacity-100">Docs</a></li>
            <li><a href="#" class="opacity-75 hover:opacity-100">Updates</a></li>
          </ul>
        </div>
        <div>
          <h4 class="font-semibold mb-4">Company</h4>
          <ul class="space-y-2 text-sm">
            <li><a href="#" class="opacity-75 hover:opacity-100">About</a></li>
            <li><a href="#" class="opacity-75 hover:opacity-100">Blog</a></li>
            <li><a href="#" class="opacity-75 hover:opacity-100">Careers</a></li>
            <li><a href="#" class="opacity-75 hover:opacity-100">Contact</a></li>
          </ul>
        </div>
        <div>
          <h4 class="font-semibold mb-4">Legal</h4>
          <ul class="space-y-2 text-sm">
            <li><a href="#" class="opacity-75 hover:opacity-100">Privacy</a></li>
            <li><a href="#" class="opacity-75 hover:opacity-100">Terms</a></li>
            <li><a href="#" class="opacity-75 hover:opacity-100">License</a></li>
          </ul>
        </div>
      </div>
      <div class="pt-8 border-t border-gray-800 text-center text-sm opacity-75">
        © 2025 YourCompany. All rights reserved.
      </div>
    </div>
  </footer>

</body>
</html>`}
      >
        <div className="bg-gray-100 p-4 rounded text-center">
          <p className="text-muted">Full page template - copy the code to see it in action</p>
        </div>
      </ComponentPreview>

      <h2 className="mt-12 mb-4">Customization Ideas</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="card">
          <div className="card-body">
            <h4 className="font-semibold mb-3">Change Theme</h4>
            <p className="text-sm text-muted mb-3">
              Switch the entire look by changing the body class:
            </p>
            <code className="text-sm">
              &lt;body class="theme-minimal"&gt;
            </code>
          </div>
        </div>

        <div className="card">
          <div className="card-body">
            <h4 className="font-semibold mb-3">Adjust Colors</h4>
            <p className="text-sm text-muted mb-3">
              Modify the gradient colors in the hero:
            </p>
            <code className="text-sm">
              from-primary to-success
            </code>
          </div>
        </div>

        <div className="card">
          <div className="card-body">
            <h4 className="font-semibold mb-3">Add Animations</h4>
            <p className="text-sm text-muted mb-3">
              Make cards interactive with hover effects:
            </p>
            <code className="text-sm">
              hover:scale-105 transition-all
            </code>
          </div>
        </div>

        <div className="card">
          <div className="card-body">
            <h4 className="font-semibold mb-3">Responsive Tweaks</h4>
            <p className="text-sm text-muted mb-3">
              Adjust grid columns for different screens:
            </p>
            <code className="text-sm">
              grid-cols-1 md:grid-cols-2 lg:grid-cols-4
            </code>
          </div>
        </div>
      </div>

      <div className="mt-12 pt-8" style={{ borderTop: '1px solid var(--color-border)' }}>
        <div className="flex justify-between">
          <Link href="/docs/templates" className="btn-ghost">
            ← All Templates
          </Link>
          <Link href="/docs/templates/dashboard" className="btn-primary">
            Next: Dashboard →
          </Link>
        </div>
      </div>
    </div>
  )
}
