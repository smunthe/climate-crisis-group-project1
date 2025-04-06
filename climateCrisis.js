function menuDisplay() {
    var x = document.getElementById("menu");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}

function plantsDisplay() {
  var s = document.getElementsByClassName("plants");
  for (var i = 0; i < s.length; i++) {
    if (s[i].style.display === "flex") {
      s[i].style.display = "none";
    } else {
      s[i].style.display = "flex";
    }
  }
}

function insectsDisplay() {
  var s = document.getElementsByClassName("insects");
  for (var i = 0; i < s.length; i++) {
    if (s[i].style.display === "flex") {
      s[i].style.display = "none";
    } else {
      s[i].style.display = "flex";
    }
  }
}

function mammalsDisplay() {
  var s = document.getElementsByClassName("mammals");
  for (var i = 0; i < s.length; i++) {
    if (s[i].style.display === "flex") {
      s[i].style.display = "none";
    } else {
      s[i].style.display = "flex";
    }
  }
}

function birdsDisplay() {
  var s = document.getElementsByClassName("birds");
  for (var i = 0; i < s.length; i++) {
    if (s[i].style.display === "flex") {
      s[i].style.display = "none";
    } else {
      s[i].style.display = "flex";
    }
  }
}

const images = [
  "assets/slide1.jpg",
  "assets/slide2.jpg",
  "assets/slide3.jpg",
  "assets/slide4.jpg",
  "assets/slide5.jpg"
];

let index =0;
const slide = document.getElementById("slide");

setInterval(() => {
  index = (index + 1) % images.length;
  slide.src = images[index];
}, 3000);