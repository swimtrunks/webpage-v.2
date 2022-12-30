<script>
	import Socials from '$lib/components/socials.svelte';

//just for goofs
let startPets, endPets;
function startedPetting() {
  startPets = new Date();
  console.log("Lupin approaches.")
}
function stoppedPetting() {
  endPets = new Date();
  var timeDiff = endPets - startPets; //in ms
  timeDiff /= 1000;
  var seconds = Math.round(timeDiff % 60);
  if(seconds<=9){
  	console.log(`You only pet Lupin for ${seconds} seconds... He walked away disappointed.`);
  }else if(seconds>9){
  	console.log(`WOW, you pet Lupin for ${seconds} seconds! He seems to be satisfied.`)
	}
}
//
</script>

<div class="about-me">
	<div>
		<h1>Hey, I'm Malcolm.</h1>
		<p id="about-me-subtitle">
			I <span class="edit-text">break</span> build things for the web then make
			<span class="edit-text">fun of</span> content about it
		</p>
	</div>
	<section class="about-me-core">
		<div>
			<div class="image-wrapper" on:mouseenter={startedPetting} on:mouseleave={stoppedPetting} >
				<img id="under-image" src="images/malcolm-portrait.webp" alt="a drawing of me alone with an assortment of my interest illustrated in the background" />
				<img id="over-image" src="images/me-and-lup.png" alt="a drawing of me and my dog lupin with an assortment of my interest illustrated in the background">
			</div>
			<Socials />
		</div>
		
		<div id="about-me-text">
			<div>
				<h2>I'm a full stack software engineer with a focus on front-end and accessiblity</h2>
				<!-- TODO: double check 'about me' copy  -->
				<strong>Hi</strong>, I am a self-taught software engineer currently making cool stuff for
				the web professionally over at
				<a id="postlight" href="https://postlight.com" rel="noreferrer" target="_blank">Postlight</a
				>. (<strong>sidenote: </strong>I built this website with
				<a href="https://svelte.dev/blog/announcing-sveltekit-1.0" rel="noreferrer" target="_blank"
					>SvelteKit v.1!
				</a>You can check out the code
				<a href="https://github.com/swimtrunks/webpage-v.2" rel="noreferrer" target="_blank">here</a
				>
				or read about the process of making it <a href="/sveltekit-website-redesign">here</a>).
				<br /> <br />
				When not at work I am typically hanging with my wife and dog, listening to new music as well
				as obsessing over how I better
				<a href="https://www.last.fm/user/hiMalcolm" rel="noreferrer" target="_blank"
					>document my listening habits</a
				>.
				<br /> <br />
				I enjoy creating content, having long discussions about video game journalism/history, diversity
				and inclusion, accessiblity, architecture and music (so feel free to ask me anything about these).
				<br /><br />
				<strong>Core Proficiencies:</strong> <br />
				&#x2022;HTML &#x2022;CSS[SASS,LESS] &#x2022;JavaScript[React, Next, Svelte & Sveltekit] &#x2022;Python
				&#x2022;Node &#x2022;GraphQL &#x2022; REST APIs
				<br /><br />
				<strong>Other:</strong> &#x2022;Figma &#x2022;Git &#x2022;LaunchDarkly &#x2022;Mixpanel
			</div>
		</div>
	</section>
</div>

<style lang="scss">
	.about-me {
		display: flex;
		flex-direction: column;
		background-image: radial-gradient(circle at 1px 1px, rgb(210, 193, 168) 1px, transparent 0);
		background-size: 30px 30px;
	}
	.about-me-core {
		display: flex;
		@media (max-width: 855px) {
			flex-direction: column;
			align-items: center;
		}
	}
	#over-image{
		position: absolute;
		left:0;
		top:0;
		display: none;
	}
	.image-wrapper {
		position: relative;
		&:hover{
			cursor: grab;
			#over-image{
				display: unset;
			}
		}
		max-width: 484px;
	}
	h1 {
		margin-bottom: 0;
	}
	#about-me-text {
		width: 50%;
		@media (max-width: 600px) {
			width: 75%;
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
	#postlight {
		text-decoration: none;
		color: rgb(157, 14, 14);
		font-weight: bold;
		&:hover {
			transition: 300ms;
			text-decoration:underline;
			color: rgb(250, 0, 0);
		}
	}
</style>
