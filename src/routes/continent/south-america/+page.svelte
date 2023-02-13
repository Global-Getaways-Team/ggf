<script lang="ts">
	type ContinentPost = {
		title: string;
        href: string;
		content: string;
	};

	const continents: ContinentPost[] = [
		{
			title: 'Südamerika',
            href: 'continent/south-america',
			content: 'Schöner Text zu Südamerika'
		},
	];
</script>

<svelte:head>
	<title>Südamerika</title>
	<meta name="description" content="Südamerika bei Global Getaways" />
</svelte:head>

<main>
	<div class="grid grid-cols-[repeat(auto-fit,_minmax(300px,_1fr))]">
        {#each continents as continent}
			<section class="mt-10 w-64">
				<h3>{continent.title}</h3>
				<article class="mt-2">{continent.content}</article>
			</section>
		{/each}
	</div>
</main>
