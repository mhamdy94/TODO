# Next.js TypeScript Project Setup

This project is a Next.js application fully configured with TypeScript and essential tools for a modern development workflow.

## 🚀 Features & Tools Included

- **Next.js** (React Framework for Production)
- **TypeScript** (Static Typing)
- **Tailwind CSS** (Utility-First CSS Framework)
- **Zod** (Schema Validation)
- **Storybook** (Component Development)
- **Jest** (Unit Testing)
- **ShadCN** (UI Components)
- **Prettier** (Airbnb Code Formatting)
- **ESLint** (Linting and Code Quality)

---

## 📦 Installation & Setup

### 1️⃣ **Clone the Repository**

```sh
git clone https://github.com/mhamdy94/TODO.git
cd TODO
```

### 2️⃣ **Install Dependencies**

```sh
npm install
```

---

## 🎯 Todo Application Functionalities

### 1. Task Management

- Users should be able to add new tasks.
- Users should be able to edit tasks by double-clicking on them.
- Users should be able to delete tasks (Soft Delete).
- Users should be able to mark tasks as completed by checking a checkbox.
- Users should be able to view tasks in a paginated list.

---

## 🎨 Tailwind CSS Setup

1. Install Tailwind CSS:

```sh
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

2. Update `tailwind.config.ts`:

```ts
import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./pages/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [],
}

export default config
```

3. Import Tailwind in `styles/globals.css`:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

---

## 📜 Zod (Schema Validation)

1. Install Zod:

```sh
npm install zod
```

2. Example usage (`utils/schema.ts`):

```ts
import { z } from 'zod'

export const userSchema = z.object({
  name: z.string(),
  age: z.number().min(18, 'Must be 18 or older'),
})
```

---

## 📚 Storybook Setup

1. Install Storybook:

```sh
npx storybook init --builder webpack5
```

2. Start Storybook:

```sh
npm run storybook
```

---

## 🧪 Jest (Unit Testing) Setup

1. Install Jest and testing utilities:

```sh
npm install --save-dev jest @testing-library/react @testing-library/jest-dom @testing-library/user-event babel-jest identity-obj-proxy jest-environment-jsdom ts-jest
```

2. Create `jest.config.ts`:

```ts
import type { Config } from 'jest'

const config: Config = {
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
}

export default config
```

3. Create `jest.setup.ts`:

```ts
import '@testing-library/jest-dom'
```

4. Add script to `package.json`:

```json
"scripts": {
  "test": "jest --watch"
}
```

---

## 💎 ShadCN (UI Components)

1. Install ShadCN:

```sh
npm install -g shadcn-ui
npx shadcn-ui init
```

2. Add UI components:

```sh
npx shadcn-ui add button card
```

---

## 🏆 Prettier (Airbnb Style)

1. Install Prettier and Airbnb rules:

```sh
npm install --save-dev prettier eslint-config-airbnb eslint-plugin-prettier eslint-config-prettier
```

2. Create `.prettierrc`:

```json
{
  "singleQuote": true,
  "semi": false,
  "trailingComma": "all"
}
```

3. Add a script to `package.json`:

```json
"scripts": {
  "format": "prettier --write ."
}
```

---

## 🛠️ ESLint (Code Linting)

1. Install ESLint:

```sh
npm install --save-dev eslint eslint-config-next
```

2. Create `.eslintrc.js`:

```ts
module.exports = {
  extends: ['next/core-web-vitals', 'plugin:prettier/recommended'],
  rules: {
    'prettier/prettier': ['error'],
  },
}
```

---

## ✅ Running & Testing the Project

### Start the development server

```sh
npm run dev
```

### Start Storybook

```sh
npm run storybook
```

### Run Jest tests

```sh
npm run test
```

### Format the code

```sh
npm run format
```

### Lint the code

```sh
npm run lint
```

---

## 🎉 Conclusion

Your Next.js project is now fully configured with TypeScript, Tailwind, Zod, Storybook, Jest, ShadCN, Prettier (Airbnb Style), and ESLint! 🚀

Happy coding! 🎨
