import type { PageLoad } from "./$types";
import type { Blog } from "$lib/types/models";
import type { Comment } from "$lib/types/models";

export const load = (async ({ params, fetch }) => {
	const res = await fetch(`http://172.19.7.32:8080/api/blog/get/${params.id}`, {
		credentials: "include",
		method: "GET"
	});

	const resComment = await fetch(`http://172.19.7.32:8080/api/comment/list/${params.id}`, {
		credentials: "include",
		method: "GET"
	});

	const comments: Comment[] = await resComment.json();

	const blog: Blog = await res.json();
	return { blog, comments };
}) satisfies PageLoad;
