import { c as createComponent, a as createAstro, f as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../../chunks/astro/server_B4v6kZYC.mjs';
import 'kleur/colors';
import Fuse from 'fuse.js';
import { $ as $$Layout } from '../../chunks/Layout_CRuhdiXh.mjs';
import { c as catalogo, $ as $$FormBuscar, a as $$Catalogo } from '../../chunks/Catalogo_CKkYw_ZM.mjs';
import { $ as $$Listado } from '../../chunks/Listado_DV2jL4Cr.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro();
const prerender = false;
const $$termino = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$termino;
  const { params } = Astro2;
  const termino = params.termino || "";
  const categorias = catalogo.map((item) => {
    return {
      categoria: item.categoria,
      alias: item.alias,
      item: item.data[0]["href"]
    };
  }).sort((a, b) => {
    return a.categoria.localeCompare(b.categoria, "es", { sensitivity: "base" });
  });
  const categoriasAll = catalogo.flatMap(
    (cat) => cat.data.map((joya) => ({
      ...joya,
      categoria: cat.categoria,
      alias: cat.alias
    }))
  );
  const fuse = new Fuse(categoriasAll, {
    keys: ["codigo", "nombre", "descripcion"],
    threshold: /^-?\d+(\.\d+)?$/.test(termino) ? 0 : 0.4
  });
  const searh = fuse.search(termino).map((item) => item["item"]);
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<header class="bg-slate-200 py-4 flex items-center justify-center font-bold text-2xl uppercase"> <a href="/"> Catálogo de Joyas </a> </header> <div class="grid xl:grid-cols-[auto_1fr] max-lg:grid-cols-1 md:grid-cols-1  max-sm:grid-cols-1 bg-slate-200"> <nav class="w-full bg-slate-200 flex flex-col gap-4 xl:w-96 xl:pt-4 xl:pl-2"> ${renderComponent($$result2, "FormBuscar", $$FormBuscar, { "inputText": termino })} ${renderComponent($$result2, "Catalogo", $$Catalogo, { "catalogoList": categorias, "focus": `none` })} </nav> ${renderComponent($$result2, "Listado", $$Listado, { "catalogo": searh })} </div> ` })}`;
}, "/home/node/app/catalogoJoyas/src/pages/buscar/[termino].astro", void 0);

const $$file = "/home/node/app/catalogoJoyas/src/pages/buscar/[termino].astro";
const $$url = "/buscar/[termino]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$termino,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
