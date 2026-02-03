

## Plan: Fix Background Image Visibility

### The Problem
The vintage rug background image is being set on the `body` element, but the `body::after` pseudo-element creates a fully opaque gradient overlay that sits on top of it, completely hiding the rug pattern.

**Current layer order (bottom to top):**
1. `body` background image (the rug) 
2. `body::after` with `z-index: -2` - **opaque gradients blocking the rug**
3. `body::before` with `z-index: 9999` - film grain overlay
4. Page content

### The Solution
Add transparency to the `body::after` gradient overlay so the rug pattern can show through subtly. I'll reduce the opacity of the overall overlay to let approximately 10-15% of the rug texture bleed through.

### Implementation

**File: `src/index.css` (lines 113-136)**

Add an `opacity` property to the `body::after` pseudo-element:

```css
body::after {
  content: '';
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -2;
  opacity: 0.88;  /* Allow ~12% of rug background to show through */
  background: 
    radial-gradient(circle at 20% 30%, hsl(332, 58%, 88%) 0%, transparent 40%),
    /* ... rest of gradients unchanged ... */
}
```

### Result
The vintage rug pattern will be visible as a subtle texture beneath the gradient overlays, adding warmth and visual interest while keeping the content readable.

