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



document.getElementById("outer3").addEventListener("click", toggleState3);

function toggleState3() {
  let galleryView = document.getElementById("galleryView");
  let tilesView = document.getElementById("tilesView");
  let outer = document.getElementById("outer3");
  let slider = document.getElementById("slider3");
  let tilesContainer = document.getElementById("tilesContainer");
  if (slider.classList.contains("active")) {
    slider.classList.remove("active");
    outer.classList.remove("outerActive");
    galleryView.style.display = "flex";
    tilesView.style.display = "none";

    while (tilesContainer.hasChildNodes()) {
      tilesContainer.removeChild(tilesContainer.firstChild);
    }
  } else {
    slider.classList.add("active");
    outer.classList.add("outerActive");
    galleryView.style.display = "none";
    tilesView.style.display = "flex";

    for (let i = 0; i < imgPaths.length - 1; i++) {
      let tileItem = document.createElement("div");
      tileItem.classList.add("tileItem");
      tileItem.style.background = "url(" + imgPaths[i] + ")";
      tileItem.style.backgroundSize = "contain";
      tilesContainer.appendChild(tileItem);
    }
  }
}

let imgPaths = [
    "imagenes/catalogo/Catalogo-Magiclick-opt-red_page-0001.jpg",
    "imagenes/catalogo/Catalogo-Magiclick-opt-red_page-0002.jpg",
    "imagenes/catalogo/Catalogo-Magiclick-opt-red_page-0003.jpg",
    "imagenes/catalogo/Catalogo-Magiclick-opt-red_page-0004.jpg",
    "imagenes/catalogo/Catalogo-Magiclick-opt-red_page-0005.jpg",
    "imagenes/catalogo/Catalogo-Magiclick-opt-red_page-0006.jpg",
    "imagenes/catalogo/Catalogo-Magiclick-opt-red_page-0008.jpg",
    "imagenes/catalogo/Catalogo-Magiclick-opt-red_page-0009.jpg",
    "imagenes/catalogo/Catalogo-Magiclick-opt-red_page-0010.jpg",
    "imagenes/catalogo/Catalogo-Magiclick-opt-red_page-0011.jpg",
    "imagenes/catalogo/Catalogo-Magiclick-opt-red_page-0012.jpg",
    "imagenes/catalogo/Catalogo-Magiclick-opt-red_page-0013.jpg",
    "imagenes/catalogo/Catalogo-Magiclick-opt-red_page-0014.jpg",
    "imagenes/catalogo/Catalogo-Magiclick-opt-red_page-0015.jpg",
    "imagenes/catalogo/Catalogo-Magiclick-opt-red_page-0016.jpg",
    "imagenes/catalogo/Catalogo-Magiclick-opt-red_page-0017.jpg",
    "imagenes/catalogo/Catalogo-Magiclick-opt-red_page-0018.jpg",
    "imagenes/catalogo/Catalogo-Magiclick-opt-red_page-0019.jpg",
    "imagenes/catalogo/Catalogo-Magiclick-opt-red_page-0020.jpg",
    "imagenes/catalogo/Catalogo-Magiclick-opt-red_page-0021.jpg",
    "imagenes/catalogo/Catalogo-Magiclick-opt-red_page-0022.jpg",
    "imagenes/catalogo/Catalogo-Magiclick-opt-red_page-0023.jpg",
    "imagenes/catalogo/Catalogo-Magiclick-opt-red_page-0024.jpg",
    "imagenes/catalogo/Catalogo-Magiclick-opt-red_page-0025.jpg",
    "imagenes/catalogo/Catalogo-Magiclick-opt-red_page-0026.jpg",
    "imagenes/catalogo/Catalogo-Magiclick-opt-red_page-0027.jpg",
    "imagenes/catalogo/Catalogo-Magiclick-opt-red_page-0028.jpg",
    "imagenes/catalogo/Catalogo-Magiclick-opt-red_page-0029.jpg",
  ];

  let mainImg = 0;
  let prevImg = imgPaths.length - 1;
  let nextImg = 1;

  function loadGallery() {
    let mainView = document.getElementById("mainView");
    mainView.style.background = "url(" + imgPaths[mainImg] + ")";

    let leftView = document.getElementById("leftView");
    leftView.style.background = "url(" + imgPaths[prevImg] + ")";

    let rightView = document.getElementById("rightView");
    rightView.style.background = "url(" + imgPaths[nextImg] + ")";

    let linkTag = document.getElementById("linkTag");
    linkTag.href = imgPaths[mainImg];
  }

  function scrollRight() {
    prevImg = mainImg;
    mainImg = nextImg;
    if (nextImg >= imgPaths.length - 1) {
      nextImg = 0;
    } else {
      nextImg++;
    }
    loadGallery();
  }

  function scrollLeft() {
    nextImg = mainImg;
    mainImg = prevImg;

    if (prevImg === 0) {
      prevImg = imgPaths.length - 1;
    } else {
      prevImg--;
    }
    loadGallery();
  }

  document.getElementById("navRight").addEventListener("click", scrollRight);
  document.getElementById("navLeft").addEventListener("click", scrollLeft);
  document.getElementById("rightView").addEventListener("click", scrollRight);
  document.getElementById("leftView").addEventListener("click", scrollLeft);
  document.addEventListener("keyup", function (e) {
    if (e.keyCode === 37) {
      scrollLeft();
    } else if (e.keyCode === 39) {
      scrollRight();
    }
  });

  loadGallery();

  