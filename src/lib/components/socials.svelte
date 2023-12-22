<script>
	import GitHubIcon from '$lib/svg/socials/github.svelte';
	import LinkedInIcon from '$lib/svg/socials/linkedin.svelte';
	import EmailIcon from '$lib/svg/socials/email.svelte';
	import MastodonIcon from '$lib/svg/socials/mastodon.svelte';
</script>

<!-- svelte-ignore security-anchor-rel-noreferrer -->
<div class="socials">
	<a
		href="https://fosstodon.org/@imMalcolm"
		target="_blank"
		rel="me"
		title="Read my ramblings on Mastodon"
	>
		<MastodonIcon />
	</a>
	<a
		href="https://github.com/swimtrunks"
		target="_blank"
		rel="noopener"
		title="-Checkout my GitHub"
	>
		<GitHubIcon />
	</a>
	<a
		href="https://www.linkedin.com/in/malcolm-peterson-811227141/"
		target="_blank"
		rel="noopener"
		title="Connect on LinkedIn"
	>
		<LinkedInIcon />
	</a>
	<a
		href="mailto:mgpetersn@gmail.com"
		target="_blank"
		rel="noopener"
		title="Send an email to mgpetersn@gmail.com"
	>
		<EmailIcon />
	</a>
</div>

<style lang="scss">
	.socials {
		display: flex;
		flex-direction: column;
		padding-right: 1.5rem;
		justify-content: space-evenly;
		align-items: center;
		gap: 20px;
		a {
			width: 24px;
			transition: transform 0.2s;
			color: black;
			fill: black;
			&:hover {
				transform: scale(1.5);
				color: green;
				fill: green;
			}
			@media (max-width: 855px) {
				width: 35px;
			}
		}
	}
</style>
