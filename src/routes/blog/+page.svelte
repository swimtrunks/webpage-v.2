<script>
	import FeaturedPost from '$lib/components/featured-post.svelte';
	export let data;
	let { posts } = data;
</script>

<section>
	{#each posts as post}
		{#if post.featured}
			<FeaturedPost {post} />
		{/if}
	{/each}
	<h2>Archive (aka. everything else):</h2>
	{#each posts as post}
		{#if !post.featured}
			<div>
				<a href="/{post.slug}">{post.title} // {post.date}</a>
			</div>
		{/if}
	{/each}
</section>

<style>
	section {
		display: block;
		margin: 0 auto;
	}
</style>
