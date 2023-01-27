<script lang="ts">
  import BlogTitle from '$lib/BlogTitle.svelte';
  import BlogSubtitle from '$lib/BlogSubtitle.svelte';
  import BlogAuthorAndDate from '$lib/BlogAuthorAndDate.svelte';

  export let title: string;
  export let subtitle: string;
  export let publicationDate: string;
</script>

<div class="space-y-2">
  <BlogTitle>{title}</BlogTitle>
  <BlogSubtitle>{subtitle}</BlogSubtitle>
  <BlogAuthorAndDate publicationDate={publicationDate} />
</div>