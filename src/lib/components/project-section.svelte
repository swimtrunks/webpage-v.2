<script>
	import { fade, fly } from 'svelte/transition';
	import { quintOut } from 'svelte/easing';
	import Tooltip from '$lib/components/common/tooltip.svelte';

	const linkIcon = `
	<svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 512 512"><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M444.5 3.5L28.7 195.4c-48 22.4-32 92.8 19.2 92.8h175.9v175.9c0 51.2 70.4 67.2 92.8 19.2l191.9-415.8c16-38.4-25.6-80-64-64z"/></svg> visit website
	`;
	const projects = [
		{
			id: '0',
			name: 'Sesame Workshop',
			dict_name: 'ses•a•me work•shop',
			projectBrand: 'images/elmo-cookie.png',
			screenshot: 'images/sw-screenshot.png',
			content: `
			
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
			`,
			phonetic_name: `tba`
		}
	];

	let playdateInfo = {
		name: 'playdate',
		subname: `pleɪdeɪt`,
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
	<div class= "section-heading">experience:</div>
	<section class="work-grid">
		<div>
			<h3><span class="card-title">Launch by NTT Data</span></h3>
			<div class = "job-titles">
				<p>
					Software Engineer <span>(2022 - Present)</span>
					<br />
					Associate Engineer <span>(2021 - 2022)</span>
				</p>
				
			</div>
		</div>
		<div>
			<h3><span class="card-title">noWhere Studios - Freelance</span></h3>
			<div class = "job-titles">
				<p>Web Developer / Designer <span>(2019 - 2021)</span></p>
			</div>
		</div>
	</section>
	<div class= "section-heading">projects:</div>
	<section class="work-grid">
		<div>
			<h3>
				<span class="card-title">Sesame Workshop</span>
				<a href="https://sesameworkshop.org/" target="_blank" rel="noreferrer">
					{@html linkIcon}
				</a>
			</h3>
			<div>
				Sesame Workshop, the nonprofit behind Sesame Street, underwent a website redesign for improved user experience and engagement. We consolidated eight websites into one cohesive platform, implementing a new design system with <strong>JavaScript, HTML/CSS, Figma</strong> and <strong>Twig</strong>. The site serves over 150k users daily, with a user-friendly CMS powered by <strong>WordPress/PHP, Advanced Custom Fields</strong> and <strong>Gutenberg</strong>.
			</div>
		</div>
		<div>
			<h3>
				<span class="card-title">Drizly</span>
				<a href="https://drizly.com/" target="_blank" rel="noreferrer">{@html linkIcon}</a>
			</h3>
			<div>
				Drizly, an e-commerce platform for alcohol orders, involved creating reusable components using <strong>Storybook, React/TypeScript, </strong> and <strong>CSS-in-JS</strong>. I contributed to documentation and ensured optimal performance through modular code, linting, and testing with Jest. Continuous integration and deployment pipelines were established with Jenkins and Docker.
			</div>
		</div>
		<div>
			<h3>
				<span class="card-title">Sagesure</span> 
				<a href="https://sagesure.com/" target="_blank" rel="noreferrer"> {@html linkIcon} </a>
			</h3>
			<div>
				Sagesure, a property insurance company, aimed to boost traffic to its customer portal. We optimized the portal with <strong>React, Node, SASS </strong>and <strong>GraphQL</strong>. We implemented features such as home inspection data from a 3rd party, contractor connections via Thumbtack and targeted marketing campaigns for selected users upon qualification. I also built design system components, tracked user interactions with <strong>Mixpanel</strong> and implemented A/B testing with <strong>LaunchDarkly</strong>.
			</div>
		</div>
		<div>
			<h3>
				<span class="card-title">MIT Tech Review</span>  
				<a href="https://technologyreview.com" target="_blank" rel="noreferrer">
					{@html linkIcon}
				</a>
			</h3>
			<div>
				For MIT Tech Review, I contributed to website maintenance, bug fixes, and ongoing feature development using <strong>React, PHP,</strong> and <strong> WordPress</strong>. Accessibility improvements were made for WCAG AA compliance and screen reader optimization. The focus was on enhancing performance, usability, and code quality.
			</div>
		</div>
		<div>
			<h3>
				<span class="card-title">Textmoji</span> 
				<a href="https://textmoji.app/" target="_blank" rel="noreferrer"> {@html linkIcon} </a>
			</h3>
			<div>
				Textmoji is a fun application that is meant for users to design and export their custom text
				based emoji into their Slack workspaces for all to use. I was brought on to this project in
				order to modernize the application and lead a team of engineers in the development of a new
				webpage design and implementing new components and a11y features such as keyboard navigation
				and color contrast checker. The site was built with <strong>
					Sveltekit, SCSS, WebGL, and PixiJS
				</strong>.
			</div>
		</div>
		<div>
			<h3>
				<span class="card-title"> Richardson Family & Ed Consulting</span>
				<a href="https://tristanrichardson.com/" target="_blank" rel="noreferrer">
					{@html linkIcon}
				</a>
			</h3>
			<div>
				I was the sole developer for this site and worked closely with the client to assist with designing the website and implementing the features they wanted. It was built on top of the <strong>WordPress</strong> plaform but also required new themes to be implemented as well. I also was an administrator for the discord group as well as providing guidance and ongoing maintenance. 
			</div>
		</div>
	</section>
</section>

<style lang="scss">
	#work-section {
		padding-top: 2rem;
		display: flex;
		min-width: 0;
		max-width: 85%;
		margin: 0 auto;
		flex-direction: column;
	}
	h1 {
		font-size: 2rem;
	}
	h3{
		display: flex;
		align-items: center;
		justify-content: space-between;
	}

	.work-grid {
		max-width: 1000px;
		margin-bottom: 25px;
		display: grid;
		grid-template-columns: repeat(2, 50%);
		gap: 1rem;
		flex-wrap: wrap;
		& > div {
			padding-bottom: 1rem;
		}
		h3 {
			margin-bottom: 0;
		}
		a {
			display: inline-block;
			white-space: nowrap;
			transition: 0.3s;
			color: #688d5e;
			&:hover {
				color: #284520;
			}
		}
		@media (max-width: 855px) {
			grid-template-columns: 100%;
		}
	}
	#project-heading {
		margin-top: -2.5rem;
	}

	.project-select:hover .tooltip {
		cursor: pointer;
		visibility: visible;
	}
	#projects {
		margin-bottom: 25px;
		display: flex;
		flex-direction: column;
	}
	.job-titles {
		p {
			padding: 0;
			margin: 0;
		}
		
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
	}
</style>
