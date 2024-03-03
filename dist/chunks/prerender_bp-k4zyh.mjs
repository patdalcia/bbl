import { prependForwardSlash } from '@astrojs/internal-helpers/path';
/* empty css                           */
import { c as createAstro, a as createComponent, r as renderTemplate, b as addAttribute, d as renderHead, e as renderSlot, m as maybeRenderHead, f as renderComponent, A as AstroError, U as UnknownContentCollectionError, g as renderUniqueStylesheet, h as renderScriptElement, i as createHeadAndContent, u as unescapeHTML } from './astro_C2bD6FdP.mjs';
import 'kleur/colors';
import 'clsx';
import 'cssesc';
/* empty css                         */
/* empty css                           */
/* empty css                         */

const $$Astro$c = createAstro("https://patdalcia.github.io");
const $$Layout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$c, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  const { description } = Astro2.props;
  return renderTemplate`<html lang="en" data-theme="luxury"> <head><meta charset="UTF-8"><meta name="description"${addAttribute(description, "content")}><meta name="viewport" content="width=device-width"><meta name="title"${addAttribute(title, "content")}><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${title}</title>${renderHead()}</head> <body class="dark:bg-gray-500 bg-gray-200 dark:text-white bg-repeat dark:heropattern-topography-gray-900/10 heropattern-topography-gray-300/50"> ${renderSlot($$result, $$slots["default"])} </body></html>`;
}, "C:/Users/thegr/Desktop/websites/bbl/src/layouts/Layout.astro", void 0);

const $$Astro$b = createAstro("https://patdalcia.github.io");
const $$Navigation = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$b, $$props, $$slots);
  Astro2.self = $$Navigation;
  return renderTemplate`${maybeRenderHead()}<div class="navbar top-0 z-50 bg-black fixed w-full" data-astro-cid-jwjq5bhk> <div class="navbar-start" data-astro-cid-jwjq5bhk> <div class="dropdown" data-astro-cid-jwjq5bhk> <div tabindex="0" role="button" class="btn btn-ghost lg:hidden" data-astro-cid-jwjq5bhk> <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-astro-cid-jwjq5bhk><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" data-astro-cid-jwjq5bhk></path></svg> </div> <ul tabindex="0" class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52" data-astro-cid-jwjq5bhk> <li data-astro-cid-jwjq5bhk><a href="/bbl/Artists" data-astro-cid-jwjq5bhk>Artists</a></li> <li data-astro-cid-jwjq5bhk><a href="/bbl/Beats" data-astro-cid-jwjq5bhk>Beat Store</a></li> <li data-astro-cid-jwjq5bhk><a href="/bbl/Contact" data-astro-cid-jwjq5bhk>Contact</a></li> </ul> </div> <a href="/bbl" class="btn btn-ghost text-3xl" id="logo" data-astro-cid-jwjq5bhk>Beats By Levi</a> </div> <div class="navbar-center hidden lg:flex" data-astro-cid-jwjq5bhk> <ul class="menu menu-horizontal px-1 font-extrabold" data-astro-cid-jwjq5bhk> <li data-astro-cid-jwjq5bhk><a href="/bbl/Artists" data-astro-cid-jwjq5bhk>Artists</a></li> <li data-astro-cid-jwjq5bhk><a href="/bbl/Beats" data-astro-cid-jwjq5bhk>Beat Store</a></li> <li data-astro-cid-jwjq5bhk><a href="/bbl/Contact" data-astro-cid-jwjq5bhk>Contact</a></li> </ul> </div> <div class="navbar-end" data-astro-cid-jwjq5bhk> <a class="btn" href="/bbl/Join" data-astro-cid-jwjq5bhk>Join the Team</a> </div> </div>`;
}, "C:/Users/thegr/Desktop/websites/bbl/src/components/widgets/Navigation.astro", void 0);

