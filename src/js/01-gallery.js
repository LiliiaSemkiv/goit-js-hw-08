import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector('.gallery')

function makeGallery(){
    const markup = galleryItems
    .map(({preview, original, description}) => 
    `<li class="gallery__item"><a class="gallery__link" href="${original}">
    <img class="gallery__image" data-source="${original}" src="${preview}" alt="${description}" ></a></li>`)
    .join('');
    gallery.innerHTML = markup
}

makeGallery();

let lightbox = new SimpleLightbox('.gallery a', {
    captions: "true",
    captionsData: "alt",
    captionPosition: "bottom",
    captionDelay: 250,
});

instance.show()