# Accessibility Testing

Automated accessibility testing for Thrynd CSS Framework using axe-core and pa11y.

## Overview

This test suite validates WCAG 2.1 AA compliance across all six themes and 35+ components.

## Tools

- **Playwright** - Browser automation
- **axe-core** - Accessibility testing engine by Deque
- **pa11y** - Automated accessibility testing tool
- **pa11y-ci** - CI-compatible pa11y runner

## Running Tests

### Full Test Suite (All Themes)

```bash
npm run test:a11y
```

This runs the complete test suite across all 6 themes:
- Modern
- Classic
- Minimal
- Neon
- Nature
- Corporate

### Quick Test with pa11y-ci

```bash
npm run test:a11y:ci
```

### Manual Testing

To test a specific component manually:

1. Open `test-page.html` in a browser
2. Use browser DevTools accessibility panel
3. Run axe DevTools extension

## Test Coverage

The test suite validates:

### Components Tested

- ✅ Buttons (all variants)
- ✅ Forms (inputs, select, textarea, checkbox)
- ✅ Cards
- ✅ Alerts (all severity levels)
- ✅ Navigation (navbar, breadcrumbs)
- ✅ Tables (with proper headers and captions)
- ✅ Badges
- ✅ Avatars
- ✅ Dropdowns
- ✅ Modals

### WCAG 2.1 AA Criteria

- **Perceivable**
  - Text alternatives (1.1.1)
  - Color contrast (1.4.3)
  - Resize text (1.4.4)
  - Images of text (1.4.5)
  - Reflow (1.4.10)
  - Non-text contrast (1.4.11)

- **Operable**
  - Keyboard accessible (2.1.1, 2.1.2)
  - Focus visible (2.4.7)
  - Link purpose (2.4.4)

- **Understandable**
  - Language of page (3.1.1)
  - On input (3.2.2)
  - Error identification (3.3.1)
  - Labels or instructions (3.3.2)

- **Robust**
  - Parsing (4.1.1)
  - Name, role, value (4.1.2)
  - Status messages (4.1.3)

## Test Results

Results are saved to `tests/accessibility/results/` with timestamps.

### Result Format

```json
{
  "timestamp": "2025-01-XX...",
  "summary": {
    "total": 6,
    "passed": 6,
    "failed": 0
  },
  "themes": {
    "theme-modern": {
      "passed": true,
      "violationCount": 0,
      "violations": []
    }
  }
}
```

### Interpreting Results

- **Impact Levels**: critical, serious, moderate, minor
- **WCAG Level**: A, AA, AAA
- **Node**: Specific HTML element with issue

## Adding New Tests

To test additional components:

1. Add component HTML to `test-page.html`
2. Ensure proper semantic HTML and ARIA attributes
3. Run test suite
4. Fix any violations

### Example Component Addition

```html
<section aria-labelledby="new-component-heading">
  <h2 id="new-component-heading">New Component</h2>
  <!-- Component markup -->
</section>
```

## Common Issues and Fixes

### Color Contrast

**Issue**: Text doesn't meet 4.5:1 contrast ratio
**Fix**: Adjust theme color variables in `src/themes/`

### Missing Labels

**Issue**: Form inputs without associated labels
**Fix**: Add proper `<label>` elements with `for` attribute

### Keyboard Navigation

**Issue**: Interactive elements not keyboard accessible
**Fix**: Ensure proper `tabindex` and focus states

### ARIA Attributes

**Issue**: Missing or incorrect ARIA attributes
**Fix**: Add appropriate `role`, `aria-label`, `aria-labelledby`

## CI/CD Integration

Tests run automatically on:
- Pull requests
- Push to main/develop branches

See `.github/workflows/ci.yml` for configuration.

## Manual Accessibility Checklist

In addition to automated tests, perform manual testing:

- [ ] Test with screen reader (NVDA, JAWS, VoiceOver)
- [ ] Verify keyboard navigation (Tab, Shift+Tab, Enter, Space, Esc)
- [ ] Test with browser zoom at 200%
- [ ] Verify focus indicators are visible
- [ ] Test with reduced motion preference
- [ ] Verify color blind user experience (use color blind simulator)
- [ ] Test with Windows High Contrast mode

## Resources

- [WCAG 2.1 Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)
- [axe-core Rules](https://github.com/dequelabs/axe-core/blob/develop/doc/rule-descriptions.md)
- [pa11y Documentation](https://pa11y.org/)
- [WebAIM Resources](https://webaim.org/resources/)
- [A11y Project Checklist](https://www.a11yproject.com/checklist/)

## Support

For accessibility questions or issues:
- Open a GitHub issue with the `accessibility` label
- Email: accessibility@thrynd.dev
- Refer to `CONTRIBUTING.md` for guidelines
