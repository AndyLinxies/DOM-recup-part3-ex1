//Exo1
let h2Rec = document.querySelector('h2');

console.log(h2Rec.innerText);

//Exo2
h2Rec.innerText = "exo1";

//Exo3

let p = h2Rec.nextElementSibling;
console.log(p);
p.innerText = `h2Rec.innerText = "exo1";`;

//Exo 4
let premiereSection = document.querySelector('section');
console.log(premiereSection.id);

//Exo 5
let premiereH1 = document.querySelector('h1');
console.log(premiereH1.className);
console.log(premiereH1.classList);
console.log(premiereH1.getAttribute('class'));

//Exo 6
let listequiestpasliste = document.querySelectorAll('h1');
listequiestpasliste.forEach(element => {
    console.log(element.className);
});

//Exo 7
let premierInput = document.querySelector('input');
console.log(premierInput.attributes);

//Exo 8
console.log(premierInput.getAttribute('type'));

//Exo 9
let inputPass3 = document.querySelector('input#inputPassword3');
inputPass3.setAttribute('type','password');
console.log(inputPass3);

//Exo 10
premierInput.setAttribute('type','color');
console.log(premierInput.type);