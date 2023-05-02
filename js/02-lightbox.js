import { galleryItems } from "./gallery-items.js";
// Change code below this line

const gallery = galleryItems
  .map(
    (item) =>
      `<li class="gallery__item">
        <a class="gallery__link" href=${item.original}>
            <img class="gallery__image" src=${item.preview} alt=${item.description} title=${item.description} />
        </a>
    </li>
    `
  )
  .join("");

const galleryContainer = document.querySelector(".gallery");

galleryContainer.innerHTML = gallery;

galleryContainer.addEventListener("click", (e) => {
  e.preventDefault();

  if (e.target.nodeName !== "IMG") {
    return;
  }

  const imgTarget = e.target;

  const imgModal = new SimpleLightbox('.gallery a', {captionDelay: 250});
});

