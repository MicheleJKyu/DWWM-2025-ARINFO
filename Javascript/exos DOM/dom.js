// // Exo 1
// document.querySelector("#first-button")
// element.addEventListener("click",function() {
//     alert("C'est cool hein ?");
// })

//  //Exo 2
// let button1 = document.querySelector("#second-button");

// button1.addEventListener("click", function() {
//     let input = document.querySelector("#text").value;
//     alert(input);
// });

//Exo 3
let tableau = ["red", "green", "blue", "yellow", "orange", "white"];
let button = document.querySelector('#color')

button.addEventListener("click", function () {
    let index = Math.floor(Math.random() * tableau.length);
    let couleur = tableau[index];
    document.body.style.backgroundColor = couleur;
});

//Exo 4
let image1 = document.querySelector("#logo");
let imageoriginale = image1.src;

image1.addEventListener("mouseover", function () {
    image1.style.opacity = "0";

    setTimeout(() => {
        image1.src = "assets/js-logo.jpg";
        image1.style.opacity = "1";
    }, 400); // moitié de la durée CSS
});

image1.addEventListener("mouseout", function () {
    image1.style.opacity = "0";

    setTimeout(() => {
        image1.src = imageoriginale;
        image1.style.opacity = "1";
    }, 400);
});

image1.addEventListener("mouseout", function() {
    image1.style.opacity = "0";
    setTimeout(() => {
        image1.src = imageoriginale;
        image1.style.opacity = "1";
    }, 200);
});


//Exo 5
let image2 = document.querySelector("#fuji");

window.addEventListener("scroll", function() {
    if (window.scrollY > 100) {
       image2.style.position = "fixed"
       image2.style.top = "75vh"
    }
    else {
        image2.style.position = "fixed"
        image2.style.top = "10px"
        image2.style.bottom = ""
    }
});


//Exo 6
let p = document.querySelector("#para");

p.addEventListener("mouseover", function() {
    p.style.fontSize = "20px"
    p.style.color = "red"
    p.style.backgroundColor = "yellow"
})
p.addEventListener("mouseout", function() {
    p.style.fontSize = "16px"
    p.style.color = "black"
    p.style.backgroundColor = "white"
});