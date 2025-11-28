# RustStats Site

A lightweight static landing page for the RustStats Discord bot. The site lives in the `docs/` directory so it can be deployed directly with GitHub Pages. A small redirect file at the repository root ensures the site also works when Pages is configured to serve from the root.

## Local development

You can view the page locally with Python's built-in server:

```bash
python -m http.server 8000 --directory docs
```

Then open http://localhost:8000 in your browser.
