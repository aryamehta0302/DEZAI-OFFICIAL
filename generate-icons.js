const sharp = require('sharp');
const fs = require('fs');
const path = require('path');
const pngToIco = require('png-to-ico').default || require('png-to-ico');

const inputImagePath = path.join(__dirname, 'public', 'logo-brand.png');
const appDir = path.join(__dirname, 'src', 'app');
const iconsDir = path.join(__dirname, 'public', 'icons');

if (!fs.existsSync(iconsDir)) {
  fs.mkdirSync(iconsDir, { recursive: true });
}

async function generateIcons() {
  try {
    const metadata = await sharp(inputImagePath).metadata();
    const maxDim = Math.max(metadata.width, metadata.height);
    
    // Pad to square with transparent background
    const squareBuffer = await sharp(inputImagePath).resize(maxDim, maxDim, {
      fit: 'contain',
      background: { r: 0, g: 0, b: 0, alpha: 0 }
    }).toBuffer();

    console.log('Generating base PNG assets...');
    
    // 512x512
    await sharp(squareBuffer).resize(512, 512).toFile(path.join(appDir, 'icon.png'));
    await sharp(squareBuffer).resize(512, 512).toFile(path.join(iconsDir, 'android-chrome-512x512.png'));
    
    // 192x192
    await sharp(squareBuffer).resize(192, 192).toFile(path.join(iconsDir, 'android-chrome-192x192.png'));
    
    // 180x180 (Apple)
    await sharp(squareBuffer).resize(180, 180).toFile(path.join(appDir, 'apple-icon.png'));
    
    // 150x150 (Windows Tile)
    await sharp(squareBuffer).resize(150, 150).toFile(path.join(iconsDir, 'mstile-150x150.png'));
    
    // Favicons
    const p16Path = path.join(appDir, 'icon-16x16.png');
    const p32Path = path.join(appDir, 'icon-32x32.png');
    const p48Path = path.join(appDir, 'icon-48x48.png');

    await sharp(squareBuffer).resize(16, 16).toFile(p16Path);
    await sharp(squareBuffer).resize(32, 32).toFile(p32Path);
    await sharp(squareBuffer).resize(48, 48).toFile(p48Path);
    
    console.log('Generating multi-resolution favicon.ico...');
    // Create true multi-resolution .ico
    const icoBuffer = await pngToIco([p16Path, p32Path, p48Path]);
    fs.writeFileSync(path.join(appDir, 'favicon.ico'), icoBuffer);

    // Create mask-icon.svg
    const svgContent = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
  <circle cx="50" cy="50" r="45" fill="none" stroke="black" stroke-width="8" />
  <path d="M 35 25 L 55 25 Q 75 25 75 50 Q 75 75 55 75 L 35 75 Z" fill="black" />
  <path d="M 45 35 L 55 35 Q 65 35 65 50 Q 65 65 55 65 L 45 65 Z" fill="white" />
</svg>`;
    fs.writeFileSync(path.join(iconsDir, 'mask-icon.svg'), svgContent);

    console.log('Successfully generated all required favicon assets!');
  } catch (error) {
    console.error('Error generating icons:', error);
  }
}

generateIcons();
