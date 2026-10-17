---
name: Mohamed Lamgouni Portfolio
description: Refined slate and amber portfolio with Geist typography and staggered media.
colors:
  dark-bg: "#161b1e"
  dark-surface: "#202629"
  dark-text: "#f0f0e9"
  dark-muted: "#adb3af"
  dark-line: "#394143"
  dark-accent: "#e9b35e"
  dark-on-accent: "#201a12"
  light-bg: "#f3f2ed"
  light-surface: "#e7e8e1"
  light-text: "#20282a"
  light-muted: "#58625e"
  light-line: "#c7cbc3"
  light-accent: "#925807"
  light-on-accent: "#fff9ee"
typography:
  display:
    fontFamily: "Geist, sans-serif"
    fontSize: "clamp(42px,5.15vw,74px)"
    fontWeight: 500
    lineHeight: 1.07
    letterSpacing: "-.035em"
  headline:
    fontFamily: "Geist, sans-serif"
    fontSize: "clamp(32px,3.4vw,49px)"
    fontWeight: 500
    lineHeight: 1.14
    letterSpacing: "-.035em"
  title:
    fontFamily: "Geist, sans-serif"
    fontSize: "19px"
    fontWeight: 500
    letterSpacing: "-.02em"
  body:
    fontFamily: "Geist, sans-serif"
    fontSize: "16px"
    lineHeight: 1.7
  project-body:
    fontFamily: "Geist, sans-serif"
    fontSize: "13px"
    lineHeight: 1.7
  button-label:
    fontFamily: "Geist, sans-serif"
    fontSize: "12px"
    fontWeight: 500
  tag-label:
    fontFamily: "Geist, sans-serif"
    fontSize: "10px"
rounded:
  media: "14px"
  pill: "999px"
  circle: "50%"
  dialog: "16px"
spacing:
  action-gap: "12px"
  action-inset: "12px 21px"
  tag-gap: "7px"
  tag-inset: "5px 9px"
  media-inset: "24px"
  section-gap: "92px"
  section-gap-mobile: "60px"
  grid-column-gap: "40px"
  grid-row-gap: "50px"
  grid-gap-mobile: "35px"
components:
  button-primary:
    backgroundColor: "{colors.dark-text}"
    textColor: "{colors.dark-bg}"
    typography: "{typography.button-label}"
    rounded: "{rounded.pill}"
    padding: "{spacing.action-inset}"
  button-primary-hover:
    backgroundColor: "{colors.dark-accent}"
    textColor: "{colors.dark-on-accent}"
  button-primary-light:
    backgroundColor: "{colors.light-text}"
    textColor: "{colors.light-bg}"
    typography: "{typography.button-label}"
    rounded: "{rounded.pill}"
    padding: "{spacing.action-inset}"
  button-primary-light-hover:
    backgroundColor: "{colors.light-accent}"
    textColor: "{colors.light-on-accent}"
  button-secondary:
    backgroundColor: "transparent"
    textColor: "{colors.dark-text}"
    typography: "{typography.button-label}"
    rounded: "{rounded.pill}"
    padding: "{spacing.action-inset}"
  button-secondary-light:
    backgroundColor: "transparent"
    textColor: "{colors.light-text}"
    typography: "{typography.button-label}"
    rounded: "{rounded.pill}"
    padding: "{spacing.action-inset}"
  icon-button:
    backgroundColor: "{colors.dark-surface}"
    textColor: "{colors.dark-text}"
    rounded: "{rounded.circle}"
    width: "40px"
    height: "40px"
  icon-button-light:
    backgroundColor: "{colors.light-surface}"
    textColor: "{colors.light-text}"
    rounded: "{rounded.circle}"
    width: "40px"
    height: "40px"
  project-tag:
    textColor: "{colors.dark-muted}"
    typography: "{typography.tag-label}"
    rounded: "{rounded.pill}"
    padding: "{spacing.tag-inset}"
  project-tag-light:
    textColor: "{colors.light-muted}"
    typography: "{typography.tag-label}"
    rounded: "{rounded.pill}"
    padding: "{spacing.tag-inset}"
  project-media:
    rounded: "{rounded.media}"
    padding: "{spacing.media-inset}"
    width: "100%"
  project-dialog:
    backgroundColor: "{colors.dark-bg}"
    textColor: "{colors.dark-text}"
    rounded: "{rounded.dialog}"
    width: "min(600px,calc(100% - 40px))"
    padding: "0"
  project-dialog-light:
    backgroundColor: "{colors.light-bg}"
    textColor: "{colors.light-text}"
    rounded: "{rounded.dialog}"
    width: "min(600px,calc(100% - 40px))"
    padding: "0"
