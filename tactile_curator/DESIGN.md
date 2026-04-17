# Design System: Tactile Luxury & The Digital Curator

## 1. Overview & Creative North Star
**Creative North Star: "The Curated Monolith"**

This design system moves away from the flat, ephemeral nature of the modern web and returns to the weight and permanence of physical luxury. We are building a "Digital Curator"—an interface that feels less like a website and more like a high-end physical portfolio or a marble-and-glass concierge desk.

To break the "template" look, we reject the rigid, centered grid. Instead, we embrace **Intentional Asymmetry**. Large-scale typography should overlap container edges; imagery should bleed off-canvas; and depth should be achieved through a "Stacked Architecture" where elements aren't just placed—they are "inset" or "floated" using light and shadow. The goal is a high-fidelity 3D experience where every interaction feels like pressing into a soft-touch material or gliding a finger over polished glass.

---

## 2. Colors: Tonal Depth over Borders
Our palette is rooted in the earth and sky, utilizing the deep, authoritative `primary` (#00342b) and its container variants to create a sense of botanical luxury.

### The "No-Line" Rule
**Borders are forbidden for sectioning.** To define boundaries, use color shifts or elevation. A `surface-container-low` section sitting on a `surface` background provides all the separation the eye needs. If you feel the urge to draw a line, increase the contrast between the two background tokens instead.

### Surface Hierarchy & Nesting
Treat the UI as a physical stack. The hierarchy is defined by "Value Nesting":
*   **Base Layer:** `surface` (#f9f9f9).
*   **In-Page Sections:** `surface-container-low` (#f3f3f3) for subtle grouping.
*   **Active Cards:** `surface-container-lowest` (#ffffff) to provide a "pop" of clean white light.
*   **Interactive Elements:** `surface-container-high` (#e8e8e8) to indicate an area of focus or utility.

### The Glass & Gradient Rule
To achieve the "Tactile Luxury" aesthetic, use **Glassmorphism** for all floating overlays (modals, navigation bars, tooltips). 
*   **Token:** `surface` at 70% opacity + 32px Backdrop Blur.
*   **Soulful Gradients:** For primary CTAs, do not use flat hex codes. Apply a subtle linear gradient from `primary` (#00342b) to `primary_container` (#004d40) at a 135-degree angle to simulate the way light hits a curved, lacquered surface.

---

## 3. Typography: Editorial Authority
We use **Plus Jakarta Sans** as our sole typeface, relying on extreme scale shifts rather than multiple fonts to convey luxury.

*   **Display (lg/md):** Used for "Hero Moments." These should be set with tight letter-spacing (-0.02em) to feel like a high-end magazine masthead.
*   **Headlines:** The "voice" of the Curator. Use `headline-lg` for section headers, often positioned asymmetrically to break the vertical flow.
*   **Body & Labels:** `body-lg` is your workhorse. Use `on_surface_variant` (#3f4945) for secondary body text to reduce visual noise and maintain the "Soft Slate" aesthetic.

**Hierarchy Tip:** Pair a `display-lg` headline with a `label-md` uppercase sub-header (spaced +0.1em) to create an immediate sense of sophisticated editorial design.

---

## 4. Elevation & Depth: The Layering Principle
In this system, depth is not an effect—it is the architecture.

### Ambient Shadows
For floating elements, shadows must be "Atmospheric." 
*   **Formula:** `box-shadow: 0 20px 40px rgba(0, 32, 26, 0.08);`
*   The shadow is tinted with the `on_primary_fixed` color rather than black, making it feel like it's casting a natural shadow on the Emerald and Ivory surfaces.

### The "Ghost Border" Fallback
If accessibility requires a container edge, use a **Ghost Border**: 
*   `outline-variant` (#bfc9c4) at 15% opacity. It should be barely perceptible, acting as a "catch-light" on the edge of a glass pane.

### Neumorphic Insets
For inactive states or "recessed" areas (like search bars or empty card slots), use an inner shadow to create a "pressed" effect into the Ivory background. This reinforces the tactile, physical nature of the platform.

---

## 5. Components

### Buttons: The Lacquered Stone
*   **Primary:** A gradient of `primary` to `primary_container`. **Radius:** `xl` (3rem/pill-shaped). Shadow: Ambient emerald tint.
*   **Secondary:** `surface-container-highest` background with `primary` text. No border.
*   **Interaction:** On hover, the button should "lift" (y-axis -2px) and the shadow blur should double.

### Cards: The Floating Pane
*   **Structure:** No dividers. Use `md` (1.5rem) or `lg` (2rem) padding to create air.
*   **Elevation:** Use `surface-container-lowest` on top of `surface_container`. 
*   **Imagery:** Images within cards must have a `DEFAULT` (1rem) radius and a subtle inner-glow to feel inset into the card frame.

### Input Fields: The Recessed Tray
*   **Style:** `surface-container-low` background with a subtle inner-shadow. 
*   **Focus:** Transition to `surface-container-lowest` and add a 1px "Ghost Border" using the `primary` token at 20% opacity.

### Chips: The Polished Pebble
*   Used for travel tags (e.g., "Luxury," "Beach," "Safari").
*   **Style:** `secondary_container` background with `on_secondary_container` text.
*   **Radius:** `full`.

### Signature Component: The Glass Navigation Dock
A bottom-centered navigation bar using the Glassmorphism rule. It should appear to float 32px above the content, with a heavy backdrop blur that allows the colors of travel photography to bleed through beautifully.

---

## 6. Do's and Don'ts

### Do
*   **Do** use white space as a structural element. If a design feels cluttered, increase the padding, don't add a line.
*   **Do** overlap elements. Let an image card slightly hang over the edge of a background container to create 3D depth.
*   **Do** use `24px` (lg) corners for all major containers to maintain the "Soft Slate" friendly-yet-premium feel.

### Don't
*   **Don't** use 100% black (#000000) for shadows or text. It breaks the organic, tactile feel of the palette.
*   **Don't** use standard 1px borders. If you can't see the separation without a border, your background color tokens are too similar.
*   **Don't** use sharp corners. Everything in this system should feel worn smooth like a river stone.