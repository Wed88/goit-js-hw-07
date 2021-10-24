import { galleryItems } from "./gallery-items.js";
// Change code below this line
const galleryEl = document.querySelector(".gallery");

const galleryItemsMarkup = galleryItems
  .map(
    (item) =>
      `<a class="gallery__item" href="${item.original}">
          <img
            class="gallery__image"
            src="${item.preview}"
            alt="${item.description}"
          />
        </a>`
  )
  .join("");

galleryEl.insertAdjacentHTML("afterbegin", galleryItemsMarkup);

const lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: "250",
});

console.log(galleryItems);
// console.log(galleryItemsMarkup);
