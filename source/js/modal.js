var overlay = document.querySelector('.modal-overlay');
var form = document.querySelector('.feedback__form');
var successModal = document.querySelector('.modal--success');
var successModalButton = successModal.querySelector('.js-close-success-modal');

form.addEventListener('submit', function (event) {
  event.preventDefault();
  if (successModal.classList.contains('modal--closed')) {
    successModal.classList.remove('modal--closed');
    if (overlay.classList.contains('modal-overlay--closed'))
      overlay.classList.remove('modal-overlay--closed');
  }
});

successModalButton.addEventListener('click', function () {
  if (!successModal.classList.contains('modal--closed'))
    successModal.classList.add('modal--closed');
  if (!overlay.classList.contains('modal-overlay--closed'))
    overlay.classList.add('modal-overlay--closed');
});

overlay.addEventListener('click', function () {
  if (!successModal.classList.contains('modal--closed'))
    successModal.classList.add('modal--closed');
  if (!overlay.classList.contains('modal-overlay--closed'))
    overlay.classList.add('modal-overlay--closed');
});
