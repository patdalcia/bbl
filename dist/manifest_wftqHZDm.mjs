import '@astrojs/internal-helpers/path';
import 'cookie';
import 'kleur/colors';
import './chunks/astro_C2bD6FdP.mjs';
import 'clsx';
import 'cssesc';
import { compile } from 'path-to-regexp';

if (typeof process !== "undefined") {
  let proc = process;
  if ("argv" in proc && Array.isArray(proc.argv)) {
    if (proc.argv.includes("--verbose")) ; else if (proc.argv.includes("--silent")) ; else ;
  }
}

function getRouteGenerator(segments, addTrailingSlash) {
  const template = segments.map((segment) => {
    return "/" + segment.map((part) => {
      if (part.spread) {
        return `:${part.content.slice(3)}(.*)?`;
      } else if (part.dynamic) {
        return `:${part.content}`;
      } else {
        return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]").replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      }
    }).join("");
  }).join("");
  let trailing = "";
  if (addTrailingSlash === "always" && segments.length) {
    trailing = "/";
  }
  const toPath = compile(template + trailing);
  return toPath;
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
    })
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
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware(_, next) {
      return next();
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    clientDirectives,
    routes
  };
}

const manifest = deserializeManifest({"adapterName":"","routes":[{"file":"file:///C:/Users/thegr/Desktop/websites/bbl/dist/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"file:///C:/Users/thegr/Desktop/websites/bbl/dist/Artists/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/artists","isIndex":false,"type":"page","pattern":"^\\/Artists\\/?$","segments":[[{"content":"Artists","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/Artists.astro","pathname":"/Artists","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"file:///C:/Users/thegr/Desktop/websites/bbl/dist/Beats/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/beats","isIndex":false,"type":"page","pattern":"^\\/Beats\\/?$","segments":[[{"content":"Beats","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/Beats.astro","pathname":"/Beats","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"file:///C:/Users/thegr/Desktop/websites/bbl/dist/Contact/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/contact","isIndex":false,"type":"page","pattern":"^\\/Contact\\/?$","segments":[[{"content":"Contact","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/Contact.astro","pathname":"/Contact","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"file:///C:/Users/thegr/Desktop/websites/bbl/dist/History/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/history","isIndex":false,"type":"page","pattern":"^\\/History\\/?$","segments":[[{"content":"History","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/History.astro","pathname":"/History","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"file:///C:/Users/thegr/Desktop/websites/bbl/dist/Join/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/join","isIndex":false,"type":"page","pattern":"^\\/Join\\/?$","segments":[[{"content":"Join","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/Join.astro","pathname":"/Join","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"file:///C:/Users/thegr/Desktop/websites/bbl/dist/Process/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/process","isIndex":false,"type":"page","pattern":"^\\/Process\\/?$","segments":[[{"content":"Process","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/Process.astro","pathname":"/Process","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}}],"site":"https://patdalcia.github.io","base":"/bbl","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["C:/Users/thegr/Desktop/websites/bbl/src/pages/Beats.astro",{"propagation":"none","containsHead":true}],["C:/Users/thegr/Desktop/websites/bbl/src/pages/History.astro",{"propagation":"none","containsHead":true}],["C:/Users/thegr/Desktop/websites/bbl/src/pages/Join.astro",{"propagation":"none","containsHead":true}],["C:/Users/thegr/Desktop/websites/bbl/src/pages/Process.astro",{"propagation":"none","containsHead":true}],["C:/Users/thegr/Desktop/websites/bbl/src/pages/index.astro",{"propagation":"in-tree","containsHead":true}],["\u0000astro:content",{"propagation":"in-tree","containsHead":false}],["C:/Users/thegr/Desktop/websites/bbl/src/components/widgets/SideScroll.astro",{"propagation":"in-tree","containsHead":false}],["C:/Users/thegr/Desktop/websites/bbl/src/pages/Artists.astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/Artists@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/index@_@astro",{"propagation":"in-tree","containsHead":false}]],"renderers":[],"clientDirectives":[["idle","(()=>{var i=t=>{let e=async()=>{await(await t())()};\"requestIdleCallback\"in window?window.requestIdleCallback(e):setTimeout(e,200)};(self.Astro||(self.Astro={})).idle=i;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var s=(i,t)=>{let a=async()=>{await(await i())()};if(t.value){let e=matchMedia(t.value);e.matches?a():e.addEventListener(\"change\",a,{once:!0})}};(self.Astro||(self.Astro={})).media=s;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var l=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let a of e)if(a.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=l;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000noop-middleware":"_noop-middleware.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astro-page:src/pages/Artists@_@astro":"pages/artists.astro.mjs","\u0000@astro-page:src/pages/Beats@_@astro":"pages/beats.astro.mjs","\u0000@astro-page:src/pages/Contact@_@astro":"pages/contact.astro.mjs","\u0000@astro-page:src/pages/History@_@astro":"pages/history.astro.mjs","\u0000@astro-page:src/pages/Join@_@astro":"pages/join.astro.mjs","\u0000@astro-page:src/pages/Process@_@astro":"pages/process.astro.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astrojs-manifest":"manifest_wftqHZDm.mjs","C:/Users/thegr/Desktop/websites/bbl/node_modules/@astrojs/react/vnode-children.js":"chunks/vnode-children_3wEZly-Z.mjs","C:/Users/thegr/Desktop/websites/bbl/src/content/placeholder/test.md?astroContentCollectionEntry=true":"chunks/test_HESiFaV4.mjs","C:/Users/thegr/Desktop/websites/bbl/src/content/slideContent/firstSlide.md?astroContentCollectionEntry=true":"chunks/firstSlide_mxgxzdYD.mjs","C:/Users/thegr/Desktop/websites/bbl/src/content/placeholder/test.md?astroPropagatedAssets":"chunks/test_XZQ_9LXk.mjs","C:/Users/thegr/Desktop/websites/bbl/src/content/slideContent/firstSlide.md?astroPropagatedAssets":"chunks/firstSlide_B7Bt7XP1.mjs","C:/Users/thegr/Desktop/websites/bbl/src/content/placeholder/test.md":"chunks/test_x8eXyCGw.mjs","C:/Users/thegr/Desktop/websites/bbl/src/content/slideContent/firstSlide.md":"chunks/firstSlide_So3tu6hW.mjs","/astro/hoisted.js?q=0":"_astro/hoisted.M6oJnycP.js","/astro/hoisted.js?q=2":"_astro/hoisted.pBmwcO8P.js","/astro/hoisted.js?q=1":"_astro/hoisted.vws0j74f.js","@astrojs/react/client.js":"_astro/client.ZuanqE6Z.js","astro:scripts/before-hydration.js":""},"assets":["/bbl/file:///C:/Users/thegr/Desktop/websites/bbl/dist/index.html","/bbl/file:///C:/Users/thegr/Desktop/websites/bbl/dist/Artists/index.html","/bbl/file:///C:/Users/thegr/Desktop/websites/bbl/dist/Beats/index.html","/bbl/file:///C:/Users/thegr/Desktop/websites/bbl/dist/Contact/index.html","/bbl/file:///C:/Users/thegr/Desktop/websites/bbl/dist/History/index.html","/bbl/file:///C:/Users/thegr/Desktop/websites/bbl/dist/Join/index.html","/bbl/file:///C:/Users/thegr/Desktop/websites/bbl/dist/Process/index.html"],"buildFormat":"directory"});

export { manifest };
