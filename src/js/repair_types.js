let swiperRepair = null;

function initSwiperRepair() {
  const swiperContainer = document.querySelector('.repair__slider');
  const repairSwiperList = document.getElementById('repairSwiperList');
  const repairList = document.getElementById('repairList');

  if (!swiperContainer || !repairSwiperList || !repairList) return;

  if (window.innerWidth < 768) {
    repairList.style.display = 'none';
    swiperContainer.style.display = 'block';

    if (!swiperRepair) {
      swiperRepair = new Swiper(".repair__slider", {
        slidesPerView: "auto",
        spaceBetween: 16,
        loop: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
      });
    } else {
      swiperRepair.update();
    }

  } else {
    if (swiperRepair) {
      swiperRepair.destroy(true, true);
      swiperRepair = null;
    }
    swiperContainer.style.display = 'none';
    repairList.style.display = 'flex';
  }
}

window.addEventListener('load', initSwiperRepair);
window.addEventListener('resize', initSwiperRepair);


document.addEventListener("DOMContentLoaded", function() {
  const repairListElement = document.getElementById("repairList");
  const repairItems = repairListElement.querySelectorAll(".repair__list__item");
  const toggleButtonElement = document.querySelector(".button__repair--text");
  const arrowElement = document.getElementById("buttonArrow");
  const repairWrapperElement = document.querySelector(".repair__types");

  function updateVisibleRepairItems() {
  const currentWindowWidth = window.innerWidth;


  let numberOfItemsToShow;
  if (currentWindowWidth >= 1366) {
    numberOfItemsToShow = 4;
  } else {
    numberOfItemsToShow = 3;
  } 

  const isListExpanded = repairListElement.classList.contains("expanded");

  for (let index = 0; index < repairItems.length; index++) {
    const currentItem = repairItems[index];
    if (isListExpanded || index < numberOfItemsToShow) {
      currentItem.style.display = "flex";
    } else {
      currentItem.style.display = "none";
    }
  }
}




  updateVisibleRepairItems();

  toggleButtonElement.addEventListener("click", function() {
    const isListExpanded = repairListElement.classList.toggle("expanded");

    if (isListExpanded) {
      toggleButtonElement.textContent = "Скрыть";
      arrowElement.classList.add("rotated");
    } else {
      toggleButtonElement.textContent = "Показать все";
      arrowElement.classList.remove("rotated");
    }

    updateVisibleRepairItems();
  });


  window.addEventListener("resize", updateVisibleRepairItems);
});
