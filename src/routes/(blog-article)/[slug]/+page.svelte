<script>
	// Declare the page variable to use on the client
	export let data;

</script>

<div class="overview">
	
	<div class="text">
		<div class="image">
			<img src={data.page.metadata.coverImage} alt="" />
		</div>
		<div class="blog-header">
			<h1>{data.page.metadata.title} <span> | Published: {data.page.metadata.date} </span></h1>
			
		</div>
		<svelte:component this={data.page.default} />
	</div>
</div>

<style lang="scss">
	.overview {
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	.text {
		background-color: rgba(255, 235, 205, 0.5);
		border-radius: 1rem;
		padding: 2rem;
		max-width: 62rem;
	}
	.image {
		display: flex;
		justify-content: center;
		img {
			border-radius: 0px;
			max-width: 1050px;
		}
	}
	.blog-header{
		h1{
			font-size: 3rem;
			text-transform: uppercase;
			letter-spacing: -2px;
			@media (max-width:600px) {
				font-size: 2rem;
			}
			span{
				letter-spacing: 1px;
				font-weight: 400;
				font-size: 1rem;
			}
		}

	}
</style>
