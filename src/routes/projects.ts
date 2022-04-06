import { getRepositories } from '$lib/githubapi';

/** @type {import().RequestHandler} */
export async function get() {
	const githubRepositories = await getRepositories(import.meta.env.VITE_GITHUB_TOKEN);

	//get full_name, url, created_at, updated_at, pushed_at, languge, score from the response and group by private/public
	const projects = githubRepositories.items.reduce((acc, repo) => {
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
		} = repo;

		// if achieved or disabled, skip
		if (archived || disabled) {
			return acc;
		}

		const group = repo.private ? 'private' : 'public';
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
			description
		};

		if (!acc[group]) {
			acc[group] = [];
		}

		acc[group].push(repoData);
		return acc;
	}, {});

  // sort public and private group by score and updated_at
  projects.public = projects.public.sort((a, b) => {
    if (a.score > b.score) {
      return -1;
    }
    if (a.score < b.score) {
      return 1;
    }
    if (a.pushed_at > b.pushed_at) {
      return -1;
    }
    if (a.pushed_at < b.pushed_at) {
      return 1;
    }
    return 0;
  });

  projects.private = projects.private.sort((a, b) => {
    if (a.score > b.score) {
      return -1;
    }
    if (a.score < b.score) {
      return 1;
    }
    if (a.updated_at > b.updated_at) {
      return -1;
    }
    if (a.updated_at < b.updated_at) {
      return 1;
    }
    return 0;
  });

	return {
		status: 200,
		body: { projects }
	};
}
