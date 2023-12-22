<script>
	import { fade } from 'svelte/transition';
	import Socials from '$lib/components/socials.svelte';
	import Tooltip from '$lib/components/common/tooltip.svelte';

	//just for goofs
	let startPets, endPets, callLupin;
	function startedPetting() {
		callLupin = true;
		startPets = new Date();
		console.log('Lupin approaches.');
	}
	function stoppedPetting() {
		callLupin = false;
		endPets = new Date();
		var timeDiff = endPets - startPets; //in ms
		timeDiff /= 1000;
		var seconds = Math.round(timeDiff % 60);
		if (seconds <= 9) {
			console.log(`You only pet Lupin for ${seconds} seconds... He walked away disappointed.`);
		} else if (seconds > 9) {
			console.log(`WOW, you pet Lupin for ${seconds} seconds! He seems to be satisfied.`);
		}
	}
	let lupinInfo = {
		name: 'lupin',
		subname: 'lu&#x2022;pin',
		image: 'images/lupin.png',
		id: 'lupin-tooltip',
		content: `
		<span class="sub-name">lu&#x2022;pin</span>\ˈlü-pən\
		<span class="classification-text">noun</span>
		<span class="definition-number">(a.) 1.</span> is a dog (has been confused for an old man,
		someones supervisor and possibly a loaf of bread)
		<span class="definition-number">2.</span> finder of soft cushions, blankets and other places
		to sleep
		<span class="definition-number">3.</span> scavenger of food and other items that "may" be
		edible
		<strong>(b)</strong><strong class="classification-text">Core Proficiencies:</strong>Sleeping
		&#x2022; &#x2022; Snoring &#x2022; Eating &#x2022;
		<strong>(c)</strong><strong class="classification-text">Discovery:</strong> Randomly appeared
		from the abyss one afternoon and attempted to assimlate into home life. Has been reported to
		have powers of manipulation and control over humans in order to make them drop food on
		command. <strong>[**citation needed]</strong>
		`
	};
</script>

<div class="about-me">
	<section class="about-me-core">
		<div class="first-section">
			<div class="image-wrapper" on:mouseenter={startedPetting} on:mouseleave={stoppedPetting}>
				<img
					id="under-image"
					src="images/malcolm-portrait.webp"
					alt="a drawing of me alone with an assortment of my interest illustrated in the background"
				/>
				{#if callLupin}
					<img
						transition:fade={{ delay: 50, duration: 200 }}
						id="over-image"
						src="images/me-and-lup.png"
						alt="a drawing of me and my dog lupin with an assortment of my interest illustrated in the background"
					/>
				{/if}
			</div>
			<Socials />
		</div>

		<div id="about-me-text">
			<span id="name">mal&#x2022;colm pe&#x2022;ter&#x2022;son </span> \ˈmælkəm ˈpitərsənn\
			<span class="classification-text">noun-very proper.</span>
			<span class="definition-number">(a.) 1.</span>software engineer at
			<a id="company" href="https://launch.nttdata.com/" rel="noreferrer" target="_blank"
				>Launch by NTT Data</a
			> <span class="definition-number">2.</span> advocate: accessiblity and diversity / inclusion
			<span class="definition-number">3.</span>. person : husband,father,roomate to one dog
			<span class="classification-text">
				[see:
				<Tooltip info={lupinInfo} />
				]
			</span>, a general well wisher
			<span class="definition-number">4.</span> video game enclyclopedia and collector
			<span class="definition-number">5.</span>
			obsessive over documenation of music listening habits
			<!--tech section -->
			<strong>(b)</strong><strong class="classification-text">Core Proficiencies:</strong>
			&#x2022;HTML &#x2022;CSS[SASS, LESS, tailwind, bootstrap] &#x2022;JavaScript[React, Next, Svelte
			& Sveltekit] &#x2022;Python &#x2022;Node &#x2022;GraphQL &#x2022; REST APIs
			<strong>(c)</strong><strong class="classification-text">Other:</strong> &#x2022;Figma &#x2022;Git
			&#x2022;LaunchDarkly &#x2022;Mixpanel
		</div>
	</section>
</div>

<style lang="scss">
	#name {
		font-family: Bitter;
		font-size: 2rem;
		font-weight: bold;
	}
	.about-me {
		display: flex;
		flex-direction: column;
		max-width: 1000px;
		background-size: 30px 30px;
	}
	.first-section {
		display: flex;
		flex-direction: row-reverse;
		img {
			width: 100%;
			height: 100%;
		}
	}
	.about-me-core {
		align-items: center;
		display: flex;
		gap: var(--spacing-xl);
		@media (max-width: 855px) {
			flex-direction: column;
			align-items: center;
			gap: var(--spacing-m);
		}
	}

	#over-image {
		box-shadow: none;
		position: absolute;
		left: 0;
		top: 0;
	}
	.image-wrapper {
		height: 400px;
		position: relative;
		display: flex;
		justify-content: center;
		&:hover {
			cursor: grab;
			#over-image {
				display: unset;
			}
		}
		@media (max-width: 855px) {
			height: 250px;
			width: 400px;
		}
		flex: 50%;
	}

	h1 {
		margin-bottom: 0;
	}
	#about-me-text {
		margin-left: 1rem;
		text-indent: -1rem;
		flex: 50%;
		@media (max-width: 855px) {
			width: 400px;
			text-align: justify;
		}
	}
	#about-me-subtitle {
		margin-top: 0.25rem;
	}
	.edit-text {
		color: rgb(152, 56, 11);
		text-decoration: line-through;
	}

	a {
		color: green;
		&:hover {
			color: rgb(1, 55, 1);
		}
	}
	#company {
		text-decoration: none;
		font-weight: bold;
		&:hover {
			transition: 300ms;
			text-decoration: underline;
			color: rgb(47 53 218);
		}
	}
</style>
