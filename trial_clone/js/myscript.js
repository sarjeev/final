function toggleSidebar(){
  document.getElementById("sidebar").classList.toggle('active');
}
function on() {
  document.getElementById("navigation").style.display = "block";
}

function off() {
  document.getElementById("navigation").style.display = "none";
}
function openForm() {
  document.getElementById("myForm").style.display = "block";
}

function closeForm() {
  document.getElementById("myForm").style.display = "none";
}
var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 3000); // Change image every 2 seconds
}



function pon() {
  document.getElementById("part").style.display = "block";
}

function poff() {
  document.getElementById("part").style.display = "none";
}

function on() {
  document.getElementById("overlay").style.display = "block";
}

function off() {
  document.getElementById("overlay").style.display = "none";
}
function prepon() {
  document.getElementById("prep").style.display = "block";
}

function prepoff() {
  document.getElementById("prep").style.display = "none";
}

function ex3on() {
  document.getElementById("ex3").style.display = "block";
}

function ex3off() {
  document.getElementById("ex3").style.display = "none";
}

function lon() {
  document.getElementById("li").style.display = "block";
}

function loff() {
  document.getElementById("li").style.display = "none";
}
function ex1on() {
  document.getElementById("ex1").style.display = "block";
}

function ex1off() {
  document.getElementById("ex1").style.display = "none";
}
function ex2on() {
  document.getElementById("ex2").style.display = "block";
}

function ex2off() {
  document.getElementById("ex2").style.display = "none";
}

function ex1on() {
  document.getElementById("ex1").style.display = "block";
}

function ex1off() {
  document.getElementById("ex1").style.display = "none";
}

function ex4on() {
  document.getElementById("ex4").style.display = "block";
}

function ex4off() {
  document.getElementById("ex4").style.display = "none";
}

function ex5on() {
  document.getElementById("ex5").style.display = "block";
}

function ex5off() {
  document.getElementById("ex5").style.display = "none";
}

function ex6on() {
  document.getElementById("ex6").style.display = "block";
}

function ex6off() {
  document.getElementById("ex6").style.display = "none";
}


/*Sudarshan*/

function introduction_on() {
  document.getElementById("introduction").style.display = "block";
}

function introduction_off() {
  document.getElementById("introduction").style.display = "none";
}

function conclusion_on() {
  document.getElementById("conclusion").style.display = "block";
}

function conclusion_off() {
  document.getElementById("conclusion").style.display = "none";
}


function paragraph_on() {
  document.getElementById("paragraph").style.display = "block";
}

function paragraph_off() {
  document.getElementById("paragraph").style.display = "none";
}


function link_on() {
  document.getElementById("link").style.display = "block";
}

function link_off() {
  document.getElementById("link").style.display = "none";
}


function prepare_on() {
  document.getElementById("prepare").style.display = "block";
}

function prepare_off() {
  document.getElementById("prepare").style.display = "none";
}


function structure_on() {
  document.getElementById("structure").style.display = "block";
}

function structure_off() {
  document.getElementById("structure").style.display = "none";
}


function evidence_on() {
  document.getElementById("evidence").style.display = "block";
}

function evidence_off() {
  document.getElementById("evidence").style.display = "none";
}


function review_on() {
  document.getElementById("review").style.display = "block";
}

function review_off() {
  document.getElementById("review").style.display = "none";
}


function sample_on() {
  document.getElementById("sample").style.display = "block";
}

function sample_off() {
  document.getElementById("sample").style.display = "none";
}
