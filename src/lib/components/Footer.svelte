<script lang="ts">
	type Link = {
		href: string;
		text: string;
		icon?: string;
	};

	const links: Link[] = [
		{
			href: 'https://twitter.com',
			text: 'Twitter'
		},
		{
			href: 'https://github.com',
			text: 'GitHub'
		},
		{
			href: '/impressum',
			text: 'Impressum'
		},
		{
			href: '/datenschutz',
			text: 'Datenschutz'
		}
	];
</script>

<footer class="footer mt-20">
	<ul class="flex flex-wrap">
		{#each links as link, i (link.href)}
			<li class={i != 0 ? 'ml-10' : ''}>
				<i class="fa fa-{link.icon}" />
				<a href={link.href}>{link.text}</a>
			</li>
		{/each}
	</ul>
</footer>
