<script lang="ts">
  export let activePage: "home" | "projects" | "blog" | "about" | "contact";

  let hilightedStyle = "font-semibold text-gray-200 underline underline-offset-8";
  let unHilightedStyle = "font-medium text-gray-300";
</script>

<div class="sticky top-0 z-50 bg-slate-700">
  <div class="flex items-center justify-between px-4 py-3 sm:py-6 sm:px-8">
    <a href="/" class="flex items-center mb-2 sm:mb-1">
      <img class="h-8 w-auto sm:h-10" src="/nav-icon.svg" alt="AustinPoor.com">
      <span class="text-sm sm:text-xl font-mono font-semibold px-1 sm:px-2 pt-0.5 mb-1 text-gray-200">Austin Poor</span>
    </a>
    <nav class="flex flex-wrap justify-end space-x-2 mr-1 sm:mr-2 sm:space-x-7 pl-2 text-sm sm:text-base sm:pt-0.5 font-mono uppercase">
      <a href="/" class="hover:text-gray-500 mb-2 { activePage === "home" ? hilightedStyle : unHilightedStyle }">Home</a>
      <a href="/about" class="hover:text-gray-500 mb-2 { activePage === "about" ? hilightedStyle : unHilightedStyle }">About</a>
      <a href="/blog" class="hover:text-gray-500 mb-2 { activePage === "blog" ? hilightedStyle : unHilightedStyle }">Blog</a>
      <a href="/projects" class="hover:text-gray-500 mb-2 { activePage === "projects" ? hilightedStyle : unHilightedStyle }">Projects</a>
      <a href="/contact" class="hover:text-gray-500 mb-2 { activePage === "contact" ? hilightedStyle : unHilightedStyle }">Contact</a>
    </nav>
  </div>
</div>
