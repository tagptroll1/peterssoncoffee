<script lang="ts">
    import type { GithubRepository } from "src/app";
    export let repository: GithubRepository;
</script>


<h1>{repository.name}</h1>
<p>{repository.description ?? "No Description"}</p>
<a href={repository.html_url}>{repository.html_url}</a>


