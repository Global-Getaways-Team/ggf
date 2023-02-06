<script>
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import '../app.css';
</script>

<div class="flex justify-center">
	<div class="app">
		<Header />

		<slot />
		<Footer />
	</div>
</div>

<style>
	* {
		box-sizing: border-box;
		margin: 0;
		padding: 0;
	}

	.app {
		display: grid;
		grid-template-rows: 200px minmax(100vh, 1fr) 200px;
		grid-template-areas:
			'header'
			'main'
			'footer';
		width: 80%;
	}
</style>
