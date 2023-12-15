<script>;
	export let info;
	export let isVisible = false;
	function showTooltip() {
		isVisible = true;
	}

	function hideTooltip() {
		isVisible = false;
	}

</script>

<span
	class="term"
	on:mouseenter={showTooltip}
	on:mouseleave={hideTooltip}
	style={isVisible ? 'visibility: visible' : ''}
	>{info.name}
	<div class="tooltip" id={`${info.name}-tooltip`}>
		<img class={info.flattenImage ? 'flattenImage' : ""} src={info.image}  alt= {info.altText} />
		<div>
			{@html info.content}
		</div>
	</div>
</span>

<style lang="scss">
	.tooltip {
		visibility: hidden;
		position: absolute;
		display: flex;
		flex-direction: column;
		font-weight: normal;
		align-items: center;
		z-index: 999;
		font-style: normal;
		min-width: 250px;
		color: black;
		font-size: 0.75rem;
		border: 1px solid black;
		background-color: rgb(159, 228, 161);
		border-radius: 10px;
		top: 1.5rem;
		left: 0;
		padding: 1.5rem 2rem;
		img {
			width: 100%;
			height: 150px;
			object-fit: cover;
		}
		.classification-text {
			font-size: 0.9rem;
		}
	}
	.term {
		cursor: help;
		color: rgb(11, 152, 25);
		text-decoration: underline;
		font-weight: bold;
		position: relative;
	}
</style>
