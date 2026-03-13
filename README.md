# Incisiv Brand Guidelines 2026

Official brand identity system for Incisiv — a B2B retail technology intelligence company.

**Live site:** https://brand-guideline-three.vercel.app  
**Download assets:** https://www.dropbox.com/scl/fo/2dmazrwys3f3hqprc2fsa/AEXLm6HG_AJM8hOBTyqUFTA?rlkey=yz0f15sm1wdi98rwwla2v631m&st=q9t6gdpq&dl=0

---

## Repository Structure

```
Brand-Guideline/
├── incisiv-brand-guidelines.html        # Full brand guideline (self-contained, agent-ready)
├── README.md                            # This file
├── llms.txt                             # Plain-text brand summary for AI agents
└── Assets/
    ├── Logo/
    │   └── Incisiv Logo.svg             # Master logo (use this for all production work)
    ├── Photography/
    │   ├── stills_63723_gx-co.jpg
    │   ├── stills_63723_gr-co.jpg
    │   ├── stills_63723_Lx-co.jpg
    │   ├── stills_63723_fr-cx.jpg
    │   ├── stills_63723_xr-vx.jpg
    │   └── stills_63723_ur-cx.jpg
    └── Social Posts/
        ├── Post 1.jpg                   # LinkedIn stat card example
        └── Post 2.jpg                   # Instagram stat card example
```

---

## For AI Agents & Code Generators

All brand tokens are embedded in `incisiv-brand-guidelines.html` as structured JSON:

```html
<script type="application/json" id="incisiv-brand-data">...</script>
```

Parse with:
```js
JSON.parse(document.getElementById('incisiv-brand-data').textContent)
```

Or read `llms.txt` for a plain-text summary of all tokens.

---

## Brand Colors

| Role | Name | Hex | Usage |
|---|---|---|---|
| Primary | Black | `#000000` | Cover backgrounds, headlines, logo |
| Secondary | Navy | `#131c4e` | Section headers, dark UI — brand workhorse |
| Tertiary | Purple | `#7B2D8B` | Headlines, emphasis — never large backgrounds |
| Tertiary | Dark Teal | `#14314D` | Gradients, callout boxes |
| Accent | Orange | `#FA9628` | CTAs only — max ONE per layout |

### Approved Gradients
| Name | CSS |
|---|---|
| Nebula | `linear-gradient(135deg, #131c4e 0%, #7B2D8B 100%)` |
| Deep Ocean | `linear-gradient(135deg, #131c4e 0%, #14314D 100%)` |
| Midnight | `linear-gradient(135deg, #000000 0%, #131c4e 100%)` |

---

## Typography

| Role | Font | Weight | Size |
|---|---|---|---|
| Headlines | Poppins | 700 | 40px |
| Section titles | Poppins | 600 | 24px |
| Sub-sections | Poppins | 500 | 18px |
| Body | Libre Franklin | 400 | 16px |
| Caption | Libre Franklin | 400 | 13px |
| Labels | Libre Franklin | 600 | 11px uppercase |
| Buttons | Libre Franklin | 600 | 14px |

**Google Fonts CDN:**
```html
<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&family=Libre+Franklin:ital,wght@0,400;0,500;0,600;1,400&display=swap" rel="stylesheet" />
```

---

## Icons

- **Library:** [Lucide Icons](https://lucide.dev/icons) — MIT license
- **CDN:** `https://unpkg.com/lucide@latest/dist/umd/lucide.min.js`
- **Style:** Outline only, 1.5px stroke, rounded caps — never filled
- **Usage:** `<i data-lucide="icon-name"></i>` then call `lucide.createIcons()`
- Do NOT bundle icon files — reference by name via CDN

---

## Logo

- **Master file:** `Assets/Logo/Incisiv Logo.svg` — use for all production work
- **On dark backgrounds** (black, navy): use white version of the logo
- **On light backgrounds** (white, gray): use black version of the logo
- **Clearspace:** minimum = logomark height on all four sides
- **Minimum digital size:** 150px wide (full logo), 50px (logomark only)
- **Never:** stretch, rotate, recolor, add effects, or place in a badge

---

## Photography

All photos are in `Assets/Photography/`. Three approved directions:

| File |
|---|
| `stills_63723_gx-co.jpg` |
| `stills_63723_gr-co.jpg` |
| `stills_63723_Lx-co.jpg` |
| `stills_63723_fr-cx.jpg` |
| `stills_63723_xr-vx.jpg` |
| `stills_63723_ur-cx.jpg` |

---

## Social Media References

Templates in `Assets/Social Posts/`:

| File | Format | Dimensions |
|---|---|---|
| `Post 1.jpg` | LinkedIn stat card | 1200 × 628px |
| `Post 2.jpg` | Instagram stat card | 1080 × 1080px |

---

## Dependencies (No Install Required)

| Library | CDN | Purpose |
|---|---|---|
| Lucide Icons | `unpkg.com/lucide@latest/dist/umd/lucide.min.js` | Icons |
| Poppins | Google Fonts | Headline font |
| Libre Franklin | Google Fonts | Body font |

No build step. No npm. No frameworks. `incisiv-brand-guidelines.html` is fully self-contained — all images base64-embedded, styles inline.

---

*Version 1.0 · April 2026 · Incisiv*
