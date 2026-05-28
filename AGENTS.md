# AGENTS.md

## Cursor Cloud specific instructions

This is a purely static HTML/CSS/JS website (Iron Path Services — a local business site). There are no build tools, package managers, frameworks, tests, or linting configured.

### Running the site

Serve files with any static HTTP server. The simplest option:

```
python3 -m http.server 8080 --directory /workspace
```

Then open `http://localhost:8080` in Chrome. The site has two pages:
- `index.html` — homepage (hero, services, FAQ, contact form, etc.)
- `pricing.html` — detailed pricing tables

### Key caveats

- **No build step, no dependencies, no tests, no linter.** There is nothing to install or compile.
- The contact form and newsletter form are client-side only (no backend). Submitting them just hides the form and shows a success message via inline JS.
- Google Fonts and a Google Maps embed are loaded from external CDNs; the site degrades gracefully without network access.
- Images are local `.jpg` files referenced by relative paths — the server must run from `/workspace` for images to load.
