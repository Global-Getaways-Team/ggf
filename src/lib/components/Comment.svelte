<script>
	import { scale } from 'svelte/transition';

	export let comment = '';
</script>

<main>
	<div transition:scale class="comments">
		{comment}
	</div>
</main>

<style>
</style>