---

# Design System: Mohamed Lamgouni Portfolio

## Overview

**Creative North Star: "A composed selection of identity, print and digital work"**

The existing direction contract supplies this north star. Deep slate, clear neutral text, amber punctuation, self-hosted Geist and intentional whitespace frame the work. The interface is restrained, with broad type hierarchy and open project metadata.

Rounded media and pill actions provide a consistent form language. Tonal surfaces and fine dividers establish depth; small lifts, image zooms and arrow rotation make interaction visible. These are extracted implementation decisions, not a new visual proposal.

**Key Characteristics:**

- User-pinned Geist typography.
- Slate and neutral themes with one amber interface accent.
- Rounded media, pill actions and open metadata.
- Responsive staggered work grid.
- Restrained motion with visible keyboard focus and reduced-motion support.

Evidence: `src/styles.css`, `src/main.tsx`, `src/App.tsx`, all four `src/components/*.tsx` files, `PRODUCT.md` and `.impeccable/surface.md`. YAML owns token primitives; the version 2 sidecar owns motion, breakpoints, focus, layout metadata and component previews. Cover artwork colors and cover-specific type sizes are local compositions, not reusable system tokens. No tonal ramps were synthesized.

## Colors

Slate and neutral surfaces carry content; amber provides punctuation and interactive feedback.

### Primary

Dark and light accent tokens mark heading punctuation, the status dot, link hover, primary-action hover, selection and keyboard focus. The corresponding on-accent tokens provide foreground contrast on accent fills.

### Neutral

Each theme maps the same CSS roles: `--bg` is the page and dialog ground; `--surface` is the circular-control fill; `--text` is the principal foreground and primary-button fill; `--muted` carries descriptions and metadata; `--line` supplies dividers, secondary-button borders and tag outlines. The YAML's dark/light prefixes distinguish theme values without creating new interface roles.

Dark is the initial fallback. Theme selection changes the root data attribute, updates the browser theme color and persists when storage is available. Artwork fields remain project-specific and do not change with the interface theme.

**The Semantic Theme Rule.** Apply the active theme's matching background, text, muted, line, accent and on-accent roles together.

## Typography

Geist is **user-pinned** for display, body and controls; preserve it. The stylesheet uses a sans-serif fallback. `src/main.tsx` self-hosts the Latin subsets at weights 400, 500 and 600; Latin-only imports are already present in the inspected source.

The frontmatter records the actual role declarations, including the introductory body and recurring project description. There is no inferred modular scale or invented body weight. Balanced heading wrapping and tight heading tracking produce the observed hierarchy. Project dates and the footer clock use tabular numerals.

Display typography changes at the observed responsive boundaries: tablet uses 54px; mobile uses `clamp(38px,8.2vw,58px)`; very wide screens use 82px. Project titles become 18px on mobile. These overrides are also recorded in sidecar typography metadata. Cover wordmark sizing is intentionally excluded.

**The Pinned Font Rule.** Use self-hosted Geist for the interface, retaining the established weights and sans-serif fallback.

## Layout

The page shell and navigation share a centered container capped at 1320px, with total horizontal subtraction of 112px on desktop, 64px at the tablet boundary and 40px on mobile. The implementation supports widths from 360px.

The work grid uses unequal columns (`1.16fr 1fr`), with column and row gaps from the frontmatter. Even cards start 68px lower. At a maximum width of 760px the grid becomes one column, its gap uses the mobile token, and the even-card offset becomes zero. This is the reusable staggered responsive pattern.

The hero uses `1.7fr 1fr`, becomes `1.5fr 1fr` at 1100px and one column at 760px. The practice section similarly collapses to one column. Action groups and tags wrap; mobile contact actions stack with their explanatory copy. Recurring section spacing contracts to its mobile token.

## Elevation & Depth

