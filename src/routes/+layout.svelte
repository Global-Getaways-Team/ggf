<script>
	let comment = '';
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import Comment from '$lib/components/Comment.svelte';
	import '../app.css';

	var comments = ['This is really nice place', 'I want to go there', 'Dream Island'];

	const newComment = () => {
		comments = [...comments, comment];
		comment = '';
	};
</script>

<main>
	<div class="flex justify-center">
		<div class="app">
			<Header />
			<slot />
			<Footer />
			
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
		</div>
		
	</div>
</main>

<style>
	* {
		box-sizing: border-box;
		margin: 0;
		padding: 0;
	}

	.app {
		display: grid;
		grid-template-rows: 200px minmax(100vh, 1fr) 200px;
		width: 80%;
	}
	.commentBox {
		width: 50%;
		border: 1px solid #ccc;
		margin: 50px 0;
		padding: 10px 20px;
		font-family: 'poppins', sans-serif;
		border-radius: 5px;
		margin-left: 25%;
		margin-top: 80px;
		box-shadow: 0px 0px 10px 1px rgb(165, 165, 165);
	}

	.commentBox p {
		text-align: left;
		font-size: 28px;
		color: #777;
	}

	.commentForm textarea {
		width: 100%;
		padding: 10px;
		margin: 5px 0;
		box-sizing: border-box;
		outline: none;
		font-size: 18px;
		font-family: 'poppins', sans-serif;
		border: 1px solid #ddd;
		color: #777;
	}

	.commentForm button {
		margin: 10px 0;
		border: none;
		background-color: #a19b9b;
		padding: 10px;
		font-size: 18px;
		border-radius: 3px;
		color: #444;
	}

	button:hover {
		color: white;
		background-color: #444;
	}

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
