# Priyanshu Kashyap — Portfolio

React 19 + Vite personal portfolio. Run locally with `npm install` and `npm run dev`; create a production bundle with `npm run build`.

## Add portfolio content

The repository initially contained the unmodified Vite starter rather than the portfolio content, and the live portfolio could not be reached during this update. Replace the clearly marked project and technology placeholders in `src/App.jsx` with verified project titles, summaries, tags, preview images, and real live/GitHub URLs. Add only technologies and biographical details that are accurate. The repository's `src/assets/hero.png` is Vite's decorative starter illustration, not a personal portrait, so the new hero uses a CSS illustration instead.

## Contact form delivery

The form posts to `/.netlify/functions/contact`. The Netlify function forwards messages to `priyanshukashyap844@gmail.com` through FormSubmit, so no provider API key is needed. On the first real submission, FormSubmit sends an activation email to that inbox; click its confirmation link to enable ongoing delivery. The function can also use a `CONTACT_TO` environment variable to change the destination.

Deploy on Netlify with the repository root set to this `Portfolio` directory and the publish directory set to `dist`. Netlify detects functions in `netlify/functions`. For local function testing, use Netlify CLI (`netlify dev`). The form has server-side field validation and a honeypot; add provider-side or edge rate limiting if abuse becomes a concern. FormSubmit processes the submitted contact details, and its own retention and privacy terms apply.
