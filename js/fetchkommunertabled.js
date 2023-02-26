console.log("jeg er i fetchkommunertabled");

const pbHentKommuner = document.getElementById("pbHentKommuner");
const tableKommuner = document.getElementById("tableKommuner");
const API_URL = "https://api.dataforsyningen.dk/kommuner";

function fetchKommuner(url) {
    return fetch(url).then(response => response.json());
}

async function showAllKommuner() {
    const kommuneList = await fetchKommuner(API_URL);
    console.log(kommuneList);
    kommuneList.forEach(addKommunerToTable);
}

function addKommunerToTable(kommune) {
    const tr = document.createElement("tr");
    tr.innerHTML = `
        <td><a href=${kommune.href}>${kommune.navn}</a></td></a>
        <td>${kommune.kode}</td>
        <td>${kommune.regionskode}</td>
    `;
    tableKommuner.appendChild(tr);
}

pbHentKommuner.addEventListener("click", showAllKommuner);