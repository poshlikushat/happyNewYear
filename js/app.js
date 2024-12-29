document.addEventListener('DOMContentLoaded', () => {
  const startBtn = document.getElementById('startBtn');
  const photoBtn = document.getElementById('photoBtn');
  const firstPage = document.querySelector('.first-page');
  const secondPage = document.querySelector('.second-page');
  const photoGallery = document.querySelector('.photo-gallery');
  const fadeInTexts = document.querySelectorAll('.fade-in-text');
  const gallery = document.querySelector('.gallery');
  const collage = document.querySelector('.collage');
  const text1 = document.getElementById('text1');
  const text2 = document.getElementById('text2');
  const text3 = document.getElementById('text3');

  // Функция для перехода на вторую страницу
  startBtn.addEventListener('click', () => {
    firstPage.style.display = 'none';
    secondPage.style.display = 'flex';

    // Запускаем анимации появления текста
    fadeInTexts.forEach((text, index) => {
      setTimeout(() => {
        text.classList.add('visible');
        if (index === fadeInTexts.length - 1) {
          photoBtn.style.display = 'block';
        }
      }, index * 2000);
    });
	setTimeout(() => {
      photoBtn.style.opacity = '1';
      photoBtn.style.transform = 'translateY(0)';
    }, 5500);
  });

//   // Функция для показа галереи
//   photoBtn.addEventListener('click', () => {
//     secondPage.style.display = 'none';
//     photoGallery.style.display = 'flex';

//     // Добавляем фотографии
//     for (let i = 1; i <= 12; i++) {
//       const img = document.createElement('img');
//       img.src = `https://via.placeholder.com/150?text=Photo+${i}`;
//       gallery.appendChild(img);
//     }

//     // Показ коллажа через 3 секунды
//     setTimeout(() => {
//       collage.style.display = 'block';
//     }, 3000);
//   });
});
