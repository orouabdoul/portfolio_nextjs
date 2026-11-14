This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

## Testimonials (Firebase)

The testimonial form writes directly to the `testimonials` collection in Cloud Firestore. Reviews with explicit consent are published immediately and appear in the section in real time. No sample or fabricated reviews are included.

1. Create a Firebase project, register a web app, and enable Cloud Firestore.
2. Copy `.env.example` to `.env.local` and fill in the Firebase Web App API key, project ID, and app ID. These client configuration values are public; do not put private service-account credentials in `NEXT_PUBLIC_` variables.
3. Deploy the Firestore rules and index in `firestore.rules` and `firestore.indexes.json` using the Firebase CLI (`firebase use --add`, then `firebase deploy --only firestore`), or paste the rules in the Firebase console and create the composite index (`status` ascending, `createdAt` descending).
4. For public submissions, register reCAPTCHA v3 in Firebase App Check and set `NEXT_PUBLIC_FIREBASE_APP_CHECK_SITE_KEY`. Monitor App Check traffic, then enable enforcement for Cloud Firestore in the Firebase console.

Restart the development server after changing `.env.local`. Set the same `NEXT_PUBLIC_` values in the production build environment. Because reviews are published immediately, the Firestore rules restrict review fields and prohibit public edits and deletions; App Check should be enabled before launch to reduce automated abuse.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
