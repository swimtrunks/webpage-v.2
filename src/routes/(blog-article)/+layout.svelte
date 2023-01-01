<script>
	import '$lib/styles/global.scss';
	export let data;
	let { post } = data;
</script>

<svelte:head />

<div class="markdown-layout">
	<main>
		<article id="markdown-content">
			<div class="image">
				<img src={post.coverImage} alt="" />
			</div>
			<div class="blog-header">
				<h1>{post.title}</h1>
			</div>

			<div class="content">
				<slot />
			</div>
		</article>
	</main>
</div>

<style lang="scss">
	.blog-header {
		text-align: center;
		font-size: 1.5rem;
	}
	.image {
		display: flex;
		justify-content: center;
		img {
			max-width: 600px;
		}
	}
</style>