const $$Astro$a = createAstro("https://patdalcia.github.io");
const $$Hero = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$a, $$props, $$slots);
  Astro2.self = $$Hero;
  const {
    title = await Astro2.slots.render("title"),
    subtitle = await Astro2.slots.render("subtitle"),
    image = await Astro2.slots.render("image")
  } = Astro2.props;
  return renderTemplate`<!-- class="bg-gradient-to-r from-slate-800 to-slate-600" -->${maybeRenderHead()}<div class="bg-black"> <div class="hero min-h-screen bg-base-200"> <div class="hero-content text-center"> <div class="max-w-md"> <h1 class="text-5xl font-bold">Hello there</h1> <p class="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p> <button class="btn ">Get Started</button> </div> </div> </div> </div>`;
}, "C:/Users/thegr/Desktop/websites/bbl/src/components/widgets/Hero.astro", void 0);

const $$Astro$9 = createAstro("https://patdalcia.github.io");
const $$Hero2 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$9, $$props, $$slots);
  Astro2.self = $$Hero2;
  return renderTemplate`${maybeRenderHead()}<section class="hidden md:block bg-black" data-astro-cid-3w6r54vr> <div class="grid-container" data-astro-cid-3w6r54vr> <div class="grid" data-astro-cid-3w6r54vr> <div class="gridLayer" data-astro-cid-3w6r54vr> <div class="gridBlock" data-astro-cid-3w6r54vr></div> </div> <div class="gridLayer" data-astro-cid-3w6r54vr> <div class="gridBlock" data-astro-cid-3w6r54vr></div> </div> <div class="gridLayer" data-astro-cid-3w6r54vr> <div class="gridBlock" data-astro-cid-3w6r54vr></div> </div> <div class="gridLayer centerPiece" data-astro-cid-3w6r54vr> <div class="gridBlock centerBlock flex justify-center items-start" data-astro-cid-3w6r54vr> <div class="flex flex-col justify-center items-top w-full h-4/5 text-center" data-astro-cid-3w6r54vr> <h1 class="text-4xl font-bold" data-astro-cid-3w6r54vr>Hello there</h1> <p class="inline-block" data-astro-cid-3w6r54vr>Scroll Down
<svg xmlns="http://www.w3.org/2000/svg" class="animate-bounce h-4 w-4 inline-block" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-3w6r54vr> <path d="M19 14l-7 7m0 0l-7-7m7 7V3" data-astro-cid-3w6r54vr></path> </svg> </p> </div> </div> </div> <div class="gridLayer" data-astro-cid-3w6r54vr> <div class="gridBlock" data-astro-cid-3w6r54vr></div> </div> <div class="gridLayer" data-astro-cid-3w6r54vr> <div class="gridBlock" data-astro-cid-3w6r54vr></div> </div> <div class="gridLayer" data-astro-cid-3w6r54vr> <div class="gridBlock" data-astro-cid-3w6r54vr></div> </div> <div class="gridLayer" data-astro-cid-3w6r54vr> <div class="gridBlock" data-astro-cid-3w6r54vr></div> </div> <div class="gridLayer" data-astro-cid-3w6r54vr> <div class="gridBlock" data-astro-cid-3w6r54vr></div> </div> </div> </div> </section> <section class="md:hidden" data-astro-cid-3w6r54vr> ${renderComponent($$result, "Hero", $$Hero, { "data-astro-cid-3w6r54vr": true })} </section>  `;
}, "C:/Users/thegr/Desktop/websites/bbl/src/components/widgets/Hero2.astro", void 0);

