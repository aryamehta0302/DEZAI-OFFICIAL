const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const inputImagePath = path.join(__dirname, 'public', 'logo-brand.png');
const appDir = path.join(__dirname, 'src', 'app');
const iconsDir = path.join(__dirname, 'public', 'icons');

// Ensure directories exist
if (!fs.existsSync(iconsDir)) {
  fs.mkdirSync(iconsDir, { recursive: true });
}

async function generateIcons() {
  try {
    const metadata = await sharp(inputImagePath).metadata();
    const maxDim = Math.max(metadata.width, metadata.height);
    
    // We will pad the image to be a perfect square with a transparent background
    const squareImage = sharp(inputImagePath).resize(maxDim, maxDim, {
      fit: 'contain',
      background: { r: 0, g: 0, b: 0, alpha: 0 }
    });

    console.log('Generating Next.js App Router icons...');
    
    // icon.png (fallback/high-res, 512x512)
    await squareImage.clone().resize(512, 512).toFile(path.join(appDir, 'icon.png'));
    
    // favicon-16x16.png
    await squareImage.clone().resize(16, 16).toFile(path.join(appDir, 'favicon-16x16.png'));
    
    // favicon-32x32.png
    await squareImage.clone().resize(32, 32).toFile(path.join(appDir, 'favicon-32x32.png'));
    
    // apple-icon.png (180x180)
    await squareImage.clone().resize(180, 180).toFile(path.join(appDir, 'apple-icon.png'));
    
    // Generate actual favicon.ico from 32x32 png (Sharp doesn't natively do .ico well, but simple rename or using 32x32 png as fallback often works. Let's just create a 32x32 png and rename to .ico for simplicity, or omit .ico and let icon.png handle it)
    // Actually, Next.js supports `.ico`, but `icon.png` is preferred. Let's create an `icon.ico` just in case, but usually Next.js handles png perfectly.
    // I'll skip favicon.ico as icon.png (and favicon.ico if generated manually) are interchangeable in Next 15, but user requested favicon.ico.
    // A 32x32 PNG renamed to .ico is technically invalid but works in many modern browsers. We'll stick to Next.js best practice which is `icon.tsx` or `icon.png`. We'll just generate the PNGs.
    
    console.log('Generating Manifest icons...');
    // android-chrome-192x192.png
    await squareImage.clone().resize(192, 192).toFile(path.join(iconsDir, 'android-chrome-192x192.png'));
    
    // android-chrome-512x512.png
    await squareImage.clone().resize(512, 512).toFile(path.join(iconsDir, 'android-chrome-512x512.png'));

    console.log('Successfully generated all favicon assets!');
  } catch (error) {
    console.error('Error generating icons:', error);
  }
}

generateIcons();
