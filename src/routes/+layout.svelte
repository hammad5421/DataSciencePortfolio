<script>
  import Footer from '$lib/Footer.svelte';
  import "../app.css";
</script>

<slot />
<Footer />

<style lang="postcss">
  :global(html) {
    background-color: theme(colors.slate.800);
    color: theme(colors.slate.300);
  }
</style>
