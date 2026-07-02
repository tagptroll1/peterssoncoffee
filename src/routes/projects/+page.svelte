<script lang="ts">
	import type { PageData } from './$types';

	const { data }: { data: PageData } = $props();

	const langColors: Record<string, string> = {
		Go: '#00ADD8',
		'C#': '#9179c4',
		Svelte: '#ff3e00',
		Python: '#3572A5',
		TypeScript: '#2b7489',
		JavaScript: '#f1e05a',
		HTML: '#e34c26',
		CSS: '#563d7c',
		Rust: '#dea584',
		Shell: '#89e051',
		Nix: '#7e7eff'
	};

	const langColor = (l: string | null) => (l ? (langColors[l] ?? 'var(--accent)') : 'var(--accent)');

	const publicRepos = $derived(data.projects.public ?? []);
	const privateRepos = $derived(data.projects.private ?? []);
</script>

<svelte:head>
	<title>Projects</title>
</svelte:head>

<section class="projects">
	<div class="head">
		<div>
			<span class="kicker">02 · Projects</span>
			<h1>Public repositories</h1>
			<p class="lead">
				Here's what I build in the open: bots, backends, games and dev tooling.
			</p>
			<p class="note">NB! This is a work in progress. Repos are fetched live from GitHub.</p>
		</div>
		<span class="badge">{publicRepos.length} repos</span>
	</div>

	{#if publicRepos.length === 0}
		<p class="empty">Repositories couldn't be loaded right now. Check back shortly.</p>
	{/if}

	<div class="grid">
		{#each publicRepos as project}
			<a class="card" href={`/project-${project.name}`}>
				<div class="card-top">
					<span class="name-wrap">
						<svg width="17" height="17" viewBox="0 0 24 24" class="folder">
							<path
								d="M10,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V8C22,6.89 21.1,6 20,6H12L10,4Z"
								fill="var(--accent)"
							/>
						</svg>
						<span class="name">{project.name}</span>
					</span>
				</div>

				<p class="desc">{project.description ?? 'No description'}</p>

				<div class="card-meta">
					{#if project.language}
						<span class="lang">
							<span class="lang-dot" style="background: {langColor(project.language)}"></span>
							{project.language}
						</span>
					{/if}
					{#if project.stargazers_count != null}
						<span class="stars">
							<svg width="12" height="12" viewBox="0 0 24 24">
								<path
									d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z"
									fill="currentColor"
								/>
							</svg>
							{project.stargazers_count}
						</span>
					{/if}
				</div>
			</a>
		{/each}
	</div>

	{#if privateRepos.length}
		<div class="head head-sub">
			<div>
				<h2>Private repositories</h2>
				<p class="lead">Work I keep behind closed doors.</p>
			</div>
			<span class="badge">{privateRepos.length} repos</span>
		</div>

		<div class="grid">
			{#each privateRepos as project}
				<a class="card" href={`/project-${project.name}`}>
					<div class="card-top">
						<span class="name-wrap">
							<svg width="17" height="17" viewBox="0 0 24 24" class="folder">
								<path
									d="M10,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V8C22,6.89 21.1,6 20,6H12L10,4Z"
									fill="var(--accent)"
								/>
							</svg>
							<span class="name">{project.name}</span>
						</span>
						<span class="archived">Private</span>
					</div>

					<p class="desc">{project.description ?? 'No description'}</p>

					<div class="card-meta">
						{#if project.language}
							<span class="lang">
								<span class="lang-dot" style="background: {langColor(project.language)}"></span>
								{project.language}
							</span>
						{/if}
						{#if project.stargazers_count != null}
							<span class="stars">
								<svg width="12" height="12" viewBox="0 0 24 24">
									<path
										d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z"
										fill="currentColor"
									/>
								</svg>
								{project.stargazers_count}
							</span>
						{/if}
					</div>
				</a>
			{/each}
		</div>
	{/if}
</section>

<style>
	.projects {
		max-width: var(--col-page);
		margin: 0 auto;
		padding: 4rem 2rem;
		box-sizing: border-box;
	}

	.head {
		display: flex;
		align-items: flex-end;
		justify-content: space-between;
		gap: 1rem;
		flex-wrap: wrap;
	}

	.head-sub {
		margin-top: 4rem;
	}

	.kicker {
		font-family: var(--font-mono);
		font-size: var(--text-2xs);
		text-transform: uppercase;
		letter-spacing: var(--tracking-label);
		color: var(--accent-strong);
	}

	h1 {
		font-family: var(--font-display);
		font-weight: 600;
		font-size: clamp(2rem, 4vw, 3rem);
		letter-spacing: -0.02em;
		color: var(--text-strong);
		margin: 1rem 0 0;
	}

	h2 {
		font-family: var(--font-display);
		font-weight: 600;
		font-size: var(--text-2xl);
		letter-spacing: -0.02em;
		color: var(--text-strong);
		margin: 0;
	}

	.lead {
		font-family: var(--font-sans);
		font-size: var(--text-md);
		color: var(--text-muted);
		margin: 0.6rem 0 0;
	}

	.note {
		font-family: var(--font-mono);
		font-size: var(--text-xs);
		color: var(--text-subtle);
		margin: 0.6rem 0 0;
	}

	.badge {
		font-family: var(--font-mono);
		font-size: var(--text-2xs);
		text-transform: uppercase;
		letter-spacing: var(--tracking-wide);
		color: var(--text-muted);
		background: var(--surface-sunken);
		border: 1px solid var(--border);
		border-radius: var(--radius-pill);
		padding: 0.25rem 0.7rem;
		white-space: nowrap;
	}

	.grid {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
		gap: 1.1rem;
		margin-top: 2.5rem;
	}

	.empty {
		margin-top: 2rem;
		font-family: var(--font-mono);
		font-size: var(--text-sm);
		color: var(--text-subtle);
	}

	.card {
		display: flex;
		flex-direction: column;
		gap: 0.7rem;
		text-decoration: none;
		background: var(--surface-card);
		border: 1px solid var(--border);
		border-radius: var(--radius-lg);
		padding: var(--space-5);
		box-shadow: var(--shadow-sm);
		transition:
			transform var(--dur-base) var(--ease-out),
			box-shadow var(--dur-base) var(--ease-out),
			border-color var(--dur-base) var(--ease-out);
	}

	.card:hover {
		text-decoration: none;
		transform: translateY(-2px);
		box-shadow: var(--shadow-md);
		border-color: var(--border-strong);
	}

	.card-top {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 0.75rem;
	}

	.name-wrap {
		display: inline-flex;
		align-items: center;
		gap: 0.5rem;
		min-width: 0;
	}

	.folder {
		flex-shrink: 0;
	}

	.name {
		font-family: var(--font-mono);
		font-weight: var(--weight-semibold);
		font-size: var(--text-base);
		color: var(--text-strong);
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}

	.archived {
		font-family: var(--font-mono);
		font-size: var(--text-2xs);
		text-transform: uppercase;
		letter-spacing: var(--tracking-wide);
		color: var(--text-subtle);
		flex-shrink: 0;
	}

	.desc {
		margin: 0;
		font-size: var(--text-sm);
		line-height: var(--leading-normal);
		color: var(--text-muted);
		min-height: 2.5em;
	}

	.card-meta {
		display: flex;
		align-items: center;
		gap: 1.1rem;
		margin-top: auto;
		padding-top: 0.4rem;
		font-family: var(--font-mono);
		font-size: var(--text-xs);
		color: var(--text-subtle);
	}

	.lang {
		display: inline-flex;
		align-items: center;
		gap: 0.35rem;
	}

	.lang-dot {
		width: 0.6rem;
		height: 0.6rem;
		border-radius: 50%;
	}

	.stars {
		display: inline-flex;
		align-items: center;
		gap: 0.3rem;
	}

	@media (max-width: 640px) {
		.projects {
			padding: 3rem 1.5rem;
		}
	}
</style>
