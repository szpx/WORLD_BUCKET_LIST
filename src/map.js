let map;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 36.255538, lng: -112.697993 },
    zoom: 10
  });
  
  const marker = new google.maps.Marker({
    position: { lat: 36.255538, lng: -112.697993 },
    icon: "./img/marker.png",
    map: map
  });
}

export {initMap};