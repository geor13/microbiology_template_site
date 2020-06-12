function initMap() {
    console.log("adding-map");
    // The location of Uluru
    var xalkida = {lat: 38.46361, lng: 23.59944};
    // The map, centered at Uluru
    var map = new google.maps.Map(
        document.getElementById('map-container'), {zoom: 17, center: xalkida});
    // The marker, positioned at Uluru
    var marker = new google.maps.Marker({position: xalkida, map: map});

  }

window.addEventListener("load",initMap);

  