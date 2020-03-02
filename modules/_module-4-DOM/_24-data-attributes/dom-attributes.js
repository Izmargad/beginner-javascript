const pic = document.querySelector('.nicer');
pic.classList.add('open');
pic.classList.remove('cool');

console.log(pic.classList);

function toggleRound() {
  pic.classList.toggle('round');
}

pic.addEventListener('click', toggleRound);
pic.alt = 'The name of the image'; // setter
console.log(pic.alt); // getter
pic.width = 1000;
console.log(pic.naturalWidth); // may return 0

/**
 * Add an eventListener to make sure
 * all elements have loaded
 * before we try to get the values
 *
 * pic.addEventListener('load', function (){
 * console.log(pic.naturalWidth); // getter
 * })
 */
