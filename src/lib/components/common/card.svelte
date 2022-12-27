<script>
	export let post;
</script>

<a class="click-card" href="/blog/{post.slug}">
	<img src="/images/placeholder-thumbnail.webp" alt="" />
	<div class="card-divider" />
	<div class="card-content">
		<h4>{post.title}</h4>
		<p>{post.excerpt}</p>
	</div>
</a>

<style lang="scss">
	.click-card {
		padding: 1rem;
		background-color: white;
		text-decoration: none;
		border-radius: 0.5rem;
		box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.1), 0px 4px 5px rgba(0, 0, 0, 0.07),
			0px 1px 10px rgba(0, 0, 0, 0.06);
		display: flex;
		flex-direction: column;
		width: 20%;
		height: 20rem;
	}
	.card-divider {
		margin-top: 1rem;
		width: 5rem;
		border: 1px solid green;
	}
	.card-content {
		display: flex;
		flex-direction: column;
		h4 {
			margin-bottom: 0;
			display: -webkit-box;
			-webkit-line-clamp: 1;
			-webkit-box-orient: vertical;
			overflow: hidden;
		}
		p {
			color: black;
		}
	}
</style>
