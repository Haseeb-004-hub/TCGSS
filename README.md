# The Chenab Galaxy School System — Website

A responsive static school website built with HTML, CSS and JavaScript.

## Files
- `index.html` — website content and page structure
- `style.css` — design, layout and responsive styling
- `script.js` — mobile navigation, current year and demo enquiry form

## Run locally
1. Extract this folder.
2. Open `index.html` in a browser.

For a local development server, you can use the VS Code Live Server extension.

## Before publishing
Update the placeholder school details in `index.html`:
- School address
- School phone number
- School email address
- Learning stages / grades actually offered
- Any facilities, policies, photos and admissions details

In `script.js`, replace `SCHOOL_EMAIL` with the real public school email address. The enquiry form opens the visitor's email app; it does not send or store submissions on a server.

## Publish using GitHub and Vercel
1. Create a GitHub repository named `chenab-galaxy-school-system`.
2. Upload `index.html`, `style.css`, `script.js`, and `README.md` to the repository root.
3. Open Vercel and import the GitHub repository.
4. For this static site, no framework build command is needed. If Vercel asks for a framework preset, select **Other**. Leave the output directory blank unless Vercel's current interface requires a value.
5. Deploy and test the live site on both desktop and mobile.

## Important
This is a starter website. It does not currently include a backend, online admissions submission, student portal, payment system or database. Do not publish unverified school claims or placeholder contact information.
