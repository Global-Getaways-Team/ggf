<script lang="ts">
	import type { PageData } from "./$types";
	export let data: PageData;
</script>

<article>
	<h1 class="font-black text-4xl text-black">{data.title}</h1>
	<div class="flex justify-between my-1">
		<span class="font-sans text-black text-lg">{data.city} - {data.country}</span>
		<span class="opacity-80">{data.createdAt}</span>
	</div>
	<hr />
	<p class="mt-3 font-sans text-black text-md text-justify">{data.body}</p>
</article>
