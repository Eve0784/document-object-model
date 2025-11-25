// trovare un elemento nel dom

//----------------- getElementById---------------------------//
const divOne = document.getElementById('div1');
console.log(divOne);

//------------------getElementsByClassName-------------------//
const pCollection = document.getElementsByClassName('pippo');
console.log(pCollection);

const divCollection = document.getElementsByClassName('pluto');
console.log(divCollection);

//------------------getElementsByTagName--------------------//
const tagCollection = document.getElementsByTagName('p');
console.log(tagCollection);

//------------------querySelector prende solo il primo che trova-----------------------//
const firstP = document.querySelector('p');
console.log(firstP);

//------------------querySelectorAll prende tutti con quel tag-----------------------//
const allPs = document.querySelectorAll('p');
console.log(allPs);

const allPippo = document.querySelectorAll('.pippo');
console.log(allPippo);

const divOneA = document.querySelector('#div1');
console.log(divOneA);

//----------------LEGGERE IL CONTENUTO-------------------------//

console.log(divOne.innerText);
console.log(divOne.textContent);
console.log(divOne.innerHTML);
console.log(divOne.outerHTML);
console.log(divOne.children);

//----------------SCRIVERE IL CONTENUTO------------------------//