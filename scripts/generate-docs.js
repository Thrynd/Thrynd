#!/usr/bin/env node
/**
 * Thrynd CSS Documentation Generator
 *
 * Parses CSS files with @thrynd annotations and generates:
 * 1. Machine-readable JSON for LLM consumption
 * 2. Component metadata for the documentation site
 *
 * Usage: node scripts/generate-docs.js
 *
 * Annotation Format in CSS:
 *
 * /**
 *  * @thrynd component button
 *  * @description Interactive button element for user actions
 *  * @category form
 *  * @complexity simple
 *  * /
 *
 * /**
 *  * @thrynd variant primary
 *  * @parent button
 *  * @class btn-primary
 *  * @usage Main call-to-action, most important action on page
 *  * @example <button class="btn-primary">Submit</button>
 *  * @semantic Primary action - use once per section
 *  * /
 */

const fs = require('fs');
const path = require('path');

const SRC_DIR = path.join(__dirname, '..', 'src');
const OUTPUT_FILE = path.join(__dirname, '..', 'docs', 'api', 'components.json');
const DOCS_SITE_OUTPUT = path.join(__dirname, '..', 'docs-site', 'public', 'components.json');

// Parse @thrynd annotations from CSS content
function parseAnnotations(content, filename) {
  const annotations = [];
  const annotationRegex = /\/\*\*[\s\S]*?@thrynd\s+([\w-]+)\s+([\w-]+)[\s\S]*?\*\//g;

  let match;
  while ((match = annotationRegex.exec(content)) !== null) {
    const block = match[0];
    const type = match[1]; // component, variant, modifier, size, etc.
    const name = match[2];

    const annotation = {
      type,
      name,
      file: filename,
    };

    // Parse all @key value pairs
    const keyValueRegex = /@(\w+)\s+([^\n@*]+)/g;
    let kvMatch;
    while ((kvMatch = keyValueRegex.exec(block)) !== null) {
      const key = kvMatch[1];
      const value = kvMatch[2].trim();
      if (key !== 'thrynd') {
        annotation[key] = value;
      }
    }

    annotations.push(annotation);
  }

  return annotations;
}

