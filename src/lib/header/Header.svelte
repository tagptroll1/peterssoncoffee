<script lang="ts">
	import { page } from '$app/stores';
</script>

<header>
	<nav>
		<svg viewBox="0 0 2 3" aria-hidden="true">
			<path d="M0,0 L1,2 C1.5,3 1.5,3 2,3 L2,0 Z" />
		</svg>

		<ul>
			<li class:active={$page.url.pathname === '/'}><a sveltekit:prefetch href="/">Home</a></li>
			<li class:active={$page.url.pathname === '/about'}>
				<a sveltekit:prefetch href="/about">About</a>
			</li>
			<li class:active={$page.url.pathname === '/projects'}>
				<a sveltekit:prefetch href="/projects">Projects</a>
			</li>

			<li class:active={$page.url.pathname === '/contact'}>
				<a sveltekit:prefetch href="/contact">Contact me</a>
			</li>

			<li>
				<a class="resume" href="resume.pdf" download="Thomas Petersson Resume">Resume</a>
			</li>
		</ul>

	</nav>
</header>

<style>
	header {
		position: sticky;
		top: 0;
		display: flex;
		justify-content: space-around;
		flex-direction: row-reverse;
		background-color: unset;
		width: 500px;
		margin-left: auto;
		--background: rgba(255, 255, 255, 0.9);
		background-color: var(--background);
		background-size: contain;


	}


	nav {
		display: flex;
		justify-content: center;
	}

	svg {
		width: 2em;
		height: 3em;
		display: block;
		position: absolute;
		left: -32px;
	}

	path {
		fill: var(--background);
	}

	ul {
		position: relative;
		padding: 0;
		margin: 0;
		height: 3em;
		display: flex;
		justify-content: center;
		align-items: center;
		list-style: none;
	}

	li {
		position: relative;
		display: flex;
		justify-content: center;
		align-items: center;
		font-family: var(--font-mono);
		height: 100%;
	}

	li .resume {
		background: none;
		border: var(--accent-color) 1px solid;;
		border-radius: 5px;
		color: var(--accent-color);
		
		height: 2rem;
	}

	li.active::before {
		--size: 6px;
		content: '';
		width: 0;
		height: 0;
		position: absolute;
		top: 0;
		left: calc(50% - var(--size));
		border: var(--size) solid transparent;
		border-top: var(--size) solid var(--accent-color);
	}

	nav a {
		display: flex;
		height: 100%;
		align-items: center;
		padding: 0 1em;
		color: var(--heading-color);
		font-weight: 700;
		font-size: 0.8rem;
		text-transform: uppercase;
		letter-spacing: 0.1em;
		text-decoration: none;
		transition: color 0.2s linear;
	}

	a:hover {
		color: var(--accent-color);
	}
</style>
