/* =====================================
  Preloader
======================================*/
$(window).on('load', function() {
  $('#status').fadeOut();
  $('#preloader').delay(350).fadeOut('slow');
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
