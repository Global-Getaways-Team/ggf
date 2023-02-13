<script lang="ts">
	type Section = {
		title: string;
		body: string;
	};

	const sections: Section[] = [
		{
			title: 'Global Getaways Reiseblog',
			body: `In diesem Reiseblog findest du dein nächstes Reiseziel. Hier bloggen erfahrene Menschen über ihre Erlebnisse in verschiedenen Städten und Ländern, damit du Inspiration erhälst und deinen eigenen Urlaub oder sogar Welttour planen kannst. Sieh dir hierfür <a href="/blog">die verschiedenen Blogs</a> an.`
		}
	];
</script>

<svelte:head>
	<title>Global Getaways</title>
	<meta name="description" content="Homepage der Global Getaways" />
</svelte:head>

<main>
	<section>
		{#each sections as section}
			<article>
				<h1 class="mb-5">{section.title}</h1>
				<p>{@html section.body}</p>
			</article>
		{/each}
	</section>
	<section>
		<h2>Melde dich direkt hier an, um nichts mehr zu verpassen!</h2>
		<form class="mt-5 flex items-center">
			<input type="email" id="email" placeholder="muster@mail.de" class="border rounded" />
			<button type="submit" class="ml-2">Subscribe</button>
		</form>
	</section>
</main>

<style>
	:global(main) {
		width: 80%;
    	margin: 0 auto
	}
</style>