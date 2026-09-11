#!/usr/bin/env python3
"""
Generates small standalone glyph icons for links that the Simple Icons CDN
doesn't serve: "globe"/"mail" have no brand icon at all, and "linkedin" was
removed from cdn.simpleicons.org after a trademark takedown (shields.io still
bundles it locally for badges, but the standalone CDN endpoint 404s — verified
2026-09-11). GitHub's icon IS still served fine by the CDN, so that one stays
a hotlink in README.md. All icons use the same muted grey (#8B949E) so the
whole profile row reads as one consistent set in both GitHub themes.

Run: python3 scripts/gen_icons.py
"""
import os

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
OUT_DIR = os.path.join(ROOT, "assets", "icons")

COLOR = "#8B949E"

GLOBE_PATH = "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm6.93 6h-2.95c-.32-1.25-.78-2.45-1.38-3.56 1.84.63 3.37 1.9 4.33 3.56zM12 4.04c.83 1.2 1.48 2.53 1.91 3.96h-3.82c.43-1.43 1.08-2.76 1.91-3.96zM4.26 14C4.1 13.36 4 12.69 4 12s.1-1.36.26-2h3.38c-.08.66-.14 1.32-.14 2s.06 1.34.14 2H4.26zm.82 2h2.95c.32 1.25.78 2.45 1.38 3.56-1.84-.63-3.37-1.9-4.33-3.56zm2.95-8H5.08c.96-1.66 2.49-2.93 4.33-3.56C8.81 5.55 8.35 6.75 8.03 8zM12 19.96c-.83-1.2-1.48-2.53-1.91-3.96h3.82c-.43 1.43-1.08 2.76-1.91 3.96zM14.34 14H9.66c-.09-.66-.16-1.32-.16-2s.07-1.35.16-2h4.68c.09.65.16 1.32.16 2s-.07 1.34-.16 2zm.25 5.56c.6-1.11 1.06-2.31 1.38-3.56h2.95c-.96 1.65-2.49 2.93-4.33 3.56zM16.36 14c.08-.66.14-1.32.14-2s-.06-1.34-.14-2h3.38c.16.64.26 1.31.26 2s-.1 1.36-.26 2h-3.38z"
MAIL_PATH = "M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2zm0 2v.01L12 12l8-6.99V6H4zM4 18h16V8.24l-8 6.99-8-6.99V18z"
LINKEDIN_PATH = "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"

ICONS = {
    "globe": GLOBE_PATH,
    "mail": MAIL_PATH,
    "linkedin": LINKEDIN_PATH,
}


def icon_svg(path: str, label: str) -> str:
    return f'''<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="{label}">
  <title>{label}</title>
  <path d="{path}" fill="{COLOR}"/>
</svg>
'''


def main():
    os.makedirs(OUT_DIR, exist_ok=True)
    for name, path in ICONS.items():
        out = os.path.join(OUT_DIR, f"{name}.svg")
        with open(out, "w") as f:
            f.write(icon_svg(path, name))
        print(f"wrote {os.path.relpath(out, ROOT)}")


if __name__ == "__main__":
    main()
