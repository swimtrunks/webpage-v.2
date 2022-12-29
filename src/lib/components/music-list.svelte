<script>
	//data
	import music2022 from '$lib/2022-music';
</script>

<h3>The rest:</h3>
<section>
	{#each music2022 as album}
		<a class="music-card" href={album.link}>
			<img class="music-image" src={album.cover} alt="" loading="lazy" />
			<div class="music-description">
				<!-- <p>{album.description}</p> -->
				<p>{album.title} <br /> {album.artist}</p>
			</div>
		</a>
	{/each}
</section>
<div>
	<h3>congress2022:</h3>
	<p>
		2022 was also the year I sunset my monthly congress playlists, but I still continue to have a
		yearly EOY playlist on spotify as of now, feel free to listen if you would like.
	</p>
	<iframe
		title="congress2022"
		style="border-radius:12px"
		src="https://open.spotify.com/embed/playlist/0WHkhFWaYopmmeXO1mRrdc?utm_source=generator"
		width="100%"
		height="380"
		frameBorder="0"
		allowfullscreen=""
		allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
		loading="lazy"
	/>
</div>

<style>
	a {
		text-decoration: none;
	}
	section {
		flex-wrap: wrap;
		justify-content: center;
	}
	img {
		max-width: 200px;
		border-radius: unset;
	}
</style>
