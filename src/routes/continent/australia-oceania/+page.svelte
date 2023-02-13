<script lang="ts">
	type ContinentPost = {
		title: string;
        href: string;
		content: string;
	};

	const continents: ContinentPost[] = [
		/*
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
		*/
		{
			title: 'Australien-Ozeanien',
            href: 'continent/australia-oceania',
			content: 'Schöner Text zu Australien-Ozeanien'
		},
		/*
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
		},
        */
	];
</script>

<svelte:head>
	<title>Australien-Ozeanien</title>
	<meta name="description" content="Australien-Ozeanien bei Global Getaways" />
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
