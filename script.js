var ContainerInfos = document.getElementById("ContainerInfos")
var Choix = document.getElementById("parentgridschedule")
var Afficher = false;

function GenerateInfos(race) {
    var cat = race.substring(0,3);
    var gp = race.substring(3);

    var parentDiv = document.createElement("div"); //Create parent div
    parentDiv.classList.add("parentinfos");

    if (cat == 'fo1') {
        var childClasses = ["div1gridinfos", "div2gridinfos", "div3gridinfos", "div4gridinfos", "div5gridinfos", "div6gridinfos"];
        var ids = ["gpname", "gpdate", "gpclose", "gpround", "gpmap", "gpinfos"];
    }

    else if (cat = 'wec') {

    }

    else if (cat = 'wrc') {

    }

    for (var i = 0; i < childClasses.length; i++) {
        var childDiv = document.createElement("div");
        childDiv.classList.add(childClasses[i]);
        childDiv.id = ids[i];
        parentDiv.appendChild(childDiv);

    return parentDiv;
    }
}

function ShowInfos(race) {

    if (Afficher == false){
        ContainerInfos.style.display = "grid";
        Afficher = true;
        ContainerInfos.appendChild(GenerateInfos(race));
    }
    else {
        ContainerInfos.style.display = "none";
        Afficher = false;
        ContainerInfos.innerHTML = ''; // Clear the HTML content
    }
}
