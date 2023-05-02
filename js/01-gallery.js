import { galleryItems } from './gallery-items.js';
// Change code below this line

const gallery = galleryItems.map(item => 
`<li class="gallery__item">
    <a class="gallery__link" href = ${item.original} >
        <img
            class="gallery__image"
            src=${item.preview}
            data-source = ${item.original}
            alt=${item.description}
        />
    </a>
</li>`).join('');

const galleryContainer = document.querySelector('.gallery');

galleryContainer.innerHTML = gallery;

galleryContainer.addEventListener('click', e => {
    e.preventDefault();

    if (e.target.nodeName !==  'IMG') {
        return;
    }
    
    const imgTarget = e.target;

    const imgModal = basicLightbox.create(`<img src=${imgTarget.dataset.source} width="1280" height="852">`)

    imgModal.show()

    const onEscKeyPress = e => {
        if (e.code === 'Escape') {
            imgModal.close();
            window.removeEventListener('keydown', onEscKeyPress);
        }
    }

    window.addEventListener('keydown', onEscKeyPress);
}); 