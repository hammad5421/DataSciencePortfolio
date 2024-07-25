import { animate } from 'motion';
import algoliasearch from 'algoliasearch/lite';
import type { SearchResult } from './SearchResult';

// Define config values...
const ALGOLIA_APP_ID = "6JMPFP5Q5Q";
const ALGOLIA_SEARCH_ONLY_API_KEY = "a72c924faecfd2dc137b114e029b7869";
const BLOG_INDEX_NAME = "prod_blogs";

// Init the client and index...
const searchClient = algoliasearch(ALGOLIA_APP_ID, ALGOLIA_SEARCH_ONLY_API_KEY);
const index = searchClient.initIndex(BLOG_INDEX_NAME);

const DEFAULT_RESULTS: SearchResType[] = [
  {
    title: "GitHub",
    url: "https://github.com/a-poor",
    excerpt: "Check out my GitHub profile for more projects!",
    icon: "github",
  },
  {
    title: "LinkedIn",
    url: "https://github.com/a-poor",
    excerpt: "Check out my LinkedIn profile and connect with me!",
    icon: "linkedin",
  },
  {
    title: "Blog",
    url: "/blog",
    excerpt: "Check out my latest blog posts!",
    icon: "blog",
  },
  {
    title: "About Me",
    url: "/about",
    excerpt: "Check out my about me page to learn more about me!",
    icon: "about",
  },
];

function debounce<T extends (...args: any[]) => void>(wait: number, callback: T): (...args: Parameters<T>) => void {
  let timeoutId: number | undefined;
  return (...args) => {
    window.clearTimeout(timeoutId);
    timeoutId = window.setTimeout(() => {
      callback(...args);
    }, wait);
  };
}

function runSearch(query: string, callback?: (results: AlgoliaSearchRes[]) => void) {
  // Search for the query...
  index.search(query, {
    hitsPerPage: 5,
  }).then(({ hits }) => callback?.(hits as any as AlgoliaSearchRes[]));
  window.plausible?.("search-query", { props: { text: query } });
}
const debouncedSearch = debounce(50, runSearch);

export type AlgoliaSearchRes = {
  objectID: string;
  id: string;
  slug: string;
  body: string;
  collection: string;
  data: {
    isDraft: boolean;
    title: string;
    subtitle: string;
    description: string;
    image: {
      src: string;
      alt: string;
      caption: string;
    };
    tags: string[];
    publishDate: string;
    updateDate: string;
    recommended: string[];
  };
  _snippetResult: {};
  _highlightResult: {};
  _rankingInfo: {};
};

export type SearchResType = {
  title: string;
  url: string;
  excerpt?: string;
  icon: string;
};

export class SearchModal extends HTMLElement {
  static observedAttributes = ['open'];

  constructor() {
    super();
  }

  connectedCallback() {
    // Init props for this element...
    this.setAttribute("open", "false");

    // Add event listeners...
    this.onclick = () => {
      this.setAttribute("open", "false");
      window.plausible?.("search-modal-close", { props: { method: "click-out" } });
    }

    // Get the inner container...
    const contentBox = this.querySelector(".search-modal-box") as HTMLElement;

    // Add listeners to the content box...
    contentBox.onclick = (e) => {
      e.stopPropagation();
    }

    // Create hotkey listeners...
    document.addEventListener("keydown", (e) => {
      // If open, close on escape...
      if (this.isOpen() && e.key === "Escape") {
        this.setAttribute("open", "false");
        e.preventDefault();
        window.plausible?.("search-modal-close", { props: { method: "key-escape" } });
      }

      // If closed, open on cmd/ctrl+k...
      if (!this.isOpen() && e.key === "k" && (e.metaKey || e.ctrlKey)) {
        this.setAttribute("open", "true");
        e.preventDefault();
        window.plausible?.("search-modal-open", { props: { method: "key-cmdk" } });
      }
    });

    // Get the input...
    const searchInput = this.querySelector("input") as HTMLInputElement;
    searchInput.addEventListener("keydown", e => {
      if (e.key === "Enter") {
        this.search();
      }
    });
    searchInput.addEventListener("input", () => {
      this.search();
    });
    this.search();
  }

  isOpen() {
    return this.getAttribute("open") === "true";
  }

  updateResults(results: SearchResType[]) {
    // Get the results container element...
    const resultsContainer = this.querySelector(".results-container") as HTMLUListElement;
    if (!resultsContainer) {
      console.error("Could not find results container!");
      return;
    }

    // Clear the current results...
    resultsContainer.innerHTML = "";

    // Add the new results...
    results.forEach(d => {
      const sr = document.createElement("search-result") as SearchResult;
      sr.setAttribute("title", d.title);
      sr.setAttribute("url", d.url);
      sr.setAttribute("excerpt", d.excerpt || "");
      sr.setAttribute("icon", d.icon);

      const result = document.createElement("li");
      result.appendChild(sr);

      resultsContainer.appendChild(result);
    });
  }

  search() {
    // Get the input...
    const searchInput = this.querySelector("input") as HTMLInputElement;
    const query = searchInput.value.trim();

    // If query is empty, clear the results...
    if (query === "") {
      this.updateResults(DEFAULT_RESULTS);
      return;
    }

    // Search for the query...
    debouncedSearch(query, (results) => {
      this.updateResults(results.map(r => ({
        title: r.data.title,
        url: `/blog/${r.slug}`,
        excerpt: r.data.description,
        icon: "blog",
      })));
    });
  }

  openModal() {
    // Show the modal...
    this.classList.remove("hidden");
    this.classList.add("flex");

    // Prevent scrolling on the body...
    const bodyInner = document.querySelector("#body-inner");
    bodyInner?.classList.remove("overflow-scroll");
    bodyInner?.classList.add("overflow-clip");
    bodyInner?.setAttribute("aria-hidden", "true");
    this.setAttribute("tabindex", "0");
    bodyInner?.setAttribute("tabindex", "-1");

    // Animate this element...
    animate(this, {
      opacity: [0, 1],
      scale: [0.25, 1],
      transform: ["translateY(25px)", "none"],
    }, {
      duration: 0.08,
      easing: "ease-out",
    }).finished.then(() => {
      // Focus the search box...
      const searchBox = this.querySelector("input") as HTMLInputElement;
      searchBox.focus();
    });
  }

  closeModal() {
    // Animate this element off...
    animate(this, {
      opacity: [1, 0],
      scale: [1, 0.25],
      transform: ["none", "translateY(25px)"],
    }, {
      duration: 0.05,
      easing: "ease-in",
    }).finished.then(() => {
      this.classList.add("hidden");
      this.classList.remove("flex");

      // Re-allow scrolling on the body...
      const bodyInner = document.querySelector("#body-inner");
      bodyInner?.classList.add("overflow-scroll");
      bodyInner?.classList.remove("overflow-clip");
      bodyInner?.removeAttribute("aria-hidden");
      this.removeAttribute("tabindex");
      bodyInner?.removeAttribute("tabindex");
    });
  }

  attributeChangedCallback(name: string, oldValue: string, newValue: string) {
    if (name === "open" && newValue === "true") {
      this.openModal();
    }
    if (name === "open" && newValue === "false") {
      this.closeModal();
    }
  }
}
customElements.define('search-modal', SearchModal);
