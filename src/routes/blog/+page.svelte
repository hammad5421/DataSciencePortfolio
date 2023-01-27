<script lang="ts">
  import blogData from './blog-data.json';

  interface BlogEntry {
    title: string;
    date: string;
    description: string;
    link: string;
    tags: string[];
  }

  const blogPosts = blogData as BlogEntry[];
</script>

<svelte:head>
  <title>Austin's Blog</title>
</svelte:head>

<div class="relative mb-10 bg-slate-900 px-12 py-20 md:py-24">
  <h2 class="text-center text-3xl font-bold leading-8 tracking-tight text-gray-300 sm:text-4xl">
    Blog
  </h2>
  <div class="mx-auto mt-4 max-w-3xl text-center text-xl text-gray-500 space-y-2">
    <p>
      Check out some blog posts I've written about various topics.
    </p>
    <p>
      I don't post very often, but I try to make each post count.
    </p>
  </div>
</div>

<!-- List of the blog posts -->
<div class="grid gap-5 grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 mx-12">
  {#each blogPosts as blogPost}
    <a 
      class="
        flex 
        flex-col
        rounded-lg 
        px-3 
        pt-2 
        pb-4
        border 
        border-slate-700
        bg-slate-900
        "
      href={blogPost.link}
    >
      <p class="text-gray-500">
        { blogPost.date }
      </p>
      <h3 class="text-lg font-semibold">
        { blogPost.title }
      </h3>
      <p class="mb-4 tracking-tight">
        { blogPost.description }
      </p>
      <div class="flex-grow"/>
      <div class="inline-flex flex-wrap mb-4">
        {#each blogPost.tags as tag}
          <div class="text-xs font-bold mr-1 mb-1 px-2 pt-0.5 font-mono uppercase tracking-tight rounded-xl bg-slate-600">
            { tag }
          </div>
        {/each}
      </div>
      <p>
        <a 
          class="
            rounded-lg 
            px-2 
            py-1 
            bg-sky-700 
            text-slate-200
            
            hover:bg-sky-500
            hover:text-slate-100
            "
          href={blogPost.link} 
        >
          Read More
        </a>
      </p>
    </a>
  {/each}
</div>

