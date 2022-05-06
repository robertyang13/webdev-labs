/* 
  See Smashing Magazine Tutorial:
  https://www.smashingmagazine.com/2021/11/dyslexia-friendly-mode-website/
*/
ctr = 0;

const dysL = () => {
  var target1 = document.querySelector("h1");
  // target1.style.fontSize = document.querySelector("dyslexia-mode").style.fontSize;
  target1.style.fontSize = "150%";
  target1.style.letterSpacing = "0.35ch";
  target1.style.wordSpacing = "1.225ch"
  target1.style.fontWeight = 600;
  target1.style.color = "#000";

  // target1.style.fontSize = document.querySelector("dyslexia-mode").style.fontSize;
  var target2 = document.querySelectorAll("p");
  var i = 0, l = target2.length;
  for (; i < l; i++) {
    target2[i].style.fontSize = "150%";
    target2[i].style.letterSpacing = "0.35ch";
    target2[i].style.wordSpacing = "1.225ch"
    target2[i].style.fontWeight = 600;
    target2[i].style.color = "#000";
    target2[i].style.lineHeight = 2.0;
    target2[i].style.marginTop = "3.5em";
    target2[i].style.width = "50%";
    target2[i].style.marginLeft = "25%";
  }

  var target3 = document.querySelector("h2");
  target3.style.fontSize = "150%";
  target3.style.letterSpacing = "0.35ch";
  target3.style.wordSpacing = "1.225ch"
  target3.style.fontWeight = 600;
  target3.style.color = "#000";
  target3.style.marginTop = "3.5em"
  target3.style.width = "50%";
  target3.style.marginLeft = "25%";

  var target4 = document.querySelector("#dyslexia-toggle");
  target4.style.fontWeight = 600;
  target4.style.color = "#000";
  // HOW TO DISABLE LIGATURES
};
const change = (ev) => {
  const elementClicked = ev.currentTarget;
  //if (elementClicked.src === imgOff) {
 // if (document.querySelector(".content").className === "content") {
if(document.querySelector("div").classList.contains("content")) {
    //document.querySelector("#dyslexia-toggle").addEventListener('click', dysL);
    document.querySelector(".content").className = "dyslexia-mode"
      //document.querySelector('#dyslexia-toggle').src = imgOn; 
  } else {
    // document.querySelector("#dyslexia-toggle").removeEventListener('click', dysL);
      //document.querySelector('#dyslexia-toggle').src = imgOff; 
      document.querySelector(".dyslexia-mode").className = "content"
  }
}; 

const myfun = () => {
  let element = document.querySelector(".content");
  element.classList.toggle("dyslexia-mode");
}
// toggle dyslexia support
// const isPressed = window.localStorage.getItem('dyslexic') === 'true';
// if(isPressed) {
//   document.body.classList.add('dyslexia-mode');
//   }
//   // set the button to pressed if appropriate
//   const toggle = document.getElementById('dyslexia-toggle');
//   if(isPressed) {
//       toggle.setAttribute('aria-pressed', 'true');
//   }
//   // toggle dyslexia support
//   toggle.addEventListener('click', (e) => {
//       let pressed = e.target.getAttribute('aria-pressed') === 'true';
//       e.target.setAttribute('aria-pressed', String(!pressed));
//       document.body.classList.toggle('dyslexia-mode');
//       window.localStorage.setItem('dyslexic', String(!pressed));
//   });
document.querySelector("#dyslexia-toggle").addEventListener('click', myfun);