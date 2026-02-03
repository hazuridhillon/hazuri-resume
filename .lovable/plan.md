

## Plan: Replace Background with Mosaic Pattern (Immediately Visible)

### What I'll Do

Replace the current background image with this beautiful cream/gold mosaic star pattern and ensure it's clearly visible right away.

### Implementation Steps

**Step 1: Copy the new image**
- Copy `user-uploads://1d547c6321dbff21645f1e8227cc10de.jpg` to `public/images/vintage-rug-bg.jpg` (overwriting the existing file)

**Step 2: Reduce overlay opacity for immediate visibility**
- Change `body::after` opacity from `0.78` to `0.65` so the mosaic pattern is clearly visible (~35% showing through)
- This mosaic pattern has more neutral tones (cream/gold) which will blend better with the pink gradients

### Files Changed
1. `public/images/vintage-rug-bg.jpg` - Overwritten with new mosaic image
2. `src/index.css` - Reduce overlay opacity from `0.78` to `0.65`

### Result
The mosaic star pattern will be immediately visible as a subtle texture across the entire page, complementing the vintage editorial aesthetic with its cream and gold tones.

