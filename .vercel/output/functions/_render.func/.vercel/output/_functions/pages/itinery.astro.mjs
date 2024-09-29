/* empty css                                         */
import { c as createComponent, r as renderTemplate, a as renderComponent, b as renderHead, d as createAstro } from '../chunks/astro/server_DDlMKnLH.mjs';
import 'kleur/colors';
import { $ as $$BaseHead, a as $$Header, b as $$Footer } from '../chunks/Footer_DU8Oh7nj.mjs';
import { S as SITE_TITLE, a as SITE_DESCRIPTION } from '../chunks/consts_DW4GOfO_.mjs';
import { $ as $$Image } from '../chunks/_astro_assets_CZ9mM9BO.mjs';
export { renderers } from '../renderers.mjs';

const FamilyHugs = new Proxy({"src":"/_astro/family-hugs.DdT1-FLV.jpeg","width":1600,"height":1066,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/guysolan/Code/Wedding/frontend/src/assets/wedding/family-hugs.jpeg";
							}
							
							return target[name];
						}
					});

const Celebrating = new Proxy({"src":"/_astro/posing.FxZZUB0u.JPG","width":3456,"height":2304,"format":"jpg","orientation":1}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/guysolan/Code/Wedding/frontend/src/assets/wedding/posing.JPG";
							}
							
							return target[name];
						}
					});

const $$Astro = createAstro();
const $$Itinery = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Itinery;
  console.log(Astro2.url.searchParams);
  return renderTemplate`<html lang="en"> <head>${renderComponent($$result, "BaseHead", $$BaseHead, { "title": SITE_TITLE, "description": SITE_DESCRIPTION })}${renderHead()}</head> <body> ${renderComponent($$result, "Header", $$Header, {})} <main class="max-w-[800px] mx-auto"> <div class="p-4 space-y-4 lg:space-y-8"> <section class="bg-beige p-6 mx-auto flex flex-col border border-zinc-400 rounded-lg shadow-md"> <h2 class="text-2xl font-semibold mb-2">Family Party</h2> <h3 class="text-lg text-zinc-600 mb-4">
05 September 2025
</h3> <p class="text-zinc-800 mb-6 text-lg">
We are having a family party the day before the wedding.
						Please come and join us for a BBQ and drinks.
</p> ${renderComponent($$result, "Image", $$Image, { "src": FamilyHugs, "alt": "Family Hugs", "class": "rounded-md shadow-sm" })} </section> <section class="bg-beige p-6 mx-auto flex flex-col border border-zinc-600 rounded-lg shadow-md"> <h2 class="text-2xl font-semibold mb-2">Wedding Day</h2> <h3 class="text-lg text-zinc-600 mb-4">
06 September 2025
</h3> <p class="text-zinc-800 mb-6 text-lg">
Come from 1pm for the ceremony at 2pm.
</p> ${renderComponent($$result, "Image", $$Image, { "src": Celebrating, "alt": "Celebrating", "class": "rounded-md shadow-sm" })} </section> </div> <h4 class="text-zinc-800 w-full text-center p-8 mb-8 max-w-[600px] text-xl lg:text-2xl mx-auto font-semibold">
More information will be added later once we figure things out!
</h4> </main> ${renderComponent($$result, "Footer", $$Footer, {})} </body></html>`;
}, "/Users/guysolan/Code/Wedding/frontend/src/pages/itinery.astro", void 0);

const $$file = "/Users/guysolan/Code/Wedding/frontend/src/pages/itinery.astro";
const $$url = "/itinery";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Itinery,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
