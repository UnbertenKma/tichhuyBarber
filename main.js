var toTransfer = document.getElementsByClassName('toTransfer');

var listImg =   document.getElementsByClassName('slide_trending');


var l = 0;

toTransfer[1].onclick = ()=> {
    l++;
    for (var i of listImg) {
        if (l==0) {
            i.style.left = "0px";
        }
        if (l==1){
            i.style.left = "-740px";
        }
        if (l==2){
            i.style.left = "-1480px";
        }
        if (l==3){
            i.style.left = "-2220px";
        }
        if (l==4){
            i.style.left = "-2960px";
        }
        if (l>4) {
            l=4;
        }
    }
}

toTransfer[0].onclick = ()=> {
    l--;
    for (var i of listImg) {
        if (l==0) {
            i.style.left = "0px";
        }
        if (l==1){
            i.style.left = "-740px";
        }
        if (l==2){
            i.style.left = "-1480px";
        }
        if (l==3){
            i.style.left = "-2220px";
        }
        if (l<0) {
            l=0;
        }
    }
}

setInterval(toTransfer[1].onclick, 3000);

setInterval(toTransfer[0].onclick, 3400);

// window.addEventListener("load", function() {
//     const slider = document.querySelector(".slider");
//     const sliderWrap = document.querySelector(".slide-img_wrap");
//     const nextBtn = document.querySelector(".slide-convert_next");
//     const prevBtn = document.querySelector(".slide-convert_prev");
//     const slideDisplays = document.querySelectorAll(".slide_img-display");
//     const sliderDisplayWidth = slideDisplays[0].offsetWidth;//lấy ra chiều rộng
    
//     const sliderLength = slideDisplays.length; //lấy ra số phần tử trong ...
//     let positionX = 0;
//     let index = 0;

//     nextBtn.addEventListener("click", function(){
//         handleChangeSlide(1);
//     });

//     prevBtn.addEventListener("click", function(){
//         handleChangeSlide(-1);
//     });


//     function handleChangeSlide(direction) {
//         if(direction === 1) {
//             index++;
//             if(index >= sliderLength){
//                 index = sliderLength;
//                 return;
//             } 
//             positionX = positionX - sliderDisplayWidth;
//             sliderWrap.style = `transform: translateX(${positionX}px)`;
//         }
//         else if (direction === -1) {
//             index--;
//             if(index <= 0){
//                 index = 0;
//                 return; 
//             } 
//             positionX = positionX + sliderDisplayWidth;
//             sliderWrap.style = `transform: translateX(${positionX}px)`;
//         }
//     }

//     // setInterval(nextBtn.onclick, 3000);
    
// });


var slideIndex =1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// function showSlides(n) {
//     var i;
//     var slides = document.getElementsByClassName("mySlides");
//     var dots = document.getElementsByClassName("dot");
//     if (n > slides.length) {slideIndex = 1}
//     if (n < 1) {slideIndex = slides.length}
//     for (i = 0; i < slides.length; i++) {
//         slides[i].style.display = "none";
//     }
//     for (i = 0; i < dots.length; i++) {
//         dots[i].className = dots[i].className.replace(" active", "");
//     }
//     slides[slideIndex-1].style.display = "block";
//     dots[slideIndex-1].className += " active";
// }



auto-slides-show
var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 2500);
}



