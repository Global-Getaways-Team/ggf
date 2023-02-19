import type { PageLoad } from "./$types";
import type { Blog } from "$lib/types/models";

export const load = (async ({ fetch }) => {
	const res = await fetch(`http://172.27.145.161:8080/api/favorite/all`, {
		method: "GET",
		credentials: "include"
	});

	const blogs: { blog: Blog }[] = await res.json();
	return { blogs };
}) satisfies PageLoad;
