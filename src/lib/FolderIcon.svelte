<script>
    export let expanded = false;
    export let name;

    import FolderOpen from "$lib/icons/FolderOpenOutline.svelte";
    import Folder from "$lib/icons/FolderOutline.svelte";
</script>

{#if expanded}
    <FolderOpen/>
{:else}
    <Folder/>
{/if}

{name}

