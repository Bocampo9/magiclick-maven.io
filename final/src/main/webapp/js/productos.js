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