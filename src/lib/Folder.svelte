<script>
    import File from './File.svelte';
    import FolderIcon from './FolderIcon.svelte';
    import Folder from './Folder.svelte';
    import { toggleAll } from "./folderToggleStore";

    let { expanded = $bindable(false), showExpandAll = false, name, files, level = 1 } = $props();

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
    <button class="heading h2" onclick={toggle}>
        <FolderIcon {expanded} {name}/>
    </button>
{:else if level === 2}
    <button class="heading h3" onclick={toggle}>
        <FolderIcon {expanded} {name}/>
    </button>
{:else if level === 3}
    <button class="heading h4" onclick={toggle}>
        <FolderIcon {expanded} {name}/>
    </button>
{/if}

{#if showExpandAll}
    <button onclick={toggleAllHandler}>Toggle all</button>
{/if}
</div>


{#if expanded || $toggleAll}

    <ul>
        {#each files as file}
            {#if file.files}
                <Folder {...file} level={level + 1} />
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

    button.heading {
        text-decoration: none;
        color: var(--heading-color);
        font-family: var(--font-mono);
        margin: .5rem;
        padding: 0;
        font-weight: 400;
    }

    button.h2 { font-size: 2rem; }
    button.h3 { font-size: 1.5rem; }
    button.h4 { font-size: 1rem; }

    li {
        font-family: var(--font-mono);
        margin: .5rem;
    }

    ul {
        list-style: none;
    }
</style>
