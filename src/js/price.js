let swiperPrice = null;

function initSwiperPrice() {
  const swiperContainer = document.querySelector('.price__slider');
  const priceSwiperList = document.getElementById('priceSwiperList');
  const priceList = document.getElementById('priceList');

  if (!swiperContainer || !priceSwiperList || !priceList) return;

  if (window.innerWidth < 768) {
    priceList.style.display = 'none';
    swiperContainer.style.display = 'block';

    if (!swiperPrice) {
      swiperPrice = new Swiper(".price__slider", {
        slidesPerView: "auto",
        spaceBetween: 16,
        loop: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
      });
    } else {
      swiperPrice.update();
    }

  } else {
    if (swiperPrice) {
      swiperPrice.destroy(true, true);
      swiperPrice = null;
    }
    swiperContainer.style.display = 'none';
    priceList.style.display = 'table';
  }
}

window.addEventListener('load', initSwiperPrice);
window.addEventListener('resize', initSwiperPrice);

