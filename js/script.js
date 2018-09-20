/* =====================================
  Preloader
======================================*/
$(window).on('load', function() {
  $('#status').fadeOut();
  $('#preloader').delay(350).fadeOut('slow');
});

/* =====================================
  Navbar
======================================*/

// show & hide white navbar
$(function() {

  //on page load
  showHideNav();

  //on scroll
  $(window).scroll(function() {
    showHideNav()
  });

  //show and hide white navbar
  function showHideNav() {
    if ($(window).scrollTop() > 50) {
      //show
      $("#navbarNav").addClass("white-navbar");

      $(".navbar-brand img").attr("src", "");

      //Back to Top button
      $("#back-to-top").fadeIn();
    } else {
      //hide
      $("#navbarNav").removeClass("white-navbar");

      $(".navbar-brand img").attr("src", "");

      //Back to Top button
      $("#back-to-top").fadeOut();
    }
  }
});


/* =====================================
  Google Map
======================================*/

$(window).on('load', function() {

  var addressString = "Brooklyn, NY";
  var myLatLng = {
    lat: 40.678178,
    lng: -73.944158
  };

  // render map
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 11,
    center: myLatLng
  });

  // add marker
  var marker = new google.maps.Marker({
    position: myLatLng,
    map: map,
    title: "Click to see address",
  });

  // add info window
  var infoWindow = new google.maps.InfoWindow({
    content: addressString
  });

  // show info window when user clicks marker
  marker.addListener('click', function() {
    infoWindow.open(map, marker);
  });

  // resize
  google.maps.event.addDomListener(window, 'resize', function() {
    var center = map.getCenter();
    google.maps.event.trigger(map, 'resize');
    map.setCenter(center);
  });
});


/* =====================================
  Other guests
======================================*/
// if window's width >= 1200, don't owlCarousel

$(function() {
  $(".other-guests").owlCarousel({
    items: 3,
    autoplay: true,
    smartspeed: 700,
    loop: true,
    autoplayHoverPause: true,
    nav: true,
    navText: ['<i class="fas fa-angle-left"></i>', '<i class="fas fa-angle-right"></i>'],
    dots: false,
    responsive: {
      //breakpoint from 0 up
      0: {
        items: 3,
      },
      //breakpoint from 400 up
      576: {
        items: 4,
      },
      768: {
        items: 5,
      }
    },
  });
});
