import preprocess from 'svelte-preprocess';
import { mdsvex } from 'mdsvex';

const config = {
	kit: {
		/* Kit options here */
	},

	extensions: ['.svelte', '.md'],

	preprocess: [
		preprocess(),
		mdsvex({
			extensions: ['.md'],
		})
	]
};
export default config;

//--notes

//First error with md handling:
//Failed to parse source for import analysis because the content contains invalid JS syntax. You may need to install appropriate plugins to handle the .md file format, or if it's an
//asset, add "**/*.md" to `assetsInclude` in your configuration.
