/* empty css                                         */
import { c as createComponent, r as renderTemplate, a as renderComponent, b as renderHead } from '../chunks/astro/server_DDlMKnLH.mjs';
import 'kleur/colors';
import { $ as $$BaseHead, a as $$Header, b as $$Footer } from '../chunks/Footer_DU8Oh7nj.mjs';
import { S as SITE_TITLE, a as SITE_DESCRIPTION } from '../chunks/consts_DW4GOfO_.mjs';
import { $ as $$Image } from '../chunks/_astro_assets_CZ9mM9BO.mjs';
export { renderers } from '../renderers.mjs';

const InnOnTheLake = new Proxy({"src":"/_astro/inn-on-the-lake.Cy9XpwYK.jpg","width":1024,"height":681,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/guysolan/Code/Wedding/frontend/src/assets/accommodation/inn-on-the-lake.jpg";
							}
							
							return target[name];
						}
					});

const MerryHarriers = new Proxy({"src":"/_astro/merry-harriers.CnJqFFy_.jpg","width":1220,"height":822,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/guysolan/Code/Wedding/frontend/src/assets/accommodation/merry-harriers.jpg";
							}
							
							return target[name];
						}
					});

const LytheHotel = new Proxy({"src":"/_astro/lythe-hotel.fyxcd51n.jpg","width":700,"height":525,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/guysolan/Code/Wedding/frontend/src/assets/accommodation/lythe-hotel.jpg";
							}
							
							return target[name];
						}
					});

const BarnettHotel = new Proxy({"src":"/_astro/barnet-hotel.DXUfAX2w.jpg","width":1024,"height":768,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/guysolan/Code/Wedding/frontend/src/assets/accommodation/barnet-hotel.jpg";
							}
							
							return target[name];
						}
					});

const CrownInn = new Proxy({"src":"/_astro/crown-inn.C3mIBTis.jpg","width":550,"height":367,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/guysolan/Code/Wedding/frontend/src/assets/accommodation/crown-inn.jpg";
							}
							
							return target[name];
						}
					});

const RoseAndCrown = new Proxy({"src":"/_astro/rose-and-crown.DT4uDBo1.jpg","width":1024,"height":683,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/guysolan/Code/Wedding/frontend/src/assets/accommodation/rose-and-crown.jpg";
							}
							
							return target[name];
						}
					});

const TheSwan = new Proxy({"src":"/_astro/the-swan.Cnx-a1wD.jpg","width":1024,"height":768,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/guysolan/Code/Wedding/frontend/src/assets/accommodation/the-swan.jpg";
							}
							
							return target[name];
						}
					});

const TheMulberry = new Proxy({"src":"/_astro/the-mulberry.40t2IB1F.jpg","width":550,"height":368,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/guysolan/Code/Wedding/frontend/src/assets/accommodation/the-mulberry.jpg";
							}
							
							return target[name];
						}
					});

const SquirrelInn = new Proxy({"src":"/_astro/squirrel-inn.BHHSMNgr.webp","width":480,"height":320,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/guysolan/Code/Wedding/frontend/src/assets/accommodation/squirrel-inn.webp";
							}
							
							return target[name];
						}
					});

const accommodation = [
  {
    name: "The Inn on the Lake",
    travel: 6,
    location: "Godalming",
    price: "££",
    image: InnOnTheLake
  },
  {
    name: "Merry Harriers",
    travel: 9,
    location: "Hambledon",
    price: "££",
    image: MerryHarriers
  },
  {
    name: "Barnett Hotel",
    link: "https://alexanderhotels.co.uk/barnett-hill/",
    travel: 14,
    location: "Guildford",
    price: "£££",
    image: BarnettHotel
  },
  {
    name: "The Lythe Hotel",
    link: "https://lythehill.co.uk/",
    travel: 21,
    location: "Haslemere",
    price: "£££",
    image: LytheHotel
  },
  {
    name: "Crown Inn",
    link: "https://www.crowninnhaslemere.co.uk/",
    travel: 15,
    location: "Chiddingfold",
    price: "££",
    image: CrownInn
  },
  {
    name: "Rose and Crown",
    link: "https://www.roseandcrownhaslemere.co.uk/",
    travel: 7,
    location: "Godalming",
    price: "££",
    image: RoseAndCrown
  },
  {
    name: "The Swan",
    link: "https://www.theswanhaslemere.co.uk/",
    travel: 15,
    location: "Chiddingfold",
    price: "££",
    image: TheSwan
  },
  {
    name: "The Mulberry",
    link: "https://www.themulberryhotel.co.uk/",
    travel: 18,
    location: "Haslemere",
    price: "££",
    image: TheMulberry
  },
  {
    name: "Squirrel Inn",
    link: "https://the-squirrel.co.uk/",
    travel: 12,
    location: "Hurtmore",
    price: "££",
    image: SquirrelInn
  }
];

const $$Accommodation = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`<html lang="en"> <head>${renderComponent($$result, "BaseHead", $$BaseHead, { "title": SITE_TITLE, "description": SITE_DESCRIPTION })}${renderHead()}</head> <body> ${renderComponent($$result, "Header", $$Header, {})} <main class="max-w-[800px] mx-auto space-y-8 mb-6"> <div class="px-6 text-lg text-zinc-800 space-y-4"> <p class="leading-relaxed">
For the night of the wedding, younguns are more than welcome
                    to stay. Just bring a sleeping bag and roll mat.
</p> <p class="leading-relaxed">
For those who prefer a little more luxury, here are some
                    local options:
</p> </div> <ul class="px-4 space-y-8 my-4"> ${accommodation.map((a) => renderTemplate`<li class="flex flex-col lg:flex-row-reverse lg:gap-6 bg-beige mx-auto p-6 border border-zinc-400 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 lg:items-start"> <div class="flex-1 space-y-3"> <h2 class="text-xl lg:text-2xl font-semibold text-zinc-800"> ${a.name} </h2> <p class="text-lg text-zinc-700"> ${a.location} </p> <ul class="flex flex-wrap gap-2 pt-2"> <li class="text-sm px-3 py-1 border rounded-full border-zinc-400 text-zinc-600 bg-white"> ${a.travel} minutes
</li> <li class="text-sm px-3 py-1 border rounded-full border-zinc-400 text-zinc-600 bg-white"> ${a.price} </li> </ul> </div> <div class="mt-4 lg:mt-0 lg:w-1/2 overflow-hidden rounded-md shadow-sm"> ${renderComponent($$result, "Image", $$Image, { "class": "w-full h-full object-cover transition-transform duration-300 hover:scale-105", "width": 450, "height": 300, "src": a.image, "alt": a.name })} </div> </li>`)} </ul> </main> ${renderComponent($$result, "Footer", $$Footer, {})} </body></html>`;
}, "/Users/guysolan/Code/Wedding/frontend/src/pages/accommodation.astro", void 0);

const $$file = "/Users/guysolan/Code/Wedding/frontend/src/pages/accommodation.astro";
const $$url = "/accommodation";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Accommodation,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
