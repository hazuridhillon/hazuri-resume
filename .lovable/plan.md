

## Plan: Hide Portfolio Page Until Ready

Remove the Portfolio link from navigation so visitors won't discover the page. The page and route will remain in the codebase for when you're ready to add real content.

### Changes

1. **`src/components/Navigation.tsx`** — Remove the "Portfolio" button from both desktop and mobile navigation menus (lines ~83-88 for desktop, lines ~107-114 for mobile).

The `/portfolio` route and page file stay intact — you just won't have a visible link to it. When you're ready, we re-add the nav link.

