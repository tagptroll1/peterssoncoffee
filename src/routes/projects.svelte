<script lang="ts">
    import type { GithubRepository } from "src/app";
    export let projects: { public: GithubRepository[], private: GithubRepository[] };

</script>

<section>
    NB! This is a work in progress
    <h1>Websites</h1>
    <ul>
        <li>
            <a href="https://cryptopris.no/">Cryptopris</a>
        </li>
    </ul>

    <h1>Public repositories</h1>
    {#each projects.public as project}
        <article>
            <a href={`/project-${project.name}`}>
                <h2>{project.name}</h2>
                <p>{project.description ?? "No Description"}</p>
            </a>
        </article>
    {/each}


    <h1>Private repositories</h1>
    {#each projects.private as project}
        <article>
            <a href={`/project-${project.name}`}>
                <h2>{project.name}</h2>
                <p>{project.description ?? "No Description"}</p>
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

    ul {
        list-style: none;
        padding: 0;
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
        width: 50%
    }
</style>