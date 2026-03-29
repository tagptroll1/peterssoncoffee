<script lang="ts">
	import SkillList from '$lib/SkillList.svelte';
</script>

<svelte:head>
	<title>About</title>
</svelte:head>

<article class="content">
	<h1>About me</h1>

	<section>
		<p>
			I'm Thomas, a backend developer at <a href="https://tv2.no">TV 2</a> in Bergen. I work on
			APIs and image handling in Go, with Kubernetes, Kafka, Redis and Google Cloud in the stack. We
			use Aiven for managing Kafka, Postgres and schema registries. A good chunk of the job is
			cross-team coordination.
		</p>
		<p>
			I've built internal tooling: a data broker hub, browser extensions for grabbing images and
			IDs, and some MCP servers and agents. I write code by hand and use AI tools (Claude Code,
			OpenCode) to speed up boilerplating and lookups.
		</p>
		<p>
			Previously at <a href="https://unimicro.no">Uni Micro AS</a> doing fullstack: React and
			Angular frontend, REST APIs in ASP.NET.
		</p>
		<SkillList />
	</section>
</article>

<style>
	h1,
	p {
		font-family: var(--font-mono);
	}
	.content {
		width: 100%;
		max-width: var(--column-width);
		margin: var(--column-margin-top) auto 0 auto;
	}
</style>
