#!/usr/bin/env python3
"""
Generates the "Engineering Snapshot" card — a custom SVG stat card.

Unlike the cards in assets/cards/ (which are pulled live from the GitHub API
by .github/workflows/update-stats.yml), these four numbers are not GitHub
telemetry — they're career facts from the portfolio at
https://sushil.vercel.app (Resume / Home sections). They don't change on a
schedule, so this script is run by hand whenever the underlying facts change
(e.g. years of experience ticks up), not by CI.

Run: python3 scripts/gen_snapshot_card.py
"""
import os

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
OUT_DIR = os.path.join(ROOT, "assets", "cards")

FONT_IMPORT = "@import url('https://fonts.googleapis.com/css2?family=Raleway:wght@600;700&amp;display=swap');"

STATS = [
    ("5+", "Years Experience"),
    ("8+", "Engineers Led"),
    ("10+", "Engineers Mentored"),
    ("10+", "Platforms Shipped"),
]

WIDTH = 700
HEIGHT = 140
CELL_W = WIDTH / 4

THEMES = {
    "dark": {
        "bg": "#0D1117",
        "border": "#30363D",
        "number_gradient": ["#C770F0", "#9B5DE5", "#60A5FA"],
        "label": "#8B949E",
        "divider": "#21262D",
    },
    "light": {
        "bg": "#FFFFFF",
        "border": "#D0D7DE",
        "number_gradient": ["#7C3AED", "#9333EA", "#2563EB"],
        "label": "#57606A",
        "divider": "#EAEEF2",
    },
}


def card_svg(theme_name: str, theme: dict) -> str:
    g0, g1, g2 = theme["number_gradient"]
    grad_id = f"snapshot-grad-{theme_name}"

    cells = []
    for i, (value, label) in enumerate(STATS):
        cx = CELL_W * i + CELL_W / 2
        cells.append(
            f'<text x="{cx:.1f}" y="70" text-anchor="middle" class="value">{value}</text>'
            f'<text x="{cx:.1f}" y="98" text-anchor="middle" class="label">{label.upper()}</text>'
        )
        if i > 0:
            x = CELL_W * i
            cells.append(f'<line x1="{x:.1f}" y1="30" x2="{x:.1f}" y2="{HEIGHT - 30}" stroke="{theme["divider"]}" stroke-width="1"/>')

    body = "\n  ".join(cells)

    return f'''<svg width="{WIDTH}" height="{HEIGHT}" viewBox="0 0 {WIDTH} {HEIGHT}" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Engineering snapshot">
  <title>Engineering snapshot</title>
  <defs>
    <linearGradient id="{grad_id}" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="{g0}"/>
      <stop offset="55%" stop-color="{g1}"/>
      <stop offset="100%" stop-color="{g2}"/>
    </linearGradient>
    <style>
      {FONT_IMPORT}
      .value {{ font-family: 'Raleway', 'Segoe UI', system-ui, sans-serif; font-weight: 700; font-size: 34px; fill: url(#{grad_id}); }}
      .label {{ font-family: 'Raleway', 'Segoe UI', system-ui, sans-serif; font-weight: 600; font-size: 11px; letter-spacing: 1px; fill: {theme["label"]}; }}
    </style>
  </defs>
  <rect x="0.5" y="0.5" width="{WIDTH - 1}" height="{HEIGHT - 1}" rx="12" fill="{theme["bg"]}" stroke="{theme["border"]}"/>
  {body}
</svg>
'''


def main():
    os.makedirs(OUT_DIR, exist_ok=True)
    for theme_name, theme in THEMES.items():
        path = os.path.join(OUT_DIR, f"snapshot-{theme_name}.svg")
        with open(path, "w") as f:
            f.write(card_svg(theme_name, theme))
        print(f"wrote {os.path.relpath(path, ROOT)}")


if __name__ == "__main__":
    main()
