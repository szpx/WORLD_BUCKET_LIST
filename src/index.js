import {initMap} from "./map"
import {buildAllDreams} from "./dream"

function init() {
    initMap();
    buildAllDreams();
}

window.init = init;