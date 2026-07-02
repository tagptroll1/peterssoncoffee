<script lang="ts">
	import SkillList from '$lib/SkillList.svelte';

	const years = new Date().getFullYear() - 2018;

	const experience = [
		{
			company: 'TV 2',
			role: 'Backend Developer',
			period: '2023 - Now',
			stack: ['Go', 'Kafka', 'Redis', 'Flink', 'Svelte', 'Google Cloud'],
			note: 'APIs and image handling at scale for Norway\'s largest commercial broadcaster. Built a pre-scaled image API and internal DX tooling, and maintain Kurator, our internal curation tool, in Svelte.'
		},
		{
			company: 'Uni Micro AS',
			role: 'Full-stack Developer',
			period: '2020 - 2023',
			stack: ['C#', 'ASP.NET Core', 'Angular', 'Azure', 'Jenkins'],
			note: 'Angular front ends over ASP.NET APIs, with Jenkins and Azure devops. Built big-data collection, a Vipps integration, webhook security and mass invoicing.'
		},
		{
			company: 'Nurofy AS',
			role: 'Full-stack Developer',
			period: '2018 - 2020',
			stack: ['Svelte', '.NET', 'C#'],
			note: 'Started as an intern, then full-time. Designed and built several client web solutions with a Svelte front end over a .NET backend.'
		}
	];
</script>

<svelte:head>
	<title>About</title>
</svelte:head>

<section class="about">
	<span class="kicker">01 · About</span>
	<h1>Engineer who builds tools that give people super powers.</h1>

	<div class="grid">
		<div class="prose">
			<p>
				I'm Thomas, a backend developer at <a href="https://tv2.no">TV 2</a> in Bergen. I work on
				APIs and image handling in Go, with Kafka, Flink, Redis and Google Cloud powering the data
				streams. I also maintain Kurator, our internal curation tool, and keep building it out in
				Svelte.
			</p>
			<p>
				I build tools that simplify workflows and give people super powers. I also like finding the
				performance flaws and security holes before they bite.
			</p>
			<p>
				Before TV 2 I spent a few years full-stack at <a href="https://unimicro.no">Uni Micro AS</a>,
				and before that Nurofy, building Angular front ends over ASP.NET APIs with Svelte where it
				fit. That's {years} years in software so far.
			</p>

			<div class="experience">
				<span class="kicker kicker-muted">Experience</span>
				<div class="exp-list">
					{#each experience as e}
						<article class="exp-card">
							<div class="exp-head">
								<h3>{e.company}</h3>
								<span class="exp-period">{e.period}</span>
							</div>
							<div class="exp-role">{e.role}</div>
							<p class="exp-note">{e.note}</p>
							<div class="tags">
								{#each e.stack as s}
									<span class="tag">{s}</span>
								{/each}
							</div>
						</article>
					{/each}
				</div>
			</div>
		</div>

		<div class="skills-card">
			<div class="skills-head">
				<span class="dots">
					<span class="dot dot-1"></span>
					<span class="dot dot-2"></span>
					<span class="dot dot-3"></span>
				</span>
				<span class="skills-path">skills/</span>
			</div>
			<SkillList />
		</div>
	</div>
</section>

<style>
	.about {
		max-width: var(--col-wide);
		margin: 0 auto;
		padding: 4rem 2rem;
		box-sizing: border-box;
	}

	.kicker {
		font-family: var(--font-mono);
		font-size: var(--text-2xs);
		text-transform: uppercase;
		letter-spacing: var(--tracking-label);
		color: var(--accent-strong);
	}

	.kicker-muted {
		color: var(--text-subtle);
	}

	h1 {
		font-family: var(--font-display);
		font-weight: 600;
		font-size: clamp(2rem, 4vw, 3rem);
		letter-spacing: -0.02em;
		color: var(--text-strong);
		margin: 1rem 0 0;
	}

	.grid {
		display: grid;
		grid-template-columns: minmax(0, 1.1fr) minmax(0, 1fr);
		gap: 3rem;
		margin-top: 2.5rem;
		align-items: start;
	}

	.prose {
		font-family: var(--font-sans);
		font-size: var(--text-md);
		line-height: 1.7;
		color: var(--text-body);
	}

	.prose p:first-child {
		margin-top: 0;
	}

	.experience {
		margin-top: 2.5rem;
	}

	.exp-list {
		margin-top: 1.2rem;
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}

	.exp-card {
		background: var(--surface-card);
		border: 1px solid var(--border);
		border-radius: var(--radius-lg);
		box-shadow: var(--shadow-sm);
		padding: var(--space-5);
	}

	.exp-head {
		display: flex;
		align-items: baseline;
		justify-content: space-between;
		gap: 1rem;
	}

	.exp-head h3 {
		margin: 0;
		font-family: var(--font-display);
		font-weight: 600;
		font-size: var(--text-lg);
		color: var(--text-strong);
	}

	.exp-period {
		font-family: var(--font-mono);
		font-size: var(--text-xs);
		color: var(--text-subtle);
		white-space: nowrap;
	}

	.exp-role {
		font-family: var(--font-mono);
		font-size: var(--text-sm);
		color: var(--accent-strong);
		margin-top: 0.2rem;
	}

	.exp-note {
		margin: 0.7rem 0 1rem;
		font-size: var(--text-sm);
		line-height: 1.55;
		color: var(--text-muted);
	}

	.tags {
		display: flex;
		gap: 0.4rem;
		flex-wrap: wrap;
	}

	.tag {
		font-family: var(--font-mono);
		font-size: var(--text-xs);
		color: var(--text-muted);
		background: var(--surface-sunken);
		border: 1px solid var(--border);
		border-radius: var(--radius-xs);
		padding: 0.1rem 0.45rem;
	}

	/* --- Skills card --- */
	.skills-card {
		background: var(--bg-tint);
		border: 1px solid var(--border);
		border-radius: var(--radius-lg);
		box-shadow: var(--shadow-sm);
		padding: var(--space-6);
		position: sticky;
		top: 5.5rem;
	}

	.skills-head {
		display: flex;
		align-items: center;
		gap: 0.6rem;
		margin-bottom: 1.2rem;
	}

	.dots {
		display: flex;
		gap: 0.3rem;
	}

	.dot {
		width: 10px;
		height: 10px;
		border-radius: 50%;
	}

	.dot-1 {
		background: var(--copper-400);
	}
	.dot-2 {
		background: var(--coffee-300);
	}
	.dot-3 {
		background: var(--coffee-200);
	}

	.skills-path {
		font-family: var(--font-mono);
		font-size: var(--text-xs);
		color: var(--text-subtle);
	}

	@media (max-width: 860px) {
		.about {
			padding: 3rem 1.5rem;
		}

		.grid {
			grid-template-columns: 1fr;
			gap: 2rem;
		}

		.skills-card {
			position: static;
		}
	}
</style>
