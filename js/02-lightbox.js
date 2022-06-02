import { galleryItems } from "./gallery-items.js";
// Change code below this line

// ===========================================================

const refs = {
  galleryList: document.querySelector(".gallery"),
};

const galleryListCreat = galleryItems
  .map((item) => {
    const renderList = `
    <a class="gallery__item" href="${item.original}">
        <img class="gallery__image" src="${item.preview}" alt="${item.description}" />
    </a>`;
    return renderList;
  })
  .join("");

refs.galleryList.innerHTML = galleryListCreat;

// ================================================================

var lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});

refs.galleryList.addEventListener("click", onGalleryImgClick);

function onGalleryImgClick(e) {
  e.preventDefault();

  if (e.target.nodeName !== "IMG") {
    return;
  }
}

console.log(galleryItems);
