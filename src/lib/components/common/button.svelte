<script>
	export let text;
	export let link;
</script>

<div class="blog-button">
	<!-- TODO: Pass in props -->
	<a href={link} alt=""> {text}</a>
</div>

<style lang="scss">
	a {
		padding: .75rem;
		background-color: green;
		font-weight:bold;
		text-decoration: none;
		border-radius: 0.75rem;
		transition: all 0.3s ease-in-out;
		box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.1), 0px 4px 5px rgba(0, 0, 0, 0.07),
			0px 1px 10px rgba(0, 0, 0, 0.06);
		color: white;
		cursor: pointer;
	}
	.blog-button {
		display: inline-block;
		will-change: contents;
		margin-left: 1rem;
		transition: all 0.3s ease-in-out;

		@media screen and (max-width: 768px) {
			&, a { 
				display: block;
				margin-left: 0;
			}
			a {
				width: 100%;
				text-align: center;
				
			}
		}
	}
	.blog-button:hover {
		transform: scale(1.02);
		a {
			color: green;
			background-color: white;
		}
	}
</style>
