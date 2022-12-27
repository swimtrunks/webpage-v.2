<script>
	export let data;
	let { posts } = data;
</script>

{#each posts as post}
	<div>
		<a href="/blog/{post.slug}">this is a post</a>
	</div>
{/each}
