<script>
  import Nav from '$lib/Nav.svelte';
  import Divider from '$lib/Divider.svelte';
  import GitHubIcon from '$lib/icons/GitHubIcon.svelte';
  import LinkedInIcon from '$lib/icons/LinkedInIcon.svelte';
  import MastodonIcon from '$lib/icons/MastodonIcon.svelte';
  import TwitterIcon from '$lib/icons/TwitterIcon.svelte';
</script>

<svelte:head>
  <title>Austin Poor</title>
</svelte:head>

<Nav activePage={"home"} />

<!-- Main section component -->
<div class="px-12 py-20 md:py-24 flex bg-slate-900 md:space-x-6 flex-col md:flex-row">
  <div class="md:flex-grow" />
  <img 
    class="w-64 rounded-full self-center pb-4" 
    src="/propic-square.jpg" 
    alt="Austin, for reference."
  />
  <div class="flex flex-col content-center pt-4 md:pt-0 self-center">
    <div class="grow" />
    <h1 class="text-4xl font-bold tracking-tight mb-2 text-gray-200">
      Hi, I'm Austin!
    </h1>
    <div class="text-lg md:text-xl font-medium mb-5 text-gray-300 tracking-tight space-y-3">
      <p>I'm a full-stack developer living in Los Angeles, CA.</p>
      <p>I enjoy working with data, building APIs, and designing interfaces.</p>
    </div>
    <div class="flex space-x-4">
      <a href="https://github.com/a-poor">
        <GitHubIcon />
      </a>
      <a href="https://linkedin.com/in/austinpoor">
        <LinkedInIcon />
      </a>
      <a href="https://twitter.com/austin_poor">
        <TwitterIcon />
      </a>
      <a href="https://mastodon.social/@austinpoor" rel="me">
        <MastodonIcon />
      </a>
    </div>
    <div class="grow" />
  </div>
  <div class="md:flex-grow" />
</div>

<!-- About Me -->
<div class="relative px-8 mt-8">
  <h2 class="text-center text-3xl font-bold leading-8 tracking-tight text-gray-300 sm:text-4xl">
    About Me
  </h2>
  <p class="mx-auto mt-4 max-w-3xl text-center text-xl text-gray-500">
    Looking for more info about me?
  </p>
  <p class="mx-auto mt-4 max-w-3xl text-center text-xl text-gray-500">
    Check out my <a href="/about" class="text-blue-500 hover:text-blue-400">about page</a>.
  </p>
</div>
<Divider />

<!-- Blog Posts -->
<div class="relative px-8">
  <h2 class="text-center text-3xl font-bold leading-8 tracking-tight text-gray-300 sm:text-4xl">
    Blog Posts
  </h2>
  <p class="mx-auto mt-4 max-w-3xl text-center text-xl text-gray-500">
    From time to time, I write about things I've learned. 
  </p>
  <p class="mx-auto mt-4 max-w-3xl text-center text-xl text-gray-500">
    Check out my <a href="/blog" class="text-blue-500 hover:text-blue-400">blog</a>.
  </p>
</div>
<Divider />

<!-- Projects -->
<div class="relative px-8">
  <h2 class="text-center text-3xl font-bold leading-8 tracking-tight text-gray-300 sm:text-4xl">
    Projects
  </h2>
  <p class="mx-auto mt-4 max-w-3xl text-center text-xl text-gray-500">
    Want to see what I've been working on recently?
  </p>
  <p class="mx-auto mt-4 max-w-3xl text-center text-xl text-gray-500">
    Check out my <a href="/projects" class="text-blue-500 hover:text-blue-400">projects</a>.
  </p>
</div>
<Divider />

<!-- Contact Me -->
<div class="relative px-8">
  <h2 class="text-center text-3xl font-bold leading-8 tracking-tight text-gray-300 sm:text-4xl">
    Contact Me
  </h2>
  <p class="mx-auto mt-4 max-w-3xl text-center text-xl text-gray-500">
    Want to reach out to me?
  </p>
  <p class="mx-auto mt-4 max-w-3xl text-center text-xl text-gray-500">
    <a href="/contact" class="text-blue-500 hover:text-blue-400">Click here!</a>
  </p>
</div>

