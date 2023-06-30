$(document).ready(function() {
    initMap();
    initMenuToggle();
  });

  function initMap() {
    const myLatLng = {lat: -34.66643065254622, lng: -58.52743963000827};
  
    const mapOptions = {
      zoom: 15,
      center: myLatLng
    };
  
    const map = new google.maps.Map(document.getElementById('map'), mapOptions);
  
    const marker = new google.maps.Marker({
      position: myLatLng,
      map: map,
      title: 'Mi Local'
    });
  }
  
  function initMenuToggle() {
    $('.menu-icon-oculto').on('click', function() {
      $('nav').slideToggle();
    });
  }
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