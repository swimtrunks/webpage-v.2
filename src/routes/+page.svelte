<script>
	//components
	import Divider from '$lib/components/common/divider.svelte';
	import About from '$lib/components/about.svelte';
	import BlogSection from '$lib/components/blog-section.svelte';
	import ProjectSection from '$lib/components/project-section.svelte';
	//styles
	import '$lib/styles/global.scss';
	//scripts (props)
	export let data;
	let { posts } = data;

</script>

<div class="homepage">
	<About />
	<Divider
		fullWidth={true}
		dividerText={'book :" the Creative Gene " by Hideo Kojima || album : " V4 Visions OF LOVE & ANDROIDS " - Various Artist / Numero Group  || video game: "Alan Wake 2" '}
	/>
	<ProjectSection />
	<BlogSection {posts} />
</div>
<div class="paperOverlay" />

<style lang="scss">
	.homepage {
		display: flex;
		flex-direction: column;
		margin: 0 auto;
		align-items: center;
		@media (max-width: 800px) {
			align-items: unset;
		}
	}
</style>
