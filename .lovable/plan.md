

## Plan: Move "tap to learn more" Hint to a New Row

### Current Structure
The hint is currently inline with the "Skills" title:
```tsx
<h3 className="...">
  Skills <span className="...">(tap to learn more)</span>
</h3>
```

### Proposed Change

**File: `src/components/Skills.tsx` (lines 74-75)**

Separate the hint into its own element below the title by wrapping both in a container:

```tsx
<div className="mb-6 md:mb-8">
  <h3 className="text-lg md:text-xl lg:text-2xl font-bold section-header">
    Skills
  </h3>
  <span className="text-xs font-normal text-muted-foreground mt-1 block">
    (tap to learn more)
  </span>
</div>
```

### What This Does
- Wraps the title and hint in a flex container
- Moves `mb-6 md:mb-8` from the `<h3>` to the wrapper `<div>` to maintain spacing
- Adds `mt-1 block` to the hint so it appears on its own line with a small gap above
- Keeps the same visual styling for both elements

### Result
The "Skills" heading will appear on its own line, with "(tap to learn more)" displayed in smaller muted text on the row directly below it.

