import { error } from '@sveltejs/kit';
import filteredPosts from '$lib/posts';

export async function load({ params }) {
	const result = Object.keys(filteredPosts)
		.slice(0, 3)
		.map((index) => {
			const { slug, title, date, excerpt, tags, coverImage } = filteredPosts[index];
			return {
				slug,
				title,
				date,
				excerpt,
				tags,
				coverImage
			};
		});

	if (result) {
		return {
			posts: result
		};
	}

	throw error(500, `Could not load ${params.slug}`);
}
