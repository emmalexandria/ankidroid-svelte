<script lang="ts">
    export let href: string;
</script>

<a class="inline-block box-border px-4 py-2 rounded-full border border-outline text-primary" target="_blank" {href}><slot/></a>