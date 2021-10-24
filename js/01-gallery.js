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

function onGalleryClick(event) {
  event.preventDefault();

  const instance = basicLightbox
    .create(
      `
  <div class="modal">
  <img src="${event.target.dataset.source}" class="modal__img" width="1080" height="720">
  </div>
`,
      {
        onShow: (instance) => {
          window.addEventListener("keydown", onKeyboardClick);
          function onKeyboardClick(event) {
            if (event.code === "Escape") {
              instance.close();
              window.removeEventListener("keydown", onKeyboardClick);
            }
          }

          instance
            .element()
            .querySelector(".modal__img")
            .addEventListener("click", () => {
              instance.close();
            });
        },
      }
    )
    .show();
}
console.log(galleryItems);
