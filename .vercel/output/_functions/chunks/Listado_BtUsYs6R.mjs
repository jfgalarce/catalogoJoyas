import { c as createComponent, a as createAstro, m as maybeRenderHead, b as addAttribute, r as renderTemplate } from './astro/server_DkhmgbiQ.mjs';
import 'kleur/colors';
import 'clsx';

const $$Astro = createAstro();
const $$Listado = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Listado;
  const { catalogo } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 grid-cols-2 p-4 gap-4 bg-slate-200 h-min"> ${catalogo.map((item) => renderTemplate`<a${addAttribute(`/detalle/${item.codigo}`, "href")}> <div class="aspect-square border rounded-lg "> <img${addAttribute(`https://www.deltajoyas.cl/${item.href}`, "src")}${addAttribute(item.nombre, "alt")} class="w-full h-full object-cover rounded-t-lg" loading="lazy" decoding="async"> <div class=" p-1 text-base font-semibold  capitalize "> ${item.nombre.toLocaleLowerCase()} </div> </div> </a>`)} </div>`;
}, "/home/node/app/catalogoJoyas/src/components/Listado.astro", void 0);

export { $$Listado as $ };
