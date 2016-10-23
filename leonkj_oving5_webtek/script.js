/*jshint esversion: 6 */

/* Part 2 */
console.log('PART 2');

/* For loop that prints the integers 1-20 to the console */
for (let i = 1; i <= 20; i++) {
  console.log(i);
}

/* Part 3 */
console.log('PART 3');

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

/* Iterate over the array numbers */
for (let i = 0; i < numbers.length; i++){
  /* Check if the current number is divisible by 3 and/or 5 and
     declare constant boolean values, for readability */
  const isDivisibleBy3 = numbers[i] % 3 === 0;
  const isDivisibleBy5 = numbers[i] % 5 === 0;

  /* print eplekake, kake, eple or the current number, as given by the task */
  if (isDivisibleBy3 && isDivisibleBy5) {
    console.log('eplekake');
  } else if (isDivisibleBy3) {
    console.log('kake');
  } else if (isDivisibleBy5) {
    console.log('eple');
  } else {
    console.log(numbers[i]);
  }
}

/* Part 4 */

/* Change the inner html of the element with id 'title' to 'Hello, JavaScript' */
document.getElementById('title').innerHTML = 'Hello, JavaScript';

/* Part 5 */

/* make a constant reference to the #magic element for convenience */
const magicElement = document.getElementById('magic');

/* change the display attribute of #magic to none */
function changeDisplay(){
  magicElement.style.display = "none";
}

/* change multiple style attributes, display block and visibility hidden */
function changeVisibility(){
  magicElement.style.display = "block";
  magicElement.style.visibility = "hidden";

  /* Alternative approach – I think the approach above is easier to read
  magicElement.setAttribute("style", "display: block; visibility: hidden;"); */
}

/* change multiple style attributes, display block and visibility visible */
function reset(){
  magicElement.style.display = "block";
  magicElement.style.visibility = "visible";
}

/* Part 6 */
const technologies = [
  'HTML5',
  'CSS3',
  'JavaScript',
  'Python',
  'Java',
  'AJAX',
  'JSON',
  'React',
  'Angular',
  'Bootstrap',
  'Node.js'
];

/* make a constant reference to the #tech ul */
const techList = document.getElementById('tech');

/* iterate over the technologies array */
for (let i = 0; i < technologies.length; i++) {
  /* for each element in the array, add a li element with the content
     of the current element in the array to the ul with id tech */
  techList.innerHTML += '<li>' + technologies[i] + '</li>';

  /* alternative approach
  const tempTechItem = document.createElement('LI');
  const tempText = document.createTextNode(technologies[i]);
  tempTechItem.appendChild(tempText);
  techList.appendChild(tempTechItem); */
}

/* Another alternative approach using lambdas
techList.innerHTML = technologies.map(technologyName => '<li>' + technologyName + '</li>').join(''); */
