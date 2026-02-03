
Goal
- Ensure the rug graphic is no longer used anywhere and the newly uploaded mosaic image is the active background immediately (no relying on overwriting the old rug filename).

What’s happening (likely cause)
- The code still references `/images/vintage-rug-bg.jpg`. Even if we overwrite that file, browsers/CDNs can keep serving a cached old version at the same URL.
- Because the filename/URL didn’t change, you can keep seeing the “rug” even after we “replaced” the file.

Approach (make it impossible to keep showing the rug)
- Stop using the `vintage-rug-bg.jpg` path entirely.
- Introduce a brand-new image filename for the mosaic and update CSS to point to the new URL (optionally with a cache-busting querystring).
- (Optional but recommended) Remove the old rug asset file from `public/images/` so it can’t accidentally be referenced again.

Implementation steps
1) Add the new mosaic image as a new public asset (new filename)
- Copy the uploaded image:
  - `user-uploads://1d547c6321dbff21645f1e8227cc10de.jpg`
  - into: `public/images/mosaic-bg.jpg`
- This creates a brand-new URL: `/images/mosaic-bg.jpg` (so the browser must fetch it fresh).

2) Update CSS to use the new mosaic file (and fully eliminate the rug reference)
- In `src/index.css`, change:
  - `background-image: url('/images/vintage-rug-bg.jpg');`
  - to:
  - `background-image: url('/images/mosaic-bg.jpg?v=20260203');`
    - The `?v=20260203` is an extra cache-buster to ensure you see it immediately even if something upstream caches aggressively.
- Keep your current overlay opacity at `0.65` (since you asked for it to be visible right away, and that’s already set).

3) (Recommended) Remove the rug file from the project assets
- Delete: `public/images/vintage-rug-bg.jpg`
- This ensures the rug graphic is not present in the app at all and can’t return via any accidental reference.

Verification / Acceptance criteria (how we’ll confirm it’s fixed)
- In the preview, the background is the mosaic star pattern, not the rug.
- Browser devtools Network shows a request for:
  - `/images/mosaic-bg.jpg?v=20260203` (Status 200)
- A search across the codebase returns zero references to:
  - `vintage-rug-bg.jpg`

Files that will change
- Add: `public/images/mosaic-bg.jpg` (new file from your upload)
- Edit: `src/index.css` (update background-image URL)
- Delete (recommended): `public/images/vintage-rug-bg.jpg`

Notes
- After the change, even a normal refresh should show the mosaic because the URL is new, but if anything still looks stuck, a hard refresh will definitely pick it up.

Optional next step (only if you want more pattern “readability”)
- If the mosaic still feels too subtle, we can switch from `background-size: cover` to a repeating “wallpaper” style (e.g., `background-repeat: repeat; background-size: 900px auto;`) to make the pattern more recognizable without increasing opacity.
