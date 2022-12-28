<script>
	//data
	import clients from '$lib/clients';
</script>

<section class="projects-section">
	<div id="project-section-header">
		<div id="project-section-header">
			<h2>client work</h2>
			<p>- some stuff i am proud to have been apart of</p>
		</div>
	</div>
	<div id="projects">
		{#each clients as client}
			<div class="project-card">
				<img class="project-image" src={client.thumbnail} alt="" />
				<div class="project-description">
					<h4>{client.title}</h4>
					<p>{client.description}</p>
					<p>{client.link}</p>
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
		@media (max-width:400px) {
			width: 260px
		}
	}
	.project-image {
		max-width: 50%;
	}
	#project-section-header {
		h2 {
			margin-bottom: 0;
		}
		p {
			font-weight: 400;
			color: grey;
			margin-top: 0.1rem;
		}
	}
</style>
