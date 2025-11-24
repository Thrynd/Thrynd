import { ComponentPreview } from '../../../components/ComponentPreview'
import Link from 'next/link'

export default function AuthTemplatePage() {
  return (
    <div>
      <h1>Authentication Template</h1>
      <p className="text-xl text-muted mt-4 mb-8">
        Login and signup forms with validation states and social authentication options.
      </p>

      <div className="alert alert-primary mb-8">
        <strong>Template Includes:</strong>
        <ul className="mt-2 ml-4" style={{ listStyle: 'disc' }}>
          <li>Modern login form</li>
          <li>Sign up with email verification</li>
          <li>Social authentication buttons</li>
          <li>Forgot password flow</li>
          <li>Form validation states</li>
          <li>Remember me checkbox</li>
        </ul>
      </div>

      <h2 className="mb-4">Login Page</h2>

      <ComponentPreview
        title="Login Form"
        code={`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Login - Your App</title>
  <link rel="stylesheet" href="path/to/thrynd.css">
  <style>
    .auth-container {
      min-height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
      background: linear-gradient(135deg, var(--color-primary) 0%, var(--color-secondary) 100%);
      padding: 2rem;
    }
    .auth-card {
      width: 100%;
      max-width: 420px;
    }
  </style>
</head>
<body class="theme-modern">

  <div class="auth-container">
    <div class="auth-card">
      <div class="card">
        <div class="card-body">
          <!-- Header -->
          <div class="text-center mb-8">
            <h1 class="text-3xl font-bold mb-2">Welcome Back</h1>
            <p class="text-muted">Sign in to your account to continue</p>
          </div>

          <!-- Social Login -->
          <div class="space-y-3 mb-6">
            <button class="btn-ghost w-full flex items-center justify-center gap-3">
              <svg width="20" height="20" viewBox="0 0 20 20">
                <path fill="#4285F4" d="M19.6 10.23c0-.82-.1-1.42-.25-2.05H10v3.72h5.5c-.15.96-.74 2.31-2.04 3.22v2.45h3.16c1.89-1.73 2.98-4.3 2.98-7.34z"/>
                <path fill="#34A853" d="M13.46 15.13c-.83.59-1.96 1-3.46 1-2.64 0-4.88-1.74-5.68-4.15H1.07v2.52C2.72 17.75 6.09 20 10 20c2.7 0 4.96-.89 6.62-2.42l-3.16-2.45z"/>
                <path fill="#FBBC05" d="M3.99 10c0-.69.12-1.35.32-1.97V5.51H1.07A9.973 9.973 0 000 10c0 1.61.39 3.14 1.07 4.49l3.24-2.52c-.2-.62-.32-1.28-.32-1.97z"/>
                <path fill="#EA4335" d="M10 3.88c1.88 0 3.13.81 3.85 1.48l2.84-2.76C14.96.99 12.7 0 10 0 6.09 0 2.72 2.25 1.07 5.51l3.24 2.52C5.12 5.62 7.36 3.88 10 3.88z"/>
              </svg>
              Continue with Google
            </button>

            <button class="btn-ghost w-full flex items-center justify-center gap-3">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="#1877F2">
                <path d="M20 10c0-5.523-4.477-10-10-10S0 4.477 0 10c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V10h2.54V7.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V10h2.773l-.443 2.89h-2.33v6.988C16.343 19.128 20 14.991 20 10z"/>
              </svg>
              Continue with Facebook
            </button>
          </div>

          <div class="flex items-center gap-4 mb-6">
            <div class="flex-1 border-t"></div>
            <span class="text-sm text-muted">OR</span>
            <div class="flex-1 border-t"></div>
          </div>

          <!-- Login Form -->
          <form>
            <div class="form-group">
              <label class="form-label">Email address</label>
              <input
                type="email"
                class="form-input"
                placeholder="you@example.com"
                required
              />
            </div>

            <div class="form-group">
              <div class="flex justify-between mb-2">
                <label class="form-label">Password</label>
                <a href="#" class="text-sm text-primary hover:underline">
                  Forgot password?
                </a>
              </div>
              <input
                type="password"
                class="form-input"
                placeholder="Enter your password"
                required
              />
            </div>

            <div class="form-group">
              <label class="flex items-center gap-2">
                <input type="checkbox" class="form-checkbox" />
                <span class="text-sm">Remember me for 30 days</span>
              </label>
            </div>

            <button type="submit" class="btn-primary w-full mb-4">
              Sign In
            </button>

            <p class="text-center text-sm text-muted">
              Don't have an account?
              <a href="#" class="text-primary font-semibold hover:underline ml-1">
                Sign up
              </a>
            </p>
          </form>
        </div>
      </div>

      <!-- Footer -->
      <p class="text-center text-sm text-white mt-6 opacity-90">
        By signing in, you agree to our
        <a href="#" class="underline">Terms</a> and
        <a href="#" class="underline">Privacy Policy</a>
      </p>
    </div>
  </div>

</body>
</html>`}
      >
        <div className="bg-gray-100 p-4 rounded text-center">
          <p className="text-muted">Full login page template - copy the code to see it in action</p>
        </div>
      </ComponentPreview>

      <h2 className="mt-12 mb-4">Sign Up Page</h2>

      <ComponentPreview
        title="Registration Form"
        code={`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Sign Up - Your App</title>
  <link rel="stylesheet" href="path/to/thrynd.css">
  <style>
    .auth-container {
      min-height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
      background: linear-gradient(135deg, var(--color-primary) 0%, var(--color-secondary) 100%);
      padding: 2rem;
    }
    .auth-card {
      width: 100%;
      max-width: 420px;
    }
  </style>
</head>
<body class="theme-modern">

  <div class="auth-container">
    <div class="auth-card">
      <div class="card">
        <div class="card-body">
          <!-- Header -->
          <div class="text-center mb-8">
            <h1 class="text-3xl font-bold mb-2">Create Account</h1>
            <p class="text-muted">Start your 14-day free trial</p>
          </div>

          <!-- Sign Up Form -->
          <form>
            <div class="grid grid-cols-2 gap-4">
              <div class="form-group">
                <label class="form-label">First name</label>
                <input
                  type="text"
                  class="form-input"
                  placeholder="John"
                  required
                />
              </div>

              <div class="form-group">
                <label class="form-label">Last name</label>
                <input
                  type="text"
                  class="form-input"
                  placeholder="Doe"
                  required
                />
              </div>
            </div>

            <div class="form-group">
              <label class="form-label">Email address</label>
              <input
                type="email"
                class="form-input"
                placeholder="you@example.com"
                required
              />
              <span class="form-hint">We'll never share your email</span>
            </div>

            <div class="form-group">
              <label class="form-label">Password</label>
              <input
                type="password"
                class="form-input"
                placeholder="Create a strong password"
                required
              />
              <span class="form-hint">Must be at least 8 characters</span>
            </div>

            <div class="form-group">
              <label class="form-label">Confirm password</label>
              <input
                type="password"
                class="form-input"
                placeholder="Re-enter your password"
                required
              />
            </div>

            <div class="form-group">
              <label class="flex items-start gap-2">
                <input type="checkbox" class="form-checkbox mt-1" required />
                <span class="text-sm">
                  I agree to the <a href="#" class="text-primary hover:underline">Terms of Service</a>
                  and <a href="#" class="text-primary hover:underline">Privacy Policy</a>
                </span>
              </label>
            </div>

            <button type="submit" class="btn-primary w-full mb-4">
              Create Account
            </button>

            <p class="text-center text-sm text-muted">
              Already have an account?
              <a href="#" class="text-primary font-semibold hover:underline ml-1">
                Sign in
              </a>
            </p>
          </form>
        </div>
      </div>

      <!-- Footer -->
      <p class="text-center text-sm text-white mt-6 opacity-90">
        Protected by reCAPTCHA
      </p>
    </div>
  </div>

</body>
</html>`}
      >
        <div className="bg-gray-100 p-4 rounded text-center">
          <p className="text-muted">Full sign up page template - copy the code to see it in action</p>
        </div>
      </ComponentPreview>

      <h2 className="mt-12 mb-4">Forgot Password</h2>

      <ComponentPreview
        title="Password Reset Form"
        code={`<div class="auth-container">
  <div class="auth-card">
    <div class="card">
      <div class="card-body">
        <!-- Header -->
        <div class="text-center mb-8">
          <div class="text-4xl mb-4">🔑</div>
          <h1 class="text-3xl font-bold mb-2">Reset Password</h1>
          <p class="text-muted">
            Enter your email and we'll send you a link to reset your password
          </p>
        </div>

        <!-- Reset Form -->
        <form>
          <div class="form-group">
            <label class="form-label">Email address</label>
            <input
              type="email"
              class="form-input"
              placeholder="you@example.com"
              required
            />
          </div>

          <button type="submit" class="btn-primary w-full mb-4">
            Send Reset Link
          </button>

          <p class="text-center text-sm text-muted">
            <a href="#" class="text-primary hover:underline">
              ← Back to login
            </a>
          </p>
        </form>
      </div>
    </div>
  </div>
</div>`}
      >
        <div className="bg-gray-100 p-4 rounded text-center">
          <p className="text-muted">Password reset form template</p>
        </div>
      </ComponentPreview>

      <h2 className="mt-12 mb-4">Form Validation</h2>

      <ComponentPreview
        title="Validation States"
        code={`<!-- Success State -->
<div class="form-group">
  <label class="form-label">Email address</label>
  <input
    type="email"
    class="form-input is-valid"
    value="john@example.com"
  />
  <span class="form-feedback text-success">✓ Email is available</span>
</div>

<!-- Error State -->
<div class="form-group">
  <label class="form-label">Password</label>
  <input
    type="password"
    class="form-input is-invalid"
    value="123"
  />
  <span class="form-feedback text-danger">
    Password must be at least 8 characters
  </span>
</div>

<!-- Warning State -->
<div class="form-group">
  <label class="form-label">Username</label>
  <input
    type="text"
    class="form-input"
    value="user123"
    style="border-color: var(--color-warning);"
  />
  <span class="form-hint text-warning">
    This username is similar to existing ones
  </span>
</div>`}
      >
        <div>
          <div className="form-group">
            <label className="form-label">Email address</label>
            <input
              type="email"
              className="form-input is-valid"
              defaultValue="john@example.com"
            />
            <span className="form-feedback text-success">✓ Email is available</span>
          </div>

          <div className="form-group">
            <label className="form-label">Password</label>
            <input
              type="password"
              className="form-input is-invalid"
              defaultValue="123"
            />
            <span className="form-feedback text-danger">
              Password must be at least 8 characters
            </span>
          </div>

          <div className="form-group">
            <label className="form-label">Username</label>
            <input
              type="text"
              className="form-input"
              defaultValue="user123"
              style={{ borderColor: 'var(--color-warning)' }}
            />
            <span className="form-hint text-warning">
              This username is similar to existing ones
            </span>
          </div>
        </div>
      </ComponentPreview>

      <h2 className="mt-12 mb-4">Security Best Practices</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="card">
          <div className="card-body">
            <h4 className="font-semibold mb-3">🔒 Password Requirements</h4>
            <ul className="text-sm text-muted space-y-1" style={{ listStyle: 'disc', paddingLeft: '1.5rem' }}>
              <li>Minimum 8 characters</li>
              <li>At least one uppercase letter</li>
              <li>At least one number</li>
              <li>At least one special character</li>
            </ul>
          </div>
        </div>

        <div className="card">
          <div className="card-body">
            <h4 className="font-semibold mb-3">Email Verification</h4>
            <p className="text-sm text-muted">
              Always verify email addresses before granting full access. Send a confirmation link that expires after 24 hours.
            </p>
          </div>
        </div>

        <div className="card">
          <div className="card-body">
            <h4 className="font-semibold mb-3">CSRF Protection</h4>
            <p className="text-sm text-muted">
              Include CSRF tokens in all forms to prevent cross-site request forgery attacks.
            </p>
          </div>
        </div>

        <div className="card">
          <div className="card-body">
            <h4 className="font-semibold mb-3">🔐 Two-Factor Auth</h4>
            <p className="text-sm text-muted">
              Offer 2FA as an option for enhanced security. Support authenticator apps and SMS backup.
            </p>
          </div>
        </div>
      </div>

      <div className="mt-12 pt-8" style={{ borderTop: '1px solid var(--color-border)' }}>
        <div className="flex justify-between">
          <Link href="/docs/templates/dashboard" className="btn-ghost">
            ← Dashboard
          </Link>
          <Link href="/docs/templates" className="btn-primary">
            All Templates →
          </Link>
        </div>
      </div>
    </div>
  )
}
