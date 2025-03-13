// Знаходимо елемент прогрес-бара
const progressBar = document.getElementById('progress-bar');

// Функція для оновлення прогресу
function updateProgressBar() {
  const scrollTop = window.pageYOffset; // Поточна прокрутка
  const scrollHeight = document.documentElement.scrollHeight; // Загальна висота документа
  const clientHeight = document.documentElement.clientHeight; // Висота вікна браузера
  const scrollPercentage = (scrollTop / (scrollHeight - clientHeight)) * 100; // Відсоток прокрутки

  // Оновлюємо ширину прогрес-бара
  progressBar.style.width = scrollPercentage + '%';
}

// Вішаємо подію на прокрутку
window.addEventListener('scroll', updateProgressBar);