import adapter from "@sveltejs/adapter-cloudflare";

const config = {
	kit: {
		adapter: adapter({
			routes: {
				include: ["/*"],
				exclude: ["<all>"],
			},
		}),
	},
};

export default config;
