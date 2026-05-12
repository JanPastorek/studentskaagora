# Page Topology — studentska-agora.webflow.io

Site is a single-page Slovak landing for "Študentská Agora" student program. Webflow-built. 8 sections, flow layout, no sticky nav, no scroll-driven animations beyond default Webflow IX2 (none observed).

## Sections (top → bottom)
1. **Hero** (`.section_header30`) — Full-viewport (917px). Background: `pdKurzyBackground.png` (books on wood floor) with 50% black overlay. Centered H1 "ŠTUDENTSKÁ AGORA" + subtitle "Priestor pre myslenie, diskusiu a rast" + orange "prihlás sa" button.
2. **3-card overview** (`.pricing-overview-2`) — White bg, 80px/30px padding. 3 cards in a row, each with image on top + orange 1px border (10px radius) + h3 + bullet text.
3. **Tutorial topics** (`.testimonial-column-light`) — Beige bg `rgb(229,218,213)`, 40px/30px padding. Heading "TÉMY TUTORIÁLOV" + 2 columns of 5 topics each, all inside an orange-outlined card.
4. **Why Agora** (`.padding-global-2`) — White bg, 0/80px padding. Heading "PREČO AGORA?" centered + 3 paragraphs of body text.
5. **Faces of Agora** (`.layout516_item-content-2` area) — White bg. Heading "TVÁRE AGORY" + grid of 4 people (circular portraits + name + role).
6. **Why apply** (`.section_layout478` green) — Green bg `rgb(144,180,157)`. Two-column: left Raphael "School of Athens" painting (atenskaSkolaPozadie.png), right heading "PREČO SA PRIHLÁSIŤ?" + body text.
7. **Application info + Form** (`.section_contact1` green) — Same green bg + light bg. Heading "PRIHLÁSENIE" + intro text + email + Google Form embed.

## Interaction model
- Static layout, no sticky/floating elements.
- Only interactive: "prihlás sa" hash link to `#prihlasit-sa`.
- Button hover: standard color shift (Webflow default).
- No scroll-driven animations observed.

## Fonts (computed)
- **Headings (sections):** Bitter, serif — bold 700
- **Hero H1:** Barlow Condensed, sans-serif — 400, 104px, white
- **Body:** Inter, sans-serif — 14-16px
- **Button:** Ubuntu, Helvetica, sans-serif — 500, uppercase, 1px letterSpacing

## Colors
- Orange (brand): `#f05a28` (rgb(240,90,40)) — button bg, card borders
- Beige bg: `rgb(229,218,213)`
- Green bg: `rgb(144,180,157)`
- Black text on light, white on dark
