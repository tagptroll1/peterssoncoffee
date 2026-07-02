import { getRepositories } from '$lib/githubapi';
import { env } from '$env/dynamic/private';

export async function load() {
	const githubRepositories = await getRepositories(env.GITHUB_TOKEN);
	const items: Record<string, unknown>[] = githubRepositories?.items ?? [];

	const projects = items.reduce(
		(acc: Record<string, object[]>, repo: Record<string, unknown>) => {
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
				disabled,
				stargazers_count
			} = repo as {
				name: string;
				full_name: string;
				url: string;
				html_url: string;
				created_at: string;
				updated_at: string;
				pushed_at: string;
				language: string;
				score: number;
				description: string | null;
				archived: boolean;
				disabled: boolean;
				stargazers_count: number;
				private: boolean;
			};

			if (archived || disabled) return acc;

			const group = (repo as { private: boolean }).private ? 'private' : 'public';
			const repoData = {
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
				stargazers_count
			};

			if (!acc[group]) acc[group] = [];
			acc[group].push(repoData);
			return acc;
		},
		{}
	);

	const byActivity = (a: { stargazers_count: number; pushed_at: string }, b: { stargazers_count: number; pushed_at: string }) => {
		if (a.stargazers_count !== b.stargazers_count) return b.stargazers_count - a.stargazers_count;
		return b.pushed_at > a.pushed_at ? 1 : -1;
	};

	projects.public?.sort(byActivity);
	projects.private?.sort(byActivity);

	return { projects };
}
