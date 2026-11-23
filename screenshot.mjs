import { chromium } from 'playwright';
const b = await chromium.launch({ headless: true });
const p = await b.newPage();
await p.setViewportSize({ width: 1440, height: 900 });
await p.goto('http://localhost:3000', { waitUntil: 'domcontentloaded', timeout: 20000 });
await p.waitForTimeout(2500);
const s = await p.$('#temoignages');
if (s) {
  await s.scrollIntoViewIfNeeded();
  await p.waitForTimeout(1500);
  const box = await s.boundingBox();
  await p.screenshot({ path: 'C:/Users/HP_PC/AppData/Local/Temp/carousel.png', clip: { x: box.x, y: box.y, width: box.width, height: Math.min(box.height, 950) } });
}
await b.close();
console.log('done');
