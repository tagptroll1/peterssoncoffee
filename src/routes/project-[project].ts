import { getRepository } from '$lib/githubapi';

/** @type {import('./[project]').RequestHandler} */
export async function get({ params }) {
	const githubRepository = await getRepository(params.project, import.meta.env.VITE_GITHUB_TOKEN);

	//get full_name, url, created_at, updated_at, pushed_at, languge, score from the response and group by private/public
    const {
        name,
        full_name,
        url,
        html_url,
        created_at,
        updated_at,
        pushed_at,
        language,
        score,
        description,
        archived,
        disabled
    } = githubRepository;

    // if achieved or disabled, skip
    if (archived || disabled) {
        return {};
    }

    const repository = {
        name,
        full_name,
        url,
        html_url,
        created_at,
        updated_at,
        pushed_at,
        language,
        score,
        description
    };


	return {
		status: 200,
		body: { repository }
	};
}
