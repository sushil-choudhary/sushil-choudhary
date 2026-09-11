#!/usr/bin/env python3
"""
Generates the custom SVG section-header banners used throughout README.md.

Source of truth for the visual language: the portfolio at
https://github.com/sushil-choudhary/sushil-choudhary (React app) —
Raleway typography, purple/violet gradient (#c770f0 -> #9b5de5 -> #60a5fa),
dark glassmorphism background (#0c0513).

Run: python3 scripts/gen_section_headers.py
Regenerate whenever SECTIONS below changes (new section, renamed section, etc).
This is a one-shot static asset generator, not part of the scheduled CI —
the output SVGs are committed directly since they hold no live data.
"""
import os

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
OUT_DIR = os.path.join(ROOT, "assets", "sections")

WIDTH = 1000
HEIGHT = 92

THEMES = {
    "dark": {
        "text": "#E6EDF3",
        "kicker": "#8B949E",
        "gradient": ["#C770F0", "#9B5DE5", "#60A5FA"],
        "line": "#30363D",
    },
    "light": {
        "text": "#1F2328",
        "kicker": "#57606A",
        "gradient": ["#7C3AED", "#9333EA", "#2563EB"],
        "line": "#D0D7DE",
    },
}

# (file slug, kicker index label, title)
SECTIONS = [
    ("01-about", "01", "ABOUT"),
    ("02-focus", "02", "CURRENTLY BUILDING"),
    ("03-profiles", "03", "PROFILES"),
    ("04-telemetry", "04", "GITHUB TELEMETRY"),
    ("05-platforms", "05", "PLATFORMS I'VE BUILT"),
    ("06-opensource", "06", "PUBLIC REPOSITORIES"),
    ("07-stack", "07", "TECH STACK"),
    ("08-experience", "08", "EXPERIENCE"),
]

FONT_IMPORT = "@import url('https://fonts.googleapis.com/css2?family=Raleway:wght@600;700&amp;display=swap');"


def svg_for(slug: str, kicker: str, title: str, theme: dict) -> str:
    grad_id = f"grad-{slug}"
    g0, g1, g2 = theme["gradient"]
    return f'''<svg width="{WIDTH}" height="{HEIGHT}" viewBox="0 0 {WIDTH} {HEIGHT}" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="{title}">
  <title>{title}</title>
  <defs>
    <linearGradient id="{grad_id}" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="{g0}"/>
      <stop offset="55%" stop-color="{g1}"/>
      <stop offset="100%" stop-color="{g2}"/>
    </linearGradient>
    <style>
      {FONT_IMPORT}
      .kicker {{ font-family: 'Raleway', 'Segoe UI', system-ui, sans-serif; font-weight: 700; font-size: 13px; letter-spacing: 4px; fill: url(#{grad_id}); }}
      .title  {{ font-family: 'Raleway', 'Segoe UI', system-ui, sans-serif; font-weight: 700; font-size: 30px; letter-spacing: 2px; fill: {theme["text"]}; }}
    </style>
  </defs>

  <text x="2" y="30" class="kicker">{kicker} &#8212;</text>
  <text x="2" y="66" class="title">{title}</text>

  <rect x="2" y="{HEIGHT - 6}" width="{WIDTH - 4}" height="2" rx="1" fill="{theme["line"]}"/>
  <rect x="2" y="{HEIGHT - 6}" width="140" height="2" rx="1" fill="url(#{grad_id})"/>
</svg>
'''


def main():
    for theme_name, theme in THEMES.items():
        out_dir = os.path.join(OUT_DIR, theme_name)
        os.makedirs(out_dir, exist_ok=True)
        for slug, kicker, title in SECTIONS:
            path = os.path.join(out_dir, f"{slug}.svg")
            with open(path, "w") as f:
                f.write(svg_for(slug, kicker, title, theme))
            print(f"wrote {os.path.relpath(path, ROOT)}")


if __name__ == "__main__":
    main()
