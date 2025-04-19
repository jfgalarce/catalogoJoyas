import { c as createComponent, a as createAstro, r as renderTemplate, f as renderComponent, m as maybeRenderHead, b as addAttribute } from '../../chunks/astro/server_B4v6kZYC.mjs';
import 'kleur/colors';
import { c as catalogo, $ as $$FormBuscar, a as $$Catalogo } from '../../chunks/Catalogo_CKkYw_ZM.mjs';
import { $ as $$Layout } from '../../chunks/Layout_CRuhdiXh.mjs';
import { IoArrowBack, IoHomeOutline } from 'react-icons/io5';
export { renderers } from '../../renderers.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro();
const prerender = false;
const $$codigo = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$codigo;
  const { codigo } = Astro2.params;
  const joya = catalogo.flatMap(
    (cat) => cat.data.map((item) => ({
      ...item,
      categoria: cat.categoria,
      alias: cat.alias
    }))
  ).find((item) => item.codigo === codigo);
  const categorias = catalogo.map((item) => {
    return {
      categoria: item.categoria,
      alias: item.alias,
      item: item.data[0]["href"]
    };
  });
  return renderTemplate(_a || (_a = __template(["", ' <script>\n  document.getElementById("go-back").addEventListener("click", () => {\n    history.back();\n  });\n<\/script>'])), renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="xl:block max-sm:hidden max-md:hidden max-lg:hidden bg-slate-200"> <header class="bg-slate-200 py-4 flex items-center justify-center font-bold text-2xl uppercase"> <a href="/"> Catálogo de Joyas </a> </header> <div class="grid xl:grid-cols-[auto_1fr] max-lg:grid-cols-1 md:grid-cols-1  max-sm:grid-cols-1 bg-slate-200"> <nav class="w-full bg-slate-200 flex flex-col gap-4 xl:w-96 xl:pt-4 xl:pl-2"> ${renderComponent($$result2, "FormBuscar", $$FormBuscar, { "inputText": "" })} ${renderComponent($$result2, "Catalogo", $$Catalogo, { "catalogoList": categorias, "focus": joya?.alias })} </nav> <div class="grid grid-cols-2 p-4 gap-4"> <div class="aspect-square"> <img${addAttribute(joya?.nombre, "alt")}${addAttribute(`https://www.deltajoyas.cl/${joya?.href}`, "src")} class="w-full h-full object-cover rounded-2xl "> </div> <div class="aspect-square"> <div class="bg-slate-200 grid grid-cols-[auto_1fr]"> <div class="text-base font-bold p-2">Categoria</div> <div class="p-2 text-base font-semibold">${joya?.categoria}</div> <div class="text-base font-bold p-2">Código</div> <div class="p-2 text-base font-semibold">${joya?.codigo}</div> <div class="text-base font-bold p-2">Nombre</div> <div class="p-2 text-base font-semibold"> ${joya?.nombre.toLocaleLowerCase()} </div> <div class="text-base font-bold p-2">Descripción</div> <div class="p-2 text-base font-semibold">${joya?.descripcion}</div> </div> </div> </div> </div> </div> <div class="xl:hidden"> <div class="bg-slate-200 w-full py-2 px-4 flex items-center justify-between"> <div id="go-back" class="size-10 rounded-full border-2 flex items-center justify-center cursor-pointer hover:bg-slate-300 active:bg-slate-50"> ${renderComponent($$result2, "IoArrowBack", IoArrowBack, { "className": "size-6" })} </div> <p class="flex items-center justify-center text-lg font-semibold">
Detalle del Producto
</p> <a href="/"> <div class="size-10 rounded-full border-2 flex items-center justify-center cursor-pointer hover:bg-slate-300 active:bg-slate-50"> ${renderComponent($$result2, "IoHomeOutline", IoHomeOutline, { "className": "size-5" })} </div> </a> </div> <div class="p-2 bg-slate-200"> <img${addAttribute(joya?.nombre, "alt")}${addAttribute(`https://www.deltajoyas.cl/${joya?.href}`, "src")} class="w-full rounded-2xl object-cover"> </div> <div class="bg-slate-200 grid grid-cols-[auto_1fr]"> <div class="text-base font-bold p-2">Categoria</div> <div class="p-2 text-base font-semibold">${joya?.categoria}</div> <div class="text-base font-bold p-2">Código</div> <div class="p-2 text-base font-semibold">${joya?.codigo}</div> <div class="text-base font-bold p-2">Nombre</div> <div class="p-2 text-base font-semibold"> ${joya?.nombre.toLocaleLowerCase()} </div> <div class="text-base font-bold p-2">Descripción</div> <div class="p-2 text-base font-semibold">${joya?.descripcion}</div> </div> </div> ` }));
}, "/home/node/app/catalogoJoyas/src/pages/detalle/[codigo].astro", void 0);

const $$file = "/home/node/app/catalogoJoyas/src/pages/detalle/[codigo].astro";
const $$url = "/detalle/[codigo]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$codigo,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
