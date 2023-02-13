<script lang="ts">
	// Icons
	import githubIcon from '@iconify/icons-mdi/github';
	import twitterIcon from '@iconify/icons-mdi/twitter';
	
	// Packages
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
			text: 'Twitter',
		},
		{
			href: 'https://github.com',
			icon: 'mdi:github',
			text: 'GitHub',
		},
		{
			href: '/impressum',
			icon: '',
			text: 'Impressum',
		},
		{
			href: '/datenschutz',
			icon: '',
			text: 'Datenschutz',
		}
	];
</script>

<footer class="footer mt-20">
	<div class="flex flex-wrap gap-4">
		{#each links as link}
			<a href={link.href}>
				<Icon class="inline-block" icon="{link.icon}" />{link.text}
			</a>
		{/each}
	</div>
</footer>

<style>
	footer {
		padding: 5% 0;
		width: 100%;
		display: flex;
    	justify-content: center;
		border-top: 1px solid #0a3b7a;
	}
</style>