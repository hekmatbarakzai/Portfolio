# Hekmatullah Barakzai — Portfolio Website

A responsive static portfolio built with HTML, CSS, and JavaScript, customized with Hekmatullah Barakzai's information and existing projects. No framework or paid hosting required.

## Included

- Personal name, title, About Me, and direct contact email
- English and Dari language switching (including project descriptions and contact form placeholders)
- Dark/light theme and mobile navigation
- Skills/interests without made-up ratings
- Two existing project entries: Hikmat AI and Gym Management System
- Gym Management System links to a publicly accessible GitHub repository; Hikmat AI shows a website link only because the previous GitHub repository URL is not currently publicly accessible. Its website URL also needs a manual check.
- Education and hands-on project experience, without imaginary job history or testimonials
- Email composition form (`mailto:`) and direct email link
- Monogram "HB" avatar so no missing photo breaks the design

## Files

- `index.html` — sections and personal copy
- `script.js` — language strings, project cards, functionality
- `styles.css` — responsive design and themes
- `assets/favicon.svg` — branded favicon

## Change details later

1. In `index.html`, search for your name, title, contact email, and biography.
2. In `script.js`, edit translations in `translations.en` and `translations.fa` together to keep both languages current.
3. To add or update a project, edit the `projects` array in `script.js` (names, descriptions, URLs, and technology tags). Add a public `github` URL for Hikmat AI when you want its **View Code** button to appear.
4. To add your own photo later, replace the content of `.avatar-content` inside `.ring` in `index.html` with `<img src="assets/photo.jpg" alt="Hekmatullah Barakzai" width="360" height="360">`, and add a square JPG to `assets/photo.jpg`. Existing `.ring img` CSS will style it.
5. No CV button is shown because a CV PDF was not provided. Add one only after uploading an actual `cv.pdf`.

## Email form behavior

Because this is a static site without a backend, the form opens the visitor's email program with a prepared draft. **It does not automatically send any message.** Visitors who do not have a configured mail app can use the visible direct email address. To receive web form submissions without visitors using an email client, integrate a provider (e.g. Formspree) later.

## GitHub + Vercel deployment

1. Copy these files into the root of your existing GitHub-connected portfolio project, replacing its earlier `index.html`, `script.js`, `styles.css` and `README.md`. Keep `assets/favicon.svg` within the `assets` folder.
2. From VS Code terminal:

   ```bash
   git add .
   git commit -m "Personalize portfolio website"
   git push
   ```

3. In your existing Vercel project, check that the Git repository and branch are connected. Select framework **Other** and root directory `./` for this simple static website. Vercel deploys new pushes automatically when Git integration is configured.
4. Open the Vercel URL and test the English/Dari button, theme button, both project links and contact email.

No private API tokens are included or needed.
