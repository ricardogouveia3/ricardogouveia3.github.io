# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [5.8.0] - 2025-12-07

### Added
- **React 19**: Full upgrade to React 19 stack to support modern dependencies.
- **Barro UI 0.7.0**: Upgrade UI library to latest version.
- **Light Mode Support**: Implemented CSS infrastructure for light/dark mode switching (currently disabled by default).
- **Scripts**: Added `test`, `typecheck`, and `clean` scripts to package.json.
- **Test Infrastructure**: Added Vitest and Testing Library setup with basic unit tests.
- **Husky Hooks**:
    - `pre-commit`: Runs `lint-staged` (Prettier + ESLint) on changed files.
    - `pre-push`: Runs global `typecheck` and `test` to ensure project health.

### Changed
- **Project Structure**: Renamed `Icon.tsx` to `CustomIcon.tsx` to avoid conflicts with Barro UI.
- **ProjectItem**: Refactored to use native `Card` component from Barro UI, removing custom framer-motion borders.
- **Colors**: Refactored `index.css` to use dynamic Tailwind classes (`dark:`) instead of static colors.
- **Social Section**: Improved accessibility and color contrast for social links.
- **Git Hooks**: Updated Husky configuration to enforce quality gates on commit and push.

### Fixed
- Fixed multiple breaking changes from Barro UI 0.7.0 update (prop names).
- Fixed contrast issues on Dribbble button and other social links.
- Fixed `react-helmet-async` peer dependency warning (compatibility verified).
- Fixed `getContrastColor` utility to support short hex codes (e.g. `#fff`) and correct contrast logic.

### Removed
- Removed unused `cardBorderMotionProps` animation configuration.
- Removed custom `AnimatedBorder` implementation in favor of Barro UI native features.
