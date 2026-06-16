<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# Suikoden Wiki Project Rules

- Work in `/Users/hyemiku/Documents/ReactProj/suikoden-wiki` for this project.
- Design every page against four responsive tiers: mobile, tablet, desktop, and wide desktop.
- Keep every `page.tsx` as a Server Component. Do not add `"use client"` to pages.
- Keep static UI, server logic, and Tailwind-only server-renderable markup in `page.tsx` when it is meaningful there.
- Move only browser-state, event-handler, hook, animation, and other client-only behavior into files under `src/components`.
- Put all user-facing text in constants, currently under `src/constants`.
- Write user-facing copy as if this were a real public wiki service, not a portfolio explanation or implementation note. Avoid exposing internal UI/build terms such as modal, tab, click event, route, component, source, or guide in visible copy unless they are part of the domain itself.
- Keep major navigation, page titles, labels, and CTAs mostly in English; write descriptive body copy in Korean with an archive/reference-wiki tone.
- Put reusable styles, sizes, image dimensions, color/theme values, and repeated container/button/card classes in constants.
- Maintain light and dark theme values through dedicated theme constants.
- Use Tailwind sizing/spacing utilities for layout and visual dimensions. Avoid raw CSS pixel sizing unless a library API, such as `next/image` intrinsic `width` and `height`, requires numbers.
- Prefer WebP for small images when quality remains acceptable.
- Use `framer-motion` for animation, `lucide-react` for icons, and `zustand` for shared UI state.
- Use port `3001` for Codex-side test servers because port `3000` is reserved for the user's VS Code workflow.
