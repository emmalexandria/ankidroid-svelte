<script lang="ts">
    export let href: string;
</script>

<a target="_blank" class="bg-primary text-on-primary px-4 py-2 rounded-full font-bold" {href}><slot/></a>