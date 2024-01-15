<script>
	import '$lib/styles/global.scss';
	import FeaturedPost from '$lib/components/featured-post.svelte';
	export let data;
	let { posts } = data;
</script>

<section id = "blog-section">
	{#each posts as post}
		{#if post.featured}
			<FeaturedPost {post} />
		{/if}
	{/each}
	<section id="article-list">
		<h2>Archive (aka. everything else):</h2>
		{#each posts as post}
			{#if !post.featured}
				<div>
					<a href="/{post.slug}">{post.title} // {post.date}</a>
				</div>
			{/if}
		{/each}
	</section>
</section>

<style lang="scss">
	#blog-section {
		max-width: 1000px;
		display: block;
		margin: 0 auto;
		@media (max-width: 855px) {
			#article-list {
				margin: 0 auto;
				max-width: 85%;
			}
		}
	}
</style>
