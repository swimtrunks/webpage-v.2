<script>
	import { fade, fly } from 'svelte/transition';
	import { quintOut } from 'svelte/easing';
	import Tooltip from '$lib/components/common/tooltip.svelte';

	let selectedProject = '';
	// Get references to the select element and the project content div
	const projects = [
		{
			id: '0',
			name: 'Sesame Workshop',
			dict_name: 'ses•a•me work•shop',
			projectBrand: 'images/elmo-cookie.png',
			screenshot: 'images/sw-screenshot.png',
			content: `
			<div>
				Sesame Workshop is the nonprofit educational organization behind Sesame Street. They desired a redesign of their website to improve the user experience and increase engagement as well as a new CMS to allow for easy content updates. Solution involved migration of eight disparate websites/properties into a single cohesive website, achieving a consistent design. 
				<br /><br />
				We built and implemented a new design system with <strong> JavaScript, HTML/CSS </strong> and <strong> Twig </strong> as our templating engine. This website is used by over 150k users on a daily basis. Leveraged <strong>WordPress/PHP </strong> with <strong>Gutenberg</strong> to develop a user-friendly CMS for internal users to add content. Additionally, the work included an overall improvement in the developer experience by making components reusable and accessible, and performed upgrades to improve site performance. <a href='https://sesameworkshop.org/' target="_blank" rel="noreferrer"> (visit website) </a>
			</div>
			`,
			phonetic_name: '\\ˈsɛsəmi ˈwɜrkˌʃɑp\\ - noun'
		},
		{
			id: '1',
			name: 'Drizly',
			dict_name: 'driz•ly',
			projectBrand: 'images/drizly-logo.png',
			screenshot: 'images/drizly-screenshot.png',
			content: `
			<div>
				<div>
					Drizly is an e-commerce platform that allows users to order a variety of beer, wine, and spirits directly from local retailers. Leveraging <strong> Storybook, React, TypeScript, </strong> and third-party libraries, I created reusable and accessible components, testing them with unit tests using <strong>Jest</strong> and the <strong>React Testing Library</strong>. Additionally, I assisted in writing the GitHub README and Confluence documentation to assist others with the implementation and maintance of the design system.
					<br /><br />
					To achieve optimal performance and maintainability, I followed best practices such as modular code architecture, code linting, and automated testing. I also implemented continuous integration and deployment pipelines using tools like <strong> Jenkins </strong> and <strong>Docker</strong>. <a href='https://drizly.com/' target="_blank" rel="noreferrer">visit website</a>.
				</div>
			</div>
			`,
			phonetic_name: `\\ˈdrɪzəli\\ - noun`
		},
		{
			id: '2',
			name: 'MIT Tech Review',
			dict_name: 'm•i•t tech re•view',
			projectBrand: 'images/mittr-logo.png',
			screenshot: 'images/mittr-screenshot.png',
			content: `
			<div>
				MIT Tech Review is a magazine that provides analysis, insight, and commentary on the future of technology. I assisted in website maintaence including dependency grooming, bug fixes, ongoing feature development and project-wide refactoring to improve performance, usability, and code quality. Audited software for accessibility improvements, including WCAG AA compliance and screen reader optimization. We used <strong>React, PHP, </strong> and <strong> WordPress</strong> to build out the site. <br /><br /> <a href='https://technologyreview.com' target="_blank" rel="noreferrer"> (visit website) </a>
			</div>
			`,
			phonetic_name: `\\ˈɛˈmaɪˈti tɛkˈnɑləʤi ˌriˈvju\\ - noun`
		},
		{
			id: '3',
			name: 'SageSure',
			dict_name: 'sage•sure',
			projectBrand: 'images/sagesure-logo.webp',
			screenshot: 'images/sagesure-screenshot.png',
			content: `
			<div>
				Sagesure is a property and casualty insurance company that provides essential property insurance products and services to agents and policyholders.
				The client wanted to drive consistent traffic to the customer portal year round by offering value in the form of home inspection reviews and customer programs. We optimized the customer portal with features that enabled users to view home inspection data, available upgrades, alerts, assisted with connecting the user with contractors and future considerations for repairs. To achieve this, we used <strong> React, Node, SASS, GraphQL</strong> and third party APIs to display and store the relevant data. <br /> <br />
				In addition, I assited with building out design system components and collaborated with Product Managers to integrate features based on insights gleaned from data analysis using <strong> MixPanel </strong>. Also worked with A/B testing and feature flags using <strong> LaunchDarkly </strong>. <a href='https://sagesure.com/' target="_blank" rel="noreferrer"> (visit website) </a>
			</div>
			`,
			phonetic_name: `\\seɪʤʃʊr\\ - noun`
		},
		{
			id: '4',
			name: 'Mama Knows',
			dict_name: 'ma•ma knows',
			projectBrand: 'images/mamaknows-logo.jpg',
			screenshot: 'images/mamaknows-screenshot.png',
			content: `
			<div>
				Implemented customer portal features that enabled users to view home inspection data, available upgrades, and future considerations for repairs. To achieve this, we leveraged React, GraphQL, and REST APIs to display and surface the relevant data. In addition, I helped establish design system components and collaborated with Product Managers to integrate features based on insights gleaned from data analysis using MixPanel. Also worked with A/B testing and feature flags using LaunchDarkly. <a href='https://tristanrichardson.com/' target="_blank" rel="noreferrer"> (visit website) </a>
			</div> -->
			`,
			phonetic_name: `\\ˈmɑmə nōz\\ - noun`
		},
		{
			id: '5',
			name: 'Textmoji',
			dict_name: 'text•mo•ji',
			projectBrand: 'images/textmoji-logo.png',
			screenshot: 'images/textmoji-screenshot.png',
			content: `
			<div>
				Textmoji is a web app that allows users to create their <strong>React, SASS, and the Emojipedia API</strong>. <br /><br /> <a href='https://textmoji.app/' target="_blank" rel="noreferrer"> (visit website) </a>
			</div>
			`,
			phonetic_name: `\\ˈtɛkstˈmoʊʤi\\ - noun`

		},
		{
			id: '6',
			name: 'malcolmpeterson',
			dict_name: 'mal•colm pe•ter•son',
			projectBrand: '',
			screenshot: '',
			content: `
			<div>
				Last year I decided to make a personal site that for fun that showcased a little more of my personality than a few links and a quick blurb. This year I have decided to take it a little further and upgrade it to SvelteKit2.0. I have designed this site from scratch, built it with SvelteKit and SCSS. Its funny how much you can learn about the fundamentals of design by breaking as many rules as possible (just to go back and correct your mistakes). I have written a little about it <br /><br /> <a href='https://play.date/' target="_blank" rel="noreferrer"> here</a>
			</div>
			`,
			phonetic_name: `ˈmælkəmˈpitərsən.kɑm`

		},
		{
			id: '7',
			name: 'untitled game 001',
			dict_name: 'un•ti•tled game 001',
			projectBrand: '',
			screenshot: '',
			content: `
			<div>
				<a href='https://play.date/' target="_blank" rel="noreferrer"> (visit website) </a>
			</div>
			`,
			phonetic_name: `tba`
		}
	];

	let playdateInfo = {
		name: 'playdate',
		subname:`pleɪdeɪt`,
		image: 'images/playdate.png',
		flattenImage: true,
		content: `
		<span class="sub-name">play&#x2022;date</span>\ˈpleɪdeɪt\
		<span class="classification-text">noun</span>
		<span class="definition-number">(a.) 1.</span> a handheld gaming console created by Panic
		<span class="definition-number">(b.) 1. </span><strong class="classification-text">Things:</strong>one standout feature is its curated game delivery system. Subscribers receive a new game every week through wireless updates, creating an element of surprise and anticipation. The game lineup is expected to include titles from indie developers, adding a touch of variety and creativity to the gaming experience. <span class="definition-number">2.</span>designed by the folks at Teenage Engineering. It's colorful. It fits in your pocket. And we worked hard to make sure buttons feel perfectly clicky and that the crank action is silky smooth. 
		`
	};
