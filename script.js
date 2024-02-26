document.onclick = function(event) {
    var clickX = event.clientX;
    var clickY = event.clientY;
    var clickTimestamp = new Date().toLocaleString();
    var clickCoordinatesElement = document.getElementById("clickCoordinates");
    clickCoordinatesElement.style.left = clickX + "px";
    clickCoordinatesElement.style.top = clickY + "px";
    clickCoordinatesElement.innerHTML = "your click has been clicked here: (" + clickX + ",   " + clickY + ")<br> <br> on this Time : " + clickTimestamp;

    clickCoordinatesElement.style.display = "block"; 
    setTimeout(function(){ clickCoordinatesElement.style.display = "none"; }, 6000); 
};