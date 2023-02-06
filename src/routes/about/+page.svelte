<script lang="ts">
	type Section = {
		title: string;
		body: string;
	};

	const sections: Section[] = [
		{
			title: 'Wer sind wir?',
			body: `Hallo, wir sind die HaWaRieties! HWR-Studenten, die in ihren Ferien zu viele Orte besucht
			haben. Wenn du mehr über uns und unsere Nutzer wissen möchtest, dann empfehlen wir dir, die
			<a href="/blog">Blogbeiträge</a> zu lesen.`
		},
		{
			title: 'Warum ist diese Webseite entstanden?',
			body: `Diese Webseite ist entstanden, weil wir in unserem Informatik Studium ein Projekt ausgewählt
			haben um Menschen von dem Computer wegzubewegen in die große weite Welt, damit diese die
			verschiedenen Kulturen und Orte kennenlernen. Mit unseren vielen Reisen die wir bereits hinter
			uns haben, haben wir uns dazu berufen gesehen genau dieses Projekt zu implementieren und
			unsere Erfahrung mit den verschiedenen Kulturen zu teilen, damit die Nutzer eine
			Inspirationsquelle haben. Also fühl dich frei und erkunde unsere
			<a href="/blog">Blogliste</a>.`
		}
	];
</script>

<svelte:head>
	<title>Über uns</title>
	<meta name="description" content="Die Blogbeiträge der global-getways" />
</svelte:head>

<section class="">
	{#each sections as section (section.title)}
		<article class="sec-{section.title} mt-10">
			<h2>{section.title}</h2>
			<p>{@html section.body}</p>
		</article>
	{/each}
</section>
