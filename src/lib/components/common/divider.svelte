<script>

	export let dividerText, fullWidth;
	let getRandomMessage = () => {
		const messages = [
			"Hello, I'm Malcolm Peterson",
			"I'm a software engineer",
			"I'm a husband, father, and dog owner",
			"I'm a video game encyclopedia and collector"
		];
		const randomMessage = messages[Math.floor(Math.random() * messages.length)];
		console.log(randomMessage)
	};
</script>

<div class={fullWidth ? 'fullWidth' : ''}>
	{#if dividerText}
		<div class="scroll-container">
			<div class="scroll-text" on:animationend={getRandomMessage}>{dividerText}</div>
		</div>
	{:else}
		<div class="divider-container">
			<div class="divider-border" />
			<div class="border" />
		</div>
	{/if}
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
	.scroll-container {
		/* border: 3px solid black; */
		background-color: rgb(159, 228, 161);
		padding: 10px;
		margin: 10px 0px;
		overflow-x: hidden;
	}

	.scroll-text {
		font-weight: bold;
		-moz-transform: translateX(100%);
		-webkit-transform: translateX(100%);
		transform: translateX(100%);

		-moz-animation: my-animation 25s linear infinite;
		-webkit-animation: my-animation 25s linear infinite;
		animation: my-animation 25s linear infinite;
		white-space: nowrap;
	}

	@keyframes my-animation {
		from {
			-moz-transform: translateX(100%);
			-webkit-transform: translateX(100%);
			transform: translateX(100%);
		}
		to {
			-moz-transform: translateX(-100%);
			-webkit-transform: translateX(-100%);
			transform: translateX(-100%);
		}
	}
</style>
