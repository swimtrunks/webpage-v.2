import { error } from '@sveltejs/kit';
import filteredPosts from '$lib/posts';

export async function load({ params }) {
	const result = Object.keys(filteredPosts)
		.slice(0, 3)
		.map((index) => {
			const { slug, title, date, excerpt, tags } = filteredPosts[index];
			return {
				slug,
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

	throw error(500, `Could not load ${params.slug}`);
}
