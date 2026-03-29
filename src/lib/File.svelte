<script lang="ts">
    import FileOutline from "$lib/icons/FileOutline.svelte";
    import { techIcons } from "$lib/techIcons";

    let { filename }: { filename: string } = $props();

    const Icon = techIcons[filename];
</script>

<span class="file">
    {#if Icon}
        <Icon size={16} />
    {:else}
        <FileOutline />
    {/if}
    {filename}
</span>

<style>
    .file {
        display: inline-flex;
        align-items: center;
        gap: 0.4rem;
    }
</style>
