<script lang="ts">
    import Icon from "@iconify/svelte";

    export let opened: boolean;
</script>

<div class="text-3xl">
{#if !opened}
    <button on:click><Icon icon="mdi:menu"/></button>
{:else}
    <button on:click><Icon icon="mdi:close"/></button>
{/if}
</div>
