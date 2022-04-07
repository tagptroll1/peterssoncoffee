const cache = {};
const tagptrollGithubUrl = `https://api.github.com/search/repositories?q=user:tagptroll1`;

// export a async function get get a single repository from github api with token auth
export async function getRepository(project, token) {
    // check if project is in tagptrollgithuburl cache entry
    if (cache[tagptrollGithubUrl] && cache[tagptrollGithubUrl].items?.find((f) => f.name === project)) {
        return cache[tagptrollGithubUrl].items?.find((f) => f.name === project);
    }
    // if the url is in the cache and not expired, return the cached value
    if (cache[project] && cache[project].expires > Date.now()) {
        return cache[project].data;
    }
    // else if the url is in the cache but expired, delete it and fetch the data again
    else if (cache[project]) {
        delete cache[project];
    }

	const url = `https://api.github.com/repos/tagptroll1/${project}`;
	const headers = {
		Authorization: `token ${token}`,
        'Content-Type': 'application/json',
	};

	const response = await fetch(url, { headers });
	const json = await response.json();

    cache[url] = {
        data: json,
        expires: Date.now() + 1000 * 60 * 60,
    };
	return json;
}
 
// export a async function to get repositories from github api with basic api token auth
export async function getRepositories(token) {
    // if the url is in the cache and not expired, return the cached value
    if (cache[tagptrollGithubUrl] && cache[tagptrollGithubUrl].expires > Date.now()) {
        return cache[tagptrollGithubUrl].data;
    }
    // else if the url is in the cache but expired, delete it and fetch the data again
    else if (cache[tagptrollGithubUrl]) {
        delete cache[tagptrollGithubUrl];
    }

    const response = await fetch(tagptrollGithubUrl, {
        method: 'GET',
        headers: {
        'Authorization': `token ${token}`,
        'Content-Type': 'application/json',
        },
    });

    const data = await response.json();

    // cache the response with an expiration of 1 hour
    cache[tagptrollGithubUrl] = {
        data,
        expires: Date.now() + 1000 * 60 * 60,
    };

    return data;
}
