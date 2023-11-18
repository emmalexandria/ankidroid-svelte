<script lang="ts">
    export let stars: number;
    export let kReviews: number;
</script>

<div class="inline-block text-center">
    <p class="text-2xl">
        {stars}
    </p>
    <p class="text-xs text-on-surface-variant">
        {kReviews}k reviews
    </p>
    
</div>