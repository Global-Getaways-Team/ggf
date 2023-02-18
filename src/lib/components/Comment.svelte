<script lang="ts">
	import type { Comment } from "$lib/types/models";
	export let comment: Comment;
</script>

<article class="flex flex-col mt-10">
	<h3 class="text-black font-mont font-medium text-md">{comment.authorId}</h3>
	<p class="font-sans text-black font-extralight text-lg text-justify mt-1">{comment.body}</p>
</article>
