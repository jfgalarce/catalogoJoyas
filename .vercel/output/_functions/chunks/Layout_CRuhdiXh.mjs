import { c as createComponent, a as createAstro, b as addAttribute, d as renderHead, e as renderSlot, r as renderTemplate } from './astro/server_B4v6kZYC.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                             */

const $$Astro = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  return renderTemplate`<html lang="en"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>Catálogo de Joyas</title>${renderHead()}</head> <body class="bg-slate-900 text-slate-700 font-Raleway select-none"> <div class="bg-slate-200 w-full container mx-auto h-screen"> ${renderSlot($$result, $$slots["default"])} </div> </body></html>`;
}, "/home/node/app/catalogoJoyas/src/layouts/Layout.astro", void 0);

export { $$Layout as $ };
