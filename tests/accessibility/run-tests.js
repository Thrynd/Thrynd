#!/usr/bin/env node

/**
 * Accessibility Testing Script
 *
 * Uses Playwright and axe-core to test all Thrynd CSS components
 * for WCAG 2.1 AA compliance.
 */

const { chromium } = require('playwright');
const { injectAxe, checkA11y, getViolations } = require('axe-playwright');
const path = require('path');
const fs = require('fs');

const TEST_PAGE_PATH = path.join(__dirname, 'test-page.html');
const RESULTS_DIR = path.join(__dirname, 'results');

// Ensure results directory exists
if (!fs.existsSync(RESULTS_DIR)) {
  fs.mkdirSync(RESULTS_DIR, { recursive: true });
}

const THEMES = [
  'theme-modern',
  'theme-classic',
  'theme-minimal',
  'theme-neon',
  'theme-nature',
  'theme-corporate'
];

async function runAccessibilityTests() {
  console.log('🧪 Starting Accessibility Tests\n');

  const browser = await chromium.launch({ headless: true });
  const results = {
    timestamp: new Date().toISOString(),
    summary: { total: 0, passed: 0, failed: 0 },
    themes: {}
  };

  for (const theme of THEMES) {
    console.log(`\n📋 Testing ${theme}...`);

    const page = await browser.newPage();

    try {
      // Load test page
      await page.goto(`file://${TEST_PAGE_PATH}`);

      // Switch to theme
      await page.evaluate((themeClass) => {
        document.body.className = themeClass;
      }, theme);

      // Wait for theme to apply
      await page.waitForTimeout(500);

      // Inject axe-core
      await injectAxe(page);

      // Run accessibility tests
      const violations = await getViolations(page, null, {
        runOnly: {
          type: 'tag',
          values: ['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa']
        }
      });

      const passed = violations.length === 0;
      results.summary.total++;
      if (passed) {
        results.summary.passed++;
        console.log(`  ✅ ${theme}: PASSED (0 violations)`);
      } else {
        results.summary.failed++;
        console.log(`  ❌ ${theme}: FAILED (${violations.length} violations)`);

        // Log violations
        violations.forEach((violation, index) => {
          console.log(`\n    Violation ${index + 1}: ${violation.id}`);
          console.log(`    Impact: ${violation.impact}`);
          console.log(`    Description: ${violation.description}`);
          console.log(`    Affected nodes: ${violation.nodes.length}`);

          violation.nodes.slice(0, 2).forEach((node, nodeIndex) => {
            console.log(`      Node ${nodeIndex + 1}: ${node.html.substring(0, 80)}...`);
          });
        });
      }

      // Store results for this theme
      results.themes[theme] = {
        passed,
        violationCount: violations.length,
        violations: violations.map(v => ({
          id: v.id,
          impact: v.impact,
          description: v.description,
          help: v.help,
          helpUrl: v.helpUrl,
          nodes: v.nodes.map(n => ({
            html: n.html,
            target: n.target,
            failureSummary: n.failureSummary
          }))
        }))
      };

    } catch (error) {
      console.error(`  ❌ Error testing ${theme}:`, error.message);
      results.themes[theme] = {
        passed: false,
        error: error.message
      };
      results.summary.failed++;
      results.summary.total++;
    }

    await page.close();
  }

  await browser.close();

  // Save results
  const resultsFile = path.join(RESULTS_DIR, `a11y-test-results-${Date.now()}.json`);
  fs.writeFileSync(resultsFile, JSON.stringify(results, null, 2));

  console.log(`\n\n📊 Test Summary:`);
  console.log(`   Total themes tested: ${results.summary.total}`);
  console.log(`   ✅ Passed: ${results.summary.passed}`);
  console.log(`   ❌ Failed: ${results.summary.failed}`);
  console.log(`\n📄 Full results saved to: ${resultsFile}\n`);

  // Exit with error code if any tests failed
  if (results.summary.failed > 0) {
    process.exit(1);
  }
}

// Run tests
runAccessibilityTests().catch(error => {
  console.error('Fatal error:', error);
  process.exit(1);
});
