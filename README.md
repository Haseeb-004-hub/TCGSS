# The Chenab Galaxy School System

A responsive static school website built with HTML, CSS, and vanilla JavaScript. It is designed for direct upload to GitHub and deployment on Vercel.

## Project files

- `index.html` — website content and page structure
- `style.css` — styling, brand palette, and responsive layouts
- `script.js` — mobile menu, enquiry form, and dynamic copyright year
- `assets/images/` — put your actual logo and banner images here

## Add your actual images before publishing

Copy your school's images into `assets/images/` using these recommended filenames:

- `school-logo.png`
- `school-banner.jpg`

If your files have different names/extensions, update the matching image references in `index.html` and the banner reference in `style.css`. Keep filenames and letter case exactly the same because Vercel paths are case-sensitive. The ZIP includes an `UPLOAD-IMAGES-HERE.txt` reminder, not actual logo/banner photos, because the images were not attached when this package was created.

## Contact and branches

The supplied contact number is `03456842045`. WhatsApp uses international format `923456842045`. Branch details are in `index.html`; update all visible addresses and map search links if the school provides more precise addresses.

## Admissions form

The form validates the required details and opens WhatsApp with a prefilled enquiry message. The parent/guardian must press **Send** in WhatsApp. Since this is a static site, submissions are not automatically saved to a database or emailed. A backend or form service would be needed for that.

## Preview locally

Open `index.html` in a browser, or open the folder in Cursor/VS Code and use the Live Server extension for a local preview.

## Upload to GitHub

1. Extract the ZIP on your computer.
2. Add your logo and banner to `assets/images/`.
3. Create a GitHub repository.
4. Upload the contents of the extracted `the-chenab-galaxy-school` folder (including the `assets` folder), not the ZIP file itself.
5. Commit the files to the repository's main branch.

## Deploy on Vercel

1. Sign in to Vercel and select **Add New → Project**.
2. Import your GitHub repository.
3. For a plain static HTML project, use **Other** if asked for a framework preset.
4. No build command is required. Leave the output directory empty/default unless Vercel requests a value.
5. Deploy, then test the website on desktop and mobile, including images, phone links, map links, and the WhatsApp enquiry form.

When you commit changes to the connected GitHub repository, Vercel normally deploys the updated version automatically.

## Brand colors

- Navy Blue: `#1D3768`
- Red: `#D91F32`
- Yellow / Gold: `#FFC329`
- White: `#FFFFFF`

## Before going live

Confirm which academic stages are offered, replace gallery placeholders with approved school photos, verify all school information, and test the WhatsApp recipient. The school news section intentionally does not invent announcements or achievements.
