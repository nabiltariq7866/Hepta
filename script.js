let menubar = document.querySelector(".menubar");
let faBars = document.querySelector(".fa-bars");
let faXmark = document.querySelector(".fa-xmark");

faBars.addEventListener("click", function () {
  gsap.to(menubar, {
    transform: "translateX(0%)",
    duration: 0.5,
  });
});
faXmark.addEventListener("click", function () {
  gsap.to(menubar, {
    transform: "translateX(100%)",
    duration: 0.5,
  });
});

let h1 = document.querySelectorAll(".menubar h1 a");
for (i = 0; i < h1.length; i++) {
  h1[i].addEventListener("click", function () {
    let current = document.getElementsByClassName("activemenu");
    current[0].className = current[0].className.replace("activemenu", "");
    this.className = "activemenu";
  });
}
let prev = document.querySelector(".prev");
let next = document.querySelector(".next");
let slides = document.querySelectorAll(".page4col2 img");
let dots = document.querySelectorAll(".dot");
let pagenum = document.querySelectorAll(".page-item");
for (i = 0; i < pagenum.length; i++) {
  pagenum[i].addEventListener("click", function () {
    let current = document.getElementsByClassName("liactive");
    current[0].className = current[0].className.replace(
      "liactive",
      "page-item"
    );
    this.className = "liactive";
  });
}

prev.addEventListener("click", prevSlide);
next.addEventListener("click", nextSlide);
let counter = 0;
function prevSlide() {
  slides[counter].style.animation = "prev1 0.5s ease-in forwards";
  if (counter == 0) {
    counter = slides.length - 1;
  } else {
    counter--;
  }
  slides[counter].style.animation = "prev2 0.5s ease-in forwards";
  indicators();
}
function nextSlide() {
  slides[counter].style.animation = "next1 0.5s ease-in forwards";
  if (counter >= slides.length - 1) {
    counter = 0;
  } else {
    counter++;
  }
  slides[counter].style.animation = "next2 0.5s ease-in forwards";
  indicators();
}
let deleteinterval;
function autoslideing() {
  deleteinterval = setInterval(timer, 4000);
  function timer() {
    nextSlide();
    indicators();
  }
}
autoslideing();

const container = document.querySelector(".sliderContainer");
container.addEventListener("mouseover", function () {
  clearInterval(deleteinterval);
});
container.addEventListener("mouseleave", function () {
  autoslideing();
});
// add and remove active class
function indicators() {
  for (let i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace("active", " ");
  }
  dots[counter].className += "active";
}
// page overloading animatino
let ani = document.querySelectorAll(".ani");
ani.forEach(function (elem) {
  gsap.to(elem, {
    y: 0,
    duration: 1.5,
    opacity: 1,
    scrollTrigger: {
      trigger: elem,
      scroller: "body",
      start: "top 90%",
    },
  });
});
