<script>
    import "../app.css"
    import "@fontsource-variable/roboto-flex/full.css"

    import Navbar from "$lib/Navbar.svelte";

</script>
<header class="bg-background">
    <Navbar/>
</header>
<main class="bg-background">
    <slot/>
</main>
<footer class="bg-background">

</footer>
