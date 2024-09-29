/* empty css                                         */
import { c as createComponent, r as renderTemplate, a as renderComponent, b as renderHead, d as createAstro } from '../chunks/astro/server_DDlMKnLH.mjs';
import 'kleur/colors';
import { $ as $$BaseHead, a as $$Header, b as $$Footer } from '../chunks/Footer_DU8Oh7nj.mjs';
import { S as SITE_TITLE, a as SITE_DESCRIPTION } from '../chunks/consts_DW4GOfO_.mjs';
import { $ as $$Image } from '../chunks/_astro_assets_CZ9mM9BO.mjs';
export { renderers } from '../renderers.mjs';

const PosingOutside = new Proxy({"src":"/_astro/posing-outside.DMTso0ss.png","width":2871,"height":1914,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/guysolan/Code/Wedding/frontend/src/assets/wedding/posing-outside.png";
							}
							
							return target[name];
						}
					});

const WinningWithText = new Proxy({"src":"/_astro/winning-with-text.CHbfg6Ur.png","width":2585,"height":3318,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/guysolan/Code/Wedding/frontend/src/assets/wedding/winning-with-text.png";
							}
							
							return target[name];
						}
					});

const $$Astro = createAstro();
const $$Index = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  console.log(Astro2.url.searchParams);
  return renderTemplate`<html lang="en"> <head>${renderComponent($$result, "BaseHead", $$BaseHead, { "title": SITE_TITLE, "description": SITE_DESCRIPTION })}${renderHead()}</head> <body> ${renderComponent($$result, "Header", $$Header, {})} <main class="max-w-[800px] mx-auto space-y-8 lg:space-y-16"> <div class="px-2 space-y-2 lg:space-y-4 text-center"> <p class="text-3xl md:text-4xl lg:text-5xl text-zinc-900">
Time for a<br> Wedding Party
</p> <p class="text-lg md:text-xl lg:text-2xl text-zinc-600">
We’re getting married (again) and<br> would love for you to
					be there
</p> </div> <div class="relative text-white p-4"> ${renderComponent($$result, "Image", $$Image, { "class": "hidden w-full h-full object-fill", "src": PosingOutside, "alt": "Wedding Cover" })} ${renderComponent($$result, "Image", $$Image, { "class": "rounded-md shadow-sm", "src": WinningWithText, "alt": "Wedding Cover" })} </div> </main> ${renderComponent($$result, "Footer", $$Footer, {})} </body></html>`;
}, "/Users/guysolan/Code/Wedding/frontend/src/pages/index.astro", void 0);

const $$file = "/Users/guysolan/Code/Wedding/frontend/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
