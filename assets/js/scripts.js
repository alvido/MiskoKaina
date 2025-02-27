// Burger Menu Open //
document.addEventListener("DOMContentLoaded", function () {
  // Выбираем бургер-кнопку и навигацию
  let burgerButton = document.getElementById("burgerButton");
  let mobileNav = document.querySelector(".mobile__nav");
  let closeBtn = mobileNav.querySelector("#closeMenu");
  let links = document.querySelectorAll(".nav__list a");
  let body = document.querySelector("body");


  // Если бургер-кнопка существует, добавляем обработчик события
  if (burgerButton) {
    burgerButton.addEventListener("click", function (e) {
      e.stopPropagation(); // Остановка всплытия события
      // burgerButton.classList.add("burger--active");
      mobileNav.classList.add("nav--active");
      body.classList.add("lock");
    });
  }

  if (closeBtn) {
    closeBtn.addEventListener("click", function () {
      // burgerButton.classList.remove("burger--active");
      mobileNav.classList.remove("nav--active");
      body.classList.remove("lock");
    });
  }

  links.forEach((link) => {
    link.addEventListener("click", function (e) {
      // burgerButton.classList.remove("burger--active");
      mobileNav.classList.remove("nav--active");
      body.classList.remove("lock");
    });
  });
});
//

// Fixed header
$(document).ready(function () {
  var header = $(".header"),
    main = $(".main"),
    headerH = header.innerHeight(),
    scrollOffset = $(window).scrollTop();

  checkScroll(scrollOffset);

  $(window).on("scroll", function () {
    scrollOffset = $(this).scrollTop();
    checkScroll(scrollOffset);
  });

  function checkScroll(scrollOffset) {
    if (scrollOffset >= headerH) {
      header.addClass("fixed");
      main.css("padding-top", headerH); // Добавляем верхний отступ
    } else {
      header.removeClass("fixed");
      main.css("padding-top", 0); // Убираем верхний отступ
    }
  }

});
//

//faq collapse
$(document).ready(function () {
  // Обработчик клика на элемент с классом faq__title
  $(".action").on("click", function () {
    // Находим ближайший родительский элемент с классом faq__item
    var $item = $(this).closest(".faq__item");
    // Переключаем класс active у найденного элемента
    $item.toggleClass("active");
  });

  // Обработчик клика на элемент с классом faq__btn
  $(".faq__btn").on("click", function () {
    // Находим ближайший родительский элемент с классом faq__item
    var $item = $(this).closest(".faq__item");
    // Переключаем класс active у найденного элемента
    $item.toggleClass("active");
  });
});
//faq collapse

//
function updateBackgrounds() {
  const isMobile = window.innerWidth <= 768;

  document.querySelectorAll(".product").forEach(section => {
    const desktopBg = section.getAttribute("data-desktop-bg");
    const mobileBg = section.getAttribute("data-mobile-bg");

    if (isMobile && mobileBg) {
      section.style.backgroundImage = `url(${mobileBg})`;
    } else if (desktopBg) {
      section.style.backgroundImage = `url(${desktopBg})`;
    }
  });
}
document.addEventListener("DOMContentLoaded", updateBackgrounds);
window.addEventListener("resize", updateBackgrounds);
//

//swiper
document.addEventListener("DOMContentLoaded", function () {
  // Инициализация слайдера "customer"
  if (document.querySelector("#news")) {
    new Swiper("#news", {
      observer: true,
      observeParents: true,
      loop: true,
      // autoplay: {
      //   delay: 3000,
      //   disableOnInteraction: false,
      // },
      pagination: {
        el: ".news-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".news-button-next",
        prevEl: ".news-button-prev",
      },
      breakpoints: {
        320: {
          slidesPerView: 1.2, // Один полный слайд и куски по бокам
          spaceBetween: 20, // Расстояние между слайдами
          centeredSlides: true,
        },
        560: {
          slidesPerView: 1.5, // Один полный слайд и куски по бокам
          centeredSlides: true,
          spaceBetween: 20, // Расстояние между слайдами
        },
        768: {
          slidesPerView: 2, // Один полный слайд и куски по бокам
          centeredSlides: false,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
      },
    });
  }

  if (document.querySelector("#reviews")) {
    new Swiper("#reviews", {
      observer: true,
      observeParents: true,
      loop: true,
      // autoplay: {
      //   delay: 3000,
      //   disableOnInteraction: false,
      // },
      pagination: {
        el: ".reviews-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".reviews-button-next",
        prevEl: ".reviews-button-prev",
      },
      breakpoints: {
        320: {
          slidesPerView: 1.2, // Один полный слайд и куски по бокам
          spaceBetween: 20, // Расстояние между слайдами
          centeredSlides: true,
        },
        560: {
          slidesPerView: 1.5, // Один полный слайд и куски по бокам
          centeredSlides: true,
          spaceBetween: 20, // Расстояние между слайдами
        },
        768: {
          slidesPerView: 2, // Один полный слайд и куски по бокам
          centeredSlides: false,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 20, // Расстояние между слайдами
        },
      },
    });
  }

});
// swiper

//
function addField() {
  const container = document.getElementById("kadastrinis-fields");
  const fieldCount = container.getElementsByClassName("form-group").length;

  if (fieldCount < 3) {
      const newField = document.createElement("div");
      newField.classList.add("form-group");
      newField.innerHTML = `
          <input type="text" name="kadastrinis[]" placeholder="XXXX/ZZZZ:YYYY">
          <button type="button" class="icon remove-field" onclick="removeField(this)">-</button>
      `;
      container.appendChild(newField);
  }

  updateButtons();
}

function removeField(button) {
  button.parentElement.remove();
  updateButtons();
}

function updateButtons() {
  const container = document.getElementById("kadastrinis-fields");
  const fields = container.getElementsByClassName("form-group");
  const addButton = document.querySelector(".add-field");

  if (fields.length >= 3 && addButton) {
      addButton.style.display = "none";
  } else if (fields.length < 3 && !addButton) {
      const lastField = fields[fields.length - 1];
      const newAddButton = document.createElement("button");
      newAddButton.type = "button";
      newAddButton.classList.add("add-field");
      newAddButton.innerText = "+";
      newAddButton.onclick = addField;
      lastField.appendChild(newAddButton);
  } else if (fields.length < 3 && addButton) {
      addButton.style.display = "flex";
  }
}

document.addEventListener("DOMContentLoaded", function () {
  function updateRequiredLabels() {
      document.querySelectorAll(".form-group label").forEach(function (label) {
          let input = label.nextElementSibling;
          if (input && input.required) {
              label.classList.add("required");
          } else {
              label.classList.remove("required");
          }
      });
  }

  updateRequiredLabels();
});
//