import { galleryItems } from './gallery-items.js';
// Change code below this line


const list = document.querySelector('.gallery');

list.insertAdjacentHTML("beforeend",createGalleryMarkup(galleryItems));
list.addEventListener("click",handleClick);


function createGalleryMarkup(galleryItems) {
    return galleryItems
      .map(({ description, original, preview }) => {
        return `
          <div class="gallery__item">
          <a class="gallery__link" href="${original}">
            <img
              class="gallery__image"
              src="${preview}"
              data-source="${original}"
              alt="${description}"
            />
          </a>
        </div>
        `;
      })
      .join("");
  }

function handleClick(evt){
    evt.preventDefault();
    
    if (evt.target.nodeName !== 'IMG') {
        return;
    }


        const instance = basicLightbox.create(`
        <img
        class="gallery__image"
        src="${evt.target.dataset.source}"
        width="800" height="600"
      />
      `)
      // console.log(instance);
      instance.show();

     

    }
 
   
    // if (instance.visible()) {
    //     list.addEventListener('keydown', (e) => {
    //         if (e.code === 'Escape') {
    //             instance.close()
    //         }
    //     }
    //     );
    // }
