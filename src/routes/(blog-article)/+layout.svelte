<script>
	import '$lib/styles/global.scss';
	export let data;
	$: ({ post } = data);
</script>

<svelte:head />

<div class="markdown-layout">
	<main>
		<article id="markdown-content">
			<div class="header">
				<h1>{post.title}</h1>
			</div>

			<div class="content">
				<slot />
			</div>
		</article>
	</main>
</div>

<style>
	.header {
		text-align: center;
		font-size: 1.5rem;
	}
</style>
