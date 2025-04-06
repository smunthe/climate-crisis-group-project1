function menuDisplay() {
    var x = document.getElementById("menu");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }

}

const images = [
  "assets/slide6.jpg",
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