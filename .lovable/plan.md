

## Plan: Add Vintage Rug Background with Low Transparency

### Overview
Add the beautiful vintage pink/cream Persian rug image as a subtle background layer that complements the existing "vintage editorial" aesthetic.

### Implementation

**Step 1: Copy the image to the public folder**
- Copy `user-uploads://4ba17c445b9af7f27230a5b190e54682.jpg` to `public/images/vintage-rug-bg.jpg`
- Using `public/` folder since it will be referenced in CSS

**Step 2: Update `src/index.css`**

Add a new background layer for the rug image with low opacity. The current `body::after` handles the gradient overlays, so I'll add a new layer using `body::before` (below the film grain effect) specifically for the rug pattern:

```css
/* Vintage rug background pattern - ultra subtle */
body {
  background-image: url('/images/vintage-rug-bg.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: fixed;
}
```

Then adjust the existing gradient overlay (`body::after`) to blend nicely with the rug by keeping its opacity and making it slightly more prominent to maintain readability while allowing the rug pattern to show through subtly.

**Step 3: Adjust opacity/blend**
- The existing gradient overlays (in `body::after`) will layer on top
- The rug image will show through at very low opacity (~8-12%)
- This creates a beautiful textural effect without distracting from content

### Files Changed
1. **New file**: `public/images/vintage-rug-bg.jpg` (copy of uploaded image)
2. **Modified**: `src/index.css` - add background image to body with low opacity

### Result
The vintage rug pattern will appear as a subtle textural background, enhancing the editorial aesthetic while keeping text and content fully readable.

