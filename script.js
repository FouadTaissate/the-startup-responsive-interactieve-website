let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");

  if (n > slides.length) {
    slideIndex = 1;
  }

  if (n < 1) {
    slideIndex = slides.length;
  }

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slides[slideIndex - 1].style.display = "flex";
}

// const open = document.getElementById("open");
// const modal_container = document.getElementById("modal_container");
// const close = document.getElementById("close");

// open.addEventListener("click", () => {
//   // modal_container.classList.add("show");
//   document.getElementsByClassName("modal_container.show").style.display =
//     "block";
// });

// close.addEventListener("click", () => {
//   document.getElementById("show").style.display = "block";
// });

// function hide() {
//   document.getElementById("show").style.display = "block";
// }

// function hide() {
//   document.getElementById("modal_container").style.display === "none";
// }

// const open = document.getElementById("open");
// const modal_container = document.getElementById("modal_container");
// const close = document.getElementById("close");

// open.addEventListener("click", () => {
//   modal_container.classList.add("show");
// });

// close.addEventListener("click", () => {
//   modal_container.classList.remove("show");
// });
