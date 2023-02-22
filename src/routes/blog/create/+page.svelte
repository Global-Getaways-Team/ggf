<script lang="ts">
	import type { Blog } from "$lib/types/models";
	let blog: Blog = {
		body: "",
		country: "",
		city: "",
		image: "",
		title: ""
	};

	let err: Error = Error("");
	let succ: boolean = false;

	function getLength(str: string): number {
		if (str.trim().length == 0) {
			return 0;
		}

		return str.trim().split(" ").length;
	}

	function isValid(): boolean {
		const bodyLength = getLength(blog.body);
		const titleLength = getLength(blog.title);
		const cityLength = getLength(blog.city);
		const countryLength = getLength(blog.country);

		if (!(titleLength < 10 && titleLength >= 1)) {
			err = Error("Der Titel darf zwischen 1 - 10 Wörter beinhalten.");
			return false;
		}

		if (cityLength == 0) {
			err = Error("Nur eine Stadrd kann angegeben werden.");
			return false;
		}

		if (countryLength == 0) {
			err = Error("Nur ein Land kann angegeben werden");
			return false;
		}

		if (blog.image == "") {
			err = Error(
				"Ein Bild-URL muss angegeben werden. unsplash.com ist eine gute Webseite für solche Bilder."
			);
			return false;
		}

		if (!(bodyLength < 500 && bodyLength >= 100)) {
			err = Error("Der Blog muss aus 100 - 500 Wörtern bestehen.");
			return false;
		}

		return true;
	}

	async function create() {
		err = Error();
		const isValidForm = isValid();

		if (!isValidForm) return;
		const res = await fetch("http://localhost:8080/api/blog/create", {
			method: "POST",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify(blog),
			credentials: "include"
		});

		const data = await res.json();

		if (res.status == 409) {
			if (data.error.code == "P2002") {
				err = Error(data.error.code);
				return;
			}
		}

		succ = true;
	}
</script>


<svelte:head>
	<title>Verfassen</title>
</svelte:head>

{#if err.message != ""}
	<section class="my-2  bg-red text-black p-2 rounded-lg ">
		<h3>{err.message}</h3>
	</section>
{/if}

{#if succ}
	<section class="my-2 bg-green text-black p-2 rounded-lg ">
		<h3>
			Dein Blog wurde kreiert. Besuche <a href="/blog">die Blogbeiträge</a> um alle un deinen zu erkunden.
		</h3>
	</section>
{/if}

<form class="flex flex-col">
	<input
		type="text"
		id="text"
		placeholder="Titel"
		class="outline-none font-sans mt-4 text-xl"
		minlength="1"
		bind:value={blog.title}
	/>

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
		type="text"
		id="image"
		placeholder="www.unsplash.com/some/picture"
		class="outline-none font-sans mt-4 text-xl"
		bind:value={blog.image}
	/>

	<div class="relative w-full">
		<textarea
			name="comment"
			id="comment"
			placeholder="Die Reise meines Lebens..."
			cols="30"
			rows="10"
			bind:value={blog.body}
			class="border-black border-solid border-[1px] my-4 outline-none p-5 resize-none w-full"
		/>

		<span class="absolute top-5 right-3 font-sans text-black">{getLength(blog.body)}</span>
	</div>

	<button
		type="submit"
		class="bg-grey rounded-full w-32 font-mont p-1 font-extrabold mb-3"
		on:click={create}
	>
		Erstellen
	</button>
</form>