function createCollectionToGlobResultMap({
  globResult,
  contentDir
}) {
  const collectionToGlobResultMap = {};
  for (const key in globResult) {
    const keyRelativeToContentDir = key.replace(new RegExp(`^${contentDir}`), "");
    const segments = keyRelativeToContentDir.split("/");
    if (segments.length <= 1)
      continue;
    const collection = segments[0];
    collectionToGlobResultMap[collection] ??= {};
    collectionToGlobResultMap[collection][key] = globResult[key];
  }
  return collectionToGlobResultMap;
}
function createGetEntry({
  getEntryImport,
  getRenderEntryImport
}) {
  return async function getEntry(collectionOrLookupObject, _lookupId) {
    let collection, lookupId;
    if (typeof collectionOrLookupObject === "string") {
      collection = collectionOrLookupObject;
      if (!_lookupId)
        throw new AstroError({
          ...UnknownContentCollectionError,
          message: "`getEntry()` requires an entry identifier as the second argument."
        });
      lookupId = _lookupId;
    } else {
      collection = collectionOrLookupObject.collection;
      lookupId = "id" in collectionOrLookupObject ? collectionOrLookupObject.id : collectionOrLookupObject.slug;
    }
    const entryImport = await getEntryImport(collection, lookupId);
    if (typeof entryImport !== "function")
      return void 0;
    const entry = await entryImport();
    if (entry._internal.type === "content") {
      return {
        id: entry.id,
        slug: entry.slug,
        body: entry.body,
        collection: entry.collection,
        data: entry.data,
        async render() {
          return render({
            collection: entry.collection,
            id: entry.id,
            renderEntryImport: await getRenderEntryImport(collection, lookupId)
          });
        }
      };
    } else if (entry._internal.type === "data") {
      return {
        id: entry.id,
        collection: entry.collection,
        data: entry.data
      };
    }
    return void 0;
  };
}
async function render({
  collection,
  id,
  renderEntryImport
}) {
  const UnexpectedRenderError = new AstroError({
    ...UnknownContentCollectionError,
    message: `Unexpected error while rendering ${String(collection)} → ${String(id)}.`
  });
  if (typeof renderEntryImport !== "function")
    throw UnexpectedRenderError;
  const baseMod = await renderEntryImport();
  if (baseMod == null || typeof baseMod !== "object")
    throw UnexpectedRenderError;
  const { default: defaultMod } = baseMod;
  if (isPropagatedAssetsModule(defaultMod)) {
    const { collectedStyles, collectedLinks, collectedScripts, getMod } = defaultMod;
    if (typeof getMod !== "function")
      throw UnexpectedRenderError;
    const propagationMod = await getMod();
    if (propagationMod == null || typeof propagationMod !== "object")
      throw UnexpectedRenderError;
    const Content = createComponent({
      factory(result, baseProps, slots) {
        let styles = "", links = "", scripts = "";
        if (Array.isArray(collectedStyles)) {
          styles = collectedStyles.map((style) => {
            return renderUniqueStylesheet(result, {
              type: "inline",
              content: style
            });
          }).join("");
        }
        if (Array.isArray(collectedLinks)) {
          links = collectedLinks.map((link) => {
            return renderUniqueStylesheet(result, {
              type: "external",
              src: prependForwardSlash(link)
            });
          }).join("");
        }
        if (Array.isArray(collectedScripts)) {
          scripts = collectedScripts.map((script) => renderScriptElement(script)).join("");
        }
        let props = baseProps;
        if (id.endsWith("mdx")) {
          props = {
            components: propagationMod.components ?? {},
            ...baseProps
          };
        }
        return createHeadAndContent(
          unescapeHTML(styles + links + scripts),
          renderTemplate`${renderComponent(
            result,
            "Content",
            propagationMod.Content,
            props,
            slots
          )}`
        );
      },
      propagation: "self"
    });
    return {
      Content,
      headings: propagationMod.getHeadings?.() ?? [],
      remarkPluginFrontmatter: propagationMod.frontmatter ?? {}
    };
  } else if (baseMod.Content && typeof baseMod.Content === "function") {
    return {
      Content: baseMod.Content,
      headings: baseMod.getHeadings?.() ?? [],
      remarkPluginFrontmatter: baseMod.frontmatter ?? {}
    };
  } else {
    throw UnexpectedRenderError;
  }
}
function isPropagatedAssetsModule(module) {
  return typeof module === "object" && module != null && "__astroPropagation" in module;
}

// astro-head-inject

const contentDir = '/src/content/';

const contentEntryGlob = /* #__PURE__ */ Object.assign({"/src/content/placeholder/test.md": () => import('./test_HESiFaV4.mjs'),"/src/content/slideContent/firstSlide.md": () => import('./firstSlide_mxgxzdYD.mjs')});
createCollectionToGlobResultMap({
	globResult: contentEntryGlob,
	contentDir,
});

const dataEntryGlob = /* #__PURE__ */ Object.assign({});
createCollectionToGlobResultMap({
	globResult: dataEntryGlob,
	contentDir,
});
const collectionToEntryMap = createCollectionToGlobResultMap({
	globResult: { ...contentEntryGlob, ...dataEntryGlob },
	contentDir,
});

