<script>
	// Declare the page variable to use on the client
	export let data;
</script>

<!-- Here we'll load the component of the blog post page itself -->
<div class="overview">
	<div class="text">
		<svelte:component this={data.page.default} />
	</div>
</div>

<style>
	.overview {
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	.text {
		background-color: rgba(255, 235, 205, 0.5);
		border-radius: 1rem;
		padding: 2rem;
		max-width: 62rem;
	}
</style>
