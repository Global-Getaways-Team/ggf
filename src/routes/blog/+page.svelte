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
</script>

<svelte:head>
	<title>Blogbeiträge</title>
	<meta name="description" content="Die Blogbeiträge der Global Getaways" />
</svelte:head>

<main>
	<div class="grid grid-cols-[repeat(auto-fit,_minmax(300px,_1fr))]">
		{#each blogs as blog}
			<section class="mt-10 w-64">
				<h3>{blog.title}</h3>
				<article class="mt-2">{blog.content}</article>
			</section>
		{/each}
	</div>
</main>
