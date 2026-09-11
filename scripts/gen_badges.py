#!/usr/bin/env python3
"""
Generates the four brand-styled pill badges used in the hero section:
Portfolio, GitHub, LinkedIn, Email — in dark and light variants.

Icon glyph sources (all permissively licensed, redrawn as flat paths):
  - GitHub mark  -> Primer Octicons (MIT)
  - LinkedIn mark -> Simple Icons (CC0)
  - Globe (Portfolio) / Envelope (Email) -> Material Symbols (Apache-2.0)

Run: python3 scripts/gen_badges.py
Static branding asset — regenerate only when the badge design changes.
"""
import os

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
OUT_DIR = os.path.join(ROOT, "assets", "badges")

FONT_IMPORT = "@import url('https://fonts.googleapis.com/css2?family=Raleway:wght@700&amp;display=swap');"

GLOBE_PATH = "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm6.93 6h-2.95c-.32-1.25-.78-2.45-1.38-3.56 1.84.63 3.37 1.9 4.33 3.56zM12 4.04c.83 1.2 1.48 2.53 1.91 3.96h-3.82c.43-1.43 1.08-2.76 1.91-3.96zM4.26 14C4.1 13.36 4 12.69 4 12s.1-1.36.26-2h3.38c-.08.66-.14 1.32-.14 2s.06 1.34.14 2H4.26zm.82 2h2.95c.32 1.25.78 2.45 1.38 3.56-1.84-.63-3.37-1.9-4.33-3.56zm2.95-8H5.08c.96-1.66 2.49-2.93 4.33-3.56C8.81 5.55 8.35 6.75 8.03 8zM12 19.96c-.83-1.2-1.48-2.53-1.91-3.96h3.82c-.43 1.43-1.08 2.76-1.91 3.96zM14.34 14H9.66c-.09-.66-.16-1.32-.16-2s.07-1.35.16-2h4.68c.09.65.16 1.32.16 2s-.07 1.34-.16 2zm.25 5.56c.6-1.11 1.06-2.31 1.38-3.56h2.95c-.96 1.65-2.49 2.93-4.33 3.56zM16.36 14c.08-.66.14-1.32.14-2s-.06-1.34-.14-2h3.38c.16.64.26 1.31.26 2s-.1 1.36-.26 2h-3.38z"

GITHUB_PATH = "M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"

LINKEDIN_PATH = "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"

MAIL_PATH = "M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2zm0 2v.01L12 12l8-6.99V6H4zM4 18h16V8.24l-8 6.99-8-6.99V18z"

ICONS = {
    "globe": ("0 0 24 24", GLOBE_PATH),
    "github": ("0 0 16 16", GITHUB_PATH),
    "linkedin": ("0 0 24 24", LINKEDIN_PATH),
    "mail": ("0 0 24 24", MAIL_PATH),
}

# id, icon key, label, width, icon color (dark, light)
BADGES = [
    ("portfolio", "globe", "PORTFOLIO", 188, "#C770F0", "#7C3AED"),
    ("github", "github", "GITHUB", 150, "#E6EDF3", "#1F2328"),
    ("linkedin", "linkedin", "LINKEDIN", 172, "#3B9EFF", "#0A66C2"),
    ("email", "mail", "EMAIL", 138, "#F2745C", "#D64526"),
]

THEMES = {
    "dark": {"bg": "#161B22", "border": "#30363D", "text": "#E6EDF3"},
    "light": {"bg": "#F6F8FA", "border": "#D0D7DE", "text": "#1F2328"},
}

HEIGHT = 48
RADIUS = 24


def badge_svg(label, width, icon_key, icon_color, theme):
    viewbox, path = ICONS[icon_key]
    native = int(viewbox.split()[-1])
    scale = 20 / native
    return f'''<svg width="{width}" height="{HEIGHT}" viewBox="0 0 {width} {HEIGHT}" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="{label}">
  <title>{label}</title>
  <style>{FONT_IMPORT}
    .label {{ font-family: 'Raleway', 'Segoe UI', system-ui, sans-serif; font-weight: 700; font-size: 14px; letter-spacing: 1.5px; fill: {theme["text"]}; }}
  </style>
  <rect x="0.5" y="0.5" width="{width - 1}" height="{HEIGHT - 1}" rx="{RADIUS}" fill="{theme["bg"]}" stroke="{theme["border"]}"/>
  <g transform="translate(18, 14) scale({scale:.4f})">
    <path d="{path}" fill="{icon_color}"/>
  </g>
  <text x="46" y="30" class="label">{label}</text>
</svg>
'''


def main():
    for theme_name, theme in THEMES.items():
        out_dir = OUT_DIR
        os.makedirs(out_dir, exist_ok=True)
        for badge_id, icon_key, label, width, dark_color, light_color in BADGES:
            icon_color = dark_color if theme_name == "dark" else light_color
            path = os.path.join(out_dir, f"{badge_id}-{theme_name}.svg")
            with open(path, "w") as f:
                f.write(badge_svg(label, width, icon_key, icon_color, theme))
            print(f"wrote {os.path.relpath(path, ROOT)}")


if __name__ == "__main__":
    main()
