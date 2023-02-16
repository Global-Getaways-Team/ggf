<script>
	// Components
	import Footer from '$lib/components/Footer.svelte';
	import Header from '$lib/components/Header.svelte';
	// Styling
	import '../app.css';
</script>

<div class="grid gird-cols-[200px_minmax(100vh, 1fr)_200px] w-[100%]">
	<Header />
	<main class="w-[80%] mx-auto">
		<slot />
	</main>
	<Footer />
</div>

<style global>

</style>
