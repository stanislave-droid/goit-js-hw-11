// Описаний у документації
import SimpleLightbox from 'simplelightbox';
// Додатковий імпорт стилів
import 'simplelightbox/dist/simple-lightbox.min.css';

// Описаний у документації
import iziToast from 'izitoast';
// Додатковий імпорт стилів
import 'izitoast/dist/css/iziToast.min.css';

// const SLBInstance = new SimpleLightbox();

export function createGallery(images) {}
export function clearGallery() {}
export function showLoader() {}
export function hideLoader() {}
export function showError(message) {
  iziToast.show({
    message,
    backgroundColor: 'red',
    messageColor: 'white',
    maxWidth: 432,
    iconUrl: '/img/error-icon.svg',
    position: 'bottomRight',
  });
}
