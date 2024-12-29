document.addEventListener('DOMContentLoaded', () => {
  // Селекторы
  const startBtn = document.getElementById('startBtn');
  const firstPage = document.querySelector('.first-page');
  const secondPage = document.querySelector('.second-page');
  const textElements = document.querySelectorAll('.fade-in-text');
  const photoRowSection = document.querySelector('.photo-row-section');
  const photoRow = document.getElementById('photoRow');
  const restartBtn = document.getElementById('restartBtn');

  // Модальное окно
  const modal = document.getElementById('modal');
  const modalImg = document.getElementById('modalImg');
  const closeModal = document.getElementById('closeModal');
  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');

  // Пути к картинкам
  const images = [
    'assets/page1.jpg',
    'assets/page2.jpg',
    'assets/page3.jpg',
    'assets/page4.jpg',
    'assets/pages5.jpg',
    'assets/pages6.jpg',
    'assets/pages7.jpg'
  ];

  // Создаём теги <img> и добавляем их в .photo-row
  // Добавим им класс "photo-appear", чтобы анимировать
  images.forEach((imgSrc, index) => {
    const imgEl = document.createElement('img');
    imgEl.src = imgSrc;
    imgEl.classList.add('photo-appear'); // для плавного появления
    // При клике открываем модалку
    imgEl.addEventListener('click', () => {
      openModal(index);
    });
    photoRow.appendChild(imgEl);
  });

  // Текущий индекс картинки в модалке
  let currentIndex = 0;

  // Открытие модального окна
  function openModal(index) {
    currentIndex = index;
    modal.style.display = 'flex';
    modalImg.src = images[currentIndex];
  }

  // Закрытие модального окна
  function closeModalFn() {
    modal.style.display = 'none';
  }

  // Листать назад
  function showPrev() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    modalImg.src = images[currentIndex];
  }

  // Листать вперёд
  function showNext() {
    currentIndex = (currentIndex + 1) % images.length;
    modalImg.src = images[currentIndex];
  }

  // Обработчики модалки
  closeModal.addEventListener('click', closeModalFn);
  prevBtn.addEventListener('click', showPrev);
  nextBtn.addEventListener('click', showNext);

  // Клик по фону - закрытие
  window.addEventListener('click', (e) => {
    if (e.target === modal) {
      closeModalFn();
    }
  });

  // Показ второго экрана, анимации текстов
  function showSecondPage() {
    firstPage.style.display = 'none';
    secondPage.style.display = 'flex';

    // Последовательно показываем тексты
    textElements.forEach((el, idx) => {
      setTimeout(() => {
        el.classList.add('visible');
      }, idx * 2000); // каждые 2 секунды
    });

    // Допустим, через 7-8 секунд после старта покажем блок с фото
    setTimeout(() => {
      secondPage.style.display = 'none';
      photoRowSection.style.display = 'flex';

      // Теперь плавное появление картинок по очереди
      const photoNodes = document.querySelectorAll('.photo-appear');
      photoNodes.forEach((img, i) => {
        setTimeout(() => {
          img.classList.add('visible');
        }, i * 1000); // например, каждые 0.6 сек
      });

      // Покажем кнопку Restart, когда все картинки появились
      setTimeout(() => {
        restartBtn.style.display = 'inline-block';
      }, photoNodes.length * 1000 + 500);

    }, 7500);
  }

  // Кнопка "Restart"
  function restartAll() {
    // Сбрасываем все экраны
    firstPage.style.display = 'flex';
    secondPage.style.display = 'none';
    photoRowSection.style.display = 'none';
    restartBtn.style.display = 'none';

    // Сбрасываем анимации текста
    textElements.forEach((el) => {
      el.classList.remove('visible');
    });

    // Сбрасываем анимации картинок
    const photoNodes = document.querySelectorAll('.photo-appear');
    photoNodes.forEach((img) => {
      img.classList.remove('visible');
    });

    // Закрываем модалку на всякий случай
    modal.style.display = 'none';

    // Скролл к началу (если вдруг что-то где-то прокрутилось)
    window.scrollTo({ top: 0 });

    // Готово, пользователь снова видит первый экран
  }

  // Слушатели на кнопки
  startBtn.addEventListener('click', showSecondPage);
  restartBtn.addEventListener('click', restartAll);
});
