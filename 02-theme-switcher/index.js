/*
    Hints: 
    1. Attach click event handlers to all four of the 
       buttons (#default, #ocean, #desert, and #high-contrast).
    2. Modify the className property of the body tag 
       based on the button that was clicked.
*/
// const defaultB = () => {
//    var target1 = document.querySelector("h1");
//    target1.style.color = "#555";
//    // target1.style.width = "100%";
//    // target1.style.marginLeft = "20%"
//    // target1.style.height = "100%";
//    // target1.style.padding = "10%";
//    var target2 = document.querySelector("header");
//    target2.style.backgroundColor = "#F2F2F2";
//    target2.style.borderBottom = "solid 1px #CCC";

//    document.querySelector("#default").style.color = "#666";
//    document.querySelector("#desert").style.color = "#666";
//    document.querySelector("#ocean").style.color = "#666";
//    document.querySelector("#high-contrast").style.color = "#666";

//    var target3 = document.querySelector("p");
//    target3.style.color = "#666";
//    // target1.style.width = "100%";
//    // target1.style.marginLeft = "20%"
//    // target1.style.height = "100%";
//    // target1.style.padding = "10%";
//    var target4 = document.querySelector(".content");
//    target4.style.backgroundColor = "white";

//    document.querySelector("nav").style.borderBottom = target2.style.borderBottom = "solid 1px #CCC";
// };
// const desertB = () => {
//    var target1 = document.querySelector("h1");
//    target1.style.color = "#EFDEC2";
//    // target1.style.width = "100%";
//    // target1.style.marginLeft = "20%"
//    // target1.style.height = "100%";
//    // target1.style.padding = "10%";
//    var target2 = document.querySelector("header");
//    target2.style.backgroundColor = "#A8651E";
//    target2.style.borderBottom = "solid 1px #774713";

//    document.querySelector("#default").style.color = "#A8651E";
//    document.querySelector("#desert").style.color = "#A8651E";
//    document.querySelector("#ocean").style.color = "#A8651E";
//    document.querySelector("#high-contrast").style.color = "#A8651E";

//    var target3 = document.querySelector("p");
//    target3.style.color = "#EFDEC2";
//    // target1.style.width = "100%";
//    // target1.style.marginLeft = "20%"
//    // target1.style.height = "100%";
//    // target1.style.padding = "10%";
//    var target4 = document.querySelector(".content");
//    target4.style.backgroundColor = "#A8651E";

//    document.querySelector("nav").style.borderBottom = target2.style.borderBottom = "solid 1px #774713";
// };
// const oceanB = () => {
//    var target1 = document.querySelector("h1");
//    target1.style.color = "white";
//    target1.style.fontFamily = "Montserrat";
//    // target1.style.width = "100%";
//    // target1.style.marginLeft = "20%"
//    // target1.style.height = "100%";
//    // target1.style.padding = "10%";
//    var target2 = document.querySelector("header");
//    target2.style.backgroundColor = "#434a6c";
//    target2.style.borderBottom = "solid 1px #434a6c";

//    document.querySelector("#default").style.color = "#434a6c";
//    document.querySelector("#desert").style.color = "#434a6c";
//    document.querySelector("#ocean").style.color = "#434a6c";
//    document.querySelector("#high-contrast").style.color = "#434a6c";

//    var target3 = document.querySelector("p");
//    target3.style.color = "#434a6c";
//    // target1.style.width = "100%";
//    // target1.style.marginLeft = "20%"
//    // target1.style.height = "100%";
//    // target1.style.padding = "10%";
//    var target4 = document.querySelector(".content");
//    target4.style.backgroundColor = "#99cccc";
//    target4.style.lineHeight = "1.6em";
//    document.querySelector("nav").style.borderBottom = target2.style.borderBottom = "solid 1px #434a6c";
// };
// const contrastB = () => {
//    var target1 = document.querySelector("h1");
//    target1.style.color = "white";
//    // target1.style.width = "100%";
//    // target1.style.marginLeft = "20%"
//    // target1.style.height = "100%";
//    // target1.style.padding = "10%";
//    var target2 = document.querySelector("header");
//    target2.style.backgroundColor = "black";
//    target2.style.borderBottom = "solid 1px black";

//    document.querySelector("#default").style.color = "black";
//    document.querySelector("#desert").style.color = "black";
//    document.querySelector("#ocean").style.color = "black";
//    document.querySelector("#high-contrast").style.color = "black";

//    var target3 = document.querySelector("p");
//    target3.style.color = "black";
//    // target1.style.width = "100%";
//    // target1.style.marginLeft = "20%"
//    // target1.style.height = "100%";
//    // target1.style.padding = "10%";
//    var target4 = document.querySelector(".content");
//    target4.style.backgroundColor = "white";

//    document.querySelector("nav").style.borderBottom = target2.style.borderBottom = "solid 1px black";
// };
const defaultB = () => {
   document.querySelector(".container").className = "container";
}
const desertB = () => {
   document.querySelector(".container").className = "container desert";
}
const oceanB = () => {
   document.querySelector(".container").className = "container ocean";
}
const contrastB = () => {
   document.querySelector(".container").className = "container high-contrast";
}
document.querySelector("#default").addEventListener('click', defaultB);
document.querySelector("#desert").addEventListener('click', desertB);
document.querySelector("#ocean").addEventListener('click', oceanB);
document.querySelector("#high-contrast").addEventListener('click', contrastB);