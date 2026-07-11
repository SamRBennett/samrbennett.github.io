# curiosity maxxing

Personal blog — building, learning, and trading in the open. Live at
[curiositymaxxing.xyz](https://curiositymaxxing.xyz).

## Stack

- [Astro](https://astro.build) static site, Markdown posts in `src/content/posts/`
- System-font, single-column, no client JS
- Deployed to GitHub Pages via GitHub Actions on push to `main`

## Writing

```sh
npm run dev      # local preview
npm run build    # static build to dist/
```

Drop a `.md` in `src/content/posts/` (frontmatter: `title`, `date`,
`description`) and push. Work-in-progress lives in `src/content/posts/_drafts/`,
which is git-ignored and never published.
