This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

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

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## Project Structure

The project structure is as follows:

```
.
├── app
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components.json
├── next.config.mjs
├── package.json
├── postcss.config.mjs
├── public
│   ├── next.svg
│   └── vercel.svg
├── tailwind.config.ts
├── tsconfig.json
└── .eslintrc.json
```

## Tailwind CSS

This project uses Tailwind CSS for styling. The configuration can be found in `tailwind.config.ts` and `app/globals.css`.

## Utilities

Utility functions are located in `lib/utils.ts`. The `cn` function is used to merge class names.

## Aliases

The project uses path aliases defined in `components.json` and `tsconfig.json`:

```json
{
  "aliases": {
    "components": "@/components",
    "utils": "@/lib/utils",
    "ui": "@/components/ui",
    "lib": "@/lib",
    "hooks": "@/hooks"
  }
}
```

## TypeScript

The project is written in TypeScript. Type definitions and configurations are located in `tsconfig.json`.

## Linting

ESLint is used for linting. The configuration can be found in `.eslintrc.json`.

## PostCSS

PostCSS is used for processing CSS. The configuration can be found in `postcss.config.mjs`.

## Git Ignore

The `.gitignore` file includes common files and directories to be ignored by Git.
