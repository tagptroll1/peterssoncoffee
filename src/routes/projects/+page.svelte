<script lang="ts">
	import type { PageData } from './$types';

	let { data }: { data: PageData } = $props();
</script>

<svelte:head>
	<title>Projects</title>
</svelte:head>

<section>
	<p>NB! This is a work in progress</p>

	<h1>Public repositories</h1>
	{#each data.projects.public ?? [] as project}
		<article>
			<a href={`/project-${project.name}`}>
				<h2>{project.name}</h2>
				<p>{project.description ?? 'No Description'}</p>
			</a>
		</article>
	{/each}

	<h1>Private repositories</h1>
	{#each data.projects.private ?? [] as project}
		<article>
			<a href={`/project-${project.name}`}>
				<h2>{project.name}</h2>
				<p>{project.description ?? 'No Description'}</p>
			</a>
		</article>
	{/each}
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	h2 {
		margin: 1rem 0 0;
	}

	p {
		margin: 0;
	}
	a {
		display: block;
	}

	article {
		width: 50%;
	}
</style>
