<script>
	//data
	import clients from '$lib/clients';
</script>

<section class="projects-section">
	<div id="projects">
		<div class="project-card" id="project-section-header">
			<div>
				<h2>client work</h2>
				<p>some stuff i am proud to have been apart of</p>
			</div>
		</div>
		{#each clients as client}
			<div class="project-card">
				<img class="project-image" src={client.thumbnail} alt="" />
				<div class="project-description">
					<h4>{client.title}</h4>
					<p>{client.description}</p>
					<a href={client.link}> visit site </a>
				</div>
			</div>
		{/each}
	</div>
</section>

<style lang="scss">
	.projects-section {
		background-size: 30px 40px;
		background-image: radial-gradient(circle at 1px 1px, green 1px, transparent 0);
		flex-direction: column;
		flex-wrap: wrap;
	}
	#projects {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		justify-content: center;
		gap: 1rem;
		margin-bottom: 1rem;
	}
	#project-section-header {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
	}
	.project-card {
		img {
			max-width: unset;
			width: 100%;
		}
		width: 400px;
		background-color: white;
		padding: 2rem;
		border-radius: 1rem;
		box-shadow: 0px 6px 8px -5px rgba(0, 0, 0, 0.1), 0px 8px 20px 2px rgba(0, 0, 0, 0.07),
			0px 3px 15px 5px rgba(0, 0, 0, 0.06);
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 1rem;
		@media (max-width: 400px) {
			width: 260px;
		}
	}
	.project-image {
		max-width: 50%;
	}
	#project-section-header {
		//reset card styling
		background-color: transparent;
		border-radius: unset;
		box-shadow: unset;

		//
		justify-content: center;
		align-items: unset;
		h2 {
			margin-bottom: 0;
		}
		p {
			font-weight: 400;
			margin: 0;
			color: grey;
		}
		div {
			background-color: rgba(239, 244, 240, 0.117);
			padding: 1rem;
			border-radius: 1rem;
		}
	}
	.project-description {
		@media (max-width: 400px) {
			font-size: 0.75rem;
		}
	}
</style>
