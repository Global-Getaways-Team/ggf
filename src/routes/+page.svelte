<script lang="ts">
	type Section = {
		title: string;
		body: string;
	};

	const sections: Section[] = [
		{
			title: 'Reiseblog',
			body: `In diesem Reiseblog findest du dein nächstes Reiseziel. Hier bloggen verschiedene Menschen über ihre Erlebnisse
        in den verschiedenen Städten und Ländern, damit du Inspiration erhälst und deine eigenen Urlaub oder sogar
        Welttour planen kannst. Für die verschiedenen Berichte siehe dir hier
        <a href="/html/blog.html">die verschiedenen Blogs</a> an.`
		}
	];
</script>

<section class="">
	{#each sections as section (section.title)}
		<article class="mt-10">
			<h2>{section.title}</h2>
			<p>{@html section.body}</p>
		</article>
	{/each}
</section>

<section class="mt-10">
	<h2>Melde dich direkt hier an, um nichts mehr zu verpassen!</h2>
	<form class="mt-5 flex items-center">
		<input type="email" id="email" placeholder="test@outlook.de" class="border rounded" />
		<button type="submit" class="ml-2">Subscribe</button>
	</form>
</section>
