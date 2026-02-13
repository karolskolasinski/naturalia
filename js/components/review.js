class Review extends HTMLElement {
  static observedAttributes = ["data-content", "data-name", "data-position"];

  constructor() {
    super();
    const content = this.getAttribute("data-content");
    const name = this.getAttribute("data-name");
    const city = this.getAttribute("data-city");

    const star = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" class="min-w-7 h-7 fill-amber-300">
  <path d="m233-120 65-281L80-590l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z" />
</svg>
`;
    const stars = new Array(5).fill(star).join("");

    this.innerHTML = `
<div class="flex pb-4">
  ${stars}
</div>

${content}

<div class="pt-4 flex gap-4 items-center">
  <div class="flex flex-col">
    <strong>${name}</strong>
    <i class="text-gray-400">${city}</i>
  </div>
</div>
`;
  }
}

customElements.define("x-review", Review);
