<header>
	<nav>
		<img class="logo" src="images/logo/opti-logo.png" alt="logo" />
		<div class="nav-links">
			<a href="/">home</a>
			<a href="/blog">blog</a>
			<a href="/resume.pdf" download>resume</a>
		</div>
	</nav>
</header>

<style lang="scss">
	header {
		padding: var(--spacing-m) var(--spacing-l);
		background-color: transparent;
		margin: 0 auto;
		max-width: 1000px;
	}
	nav {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-between;
		position: relative;
		a {
			display: block;
			font-size: var(--font-size-m);
			color: black;
			font-weight: bold;

			&:hover {
				transition: 500ms;
				color: rgb(36, 112, 36);
			}
		}
		@media screen and (max-width: 855px) {
			flex-direction: column;
		}
	}
	.nav-links {
		display: flex;
		gap: 1rem;
		@media screen and (max-width: 855px) {
			margin: 0 auto;
			width: 80%;
			/* gap: 1rem; */
			display: flex;
			/* align-content: center; */
			justify-content: space-around;
		}
	}
	.logo {
		width: var(--icon-size-xxl);
		box-shadow: unset;
		@media screen and (max-width: 855px) {
			width: var(--icon-size-xl);
		}
	}
	
</style>
