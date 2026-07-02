<script lang="ts">
	const years = new Date().getFullYear() - 2018;
</script>

<svelte:head>
	<title>Home</title>
</svelte:head>

<section class="hero">
	<div class="intro">
		<span class="kicker">Backend engineer in Bergen, building in the open</span>
		<h1>Hello, I'm Thomas.</h1>
		<p class="tagline">A full-stack software engineer.</p>
		<p class="blurb">
			Backend developer at TV 2 in Bergen. I build APIs and image-handling services in Go, and
			maintain Kurator, our internal curation tool, in Svelte. Kafka, Flink, Redis and Google Cloud
			round out the stack.
		</p>

		<div class="cta">
			<a class="btn btn-primary" href="/projects">View projects <span aria-hidden="true">→</span></a>
			<a class="btn btn-secondary" href="/about">About me</a>
		</div>

		<div class="meta">
			<span>◷ {years} yrs in software</span>
			<span>⚲ Bergen, Norway</span>
		</div>
	</div>

	<div class="currently">
		<span class="now-label"><span class="pulse"></span>Currently</span>
		<h2 class="now-role">Backend Developer</h2>
		<p class="now-where">TV 2 · Bergen, Norway</p>

		<div class="now-divider"></div>

		<span class="now-sub">Working with</span>
		<div class="chips">
			<span class="chip">Go</span>
			<span class="chip">Kafka</span>
			<span class="chip">Flink</span>
			<span class="chip">Redis</span>
			<span class="chip">Svelte</span>
			<span class="chip">Google Cloud</span>
		</div>
	</div>
</section>

<style>
	.hero {
		max-width: var(--col-page);
		margin: 0 auto;
		padding: 5rem 2rem 4rem;
		display: grid;
		grid-template-columns: minmax(0, 1.35fr) minmax(0, 1fr);
		gap: 3rem;
		align-items: center;
		box-sizing: border-box;
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
		font-size: clamp(2.5rem, 4.6vw, 4.75rem);
		line-height: 1.06;
		letter-spacing: -0.025em;
		color: var(--text-strong);
		margin: 1.1rem 0 0;
	}

	.tagline {
		font-family: var(--font-display);
		font-weight: 500;
		font-size: clamp(1.25rem, 2.4vw, 2.1rem);
		line-height: 1.2;
		letter-spacing: -0.02em;
		color: var(--accent-strong);
		margin: 0.85rem 0 0;
	}

	.blurb {
		font-family: var(--font-sans);
		font-size: var(--text-md);
		line-height: 1.6;
		color: var(--text-muted);
		max-width: 40ch;
		margin: 1.6rem 0 0;
	}

	.cta {
		display: flex;
		gap: 0.75rem;
		margin-top: 2rem;
		flex-wrap: wrap;
	}

	.btn {
		display: inline-flex;
		align-items: center;
		gap: 0.5rem;
		height: 3rem;
		padding: 0 1.4rem;
		border-radius: var(--radius-sm);
		font-family: var(--font-mono);
		font-size: var(--text-sm);
		font-weight: var(--weight-semibold);
		text-decoration: none;
		transition:
			transform var(--dur-fast) var(--ease-out),
			box-shadow var(--dur-base) var(--ease-out),
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

	.btn-secondary {
		background: var(--surface-card);
		color: var(--text-strong);
		border: 1px solid var(--border);
		box-shadow: var(--shadow-sm);
	}

	.btn-secondary:hover {
		color: var(--text-strong);
		border-color: var(--border-strong);
	}

	.meta {
		display: flex;
		gap: 1.5rem;
		margin-top: 2.25rem;
		font-family: var(--font-mono);
		font-size: var(--text-xs);
		color: var(--text-subtle);
		flex-wrap: wrap;
	}

	/* --- Currently espresso card --- */
	.currently {
		background: var(--surface-inverse);
		border-radius: var(--radius-xl);
		padding: 1.9rem 1.8rem;
		box-shadow: var(--shadow-lg);
	}

	.now-label {
		display: inline-flex;
		align-items: center;
		gap: 0.5rem;
		font-family: var(--font-mono);
		font-size: var(--text-2xs);
		text-transform: uppercase;
		letter-spacing: var(--tracking-label);
		color: var(--copper-400);
	}

	.pulse {
		width: 7px;
		height: 7px;
		border-radius: 50%;
		background: #6fd08a;
		box-shadow: 0 0 0 0 rgba(111, 208, 138, 0.6);
		animation: pulse 2.4s var(--ease-out) infinite;
	}

	@keyframes pulse {
		0% {
			box-shadow: 0 0 0 0 rgba(111, 208, 138, 0.5);
		}
		70% {
			box-shadow: 0 0 0 7px rgba(111, 208, 138, 0);
		}
		100% {
			box-shadow: 0 0 0 0 rgba(111, 208, 138, 0);
		}
	}

	@media (prefers-reduced-motion: reduce) {
		.pulse {
			animation: none;
		}
	}

	.now-role {
		font-family: var(--font-display);
		font-weight: 600;
		font-size: var(--text-xl);
		letter-spacing: -0.02em;
		color: var(--text-on-dark);
		margin: 0.9rem 0 0;
	}

	.now-where {
		font-family: var(--font-mono);
		font-size: var(--text-sm);
		color: var(--coffee-400);
		margin: 0.4rem 0 0;
	}

	.now-divider {
		height: 1px;
		background: color-mix(in srgb, var(--coffee-400) 28%, transparent);
		margin: 1.4rem 0;
	}

	.now-sub {
		font-family: var(--font-mono);
		font-size: var(--text-2xs);
		text-transform: uppercase;
		letter-spacing: var(--tracking-label);
		color: var(--coffee-500);
	}

	.chips {
		display: flex;
		gap: 0.4rem;
		flex-wrap: wrap;
		margin-top: 0.9rem;
	}

	.chip {
		font-family: var(--font-mono);
		font-size: var(--text-2xs);
		color: var(--coffee-100);
		background: var(--espresso-700);
		border: 1px solid color-mix(in srgb, var(--coffee-400) 30%, transparent);
		border-radius: var(--radius-xs);
		padding: 0.15rem 0.5rem;
	}

	@media (max-width: 860px) {
		.hero {
			grid-template-columns: 1fr;
			gap: 2.5rem;
			padding: 3rem 1.5rem 2.5rem;
		}
	}
</style>
