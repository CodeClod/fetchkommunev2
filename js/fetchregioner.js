console.log("Jeg er i fetchregioner.js");

const pbRegioner = document.getElementById("buttonGetRegioner");
const ddRegioner = document.getElementById("ddRegioner");
const API_URL = "https://api.dataforsyningen.dk/regioner";


function fetchRegioner(url) {
    return fetch(url).then((response) => response.json());
}

async function getAllRegioner() {
    const regionList = await fetchRegioner(API_URL);
    regionList.forEach(addRegioner);
}

function addRegioner(region) {
    const regionOption = document.createElement("option");
    regionOption.textContent = region.navn;
    regionOption.value = region.kode;
    regionOption.region = region.region;
    ddRegioner.appendChild(regionOption);
}

pbRegioner.addEventListener("click", getAllRegioner);
