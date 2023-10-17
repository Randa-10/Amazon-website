
var slideIndex = 0;
showDivs(slideIndex);

function plusDivs(n) {
    showDivs(slideIndex += n);
}

function showDivs(n) {
    var x = document.getElementsByClassName("mySlides");

    if (n > x.length - 1) {
        slideIndex = 0
    }
    if (n < 0) {
        slideIndex = x.length - 1
    }
    for (var i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
   x[slideIndex].style.display = "block";
}



setInterval(function () {
    showDivs(slideIndex += 1);
},5000);
