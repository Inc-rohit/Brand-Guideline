# Incisiv Brand Guidelines 2026

Official brand identity system for Incisiv — a B2B retail technology intelligence company.

**Live site:** https://brand-guideline-three.vercel.app  
**Download assets:** https://www.dropbox.com/scl/fo/2dmazrwys3f3hqprc2fsa/AEXLm6HG_AJM8hOBTyqUFTA?rlkey=yz0f15sm1wdi98rwwla2v631m&st=z8y6j6ov&dl=0

---

## Repository Structure

```
Brand-Guideline/
├── index.html                    # Full brand guideline (self-contained, agent-ready)
├── incisiv-brand-guidelines.html # Original source file
├── assets/
│   ├── logo-white.png            # White logo (1213×292px) — use on dark backgrounds
│   └── logo-black.png            # Black logo (1778×428px) — use on light backgrounds
├── README.md                     # This file
└── llms.txt                      # Plain-text brand summary for AI agents
```

---

## For AI Agents & Code Generators

All brand tokens are embedded in `index.html` as structured JSON:

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

## Logo Usage

| Background | Logo Version |
|---|---|
| Dark (black, navy) | White logo (`assets/logo-white.png`) |
| Light (white, gray) | Black logo (`assets/logo-black.png`) |

**Rules:** Never stretch, rotate, recolor, add effects, or place in a badge.  
**Clearspace:** Minimum = logomark height on all four sides.  
**Minimum digital size:** 150px wide (full logo), 50px (logomark only)

---

## Dependencies (External — No Install Required)

| Library | Version | CDN | Purpose |
|---|---|---|---|
| Lucide Icons | latest | `unpkg.com/lucide@latest/dist/umd/lucide.min.js` | Icon set |
| Poppins | — | Google Fonts | Headline font |
| Libre Franklin | — | Google Fonts | Body font |

No build step. No npm. No frameworks. The `index.html` is fully self-contained — all images are base64-embedded, all styles are inline.

---

## No Auth Required

The site is fully public. No password, no login, no API key needed.

---

*Version 1.0 · April 2026 · Incisiv*
