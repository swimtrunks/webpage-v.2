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

	const messages = [
		"Hello, I'm Malcolm Peterson",
		"I'm a software engineer",
		"I'm a husband, father, and dog owner",
		"I'm a video game encyclopedia and collector"
	];

</script>

<div class="homepage">
	<About />
	<Divider
		fullWidth={true}
		dividerText={'now playing:"wow that was fast" by lil nas x, || most played genre this week: "pop" || total scrobbles this month: "1000"'}
	/>
	<ProjectSection />
	<BlogSection posts={posts} />
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
