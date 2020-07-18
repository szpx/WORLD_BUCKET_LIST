import {data} from "./data"
import {addMarkerOnMap} from "./map"

const dreamsContainer = document.querySelector("#dreams-container");


function buildAllDreams() {
    while(dreamsContainer.hasChildNodes()) {
        dreamsContainer.removeChild(dreamsContainer.lastChild);
    }
    data.forEach(buildOneDream);
}

function buildOneDream(dream) {

    const dreamElement = document.createElement("div");
    dreamElement.innerHTML = `<div class="card text-center">
    <h5 class="card-header font-weight-bold"> ${dream.description}</h5>
    <img src="${dream.imagePath}" class="card-img-top" alt="...">
    <div class="card-body">
        <a href="#" class="btn btn-${dream.done?"secondary":"danger"} font-weight-bold btn-block">${dream.done?"Je veux le refaire":"Je me lance !"}</a>  
    </div>
    <div class="card-footer text-muted text-center">
        <a href="#" class="btn btn-outline-dark btn-sm">Visiter</a>
        <a href="${dream.link}" class="btn btn-outline-dark btn-sm">Plus d'informations</a>
    </div>
    </div>`;
    dreamsContainer.appendChild(dreamElement);

    addMarkerOnMap(dream);
}


export {buildAllDreams};