var ContainerInfos = document.getElementById("ContainerInfos")
var Choix = document.getElementById("parentgridschedule")
var Afficher = false;

function ShowInfos() {
    if (Afficher == false){
        ContainerInfos.style.display = "block";
        Afficher = true;
    }
    else {
        ContainerInfos.style.display = "none";
        Afficher = false;
    }
}
