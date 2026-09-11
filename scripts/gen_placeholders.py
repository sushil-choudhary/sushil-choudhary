#!/usr/bin/env python3
"""
Writes placeholder SVGs for every asset that is normally produced by CI
(.github/workflows/update-stats.yml and generate-snake.yml), so the README
never 404s on a fresh clone before the workflows have run once.

These are overwritten by the workflows on first run — do not hand-edit the
output files, edit this script (or the workflow) instead.

Run: python3 scripts/gen_placeholders.py
"""
import os

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

FONT_IMPORT = "@import url('https://fonts.googleapis.com/css2?family=Raleway:wght@600&amp;display=swap');"

THEMES = {
    "dark": {"bg": "#0D1117", "border": "#30363D", "text": "#8B949E"},
    "light": {"bg": "#FFFFFF", "border": "#D0D7DE", "text": "#57606A"},
}

CARDS = [
    ("assets/cards/stats-{theme}.svg", 495, 195, "Stats refresh after first Action run"),
    ("assets/cards/langs-{theme}.svg", 300, 195, "Languages refresh after first Action run"),
    ("assets/cards/streak-{theme}.svg", 495, 195, "Streak refreshes after first Action run"),
    ("assets/cards/activity-graph-{theme}.svg", 700, 200, "Activity graph refreshes after first Action run"),
]

SNAKES = [
    ("assets/snake-{theme}.svg", 880, 136, "Snake renders after first Action run"),
]


def placeholder(width, height, label, theme):
    return f'''<svg width="{width}" height="{height}" viewBox="0 0 {width} {height}" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="{label}">
  <title>{label}</title>
  <style>{FONT_IMPORT}
    .msg {{ font-family: 'Raleway', 'Segoe UI', system-ui, sans-serif; font-weight: 600; font-size: 13px; fill: {theme["text"]}; }}
  </style>
  <rect x="0.5" y="0.5" width="{width - 1}" height="{height - 1}" rx="8" fill="{theme["bg"]}" stroke="{theme["border"]}" stroke-dasharray="4 4"/>
  <text x="{width / 2:.1f}" y="{height / 2 + 4:.1f}" text-anchor="middle" class="msg">{label}</text>
</svg>
'''


def main():
    for template, w, h, label in CARDS + SNAKES:
        for theme_name, theme in THEMES.items():
            rel = template.format(theme=theme_name)
            path = os.path.join(ROOT, rel)
            os.makedirs(os.path.dirname(path), exist_ok=True)
            if os.path.exists(path):
                continue  # never clobber a real, already-generated asset
            with open(path, "w") as f:
                f.write(placeholder(w, h, label, theme))
            print(f"wrote {rel}")


if __name__ == "__main__":
    main()
