# GitHub Actions Workflows

This directory contains automated CI/CD workflows for the Thrynd CSS Framework.

## Workflows

### CI Workflow (`ci.yml`)

**Triggers:** Push to `main` or `develop`, Pull Requests

**Jobs:**
1. **Lint CSS** - Validates CSS with stylelint
2. **Build CSS** - Tests build across Node 16, 18, 20
3. **Size Check** - Ensures bundle size stays within limits
   - Minified: < 100KB
   - Gzipped: < 35KB

### Release Workflow (`release.yml`)

**Triggers:** GitHub Release published

**Actions:**
- Runs full test suite
- Builds production CSS
- Publishes to npm with provenance
- Uploads release assets to GitHub

**Requirements:**
- `NPM_TOKEN` secret must be configured in repository settings

### Dependency Review (`dependency-review.yml`)

**Triggers:** Pull Requests

**Actions:**
- Reviews dependency changes
- Fails on moderate or higher severity vulnerabilities
- Comments summary in PR

### CodeQL Analysis (`codeql.yml`)

**Triggers:** Push, Pull Request, Weekly schedule

**Actions:**
- Security vulnerability scanning
- Code quality analysis
- JavaScript code analysis

## Setup Instructions

### For Repository Administrators

1. **Configure NPM Token:**
   - Go to Repository Settings → Secrets and variables → Actions
   - Add secret: `NPM_TOKEN` with your npm access token

2. **Enable GitHub Actions:**
   - Ensure Actions are enabled in repository settings
   - Workflows will run automatically on triggers

3. **Branch Protection:**
   - Recommended: Require CI workflow to pass before merging
   - Configure in Settings → Branches → Branch protection rules

### Status Badges

Add these to your README.md:

```markdown
[![CI](https://github.com/yourusername/thrynd/workflows/CI/badge.svg)](https://github.com/yourusername/thrynd/actions/workflows/ci.yml)
[![CodeQL](https://github.com/yourusername/thrynd/workflows/CodeQL/badge.svg)](https://github.com/yourusername/thrynd/actions/workflows/codeql.yml)
```

## Local Testing

Test CI steps locally before pushing:

```bash
# Run linting
npm run lint

# Run build
npm run build:all

# Run full test suite
npm run test:all

# Check file sizes
ls -lh dist/
gzip -c dist/thrynd.min.css | wc -c
```

## Troubleshooting

### Build Failures

If builds fail, check:
- Node version compatibility (must support Node 16+)
- Dependencies are locked in package-lock.json
- CSS syntax is valid (run `npm run lint`)

### Size Check Failures

If bundle size exceeds limits:
- Review recent CSS additions
- Check for duplicate code
- Consider code splitting or selective imports
- Update limits in `ci.yml` if justified

### Failed NPM Publish

Common issues:
- `NPM_TOKEN` not configured or expired
- Version number already published (update package.json)
- Insufficient npm permissions
