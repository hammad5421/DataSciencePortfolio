<script lang="ts">
  interface Project {
    name: string;
    description: string;
    url: string;
  }

  const projects: Project[] = [
    {
      name: "Algorithmic Color Palettes",
      description: "Using clustering algorithms to create color palettes from movie stills.",
      url: "https://github.com/a-poor/color-palettes",
    },
    {
      name: "vhttp",
      description: "A simple HTTP testing library for Go.",
      url: "https://github.com/a-poor/vhttp",
    },
    {
      name: "Predicting Spotify Track Skips",
      description: "Using a dataset of listening sessions to predict whether or not a user would skip a given track.",
      url: "https://github.com/a-poor/spotify-skip-prediction",
    },
    {
      name: "Chrome Dino-Game Solver",
      description: "Using reinforcement learning and Selenium to play the Chrome no-internet-dino-game and comparing the results to a heuristic approach.",
      url: "https://github.com/a-poor/chrome-dino-solver",
    },
    {
      name: "ssh.austinpoor.com",
      description: "A sample a TUI SSH server built with Go, Wish, and Lipgloss. Give it a try with `$ ssh ssh.austinpoor.com`!",
      url: "https://github.com/a-poor/apoor-ssh",
    },
    {
      name: "Password Generator",
      description: "A PoC of a password generator GUI app built with Rust, Tauri, and Svelte.",
      url: "https://github.com/a-poor/password-generator",
    },
    {
      name: "bcrypt-rsjs",
      description: "A PoC of a bcrypt password-hashing library for Node.js, written in Rust and Neon - designed to replace bcrypt, which uses C++.",
      url: "https://github.com/a-poor/bcrypt-rsjs",
    },
    {
      name: "Handling ML Predictions in a Flask App",
      description: "Handling long-running processes (like ML model predictions) inside a Flask app using Celery.",
      url: "https://github.com/a-poor/flask-celery-ml",
    },
    {
      name: "fun-run",
      description: "A CLI for executing multiple processes in parallel -- like docker-compose without the containers.",
      url: "https://github.com/a-poor/fun-run",
    },
    {
      name: "Political Text Classification with LSTMs",
      description: "Using Deep Learning and LSTMs to attempt to predict the political leaning of a news articles.",
      url: "https://github.com/a-poor/PoliticalTextClassification",
    },
    {
      name: "Visualizing Grover's Algorithm with Processing",
      description: "A visualization of Grover's Algorithm -- a quantum algorithm for unstructured search -- written in Processing.",
      url: "https://github.com/a-poor/ProcessingGroversAlgorithm",
    },
  ];
</script>

<svelte:head>
  <title>Austin's Projects</title>
</svelte:head>

<div class="relative bg-slate-900 px-8 py-20 md:py-24">
  <h2 class="text-center text-3xl font-bold leading-8 tracking-tight text-gray-300 sm:text-4xl">
    Projects
  </h2>
  <div class="mx-auto mt-4 max-w-3xl text-center text-xl text-gray-500 space-y-2">
    <p>
      Want to see what I've been working on?
    </p>
    <p>
      Check out some of my recent projects below.
    </p>
  </div>
</div>

<!-- Projects -->
<div class="grid gap-5 grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 mx-8 my-8">
  {#each projects as project}
    <a class="
      flex
      flex-col
      rounded-lg 
      px-3 
      pt-2 
      pb-3 
      border 
      border-slate-700
      bg-slate-900
      
      hover:border-slate-400
      hover:bg-slate-800
      "
      href={project.url}
    >
      <h2 class="text-lg font-semibold tracking-tight text-slate-200 mb-1">
        { project.name }
      </h2>
      
      <p class="text-slate-400 mb-4">
        { project.description }
      </p>

      <div class="flex-grow" />

      <p class="my-4">
        <a 
          class="rounded-lg px-2 py-1 bg-sky-700 hover:bg-sky-500" 
          href={project.url}
        >
          View on GitHub
        </a>
      </p>
    </a>
  {/each}
</div>
