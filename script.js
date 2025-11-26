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
//card.classList.toggle('card'); //se c'e la classe la toglie se non ce la mette


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

// for (const fruit of fruits) {

//     const cardFruit = document.createElement('div');
//     container.appendChild(cardFruit);

//     const nameFruit = document.createElement('p');
//     const nameNodeFruit = document.createTextNode('nome: ' + fruit.name);
//     cardFruit.classList.add('card-fruit');
//     nameFruit.appendChild(nameNodeFruit);
//     cardFruit.appendChild(nameFruit);



//     const originFruit = document.createElement('p');
//     const originNodeFruit = document.createTextNode('origine: ' + fruit.origin);

//     originFruit.appendChild(originNodeFruit);
//     cardFruit.appendChild(originFruit);


//     const weightFruit = document.createElement('p');
//     const weightNodeFruit = document.createTextNode('peso: ' + fruit.weight);

//     weightFruit.appendChild(weightNodeFruit);
//     cardFruit.appendChild(weightFruit);

// }

//-----------------------------LISTA DEI COSMETICI------------------------------------------------------//

const cosmetici = [
    {
        id: 1,
        nome: "Crema Idratante Viso",
        marca: "Nivea",
        categoria: "Skincare",
        prezzo: 12.99,
        ingredientiPrincipali: ["Aloe Vera", "Acido Ialuronico", "Vitamina E"],
        usoConsigliato: "Mattina e sera",
        recensioni: 4.5,
        inStock: true
    },
    {
        id: 2,
        nome: "Mascara Volume",
        marca: "Maybelline",
        categoria: "Makeup",
        prezzo: 9.99,
        ingredientiPrincipali: ["Cera d'Api", "Pigmenti Minerali"],
        usoConsigliato: "Ogni volta che si desidera",
        recensioni: 4.7,
        inStock: true
    },
    {
        id: 3,
        nome: "Shampoo Antiforfora",
        marca: "Head & Shoulders",
        categoria: "Haircare",
        prezzo: 6.49,
        ingredientiPrincipali: ["Piroctone Olamine", "Zinco Pyrithione"],
        usoConsigliato: "2-3 volte a settimana",
        recensioni: 4.3,
        inStock: true
    },
    {
        id: 4,
        nome: "Balsamo Labbra",
        marca: "Burt's Bees",
        categoria: "Skincare",
        prezzo: 4.99,
        ingredientiPrincipali: ["Cera d'Api", "Olio di Cocco"],
        usoConsigliato: "Quotidianamente",
        recensioni: 4.8,
        inStock: true
    },
    {
        id: 5,
        nome: "Fondotinta Liquido",
        marca: "L'Oréal Paris",
        categoria: "Makeup",
        prezzo: 14.99,
        ingredientiPrincipali: ["Olio di Jojoba", "SPF 15"],
        usoConsigliato: "Mattina",
        recensioni: 4.2,
        inStock: true
    },
    {
        id: 6,
        nome: "Siero Anti-Age",
        marca: "The Ordinary",
        categoria: "Skincare",
        prezzo: 19.99,
        ingredientiPrincipali: ["Retinolo", "Vitamina C"],
        usoConsigliato: "Sera",
        recensioni: 4.6,
        inStock: false
    },
    {
        id: 7,
        nome: "Ombretto Palette",
        marca: "NYX",
        categoria: "Makeup",
        prezzo: 16.99,
        ingredientiPrincipali: ["Pigmenti Minerali", "Olio di Ricino"],
        usoConsigliato: "Occasioni speciali",
        recensioni: 4.4,
        inStock: true
    },
    {
        id: 8,
        nome: "Detergente Viso",
        marca: "La Roche-Posay",
        categoria: "Skincare",
        prezzo: 13.99,
        ingredientiPrincipali: ["Acqua Termale", "Glicerina"],
        usoConsigliato: "Mattina e sera",
        recensioni: 4.7,
        inStock: true
    },
    {
        id: 9,
        nome: "Lacca per Capelli",
        marca: "TRESemmé",
        categoria: "Haircare",
        prezzo: 7.99,
        ingredientiPrincipali: ["Alcool Denat", "Pantenolo"],
        usoConsigliato: "Dopo lo styling",
        recensioni: 4.0,
        inStock: true
    },
    {
        id: 10,
        nome: "Correttore Occhiaie",
        marca: "MAC",
        categoria: "Makeup",
        prezzo: 22.99,
        ingredientiPrincipali: ["Olio di Argan", "Caffeina"],
        usoConsigliato: "Mattina",
        recensioni: 4.9,
        inStock: true
    },
    {
        id: 11,
        nome: "Maschera Capelli",
        marca: "Garnier",
        categoria: "Haircare",
        prezzo: 5.99,
        ingredientiPrincipali: ["Olio di Avocado", "Cheratina"],
        usoConsigliato: "1 volta a settimana",
        recensioni: 4.5,
        inStock: true
    },
    {
        id: 12,
        nome: "Blush in Polvere",
        marca: "Milani",
        categoria: "Makeup",
        prezzo: 10.99,
        ingredientiPrincipali: ["Mica", "Olio di Jojoba"],
        usoConsigliato: "Quotidianamente",
        recensioni: 4.3,
        inStock: true
    },
    {
        id: 13,
        nome: "Tonico Viso",
        marca: "Clinique",
        categoria: "Skincare",
        prezzo: 18.99,
        ingredientiPrincipali: ["Acido Salicilico", "Camomilla"],
        usoConsigliato: "Dopo la detersione",
        recensioni: 4.6,
        inStock: true
    },
    {
        id: 14,
        nome: "Smalto Semipermanente",
        marca: "OPI",
        categoria: "Nailcare",
        prezzo: 11.99,
        ingredientiPrincipali: ["Resine Acriliche", "Pigmenti"],
        usoConsigliato: "Ogni 2 settimane",
        recensioni: 4.8,
        inStock: false
    },
    {
        id: 15,
        nome: "Profumo Donna",
        marca: "Chanel",
        categoria: "Fragrance",
        prezzo: 99.99,
        ingredientiPrincipali: ["Note di Vaniglia", "Fiori Bianchi"],
        usoConsigliato: "Occasioni speciali",
        recensioni: 4.9,
        inStock: true
    },
    {
        id: 16,
        nome: "Scrub Corpo",
        marca: "The Body Shop",
        categoria: "Bodycare",
        prezzo: 15.99,
        ingredientiPrincipali: ["Zucchero di Canna", "Olio di Mandorle"],
        usoConsigliato: "2 volte a settimana",
        recensioni: 4.4,
        inStock: true
    },
    {
        id: 17,
        nome: "Eyeliner Liquido",
        marca: "Kiko Milano",
        categoria: "Makeup",
        prezzo: 8.99,
        ingredientiPrincipali: ["Pigmenti Neri", "Glicerina"],
        usoConsigliato: "Quotidianamente",
        recensioni: 4.2,
        inStock: true
    },
    {
        id: 18,
        nome: "Crema Mani",
        marca: "Neutrogena",
        categoria: "Skincare",
        prezzo: 6.99,
        ingredientiPrincipali: ["Glicerina", "Olio di Karité"],
        usoConsigliato: "Quotidianamente",
        recensioni: 4.5,
        inStock: true
    },
    {
        id: 19,
        nome: "Spray Fissante Makeup",
        marca: "Urban Decay",
        categoria: "Makeup",
        prezzo: 24.99,
        ingredientiPrincipali: ["Alcool Denat", "Glicerina"],
        usoConsigliato: "Dopo il trucco",
        recensioni: 4.7,
        inStock: true
    },
    {
        id: 20,
        nome: "Olio per Capelli",
        marca: "Moroccanoil",
        categoria: "Haircare",
        prezzo: 39.99,
        ingredientiPrincipali: ["Olio di Argan", "Vitamina E"],
        usoConsigliato: "1-2 volte a settimana",
        recensioni: 4.8,
        inStock: true
    }
];

