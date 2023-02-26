console.log("jeg er i fetchkommuner");

const urlkommuner = "https://api.dataforsyningen.dk/kommuner";
const selkommuner = document.getElementById("selKommuner");
const pbButton = document.getElementById("pbButton");
const divtags = document.getElementById("divtags");


// Functional
// Fetches the kommuner from the API
function fetchkommuner(url) {
    console.log(url);
    return fetch(url).then((response) => response.json());
}

// Functional
// Asyncronally fetches the kommuner from the API and adds each object
async function showAllKommuner() {
    const kommuneList = await fetchkommuner(urlkommuner);
    console.log(kommuneList);
    kommuneList.forEach(addKommuneToDropdown);
}

function addKommuneToDropdown(kommune) {
    //console.log(kommune)
    const kommuneOption = document.createElement("option");
    kommuneOption.textContent = kommune.navn;
    kommuneOption.value = kommune.kode;
    kommuneOption.kommune = kommune;
    selkommuner.appendChild(kommuneOption);
}

function actionShowAllKommuner() {
    showAllKommuner();
}

function selectKommune() {
    const selectIndex = selkommuner.selectedIndex;
    const selectedKommune = selkommuner.options[selectIndex];
    console.log(selectIndex);
    console.log(selectedKommune);
    console.log(selectedKommune.kommune);
    console.log(selectedKommune.value);
    const kommune = selectedKommune.kommune;
    const atag = document.createElement("a");
    atag.href = kommune.href;
    atag.innerHTML = "<br>" + kommune.navn + "<br>";
    divtags.appendChild(atag);
}

pbButton.addEventListener('click', actionShowAllKommuner);
selkommuner.addEventListener('change', selectKommune);