function showSidebar() {
  const burgerButton = document.querySelector('.burger');
  const closeButton = document.querySelector(".icon__button--no-burger");
  const sidebar = document.querySelector('.sidebar');
  const contentElements = document.querySelectorAll('.content');
  const overlay = document.querySelector('.overlay');


  if (burgerButton !== null && closeButton !== null && sidebar !== null) {
    burgerButton.addEventListener('click', function() {
      sidebar.classList.add('sidebar--open');
      overlay.classList.add('sidebar--open');
      document.body.classList.add('no-scroll');
    });

 
    closeButton.addEventListener('click', function() {
      sidebar.classList.remove('sidebar--open');
      overlay.classList.remove('sidebar--open');
      document.body.classList.remove('no-scroll');
    });

    overlay.addEventListener('click', function() {
      sidebar.classList.remove('sidebar--open');
      overlay.classList.remove('sidebar--open');
      document.body.classList.remove('no-scroll');
    });
  }
}

document.addEventListener('DOMContentLoaded', showSidebar);
