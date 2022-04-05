import { getToken } from "$lib/githubapi";

export async function get() {
    return {
        status: 200,
        body: getToken()
    }
}