# Iron Path Services logo placement log

Last audited: July 18, 2026

## Canonical assets

| Purpose | Source |
| --- | --- |
| Official winged-torch artwork | `public/assets/official-winged-torch-v2.svg` |
| Square app-icon composition | `public/assets/app-icon.svg` |
| Social sharing composition | `public/assets/social-card.svg` |

The SVG files above are the editable sources. PNG files are generated delivery assets and should not be edited directly.
Versioned public filenames prevent browsers and social platforms from reusing the temporary logo from an immutable cache.

## Website placement inventory

| Surface | Implementation | Delivery asset | Coverage | Status |
| --- | --- | --- | --- | --- |
| Global header | `src/components/Header.astro` | `/assets/official-winged-torch-v2.svg` on a light brand-safe backing | Every website page | Official logo; full torch visible on dark header |
| Global footer | `src/components/Footer.astro` | `/assets/official-winged-torch-v2.svg` on a light brand-safe backing | Every website page | Official logo; full torch visible on dark footer |
| Modern browser favicon | `src/layouts/BaseLayout.astro` | `/favicon.svg` | Every website page | Official logo |
| PNG favicon fallback | `src/layouts/BaseLayout.astro` | `/favicon-32x32.png` | Every website page | Official logo |
| Apple home-screen icon | `src/layouts/BaseLayout.astro` | `/apple-touch-icon.png` | iPhone and iPad saved sites | Official logo |
| Installed web-app icons | `public/site.webmanifest` | `/favicon.svg`, `/icon-192.png`, `/icon-512.png` | PWA and Android install surfaces | Official logo |
| Open Graph preview | `src/layouts/BaseLayout.astro` | `/assets/social-card-v2.png` | Facebook, Slack, Messages, and other link previews | Official logo |
| X/Twitter preview | `src/layouts/BaseLayout.astro` | `/assets/social-card-v2.png` | X/Twitter link previews | Official logo |
| Search-engine business identity | `src/layouts/BaseLayout.astro` LocalBusiness JSON-LD | `/icon-512.png` | Search engines and structured-data consumers | Official logo |
| Downloadable pricing guide | `public/downloads/ironpath-customer-pricing.pdf` | Official mark embedded on page 1 | Pricing and quote download links | Official logo |

## Generated assets

| Asset | Size | Generated from |
| --- | --- | --- |
| `public/favicon-32x32.png` | 32 x 32 | `public/assets/app-icon.svg` |
| `public/apple-touch-icon.png` | 180 x 180 | `public/assets/app-icon.svg` |
| `public/icon-192.png` | 192 x 192 | `public/assets/app-icon.svg` |
| `public/icon-512.png` | 512 x 512 | `public/assets/app-icon.svg` |
| `public/assets/social-card-v2.png` | 1200 x 630 | `public/assets/social-card.svg` |

## Intentional exclusions

- Decorative tree and roadmap SVG illustrations are not company logos.
- Service photography and promotional photography are not logo sources.
- Future partner logos belong under `public/assets/photos/partners/` and must not replace the Iron Path mark.
- Social profile avatars, Google Business, WhatsApp, hosted Google Forms, and email signatures are external systems and cannot be updated from this website repository.

## Future logo-change checklist

1. Add the approved vector artwork under a new versioned filename and update every reference.
2. Check the header and footer at desktop and mobile sizes.
3. Regenerate the PNG favicon, Apple, PWA, and social-card assets from their SVG sources.
4. Update the logo embedded on the pricing PDF cover.
5. Confirm every row in the placement inventory points to the approved artwork.
6. Run `npm run build` and inspect the generated metadata on at least one page.

The charcoal torch body must not be placed directly on a dark background. Header, footer, and
future dark-surface placements need the light brand-safe backing defined by `.brand-mark`.
