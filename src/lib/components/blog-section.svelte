<script>
	import Button from '$lib/components/common/button.svelte';
	import Card from '$lib/components/common/card.svelte';
	export let posts;
</script>

<section class="recent-posts">
	<div id="recent-posts-title-card">
		<h2>recent posts</h2>
		<Button />
	</div>
	{#each posts as post}
		<Card {post} />
	{/each}
</section>

<style lang="scss">
	.recent-posts {
		background-image: radial-gradient(circle at 1px 1px, green 1px, transparent 0);
		background-size: 20px 30px;
		margin-top: 1rem;
		display: flex;
		align-items: center;
		@media (max-width: 855px) {
			flex-direction: column;
		}
	}
	#recent-posts-title-card {
		padding-left: 2rem;
		// width: 25%;
		@media (max-width: 1000px) {
			padding-left: unset;
		}
	}
</style>
