
Goal: Fix the Hero section on mobile so (1) no text gets cut off, (2) spacing feels natural, and (3) there’s no horizontal overflow/scroll caused by long text (tagline/email/location).

## What’s causing the mobile issues (based on current code)
1. The tagline `<p>` uses `whitespace-nowrap`, which forces a long sentence onto one line and will overflow/cut off on small screens.
2. The Hero section currently has very large top padding on mobile (`pt-40`). Combined with `min-h-screen` + `items-center`, this can make the layout feel “weird” (content appears pushed/imbalanced).
3. The contact “chips” include an email address that can exceed the viewport width. Even if the container wraps, a single chip can still overflow if its content can’t wrap.

## Changes to make (single file: `src/components/Hero.tsx`)
### 1) Make the Hero height behave better on mobile + reduce mobile padding
Update the `<section>` className to:
- Replace `min-h-screen` with `min-h-[100svh]` (more accurate on mobile browsers than `100vh`)
- Replace `overflow-hidden` with `overflow-x-hidden` (prevents horizontal clipping/scroll while avoiding accidental vertical clipping)
- Reduce mobile padding, then scale up at breakpoints

Proposed `<section>` className change:
- From:
  - `min-h-screen flex items-center justify-center relative overflow-hidden pt-40 pb-24 md:pt-48 md:pb-32 lg:pt-56 lg:pb-40 xl:pt-64 xl:pb-48`
- To:
  - `min-h-[100svh] flex items-center justify-center relative overflow-x-hidden pt-24 pb-16 sm:pt-32 sm:pb-20 md:pt-48 md:pb-32 lg:pt-56 lg:pb-40 xl:pt-64 xl:pb-48`

### 2) Let the tagline wrap and constrain its width for readability
Update the tagline `<p>` className to:
- Remove `whitespace-nowrap`
- Add responsive `max-w-*` so it wraps nicely and stays centered

Proposed `<p>` className change:
- From:
  - `... animate-fade-up mx-auto whitespace-nowrap`
- To:
  - `... animate-fade-up mx-auto max-w-xs sm:max-w-md md:max-w-2xl lg:max-w-4xl`

### 3) Prevent the “chips” (especially the email) from overflowing the viewport
Keep the visual style, but make the chips mobile-safe:
- Make the chip row stack on mobile (`flex-col`) and go back to row on larger screens (`sm:flex-row`)
- Give chips a mobile max-width based on viewport
- Allow the email text to break if needed (emails have no spaces, so `break-all` is the reliable option)

Concrete adjustments:
- Chips container `<div>`:
  - Change from `flex flex-wrap ...` to `flex flex-col sm:flex-row flex-wrap ...` (and optionally reduce gap on mobile)
- For the email `<a className="gradient-chip ...">`:
  - Add: `w-full sm:w-auto justify-center max-w-[calc(100vw-3rem)]`
  - Wrap/break the email text:
    - Add to the `<span>` holding the email: `break-all text-center`
- For the LinkedIn chip + location chip:
  - Add the same width safety on mobile:
    - `w-full sm:w-auto justify-center max-w-[calc(100vw-3rem)]`

(Why `100vw-3rem`? Your hero container uses `px-6` (1.5rem each side), so subtracting ~3rem keeps chips inside the padded content area.)

## Testing / acceptance checklist
1. Use the Lovable device toggle (phone icon) and check at 320px, 375px, 390px widths.
2. Confirm:
   - The tagline wraps to multiple lines (no truncation).
   - No horizontal scroll bar appears (try swiping sideways).
   - The email chip stays within the screen and doesn’t force overflow.
   - The Hero spacing feels centered/intentional (not pushed off-screen).
3. Quick regression check on desktop to ensure the Hero still looks centered and premium.

## Optional follow-up (only if it still feels off)
If the name still feels too large on the smallest screens, we can slightly reduce the base `h1` size (e.g., `text-5xl` on mobile) while keeping the larger breakpoints unchanged. This is not required unless we still see clipping after the wrap/spacing fixes.
