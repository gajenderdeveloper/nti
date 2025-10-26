Place your hero images in this folder and add a `list.json` file listing their public paths.

Example `list.json` content (save as `public/hero-section/list.json`):

[
  "/hero-section/slide1.jpg",
  "/hero-section/slide2.jpg",
  "/hero-section/slide3.jpg"
]

The `TiltCard` component will automatically fetch `/hero-section/list.json` at runtime and use the array entries as slides.

If `list.json` is not present, the TiltCard will fall back to default placeholders.
