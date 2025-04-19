import { renderers } from './renderers.mjs';
import { c as createExports } from './chunks/entrypoint_BHrWSLsX.mjs';
import { manifest } from './manifest_D2Yugge1.mjs';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/buscar/_termino_.astro.mjs');
const _page2 = () => import('./pages/categoria/_alias_.astro.mjs');
const _page3 = () => import('./pages/detalle/_codigo_.astro.mjs');
const _page4 = () => import('./pages/imprimir.astro.mjs');
const _page5 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/buscar/[termino].astro", _page1],
    ["src/pages/categoria/[alias].astro", _page2],
    ["src/pages/detalle/[codigo].astro", _page3],
    ["src/pages/imprimir.astro", _page4],
    ["src/pages/index.astro", _page5]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions: () => import('./_noop-actions.mjs'),
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "4300c538-f07e-46d9-ab76-a5a7186bd816",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;

export { __astrojsSsrVirtualEntry as default, pageMap };
