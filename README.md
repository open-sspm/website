# Open-SSPM Website

Static website for [Open-SSPM](https://github.com/open-sspm/open-sspm).

## Development

1. Install dependencies:
   ```bash
   npm install
   ```

2. Build site:
   ```bash
   npm run build
   ```

3. Watch CSS:
   ```bash
   npm run watch
   ```

## Deployment

### Cloudflare Pages

- Build command: `npm run build`
- Build output directory: `site`

If you want to deploy via Wrangler (e.g., from CI), set `CLOUDFLARE_API_TOKEN` and run `npm run deploy`.
