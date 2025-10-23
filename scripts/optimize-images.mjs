import sharp from 'sharp';
import { promises as fs } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const imagesDir = path.join(__dirname, '../public/images');

async function getFileSize(filePath) {
  const stats = await fs.stat(filePath);
  return (stats.size / 1024).toFixed(2); // Size in KB
}

async function optimizeImage(inputPath, outputPath, options = {}) {
  const beforeSize = await getFileSize(inputPath);

  try {
    const image = sharp(inputPath);
    const metadata = await image.metadata();

    console.log(`📸 Processing: ${path.basename(inputPath)}`);
    console.log(`   Original: ${beforeSize} KB (${metadata.width}x${metadata.height})`);

    // Apply optimization based on file type
    if (metadata.format === 'jpeg' || metadata.format === 'jpg') {
      await image
        .jpeg({
          quality: options.quality || 85,
          progressive: true,
          mozjpeg: true
        })
        .toFile(outputPath);
    } else if (metadata.format === 'png') {
      // Convert PNG to WebP for better compression
      const webpPath = outputPath.replace('.png', '.webp');
      await image
        .webp({
          quality: options.quality || 85,
          effort: 6
        })
        .toFile(webpPath);

      // Also create an optimized PNG fallback
      await image
        .png({
          quality: options.quality || 85,
          compressionLevel: 9,
          effort: 10
        })
        .toFile(outputPath);
    }

    const afterSize = await getFileSize(outputPath);
    const savings = ((1 - afterSize / beforeSize) * 100).toFixed(1);

    console.log(`   ✅ Optimized: ${afterSize} KB (saved ${savings}%)`);
    console.log('');

    return { beforeSize: parseFloat(beforeSize), afterSize: parseFloat(afterSize), savings: parseFloat(savings) };
  } catch (error) {
    console.error(`   ❌ Error optimizing ${inputPath}:`, error.message);
    return null;
  }
}

async function optimizeAllImages() {
  console.log('🚀 Starting image optimization...\n');

  const results = [];

  // 1. Optimize hero.jpeg (1.3MB -> ~300KB)
  const heroResult = await optimizeImage(
    path.join(imagesDir, 'hero.jpeg'),
    path.join(imagesDir, 'hero-optimized.jpeg'),
    { quality: 85 }
  );
  if (heroResult) results.push(heroResult);

  // 2. Optimize our-story PNGs
  const storyDir = path.join(imagesDir, 'our-story');
  const storyFiles = ['our-story-1.png', 'our-story-2.png', 'our-story-3.png', 'our-story-4.png'];

  for (const file of storyFiles) {
    const result = await optimizeImage(
      path.join(storyDir, file),
      path.join(storyDir, file.replace('.png', '-optimized.png')),
      { quality: 85 }
    );
    if (result) results.push(result);
  }

  // 3. Optimize bg-footer.png
  const footerResult = await optimizeImage(
    path.join(imagesDir, 'bg-footer.png'),
    path.join(imagesDir, 'bg-footer-optimized.png'),
    { quality: 85 }
  );
  if (footerResult) results.push(footerResult);

  // Calculate totals
  const totalBefore = results.reduce((sum, r) => sum + r.beforeSize, 0);
  const totalAfter = results.reduce((sum, r) => sum + r.afterSize, 0);
  const totalSavings = ((1 - totalAfter / totalBefore) * 100).toFixed(1);

  console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
  console.log(`📊 SUMMARY:`);
  console.log(`   Total Before: ${totalBefore.toFixed(2)} KB`);
  console.log(`   Total After:  ${totalAfter.toFixed(2)} KB`);
  console.log(`   Total Saved:  ${totalSavings}% (${(totalBefore - totalAfter).toFixed(2)} KB)`);
  console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n');

  console.log('✨ Optimization complete!');
  console.log('\n⚠️  Next steps:');
  console.log('   1. Review the optimized images to ensure quality is acceptable');
  console.log('   2. Replace original files with optimized versions if satisfied');
  console.log('   3. Update image references in your code if needed');
}

optimizeAllImages().catch(console.error);
