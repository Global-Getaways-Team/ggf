<script lang="ts">
	import Comment from '$lib/components/Comment.svelte';

	const utc = new Date().toUTCString();
	type CommentT = {
		content: String;
		date?: String;
	};
	const comment: CommentT = {
		content: '',
		date: new Date().toUTCString()
	};

	let comments: CommentT[] = [
		{
			content: 'something',
			date: utc
		},
		{
			content: 'something else',
			date: utc
		}
	];

	function createComment() {
		// request an die backen
		comments = [comment, ...comments];
	}
</script>

<main>
	<div class="commentBox" style="height:268px;">
		<p>Leave a comment</p>
		<div class="commentForm">
			<div class="comments">
				<textarea rows="4" placeholder="Write your comment" bind:value={comment.content} />
				<button on:click={createComment}>new comment</button>
				{#each comments as comment}
					<Comment {comment} />
				{/each}
			</div>
		</div>
	</div>
</main>
