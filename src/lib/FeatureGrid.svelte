<script>
    import FeatureGridItem from "./FeatureGridItem.svelte";

</script>
<div class="grid grid-cols-2 grid-rows-2 gap-2">
    <FeatureGridItem title="Fast">
        <p>
            Spaced repetition gives you the ability to memorise hundreds of cards with tens of daily reviews.
        </p>
    </FeatureGridItem>
    <FeatureGridItem title="Free">
        <p>
            AnkiDroid is free and open source. Forever.
        </p>

            <a class="text-xs" href="/community">Learn how to contribute</a>        
        
    </FeatureGridItem>
    <FeatureGridItem title="Extensible">
        <p>
            Strong plugin support will let you customise and extend AnkiDroid to make any card you can imagine.
        </p>
        
    </FeatureGridItem>
    <FeatureGridItem title="Easy">
        <p>
            Card making is simple and intuitive, and all options are set to sane defaults.
        </p>
    </FeatureGridItem>

</div>