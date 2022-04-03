<script lang="ts">
	import SkillList from "$lib/SkillList.svelte";
</script>

<svelte:head>
	<title>About</title>
</svelte:head>

<article class="content">
	<h1>About me</h1>

	<section>
		<p>
			Hello! My name is Thomas and I'm a full-stack developer working for <a href="https://unimicro.no">Uni Micro AS</a> in Bergen. 
			I have a passion for system architecture and performance optimization. 
			I have been working with software development for 4&nbsp;years, creating and maintaining frontend with different frameworks and REST APIs in ASP.NET.
		</p>
		<SkillList />
	</section>
</article>

<style>
	h1, p {
		font-family: var(--font-mono);
	}
	.content {
		width: 100%;
		max-width: var(--column-width);
		margin: var(--column-margin-top) auto 0 auto;
	}
</style>
