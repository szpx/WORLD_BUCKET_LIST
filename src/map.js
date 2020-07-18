let map;
let panorama;
const panoramaElement = document.querySelector("#panorama");
const resetMapButton = document.getElementById("reset-map");
const backToMapButton = document.getElementById("back-to-map");


function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 0 , lng: 0 },
    zoom: 2,
    streetViewControl: false
  });

  panorama = new google.maps.StreetViewPanorama(
    document.getElementById("panorama"), {
      position: { lat: 36.255309, lng: -112.698277 },
      pov: {
        heading: 200,
        pitch: 0,
        zoom: 0
      }
    });

    addMapListeners();

    panoramaElement.style.display = "none";
    backToMapButton.style.display = "none";
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
}

  function addMapListeners() {
    resetMapButton.addEventListener("click", resetMap); 
    backToMapButton.addEventListener("click", backToMap); 
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

  function backToMap() {
    panoramaElement.style.display = "none";
    backToMapButton.style.display = "none";
    resetMapButton.style.display = "block";
  }

  function visitDreamOnMap(position) {
    panorama.setPosition(position)
    panoramaElement.style.display = "block";
    backToMapButton.style.display = "block";
    resetMapButton.style.display = "none";
  }
  
export {initMap,addMarkerOnMap,visitDreamOnMap};