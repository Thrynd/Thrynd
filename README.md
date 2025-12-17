<p align="center">
  <a href="https://github.com/Thrynd/Thrynd">
    <img src="https://github.com/Thrynd/Thrynd/blob/main/thrynd.png?raw=true" alt="Thrynd" width="200" height="200">
  </a>
</p>

<h1 align="center">Thrynd</h1>

<p align="center">
  <strong>Modern CSS framework built for the AI age</strong>
</p>

<p align="center">
  Pure CSS. Zero runtime. LLM-optimized documentation.
</p>

<p align="center">
  <a href="https://github.com/Thrynd/Thrynd/stargazers"><img src="https://img.shields.io/github/stars/Thrynd/Thrynd?style=flat-square" alt="GitHub stars"></a>
  <a href="https://www.npmjs.com/package/thrynd"><img src="https://img.shields.io/npm/v/thrynd.svg?style=flat-square" alt="npm version"></a>
  <a href="https://www.npmjs.com/package/thrynd"><img src="https://img.shields.io/npm/dm/thrynd.svg?style=flat-square" alt="npm downloads"></a>
  <a href="https://github.com/Thrynd/Thrynd/blob/main/LICENSE"><img src="https://img.shields.io/npm/l/thrynd.svg?style=flat-square" alt="license"></a>
  <a href="https://bundlephobia.com/package/thrynd"><img src="https://img.shields.io/bundlephobia/minzip/thrynd?style=flat-square" alt="bundle size"></a>
</p>

<p align="center">
  <a href="https://thrynd.dev">Documentation</a> &bull;
  <a href="https://thrynd.dev/playground">Playground</a> &bull;
  <a href="https://thrynd.dev/docs/themes">Themes</a> &bull;
  <a href="https://thrynd.dev/docs/components">Components</a>
</p>

---

## Why Thrynd?

- **Pure CSS, zero runtime** - No JavaScript dependencies, works with React, Vue, Svelte, or vanilla HTML
- **AI-native documentation** - Structured metadata enables accurate code generation from ChatGPT, Claude, and other LLMs
- **6 complete themes** - Switch your entire design system with a single class change
- **Beautiful defaults** - Components look great out of the box, no assembly required
- **Modern CSS** - Built on CSS custom properties, Grid, and Flexbox

## Installation

### npm

```bash
npm install thrynd
```

```js
import 'thrynd';
```

Or import in CSS:

```css
@import 'thrynd';
```

### CDN

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/thrynd@latest/dist/thrynd.min.css">
```

## Quick Start

```html
<body class="theme-modern">
  <div class="container py-8">
    <div class="card-elevated max-w-md mx-auto">
      <div class="card-body">
        <h2 class="text-2xl font-bold mb-4">Welcome</h2>
        <p class="text-muted mb-6">Get started with Thrynd in seconds.</p>
        <button class="btn-primary w-full">Get Started</button>
      </div>
    </div>
  </div>
</body>
```

## Themes

Switch themes instantly with a single class:

| Theme | Class | Description |
|-------|-------|-------------|
| Modern | `theme-modern` | Clean, contemporary design |
| Classic | `theme-classic` | Traditional elegance with serif fonts |
| Minimal | `theme-minimal` | Brutalist, focused simplicity |
| Neon | `theme-neon` | Cyberpunk vibes with electric colors |
| Nature | `theme-nature` | Earthy, organic warmth |
| Corporate | `theme-corporate` | Professional and trustworthy |

```javascript
document.body.className = 'theme-neon';
```

## Components

### Buttons

```html
<button class="btn-primary">Primary</button>
<button class="btn-secondary">Secondary</button>
<button class="btn-danger">Danger</button>
<button class="btn-ghost">Ghost</button>

<button class="btn-primary btn-sm">Small</button>
<button class="btn-primary btn-lg">Large</button>
```

### Cards

```html
<div class="card">
  <div class="card-body">
    <h3 class="card-title">Card Title</h3>
    <p>Card content goes here.</p>
  </div>
