<script>
	export let dividerText;
</script>

<div class="divider-container">
	<div class="divider-border" />
	{#if dividerText}
		<span class="divider-content">
			{dividerText}
		</span>
	{/if}
	<div class="border" />
</div>

<style>
	.divider-container {
		display: flex;
		padding: 4rem 5rem 4rem 5rem;
		align-items: center;
	}

	.divider-border {
		border-bottom: 1px solid rgba(134, 179, 121, 0.648);
		width: 20rem;
	}

	.divider-content {
		padding: 10 20px 0 20px;
	}
</style>
