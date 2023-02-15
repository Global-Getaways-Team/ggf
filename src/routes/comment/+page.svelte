<script lang="ts">
let comment = '';
	import Header from '$lib/components/Header.svelte';

	// Styling
	import Comment from '$lib/components/Comment.svelte';

	var comments = ['This is really nice place', 'I want to go there', 'Dream Island'];

	const newComment = () => {
		comments = [...comments, comment];
		comment = '';
	};
</script>

<main>
	<div class="commentBox" style="height:268px;">
		<Comment />
		<p>Leave a comment</p>
		<div class="commentForm">
			<div class="comments">
				<textarea rows="4" placeholder="Write your comment" bind:value={comment} />
				<button on:click={newComment}>new comment</button>
				{#each comments as comm}
					<Comment comment={comm} />
				{/each}
			</div>
		</div>
	</div>
</main>