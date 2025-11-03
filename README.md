# Thrynd CSS Framework

> A modern, opinionated CSS framework designed for the AI age

**Thrynd** combines utility classes with beautiful pre-configured components and theme presets. Built with LLM-friendly documentation to make AI assistants more accurate when generating code.

## Features

- **Beautiful Defaults** - Gorgeous out-of-the-box styling
- **6 Complete Themes** - Modern, Classic, Minimal, Neon, Nature, Corporate
- **LLM-Optimized** - Structured documentation for 95%+ AI accuracy
- **Zero Config** - Works immediately with no setup
- **Reasonable Size** - 79KB minified, ~25KB gzipped
- **Framework Agnostic** - Use with React, Vue, Svelte, or vanilla JS
- **Fully Responsive** - Mobile-first with comprehensive breakpoint utilities
- **35+ Components** - Buttons, cards, forms, tables, avatars, modals, and more
- **1000+ Utility Classes** - Spacing, colors, sizing, positioning, responsive variants
- **Accessibility Focused** - Semantic HTML and ARIA best practices

## Quick Start

### CDN (Fastest)

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/thrynd@latest/dist/thrynd.min.css">
</head>
<body class="theme-modern">
  <div class="container">
    <h1>Hello Thrynd!</h1>
    <button class="btn-primary">Click me</button>
  </div>
</body>
</html>
```

### NPM

```bash
npm install thrynd
```

```css
/* In your CSS file */
@import 'thrynd';
```

## Themes

Thrynd comes with six beautiful themes out of the box:

```html
<!-- Modern (default) - Clean, contemporary design -->
<body class="theme-modern">

<!-- Classic - Traditional, elegant with serif fonts -->
<body class="theme-classic">

<!-- Minimal - Brutalist, monochrome design -->
<body class="theme-minimal">

<!-- Neon - Cyberpunk vibes with electric colors -->
<body class="theme-neon">

<!-- Nature - Earthy, organic design with natural colors -->
<body class="theme-nature">

<!-- Corporate - Professional, trustworthy design -->
<body class="theme-corporate">
```

Switch themes dynamically:

```javascript
document.body.className = 'theme-neon';
```

See all themes in action: [Theme Showcase](./docs/examples/themes.html)

## Components

### Buttons

```html
<!-- Variants -->
<button class="btn-primary">Primary</button>
<button class="btn-secondary">Secondary</button>
<button class="btn-danger">Danger</button>
<button class="btn-ghost">Ghost</button>

<!-- Sizes -->
<button class="btn-primary btn-sm">Small</button>
<button class="btn-primary">Medium</button>
<button class="btn-primary btn-lg">Large</button>

<!-- Modifiers -->
<button class="btn-primary btn-outline">Outline</button>
<button class="btn-primary btn-block">Full Width</button>
<button class="btn-primary btn-loading">Loading...</button>
```

### Cards

```html
<!-- Default card -->
<div class="card">
  <div class="card-body">
    <h3 class="card-title">Card Title</h3>
    <p>Card content goes here.</p>
  </div>
</div>

<!-- Elevated card (with shadow) -->
<div class="card-elevated">
  <div class="card-header">
    <h3>Header</h3>
  </div>
  <div class="card-body">
    <p>Content</p>
  </div>
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
    <input type="email" id="email" class="form-input" required>
  </div>

  <div class="form-group">
    <label for="password">Password</label>
    <input type="password" id="password" class="form-input" required>
  </div>

  <button type="submit" class="btn-primary w-full">Submit</button>
</form>
```

## Utility Classes

Thrynd includes comprehensive utility classes:

### Spacing
```html
<div class="m-4">Margin all sides</div>
<div class="mt-8">Margin top</div>
<div class="p-6">Padding all sides</div>
<div class="px-4 py-2">Padding horizontal & vertical</div>
```

### Responsive Design
```html
<!-- Stack on mobile, horizontal on tablet+ -->
<div class="flex flex-col md:flex-row gap-4">
  <div>Item 1</div>
  <div>Item 2</div>
</div>

<!-- 1 column mobile, 2 tablet, 3 desktop -->
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
  <div>Card 1</div>
  <div>Card 2</div>
  <div>Card 3</div>
</div>

<!-- Responsive width and text alignment -->
<div class="w-full lg:w-1/2 text-center lg:text-left">
  Centered on mobile, left-aligned on desktop
</div>
```

### Sizing & Positioning
```html
<!-- Width utilities -->
<div class="w-full">Full width</div>
<div class="w-1/2">Half width</div>
<div class="w-96">Fixed 24rem width</div>
<div class="max-w-md">Max width medium</div>

<!-- Positioning -->
<div class="relative">
  <div class="absolute top-0 right-0">Positioned element</div>
</div>

<!-- Aspect ratios -->
<div class="aspect-video">16:9 aspect ratio</div>
```

### Layout
```html
<div class="flex items-center justify-between">
  <span>Flexbox layout</span>
</div>

