# Project Rules: RCRD & Barro-UI

This document outlines the core technical standards, architecture patterns, and workflow requirements for the `rcrd` project and its shared component library, `barro-ui`.

## 1. Technical Stack
- **Framework:** React 19 (Stable) + Vite 6.
- **Styling:** Tailwind CSS v4 (Oxide engine). Configuration is CSS-first.
- **State & Logic:** Use React 19 hooks (e.g., `use` for data fetching, improved `useActionState`).
- **Animations:** Framer Motion 12. Use it for smooth, accessible interactions.
- **Internationalization:** i18next. Never hardcode user-facing strings; always use `t()` from `useTranslation`.
- **Package Manager:** `pnpm`.

## 2. Architecture Patterns
- **Monorepo:** The component source of truth is in `packages/barro-ui`. `rcrd` consumes these shared primitives.
- **Component Design:** Prefer Composition patterns. Build components to support flexible sizing and robust styling variants. Ensure high accessibility (a11y) standards.
- **Types:** Strict TypeScript. Prefer `type` over `interface` for component props and state. Avoid `any`.

## 3. Workflow Requirements
- **Validation:** Always run `pnpm typecheck` and `pnpm test` via shell before committing or proposing a PR.
- **Linting & Formatting:** Follow ESLint 9 (Flat Config) and Prettier rules. Run `pnpm format` after modifications.
- **Testing:** New UI components in `barro-ui` MUST include a `.test.tsx` file using Vitest and React Testing Library. Include basic smoke tests.
- **Storybook:** All new components in `barro-ui` MUST be documented with Storybook. Keep the stories hierarchy flat.

## 4. Coding Conventions
- **Naming:** Use `PascalCase` for React components (`Component.tsx`) and `camelCase` for utilities/hooks (`useHook.ts`).
- **Exports:** Prefer named exports over default exports for components and utilities to improve IDE auto-imports and refactoring.
- **Clean Code:** Keep components focused. Extract complex logic into custom hooks.

## 5. Data Fetching
- Always check `firestore.rules` before modifying any data fetching logic to ensure it complies with our security policies.
- Use the `useActionState` hook for data fetching and state management.
