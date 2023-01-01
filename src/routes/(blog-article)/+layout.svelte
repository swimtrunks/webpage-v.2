<script>
	import '$lib/styles/global.scss';
	export let data;
	let { post } = data;
</script>

<svelte:head />

<div class="markdown-layout">
	<main>
		<article id="markdown-content">
			<div class="content">
				<slot />
			</div>
		</article>
	</main>
</div>

<style lang="scss">

</style>
