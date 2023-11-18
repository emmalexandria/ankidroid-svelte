<script lang="ts">
    export let href: string;

</script>

<li class="text-2xl text-on-surface-variant font-bold hover:text-primary"><a {href}><slot/></a></li>