</script>

<section id="work-section">
	<section id="projects">
		{#each projects as project}
			<div>
				<span class="definition-number">0{project.id}</span>
				<a
					href="#/"
					on:click={() => (selectedProject = project.id)}
					
				>
					<strong>{project.name}</strong>
				</a>
			
				<br />
				
			</div>
		{/each}
	</section>
	<div class="project-card">
		<div id = "project-heading" class = "section-heading">
			work
		</div>
		{#if selectedProject !== ''}
			<div>
			{#each projects as project}
				{#if project.id === selectedProject}
				<div class="project active" transition:fly={{ x: 1000, duration: 2000 }}>
					<div class="project-image-section">
						<img class="project-brand" src={project.projectBrand} alt="" />
						<img class="project-screenshot" src={project.screenshot} alt="" />
					</div>
					<div>
						<div class="project-name">
							{project.dict_name}
						    <span class = "project-phonetic"> 
								{project.phonetic_name}.
							</span>
						</div>
						<div class="project-text">
							{#if project.id === '7'}
							Earlier this year I needed an excuse to buy a <Tooltip info={playdateInfo} />, so I decided I would use it to learn game development.I have explored the C and Lua API's and still haven't made much progress on it but I am keeping tabs on my thoughts here and I'm excited to see where it goes.
							{/if}
							{@html project.content} 
						</div>
					</div>
				</div>
				{/if}
			{/each}
			</div>
		{:else}
			<!-- Default content when no option is selected -->
			<div>
				<p>Choose a project from the sidebar to see details.</p>
			</div>
		{/if}
	</div>
</section>

<style lang="scss">
  #work-section {
		display: flex;
		width: 1350px;
		margin-top: 3rem;
		margin-bottom:10rem;
		flex-direction: row;
		gap: 1rem;
	}
	h1 {
		font-size: 2rem;
	}
	select {
		width: 30%;
		height: 60px;
		border-radius: 10px;
		border: 1px solid rgba(8, 93, 8, 0.294);
		padding: 10px;
		font-family: Lexend Deca;
		font-size: 1.5rem;
	}
	#projects {
		margin-bottom: 25px;
		flex-direction: column;
		display: flex;
	}
	#project-heading {
		margin-top: -2.5rem;
	}
	.project-card {
		position: relative;
		display: flex;
		flex-direction: column;
		border-radius: 10px;
		width: 1120px;
    	padding-right: 40px;
		h2{
			margin-top:0;
		}
		.project-phonetic {
			font-size: 1rem;
		}
		.project-brand {
			position: absolute;
			width: 300px;
			right: -40px;
			top: -107px;
			box-shadow: none;
			z-index: 1;
		}
		.project-screenshot {
			position: absolute;
			width: 248px;
			right: 180px;
			top: -71px;
			border: 1px solid rgba(8, 93, 8, 0.294);
		}
	}
	.project-select {
		position: relative;
	}
	.project-select:hover .tooltip {
		cursor: pointer;
		visibility: visible;
	}
	.project-text {
		width: 670px;
	}
	.project-image-section {
		position: relative;	
		left: 75%;
	}

  #projects {
    margin-bottom: 25px;
    display: flex;
    flex-direction: column;
  }

  .project-card {
    position: relative;
    border-radius: 10px;
    width: 1120px;
    padding-right: 40px;
  }

  .project {
	background-color: white;
    position: absolute;
	padding: 2rem;
	border-radius: 1rem;
	border: 1px solid rgba(8, 93, 8, 0.294);
    top: 0;
    left: 0;
    opacity: 0;
    pointer-events: none;
    transition: opacity 0.5s;
  }

  .project.active {
    opacity: 1;
    pointer-events: all;
  }
</style>
