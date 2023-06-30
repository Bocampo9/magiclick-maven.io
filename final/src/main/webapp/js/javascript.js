$(document).ready(function(){
  $('.carousel-dos').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000, // Cambia de imagen cada 3 segundos (ajusta el valor según tus preferencias)
    prevArrow: '<button type="button" class="slick-prev"><i class="fa-solid fa-chevron-left"></i></button>',
    nextArrow: '<button type="button" class="slick-next"><i class="fa-solid fa-chevron-right"></i></button>',
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  });
});
const repeat = false;
const noArrows = false;
const noBullets = false;

const container = document.querySelector(".slider-container");
var slide = document.querySelectorAll(".slider-single");
var slideTotal = slide.length - 1;
var slideCurrent = 2;

function initBullets() {
  if (noBullets) {
    return;
  }
  const bulletContainer = document.createElement("div");
  bulletContainer.classList.add("bullet-container");
  slide.forEach((elem, i) => {
    const bullet = document.createElement("div");
    bullet.classList.add("bullet");
    bullet.id = `bullet-index-${i}`;
    bullet.addEventListener("click", () => {
      goToIndexSlide(i);
    });
    bulletContainer.appendChild(bullet);
    elem.classList.add("proactivede");
  });
  container.appendChild(bulletContainer);
}

function initArrows() {
  if (noArrows) {
    return;
  }
  const leftArrow = document.createElement("a");
  const iLeft = document.createElement("i");
  iLeft.classList.add("fa");
  iLeft.classList.add("fa-arrow-left");
  leftArrow.classList.add("slider-left");
  leftArrow.appendChild(iLeft);
  leftArrow.addEventListener("click", () => {
    slideLeft();
  });
  const rightArrow = document.createElement("a");
  const iRight = document.createElement("i");
  iRight.classList.add("fa");
  iRight.classList.add("fa-arrow-right");
  rightArrow.classList.add("slider-right");
  rightArrow.appendChild(iRight);
  rightArrow.addEventListener("click", () => {
    slideRight();
  });
  container.appendChild(leftArrow);
  container.appendChild(rightArrow);
}

function slideInitial() {
  initBullets();
  initArrows();
  
  slideCurrent = 2; // Mostrar la tercera imagen al cargar la página
  slide[slideCurrent].classList.add("active");
  updateBullet();
  checkRepeat();
}

function updateBullet() {
  if (!noBullets) {
    document
      .querySelector(".bullet-container")
      .querySelectorAll(".bullet")
      .forEach((elem, i) => {
        elem.classList.remove("active");
        if (i === slideCurrent) {
          elem.classList.add("active");
        }
      });
  }
  checkRepeat();
}

function checkRepeat() {
  if (!repeat) {
    if (slideCurrent === slide.length - 1) {
      slide[0].classList.add("not-visible");
      slide[slide.length - 1].classList.remove("not-visible");
      if (!noArrows) {
        document.querySelector(".slider-right").classList.add("not-visible");
        document.querySelector(".slider-left").classList.remove("not-visible");
      }
    } else if (slideCurrent === 0) {
      slide[slide.length - 1].classList.add("not-visible");
      slide[0].classList.remove("not-visible");
      if (!noArrows) {
        document.querySelector(".slider-left").classList.add("not-visible");
        document.querySelector(".slider-right").classList.remove("not-visible");
      }
    } else {
      slide[slide.length - 1].classList.remove("not-visible");
      slide[0].classList.remove("not-visible");
      if (!noArrows) {
        document.querySelector(".slider-left").classList.remove("not-visible");
        document.querySelector(".slider-right").classList.remove("not-visible");
      }
    }
  }
}

