const AREA = document.body;
const CIRCLE = document.querySelector('.circle');
const CIRCLETWO = document.querySelector('.circle2');

var windowWidth = window.innerWidth;
var windowHeight = window.innerHeight;

function mouseCoordinates(e) {

  var horizontalPosition = windowWidth - e.clientX - 26;
  var verticalPosition = windowHeight - e.clientY - 26;

  CIRCLE.style.left = horizontalPosition + 'px';
  CIRCLE.style.top = verticalPosition + 'px';

}

function mouseCoordinatesX(e) {
  var horizontalPosition = windowWidth - e.clientX - 26;
  var verticalPosition = windowHeight - e.clientY - 26;

  CIRCLETWO.style.right = horizontalPosition + 'px';
  CIRCLETWO.style.top = verticalPosition + 'px';
}

function changeColorOnTouch() {
  CIRCLE.style.backgroundColor = "green";
  CIRCLE.style.borderColor = "green";
}

function changeColor() {
  CIRCLETWO.style.backgroundColor = "black";
  CIRCLETWO.style.borderColor = "black";
}

AREA.addEventListener('mousemove', mouseCoordinates, false);

AREA.addEventListener('mousemove', mouseCoordinatesX, false);

CIRCLE.addEventListener('mouseenter', changeColorOnTouch, false);

CIRCLETWO.addEventListener('mouseenter', changeColor, false);

CIRCLE.addEventListener('mouseleave', function(){CIRCLE.removeAttribute("style");}, false);

CIRCLETWO.addEventListener('mouseleave', function(){CIRCLETWO.removeAttribute("style");}, false);
