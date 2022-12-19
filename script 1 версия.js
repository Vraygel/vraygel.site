let log = console.log;

const sliderAActive = document.querySelectorAll(".slider_img");
const sliderArrow = document.querySelector(".slider__arrows");
const thumbnailImg = document.querySelectorAll(".thumbnail_img");
const thumbnail = document.querySelector(".thumbnail");
const thumbnailSliderArrows = document.querySelector(".thumbnail_slider__arrows");
let intervalID
let score = 0;

// thumbnailSliderArrows.addEventListener("click", (event) => {
//   if (event.target.classList.contains("slider__arrow_up")) {
//     thumbnail.scrollTop -= 100;
//   }
//   if (event.target.classList.contains("slider__arrow_down")) {
//     thumbnail.scrollTop += 100;
//   }
// });

// sliderArrow.addEventListener("click", (event) => {
//   clearActiveClasess();
//   animatedFunc();

//   if (event.target.classList.contains("slider__arrow_next")) {
//     score = (score + 1) % sliderAActive.length;
//     addActiveClasess(score);
//     clearActiveClasessThumbnail();
//     thumbnailImg[score].classList.add("active_img");
//   }
//   if (event.target.classList.contains("slider__arrow_prev")) {
//     score == 0 ? (score = 10) : (score = (score - 1) % sliderAActive.length);
//     addActiveClasess(score);
//     clearActiveClasessThumbnail();
//     thumbnailImg[score].classList.add("active_img");
//   }
//   clearInterval(intervalID)
//   autoRotate()
  
// });

// thumbnailImg.forEach((item, index) => {
//   item.addEventListener("click", (event) => {
//     clearActiveClasessThumbnail();
//     clearActiveClasess();
//     event.target.classList.add("active_img");
//     animatedFunc();
//     score = index;
//     addActiveClasess(score);
//     clearInterval(intervalID)
//     autoRotate()
//   });
// });

// function clearActiveClasessThumbnail() {
//   thumbnailImg.forEach((slide) => {
//     slide.className = "thumbnail_img";
//   });
// }

// function clearActiveClasess() {
//   sliderAActive.forEach((item) => {
//     item.classList.remove("fadeInDown");
//     item.classList.remove("active_slide");
//     item.classList.remove("slow");
//     item.classList.remove("show");
//   });
// }

// function addActiveClasess(score) {
//   sliderAActive[score].classList.add("fadeInDown");
//   sliderAActive[score].classList.add("active_slide");
//   sliderAActive[score].classList.add("slow");
//   sliderAActive[score].classList.add("animated");
// }

// function animatedFunc() {
//   const animated = document.querySelector(".animated");
//   animated.className = "slider_img show";
// }

// function autoRotate() {
//     intervalID = setInterval(() => {
//     score = (score + 1) % sliderAActive.length;
//     addActiveClasess(score);
//     clearActiveClasessThumbnail();
//     thumbnailImg[score].classList.add("active_img");
//     clearActiveClasess();
//     animatedFunc();
//     addActiveClasess(score);
//     }, 5000);
// }

// +function autoRotateStart() {
//     autoRotate()
// }()





















let button = document.querySelector('button')
let animate = document.querySelector('.animate')

let classesAnimated =
  "bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp";

classesAnimated = classesAnimated.split(" ");

let indexAnimate = 0;
button.onclick = () => {
  let deleteDiv = document.querySelector(".animated");
  if (deleteDiv) {
    deleteDiv.remove();
  }

  log(classesAnimated[indexAnimate]);
  animate.insertAdjacentHTML(
    "afterBegin",
    `<div class="animated infinite ${classesAnimated[indexAnimate]} delay-1s slow">${classesAnimated[indexAnimate]}</div>`
  );
  indexAnimate = (indexAnimate + 1) % classesAnimated.length;
};

// let addDivClassTask = classesAnimated.forEach(element => {
// log(element)

//  animate.insertAdjacentHTML('afterBegin', `<div class="animated infinite ${element} delay-5s slower">${element}</div>`)
// });
