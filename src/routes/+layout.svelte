<script lang="ts">
	import Header from '$lib/header/Header.svelte';
	import '../app.css';

	import LinkedIn from '$lib/icons/Linkedin.svelte';
	import Github from '$lib/icons/Github.svelte';
	import Xml from '$lib/icons/Xml.svelte';

	let { children } = $props();
</script>

<Header />

<aside class="social-rail">
	<a
		href="https://www.github.com/tagptroll1/peterssoncoffee"
		title="Source"
		aria-label="Source"
	>
		<Xml />
	</a>

	<a
		href="https://www.linkedin.com/in/thomasagpetersson/"
		title="LinkedIn"
		aria-label="LinkedIn"
	>
		<LinkedIn />
	</a>

	<a href="https://www.github.com/tagptroll1" title="GitHub" aria-label="GitHub">
		<Github />
	</a>

	<span class="rail-line"></span>
</aside>

<main>
	{@render children()}
</main>

<style>
	main {
		flex: 1;
		width: 100%;
		box-sizing: border-box;
	}

	.social-rail {
		position: fixed;
		bottom: 2.5%;
		left: 2.5%;
		z-index: 40;

		display: flex;
		flex-direction: column;
		align-items: center;
		gap: var(--space-4);

		font-size: 1.4rem;
	}

	.social-rail a {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		color: var(--text-muted);
		transition:
			color var(--dur-base) var(--ease-out),
			transform var(--dur-fast) var(--ease-out);
	}

	.social-rail a:hover {
		color: var(--accent);
		transform: translateY(-1px);
	}

	.rail-line {
		width: 1px;
		height: 5.5rem;
		margin-top: 0.4rem;
		background: var(--border-strong);
	}

	@media (max-width: 1080px) {
		.social-rail {
			display: none;
		}
	}
</style>
