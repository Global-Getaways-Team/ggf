<script lang="ts">
	type Link = {
		href: string;
		text: string;
	};

	const links: Link[] = [
		{
			href: '/blog',
			text: 'Blogbeiträge'
		},
		{
			href: '/about',
			text: 'Über uns'
		}
	];
</script>

<header class="flex items-center justify-between mt-10">
	<a href="/">
		<img width="150" height="150" src="/images/logo.png" alt="Das Logo von global-getaways" />
	</a>
	<nav class="na">
		<ul class="flex">
			{#each links as link (link.href)}
				<li class="ml-10">
					<a href={link.href}> {link.text} </a>
				</li>
			{/each}
		</ul>
	</nav>
</header>
