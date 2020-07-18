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

}

export {initMap,addMarkerOnMap};