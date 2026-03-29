import { getRepository } from '$lib/githubapi';
import { env } from '$env/dynamic/private';
import { error } from '@sveltejs/kit';

export async function load({ params }) {
	const githubRepository = await getRepository(params.project, env.GITHUB_TOKEN);

	const { name, full_name, url, html_url, created_at, updated_at, pushed_at, language, score, description, archived, disabled } =
		githubRepository;

	if (archived || disabled) {
		error(404, 'Repository not found');
	}

	return {
		repository: { name, full_name, url, html_url, created_at, updated_at, pushed_at, language, score, description }
	};
}
