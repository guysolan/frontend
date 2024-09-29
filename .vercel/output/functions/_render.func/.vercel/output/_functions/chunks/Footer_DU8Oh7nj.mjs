import { c as createComponent, r as renderTemplate, e as addAttribute, d as createAstro, m as maybeRenderHead, s as spreadAttributes, f as renderSlot, a as renderComponent } from './astro/server_DDlMKnLH.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                                 */

const $$Astro$1 = createAstro();
const $$BaseHead = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$BaseHead;
  const canonicalURL = new URL(Astro2.url.pathname, Astro2.site);
  const { title, description, image = "/blog-placeholder-1.jpg" } = Astro2.props;
  return renderTemplate`<!-- Global Metadata --><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"${addAttribute(Astro2.generator, "content")}><!-- Font preloads --><link rel="preload" href="/fonts/atkinson-regular.woff" as="font" type="font/woff" crossorigin><link rel="preload" href="/fonts/atkinson-bold.woff" as="font" type="font/woff" crossorigin><!-- Canonical URL --><link rel="canonical"${addAttribute(canonicalURL, "href")}><!-- Primary Meta Tags --><title>${title}</title><meta name="title"${addAttribute(title, "content")}><meta name="description"${addAttribute(description, "content")}><!-- Open Graph / Facebook --><meta property="og:type" content="website"><meta property="og:url"${addAttribute(Astro2.url, "content")}><meta property="og:title"${addAttribute(title, "content")}><meta property="og:description"${addAttribute(description, "content")}><meta property="og:image"${addAttribute(new URL(image, Astro2.url), "content")}><!-- Twitter --><meta property="twitter:card" content="summary_large_image"><meta property="twitter:url"${addAttribute(Astro2.url, "content")}><meta property="twitter:title"${addAttribute(title, "content")}><meta property="twitter:description"${addAttribute(description, "content")}><meta property="twitter:image"${addAttribute(new URL(image, Astro2.url), "content")}><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Calistoga&display=swap" rel="stylesheet"><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Calistoga&family=Chewy&display=swap" rel="stylesheet">`;
}, "/Users/guysolan/Code/Wedding/frontend/src/components/BaseHead.astro", void 0);

const $$Astro = createAstro();
const $$HeaderLink = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$HeaderLink;
  const { href, class: className, ...props } = Astro2.props;
  const { pathname } = Astro2.url;
  const subpath = pathname.match(/[^\/]+/g);
  const isActive = href === pathname || href === "/" + subpath?.[0];
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(href, "href")}${addAttribute([
    className,
    {
      "underline-offset-4 font-bold underline": isActive
    }
  ], "class:list")}${spreadAttributes(props)}> ${renderSlot($$result, $$slots["default"])} </a> <!-- <style>
	a {
		@apply inline-block no-underline;
	}
</style> -->`;
}, "/Users/guysolan/Code/Wedding/frontend/src/components/HeaderLink.astro", void 0);

const $$Header = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<header class="px-4 py-8"> <div class="flex w-full mx-auto justify-between items-center bg-beige border-4 px-4 py-4 rounded-full border-zinc-400 md:w-fit md:px-8"> <div class="flex w-full justify-around text-md md:text-lg gap-x-4 md:gap-x-8"> ${renderComponent($$result, "HeaderLink", $$HeaderLink, { "href": "/" }, { "default": ($$result2) => renderTemplate`Home` })} ${renderComponent($$result, "HeaderLink", $$HeaderLink, { "href": "/accommodation" }, { "default": ($$result2) => renderTemplate`Accommodation` })} ${renderComponent($$result, "HeaderLink", $$HeaderLink, { "href": "/itinery" }, { "default": ($$result2) => renderTemplate`Timing` })} </div> </div> </header>`;
}, "/Users/guysolan/Code/Wedding/frontend/src/components/Header.astro", void 0);

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<footer class="px-8"> <!-- &copy; {today.getFullYear()} Guy and Amelia Solan. All rights reserved. --> </footer>`;
}, "/Users/guysolan/Code/Wedding/frontend/src/components/Footer.astro", void 0);

export { $$BaseHead as $, $$Header as a, $$Footer as b };