const cosmeticsContainer = document.getElementById('cosmetics-container');

// for (const cosmetico of cosmetici) {
//     const cardCosmetic = document.createElement('div');
//     cardCosmetic.classList.add('card');
//     cosmeticsContainer.appendChild(cardCosmetic);

//     const idCosmetic = document.createElement('p');
///-------------- il node si puo fare direttamente nel appendChild ---> idCosmetic.appendChild(document.createTextNode('Id: ' + cosmetico.id))-------//
//     idCosmetic.appendChild(document.createTextNode('Id: ' + cosmetico.id))
//     cardCosmetic.appendChild(idCosmetic);

//     const nameCosmetic = document.createElement('p');
//     const nameNodeCosmetic = document.createTextNode('Nome: ' + cosmetico.nome);
//     nameCosmetic.appendChild(nameNodeCosmetic);
//     cardCosmetic.appendChild(nameCosmetic);

//     const brandCosmetic = document.createElement('p');
//     const brandCosmeticNode = document.createTextNode('Marca: ' + cosmetico.marca);
//     brandCosmetic.appendChild(brandCosmeticNode);
//     cardCosmetic.appendChild(brandCosmetic);

//     const categoryCosmetic = document.createElement('p');
//     const categoryCosmeticNode = document.createTextNode('Categoria: ' + cosmetico.categoria);
//     categoryCosmetic.appendChild(categoryCosmeticNode);
//     cardCosmetic.appendChild(categoryCosmetic);

