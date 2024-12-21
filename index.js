// 1
// const openModalBtn = document.querySelector('[data-action="open-modal"]');
// const closeModalBtn = document.querySelector('[data-action="close-modal"]');
// const backdrop = document.querySelector('.js-backdrop');
// function openModal() {
//   document.body.classList.add('show-modal');
// }
// function closeModal() {
//   document.body.classList.remove('show-modal');
// }
// function onBackdropClick(event) {
//   if (event.target === backdrop) {
//     closeModal();
//   }
// }
// openModalBtn.addEventListener('click', openModal);
// closeModalBtn.addEventListener('click', closeModal);
// backdrop.addEventListener('click', onBackdropClick);
// window.addEventListener('keydown', (event) => {
//   if (event.key === 'Escape' && document.body.classList.contains('show-modal')) {
//     closeModal();
//   }
// });
// 2
// const openModalBtn = document.querySelector('[data-action="open-modal"]');
// const closeModalBtn = document.querySelector('[data-action="close-modal"]');
// const backdrop = document.querySelector('.js-backdrop');
// function openModal() {
//   document.body.classList.add('show-modal');
// }
// function closeModal() {
//   document.body.classList.remove('show-modal');
// }
// function onBackdropClick(event) {
//   if (event.target === backdrop) {
//     closeModal();
//   }
// }
// openModalBtn.addEventListener('click', openModal);
// closeModalBtn.addEventListener('click', closeModal);
// backdrop.addEventListener('click', onBackdropClick);
// 3
// const radioButtons = document.querySelectorAll('input[name="color"]');
// function changeBackgroundColor(event) {
//   const selectedColor = event.target.value;
//   document.body.style.backgroundColor = selectedColor;
// }
// radioButtons.forEach((radio) => {
//   radio.addEventListener('change', changeBackgroundColor);
// });
// 4
// const nameInput = document.querySelector('#name-input');
// const nameOutput = document.querySelector('#name-output');
// nameInput.addEventListener('input', (event) => {
//   nameOutput.textContent = event.target.value.trim() || 'незнайомець';
// });
// const validationInput = document.querySelector('#validation-input');
// const requiredLength = Number(validationInput.dataset.length);
// validationInput.addEventListener('blur', () => {
//   const inputLength = validationInput.value.trim().length;
//   if (inputLength === requiredLength) {
//     validationInput.classList.add('valid');
//     validationInput.classList.remove('invalid');
//   } else {
//     validationInput.classList.add('invalid');
//     validationInput.classList.remove('valid');
//   }
// });
// 5
// const fontSizeControl = document.querySelector('#font-size-control');
// const text = document.querySelector('#text');
// text.style.fontSize = `${fontSizeControl.value}px`;
// fontSizeControl.addEventListener('input', (event) => {
//   text.style.fontSize = `${event.target.value}px`;
// });
