// @ts-check
import { defineConfig, passthroughImageService } from "astro/config";
import tailwind from "@astrojs/tailwind";

// Remove the Vercel serverless import
// import vercel from "@astrojs/vercel/serverless";

export default defineConfig({
	integrations: [tailwind()],
	output: "static", // Change this from "server" to "static"
	site: "https://guysolan.github.io",
	base: "/frontend",
	image: {
		service: passthroughImageService(),
	},
});
