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
		// border-radius: 0.5rem;
		// box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.1), 0px 4px 5px rgba(0, 0, 0, 0.07),
		// 	0px 1px 10px rgba(0, 0, 0, 0.06);
		display: flex;
		flex-direction: column;
		width: 50%;
		// height: 20rem;
		//TODO: handle responsiveness here for tablet / mid sizes
		img {
			height: 150px;
			width: 100%;
		}
		// @media (max-width: 855px) {
		// 	flex-direction: row;
		// 	height: 10rem;
		// 	width: 100%;
		// 	max-width: 400px;
		// 	img {
		// 		width: 50%;
		// 	}
		// }
		@media (max-width: 855px) {
			padding: 0;
			width: 100%;
		}
		&:hover {
			.card-title {
			animation-name: highlight;
			animation-duration: 0.75s;
			animation-fill-mode: forwards;
			background-size: 200%;
			background-image: linear-gradient(to right, blanchedalmond 50%, transparent 50%),
				linear-gradient(transparent 50%, rgb(159, 228, 161) 50%);
			transition: 0.4s;}
		}
	}
	.card-title {
		font-weight: bold;
		color: black;
		font-size: var(--font-size-m);
		@media (max-width: 400px) {
			font-size: 1rem;
		}
	}
	// TODO: implement divider component instead
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

			@media (max-width: 400px) {
				font-size: 0.75rem;
			}
		}
		p {
			color: black;
			margin-top: 0px;
			@media (max-width: 400px) {
				font-size: 0.75rem;
			}
		}
	}
</style>
