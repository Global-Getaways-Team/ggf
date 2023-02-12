<script>
	import { scale } from 'svelte/transition';
	
	export let comment = "";
	
</script>

<main>
	
	<div transition:scale class="comments">
		{comment}
	</div>
</main>

<style>
	

	@media (max-width: 900px) {
		.commentBox {
			width: 80%;
			margin: 5%;
		}
	}

	@media (max-width: 640px) {
		.commentBox {
			width: 50%;
			margin: 5%;
		}
	}
</style>
