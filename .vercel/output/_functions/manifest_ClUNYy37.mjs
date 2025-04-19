import 'kleur/colors';
import { g as decodeKey } from './chunks/astro/server_DkhmgbiQ.mjs';
import 'clsx';
import 'cookie';
import { N as NOOP_MIDDLEWARE_FN } from './chunks/astro-designed-error-pages_CWjwH3cN.mjs';
import 'es-module-lexer';

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex,
    origin: rawRouteData.origin
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///home/node/app/catalogoJoyas/","cacheDir":"file:///home/node/app/catalogoJoyas/node_modules/.astro/","outDir":"file:///home/node/app/catalogoJoyas/dist/","srcDir":"file:///home/node/app/catalogoJoyas/src/","publicDir":"file:///home/node/app/catalogoJoyas/public/","buildClientDir":"file:///home/node/app/catalogoJoyas/dist/client/","buildServerDir":"file:///home/node/app/catalogoJoyas/dist/server/","adapterName":"@astrojs/vercel","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"page","component":"_server-islands.astro","params":["name"],"segments":[[{"content":"_server-islands","dynamic":false,"spread":false}],[{"content":"name","dynamic":true,"spread":false}]],"pattern":"^\\/_server-islands\\/([^/]+?)\\/?$","prerender":false,"isIndex":false,"fallbackRoutes":[],"route":"/_server-islands/[name]","origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image\\/?$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/_termino_.B3qndyQX.css"}],"routeData":{"route":"/buscar/[termino]","isIndex":false,"type":"page","pattern":"^\\/buscar\\/([^/]+?)\\/?$","segments":[[{"content":"buscar","dynamic":false,"spread":false}],[{"content":"termino","dynamic":true,"spread":false}]],"params":["termino"],"component":"src/pages/buscar/[termino].astro","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/_termino_.B3qndyQX.css"}],"routeData":{"route":"/categoria/[alias]","isIndex":false,"type":"page","pattern":"^\\/categoria\\/([^/]+?)\\/?$","segments":[[{"content":"categoria","dynamic":false,"spread":false}],[{"content":"alias","dynamic":true,"spread":false}]],"params":["alias"],"component":"src/pages/categoria/[alias].astro","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/_termino_.B3qndyQX.css"}],"routeData":{"route":"/detalle/[codigo]","isIndex":false,"type":"page","pattern":"^\\/detalle\\/([^/]+?)\\/?$","segments":[[{"content":"detalle","dynamic":false,"spread":false}],[{"content":"codigo","dynamic":true,"spread":false}]],"params":["codigo"],"component":"src/pages/detalle/[codigo].astro","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/_termino_.B3qndyQX.css"}],"routeData":{"route":"/imprimir","isIndex":false,"type":"page","pattern":"^\\/imprimir\\/?$","segments":[[{"content":"imprimir","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/imprimir.astro","pathname":"/imprimir","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/_termino_.B3qndyQX.css"}],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["/home/node/app/catalogoJoyas/src/pages/buscar/[termino].astro",{"propagation":"none","containsHead":true}],["/home/node/app/catalogoJoyas/src/pages/categoria/[alias].astro",{"propagation":"none","containsHead":true}],["/home/node/app/catalogoJoyas/src/pages/detalle/[codigo].astro",{"propagation":"none","containsHead":true}],["/home/node/app/catalogoJoyas/src/pages/imprimir.astro",{"propagation":"none","containsHead":true}],["/home/node/app/catalogoJoyas/src/pages/index.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(n,t)=>{let i=async()=>{await(await n())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var n=(a,t)=>{let i=async()=>{await(await a())()};if(t.value){let e=matchMedia(t.value);e.matches?i():e.addEventListener(\"change\",i,{once:!0})}};(self.Astro||(self.Astro={})).media=n;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var a=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let l of e)if(l.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=a;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000noop-middleware":"_noop-middleware.mjs","\u0000noop-actions":"_noop-actions.mjs","\u0000@astro-page:src/pages/buscar/[termino]@_@astro":"pages/buscar/_termino_.astro.mjs","\u0000@astro-page:src/pages/categoria/[alias]@_@astro":"pages/categoria/_alias_.astro.mjs","\u0000@astro-page:src/pages/detalle/[codigo]@_@astro":"pages/detalle/_codigo_.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-page:src/pages/imprimir@_@astro":"pages/imprimir.astro.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"pages/_image.astro.mjs","/home/node/app/catalogoJoyas/node_modules/astro/dist/assets/services/sharp.js":"chunks/sharp_i8eS5XCc.mjs","\u0000@astrojs-manifest":"manifest_ClUNYy37.mjs","/home/node/app/catalogoJoyas/src/components/react/Qr":"_astro/Qr.B0eYTrYw.js","@astrojs/react/client.js":"_astro/client.BMIDVuEk.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[],"assets":["/_astro/_termino_.B3qndyQX.css","/favicon.svg","/_astro/Qr.B0eYTrYw.js","/_astro/client.BMIDVuEk.js","/_astro/index.BJfUAbRs.js"],"buildFormat":"directory","checkOrigin":true,"serverIslandNameMap":[],"key":"5R4/6GLV0uc6n/IeIuq6KrJSGoJKUgOsX9OZrEk9VrU="});
if (manifest.sessionConfig) manifest.sessionConfig.driverModule = null;

export { manifest };
