# Feedback Widget Next

> **A modern, full-stack feedback widget built with Next.js, React, Tailwind CSS, and Prisma (MongoDB).**

---

## Live Demo & Integration

- **Live Widget:** [https://widget-feedback-next.vercel.app/](https://widget-feedback-next.vercel.app/)
- **Integrated Example:** [https://marketing-arnob.netlify.app/](https://marketing-arnob.netlify.app/)
- **Integration Repo:** [Marketing--TailwindCSS-Fundamental-Project-2](https://github.com/arnobt78/Marketing--TailwindCSS-Fundamental-Project-2)

---

## Table of Contents

1. [Project Summary](#project-summary)
2. [Features](#features)
3. [Screenshots](#screenshots)
4. [Live Demo & Integration](#live-demo--integration)
5. [Project Structure](#project-structure)
6. [Technology Stack](#technology-stack)
7. [Prerequisites](#prerequisites)
8. [Installation](#installation)
9. [Environment Variables](#environment-variables)
10. [Database Setup](#database-setup)
11. [Usage Instructions](#usage-instructions)
12. [Widget Integration](#widget-integration)
13. [Development & Customization](#development--customization)
14. [ESLint & Tailwind CSS Configuration](#eslint--tailwind-css-configuration)
15. [React Testing](#react-testing)
16. [Keywords & Topics](#keywords--topics)
17. [Learn More](#learn-more)
18. [About](#about)
19. [Conclusion](#conclusion)

---

## Project Summary

Feedback Widget Next is a reusable, embeddable feedback widget for modern web projects. Users can submit feedback (name, email, message, rating), which is stored in a MongoDB database via Prisma. The widget is designed for easy integration, customization, and educational purposes.

---

## Features

- **Reusable Widget Component**: Easily add, customize, and extend widgets.
- **API Route Example**: Feedback API route for backend integration.
- **Prisma ORM**: Type-safe database access and schema management (MongoDB or PostgreSQL).
- **Tailwind CSS**: Utility-first, responsive styling.
- **UI Component Library**: Modular, reusable UI components (Button, Card, Input, etc.).
- **TypeScript & JavaScript**: Mixed usage for flexibility and gradual migration.
- **Ready for Testing**: Easily add React tests (see below for test instructions).
- **Widget Embedding**: Can be built and embedded in other projects as a UMD bundle.
- **Vercel Deployment**: Fast, global delivery with serverless functions.

---

## Technology Stack

- **Next.js** (App Router)
- **React** (Functional Components)
- **Tailwind CSS** (Styling)
- **Prisma** (ORM for MongoDB or PostgreSQL)
- **TypeScript & JavaScript**
- **PostCSS**
- **ESLint**

---

## Project Structure

```bash
feedback-widget-next/
├── components.json
├── eslint.config.mjs
├── next-env.d.ts
├── next.config.ts
├── package.json
├── postcss.config.js
├── tailwind.config.js
├── tsconfig.json
├── prisma/
│   └── schema.prisma
├── public/
│   └── *.svg, widget.umd.js, ...
├── src/
│   ├── app/
│   │   ├── favicon.ico
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   ├── page.jsx
│   │   ├── page.module.css
│   │   └── api/
│   │       └── feedback/route.js
│   ├── components/
│   │   ├── Widget.jsx
│   │   └── ui/
│   │       ├── button.jsx, button.tsx
│   │       ├── card.tsx
│   │       ├── input.jsx, input.tsx
│   │       ├── label.jsx, label.tsx
│   │       ├── popover.jsx, popover.tsx
│   │       ├── separator.jsx
│   │       ├── textarea.jsx, textarea.tsx
│   └── lib/
│       ├── prisma.js
│       ├── utils.js, utils.ts
```

---

## Getting Started

### 1. Clone the repository

```bash
git clone <your-repo-url>
cd feedback-widget-next
```

### 2. Install dependencies

```bash
npm install
# or
yarn install
# or
pnpm install
# or
bun install
```

---

## Environment Variables

Create a `.env` file in the root directory and add the following (example for MongoDB):

```sh
DATABASE_URL="mongodb+srv://USER:PASSWORD@CLUSTER.mongodb.net/DATABASE?retryWrites=true&w=majority"
```

---

## Database Setup

1. **Edit your Prisma schema (`prisma/schema.prisma`) as needed.**
2. **Push your schema to the database:**

```bash
npx prisma generate
npx prisma db push
```

---

## Usage Instructions

### Running the Development Server

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Visit [http://localhost:3000](http://localhost:3000) in your browser.

### Building the Widget UMD Bundle

```bash
npm run build:widget
```

This will output `widget.umd.js` in the `public/` directory, ready for embedding.

---

## Widget Integration Guide

You can embed the feedback widget into any HTML page (including other projects) with just a few lines:

```html
<!-- Load React and ReactDOM UMD builds for the widget -->
<script src="https://unpkg.com/react@18/umd/react.production.min.js"></script>
<script src="https://unpkg.com/react-dom@18/umd/react-dom.production.min.js"></script>
<!-- Include the widget script from your Vercel deployment -->
<script src="https://widget-feedback-next.vercel.app/widget.umd.js"></script>
<my-widget
  api-base="https://widget-feedback-next.vercel.app/api/feedback"
></my-widget>
```

- The `api-base` attribute should point to your deployed Next.js API endpoint.
- The widget will automatically inject its styles and handle feedback submission.

**To integrate into your own project:**

1. Deploy this project to Vercel.
2. Copy the script and `<my-widget>` tag above into your HTML.
3. Optionally, style or position the widget as needed.

---

## Development & Customization

- **Add new UI components** in `src/components/ui/`.
- **Update database schema** in `prisma/schema.prisma` and run `npx prisma db push`.
- **Customize Tailwind** in `tailwind.config.js`.
- **Utility functions** in `src/lib/utils.js` and `src/lib/utils.ts`.

---

## ESLint & Tailwind CSS Configuration

- **ESLint:** See `eslint.config.mjs` for linting rules. Example:

```js
import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
];

export default eslintConfig;
```

- **Tailwind CSS:** See `tailwind.config.js` for theme and content settings. Example:

```js
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./app/**/*.{js,jsx}",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      // ...custom colors, borderRadius, keyframes, etc.
    },
  },
  plugins: [require("tailwindcss-animate")],
};
```

---

## React Testing

This project is ready for adding React tests. To add tests:

1. Install a test runner (e.g., Jest, React Testing Library):

   ```bash
   npm install --save-dev jest @testing-library/react @testing-library/jest-dom
   ```

2. Add test files alongside your components, e.g., `Widget.test.jsx`.
3. Run tests with:

   ```bash
   npm test
   # or
   yarn test
   ```

4. For more, see [React Testing Library Docs](https://testing-library.com/docs/react-testing-library/intro/).

---

## Keywords & Topics

widget, reactjs, feedback, mongodb, feedback-form, widget-manager, tailwindcss, feedback-collector, feedback-widget, easy-integration, nextjs, prisma, fullstack, typescript, component-library, api, vercel, modern-web, boilerplate, teaching, example

---

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Learn Next.js](https://nextjs.org/learn)
- [Next.js GitHub Repository](https://github.com/vercel/next.js)
- [Prisma Documentation](https://www.prisma.io/docs/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)

---

## About

This project is designed as a teaching and demonstration tool for modern React, Next.js, and TailwindCSS workflows, with a focus on real-world integration patterns and best practices. It is ideal for learning, rapid prototyping, and production use.

---

## Conclusion

Feedback Widget Next provides a robust starting point for building embeddable widgets and APIs for modern web projects. The modular approach allows for easy integration and extension, making it ideal for both learning and production use.

---

If you have questions or want to contribute, feel free to open an issue or pull request!
