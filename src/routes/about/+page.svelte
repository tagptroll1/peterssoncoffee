<script lang="ts">
	import SkillList from '$lib/SkillList.svelte';

	const years = new Date().getFullYear() - 2018;
</script>

<svelte:head>
	<title>About</title>
</svelte:head>

<article class="content">
	<h1>About me</h1>

	<section>
		<p>
			I'm Thomas, a backend developer at <a href="https://tv2.no">TV 2</a> in Bergen. I work on
			APIs and image handling in Go, with Kubernetes, Kafka, Redis and Google Cloud in the stack.
		</p>
		<p>
			I love spending time building tools to simplify workflows, give users super powers and spotting performance flaws or security holes.
		</p>
		<p>
			Previously at <a href="https://unimicro.no">Uni Micro AS</a> doing fullstack: React and
			Angular frontend, REST APIs in ASP.NET. {years} years in software total.
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