function slideRight() {
  if (slideCurrent < slideTotal) {
    slideCurrent++;
  } else {
    slideCurrent = 0;
  }

  if (slideCurrent > 0) {
    var preactiveSlide = slide[slideCurrent - 1];
  } else {
    var preactiveSlide = slide[slideTotal];
  }
  var activeSlide = slide[slideCurrent];
  if (slideCurrent < slideTotal) {
    var proactiveSlide = slide[slideCurrent + 1];
  } else {
    var proactiveSlide = slide[0];
  }

  slide.forEach((elem) => {
    var thisSlide = elem;
    if (thisSlide.classList.contains("preactivede")) {
      thisSlide.classList.remove("preactivede");
      thisSlide.classList.remove("preactive");
      thisSlide.classList.remove("active");
      thisSlide.classList.remove("proactive");
      thisSlide.classList.add("proactivede");
    }
    if (thisSlide.classList.contains("preactive")) {
      thisSlide.classList.remove("preactive");
      thisSlide.classList.remove("active");
      thisSlide.classList.remove("proactive");
      thisSlide.classList.remove("proactivede");
      thisSlide.classList.add("preactivede");
    }
  });
  preactiveSlide.classList.remove("preactivede");
  preactiveSlide.classList.remove("active");
  preactiveSlide.classList.remove("proactive");
  preactiveSlide.classList.remove("proactivede");
  preactiveSlide.classList.add("preactive");

  activeSlide.classList.remove("preactivede");
  activeSlide.classList.remove("preactive");
  activeSlide.classList.remove("proactive");
  activeSlide.classList.remove("proactivede");
  activeSlide.classList.add("active");

  proactiveSlide.classList.remove("preactivede");
  proactiveSlide.classList.remove("preactive");
  proactiveSlide.classList.remove("active");
  proactiveSlide.classList.remove("proactivede");
  proactiveSlide.classList.add("proactive");

  updateBullet();
}

function slideLeft() {
  if (slideCurrent > 0) {
    slideCurrent--;
  } else {
    slideCurrent = slideTotal;
  }

  if (slideCurrent < slideTotal) {
    var proactiveSlide = slide[slideCurrent + 1];
  } else {
    var proactiveSlide = slide[0];
  }
  var activeSlide = slide[slideCurrent];
  if (slideCurrent > 0) {
    var preactiveSlide = slide[slideCurrent - 1];
  } else {
    var preactiveSlide = slide[slideTotal];
  }
  slide.forEach((elem) => {
    var thisSlide = elem;
    if (thisSlide.classList.contains("proactive")) {
      thisSlide.classList.remove("preactivede");
      thisSlide.classList.remove("preactive");
      thisSlide.classList.remove("active");
      thisSlide.classList.remove("proactive");
      thisSlide.classList.add("proactivede");
    }
    if (thisSlide.classList.contains("proactivede")) {
      thisSlide.classList.remove("preactive");
      thisSlide.classList.remove("active");
      thisSlide.classList.remove("proactive");
      thisSlide.classList.remove("proactivede");
      thisSlide.classList.add("preactivede");
    }
  });

  preactiveSlide.classList.remove("preactivede");
  preactiveSlide.classList.remove("active");
  preactiveSlide.classList.remove("proactive");
  preactiveSlide.classList.remove("proactivede");
  preactiveSlide.classList.add("preactive");

  activeSlide.classList.remove("preactivede");
  activeSlide.classList.remove("preactive");
  activeSlide.classList.remove("proactive");
  activeSlide.classList.remove("proactivede");
  activeSlide.classList.add("active");

  proactiveSlide.classList.remove("preactivede");
  proactiveSlide.classList.remove("preactive");
  proactiveSlide.classList.remove("active");
  proactiveSlide.classList.remove("proactivede");
  proactiveSlide.classList.add("proactive");

  updateBullet();
}

function goToIndexSlide(index) {
  const sliding = slideCurrent > index ? () => slideRight() : () => slideLeft();
  while (slideCurrent !== index) {
    sliding();
  }
}

slideInitial();


/* funcion para que cambie de color cuando pasa el muose por encima */
const enlaces = document.querySelectorAll('.a-nav-dos');

enlaces.forEach((enlace) => {
  enlace.addEventListener('mouseover', () => {
    enlace.style.color = '#FFA726'; /* Cambia el color al pasar el mouse por encima */
  });

  enlace.addEventListener('mouseout', () => {
    enlace.style.color = '#000000'; /* Restablece el color al quitar el mouse */
  });
});


$(document).ready(function(){
  $('.menu-icon-oculto').on('click',function(){
      $('nav').slideToggle();
  })
})

/* funcion para que los iconos se muevas constantemente */

const root = document.documentElement;
const marqueeElementsDisplayed = getComputedStyle(root).getPropertyValue("--marquee-elements-displayed");
const marqueeContent = document.querySelector("ul.marquee-content");

root.style.setProperty("--marquee-elements", marqueeContent.children.length);

for(let i=0; i<marqueeElementsDisplayed; i++) {
  marqueeContent.appendChild(marqueeContent.children[i].cloneNode(true));
}

