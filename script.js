const year = document.querySelector('#year');
if (year) year.textContent = new Date().getFullYear();
const lightbox = document.querySelector('#lightbox');
const lightboxImg = lightbox?.querySelector('img');
const closeBtn = lightbox?.querySelector('.lightbox-close');
let lastFocus = null;
function closeLightbox(){ if(!lightbox) return; lightbox.hidden = true; lightboxImg.src=''; lightboxImg.classList.remove('trim-map'); document.body.style.overflow=''; if(lastFocus) lastFocus.focus(); }
document.querySelectorAll('[data-lightbox]').forEach(btn => btn.addEventListener('click', () => {
  lastFocus = btn; lightboxImg.src = btn.dataset.lightbox; lightboxImg.classList.toggle('trim-map', btn.classList.contains('map-trim')); lightbox.hidden = false; document.body.style.overflow='hidden'; closeBtn.focus();
}));
closeBtn?.addEventListener('click', closeLightbox);
lightbox?.addEventListener('click', e => { if(e.target === lightbox) closeLightbox(); });
document.addEventListener('keydown', e => { if(e.key === 'Escape' && lightbox && !lightbox.hidden) closeLightbox(); });
