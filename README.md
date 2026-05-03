# Taichmantch — Landing Page

Landing page for Gil Taichman's business — homemade fish salads from Moshav Tekuma.

> **Mobile-first design.** The page is built and optimized for mobile screens first, then scaled up for desktop.

---

## Page Structure

### 1. Topbar — Top Navigation
- Logo + brand name "Taichmantch"
- Subtitle: "Homemade Fish Salads · Moshav Tekuma"
- CTA button: "Order Now" (links to the form)
- Sticks to the top on scroll (`position: sticky`)

### 2. Hero — Opening Section
- Main headline: "Your Shabbat is about to look different."
- Description: "Handmade fish salads / from the finest ingredients / seasoned to perfection"
- Main product image

### 3. Pillars — Value Cards (3 cards)
| # | Title | Content |
|---|-------|---------|
| 01 | Premium Ingredients | Fresh fish, market vegetables, and carefully selected spices |
| 02 | Handmade | Every salad is chopped, sliced, and seasoned with great love |
| 03 | Pre-Order Only | Prepared close to pickup time for maximum freshness |

### 4. Salad Menu — 4 Cards

| Salad Name | Color | Short Description | Ingredients |
|------------|-------|-------------------|-------------|
| Salmon Flame | Red-orange `#D96B5E` | Subtle heat | Premium salmon, chili pepper, red onion |
| Mediterranean Matias | Blue `#4A7FA5` | Classic · Fresh | Herring, chili, Kalamata olives, green onion, red onion |
| Salmon Skin | Green `#5A9E72` | Crispy · Spicy | Clean salmon, chili pepper, onion, fried salmon skin |
| Mustard Matias | Orange `#C4873A` | Delicate · Special | Herring in a velvety mustard sauce |

Each card includes an image, a round SVG sticker with logo + name, salad name, colored tag, and extended description.

### 5. Kosher Bar
- Kosher certificate image
- Text: "Mehadrin Kosher / under the supervision of Sdot Negev Rabbinate"

### 6. Pricing
- Text: "You can order a set of four salads / or individual salads."
- Single: **35 ₪**
- Set of four: **120 ₪**

### 7. Order Form
Fields:
- Full name
- Phone number
- Home address
- Pickup point (dropdown): Sha'arei Tikva / Ra'anana / Eliav / Even Shmuel
- Quantity per salad (+ / − buttons)
- Set of four salads (120 ₪)
- Notes (optional)
- Submit button

Logic: Name + phone validation before submission.

**Deadlines:** Orders close Thursday at 12:00. Pickup at Farm 36, Moshav Tekuma, on Friday.

### 8. CTA — Call to Action
- Logo
- Headline: "Ready to lick your fingers?"
- Order button
- Pickup note: Farm 36, Moshav Tekuma

### 9. Footer
- SVG fish decoration
- Privacy policy (opens on click)
- Design credit: Miriam Tubul

---

## Technologies

| File | Role |
|------|------|
| `index.html` | Full page structure |
| `style.css` | Complete styling including responsive |
| `pictures/` | Salad images, logo, and kosher certificate |

## Fonts
- **Frank Ruhl Libre** — headings (Google Fonts)
- **Heebo** — body text (Google Fonts)

## Color Palette

| Variable | Value | Usage |
|----------|-------|-------|
| `--navy` | `#2B3F5C` | Primary color |
| `--navy-deep` | `#1F2E44` | Hero background |
| `--coral` | `#D96B5E` | Accents, CTA |
| `--cream` | `#F4EFE6` | Card backgrounds |
| `--paper` | `#FAF6ED` | Light background |

## Responsive Design

The page is **mobile-first** (`max-width: 767px` breakpoint):
- Salad grid collapses to a single column
- Form shrinks to full screen width
- Topbar is reduced (secondary text hidden)
- Pricing stacks vertically and is centered
- Minimum touch target size: 44×44px on all interactive elements
- Body font size: minimum 16px on mobile
- No horizontal scroll on any screen size