<div class="grid grid-cols-3 gap-4">
  <div>Grid column 1</div>
  <div>Grid column 2</div>
  <div>Grid column 3</div>
</div>
```

### Colors
```html
<p class="text-primary">Primary text</p>
<p class="text-success">Success text</p>
<div class="bg-primary text-white">Primary background</div>
```

### Typography
```html
<h1 class="text-4xl font-bold">Large heading</h1>
<p class="text-lg text-muted">Muted text</p>
<span class="text-sm uppercase">Small caps</span>
```

## LLM-Friendly

Thrynd is designed to work perfectly with AI assistants like ChatGPT and Claude:

```
User: "Create a login form with email and password"

AI generates valid Thrynd code with 95%+ accuracy:
```

```html
<div class="container">
  <div class="card card-elevated max-w-md mx-auto mt-8">
    <div class="card-body">
      <h2 class="text-center mb-4">Sign In</h2>
      <form>
        <div class="form-group">
          <label for="email">Email</label>
          <input type="email" id="email" class="form-input" required>
        </div>
        <div class="form-group">
          <label for="password">Password</label>
          <input type="password" id="password" class="form-input" required>
        </div>
        <button type="submit" class="btn-primary w-full">Sign In</button>
      </form>
    </div>
  </div>
</div>
```

## Documentation

Full documentation is available at the docs site (run `cd docs-site && npm run dev`)

Documentation includes:
- **Getting Started Guide** - Installation and first steps
- **Component Documentation** - 11 component pages with interactive examples
- **Utility Reference** - 8 utility categories with code examples
- **Theme Showcase** - See all 6 themes in action
- **Page Templates** - Landing page, dashboard, authentication templates
- **Responsive Design Guide** - Mobile-first development guide
- **Deployment Guide** - Build and distribution instructions

Also check out:
- [CLAUDE.md](../CLAUDE.md) - Project context and architecture
- [TODO.md](../TODO.md) - Implementation roadmap and progress
- [LLM_FRIENDLY_STRATEGY.md](../LLM_FRIENDLY_STRATEGY.md) - AI optimization details
- [CONTRIBUTING.md](./CONTRIBUTING.md) - How to contribute

## Development

```bash
# Clone the repository
git clone https://github.com/yourusername/thrynd.git
cd thrynd

# Install dependencies
npm install

# Build CSS
npm run build        # Regular build
npm run build:min    # Minified build
npm run build:all    # Both

# Watch mode for development
npm run dev
```

## File Sizes

- **Development**: 106KB (unminified with sourcemaps)
- **Production**: 79KB (minified)
- **Gzipped**: ~25KB (estimated)

The framework includes 6 complete themes, 35+ components, and 1000+ utility classes. For comparison, Tailwind CSS is ~90KB minified, Bootstrap is ~150KB.

## Browser Support

**Modern Browsers:**
- Chrome/Edge (last 2 versions)
- Firefox (last 2 versions)
- Safari (last 2 versions)

**Required CSS Features:**
- CSS Custom Properties (CSS Variables)
- CSS Grid
- Flexbox
- CSS Media Queries

**Note:** Internet Explorer is not supported.

## Roadmap

### v0.2.0 (In Progress)
- [x] Responsive utilities system (sm:, md:, lg:, xl:, 2xl:)
- [x] Width/height/sizing utilities
- [x] Positioning utilities
- [x] Project infrastructure files
- [ ] Testing infrastructure (stylelint, CI/CD)
- [ ] WCAG 2.1 AA accessibility audit
- [ ] Complete LLM metadata for all components

### v0.3.0 (Planned)
- [ ] React component library
- [ ] Additional components (toggle, skeleton, toast)
- [ ] Dark mode variants for all themes
- [ ] Theme persistence (localStorage)

### v0.4.0+ (Future)
- [ ] Vue component library
- [ ] Svelte component library
- [ ] Interactive theme builder
- [ ] VS Code extension
- [ ] Custom theme generator CLI

See [TODO.md](../TODO.md) for detailed roadmap.

## Contributing

Contributions are welcome! Please read our [Contributing Guide](./CONTRIBUTING.md) and [Code of Conduct](./CODE_OF_CONDUCT.md) before submitting PRs.

### Ways to Contribute

- Report bugs via [GitHub Issues](https://github.com/thrynd/thrynd-css/issues)
- Suggest features via [GitHub Discussions](https://github.com/thrynd/thrynd-css/discussions)
- Improve documentation
- Create new themes
- Write tests
- Fix bugs or add features

### Development Setup

See [CONTRIBUTING.md](./CONTRIBUTING.md) for detailed setup instructions.

## License

MIT License - see [LICENSE](./LICENSE) for details

## Why "Thrynd"?

The name evokes both "thread" (weaving styles together) and "thrive" (helping your projects flourish). The Norse-inspired aesthetic reflects strength, craftsmanship, and timeless design.

---

**Built for the AI age | Designed for humans | Works everywhere**