let lookupMap = {};
lookupMap = {"slideContent":{"type":"content","entries":{"firstslide":"/src/content/slideContent/firstSlide.md"}},"placeholder":{"type":"content","entries":{"test":"/src/content/placeholder/test.md"}}};

function createGlobLookup(glob) {
	return async (collection, lookupId) => {
		const filePath = lookupMap[collection]?.entries[lookupId];

		if (!filePath) return undefined;
		return glob[collection][filePath];
	};
}

const renderEntryGlob = /* #__PURE__ */ Object.assign({"/src/content/placeholder/test.md": () => import('./test_XZQ_9LXk.mjs'),"/src/content/slideContent/firstSlide.md": () => import('./firstSlide_B7Bt7XP1.mjs')});
const collectionToRenderEntryMap = createCollectionToGlobResultMap({
	globResult: renderEntryGlob,
	contentDir,
});

const getEntry = createGetEntry({
	getEntryImport: createGlobLookup(collectionToEntryMap),
	getRenderEntryImport: createGlobLookup(collectionToRenderEntryMap),
});

const $$Astro$8 = createAstro("https://patdalcia.github.io");
const $$SideScroll = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$8, $$props, $$slots);
  Astro2.self = $$SideScroll;
  const entry = await getEntry("slideContent", "firstSlide");
  await entry.render();
  return renderTemplate`${maybeRenderHead()}<section class="sideScrollerContainer w-screen h-screen bg-green-400"> <div class="w-[600%] h-full overscroll-none flex flex-nowrap"> <div class="panel w-1/6 h-full bg-black flex flex-col justify-center items-center"> <!-- <article class="prose">
                    <h1 class="text-5xl">Welcome</h1>
                <h2 class="text-4xl">Lets Make Some Sound</h2>
                <h3 class="text-3xl">At SonicCraft Productions, we breathe life into your music, transforming your visions into sonic reality. With state-of-the-art studios, cutting-edge technology, and a passion for sound that resonates, we're here to guide your music project from concept to chart-topping success.</h3>
                </article> --> <!-- { placeholders.map((placeholder) => {
                    return (
                        <div>
                         href={\`/newsletter/\${placeholder.slug}\`}
                         <h1>title={placeholder.data.title}</h1>
                         body={placeholder.data.summary}
                        </div>
                        )
                    })
                } --> <!-- <Prose>
                    <p>Title: {entry.data.title.toString()}</p>
                    <Content />
                </Prose> --> </div> <div class="panel w-1/6 h-full bg-yellow-400 flex justify-center items-center text-blue-400"> <div class="w-full h-full flex justify-center items-center text-white"> <!-- Insert Content Here --> <!-- Timeline START --> <!-- Timeline END --> </div> </div> <div class="panel w-1/6 h-full bg-blue-400 flex justify-center items-center text-blue-400">
Slide 3
</div> <div class="panel w-1/6 h-full bg-orange-400 flex justify-center items-center text-blue-400">
Slide 4
</div> </div> </section> `;
}, "C:/Users/thegr/Desktop/websites/bbl/src/components/widgets/SideScroll.astro", void 0);

const $$Astro$7 = createAstro("https://patdalcia.github.io");
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Main", ",": true, "description": "the main page" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main> ${renderComponent($$result2, "Navigation", $$Navigation, {})} ${renderComponent($$result2, "Hero2", $$Hero2, {})} ${renderComponent($$result2, "SideScroll", $$SideScroll, {})} </main> ` })}`;
}, "C:/Users/thegr/Desktop/websites/bbl/src/pages/index.astro", void 0);

const $$file$6 = "C:/Users/thegr/Desktop/websites/bbl/src/pages/index.astro";
const $$url$6 = "/bbl";

const index = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file$6,
	url: $$url$6
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$6 = createAstro("https://patdalcia.github.io");
const $$Artists = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$Artists;
  return renderTemplate`<!-- <Layout
    title='Main',
    description='the main page'
>
    <Navigation />
    <SideScroll />
</Layout> -->${renderComponent($$result, "SideScroll", $$SideScroll, {})}`;
}, "C:/Users/thegr/Desktop/websites/bbl/src/pages/Artists.astro", void 0);

