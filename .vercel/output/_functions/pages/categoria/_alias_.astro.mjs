import { c as createComponent, a as createAstro, f as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../../chunks/astro/server_DkhmgbiQ.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../../chunks/Layout_DalR6Chx.mjs';
import { c as catalogo, $ as $$FormBuscar, a as $$Catalogo } from '../../chunks/Catalogo_B2OvIHTA.mjs';
import { $ as $$Listado } from '../../chunks/Listado_BtUsYs6R.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro();
const prerender = false;
const $$alias = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$alias;
  const categorias = catalogo.map((item) => {
    return {
      categoria: item.categoria,
      alias: item.alias,
      item: item.data[0]["href"]
    };
  }).sort((a, b) => {
    return a.categoria.localeCompare(b.categoria, "es", { sensitivity: "base" });
  });
  const { alias } = Astro2.params;
  const subCategoria = catalogo.filter((item) => item.alias === alias)[0]["data"].sort((a, b) => {
    return a.nombre.localeCompare(b.nombre, "es", { sensitivity: "base" });
  });
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<header class="bg-slate-200 py-4 flex items-center justify-center font-bold text-2xl uppercase"> <a href="/">Catálogo de Joyas</a> </header> <div class="grid xl:grid-cols-[auto_1fr] max-lg:grid-cols-1 md:grid-cols-1  max-sm:grid-cols-1 bg-slate-200"> <nav class="w-full bg-slate-200 flex flex-col gap-4 xl:w-96 xl:pt-4 xl:pl-2"> ${renderComponent($$result2, "FormBuscar", $$FormBuscar, { "inputText": "" })} ${renderComponent($$result2, "Catalogo", $$Catalogo, { "catalogoList": categorias, "focus": alias })} </nav> ${renderComponent($$result2, "Listado", $$Listado, { "catalogo": subCategoria })} </div> ` })}`;
}, "/home/node/app/catalogoJoyas/src/pages/categoria/[alias].astro", void 0);

const $$file = "/home/node/app/catalogoJoyas/src/pages/categoria/[alias].astro";
const $$url = "/categoria/[alias]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$alias,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
