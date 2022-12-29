<script>
	import Socials from '$lib/components/socials.svelte';
</script>

<div class="about-me">
    <div>
	    <h1>Hey, I'm Malcolm.</h1>
	    <p id="about-me-subtitle">
	    	I <span class="edit-text">break</span> build things for the web then make
	    	<span class="edit-text">fun of</span> content about it
	    </p>
    </div>
	<section class = "about-me-core">
		<div class="image-wrapper">
			<img src="images/me-and-lup.png" alt="" />
			<Socials />
		</div>
		<div id="about-me-text">
			<div>
				<h2>I am a software engineer with a focus on front-end and accessiblity</h2>
				<!-- TODO: double check 'about me' copy  -->
				<strong>Hi</strong>, I am a self-taught software engineer currently making cool stuff for
				the web professionally over at
				<a id="postlight" href="https://postlight.com" rel="noreferrer" target="_blank">Postlight</a
				>. (<strong>sidenote: </strong>I built this website with
				<a href="https://svelte.dev/blog/announcing-sveltekit-1.0" rel="noreferrer" target="_blank"
					>SvelteKit v.1!
				</a>You can check out the code
				<a href="https://github.com/swimtrunks/webpage-v.2" rel="noreferrer" target="_blank">here</a>
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
				&#x2022;HTML &#x2022;CSS[SASS,LESS] &#x2022;JavaScript[React, Next, Svelte & Sveltekit] &#x2022;Python &#x2022;Node &#x2022;GraphQL &#x2022; REST APIs
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
	.about-me-core{
		display: flex;
		@media (max-width: 855px){
			flex-direction: column;
			align-items: center;
		}
	}
	.image-wrapper {
		img {
			animation: fadeInAnimation ease 1s;
            animation-iteration-count: 1;
            animation-fill-mode: forwards;
			box-shadow: 0px 11px 15px -7px rgba(0, 0, 0, 0.1), 0px 24px 38px 3px rgba(0, 0, 0, 0.07),
				0px 9px 46px 8px rgba(0, 0, 0, 0.06);
		}
		max-width: 484px;
		@keyframes fadeInAnimation {
            0% {
                opacity: 0;
            }
            100% {
                opacity: 1;
            }
        }
	}
    h1{
        margin-bottom: 0;
    }
    #about-me-text{
        width: 50%;
		@media (max-width:600px) {
		width: 75%;
		}
    }
    #about-me-subtitle{
        margin-top: .25rem;
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
			color: rgb(250, 0, 0);
		}
	}
</style>
