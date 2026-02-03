

## Plan: Increase and Even Out the Pink Overlay

### Current State
The page has a `body::after` pseudo-element that creates an overlay with multiple radial gradients and a linear gradient. The current setup:
- Opacity is at `0.65`
- Uses multiple radial gradients positioned at different spots (creating an uneven, organic look)
- The radial gradients fade to `transparent`, creating patches of pink rather than even coverage

### What I'll Change

**1. Increase overlay opacity** (line 121)
- Change from `0.65` to `0.80` for stronger pink coverage

**2. Make the pink more even** (lines 122-134)
- Replace the scattered radial gradients with a simpler, more uniform pink overlay
- Use a solid pink base layer combined with a subtle linear gradient for visual interest
- This removes the "patchy" look from the various positioned radial gradients

### Updated CSS

```css
body::after {
  content: '';
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -2;
  opacity: 0.80; /* Increased from 0.65 for stronger pink */
  background: 
    linear-gradient(180deg, 
      hsl(338, 49%, 88%) 0%,
      hsl(332, 50%, 86%) 25%,
      hsl(338, 48%, 87%) 50%,
      hsl(332, 50%, 85%) 75%,
      hsl(338, 49%, 88%) 100%);
  background-size: 100% 100%;
  animation: none; /* Remove animation since it's now uniform */
}
```

### Files to Edit
- `src/index.css` (lines 113-137) - Update the `body::after` overlay styles

### Result
- Stronger, more consistent pink overlay across the entire page
- The mosaic pattern will still be subtly visible through the overlay
- No more patchy or uneven areas

