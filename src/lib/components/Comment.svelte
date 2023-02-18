<script lang="ts">
	import { scale } from 'svelte/transition';
	type CommentT = {
		content: String;
		date?: String;
	};
	export let comment:CommentT = {
		content: ""
	};
</script>

<main>
	<div transition:scale class="comments">
		{comment.content}
		{comment.date}
	</div>
</main>

<style>
</style>
