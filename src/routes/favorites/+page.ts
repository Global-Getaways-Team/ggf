import type { PageLoad } from "./$types";
import type { Blog } from "$lib/types/models";

export const load = (async ({ fetch }) => {
	const blogs: { blog: Blog }[] = await fetch(`http://localhost:8080/api/favorite/all`, {
		method: "GET",
		credentials: "include"
	})
		.then((res) => res.json())
		.catch((err) => {
			console.log(err);
			Promise.reject(err);
		});

	return { blogs };
}) satisfies PageLoad;
