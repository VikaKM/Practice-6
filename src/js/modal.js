function showModalCall() {
  const callButtons = document.querySelectorAll('.call'); // Все кнопки с классом call
  const closeButton = document.querySelector('.modal__close'); // Кнопка закрытия
  const modalCall = document.querySelector('.modal__call'); // Модалка
  const overlay = document.querySelector('.overlay'); // Оверлей

  if (callButtons.length > 0 && closeButton && modalCall && overlay) {
    // Скрываем кнопку закрытия по умолчанию
    closeButton.style.display = 'none';

    // Открытие модалки по клику на любую кнопку call
    callButtons.forEach(function(callButton) {
      callButton.addEventListener('click', function(event) {
        event.preventDefault();
        modalCall.classList.add('modal__call--open');
        overlay.classList.add('overlay--open');
        document.body.classList.add('no-scroll');
        // Показать кнопку закрытия
        closeButton.style.display = '';
      });
    });

    // Закрытие модалки по клику на кнопку закрытия
    closeButton.addEventListener('click', function() {
      modalCall.classList.remove('modal__call--open');
      overlay.classList.remove('overlay--open');
      document.body.classList.remove('no-scroll');
      // Скрыть кнопку закрытия
      closeButton.style.display = 'none';
    });

    // Закрытие модалки по клику на overlay
    overlay.addEventListener('click', function() {
      modalCall.classList.remove('modal__call--open');
      overlay.classList.remove('overlay--open');
      document.body.classList.remove('no-scroll');
      // Скрыть кнопку закрытия
      closeButton.style.display = 'none';
    });
  }
}

document.addEventListener('DOMContentLoaded', showModalCall);

function showModalFeedback() {
  const chatButtons = document.querySelectorAll('.chat'); 
  const closeButton = document.querySelector('.modal__close'); 
  const modalFeedback = document.querySelector('.modal__feedback'); 
  const overlay = document.querySelector('.overlay'); // Оверлей

  if (chatButtons.length > 0 && closeButton && modalFeedback && overlay) {
    // Скрываем кнопку закрытия по умолчанию
    closeButton.style.display = 'none';

    // Открытие модалки по клику на любую кнопку call
    chatButtons.forEach(function(chatButton) {
      chatButton.addEventListener('click', function(event) {
        console.log('Нажата кнопка:', chatButton);
        event.preventDefault();
        modalFeedback.classList.add('modal__feedback--open');
        overlay.classList.add('overlay--open');
        document.body.classList.add('no-scroll');
        // Показать кнопку закрытия
        closeButton.style.display = '';
      });
    });

    // Закрытие модалки по клику на кнопку закрытия
    closeButton.addEventListener('click', function() {
      modalFeedback.classList.remove('modal__feedback--open');
      overlay.classList.remove('overlay--open');
      document.body.classList.remove('no-scroll');
      // Скрыть кнопку закрытия
      closeButton.style.display = 'none';
    });

    // Закрытие модалки по клику на overlay
    overlay.addEventListener('click', function() {
      modalFeedback.classList.remove('modal__feedback--open');
      overlay.classList.remove('overlay--open');
      document.body.classList.remove('no-scroll');
      // Скрыть кнопку закрытия
      closeButton.style.display = 'none';
    });
  }
}

document.addEventListener('DOMContentLoaded', showModalFeedback);
