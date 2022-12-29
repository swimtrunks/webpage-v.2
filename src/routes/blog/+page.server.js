import { error } from '@sveltejs/kit';
import filteredPosts from '../../lib/posts.js';

export async function load() {
	const result = Object.keys(filteredPosts).map((index) => {
		const { slug, title, date, excerpt, tags, featured, coverImage } = filteredPosts[index];
		return {
			slug,
			coverImage,
			featured,
			title,
			date,
			excerpt,
			tags
		};
	});

	if (result) {
		return {
			posts: result
		};
	}

	throw error(500, `Could not load blog posts`);
}
