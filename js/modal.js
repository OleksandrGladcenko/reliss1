// Знаходимо елементи
const modals = document.querySelectorAll('.modal');
const openModalBtns = document.querySelectorAll('.learn__more-btn');
const closeModalBtns = document.querySelectorAll('.modal__close');

// Відкрити модальне вікно
openModalBtns.forEach((btn, index) => {
  btn.addEventListener('click', () => {
    modals[index].style.display = 'flex';
  });
});

// Закрити модальне вікно
closeModalBtns.forEach((btn, index) => {
  btn.addEventListener('click', () => {
    modals[index].style.display = 'none';
  });
});

// Закрити модальне вікно при кліку поза ним
window.addEventListener('click', (e) => {
  modals.forEach((modal) => {
    if (e.target === modal) {
      modal.style.display = 'none';
    }
  });
});