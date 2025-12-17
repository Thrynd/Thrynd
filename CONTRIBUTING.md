# Contributing to Thrynd

Thank you for your interest in contributing to Thrynd. This guide will help you get started.

## Code of Conduct

This project follows our [Code of Conduct](CODE_OF_CONDUCT.md). By participating, you agree to uphold a welcoming and inclusive environment.

## How to Contribute

### Reporting Bugs

Before submitting a bug report:

1. Check existing [issues](https://github.com/Thrynd/Thrynd/issues) to avoid duplicates
2. Use the latest version of Thrynd
3. Create a minimal reproduction case

When reporting, include:

- Thrynd version
- Browser and version
- Steps to reproduce
- Expected vs actual behavior
- Screenshots if applicable

### Suggesting Features

Feature requests are welcome. Open a [discussion](https://github.com/Thrynd/Thrynd/discussions) first to gather feedback before submitting a PR.

### Pull Requests

1. Fork the repository
2. Create a feature branch from `main`
3. Make your changes
4. Run the build and verify changes work
5. Submit a PR with a clear description

## Development Setup

```bash
git clone https://github.com/Thrynd/Thrynd.git
cd Thrynd
npm install
```

### Commands

```bash
npm run build       # Build CSS
npm run build:min   # Minified build
npm run dev         # Watch mode
```

### Project Structure

```
src/
├── core/           # Reset, typography, layout
├── utilities/      # Utility classes
├── components/     # Component styles
├── themes/         # Theme definitions
└── index.css       # Main entry point
```

## CSS Guidelines

### Custom Properties

Use CSS custom properties for all themeable values:

```css
/* Good */
.btn-primary {
  background: var(--color-primary);
  border-radius: var(--radius-md);
}

/* Avoid */
.btn-primary {
  background: #3b82f6;
  border-radius: 6px;
}
```

### Naming Conventions

- **Components**: Noun-based (`btn`, `card`, `modal`)
- **Variants**: Component-adjective (`btn-primary`, `card-elevated`)
- **Modifiers**: Component-property (`btn-sm`, `btn-lg`)
- **Utilities**: Property-value (`text-center`, `m-4`, `bg-blue-500`)

### Component Annotations

Add `@thrynd` annotations for LLM documentation:

```css
/**
 * @thrynd component button
 * @description Interactive button element
 * @category form
 */
.btn { ... }

/**
 * @thrynd variant primary
 * @parent button
 * @class btn-primary
 * @usage Main call-to-action
 * @example <button class="btn-primary">Submit</button>
 */
.btn-primary { ... }
```

## Commit Messages

All commits must follow these rules:

- Single line only
- No punctuation at end
- No colons or dashes as separators
- No parentheses
- Present tense imperative

### Examples

Good:
```
Add dark theme support
Fix button hover state on mobile
Update typography scale
Remove deprecated utility classes
```

Bad:
```
Added dark theme support.
Fix button hover state (mobile only)
Update typography - new scale
fix: button hover state
```

## Pull Request Process

1. Ensure your PR includes only related changes
2. Update documentation if adding features
3. Add component annotations for new components
4. Verify all themes render correctly
5. Keep PRs focused and reasonably sized

## Testing

Before submitting:

1. Build the CSS successfully
2. Test in Chrome, Firefox, and Safari
3. Verify all six themes work correctly
4. Check responsive behavior
5. Test with screen readers for accessibility

## Questions

Open a [discussion](https://github.com/Thrynd/Thrynd/discussions) for questions about contributing or the codebase.
