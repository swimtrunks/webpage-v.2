<header>
	<div class="shape-container">
		<div class="shape" />
		<div class="shape-2" />
	</div>
	<nav>
		<img class="logo" src="images/logo/opti-logo.png" alt="logo" />
		<div class="nav-links">
			<a href="/">home</a>
			<a href="/blog">blog</a>
			<a href="/resume.docx" download>resume</a>
		</div>
	</nav>
</header>

<style lang="scss">
	header {
		padding-top: 2.5rem;
		padding-bottom: 1rem;
		background-color: transparent;
	}
	nav {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-between;
		position: relative;
		a {
			display: block;
			font-size: 2rem;
			color: green;
			font-family: Lexend Deca;
			text-decoration: none;
			&:hover {
				transition: 800ms;
				color: rgb(8, 69, 8);
			}
		}
		img {
			max-width: 80px;
			width: 100%;
		}
	}
	.nav-links {
		display: inline-block;
		text-align: right;
	}
	.logo {
		width: 150px;
		box-shadow: unset;
	}
	.shape-container {
		bottom: 100px;
		left: 370px;
		position: absolute;
		z-index: -1;
	}
	.shape-2 {
		width: 1000px;
		height: 1000px;
		opacity: 0.2;
		position: absolute;
		background: linear-gradient(64deg, #ec721a 27%, #ec721a 99%, #8c400a 80%);
		animation: blob 8s ease-in-out infinite;
		position: absolute;
		top: -500px;
		left: 35px;
		@media (max-width: 765px) {
			height: 20rem;
			width: 20rem;
			top: -7rem;
			left: -10rem;
		}
		@media (max-width: 530px) {
			height: 20rem;
			width: 20rem;
			top: -7rem;
			left: -16rem;
		}
		@media (max-width: 400px) {
			top: -7rem;
			left: -336px;
		}
	}
	.shape {
		width: 400px;
		height: 400px;
		bottom: -350px;
		left: 500px;
		background: linear-gradient(64deg, #ec721a 23%, #ec721a 23%, #8c400a 80%);
		animation: blob 15s ease infinite;
		position: absolute;
		@media (max-width: 765px) {
			height: 2rem;
			width: 2rem;
			bottom: 0.25rem;
			left: 10rem;
		}
		@media (max-width: 560px) {
			height: 4rem;
			width: 4rem;
			bottom: -8.75rem;
			left: 0rem;
		}
		@media (max-width: 400px) {
			bottom: -12rem;
			left: -8rem;
		}
	}
	@keyframes blob {
		0%,
		100% {
			border-radius: 24% 76% 35% 65% / 27% 36% 64% 73%;
		}
		25% {
			border-radius: 76% 24% 33% 67% / 68% 55% 45% 32%;
		}
	}
</style>
