export class SearchResult extends HTMLElement {
    static observedAttributes = ['title', 'url', 'excerpt', 'icon'];
    
    constructor() {
        super();
    }
    
    connectedCallback() {
        this.innerHTML = `
            <a href="" class="flex space-x-2 px-2 py-1 hover:bg-zinc-500/25 rounded-md">
                <div class="flex items-center">
                    <search-res-icon class="sri"></search-res-icon>
                </div>
                <div class="flex-grow">
                    <h3 class="text-lg font-semibold"></h3>
                    <p class="text-sm line-clamp-2"></p>
                </div>
            </a>
        `;
        const {
            title,
            url,
            excerpt,
            icon,
        } = this.getAttrs();
        this.updateTitle(title || "");
        this.updateURL(url || "#");
        this.updateExcerpt(excerpt || "");
        this.updateIcon(icon || "");
    }

    getAttrs() {
        return {
            title: this.getAttribute("title"),
            url: this.getAttribute("url"),
            excerpt: this.getAttribute("excerpt"),
            icon: this.getAttribute("icon"),
        };
    }

    attributeChangedCallback(name: string, oldValue: string, newValue: string) {
        if (!this.isConnected) {
            return;
        }

        if (name === "title") {
            this.updateTitle(newValue);
        }
        if (name === "url") {
            this.updateURL(newValue);
        }
        if (name === "excerpt") {
            this.updateExcerpt(newValue);
        }
        if (name === "icon") {
            this.updateIcon(newValue);
        }
    }

    updateTitle(title: string) {
        const h3 = this.querySelector("h3");
        if (h3) {
            h3.innerHTML = title;
        }
    }

    updateURL(url: string) {
        const a = this.querySelector("a");
        if (a) {
            a.href = url;
        }
    }

    updateExcerpt(excerpt: string) {
        const p = this.querySelector("p");
        if (p) {
            p.innerHTML = excerpt;
        }
    }

    updateIcon(iconName: string) {
        const sri = this.querySelector("search-res-icon") as (HTMLElement & {icon: string});
        if (sri) {
            sri.setAttribute("icon", iconName);
        }
    }
}
customElements.define('search-result', SearchResult);
