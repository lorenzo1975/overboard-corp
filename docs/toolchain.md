# TypeScript toolchain

`npm run typecheck` and the first step of `npm run build` run TypeScript 7. The `typescript` dependency points to Microsoft's TypeScript 6 compatibility package because the current Next.js and ESLint integrations still require the TypeScript 6 API. Run `npm run lint` as well; remove the compatibility alias when those integrations support the newer API.
