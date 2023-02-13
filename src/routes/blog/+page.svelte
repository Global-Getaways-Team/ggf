<script lang="ts">
	type BlogPost = {
		title: string;
		content: string;
	};

	const blogs: BlogPost[] = [
		{
			title: 'Die beliebtesten Blogbeiträge bei Global Getaways',
			content: 'Die am häufigsten besuchten Blogbeiträge werden hier zukünftig angezeigt.'
		},
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

	type CityPost = {
		title: string;
        href: string,
		content: string;
	};

	const cities: CityPost[] = [
		{
			title: 'Casablanca',
            href: '/casablanca',
			content: 'Schöner Text zu Casablanca'
		},
		{
			title: 'Marrakesch',
            href: '/marrakesh',
			content: 'Schöner Text zu Marrakesch'
		},
		{
			title: 'La Digue',
            href: '/la-digue',
			content: 'Schöner Text zu La Digue'
		},
		{
			title: 'Victoria',
            href: '/victoria',
			content: 'Schöner Text zu Victoria'
		},
		{
			title: 'Bergville',
            href: '/bergville',
			content: 'Schöner Text zu Bergville'
		},
		{
			title: 'Kapstadt',
            href: '/cape-town',
			content: 'Schöner Text zu Kapstadt'
		},
		{
			title: 'Osaka',
            href: '/osaka',
			content: 'Schöner Text zu Osaka'
		},
		{
			title: 'Busan',
            href: '/busan',
			content: 'Schöner Text zu Busan'
		},
		{
			title: 'Seoul',
            href: '/seoul',
			content: 'Schöner Text zu Seoul'
		},
		{
			title: 'Fulhadoo',
            href: '/fulhadoo',
			content: 'Schöner Text zu Fulhadoo'
		},
		{
			title: 'Malé',
            href: '/male',
			content: 'Schöner Text zu Malé'
		},
		{
			title: 'Melbourne',
            href: '/melbourne',
			content: 'Schöner Text zu Melbourne'
		},
		{
			title: 'Sydney',
            href: '/sydney',
			content: 'Schöner Text zu Sydney'
		},
		{
			title: 'Auckland',
            href: '/auckland',
			content: 'Schöner Text zu Vereinigte Staaten von Amerika'
		},
		{
			title: 'Wellington',
            href: '/wellington',
			content: 'Schöner Text zu Argentinien'
		},
		{
			title: 'Aarhus',
            href: '/aarhus',
			content: 'Schöner Text zu Aarhus'
		},
		{
			title: 'Kopenhagen',
            href: '/copenhagen',
			content: 'Schöner Text zu Kopenhagen'
		},
		{
			title: 'Berlin',
            href: '/berlin',
			content: 'Schöner Text zu Berlin'
		},
		{
			title: 'München',
            href: '/munich',
			content: 'Schöner Text zu München'
		},
		{
			title: 'Dubrovnik',
            href: '/dubrovnik',
			content: 'Schöner Text zu Dubrovnik'
		},
		{
			title: 'Split',
            href: '/split',
			content: 'Schöner Text zu Split'
		},
		{
			title: 'Québec',
            href: '/quebec',
			content: 'Schöner Text zu Québec'
		},
		{
			title: 'Vancouver',
            href: '/vancouver',
			content: 'Schöner Text zu Vancouver'
		},
		{
			title: 'Bacalar',
            href: '/bacalar',
			content: 'Schöner Text zu Bacalar'
		},
		{
			title: 'San Miguel de Allende',
            href: '/san-miguel-de-allende',
			content: 'Schöner Text zu San Miguel de Allende'
		},
		{
			title: 'New York City',
            href: '/new-york-city',
			content: 'Schöner Text zu New York City'
		},
		{
			title: 'San Francisco',
            href: '/san-francisco',
			content: 'Schöner Text zu San Francisco'
		},
		{
			title: 'Bariloche',
            href: '/bariloche',
			content: 'Schöner Text zu Bariloche'
		},
		{
			title: 'Buenos Aires',
            href: '/buenos-aires',
			content: 'Schöner Text zu Buenos Aires'
		},
		{
			title: 'Rio de Janeiro',
            href: '/rio-de-janeiro',
			content: 'Schöner Text zu Rio de Janeiro'
		},
		{
			title: 'São Paulo',
            href: '/sao-paulo',
			content: 'Schöner Text zu São Paulo'
		},
		{
			title: 'Cusco',
            href: '/cusco',
			content: 'Schöner Text zu Cusco'
		},
		{
			title: 'Lima',
            href: '/lima',
			content: 'Schöner Text zu Lima'
		},
	];
</script>

<svelte:head>
	<title>Blogbeiträge</title>
	<meta name="description" content="Die Blogbeiträge der Global Getaways" />
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
	<section class="grid grid-cols-[repeat(auto-fit,_minmax(300px,_1fr))]">
		{#each blogs as blog}
			<section class="mt-10 w-64">
				<h3>{blog.title}</h3>
				<article class="mt-2">{blog.content}</article>
			</section>
		{/each}
	</section>
	<section class="grid grid-cols-[repeat(auto-fit,_minmax(300px,_1fr))]">
		{#each cities as city}
			<section class="mt-10 w-64">
				<h3>{city.title}</h3>
				<article class="mt-2">{city.content}</article>
			</section>
		{/each}
	</section>
</main>

<style>
	:global(.nav) {
		margin: 3rem 0;
	}

	:global(.nav a) {
		padding: 0.5rem;
		width: 200px;
		border: 1px solid #0d50a4;
		margin-left: -1px;
		margin-top: -1px;
	}
</style>
