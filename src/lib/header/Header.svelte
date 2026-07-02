<script lang="ts">
	import { page } from '$app/state';

	const links = [
		{ href: '/', label: 'Home' },
		{ href: '/about', label: 'About' },
		{ href: '/projects', label: 'Projects' }
	];
</script>

<header>
	<nav>
		<a class="brand" href="/">
			yesbutmaybe<span class="dot">.</span><span class="tld">no</span>
		</a>

		<div class="links">
			{#each links as link}
				<a href={link.href} class="nav-link" class:active={page.url.pathname === link.href}>
					{#if page.url.pathname === link.href}
						<span class="marker"></span>
					{/if}
					{link.label}
				</a>
			{/each}
			<a class="resume" href="resume.pdf" download="Thomas Petersson Resume">Resume</a>
		</div>
	</nav>
</header>

<style>
	header {
		position: sticky;
		top: 0;
		z-index: 50;
		background: color-mix(in srgb, var(--paper) 82%, transparent);
		backdrop-filter: saturate(140%) blur(10px);
		border-bottom: 1px solid var(--border-faint);
	}

	nav {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: var(--space-5);
		max-width: var(--col-page);
		margin: 0 auto;
		padding: 0.85rem 1.25rem;
		font-family: var(--font-mono);
	}

	.brand {
		display: inline-flex;
		align-items: baseline;
		gap: 0.05rem;
		text-decoration: none;
		font-weight: var(--weight-bold);
		font-size: var(--text-md);
		color: var(--text-strong);
		letter-spacing: -0.01em;
	}

	.brand:hover {
		text-decoration: none;
	}

	.brand .dot,
	.brand .tld {
		color: var(--accent);
	}

	.links {
		display: flex;
		align-items: center;
		gap: 0.25rem;
	}

	.nav-link {
		position: relative;
		display: inline-flex;
		align-items: center;
		height: 2.25rem;
		padding: 0 0.85rem;
		font-size: var(--text-xs);
		font-weight: var(--weight-semibold);
		text-transform: uppercase;
		letter-spacing: var(--tracking-wide);
		text-decoration: none;
		color: var(--text-muted);
		transition: color var(--dur-base) var(--ease-out);
	}

	.nav-link:hover {
		color: var(--text-strong);
		text-decoration: none;
	}

	.nav-link.active {
		color: var(--text-strong);
	}

	.marker {
		position: absolute;
		top: 0;
		left: 50%;
		transform: translateX(-50%);
		width: 0;
		height: 0;
		border-left: 5px solid transparent;
		border-right: 5px solid transparent;
		border-top: 5px solid var(--accent);
	}

	.resume {
		display: inline-flex;
		align-items: center;
		height: 2.25rem;
		margin-left: 0.5rem;
		padding: 0 0.95rem;
		font-size: var(--text-xs);
		font-weight: var(--weight-semibold);
		text-transform: uppercase;
		letter-spacing: var(--tracking-wide);
		text-decoration: none;
		color: var(--accent-strong);
		border: 1px solid var(--accent);
		border-radius: var(--radius-sm);
		transition:
			background var(--dur-base) var(--ease-out),
			color var(--dur-base) var(--ease-out);
	}

	.resume:hover {
		background: var(--accent);
		color: var(--accent-on);
		text-decoration: none;
	}

	@media (max-width: 640px) {
		.nav-link {
			padding: 0 0.55rem;
		}
	}
</style>
