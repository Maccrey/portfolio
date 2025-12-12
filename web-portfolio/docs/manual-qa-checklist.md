# Manual QA Checklist

Certain experiences are difficult to cover with Playwright, so run the checks below before every release.

## 1. Mobile (iOS Safari / Android Chrome)
- Build the site (`npm run build`) and open the static export on a real device or BrowserStack.
- Scroll through `/projects` and `/contact`, verifying there is no layout shift and that body copy remains legible at default system font size.
- Zoom to 125% to confirm cards remain within the safe area without horizontal scrolling.

## 2. Theme Toggle vs OS Setting
- Set the device/desktop OS theme to dark, reload the site, and ensure the page respects the OS preference on first paint.
- Toggle the in-app Theme switch several times; confirm it overrides (but does not fight) the OS setting and the body retains the chosen `data-theme` value after navigation.

## 3. External Forms Links
- Click the Formspree/Google Form CTA from the Contact section.
- Verify the URL belongs to the official Maccrey account and that submitting a dummy payload reaches the correct inbox without CORS errors.

## 4. Custom Domain + HTTPS
- After deploying to GitHub Pages, visit the custom domain over HTTPS.
- Ensure the TLS certificate is valid, no mixed-content warnings appear, and that redirection from the `github.io` domain to the custom domain succeeds within two hops.
