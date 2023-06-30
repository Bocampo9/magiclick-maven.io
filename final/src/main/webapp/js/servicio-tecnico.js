$(document).ready(function() {
  initMap();
  initMenuToggle();
});

const locations = [
  { lat: -34.601, lng: -58.371, icon: 'fa-solid fa-wrench', color: '#800080' },
  { lat: -34.645, lng: -58.457, icon: 'fa-solid fa-wrench' },
  { lat: -34.633, lng: -58.402, icon: 'fa-solid fa-wrench' }
];

function initMap() {
  const mapOptions = {
    zoom: 15,
    center: { lat: -34.632, lng: -58.408 },
    scrollwheel: true
  };

  const map = new google.maps.Map(document.getElementById('map'), mapOptions);

  locations.forEach(location => {
    const marker = new google.maps.Marker({
      position: { lat: location.lat, lng: location.lng },
      map: map,
      icon: {
        path: google.maps.SymbolPath.CIRCLE,
        scale: 10,
        fillColor: location.color || '#800080',
        fillOpacity: 1,
        strokeWeight: 2,
        strokeColor: '#fff'
      },
      label: {
        text: '\uf0ad', // Icon code for Font Awesome wrench
        fontFamily: 'Font Awesome 5 Free',
        fontSize: '16px',
        fontWeight: '900',
        color: '#fff'
      }
    });
  });
}

function initMenuToggle() {
  $('.menu-icon-oculto').on('click', function() {
    $('nav').slideToggle();
  });
}

const enlaces = document.querySelectorAll('.a-nav-dos');

enlaces.forEach((enlace) => {
  enlace.addEventListener('mouseover', () => {
    enlace.style.color = '#FFA726'; /* Changes color on mouseover */
  });

  enlace.addEventListener('mouseout', () => {
    enlace.style.color = '#000000'; /* Resets color on mouseout */
  });
});