import {data} from "./data"
import {addMarkerOnMap,visitDreamOnMap} from "./map"

const dreamsContainer = document.querySelector("#dreams-container");


function buildAllDreams() {
    while(dreamsContainer.hasChildNodes()) {
        dreamsContainer.removeChild(dreamsContainer.lastChild);
    }
    data.forEach(buildOneDream);
    addDreamsListeners();
}

function buildOneDream(dream) {

    const dreamElement = document.createElement("div");
    dreamElement.innerHTML = `<div class="card text-center" id="${dream.id}">
    <h5 class="card-header font-weight-bold"> ${dream.description}</h5>
    <img src="${dream.imagePath}" class="card-img-top" alt="...">
    <div class="card-body">
        <a href="#" class="button-action btn btn-${dream.done?"secondary":"danger"} font-weight-bold btn-block">${dream.done?"Je veux le refaire":"Je me lance !"}</a>  
    </div>
    <div class="card-footer text-muted text-center">
        <a href="#" class="button-visit btn btn-outline-dark btn-sm">Visiter</a>
        <a href="${dream.link}" target="_blank" class="btn btn-outline-dark btn-sm">Plus d'informations</a>
    </div>
    </div>`;
    dreamsContainer.appendChild(dreamElement);

    addMarkerOnMap(dream);
}

function addDreamsListeners() {
    document.querySelectorAll(".button-visit").forEach(item => {
        item.addEventListener("click", event => {
            visitDream(item.parentElement.parentElement.getAttribute("id"));
        })
    })

    document.querySelectorAll(".button-action").forEach(item => {
        item.addEventListener("click", event => {
            toggleDreamDone(item.parentElement.parentElement.getAttribute("id"));
        })
    }) 
}

function visitDream(dreamId) {
    let position = data.filter(item => item.id == dreamId)[0].coordinates;
    visitDreamOnMap(position);
}

function toggleDreamDone(dreamId) {
    let dream = data.filter(item => item.id == dreamId)[0];
    dream.done = !dream.done;
    buildAllDreams()
}
export {buildAllDreams};