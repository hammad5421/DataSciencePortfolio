<script lang="ts">
  export let src: string;
  export let alt: string;
  export let author: string;
  export let authorUsername: string;
</script>

<figure class="my-6">
  <img
    class="mb-2 mx-auto"
    src="{ src }"
    alt="{ alt }"
  />
  <figcaption class="text-center text-slate-400 my-1 text-sm">
    Photo by <a class="underline" href="https://unsplash.com/{authorUsername}">{ author }</a> on <a class="underline" href="https://unsplash.com">Unsplash</a>
  </figcaption>
</figure>