</div>

<div class="card-elevated">
  <div class="card-header">Header</div>
  <div class="card-body">Content</div>
  <div class="card-footer">
    <button class="btn-primary">Action</button>
  </div>
</div>
```

### Forms

```html
<form>
  <div class="form-group">
    <label for="email">Email</label>
    <input type="email" id="email" class="form-input" placeholder="you@example.com">
  </div>
  <div class="form-group">
    <label for="password">Password</label>
    <input type="password" id="password" class="form-input">
  </div>
  <button type="submit" class="btn-primary w-full">Sign In</button>
</form>
```

### Alerts and Badges

```html
<div class="alert alert-success">Operation completed successfully.</div>
<div class="alert alert-warning">Please review before continuing.</div>
<div class="alert alert-danger">An error occurred.</div>

<span class="badge badge-primary">New</span>
<span class="badge badge-success">Active</span>
```

## Utilities

Comprehensive utility classes with responsive variants:

```html
<!-- Spacing -->
<div class="m-4 p-6">Margin and padding</div>
<div class="mt-8 px-4">Directional spacing</div>

<!-- Flexbox -->
<div class="flex items-center justify-between gap-4">...</div>

<!-- Grid -->
<div class="grid grid-cols-1 md:grid-cols-3 gap-6">...</div>

<!-- Typography -->
<h1 class="text-4xl font-bold">Heading</h1>
<p class="text-muted text-sm">Subtle text</p>

<!-- Sizing -->
<div class="w-full max-w-lg mx-auto">Centered container</div>
```

### Responsive Prefixes

| Prefix | Breakpoint |
|--------|------------|
| `sm:` | 640px |
| `md:` | 768px |
| `lg:` | 1024px |
| `xl:` | 1280px |
| `2xl:` | 1536px |

```html
<div class="flex flex-col md:flex-row">
  <!-- Stacks vertically on mobile, horizontal on tablet+ -->
</div>
```

## AI-Optimized Documentation

Thrynd documentation is structured for LLM code generation:

- Structured JSON metadata for every component
- Complete code examples with explanatory comments
- Anti-pattern detection with severity levels
- Decision trees for component selection
- Accessibility requirements per component

```
Prompt: "Create a pricing card with Thrynd CSS"
Result: Working, accessible code on first attempt
```

## Framework Integration

### React

```jsx
import 'thrynd';

function App() {
  return (
    <div className="theme-modern">
      <button className="btn-primary">Click me</button>
    </div>
  );
}
```

### Vue

```vue
<script setup>
import 'thrynd';
</script>

<template>
  <div class="theme-modern">
    <button class="btn-primary">Click me</button>
  </div>
</template>
```

### Svelte

```svelte
<script>
  import 'thrynd';
</script>

<div class="theme-modern">
  <button class="btn-primary">Click me</button>
</div>
```

## Bundle Size

| Build | Size |
|-------|------|
| Minified | 79 KB |
| Gzipped | ~10 KB |

Includes 6 themes, 40+ components, and 1000+ utility classes.

## Browser Support

- Chrome and Edge
- Firefox
- Safari

Built on modern CSS features. IE is not supported.

## Development

```bash
git clone https://github.com/Thrynd/Thrynd.git
cd Thrynd
npm install

npm run build       # Build CSS
npm run build:min   # Minified build
npm run dev         # Watch mode
```

## Contributing

Contributions welcome. Please read our [Contributing Guide](CONTRIBUTING.md) before submitting PRs.

- Report bugs via [GitHub Issues](https://github.com/Thrynd/Thrynd/issues)
- Suggest features via [GitHub Discussions](https://github.com/Thrynd/Thrynd/discussions)
- Submit PRs for bug fixes, features, or documentation

## License

[MIT](LICENSE)

---

<p align="center">
  <strong>Built for the AI age</strong><br>
  <sub>Pure CSS. Zero runtime. Beautiful defaults.</sub>
</p>
