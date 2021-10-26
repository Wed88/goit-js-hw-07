import { galleryItems } from "./gallery-items.js";
// Change code below this line
const galleryEl = document.querySelector(".gallery");

const galleryItemsMarkup = galleryItems
  .map(
    (item) =>
      `<div class="gallery__item">
  <a class="gallery__link"  href="${item.original}">
    <img
      class="gallery__image"
      src="${item.preview}"
      data-source="${item.original}"
      alt="${item.description}"
    />
  </a>
</div>`
  )
  .join("");

galleryEl.insertAdjacentHTML("afterbegin", galleryItemsMarkup);

galleryEl.addEventListener("click", onGalleryClick);

const instance = basicLightbox.create(`<img src="" />`, {
  onShow: () => {
    window.addEventListener("keydown", keydownEscape);
  },
  onClose: () => {
    window.removeEventListener("keydown", keydownEscape);
  },
});

function keydownEscape(event) {
  if (event.key === "Escape") {
    instance.close();
    return;
  }
}

function onGalleryClick(event) {
  event.preventDefault();

  instance.element().querySelector("img").src = event.target.dataset.source;
  if (!event.target.dataset.source) return;
  instance.show();
}
