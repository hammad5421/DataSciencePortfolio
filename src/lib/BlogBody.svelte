<script lang="ts">
  import BlogBackButton from '$lib/BlogBackButton.svelte';
  import BlogCTA from '$lib/BlogCTA.svelte';
</script>

<article class="bg-gray-900 pt-8 pb-12 -mb-12">
  <div class="mx-auto max-w-4xl px-8 sm:px-14 space-y-8 text-base text-slate-200">
    
    <BlogBackButton />

    <slot />

    <hr />

    <BlogCTA />

  </div>
</article>
