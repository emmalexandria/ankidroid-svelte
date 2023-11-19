<script>
    import "../app.css"
    import "@fontsource-variable/roboto-flex/full.css"

    import Navbar from "$lib/Navbar.svelte";

</script>
<header class="p-4 md:p-8">
    <Navbar/>
</header>
<main class="px-4 md:px-8">
    <slot/>
</main>
<footer class="px-4 md:px-8">

</footer>
