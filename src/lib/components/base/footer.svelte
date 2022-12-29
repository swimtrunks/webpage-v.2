<script>
	import Socials from '$lib/components/socials.svelte';
</script>

<footer>
	<p>© 2022 Malcolm Peterson. Made <strong>NOWHERE.</strong></p>
	<h5>
		Powered by <a href="https://kit.svelte.dev/" rel="noreferrer" target="_blank">SvelteKit</a>,
		Avatar by
		<a href="http://www.shaferbrown.com/" rel="noreferrer" target="_blank">Shafer Brown</a>.
	</h5>
</footer>

<style lang="scss">
	footer {
		text-align: center;
		a {
			color: rgb(255, 145, 0);
			&:hover {
				color: rgb(168, 100, 12);
			}
		}
		strong {
			letter-spacing: -1px;
		}
	}
</style>
