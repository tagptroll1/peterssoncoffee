<script lang="ts">
	import Header from '$lib/header/Header.svelte';
	import '../app.css';

	import Twitter from '$lib/icons/Twitter.svelte'; 
	import LinkedIn from '$lib/icons/Linkedin.svelte';
	import Github from '$lib/icons/Github.svelte';
import Xml from '$lib/icons/Xml.svelte';
</script>

<Header />

<aside>
	<a href="https://www.github.com/tagptroll1/peterssoncoffee" title="Source code">
		<Xml />
	</a>

	<a href="https://www.twitter.com/tagptroll1">
		<Twitter />
	</a>
	
	<a href="https://www.linkedin.com/in/thomasagpetersson/">
		<LinkedIn />
	</a>
	
	<a href="https://www.github.com/tagptroll1">
		<Github />
	</a>
</aside>
<main>
	<slot />
</main>


<style>
	main {
		display: flex;
		flex-direction: column;
		padding: 1rem;
		width: 100%;
		max-width: 1024px;
		min-height: 80vh;
		margin: 0 auto;
		box-sizing: border-box;
	}

	aside {
		height: 100%;
		padding-bottom: 160px;

		display: flex;
		flex-direction: column-reverse;
		gap: 1rem;

		position: fixed;
		bottom: 0;
		left: 5%;
		
		font-size: 3rem;
	}

	aside a {
		color: var(--text-color);
	}

	aside::after {
		content: '';
		display: block;
		width: 1px;
		height: 150px;

		position: absolute;
		bottom: 0;
		left: 50%;

		background: var(--text-color);
	}

</style>
