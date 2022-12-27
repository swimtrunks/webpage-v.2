<header>
	<nav>
		<div class="shape-container">
			<div class="shape" />
			<div class="shape-2" />
		</div>
		<a href="/">home</a>
		<a href="/blog">blog</a>
		<a href="#">resume</a>
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
		flex-direction: column;
		align-items: flex-end;
		position: relative;
		padding-left: 10%;
		a {
			display: block;
			font-size: 2rem;
			color: white;
			font-family: Lexend Deca;
			text-decoration: none;
			&:hover {
				transition: 800ms;
				color: rgb(180, 237, 164);
			}
		}
	}

	//shape animations
	.shape-container {
		bottom: 160px;
		right: 260px;
		position: relative;
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
	}
	.shape {
		width: 400px;
		height: 400px;
		background: linear-gradient(64deg, #ec721a 23%, #ec721a 23%, #8c400a 80%);
		animation: blob 15s ease infinite;
		position: absolute;
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
