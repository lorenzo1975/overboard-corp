# Copilot Instructions for Overboard Corp Codebase

## Project Overview
- This is a Next.js app using TypeScript, Tailwind CSS, and Firebase Studio.
- Main app code is in `src/app/` (pages, layout, global styles).
- UI components are in `src/components/` and `src/components/ui/`.
- Custom hooks are in `src/hooks/`.
- Utility functions are in `src/lib/utils.ts`.
- AI-related flows and scripts are in `src/ai/`.

## Key Architectural Patterns
- **App Routing:** Uses Next.js file-based routing. Each folder in `src/app/` is a route (e.g., `src/app/contact/page.tsx` for `/contact`).
- **Component Structure:** Shared UI primitives are in `src/components/ui/`. Higher-level components are in `src/components/`.
- **Styling:** Tailwind CSS is configured via `tailwind.config.ts` and used throughout components.
- **AI Integration:** AI flows/scripts are in `src/ai/flows/` (e.g., `send-email-flow.ts`).

## Developer Workflows
- **Install dependencies:** `npm install`
- **Run dev server:** `npm run dev`
- **Build for production:** `npm run build`
- **Lint:** `npm run lint`
- **Format:** `npm run format` (if configured)
- **Tailwind:** Config in `tailwind.config.ts`, postcss in `postcss.config.mjs`.

## Project-Specific Conventions
- **TypeScript:** All code is written in TypeScript.
- **Component Naming:** Use PascalCase for components, camelCase for hooks and utility functions.
- **File Naming:** Page components are named `page.tsx` inside route folders.
- **Assets:** Images and static files are in `public/` (organized by type).
- **AI Flows:** Place new AI flows in `src/ai/flows/` and follow the pattern in `send-email-flow.ts`.

## Integration Points
- **Firebase Studio:** Project is designed to work with Firebase Studio (see `README.md`).
- **External Libraries:** Next.js, Tailwind CSS, and any dependencies in `package.json`.

## Examples
- To add a new page, create a folder in `src/app/` and add `page.tsx`.
- To add a new UI component, place it in `src/components/ui/` and use Tailwind for styling.
- To add a new AI flow, use the structure in `src/ai/flows/send-email-flow.ts`.

## References
- Main entry: `src/app/page.tsx`
- Routing: `src/app/*/page.tsx`
- Components: `src/components/`, `src/components/ui/`
- AI: `src/ai/flows/`
- Config: `tailwind.config.ts`, `next.config.ts`, `tsconfig.json`

---

For questions about unclear conventions or missing documentation, ask the user for clarification or examples.
