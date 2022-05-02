import { galleryItems } from './gallery-items.js';
// Change code below this line

const imgContainer = document.querySelector('.gallery');
const cardsMarkup = createImgMarkup(galleryItems);

imgContainer.insertAdjacentHTML('beforeend', cardsMarkup);
imgContainer.addEventListener('click', onImgContainerClick);

function createImgMarkup(galleryItems) {
    return galleryItems.map(({ preview, original, description }) => {
        return `      
    <div class="gallery__item">
        <a class="gallery__link" href="${original}" >
          <img
            class="gallery__image"
            src="${preview}" data-source="${original}" 
            alt="${description}" 
          />
        </a>
    </div>
    `
    }).join('');
}

function onImgContainerClick(evt) {
    const isGalleryItemEl = evt.target.classList.contains('gallery__image');
    const imgSrc = evt.target.dataset.source;
    evt.preventDefault();
    if (!isGalleryItemEl) {
        return;
    }

    const instance = basicLightbox.create(`
    <img src="${imgSrc}" width="800" height="600">`, {
        onShow: () => {
            window.addEventListener("keydown", closeByEscBtn)
        },
        onClose: () => {
            window.removeEventListener("keydown", closeByEscBtn)
        },
    });
   
function closeByEscBtn(evt) {
        if (evt.code === 'Escape') {
            instance.close();
        };
    };
    instance.show();
}