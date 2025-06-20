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
- **Prisma ORM (MongoDB)**: Type-safe database access and schema management.
- **Tailwind CSS**: Utility-first, responsive styling.
- **UI Component Library**: Modular, reusable UI components (Button, Card, Input, etc.).
- **TypeScript & JavaScript**: Mixed usage for flexibility and gradual migration.
- **Ready for Testing**: Easily add React tests (see below for test instructions).
- **Widget Embedding**: Can be built and embedded in other projects.

---

## Project Structure

```text
/ (root)
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
│   └── *.svg, screenshot1.png, ...
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

## Technology Stack

- **Next.js** (App Router)
- **React** (Functional Components)
- **Tailwind CSS** (Styling)
- **Prisma** (ORM for MongoDB)
- **TypeScript & JavaScript**
- **PostCSS**
- **ESLint**

---

## Prerequisites

- Node.js (v18+ recommended)
- npm, yarn, pnpm, or bun
- MongoDB database (local or cloud, e.g. MongoDB Atlas)

---

## Installation

1. **Clone the repository:**

   ```bash
   git clone <your-repo-url>
   cd feedback-widget-next
   ```

2. **Install dependencies:**

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

1. **Your Prisma schema (`prisma/schema.prisma`) should look like:**

```prisma
// This is your Prisma schema file

generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "mongodb"
  url      = env("DATABASE_URL")
}

model Feedback {
  id        String   @id @default(auto()) @map("_id") @db.ObjectId
  name      String?
  email     String?
  message   String
  rating    Int?
  createdAt DateTime @default(now())
}
```

1. **Push your schema to MongoDB:**

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

### Editing Pages & Widgets

- Main page: `src/app/page.jsx`
- Layout: `src/app/layout.tsx`
- Global styles: `src/app/globals.css`
- Widget logic: `src/components/Widget.jsx`
- UI components: `src/components/ui/`

### API Routes

- Example backend route: `src/app/api/feedback/route.js`
  - Accepts: `{ name, email, message, rating }`
  - Returns: Created feedback or error

---

## Widget Integration

You can build and embed this widget in other projects. Example (for a UMD build):

```html
<!-- In your host project's index.html -->
<script src="https://widget-feedback-next.vercel.app/widget.umd.js"></script>
<script>
  window.addEventListener("DOMContentLoaded", () => {
    const widgetElement = document.createElement("my-widget");
    document.body.appendChild(widgetElement);
  });
</script>
```

> **Note:** For Next.js, you may need to adapt the build process to output a UMD bundle for embedding. See [Next.js Custom Builds](https://nextjs.org/docs/advanced-features/custom-server) or consider using a tool like Vite for widget-only builds.

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

This is a feedback widget that can be integrated into various projects. It allows users to submit feedback, including their name, email, message, and rating. The feedback is stored in a MongoDB database via Prisma. Designed for easy integration, customization, and educational use.

---

## Conclusion

Feedback Widget Next is a robust starting point for building modern, full-stack widget applications. It is designed for easy learning, rapid prototyping, and production use. Feel free to extend, customize, and use it as a teaching or learning resource.
