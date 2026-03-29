<script lang="ts">
	import type { PageData } from './$types';

	let { data }: { data: PageData } = $props();
</script>

<svelte:head>
	<title>{data.repository.name}</title>
</svelte:head>

<h1>{data.repository.name}</h1>
<p>{data.repository.description ?? 'No Description'}</p>
<a href={data.repository.html_url}>{data.repository.html_url}</a>
