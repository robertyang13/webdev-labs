const makeBigger = () => {
   //alert('make bigger!');
   var fontlar = document.querySelector(".content")
   var style = window.getComputedStyle(fontlar, null).getPropertyValue('font-size');
   var fontSize = parseFloat(style); 
// now you have a proper float for the font size (yes, it can be a float, not just an integer)
   fontlar.style.fontSize = (fontSize + 3) + 'px';

   var fontlar2 = document.querySelector("h1")
   var style = window.getComputedStyle(fontlar2, null).getPropertyValue('font-size');
   var fontSize = parseFloat(style); 
// now you have a proper float for the font size (yes, it can be a float, not just an integer)
   fontlar2.style.fontSize = (fontSize + 3) + 'px';
   //document.querySelector("p").style.fontSize = "larger";
};

const makeSmaller = () => {
  // alert('make smaller!');
  // document.querySelector("p").style.fontSize = "smaller";
  var fontlar = document.querySelector(".content")
  var style = window.getComputedStyle(fontlar, null).getPropertyValue('font-size');
  var fontSize = parseFloat(style); 
// now you have a proper float for the font size (yes, it can be a float, not just an integer)
  fontlar.style.fontSize = (fontSize - 3) + 'px';

  var fontlar2 = document.querySelector("h1")
  var style = window.getComputedStyle(fontlar2, null).getPropertyValue('font-size');
  var fontSize = parseFloat(style); 
// now you have a proper float for the font size (yes, it can be a float, not just an integer)
  fontlar2.style.fontSize = (fontSize - 3) + 'px';
};


document.querySelector("#a1").addEventListener('click', makeBigger);
document.querySelector("#a2").addEventListener('click', makeSmaller);

