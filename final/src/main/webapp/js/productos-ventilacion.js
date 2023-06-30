$(document).ready(function() {
  $('.menu-icon-oculto').on('click', function() {
    $('nav').slideToggle();
  });
});

// Función para abrir el modal
function openModal(event) {
  event.preventDefault();
  var target = this.getAttribute('data-target');
  var modal = document.getElementById(target);
  modal.style.display = "block";
}

// Función para cerrar el modal
function closeModal() {
  var modal = this.closest('.modal');
  modal.style.display = "none";
}

// Agregar evento de clic a todos los enlaces y las imágenes de los modales
var linksModal = document.querySelectorAll('.objeto a[data-target]');
linksModal.forEach(function(link) {
  link.addEventListener('click', openModal);
});

var imagesModal = document.querySelectorAll('.objeto img.img-modal');
imagesModal.forEach(function(image) {
  image.addEventListener('click', openModal);
});

// Agregar evento de clic a los botones de cierre para cerrar el modal
var closeButtons = document.querySelectorAll('.close');
closeButtons.forEach(function(button) {
  button.addEventListener('click', closeModal);
});

// Agregar evento de clic a la ventana para cerrar el modal al hacer clic fuera del contenido del modal
window.addEventListener('click', function(event) {
  var modals = document.querySelectorAll('.modal');
  modals.forEach(function(modal) {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  });
});

// Cambiar color al pasar el mouse por encima
var enlaces = document.querySelectorAll('.a-nav-dos');
enlaces.forEach(function(enlace) {
  enlace.addEventListener('mouseover', function() {
    enlace.style.color = '#FFA726';
  });

  enlace.addEventListener('mouseout', function() {
    enlace.style.color = '#000000';
  });
});

// Animación de los iconos
const root = document.documentElement;
const marqueeElementsDisplayed = getComputedStyle(root).getPropertyValue("--marquee-elements-displayed");
const marqueeContent = document.querySelector("ul.marquee-content");

root.style.setProperty("--marquee-elements", marqueeContent.children.length);

for (let i = 0; i < marqueeElementsDisplayed; i++) {
  marqueeContent.appendChild(marqueeContent.children[i].cloneNode(true));
}

// Función para cambiar la imagen principal en el modal
function cambiarImagenPrincipal(event) {
  var contenedorModal = this.closest('.contenedor');
  var imagenPrincipal = contenedorModal.querySelector('.img-produ');
  var nuevaImagenSrc = this.getAttribute('src');
  imagenPrincipal.setAttribute('src', nuevaImagenSrc);
}

// Agregar evento de clic a todas las imágenes de la galería en los modales
var galeriasModales = document.querySelectorAll('.modal .img-todas');
galeriasModales.forEach(function(galeria) {
  var imagenesGaleria = galeria.querySelectorAll('img');
  imagenesGaleria.forEach(function(imagen) {
    imagen.addEventListener('click', cambiarImagenPrincipal);
  });
});

// Ocultar elementos sin contenido
var hiddenElements = document.getElementsByClassName('hidden');
for (var i = 0; i < hiddenElements.length; i++) {
  var element = hiddenElements[i];
  if (!element.innerHTML.trim()) {
    element.style.display = 'none';
  }
}
/**
 * 
 */