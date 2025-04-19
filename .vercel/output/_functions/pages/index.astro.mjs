import { c as createComponent, f as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_B4v6kZYC.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_CRuhdiXh.mjs';
import { c as catalogo, $ as $$FormBuscar, a as $$Catalogo } from '../chunks/Catalogo_CKkYw_ZM.mjs';
import { $ as $$Listado } from '../chunks/Listado_DV2jL4Cr.mjs';
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  const categorias = catalogo.map((item) => {
    return {
      categoria: item.categoria,
      alias: item.alias,
      item: item.data[0]["href"]
    };
  }).sort((a, b) => {
    return a.categoria.localeCompare(b.categoria, "es", { sensitivity: "base" });
  });
  const categoriasAll = catalogo.flatMap((cat) => cat.data).sort((a, b) => {
    return a.nombre.localeCompare(b.nombre, "es", { sensitivity: "base" });
  });
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "catalogoList": categoriasAll, "focus": `all`, "catalogo": categorias }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<header class="bg-slate-200 py-4 flex items-center justify-center font-bold text-2xl uppercase"> <a href="/">
Catálogo de Joyas
</a> </header> <div class="grid xl:grid-cols-[auto_1fr] max-lg:grid-cols-1 md:grid-cols-1  max-sm:grid-cols-1 bg-slate-200"> <nav class="w-full bg-slate-200 flex flex-col gap-4 xl:w-96 xl:pt-4 xl:pl-2"> ${renderComponent($$result2, "FormBuscar", $$FormBuscar, { "inputText": "" })} ${renderComponent($$result2, "Catalogo", $$Catalogo, { "catalogoList": categorias, "focus": `all` })} </nav> ${renderComponent($$result2, "Listado", $$Listado, { "catalogo": categoriasAll })} </div> ` })}`;
}, "/home/node/app/catalogoJoyas/src/pages/index.astro", void 0);

const $$file = "/home/node/app/catalogoJoyas/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
