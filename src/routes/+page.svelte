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

	type ContinentPost = {
		title: string;
		href: string;
		content: string;
	};

	const continents: ContinentPost[] = [
		{
			title: 'Afrika',
			href: 'continent/africa',
			content: 'Schöner Text zu Afrika'
		},
		{
			title: 'Asien',
			href: 'continent/asia',
			content: 'Schöner Text zu Asien'
		},
		{
			title: 'Australien-Ozeanien',
			href: 'continent/australia-oceania',
			content: 'Schöner Text zu Australien-Ozeanien'
		},
		{
			title: 'Europa',
			href: 'continent/europe',
			content: 'Schöner Text zu Europa'
		},
		{
			title: 'Nordamerika',
			href: 'continent/north-america',
			content: 'Schöner Text zu Nordamerika'
		},
		{
			title: 'Südamerika',
			href: 'continent/south-america',
			content: 'Schöner Text zu Südamerika'
		}
	];
</script>

<svelte:head>
	<title>Global Getaways</title>
	<meta name="description" content="Homepage der Global Getaways" />
</svelte:head>

<main>
	<section class="nav flex flex-wrap flex-row">
		{#each continents as continent}
			<a href={continent.href}>
				<button>{continent.title}</button>
			</a>
		{/each}
	</section>
	<hr class="mb-10">
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
		margin: 0 auto;
	}

	.nav {
		margin: 3rem 0;
	}

	.nav a {
		padding: 0.5rem;
		width: 200px;
		border: 1px solid #0d50a4;
		margin-left: -1px;
		margin-top: -1px;
	}
</style>
