<script lang="ts">
    export let stars: number;
    export let kReviews: number;

    import Icon from "@iconify/svelte"
</script>

<div class="inline-block text-center">
    <span class="flex flex-row items-center w-fit mx-auto text-2xl">
        <p>
            {stars}
        </p>
        <Icon icon="mdi:star"/>
    </span>
    
    <p class="text-xs text-on-surface-variant">
        {kReviews}k reviews
    </p>
    
</div>