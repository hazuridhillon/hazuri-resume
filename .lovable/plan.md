

## Plan: Repeat Background Image on Mobile

### Problem
On mobile devices, the background image appears too zoomed in even after changing `background-attachment` to `scroll`. The current `background-size: cover` fills the entire screen with a single instance of the image, making it appear zoomed.

### Solution
Modify the mobile media query to repeat the background image 2-3 times vertically, showing more of the pattern at a smaller size.

### Technical Changes

**File: `src/index.css` (lines 113-118)**

Update the mobile media query to:
- Change `background-size` from `cover` to a specific size (e.g., `auto 50%` or `100% auto`) that shows the image at a smaller scale
- Change `background-repeat` to `repeat` so the pattern tiles nicely
- Keep `background-attachment: scroll` for proper mobile behavior

```css
/* Fix for mobile - background-attachment: fixed causes zoom issues */
@media (max-width: 768px) {
  body {
    background-attachment: scroll;
    background-size: 100% auto;
    background-repeat: repeat-y;
  }
}
```

This will:
- Display the image at full width but natural height
- Repeat the image vertically down the page
- Show more of the mosaic pattern detail on mobile screens

