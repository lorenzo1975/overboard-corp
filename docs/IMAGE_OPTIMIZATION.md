# Image Optimization Guide

## Current State

All images in the application are using Next.js `Image` component which provides automatic optimization including:
- Automatic format conversion (AVIF/WebP)
- Lazy loading by default
- Responsive image sizes
- Automatic blur placeholder generation

## Large Images Identified

The following images are large and should be optimized before deployment:

1. **Hero Image**: `/public/images/hero.jpeg` (1.3MB)
   - Recommended: Compress to < 300KB
   - Already using Next.js Image with `priority` flag

2. **Our Story Images**: `/public/images/our-story/*.png` (2.8MB total)
   - our-story-1.png (588KB)
   - our-story-2.png (750KB)
   - our-story-3.png (722KB)
   - our-story-4.png (771KB)
   - Recommended: Convert to WebP/AVIF and compress to ~200KB each

3. **Footer Background**: `/public/images/bg-footer.png` (464KB)
   - Recommended: Compress to < 150KB

## Optimization Tools

### Using ImageMagick (if available)
```bash
# Convert and compress JPEG
convert hero.jpeg -quality 85 -strip hero-optimized.jpeg

# Convert PNG to WebP
cwebp -q 80 our-story-1.png -o our-story-1.webp
```

### Using Online Tools
- [TinyPNG](https://tinypng.com/) - PNG/JPEG compression
- [Squoosh](https://squoosh.app/) - Modern image compression
- [CloudConvert](https://cloudconvert.com/) - Format conversion

### Using npm packages
```bash
npm install -D sharp
```

Then create a script to optimize images:
```javascript
const sharp = require('sharp');

sharp('hero.jpeg')
  .resize(1920, null, { withoutEnlargement: true })
  .jpeg({ quality: 85, progressive: true })
  .toFile('hero-optimized.jpeg');
```

## Best Practices Implemented

✅ Using Next.js Image component with proper `sizes` prop
✅ Setting `priority` on above-the-fold images
✅ Using appropriate `fill` mode for responsive containers
✅ Providing meaningful alt text for accessibility
✅ Using loading="lazy" by default (Next.js Image default)
✅ AVIF and WebP format support enabled in next.config.ts

## Performance Metrics

Current images are already optimized by Next.js at runtime, but pre-optimizing source images will:
- Reduce initial load time
- Decrease bandwidth usage
- Improve Core Web Vitals (LCP)
- Better performance on slower connections
