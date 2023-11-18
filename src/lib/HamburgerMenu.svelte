<script lang="ts">
    export let opened: boolean;
</script>

{#if !opened}
    <button on:click>Open nav</button>
{:else}
    <button on:click>Close nav</button>
{/if}
