# Mohamed Lamgouni — Portfolio

Responsive React + TypeScript portfolio built with Vite, Tailwind CSS v4, Framer Motion, Lucide, and locally bundled Geist fonts.

## Run

```sh
npm install
npm run dev
```

```sh
npm run build
npm run preview
```

Deploy the generated `dist/` directory to any static host. Relative asset paths support subdirectory hosting.

## Personalize before publishing

Edit `src/data.ts` to set the real email, social URLs, portrait, availability, project dates, project image paths, and case-study URLs. Empty email and social URLs produce clearly unavailable controls instead of fake destinations. Project cards open accessible scope summaries until full case studies are supplied.

The supplied photograph in `public/portrait.jpg` fills the original rounded portrait frame, preserving its grayscale/color hover effect, caption and monogram. The earlier generated artwork remains saved as an unused asset. Replace illustrative project covers with real artwork using each project's `image` field. All covers explicitly identify themselves as placeholders. Project names and descriptions are based on the supplied portfolio-information PDF. Only MIND DESIGN has a supplied date.

`public/Mohamed-Lamgouni-CV.pdf` is a factual CV prepared from the supplied document. Update it when contact information becomes available. No invented experience, metrics, client results, or dates are included.

Dark/light themes persist when browser storage is available. Email copying reports success and failure; a mail link provides recovery. Native project dialogs support Escape, focus trapping, and focus restoration. Motion respects reduced-motion preferences. Morocco's clock uses the IANA Africa/Casablanca timezone, including seasonal offset changes.

Selective glass finishes enhance the sticky header, portrait caption, availability badge and small controls. Theme-aware translucent fills keep the original layout and solid content surfaces intact.

## Verification

LV Manager and Zamani each use three supplied artwork images in auto-sliding carousels with manual selection and pause controls. Zamani uses a portrait frame to preserve its label and product photography without cropping. Autoplay pauses on hover, keyboard focus and when out of view; reduced-motion settings disable it. The portrait caption sits below the image rather than obscuring it.

Production TypeScript/Vite build passed. Headless Edge checks passed at 360px, 1440px and 2560px without horizontal overflow or runtime errors. Checks also verified theme persistence, anchor navigation, dialog dismissal with Escape, and PDF download. Dark/light desktop and mobile screenshots received a bounded visual review; the three identified mobile/header findings were corrected and scored resolved.

Before publication, supply project artwork, contact and profile links, missing dates, and confirm availability. The compiled site is ready for static hosting, but those content placeholders remain intentional.
