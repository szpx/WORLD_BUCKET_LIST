let map;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 48.881356 , lng: 2.362160 },
    zoom: 4
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