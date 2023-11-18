<script>
    import ButtonFilled from "$lib/ButtonFilled.svelte";
    import ButtonOutlined from "$lib/ButtonOutlined.svelte";
import Downloads from "$lib/Downloads.svelte";
import StarRating from "$lib/StarRating.svelte";

</script>

<svelte:head>
    <title>AnkiDroid</title>
    <meta name="description" content="AnkiDroid is an open source spaced repetition flashcard app for Android."/>
</svelte:head>

<div class="font-roboto text-on-surface">
    <h1 class="text-6xl mb-4 font-extrabold text-center">Remember <span class="text-primary">anything.</span></h1>
    <span class="block mx-auto w-fit space-x-4 mb-4">
        <StarRating stars={4.7} kReviews={110}/>
        <Downloads/>
    </span>
  
    <p class="text-center mb-4 md:w-1/4 mx-auto">AnkiDroid uses Anki, a proven spaced repetition system, to let you learn anything with minimal effort.</p>
    <span class="block w-fit mx-auto space-x-2">
        <ButtonFilled href="https://play.google.com/store/apps/details?id=com.ichi2.anki&utm_source=global_co&utm_medium=prtnr&utm_content=Mar2515&utm_campaign=PartBadge&pcampaignid=MKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1">
            Get the app
        </ButtonFilled>
        <ButtonOutlined href="https://docs.ankidroid.org">
            Read the docs
        </ButtonOutlined>
    </span>
    
</div>