// Parse CSS selectors to extract class names
function extractClasses(content) {
  const classes = new Set();
  const classRegex = /\.([\w-]+)(?:\s*,|\s*\{|\s*:)/g;

  let match;
  while ((match = classRegex.exec(content)) !== null) {
    classes.add(match[1]);
  }

  return Array.from(classes);
}

// Read all CSS files recursively
function readCSSFiles(dir) {
  const files = [];

  function walk(currentDir) {
    const entries = fs.readdirSync(currentDir, { withFileTypes: true });

    for (const entry of entries) {
      const fullPath = path.join(currentDir, entry.name);

      if (entry.isDirectory()) {
        walk(fullPath);
      } else if (entry.name.endsWith('.css')) {
        files.push({
          path: fullPath,
          name: entry.name,
          relativePath: path.relative(SRC_DIR, fullPath),
        });
      }
    }
  }

  walk(dir);
  return files;
}

// Build component catalog from annotations
function buildCatalog(allAnnotations) {
  const components = {};

  // First pass: create components
  for (const ann of allAnnotations) {
    if (ann.type === 'component') {
      components[ann.name] = {
        name: ann.name.charAt(0).toUpperCase() + ann.name.slice(1),
        category: ann.category || 'general',
        complexity: ann.complexity || 'simple',
        description: ann.description || '',
        file: ann.file,
        baseClass: ann.class || null,
        variants: {},
        sizes: {},
        modifiers: {},
        states: {},
        accessibility: {
          required: [],
          keyboard: '',
          screenReader: '',
        },
        commonCombinations: [],
        antiPatterns: [],
      };
    }
  }

  // Second pass: add variants, modifiers, sizes
  for (const ann of allAnnotations) {
    const parent = ann.parent;

    if (!parent || !components[parent]) continue;

    const component = components[parent];

    if (ann.type === 'variant') {
      component.variants[ann.name] = {
        class: ann.class,
        usage: ann.usage || '',
        example: ann.example || '',
        semantic: ann.semantic || '',
      };
    } else if (ann.type === 'size') {
      component.sizes[ann.name] = {
        class: ann.class || null,
        usage: ann.usage || '',
        example: ann.example || '',
        default: ann.default === 'true',
      };
    } else if (ann.type === 'modifier') {
      component.modifiers[ann.name] = {
        class: ann.class,
        usage: ann.usage || '',
        example: ann.example || '',
        combines: ann.combines ? ann.combines.split(',').map(s => s.trim()) : [],
      };
    } else if (ann.type === 'state') {
      component.states[ann.name] = {
        automatic: ann.automatic === 'true',
        attribute: ann.attribute || null,
        description: ann.description || '',
        example: ann.example || '',
      };
    } else if (ann.type === 'accessibility') {
      if (ann.required) {
        component.accessibility.required.push(ann.required);
      }
      if (ann.keyboard) {
        component.accessibility.keyboard = ann.keyboard;
      }
      if (ann.screenReader) {
        component.accessibility.screenReader = ann.screenReader;
      }
    } else if (ann.type === 'combination') {
      component.commonCombinations.push({
        classes: ann.classes,
        usage: ann.usage || '',
        context: ann.context || '',
      });
    } else if (ann.type === 'antipattern') {
      component.antiPatterns.push({
        pattern: ann.pattern,
        reason: ann.reason || '',
        severity: ann.severity || 'warning',
        suggestion: ann.suggestion || '',
      });
    }
  }

  return components;
}

// Generate the full JSON output
function generateJSON(components, allClasses) {
  return {
    version: require('../package.json').version,
    lastUpdated: new Date().toISOString().split('T')[0],
    framework: 'Thrynd CSS',
    description: 'LLM-friendly component catalog for AI-assisted development',
    generatedBy: 'scripts/generate-docs.js',
    totalClasses: allClasses.length,
    components,
    utilities: {
      note: 'Utility classes follow Tailwind-like naming conventions',
      categories: [
        'spacing (m-*, p-*, gap-*)',
        'colors (text-*, bg-*, border-*)',
        'typography (text-*, font-*)',
        'layout (flex, grid, container)',
        'sizing (w-*, h-*, max-w-*)',
        'borders (rounded-*, border-*)',
        'effects (shadow-*, opacity-*)',
        'responsive (sm:, md:, lg:, xl:, 2xl:)',
      ],
    },
    themes: [
      { name: 'Modern', class: 'theme-modern', description: 'Clean, contemporary design' },
      { name: 'Classic', class: 'theme-classic', description: 'Traditional, elegant design' },
      { name: 'Minimal', class: 'theme-minimal', description: 'Brutalist, monochrome design' },
      { name: 'Neon', class: 'theme-neon', description: 'Cyberpunk aesthetic' },
      { name: 'Nature', class: 'theme-nature', description: 'Earthy, organic design' },
      { name: 'Corporate', class: 'theme-corporate', description: 'Professional design' },
    ],
  };
}

// Main execution
function main() {
  console.log('Thrynd Documentation Generator');
  console.log('==============================\n');

  // Read all CSS files
  const cssFiles = readCSSFiles(SRC_DIR);
  console.log(`Found ${cssFiles.length} CSS files\n`);

  // Parse annotations and extract classes
  let allAnnotations = [];
  let allClasses = new Set();

  for (const file of cssFiles) {
    const content = fs.readFileSync(file.path, 'utf-8');
    const annotations = parseAnnotations(content, file.relativePath);
    const classes = extractClasses(content);

    allAnnotations = allAnnotations.concat(annotations);
    classes.forEach(c => allClasses.add(c));

    if (annotations.length > 0) {
      console.log(`  ${file.relativePath}: ${annotations.length} annotations`);
    }
  }

  console.log(`\nTotal annotations: ${allAnnotations.length}`);
  console.log(`Total CSS classes: ${allClasses.size}\n`);

  // Build catalog
  const components = buildCatalog(allAnnotations);
  const componentCount = Object.keys(components).length;

  console.log(`Components documented: ${componentCount}`);

  // Generate JSON
  const output = generateJSON(components, Array.from(allClasses));

  // Write output files
  fs.mkdirSync(path.dirname(OUTPUT_FILE), { recursive: true });
  fs.writeFileSync(OUTPUT_FILE, JSON.stringify(output, null, 2));
  console.log(`\nWritten: ${OUTPUT_FILE}`);

  fs.mkdirSync(path.dirname(DOCS_SITE_OUTPUT), { recursive: true });
  fs.writeFileSync(DOCS_SITE_OUTPUT, JSON.stringify(output, null, 2));
  console.log(`Written: ${DOCS_SITE_OUTPUT}`);

  console.log('\nDone!');

  // Return stats for testing
  return {
    files: cssFiles.length,
    annotations: allAnnotations.length,
    classes: allClasses.size,
    components: componentCount,
  };
}

// Run if called directly
if (require.main === module) {
  main();
}

module.exports = { main, parseAnnotations, buildCatalog };
