<script lang="ts">
	type CountryPost = {
		title: string;
        href: string,
		content: string;
	};

	const countries: CountryPost[] = [
		{
			title: 'Marokko',
            href: '/morocco',
			content: 'Schöner Text zu Marokko'
		},
		{
			title: 'Seychellen',
            href: '/seychelles',
			content: 'Schöner Text zu Seychellen'
		},
		{
			title: 'Südafrika',
            href: '/south-africa',
			content: 'Schöner Text zu Südafrika'
		},
		{
			title: 'Japan',
            href: '/japan',
			content: 'Schöner Text zu Japan'
		},
		{
			title: 'Korea',
            href: '/korea',
			content: 'Schöner Text zu Korea'
		},
		{
			title: 'Malediven',
            href: '/maldives',
			content: 'Schöner Text zu Malediven'
		},
		{
			title: 'Australien',
            href: '/australia',
			content: 'Schöner Text zu Australien'
		},
		{
			title: 'Neuseeland',
            href: '/new-zealand',
			content: 'Schöner Text zu Neuseeland'
		},
		{
			title: 'Dänemark',
            href: '/denmark',
			content: 'Schöner Text zu Dänemark'
		},
		{
			title: 'Deutschland',
            href: '/germany',
			content: 'Schöner Text zu Deutschland'
		},
		{
			title: 'Kroatien',
            href: '/croatia',
			content: 'Schöner Text zu Kroatien'
		},
		{
			title: 'Kanada',
            href: '/canada',
			content: 'Schöner Text zu Kanada'
		},
		{
			title: 'Mexiko',
            href: '/mexico',
			content: 'Schöner Text zu Mexiko'
		},
		{
			title: 'Vereinigte Staaten von Amerika',
            href: '/usa',
			content: 'Schöner Text zu Vereinigte Staaten von Amerika'
		},
		{
			title: 'Argentinien',
            href: '/argentina',
			content: 'Schöner Text zu Argentinien'
		},
		{
			title: 'Brasilien',
            href: '/brazil',
			content: 'Schöner Text zu Brasilien'
		},
		{
			title: 'Peru',
            href: '/peru',
			content: 'Schöner Text zu Peru'
		},
	];
</script>

<svelte:head>
	<title>Länder</title>
	<meta name="description" content="Die Länder der Global Getaways" />
</svelte:head>

<main>
	<div class="grid grid-cols-[repeat(auto-fit,_minmax(300px,_1fr))]">
		{#each countries as country}
			<section class="mt-10 w-64">
				<h3>{country.title}</h3>
				<article class="mt-2">{country.content}</article>
			</section>
		{/each}
	</div>
</main>
