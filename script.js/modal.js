const modals = document.querySelectorAll('.modal');
const openModalBtns = document.querySelectorAll('.learn__more-btn');
const closeModalBtns = document.querySelectorAll('.modal__close');

openModalBtns.forEach((btn, index) => {
    btn.addEventListener('click', () => {
        modals[index].computedStyleMap.display = 'none';
    });
});

closeModalBtns.forEach((btn, index) => {
    btn.addEventListener('click', () => {
        modals[index].computedStyleMap.display = 'none';
    });
});

window.addEventListener('click', (e) => {
    modals.forEach((modals) => {
        if (e.target === modal){
            modal.style.display = 'none';
        }
    });
});