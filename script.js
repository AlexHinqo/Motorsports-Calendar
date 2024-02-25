var ContainerInfos = document.getElementById("ContainerInfos") //Endroit ou afficher les infos
var Afficher = false;

let data;
fetch('infos.json')
    .then(response => response.json())
    .then(jsonData => {data = jsonData;})
    .catch(error => console.error('Error fetching JSON:', error));


function GenerateInfos(race) {
    var cat = race.substring(0,3);
    var gp = race.substring(3);

    var parentDiv = document.createElement("div"); //Create parent div
    parentDiv.classList.add("parentinfos");

    if (cat == 'fo1') {
        var childClasses = ["div1gridinfos", "div2gridinfos", "div4gridinfos", "div5gridinfos", "div6gridinfos"];
        var ids = ["gpname", "gpdate", "gpround", "gpmap", "gpinfos"];
    }

    else if (cat = 'wec') {
        
    }

    else if (cat = 'wrc') {

    }

    for (var i = 0; i < childClasses.length; i++) {
        var childDiv = document.createElement("div");
        childDiv.classList.add(childClasses[i]);
        childDiv.id = ids[i];
        childDiv.innerHTML = data[cat][gp][ids[i]]
        parentDiv.appendChild(childDiv);

    }
    return parentDiv;
}

function ShowInfos(race) {

    if (Afficher == false){
        ContainerInfos.style.display = "grid";
        Afficher = true;
        ContainerInfos.appendChild(GenerateInfos(race));
    }
    else {
        CloseInfos();
    }
}

function CloseInfos() {
    ContainerInfos.style.display = "none";
    Afficher = false;
    ContainerInfos.innerHTML = `<div class="div3gridinfos"> <img src ='assets/close.png' alt ="Fermer l'onglet des informations" onclick="CloseInfos()" role ='button' tabindex='0'> </div>`;

}
