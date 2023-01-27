<script>
  import Nav from '$lib/Nav.svelte';

  const linkData = [
    {
      name: "Email",
      value: "hello@austinpoor.com",
      href: "mailto:hello@austinpoor.com",
    },
    {
      name: "GitHub",
      value: "a-poor",
      href: "https://github.com/a-poor",
    },
    {
      name: "LinkedIn",
      value: "/in/austinpoor",
      href: "https://linkedin.com/in/austinpoor",
    },
    {
      name: "Twitter",
      value: "austin_poor",
      href: "https://twitter.com/austin_poor",
    },
    {
      name: "Mastodon",
      value: "@austinpoor@mastodon.social",
      href: "https://mastodon.social/@austinpoor",
    },
    {
      name: "Medium",
      value: "@apoor",
      href: "https://medium.com/@apoor",
    },
  ];
</script>

<svelte:head>
  <title>About Austin</title>
</svelte:head>

<Nav activePage={"contact"} />

<!-- Page Header -->
<div class="relative bg-slate-900 px-8 py-20 md:py-24">
  <h2 class="text-center text-3xl font-bold leading-8 tracking-tight text-gray-300 sm:text-4xl">
    Contact Me
  </h2>
  <div class="mx-auto mt-4 max-w-3xl text-center text-xl text-gray-500 space-y-2">
    <p>
      I'd love to hear from you! Choose your preferred method of contact below.
    </p>
  </div>


  <table class="table-auto mt-10 mx-auto text-lg font-mono">
    {#each linkData as link}
      <tr class="mb-2">
        <td class="pr-2 text-right text-gray-300">
          { link.name }:
        </td>
        <td class="">
          <a
            class="underline text-gray-50" 
            href={ link.href }
          >
            { link.value }
          </a>
        </td>
      </tr>
    {/each}
  </table>
  

</div>