Glass is reserved for overlapping chrome and small controls. The sticky navigation mixes the theme background at 78% with transparency, applies 20px backdrop blur and 1.15 saturation, and uses a restrained `0 8px 24px -20px #00000070` shadow. Its inner navigation is transparent. Secondary actions and theme controls use 12px blur; project arrow overlays use 10px. The portrait caption uses a dark translucent panel with 16px blur, a fine light rim and a subtle sheen. Main content and primary actions remain solid for legibility. The native dialog backdrop retains its 6px blur.

## Shapes

Media frames share the media radius token (14px). Actions and tags share the pill token; theme controls and cover arrows are circular. The dialog uses its own radius token. Portraits use a 4:5 frame, project covers a 16:10 frame, and images fill their frames with `object-fit: cover`.

Cards keep title, year, description and tags outside the media field; there is no enclosing filled card or outer card border. Fine strokes outline tags, secondary actions, icon overlays and section boundaries.

## Components

### Buttons

Primary actions use principal text as fill and page ground as foreground, changing to accent/on-accent on hover. Secondary actions use a theme-aware translucent surface, glass rim and subtle sheen. Both use pill corners, the action inset token, a minimum height of 46px and a 9px icon gap. Enabled buttons lift 2px on hover. Disabled copy-email actions use muted text and a not-allowed cursor.

Circular icon buttons use the same translucent glass material and line-color hover fill. Keyboard focus on every button and link is a two-pixel accent outline with a five-pixel offset.

### Chips

Project discipline tags are noninteractive list items. They use muted text, a one-pixel line border, pill corners and the tag inset/gap tokens. No selected, hover or focus state is defined for these static labels.

### Cards / Containers

Project media is an accessible button opening the native details dialog; the title is a second trigger. The card lifts 5px on hover through Framer Motion. Artwork images zoom to 1.035 over 0.7s, and the circular arrow rotates 45 degrees over 0.5s. Portrait hover restores color and zooms to 1.025 over 0.8s. Preserve explicit placeholder labeling until real media is supplied.

The supplied portrait fills the original rounded frame. Its inset glass caption has 12px corners; the monogram remains visible alongside it. No 3D frame or red glow is active.

The details dialog uses semantic theme colors, a line border and its own rounded token. Its width is capped at 600px and its height at 85dvh. Native modal behavior provides focus trapping, Escape dismissal and focus restoration.

### Navigation

Sticky navigation aligns the signature, anchor links and circular theme switch within the page container. Links use compact type and accent hover; focus uses the global visible outline. Availability uses a translucent pill with an amber dot. At the mobile boundary its navbar instance is hidden and a conditional availability label appears in the hero's bottom row. The explore-work link takes the full row width below it.

### Motion and accessibility

The CSS easing variable and both Framer Motion transitions use `cubic-bezier(0.16,1,0.3,1)`. Button transitions take 0.35s, card lift 0.45s, arrow transform 0.5s, cover image zoom 0.7s and portrait image response 0.8s. The portrait entrance lasts 1.1s and moves from 8px to zero. Simpler navigation and icon fill transitions use the source's default CSS easing rather than the shared curve.

With `prefers-reduced-motion: reduce`, scrolling becomes immediate and CSS animations/transitions are disabled. Framer Motion's `useReducedMotion` suppresses card lift and portrait entrance. CSS hover transforms remain instant; the implementation does not remove those end states. Preserve the skip link and keyboard outlines.

Final sources include the mobile cover typography refinement, mobile availability placement and translucent navbar. Cover-specific typography remains intentionally outside the system tokens. Latin-only font imports are implemented. The user reports the independent finish review disposition as ship, with the final production build and browser checks passed; this document records source extraction rather than rerunning those checks.

## Do's and Don'ts

### Do:

- Do preserve user-pinned Geist and its self-hosted Latin weight imports.
- Do apply complete semantic token sets when switching themes.
- Do use 14px media corners and pill action silhouettes.
- Do collapse the staggered work grid to one column without card offsets on mobile.
- Do retain accent focus outlines, reduced-motion handling and native dialog keyboard behavior.
- Do label placeholder media truthfully.

### Don't:

- Don't promote individual cover wordmark sizes or artwork palettes into global tokens.
- Don't invent shadow scales, color ramps, inputs or component states absent from the source.
- Don't hide availability entirely on mobile when the configured status is available.

