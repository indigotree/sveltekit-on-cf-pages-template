module.exports = {
  ...require("@indigotree/prettier-config"),
  "plugins": ["prettier-plugin-svelte"],
	"pluginSearchDirs": ["."],
	"overrides": [{ "files": "*.svelte", "options": { "parser": "svelte" } }]
};
