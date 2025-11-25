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
//--------appendChild per creare un nuovo p dentro del div --------------//
const nweP= document.createElement('p');
divOne.appendChild(nweP);
//----------createTextNode per aggiungere il testo dentro del p ---------//
const node= document.createTextNode('quarto');
nweP.appendChild(node);

//-------------METODO PIU STANDAR é USARE innerHTML---------------------//
nweP.innerHTML = 'quarto paragrafo';
nweP.innerHTML = '<strong>quarto paragrafo </strong>';

//-----------------Esempio--------------------//
const student1 = {name: 'Alexander', surname: 'Macias', age: 26, gender: 'Male'};
const student2 = {name: 'Evelyn', surname: 'Medina', age: undefined, gender: 'Female'};

//-----------append-----------//
const emptyDiv = document.getElementById('empty-div');
const cardDiv = document.createElement('div');
cardDiv.id = 'first-card'; // si aggiunge l'id
emptyDiv.appendChild(cardDiv);

//---------------- inseriamo il nome---------------------//
const nameP= document.createElement('p');
const nameNode = document.createTextNode('Nome: ' + student1.name);
nameP.appendChild(nameNode);
cardDiv.appendChild(nameP);

//---------------- inseriamo il cognome---------------------//
const surnameP= document.createElement('p');
const surnameNode = document.createTextNode('Cognome: ' + student1.surname);
surnameP.appendChild(surnameNode);
cardDiv.appendChild(surnameP);

//---------------- inseriamo l'eta con un altro sistema un po piu veloce ---------------------//
const ageP= document.createElement('p');
ageP.appendChild(document.createTextNode('Eta: '+ student1.age));
cardDiv.appendChild(ageP)

//---------------- inseriamo il gender ---------------------//
const genderP= document.createElement('p');
genderP.appendChild(document.createTextNode('Genere: '+ student1.gender));
cardDiv.appendChild(genderP);

//--------------------- Esempio con innerHTML -------------------------//
const htmlString =`<div class="card">
    <p>Nome: ${student2.name} </p>
    <p>Cognome: ${student2.surname}</p>
    <p>Età: ${student2.age}</p>
    <p>Genere: ${student2.gender}</p>
</div>`;
console.log(htmlString);
console.log(emptyDiv.innerHTML);

//emptyDiv.innerHTML = emptyDiv.innerHTML + htmlString;
emptyDiv.innerHTML += htmlString;

//-------------AGGIUNGERE CLASSI AL HTML TRAMITE JS--------------------//

const card = document.getElementById('first-card');
// card.className = 'card';
// card.className = 'card green-background';

card.classList.add('card');
card.classList.add('green-background');
card.classList.toggle('card'); //se c'e la classe la toglie se non ce la mette


//-----------------------------------------------------------------------------------/

const fruits = [
    { name: "banana", origin: "ecuador", weight: 100 },
    { name: "mela", origin: "italia", weight: 200 },
    { name: "mango", origin: "venezuela", weight: 50 },
    { name: "avocado", origin: "perù", weight: 10 },
    { name: "papaya", origin: "guatemala", weight: 70 },
]

const container = document.getElementById('fruit-container');

// for (const fruit of fruits) {

//     const fruitHtml = `<div class="card">
//     <p>nome: ${fruit.name}</p>
//     <p>origin: ${fruit.origin}</p>
//     <p>peso: ${fruit.weight} kg</p>
// </div>`

// container.innerHTML += fruitHtml;

// }

for (const fruit of fruits) {


    const cardFruit = document.createElement('div');
    container.appendChild(cardFruit);

    const nameFruit = document.createElement('p');
    const nameNodeFruit = document.createTextNode('nome: ' + fruit.name);
    cardFruit.classList.add('card');
    nameFruit.appendChild(nameNodeFruit);
    cardFruit.appendChild(nameFruit);



    const originFruit = document.createElement('p');
    const originNodeFruit = document.createTextNode('origine: ' + fruit.origin);

    originFruit.appendChild(originNodeFruit);
    cardFruit.appendChild(originFruit);


    const weightFruit = document.createElement('p');
    const weightNodeFruit = document.createTextNode('peso: ' + fruit.weight);

    weightFruit.appendChild(weightNodeFruit);
    cardFruit.appendChild(weightFruit);



}