const hiddenElements = document.querySelectorAll(".hidden");

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if(entry.isIntersecting){
            entry.target.classList.add("show");
            entry.target.classList.remove("hidden");
        }
    });
});

hiddenElements.forEach((element) => {
    observer.observe(element);
});


function toggleDark() {
    document.body.classList.toggle("dark");
    if(document.body.classList.contains("dark")){
        var ancorTag = document.querySelectorAll("a");
        ancorTag.forEach(function(a){
            a.addEventListener("mouseenter", function(){
                a.style.color = "#3465a1";
            });
            a.addEventListener("mouseleave", function(){
                a.style.color = "white";
            });
            a.style.color = "black";
        });
        var mode = document.querySelectorAll(".corner-nav-btn");
        mode.forEach(function(m){
            m.addEventListener("mouseenter",function(){
                m.style.color = "#f1f1f1";
            });
            m.addEventListener("mouseleave", function(){
                m.style.color = "white";
            });
        });
    }
    else{
        var ancorTag = document.querySelectorAll("a");
        ancorTag.forEach(function(a){
            a.addEventListener("mouseenter", function(){
                a.style.color = "#527AF2";
            });
            a.addEventListener("mouseleave", function(){
                a.style.color = "black";
            });
            a.style.color = "black";
        });
        var mode = document.querySelectorAll(".corner-nav-btn");
        mode.forEach(function(m){
            m.addEventListener("mouseenter",function(){
                m.style.color = "#f1f1f1";
            });
            m.addEventListener("mouseleave", function(){
                m.style.color = "black";
            });
        });
    }
}


var element = document.querySelector(".rain");
var text = element.textContent;

element.innerHTML = text.split("").map(letter => `<span>${letter}</span>`).join("");

var letters = document.querySelectorAll(".waves");
letters.forEach(function(letter){
    letter.innerHTML = letter.textContent.split(" ").map(word => `<span>${word}</span>`).join(" ");
});

var lettersAlt = document.querySelectorAll(".wavesAlt");
lettersAlt.forEach(function(letter){
    letter.innerHTML = letter.textContent.split(" ").map(word => `<span>${word}</span>`).join(" ");
});

// function moveLetters(){
//     var letters = document.querySelector(".rain");
//     if(document.body.contains(letters)){
//         letters.forEach(function(letter){
//             letter.addEventListener("mouseover", function(){
//                 letter.style.transform = "translateY(50px)";
//             });

//             letter.addEventListener("mouseleave", function(){
//                 letter.style.transform = "translateY(0)";
//             });
            
//         });
//     }
// }





// const carousel = document.querySelector('.carousel-container');
// let isDown = false;
// let start;
// let scrollLeft;

// carousel.addEventListener('mousedown', (e) => {
//     isDown = true;
//     start = e.pageX - carousel.offsetLeft;
//     scrollLeft = carousel.scrollLeft;
// });

// carousel.addEventListener('mouseleave', () => {
//     isDown = false;
// });

// carousel.addEventListener('mouseup', () => {
//     isDown = false;
// });

// carousel.addEventListener('mousemove', (e) => {
//     if (!isDown) return;
//     e.preventDefault();
//     const x = e.pageX - carousel.offsetLeft;
//     const walk = (x - start) * 2; //scroll-fast
//     carousel.scrollLeft = scrollLeft - walk;
// });


