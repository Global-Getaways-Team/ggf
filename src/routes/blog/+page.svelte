<script lang="ts">
	type BlogPost = {
		title: string;
		content: string;
	};

	const blogs: BlogPost[] = [
		{
			title: 'Sollte man nach Wien reisen?',
			content: `Ich war vor kurzem in Östereich und muss sagen es war atemberaubend. Jeden Tag bin ich
			aufgestanden und habe eine Bergfassade vor mir gesehen, dass mit an meine Hintergrundbilder auf
			dem Destop erinnert hat. Die Berge sind auch super geeignet für eine Wandertour oder eine
			Fahrradtour. Meiner Meinung nach bietet Östereich für jeden eine Möglichkeit sich auszuleben und ist auf jeden Fall eine Reise wert.`
		},
		{
			title: 'Sollte man nach Paris reisen?',
			content: `Ich war vor kurzem in Östereich und muss sagen es war atemberaubend. Jeden Tag bin ich
			aufgestanden und habe eine Bergfassade vor mir gesehen, dass mit an meine Hintergrundbilder auf
			dem Destop erinnert hat. Die Berge sind auch super geeignet für eine Wandertour oder eine
			Fahrradtour. Meiner Meinung nach bietet Östereich für jeden eine Möglichkeit sich auszuleben und ist auf jeden Fall eine Reise wert.`
		},
		{
			title: 'Sollte man nach Prag reisen?',
			content: `Ich war vor kurzem in Östereich und muss sagen es war atemberaubend. Jeden Tag bin ich
			aufgestanden und habe eine Bergfassade vor mir gesehen, dass mit an meine Hintergrundbilder auf
			dem Destop erinnert hat. Die Berge sind auch super geeignet für eine Wandertour oder eine
			Fahrradtour. Meiner Meinung nach bietet Östereich für jeden eine Möglichkeit sich auszuleben und ist auf jeden Fall eine Reise wert.`
		},
		{
			title: 'Sollte man nach Berlin reisen?',
			content: `Ich war vor kurzem in Östereich und muss sagen es war atemberaubend. Jeden Tag bin ich
			aufgestanden und habe eine Bergfassade vor mir gesehen, dass mit an meine Hintergrundbilder auf
			dem Destop erinnert hat. Die Berge sind auch super geeignet für eine Wandertour oder eine
			Fahrradtour. Meiner Meinung nach bietet Östereich für jeden eine Möglichkeit sich auszuleben und ist auf jeden Fall eine Reise wert.`
		},
		{
			title: 'Sollte man nach Rom reisen?',
			content: `Ich war vor kurzem in Östereich und muss sagen es war atemberaubend. Jeden Tag bin ich
			aufgestanden und habe eine Bergfassade vor mir gesehen, dass mit an meine Hintergrundbilder auf
			dem Destop erinnert hat. Die Berge sind auch super geeignet für eine Wandertour oder eine
			Fahrradtour. Meiner Meinung nach bietet Östereich für jeden eine Möglichkeit sich auszuleben und ist auf jeden Fall eine Reise wert.`
		},
		{
			title: 'Sollte man nach Rom reisen?',
			content: `Ich war vor kurzem in Östereich und muss sagen es war atemberaubend. Jeden Tag bin ich
			aufgestanden und habe eine Bergfassade vor mir gesehen, dass mit an meine Hintergrundbilder auf
			dem Destop erinnert hat. Die Berge sind auch super geeignet für eine Wandertour oder eine
			Fahrradtour. Meiner Meinung nach bietet Östereich für jeden eine Möglichkeit sich auszuleben und ist auf jeden Fall eine Reise wert.`
		},
		{
			title: 'Sollte man nach Rom reisen?',
			content: `Ich war vor kurzem in Östereich und muss sagen es war atemberaubend. Jeden Tag bin ich
			aufgestanden und habe eine Bergfassade vor mir gesehen, dass mit an meine Hintergrundbilder auf
			dem Destop erinnert hat. Die Berge sind auch super geeignet für eine Wandertour oder eine
			Fahrradtour. Meiner Meinung nach bietet Östereich für jeden eine Möglichkeit sich auszuleben und ist auf jeden Fall eine Reise wert.`
		}
	];
</script>

<svelte:head>
	<title>Blogbeiträge</title>
	<meta name="description" content="Die Blogbeiträge der global-getways" />
</svelte:head>

<main class="grid grid-cols-[repeat(auto-fit,_minmax(300px,_1fr))]">
	{#each blogs as blog (blog.title)}
		<section class="mt-10 w-64">
			<h3>{blog.title}</h3>
			<article class="mt-2">{blog.content}</article>
		</section>
	{/each}
</main>
