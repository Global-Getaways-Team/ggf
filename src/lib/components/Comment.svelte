<script lang="ts">
	import type { Blog } from "$lib/types/models";
	let blog: Blog = {
		body: "",
		city: "",
		country: "",
		image: "",
		title: ""
	};
</script>

<h3 class="text-black font-mont font-black text-3xl">Kommentar</h3>
<form action="" method="post" class="flex flex-col">
	<input type="text" id="text" placeholder="Titel" class="outline-none font-sans mt-4 text-xl" />

	<input
		type="text"
		id="text"
		placeholder="Berlin"
		class="outline-none font-sans mt-4 text-xl"
		bind:value={blog.city}
	/>

	<input
		type="text"
		id="text"
		placeholder="Deutschland"
		class="outline-none font-sans mt-4 text-xl"
		bind:value={blog.country}
	/>

	<input
		type="url"
		id="image"
		placeholder="www.unsplash.com/some/picture"
		class="outline-none font-sans mt-4 text-xl"
		bind:value={blog.image}
	/>

	<textarea
		name="comment"
		id="comment"
		placeholder="Die Reise meines Lebens..."
		cols="30"
		rows="10"
		bind:value={blog.body}
		class="border-black border-solid border-[1px] my-4 outline-none p-5 resize-none"
		minlength="500"
		maxlength="2000"
	/>

	<button type="submit" class="bg-grey rounded-full w-32 font-mont p-1 font-extrabold mb-3">
		Erstellen
	</button>
</form>
