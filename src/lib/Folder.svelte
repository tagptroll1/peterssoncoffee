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
        align-items: center;
        justify-content: space-between;
        gap: .5rem;
    }

    .header button {
        border: none;
        background: none;
        cursor: pointer;
    }

    .header > button:not(.heading) {
        font-family: var(--font-mono);
        font-size: var(--text-2xs);
        text-transform: uppercase;
        letter-spacing: var(--tracking-wide);
        color: var(--accent-strong);
        padding: .1rem .3rem;
    }

    .header > button:not(.heading):hover {
        text-decoration: underline;
    }

    button.heading {
        display: inline-flex;
        align-items: center;
        gap: .45rem;
        text-decoration: none;
        color: var(--text-strong);
        font-family: var(--font-mono);
        font-weight: var(--weight-medium);
        padding: .25rem 0;
        transition: color var(--dur-base) var(--ease-out);
    }

    button.heading:hover {
        color: var(--accent-strong);
    }

    /* folder glyph tinted copper */
    button.heading :global(svg) {
        color: var(--accent);
        flex-shrink: 0;
    }

    button.h2 { font-size: var(--text-base); }
    button.h3 { font-size: var(--text-sm); color: var(--text-body); }
    button.h4 { font-size: var(--text-sm); color: var(--text-muted); }

    li {
        font-family: var(--font-mono);
        font-size: var(--text-sm);
        color: var(--text-muted);
        padding: .15rem 0;
    }

    ul {
        list-style: none;
        margin: .1rem 0 .1rem .55rem;
        padding-left: .9rem;
        border-left: 1px solid var(--border);
    }
</style>
