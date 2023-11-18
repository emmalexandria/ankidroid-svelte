<script>
    import "../app.css"
    import "@fontsource-variable/roboto-flex/full.css"

    import Navbar from "$lib/Navbar.svelte";

</script>
<header class="bg-surface">
    <Navbar/>
</header>
<main class="bg-surface">
    <slot/>
</main>
<footer class="bg-surface">

</footer>
