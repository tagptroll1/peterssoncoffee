<script>
    import File from './File.svelte';
    import FolderIcon from './FolderIcon.svelte';
    import { toggleAll } from "./folderToggleStore";
    
    export let expanded = false;
    export let showExpandAll = false;
    export let name;
    export let files;
    export let level = 1;

    function toggle() {
        expanded = !expanded;
        $toggleAll = false;
    }

    function toggleAllHandler() {
        $toggleAll = !$toggleAll;
        expanded = $toggleAll;
    }
</script>

<div class="header">

{#if level === 1}
    <h2 on:click={toggle}>
        <FolderIcon {expanded} {name}/>
    </h2>
{:else if level === 2}
    <h3 on:click={toggle}>
        <FolderIcon {expanded} {name}/>
    </h3>
{:else if level === 3}
    <h4 on:click={toggle}>
        <FolderIcon {expanded} {name}/>
    </h4>
{/if}

{#if showExpandAll}
    <button on:click={toggleAllHandler}>Toggle all</button>
{/if}
</div>


{#if expanded || $toggleAll}

    <ul>
        {#each files as file}
            {#if file.files}
                <svelte:self {...file} level={level + 1} />
            {:else}
                <li>
                    <File filename={file}/>
                </li>
            {/if}
        {/each}
    </ul>

{/if}


<style>
    .header {
        display: flex;
        align-items: flex-end;
        gap: .5rem;
    }

    .header button {
        height: 2rem;
        border: none;
        background: none;
        text-decoration: underline;
        color: var(--accent-color);
        cursor: pointer;
        margin-bottom: 7px;
    }

    h2, h3, h4, li
    {
        font-family: var(--font-mono);
        margin: .5rem;
    }

    ul {
        list-style: none;
    }
</style>