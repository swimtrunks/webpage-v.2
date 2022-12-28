

<script>
	import '$lib/styles/global.scss';
	import Header from '$lib/components/base/header.svelte';
	import Footer from '$lib/components/base/footer.svelte';
	export let data;
	$: ({ post } = data);
</script>

<svelte:head>

</svelte:head>

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