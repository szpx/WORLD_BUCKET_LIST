let map;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 0 , lng: 0 },
    zoom: 2
  });
  

}

function addMarkerOnMap(dream) {
  const marker = new google.maps.Marker({
    position: dream.coordinates,
    icon: dream.done ? "./img/marker_done.png" : "./img/marker.png",
    map: map
  });

  marker.addListener('click', function() {
    zoomOn(marker.getPosition());
  });

  addMapListeners();
  }

  const resetMapButton = document.getElementById("reset-map");

  function addMapListeners() {
    resetMapButton.addEventListener("click", resetMap); 
  }

  function zoomOn(position) {
    map.setZoom(20);
    map.setCenter(position);
    map.setMapTypeId("satellite")
  }

  function resetMap() {
    map.setCenter({ lat: 0 , lng: 0 });
    map.setMapTypeId("roadmap");
    map.setZoom(2);
  }

export {initMap,addMarkerOnMap};