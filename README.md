# The Chenab Galaxy School System — Website

A responsive static school website built with HTML, CSS and JavaScript.

## Files
- `index.html` — website content and page structure
- `style.css` — design, layout and responsive styling
- `script.js` — mobile navigation, current year and enquiry form
- `school-logo.jpg` — school crest cropped from the supplied school poster

## Run locally
1. Extract this folder.
2. Open `index.html` in a browser.

For a local development server, you can use the VS Code Live Server extension.

## Before publishing
Review the school details in `index.html`:
- Branch 1: RAMKAY, BEHAL PUR, Gujrat
- Branch 2: Qudrat Abad, near Shaheen Chowk, Gujrat
- Phone: 03456842045
- Email: chenabgalaxy@gmail.com (from the supplied school poster)
- Learning stages / grades actually offered
- Any facilities, policies, photos and admissions details

The enquiry form opens the visitor's email app; it does not send or store submissions on a server.

## Publish using GitHub and Vercel
1. Create a GitHub repository named `chenab-galaxy-school-system`.
2. Upload `index.html`, `style.css`, `script.js`, and `README.md` to the repository root.
3. Open Vercel and import the GitHub repository.
4. For this static site, no framework build command is needed. If Vercel asks for a framework preset, select **Other**. Leave the output directory blank unless Vercel's current interface requires a value.
5. Deploy and test the live site on both desktop and mobile.

## Important
This is a starter website. It does not currently include a backend, online admissions submission, student portal, payment system or database. Do not publish unverified school claims or placeholder contact information.


## School branding
The stylesheet uses a brand palette inspired by the supplied school poster:
- Navy blue
- Red
- Yellow / gold
- White and light neutral backgrounds

Typography uses Oswald for bold school headings and Roboto for body copy, with Playfair Display available for optional elegant accent text. Google Fonts requires an internet connection; system fallbacks are provided.


The header and footer use `school-logo.jpg`. Keep this file in the same repository folder as `index.html`.
