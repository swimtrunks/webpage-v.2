<script>
	export let text;
	export let link;
</script>

<div class="blog-button">
	<!-- TODO: Pass in props -->
	<a href="/blog" alt=""> Read Everything</a>
</div>

<style lang="scss">
	a {
		padding: 1rem;
		font-family: Lexend Deca;
		background-color: green;
		text-decoration: none;
		border-radius: 0.75rem;
		box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.1), 0px 4px 5px rgba(0, 0, 0, 0.07),
			0px 1px 10px rgba(0, 0, 0, 0.06);
		color: white;
		cursor: pointer;
	}
	.blog-button {
		will-change: contents;
		transition: all 0.3s ease-in-out;
	}
	.blog-button:hover {
		transform: scale(1.05);
	}
</style>
