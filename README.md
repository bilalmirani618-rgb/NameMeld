# NameMeld

**Discover. Generate. Convert. Explore.**

NameMeld is an all-in-one name platform for discovering meanings, generating unique names, converting names to Japanese Katakana, spinning a random name wheel, and more.

## Features

- 🔍 **Name Meaning Finder** – Discover meaning, origin, pronunciation, variants and related names
- ✨ **Name Generator** – Generate names based on style, gender, origin and meaning
- 🇯🇵 **Japanese Converter** – Convert names into Japanese Katakana script
- 🎡 **Name Wheel** – Randomly select a name with an interactive spinning wheel
- 💼 **Brand Name Generator** – Create memorable names for businesses and projects
- 🔗 **Name Combiner** – Combine two names into creative combinations
- 👶 **Baby Name Generator** – Find baby names based on preferences
- 📊 **Name Popularity** – Explore available popularity and trend information

## Tech Stack

- React 18
- TypeScript
- Tailwind CSS v4
- React Router DOM
- Vite

## How to Run Locally

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

## File Structure

```
NameMeld/
├── index.html              # Main HTML with SEO meta tags
├── src/
│   ├── App.tsx             # Main app with routing
│   ├── main.tsx            # Entry point
│   ├── index.css           # Global styles + Tailwind
│   ├── components/
│   │   └── Layout.tsx      # Navbar, Footer, Ad placeholders
│   ├── data/
│   │   ├── names.ts        # Name database with curated entries plus transparent universal fallback search
│   │   └── japaneseMap.ts  # Katakana conversion mapping
│   ├── utils/
│   │   └── helpers.ts      # Utility functions
│   └── pages/
│       ├── Home.tsx         # Homepage
│       ├── NameProfile.tsx  # Name profile + meaning tool
│       ├── NameGenerator.tsx
│       ├── JapaneseConverter.tsx
│       ├── NameWheel.tsx
│       ├── BrandGenerator.tsx
│       ├── NameCombiner.tsx
│       ├── BabyNames.tsx
│       ├── Popularity.tsx
│       ├── Favorites.tsx
│       └── StaticPages.tsx  # About, Privacy, Terms
```

## Deployment

### Netlify
1. Push to GitHub
2. Connect repo to Netlify
3. Build command: `npm run build`
4. Publish directory: `dist`

### Vercel
1. Push to GitHub
2. Import project in Vercel
3. Framework preset: Vite
4. Deploy

### Cloudflare Pages
1. Push to GitHub
2. Connect the repository to Cloudflare Pages
3. Build command: `npm run build`
4. Output directory: `dist`
5. The project includes SEO metadata, a sitemap, robots.txt, and Cloudflare-compatible headers.

> The included sitemap/robots files use `https://namemeld.pages.dev` as the initial site URL. If Cloudflare assigns a different `pages.dev` address, update those two files before submitting the sitemap to Search Console.

### GitHub Pages
1. Build: `npm run build`
2. Deploy `dist` folder to `gh-pages` branch

## How to Add Names to the Database

Edit `src/data/names.ts` and add entries to the `namesDatabase` array:

```typescript
{
  name: "YourName",
  slug: "yourname",
  gender: "Male", // "Male" | "Female" | "Unisex"
  origin: "Arabic",
  meaning: "Description of meaning...",
  pronunciation: "your-NAH-mee",
  alternateNames: ["Variant1", "Variant2"],
  nicknames: ["Nick1"],
  relatedNames: ["Related1", "Related2"],
  similarNames: ["Similar1"],
  famousPeople: ["Famous Person – Description"],
  categories: ["Muslim", "Arabic"],
  popularity: { available: false }
}
```

## How to Add Future Ad Code

Ad placeholders are already built into the layout. To add real ads:

1. Find `.ad-container` elements in `src/components/Layout.tsx` and page files
2. Replace placeholder content with your ad network code
3. Update CSS classes in `src/index.css` as needed

## How to Replace Sample Popularity Data

Edit the `popularity` field in name entries:

```typescript
popularity: {
  available: true,
  data: [
    { year: 2020, rank: 45 },
    { year: 2021, rank: 42 },
    { year: 2022, rank: 40 }
  ]
}
```

## How to Add New Tools

1. Create a new page component in `src/pages/`
2. Add a route in `src/App.tsx`
3. Add a navigation link in `src/components/Layout.tsx`
4. Add a card on the homepage in `src/pages/Home.tsx`

## License

© 2026 NameMeld. All rights reserved.
