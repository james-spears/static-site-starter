import img from '../_images/beach.jpg?hero';

const elem = <HTMLImageElement>(document.getElementById('form-img'));

if (elem) {
  elem.src = img;
}