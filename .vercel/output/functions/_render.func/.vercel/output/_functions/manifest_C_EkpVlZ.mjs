import 'cookie';
import 'kleur/colors';
import { N as NOOP_MIDDLEWARE_FN } from './chunks/astro-designed-error-pages_Qkk7pB9y.mjs';
import 'es-module-lexer';
import { g as decodeKey } from './chunks/astro/server_DDlMKnLH.mjs';
import 'clsx';

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
    isIndex: rawRouteData.isIndex
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

const manifest = deserializeManifest({"hrefRoot":"file:///Users/guysolan/Code/Wedding/frontend/","adapterName":"@astrojs/vercel/serverless","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/.pnpm/astro@4.15.9_typescript@5.6.2/node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/accommodation.BXKtBppc.css"}],"routeData":{"route":"/accommodation","isIndex":false,"type":"page","pattern":"^\\/accommodation\\/?$","segments":[[{"content":"accommodation","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/accommodation.astro","pathname":"/accommodation","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/accommodation.BXKtBppc.css"}],"routeData":{"route":"/itinery","isIndex":false,"type":"page","pattern":"^\\/itinery\\/?$","segments":[[{"content":"itinery","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/itinery.astro","pathname":"/itinery","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/rss.xml","isIndex":false,"type":"endpoint","pattern":"^\\/rss\\.xml\\/?$","segments":[[{"content":"rss.xml","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/rss.xml.js","pathname":"/rss.xml","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/accommodation.BXKtBppc.css"}],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["/Users/guysolan/Code/Wedding/frontend/src/pages/itinery.astro",{"propagation":"none","containsHead":true}],["/Users/guysolan/Code/Wedding/frontend/src/pages/index.astro",{"propagation":"none","containsHead":true}],["\u0000astro:content",{"propagation":"in-tree","containsHead":false}],["/Users/guysolan/Code/Wedding/frontend/src/pages/rss.xml.js",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/rss.xml@_@js",{"propagation":"in-tree","containsHead":false}],["\u0000@astrojs-ssr-virtual-entry",{"propagation":"in-tree","containsHead":false}],["/Users/guysolan/Code/Wedding/frontend/src/pages/accommodation.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(o,t)=>{let i=async()=>{await(await o())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var s=(i,t)=>{let a=async()=>{await(await i())()};if(t.value){let e=matchMedia(t.value);e.matches?a():e.addEventListener(\"change\",a,{once:!0})}};(self.Astro||(self.Astro={})).media=s;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var l=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let a of e)if(a.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=l;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000noop-middleware":"_noop-middleware.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astro-page:node_modules/.pnpm/astro@4.15.9_typescript@5.6.2/node_modules/astro/dist/assets/endpoint/generic@_@js":"pages/_image.astro.mjs","\u0000@astro-page:src/pages/itinery@_@astro":"pages/itinery.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astro-page:src/pages/rss.xml@_@js":"pages/rss.xml.astro.mjs","\u0000@astro-page:src/pages/accommodation@_@astro":"pages/accommodation.astro.mjs","/Users/guysolan/Code/Wedding/frontend/node_modules/.pnpm/astro@4.15.9_typescript@5.6.2/node_modules/astro/dist/env/setup.js":"chunks/astro/env-setup_Cr6XTFvb.mjs","/Users/guysolan/Code/Wedding/frontend/src/content/blog/first-post.md?astroContentCollectionEntry=true":"chunks/first-post_l_z8Hixl.mjs","/Users/guysolan/Code/Wedding/frontend/src/content/blog/markdown-style-guide.md?astroContentCollectionEntry=true":"chunks/markdown-style-guide_CKdjkoif.mjs","/Users/guysolan/Code/Wedding/frontend/src/content/blog/second-post.md?astroContentCollectionEntry=true":"chunks/second-post_9H-eBjoB.mjs","/Users/guysolan/Code/Wedding/frontend/src/content/blog/third-post.md?astroContentCollectionEntry=true":"chunks/third-post_DlabtHSv.mjs","/Users/guysolan/Code/Wedding/frontend/src/content/blog/first-post.md?astroPropagatedAssets":"chunks/first-post_CUHziD_t.mjs","/Users/guysolan/Code/Wedding/frontend/src/content/blog/markdown-style-guide.md?astroPropagatedAssets":"chunks/markdown-style-guide_1PDxsfOM.mjs","/Users/guysolan/Code/Wedding/frontend/src/content/blog/second-post.md?astroPropagatedAssets":"chunks/second-post_Ddj1gtSV.mjs","/Users/guysolan/Code/Wedding/frontend/src/content/blog/third-post.md?astroPropagatedAssets":"chunks/third-post_D7B7llDD.mjs","\u0000astro:asset-imports":"chunks/_astro_asset-imports_D9aVaOQr.mjs","\u0000astro:data-layer-content":"chunks/_astro_data-layer-content_BcEe_9wP.mjs","/Users/guysolan/Code/Wedding/frontend/src/content/blog/first-post.md":"chunks/first-post_Da9mVaUh.mjs","/Users/guysolan/Code/Wedding/frontend/src/content/blog/markdown-style-guide.md":"chunks/markdown-style-guide_3PZj218b.mjs","/Users/guysolan/Code/Wedding/frontend/src/content/blog/second-post.md":"chunks/second-post_D8HSaNwV.mjs","/Users/guysolan/Code/Wedding/frontend/src/content/blog/third-post.md":"chunks/third-post_BdEXyY6Z.mjs","\u0000@astrojs-manifest":"manifest_C_EkpVlZ.mjs","astro:scripts/before-hydration.js":""},"inlinedScripts":[],"assets":["/_astro/posing.FxZZUB0u.JPG","/_astro/family-hugs.DdT1-FLV.jpeg","/_astro/inn-on-the-lake.Cy9XpwYK.jpg","/_astro/lythe-hotel.fyxcd51n.jpg","/_astro/merry-harriers.CnJqFFy_.jpg","/_astro/barnet-hotel.DXUfAX2w.jpg","/_astro/the-mulberry.40t2IB1F.jpg","/_astro/squirrel-inn.BHHSMNgr.webp","/_astro/the-swan.Cnx-a1wD.jpg","/_astro/rose-and-crown.DT4uDBo1.jpg","/_astro/crown-inn.C3mIBTis.jpg","/_astro/posing-outside.DMTso0ss.png","/_astro/winning-with-text.CHbfg6Ur.png","/_astro/accommodation.BXKtBppc.css","/blog-placeholder-1.jpg","/blog-placeholder-2.jpg","/blog-placeholder-3.jpg","/blog-placeholder-4.jpg","/blog-placeholder-5.jpg","/blog-placeholder-about.jpg","/double-wobble-long.svg","/favicon.svg","/quad-wobble-long.svg","/wobble-long.svg"],"buildFormat":"directory","checkOrigin":false,"serverIslandNameMap":[],"key":"c6TdAjQd7+und76B943LUEmAW3MHPcn7uUjiPJ21i70=","experimentalEnvGetSecretEnabled":false});

export { manifest };