//     const priceCosmetic = document.createElement('p');
//     const priceCosmeticNode = document.createTextNode('Prezzo: ' + cosmetico.prezzo + "€");
//     priceCosmetic.appendChild(priceCosmeticNode);
//     cardCosmetic.appendChild(priceCosmetic);

//     const ingredientsCosmetic = document.createElement('p');
//     const ingredientsCosmeticNode = document.createTextNode('Ingredienti Principali: ' + cosmetico.ingredientiPrincipali);
//     ingredientsCosmetic.appendChild(ingredientsCosmeticNode);
//     cardCosmetic.appendChild(ingredientsCosmetic);

//     const UseCosmetic = document.createElement('p');
//     const UseCosmeticNode = document.createTextNode('Uso Consigliato: ' + cosmetico.usoConsigliato);
//     UseCosmetic.appendChild(UseCosmeticNode);
//     cardCosmetic.appendChild(UseCosmetic);

//     const reviewCosmetic = document.createElement('p');
//     const reviewCosmeticNode = document.createTextNode('Recensioni: ' + cosmetico.recensioni);
//     reviewCosmetic.appendChild(reviewCosmeticNode);
//     cardCosmetic.appendChild(reviewCosmetic);

//     const inStockCosmetic = document.createElement('p');
//     const inStockCosmeticNode = document.createTextNode('In Stock: ' + (cosmetico.inStock ? 'sì' : 'no'));
//     inStockCosmetic.appendChild(inStockCosmeticNode);
//     cardCosmetic.appendChild(inStockCosmetic);

// }

// for (const cosmetico of cosmetici) {
//     const cosmeticoHtml = `<div class="cosmeticiCard">
//     <p>Id: ${cosmetico.id}</p>
//     <p>Nome: ${cosmetico.nome}</p>
//     <p>Marca: ${cosmetico.marca}</p>
//     <p>Categoria: ${cosmetico.categoria}</p>
//     <p>Prezzo: ${cosmetico.prezzo}€</p>
//     <p>Ingredienti Principali: ${cosmetico.ingredientiPrincipali.join(', ')}</p>
//     <p>Uso Consigliato: ${cosmetico.usoConsigliato}</p>
//     <p>Recensioni: ${cosmetico.recensioni}</p>
//     <p>In Stock: ${cosmetico.inStock ? 'sì' : 'no'}</p>
// </div>`
// cosmeticsContainer.innerHTML += cosmeticoHtml;
// }


//--------------------------------------EVENTI--------------------------------------//
//------------------FUNZIONI DI CALLBACK-------------------------//

function pressedButton(){
    alert('non esagerare!!!')
}

//--------------------------------ADDEVENTLISTENER------------------------//
const myButton = document.getElementById('press-counter');

let totalPress = 0;
function addPress() {
    totalPress += 1;
    console.log(totalPress); 
    const displayer = document.getElementById('press-displayer');
    displayer.innerHTML += 'hai schiacciato '+ totalPress + ' volte<br>'
}
myButton.addEventListener('click', addPress); // la funzione non si da con le tonde nell'addEventListener

//---------------------------------- classList toggle-------------------------------//
const switchButton = document.getElementById('switch-btn');

function switchOn() {
    switchButton.classList.toggle('on');
    const span= document.querySelector('#switch-btn span');
    if (span.innerText === 'OFF') {
        span.innerText = 'ON';
    }
    else{
        span.innerText = 'OFF';
    }
}

switchButton.addEventListener('click', switchOn)