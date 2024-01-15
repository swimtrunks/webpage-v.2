<script>
	export let post;
</script>

<section>
	<h1>Featured</h1>
	<a href={post.slug} class="featured-card">
		<img src={post.coverImage} alt={post.alt_text} />
		<div>
			<h2>{post.title}</h2>
			<p>
				{post.excerpt}
			</p>
			<!-- <span>published: {post.date}</span> -->
		</div>
	</a>
</section>

<style lang="scss">
	a {
		padding: 1rem;
		display: flex;
		text-decoration: none;
		background-color: rgba(255, 255, 255, 0.328);
		border-radius: 1rem;
		box-shadow: 0px 11px 15px -7px rgba(0, 0, 0, 0.1), 0px 24px 38px 3px rgba(0, 0, 0, 0.07),
				0px 9px 46px 8px rgba(0, 0, 0, 0.06);
		&:hover {
			transition: 500ms;
			background-color: rgba(255, 255, 255, 0.698);
			box-shadow: 0px 11px 15px -7px rgba(0, 0, 0, 0.1), 0px 24px 38px 3px rgba(0, 0, 0, 0.07),
				0px 9px 46px 8px rgba(0, 0, 0, 0.06);
		}
		@media (max-width: 500px) {
			// flex-direction: column;
			// align-items: center;
		}
	}
	h1 {
		font-size: 1.75rem;
	}
	h2{
		text-transform: uppercase;
		font-family: Bebas Neue;
		font-size: 2rem;
		margin-top: 1rem;
		margin-bottom: 0;
	}
	section {
		display: block;
		border-radius: 1rem;
	}
	.featured-card {
		display: flex;
		gap: 1rem;
		height: 10rem;
		img {
			width: 50%;
		}
		p {
			margin-top: 8px;
			color: black;
			font-size: 1rem;
			font-weight: 500;
			letter-spacing: -0.5px;
		}
		span{
			color: rgb(32, 140, 32)
		}
		@media (max-width: 500px) {
			gap: 0.25rem;
			flex-direction: column;
			align-items: center;
			height: unset;
			img {
				width: 100%;
			}
		}
	}
</style>
