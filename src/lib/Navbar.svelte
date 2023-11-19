<script>
    import GithubStars from "./GithubStars.svelte";
import HamburgerMenu from "./HamburgerButton.svelte";
    import NavItem from "./NavItem.svelte";

    let opened = false;

    const navClicked = () => {
        opened = !opened;
    };
</script>

<div class="relative font-roboto">
    <div class="flex flex-row relative items-center">
        <span class="flex flex-row items-center grow">
            <img
                class="h-12 w-auto"
                src="ankidroid_logo.png"
                alt="AnkiDroid Logo"
                height="512"
                width="512"
            />
            <h1 class="text-4xl font-bold hidden md:inline-block">Ankidroid</h1>
        </span>
        <span class="block md:hidden">
            <HamburgerMenu {opened} on:click={navClicked} />
        </span>
        <nav class="hidden md:block">
            <ul class="flex flex-row space-x-8">
                <NavItem href="about">About</NavItem>
                <NavItem href="community">Community</NavItem>
                <GithubStars>7.2k</GithubStars>
            </ul>
        </nav>
    </div>

    {#if opened}
        <nav class="absolute md:hidden">
            <ul>
                <li>Community</li>
                <li>About</li>
            </ul>
        </nav>
    {/if}
</div>
