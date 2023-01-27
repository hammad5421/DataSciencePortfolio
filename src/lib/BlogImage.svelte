<script lang="ts">
  export let src: string;
  export let alt: string | undefined = undefined;
</script>

<figure class="my-6">
  <img
    class="mb-2 mx-auto"
    src="{ src }"
    alt="{ alt }"
  />
  <figcaption class="text-center text-slate-400 my-1 text-sm">
    <slot />
  </figcaption>
</figure>
