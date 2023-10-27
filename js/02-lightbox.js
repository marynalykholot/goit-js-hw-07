import { galleryItems } from "./gallery-items.js";
// Change code below this line

const list = document.querySelector(".gallery");

list.insertAdjacentHTML("beforeend", createGalleryMarkup(galleryItems));

function createGalleryMarkup(galleryItems) {
  return galleryItems
    .map(({ description, original, preview }) => {
      return `
      <li class="gallery__item">
      <a class="gallery__link" 
      href="${original}">
         <img class="gallery__image" 
         src="${preview}" 
       
          alt="${description}" />
      </a>
   </li>
        `;
    })
    .join("");
}

let lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: "250ms",
});
