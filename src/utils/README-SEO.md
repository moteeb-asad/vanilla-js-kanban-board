# SEO Meta Tags Utility

This directory contains utilities for managing SEO meta tags across the Kanban Board application.

## Files

- **`seoMeta.ts`** - Core SEO configuration and meta tag generation functions
- **`seoTemplate.ts`** - Template functions for generating complete HTML head sections

## Usage

### For TypeScript/JavaScript Applications

```typescript
import { injectSEOMetaTags, mainPageSEO } from "./utils/seoMeta.js";

// Inject SEO meta tags into the document head
injectSEOMetaTags(mainPageSEO);
```

### For Static HTML Files

The SEO configurations are centralized and can be easily copied into HTML files:

```typescript
import { generateSEOMetaTags, mainPageSEO } from "./utils/seoMeta.js";

// Generate meta tags HTML string
const metaTags = generateSEOMetaTags(mainPageSEO);
```

## Configuration

### Main Page SEO

- Optimized for "kanban board", "task management", "drag and drop" keywords
- Focuses on free tool and productivity aspects

### Project Details Page SEO

- Optimized for "typescript kanban", "project details", "web development" keywords
- Focuses on technical specifications and architecture

## Customization

To update SEO settings:

1. Edit the configurations in `seoMeta.ts`
2. Update the `baseConfig` for site-wide settings
3. Modify individual page configs (`mainPageSEO`, `projectDetailsSEO`)
4. Rebuild the TypeScript if using programmatic injection

## Features

- **Centralized Configuration** - All SEO settings in one place
- **Type Safety** - TypeScript interfaces ensure consistency
- **Social Media Ready** - Open Graph and Twitter Card support
- **SEO Best Practices** - Canonical URLs, proper meta tags, theme colors
- **Reusable** - Easy to extend for additional pages
