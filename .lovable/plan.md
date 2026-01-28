

## Plan: Replace Favicon with Uploaded Image

### What I'll Do

1. **Copy the uploaded image to the public folder**
   - Copy `user-uploads://image-12.png` to `public/favicon.png`

2. **Update `index.html`** to reference the new favicon
   - Change the favicon links to point to `/favicon.png`

### Technical Details

**File: `index.html` (lines 6-7)**

Update from:
```html
<link rel="icon" type="image/svg+xml" href="/favicon.svg">
<link rel="icon" type="image/png" href="/favicon.ico">
```

To:
```html
<link rel="icon" type="image/png" href="/favicon.png">
```

### Result
The browser tab will display the new "HKD" favicon image you provided.

