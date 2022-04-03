<script>
    export let expanded = false;
    export let name;

    import FolderOpen from "svelte-material-icons/FolderOpenOutline.svelte";
    import Folder from "svelte-material-icons/FolderOutline.svelte";
</script>

{#if expanded}
    <FolderOpen/>
{:else}
    <Folder/>
{/if}

{name}

