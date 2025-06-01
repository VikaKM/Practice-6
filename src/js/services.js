let swiper = null;

function initSwiper() {
  const swiperContainer = document.querySelector('.brand__slider');
  const brandList = document.getElementById('brandList');

  if (window.innerWidth < 768) {
    if (!swiper) {
      swiper = new Swiper(".brand__slider", {
        slidesPerView: "auto",
        spaceBetween: 16,
        freeMode: false,
        centeredSlides: false,
        loop: true,

        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
      });
    }
    swiperContainer.style.display = 'block';
    brandList.style.display = 'none';
  } else {
    if (swiper) {
      swiper.destroy(true, true);
      swiper = null;
    }
    swiperContainer.style.display = 'none';
    brandList.style.display = 'flex';
  }
}

document.addEventListener('DOMContentLoaded', () => {
  initSwiper();

  const buttonContainer = document.querySelector('.button__brands');
  if (buttonContainer) {
    buttonContainer.addEventListener('click', (event) => {
      const button = event.target.closest('.button__brands--text');
      if (button) {
        showMore();
      }
    });
  }
});

window.addEventListener('resize', () => {
  initSwiper();

  const brandListElement = document.getElementById("brandList");
  if (!brandListElement.classList.contains("expanded")) {
    resetVisibleItems();
  }
});

function resetVisibleItems() {
  const brandListElement = document.getElementById("brandList");
  const brandItems = brandListElement.querySelectorAll(".brand__item");
  const currentWindowWidth = window.innerWidth;

  let numberOfVisibleItems;
  if (currentWindowWidth >= 1120) {
    numberOfVisibleItems = 8;
  } else if (currentWindowWidth >= 768) {
    numberOfVisibleItems = 6;
  } else if (currentWindowWidth >= 320) {
    numberOfVisibleItems = brandItems.length;
  }

  brandItems.forEach((item, index) => {
    item.style.display = (index < numberOfVisibleItems) ? 'flex' : 'none';
  });
}

function showMore() {
  const brandListElement = document.getElementById("brandList");
  const brandItems = brandListElement.querySelectorAll(".brand__item");
  const toggleButton = document.querySelector(".button__brands--text");
  const el = document.getElementById("arrow");
  const header = document.querySelector(".block__header");
  const pageShadow = document.querySelector('.page-shadow');

  // Переключаем класс expanded
  const isListExpanded = brandListElement.classList.toggle("expanded");

  if (isListExpanded) {
    toggleButton.textContent = "Скрыть";
    el.classList.add("rotated");
    header.classList.add("shadow");
    pageShadow.style.display = 'block'; // показать оверлей
    brandItems.forEach(item => item.style.display = 'flex');
  } else {
    toggleButton.textContent = "Показать все";
    el.classList.remove("rotated");
    header.classList.remove("shadow");
    pageShadow.style.display = 'none'; // скрыть оверлей
    resetVisibleItems();
  }
}
