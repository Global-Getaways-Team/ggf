<script>
	// Components
	import Footer from '$lib/components/Footer.svelte';
	import Header from '$lib/components/Header.svelte';
	// Styling
	import '../app.css';
</script>

<div class="app">
	<Header />
	<slot />
	<Footer />
</div>

<style global>
	* {
		box-sizing: border-box;
		margin: 0;
		padding: 0;
	}
	.app {
		display: grid;
		grid-template-rows: 200px minmax(100vh, 1fr) 200px;
		width: 100%;
	}
</style>