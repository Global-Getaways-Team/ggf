<script lang="ts">
	import type { Blog } from "$lib/types/models";
	export let blog: Blog;
	function cut(text: string): string {
		if (text.length <= 200) return `${text}...`;
		const shorted = text.slice(0, 300);
		return `${shorted}...`;
	}

	function showDetails(id: string) {
		location.href = `/blog/${id}`;
	}
</script>

<div
	class="w-[350px] bg-grey p-5 hover:drop-shadow-[0_0.1rem_1rem_rgba(0,0,0,0.2)] transition-all duration-200 hover:scale-105 cursor-pointer"
	on:click={() => showDetails(blog.id)}
	on:keydown={() => showDetails(blog.id)}
>
	<img
		src="https://images.unsplash.com/photo-1560930950-5cc20e80e392?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
		alt="Fernseh Turm"
	/>
	<section class="mt-4">
			<h3 class="font-mont font-bold text-black">{blog.title}</h3>
		<span class="font-mont text-xs font-light text-black">{blog.city} - {blog.country}</span>

		<hr class="opacity-20 bg-black" />
		<p class="mt-1 font-sans text-black text-justify">
			{cut(blog.body)}
		</p>
	</section>
</div>
