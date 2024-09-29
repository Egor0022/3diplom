const buyButtons = document.querySelectorAll('.buy-button');
const closeButton = document.querySelector('.modal-close');
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const price = document.querySelector('.modal-total__price');

function openModal(event) {
  const button = event.target; 
  const item = button.closest('.editions-item'); 
  const priceElement = item.querySelector('.editions-item__price'); 
  const price = priceElement.textContent; 
  price.textContent = price;

  modal.classList.add('opened');
  overlay.classList.add('opened');
}

function closeModal() {
  modal.classList.remove('opened');
  overlay.classList.remove('opened');
}

buyButtons.forEach(button => {
  button.addEventListener('click', openModal);
});

closeButton.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);