<script lang="ts">
	import Icon from '@iconify/svelte';

	// Variables
	type Link = {
		href: string;
		text: string;
		icon?: string;
	};

	const links: Link[] = [
		{
			href: 'https://twitter.com',
			icon: 'mdi:twitter',
			text: 'Twitter'
		},
		{
			href: 'https://github.com',
			icon: 'mdi:github',
			text: 'GitHub'
		},
		{
			href: '/impressum',
			icon: '',
			text: 'Impressum'
		},
		{
			href: '/datenschutz',
			icon: '',
			text: 'Datenschutz'
		}
	];
</script>

<footer class="footer mt-20 flex justify-center border-t-[1px] border-solid border-black pt-10">
	<div class="flex flex-wrap gap-4">
		{#each links as link}
			<a href={link.href}>
				<Icon class="inline-block" icon={link.icon} />
				<span class="font-sans">{link.text}</span>
			</a>
		{/each}
	</div>
</footer>
