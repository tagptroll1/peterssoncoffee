<script lang="ts">
	import type { PageData } from './$types';

	const { data }: { data: PageData } = $props();
	const repo = $derived(data.repository);

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
	const owner = $derived(repo.full_name?.split('/')[0] ?? 'tagptroll1');
</script>

<svelte:head>
	<title>{repo.name}</title>
</svelte:head>

<section class="detail">
	<a class="back" href="/projects">← projects</a>

	<div class="title-row">
		<svg width="26" height="26" viewBox="0 0 24 24">
			<path
				d="M10,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V8C22,6.89 21.1,6 20,6H12L10,4Z"
				fill="var(--accent)"
			/>
		</svg>
		<h1>{owner} / {repo.name}</h1>
	</div>

	<p class="desc">{repo.description ?? 'No description'}</p>

	<div class="stats">
		{#if repo.language}
			<span class="stat">
				<span class="lang-dot" style="background: {langColor(repo.language)}"></span>
				{repo.language}
			</span>
		{/if}
		{#if repo.stargazers_count != null}
			<span class="stat">★ {repo.stargazers_count} stars</span>
		{/if}
		{#if repo.pushed_at}
			<span class="stat">◷ updated {new Date(repo.pushed_at).toLocaleDateString()}</span>
		{/if}
	</div>

	<div class="actions">
		<a class="btn btn-primary" href={repo.html_url} target="_blank" rel="noreferrer">
			<img src="https://cdn.simpleicons.org/github/ffffff" width="16" height="16" alt="" />
			View on GitHub
		</a>
	</div>

	<article class="readme">
		<span class="kicker">readme.md</span>
		<h3>{repo.name}</h3>
		<p>
			{repo.description ?? 'No description.'}
			{#if repo.language}Written in {repo.language},{/if} kept small and focused, and documented so
			others can fork and contribute.
		</p>
		<pre>git clone {repo.html_url}
cd {repo.name}</pre>
		<p class="foot">
			Pull requests are welcome, see <a href={`${repo.html_url}/blob/main/CONTRIBUTING.md`}
				>CONTRIBUTING</a
			>.
		</p>
	</article>
</section>

<style>
	.detail {
		max-width: var(--col-wide);
		margin: 0 auto;
		padding: 4rem 2rem;
		box-sizing: border-box;
	}

	.back {
		display: inline-flex;
		align-items: center;
		gap: 0.4rem;
		font-family: var(--font-mono);
		font-size: var(--text-sm);
		color: var(--text-muted);
		margin-bottom: 1.5rem;
	}

	.back:hover {
		color: var(--accent-strong);
		text-decoration: none;
	}

	.title-row {
		display: flex;
		align-items: center;
		gap: 0.7rem;
		flex-wrap: wrap;
	}

	h1 {
		font-family: var(--font-mono);
		font-weight: 700;
		font-size: clamp(1.5rem, 3vw, 2.1rem);
		line-height: 1.2;
		letter-spacing: -0.01em;
		color: var(--text-strong);
		margin: 0;
	}

	.desc {
		font-family: var(--font-sans);
		font-size: var(--text-md);
		line-height: 1.6;
		color: var(--text-muted);
		max-width: 52ch;
		margin: 1.1rem 0 0;
	}

	.stats {
		display: flex;
		gap: 1.5rem;
		margin: 1.5rem 0;
		font-family: var(--font-mono);
		font-size: var(--text-sm);
		color: var(--text-subtle);
		flex-wrap: wrap;
	}

	.stat {
		display: inline-flex;
		align-items: center;
		gap: 0.4rem;
	}

	.lang-dot {
		width: 11px;
		height: 11px;
		border-radius: 50%;
	}

	.actions {
		display: flex;
		gap: 0.75rem;
		margin-bottom: 2.5rem;
		flex-wrap: wrap;
	}

	.btn {
		display: inline-flex;
		align-items: center;
		gap: 0.5rem;
		height: 2.75rem;
		padding: 0 1.3rem;
		border-radius: var(--radius-sm);
		font-family: var(--font-mono);
		font-size: var(--text-sm);
		font-weight: var(--weight-semibold);
		text-decoration: none;
		transition:
			transform var(--dur-fast) var(--ease-out),
			background var(--dur-base) var(--ease-out);
	}

	.btn:hover {
		text-decoration: none;
		transform: translateY(-1px);
	}

	.btn-primary {
		background: var(--accent);
		color: var(--accent-on);
		box-shadow: var(--shadow-accent);
	}

	.btn-primary:hover {
		background: var(--accent-strong);
		color: var(--accent-on);
	}

	.readme {
		background: var(--surface-card);
		border: 1px solid var(--border);
		border-radius: var(--radius-lg);
		box-shadow: var(--shadow-sm);
		padding: var(--space-6);
	}

	.kicker {
		font-family: var(--font-mono);
		font-size: var(--text-2xs);
		text-transform: uppercase;
		letter-spacing: var(--tracking-label);
		color: var(--text-subtle);
	}

	.readme h3 {
		font-family: var(--font-display);
		font-weight: 600;
		font-size: var(--text-lg);
		color: var(--text-strong);
		margin: 1rem 0 0.5rem;
	}

	.readme p {
		font-family: var(--font-sans);
		font-size: var(--text-base);
		line-height: 1.7;
		color: var(--text-body);
		margin: 0 0 1rem;
	}

	.readme pre {
		margin: 0;
	}

	.foot {
		font-size: var(--text-sm) !important;
		color: var(--text-subtle) !important;
		margin: 1rem 0 0 !important;
	}
</style>
