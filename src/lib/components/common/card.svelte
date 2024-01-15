<script>
	export let post;
</script>

<a class="click-card" href="/{post.slug}">
	<img src={post.coverImage} alt={post.alt_text} />
	<div class="card-divider" />
	<div class="card-content">
		<span class="card-title">{post.title}</span>
		<p>{post.excerpt}</p>
	</div>
</a>

<style lang="scss">
	.click-card {
		padding: 1rem;
		background-color: transparent;
		text-decoration: none;
		display: flex;
		flex-direction: column;
		width: 50%;
		img {
			height: 150px;
			width: 100%;
		}
		@media (max-width: 855px) {
			padding: 0;
			width: 100%;
		}
			&:hover {
				.card-title {
					color: #688d5e;	
				}
			}
		}
	.card-divider {
		margin-top: 1rem;
		width: 5rem;
		border: 1px solid green;
		@media (max-width: 855px) {
			margin-left: 1rem;
			margin-right: 1rem;
			width: 1px;
		}
	}
	.card-content {
		display: flex;
		flex-direction: column;
		.card-title {
			margin-bottom: 0;
			letter-spacing: -0.5px;
			text-transform: lowercase;
			display: -webkit-box;
			-webkit-line-clamp: 1;
			-webkit-box-orient: vertical;
			overflow: hidden;
		}
		p {
			color: black;
			margin-top: 0px;
		}
	}
</style>
