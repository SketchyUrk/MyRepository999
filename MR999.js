let fireButton = document.getElementById("fire_button");
let body = document.body;


fireButton.onclick = function() {
    body.style.backgroundColor = "black";
    body.style.backgroundImage = "url('fire.gif')";
    body.style.imageRepeat = "no-repeat";
    body.style.backgroundSize = "cover";
    fireButton.style.all = "unset";
}