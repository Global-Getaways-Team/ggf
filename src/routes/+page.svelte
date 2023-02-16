<script lang="ts">
	import Chip from '$lib/components/Chip.svelte';
</script>

<svelte:head>
	<title>Global Getaways</title>
	<meta name="description" content="Homepage der Global Getaways" />
</svelte:head>

<main class="w-[80%] mx-auto">
	<section>
		<h2 class="font-mont font-bold">Melde dich direkt hier an, um nichts mehr zu verpassen!</h2>
		<form class="mt-5 flex items-center">
			<input
				type="email"
				id="email"
				placeholder="muster@mail.de"
				class="outline-none border-b-[1px] border-black"
			/>
			<button type="submit" class="ml-2 font-sans font-medium bg-silver rounded-full px-2 py-1">
				Subscribe
			</button>
		</form>
	</section>
</main>
