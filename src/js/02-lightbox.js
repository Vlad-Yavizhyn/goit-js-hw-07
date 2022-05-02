import { galleryItems } from './gallery-items.js';
// Change code below this line



const imgContainer = document.querySelector('.gallery');
const markup = createImgMarkup(galleryItems);
imgContainer.insertAdjacentHTML('beforeend', markup);
imgContainer.addEventListener('click', onImgClick);

function createImgMarkup(galleryItems) {
    return galleryItems.map(({ preview, original, description }) => {
        return `      
    <a class="gallery__item" href="${original}">
        <img class="gallery__image" src="${preview}" alt="${description}" />
    </a>
    `
    }).join('');
}

function onImgClick(evt) {
    const isGalleryItemEl = evt.target.classList.contains('gallery__image');
    const imgSrc = evt.target.dataset.source;
    evt.preventDefault();
    if (!isGalleryItemEl) {
        return;
    }
}
let lightbox = new SimpleLightbox('.gallery__item', {captionsData: 'alt', captionDelay: 250, });
    
console.log(galleryItems);
