<script>
	export let data;
	let { posts } = data;
</script>

{#each posts as post}
	<div>
		<a href="/{post.slug}">{post.title} // {post.date}</a>
	</div>
{/each}
