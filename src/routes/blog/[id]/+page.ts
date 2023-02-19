import type { PageLoad } from "./$types";
import type { Blog, Comment, Favorite } from "$lib/types/models";

export const load = (async ({ params, fetch }) => {
	const blog: Blog = await fetch(`http://172.29.45.205:8080/api/blog/single/${params.id}`, {
		credentials: "include",
		method: "GET"
	})
		.then((res) => res.json())
		.catch((err) => {
			console.error(err);
		});

	const comments: Comment[] = await fetch(
		`http://172.29.45.205:8080/api/comment/list/${params.id}`,
		{
			credentials: "include",
			method: "GET"
		}
	)
		.then((res) => res.json())
		.catch((err) => {
			console.error(err);
		});

	const favorite: Favorite = await fetch(
		`http://172.29.45.205:8080/api/favorite/single/${params.id}`,
		{
			credentials: "include",
			method: "GET"
		}
	)
		.then((res) => res.json())
		.catch((err) => {
			console.error(err);
		});

	return { blog, comments, favorite };
}) satisfies PageLoad;