const $$file$5 = "C:/Users/thegr/Desktop/websites/bbl/src/pages/Artists.astro";
const $$url$5 = "/bbl/Artists";

const Artists = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Artists,
	file: $$file$5,
	url: $$url$5
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$5 = createAstro("https://patdalcia.github.io");
const $$Beats = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$Beats;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Main", ",": true, "description": "the main page" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Navigation", $$Navigation, {})}
Beats Page
` })}`;
}, "C:/Users/thegr/Desktop/websites/bbl/src/pages/Beats.astro", void 0);

const $$file$4 = "C:/Users/thegr/Desktop/websites/bbl/src/pages/Beats.astro";
const $$url$4 = "/bbl/Beats";

const Beats = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Beats,
	file: $$file$4,
	url: $$url$4
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$4 = createAstro("https://patdalcia.github.io");
const $$MiniSideScroll = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$MiniSideScroll;
  return renderTemplate`${maybeRenderHead()}<div class="section bg-slate-400 flex-center slides-section" data-astro-cid-bxolbqr5> <div class="content" data-astro-cid-bxolbqr5> <div class="text flex-center" data-astro-cid-bxolbqr5> <h1 data-astro-cid-bxolbqr5>Things</h1> </div> <div class="slides" data-astro-cid-bxolbqr5> <div class="slide" data-astro-cid-bxolbqr5> <div class="slide-content bg-purple-400" data-astro-cid-bxolbqr5></div> </div> <div class="slide" data-astro-cid-bxolbqr5> <div class="slide-content bg-red-400" data-astro-cid-bxolbqr5></div> </div> <div class="slide" data-astro-cid-bxolbqr5> <div class="slide-content bg-orange-400" data-astro-cid-bxolbqr5></div> </div> </div> </div> </div> <div class="section bg-blue-400" data-astro-cid-bxolbqr5></div>  `;
}, "C:/Users/thegr/Desktop/websites/bbl/src/components/widgets/MiniSideScroll.astro", void 0);

const $$Astro$3 = createAstro("https://patdalcia.github.io");
const $$Contact = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Contact;
  return renderTemplate`${renderComponent($$result, "MiniSideScroll", $$MiniSideScroll, {})}`;
}, "C:/Users/thegr/Desktop/websites/bbl/src/pages/Contact.astro", void 0);

const $$file$3 = "C:/Users/thegr/Desktop/websites/bbl/src/pages/Contact.astro";
const $$url$3 = "/bbl/Contact";

const Contact = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Contact,
	file: $$file$3,
	url: $$url$3
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$2 = createAstro("https://patdalcia.github.io");
const $$History = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$History;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Main", ",": true, "description": "the main page" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Navigation", $$Navigation, {})}
History Page
` })}`;
}, "C:/Users/thegr/Desktop/websites/bbl/src/pages/History.astro", void 0);

const $$file$2 = "C:/Users/thegr/Desktop/websites/bbl/src/pages/History.astro";
const $$url$2 = "/bbl/History";

const History = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$History,
	file: $$file$2,
	url: $$url$2
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$1 = createAstro("https://patdalcia.github.io");
const $$Join = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Join;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Main", ",": true, "description": "the main page" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Navigation", $$Navigation, {})}
Join Page
` })}`;
}, "C:/Users/thegr/Desktop/websites/bbl/src/pages/Join.astro", void 0);

const $$file$1 = "C:/Users/thegr/Desktop/websites/bbl/src/pages/Join.astro";
const $$url$1 = "/bbl/Join";

const Join = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Join,
	file: $$file$1,
	url: $$url$1
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro = createAstro("https://patdalcia.github.io");
const $$Process = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Process;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Main", ",": true, "description": "the main page" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Navigation", $$Navigation, {})}
Process Page
` })}`;
}, "C:/Users/thegr/Desktop/websites/bbl/src/pages/Process.astro", void 0);

const $$file = "C:/Users/thegr/Desktop/websites/bbl/src/pages/Process.astro";
const $$url = "/bbl/Process";

const Process = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Process,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { Artists as A, Beats as B, Contact as C, History as H, Join as J, Process as P, index as i };
