<script lang="ts">
    import Icon from "@iconify/svelte";

    export let opened: boolean;
</script>

<div class="text-3xl">
{#if !opened}
    <button on:click name="Open navigation"><Icon icon="mdi:menu"/></button>
{:else}
    <button on:click name="Close navigation"><Icon icon="mdi:close"/></button>
{/if}
</div>
