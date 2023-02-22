import type { PageLoad } from "./$types";
import type { Blog, Comment, Favorite } from "$lib/types/models";

export const load = (async ({ params, fetch }) => {
	const blog: Blog = await fetch(`http://localhost:8080/api/blog/single/${params.id}`, {
		credentials: "include",
		method: "GET"
	})
		.catch((err) => {
			console.log(err);
			return err;
		})
		.then((res) => res.json());

	const comments: Comment[] = await fetch(`http://localhost:8080/api/comment/list/${params.id}`, {
		credentials: "include",
		method: "GET"
	})
		.catch((err) => {
			console.log(err);
			return err;
		})
		.then((res) => res.json());

	const favorite: Favorite = await fetch(`http://localhost:8080/api/favorite/single/${params.id}`, {
		credentials: "include",
		method: "GET"
	})
		.catch((err) => {
			console.log(err);
			return err;
		})
		.then((res) => res.json());

	if (blog === undefined || comments == undefined || favorite === undefined) {
		return {
			blog: {},
			comments: [],
			favorite: {}
		};
	}

	return { blog, comments, favorite };
}) satisfies PageLoad;
