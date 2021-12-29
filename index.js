var stars = document.getElementById("stars");
var text = document.querySelector(".welcome");
var moon = document.getElementById("moon");
var bridge = document.getElementById("bridge");
var mountains = document.getElementById("mountains");
var btn = document.getElementById("btn");



document.addEventListener('scroll',function(e){
  var value = window.scrollY;
  stars.style.left = value * 0.25+ 'px';
  moon.style.top = value * 1.05 + 'px';
  mountains.style.top = value * 0.5 + 'px';
  text.style.marginRight = value * 4 + "px";
  btn.style.marginTop = value * 1.8 + "px";

})
