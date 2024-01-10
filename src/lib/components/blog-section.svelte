<script>
	import Button from '$lib/components/common/button.svelte';
	import Card from '$lib/components/common/card.svelte';
	export let posts;
</script>

<section id="blog-section">
	<div class="section-heading">
		writing:
	</div>
	<div class="recent-posts">
		{#each posts as post}
			<Card {post} />
		{/each}
	</div>
	<div id="recent-posts-title-card">
		<Button text="*read more" link="/blog" />
	</div>
</section>

<style lang="scss">
	#blog-section {
		display: flex;
		margin: 0 auto;
		flex-direction: column;
		max-width: 85%;
	}
	.recent-posts {
		background-image: radial-gradient(circle at 1px 1px, green 1px, transparent 0);
		background-size: 30px 40px;
		max-width: 1000px;
		margin-top: 1rem;
		display: flex;
		align-items: center;
		justify-content: space-between;
		@media (max-width: 855px) {
			flex-direction: column;
		}
	}
	#recent-posts-title-card {
		@media (max-width: 1000px) {
			padding-left: unset;
		}
	}
</style>
