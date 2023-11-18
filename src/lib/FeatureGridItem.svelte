<script lang="ts">
    export let title: string;
</script>

<div class="border border-outline/25 rounded-md bg-surface px-4 py-2">
    <h1 class="text-3xl font-semibold">{title}</h1>
    <slot/>
</div>