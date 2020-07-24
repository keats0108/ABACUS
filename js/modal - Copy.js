// Get the modal
var modal26 = document.getElementById("modal26");
var modal25 = document.getElementById("modal25");
var modal24 = document.getElementById("modal24");
var modal23 = document.getElementById("modal23");
var modal22 = document.getElementById("modal22");
var modal21 = document.getElementById("modal21");
var modal20 = document.getElementById("modal20");
var modal19 = document.getElementById("modal19");
var modal18 = document.getElementById("modal18");
var modal17 = document.getElementById("modal17");
var modal16 = document.getElementById("modal16");
var modal15 = document.getElementById("modal15");
var modal14 = document.getElementById("modal14");
var modal13 = document.getElementById("modal13");
var modal12 = document.getElementById("modal12");
var modal11 = document.getElementById("modal11");
var modal10 = document.getElementById("modal10");
var modal9 = document.getElementById("modal09");
var modal8 = document.getElementById("modal08");
var modal7 = document.getElementById("modal07");
var modal6 = document.getElementById("modal06");
var modal5 = document.getElementById("modal05");
var modal4 = document.getElementById("modal04");
var modal3 = document.getElementById("modal03");
var modal2 = document.getElementById("modal02");
var modal1 = document.getElementById("modal01");
var modal = document.getElementsByClassName("modal");

// Get the button that opens the modal
var btn26 = document.getElementById("event26");
var btn25 = document.getElementById("event25");
var btn24 = document.getElementById("event24");
var btn23 = document.getElementById("event23");
var btn22 = document.getElementById("event22");
var btn21 = document.getElementById("event21");
var btn20 = document.getElementById("event20");
var btn19 = document.getElementById("event19");
var btn18 = document.getElementById("event18");
var btn17 = document.getElementById("event17");
var btn16 = document.getElementById("event16");
var btn15 = document.getElementById("event15");
var btn14 = document.getElementById("event14");
var btn13 = document.getElementById("event13");
var btn12 = document.getElementById("event12");
var btn11 = document.getElementById("event11");
var btn10 = document.getElementById("event10");
var btn9 = document.getElementById("event09");
var btn8 = document.getElementById("event08");
var btn7 = document.getElementById("event07");
var btn6 = document.getElementById("event06");
var btn5 = document.getElementById("event05");
var btn4 = document.getElementById("event04");
var btn3 = document.getElementById("event03");
var btn2 = document.getElementById("event02");
var btn1 = document.getElementById("event01");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn1.onclick = function() {
    modal1.style.display = "block";
}
btn2.onclick = function() {
    modal2.style.display = "block";
}
btn3.onclick = function() {
    modal3.style.display = "block";
}
btn4.onclick = function() {
    modal4.style.display = "block";
}
btn5.onclick = function() {
    modal5.style.display = "block";
}
btn6.onclick = function() {
    modal6.style.display = "block";
}
btn7.onclick = function() {
    modal7.style.display = "block";
}
btn8.onclick = function() {
    modal8.style.display = "block";
}
btn9.onclick = function() {
    modal9.style.display = "block";
}
btn10.onclick = function() {
    modal10.style.display = "block";
}
btn11.onclick = function() {
    modal11.style.display = "block";
}
btn12.onclick = function() {
    modal12.style.display = "block";
}
btn13.onclick = function() {
    modal13.style.display = "block";
}
btn14.onclick = function() {
    modal14.style.display = "block";
}
btn15.onclick = function() {
    modal15.style.display = "block";
}
btn16.onclick = function() {
    modal16.style.display = "block";
}
btn17.onclick = function() {
    modal17.style.display = "block";
}
btn18.onclick = function() {
    modal18.style.display = "block";
}
btn19.onclick = function() {
    modal19.style.display = "block";
}
btn20.onclick = function() {
    modal20.style.display = "block";
}
btn21.onclick = function() {
    modal21.style.display = "block";
}
btn22.onclick = function() {
    modal22.style.display = "block";
}
btn23.onclick = function() {
    modal23.style.display = "block";
}
btn24.onclick = function() {
    modal24.style.display = "block";
}
btn25.onclick = function() {
    modal25.style.display = "block";
}
btn26.onclick = function() {
    modal26.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}