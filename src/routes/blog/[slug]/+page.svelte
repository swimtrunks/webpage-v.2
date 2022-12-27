<script>
	// Declare the page variable to use on the client
	export let data;
</script>

<!-- Here we'll load the component of the blog post page itself -->

<svelte:component this={data.page.default} />
