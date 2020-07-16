import {data} from "./data"
import {addMarkerOnMap} from "./map"

function buildAllDreams() {
    data.forEach(buildOneDream);
}

function buildOneDream(dream) {
    addMarkerOnMap(dream);
}


export {buildAllDreams};