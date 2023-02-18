<script lang="ts">
	import Comment from "$lib/components/Blog.svelte";
	import { onMount } from "svelte";
	import { guestId } from "../lib/stores/guest";

	onMount(async () => {
		const cookies = document.cookie.split("=");
		const isPresent = cookies[0] == "global_getaways_tracking_id";
		if (isPresent) return;
		const guest = await fetch("http://172.19.7.32:8080/api/guest/create", {
			method: "POST",
			credentials: "include"
		});
		const data = await guest.json();
		guestId.update((id) => (id = data.id));
	});
</script>

<svelte:head>
	<title>Global Getaways</title>
	<meta name="description" content="Homepage der Global Getaways" />
</svelte:head>

<Comment />

<h2 class="font-mont font-bold">Melde dich direkt hier an, um nichts mehr zu verpassen!</h2>
<form class="mt-5 flex items-center">
	<input
		type="email"
		id="email"
		placeholder="muster@mail.de"
		class="outline-none border-b-[1px] border-black"
	/>
	<button type="submit" class="ml-2 font-sans font-medium bg-silver rounded-full px-2 py-1">
		Subscribe
	</button>
</form>
