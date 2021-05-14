//Ex1
let ex1 = document.querySelector('h2')
console.log(ex1.innerText);

//mettre le innerText au bon endroit.Si on le met dans la variable, celui ci ne va stocker que le text donc par la suite, appliquer un innerText à un simple text ne va pas fonctionner.

//Ex2 modifiation
ex1.innerText = "Exercice 1";

//Ex3 
let ex3 = ex1.nextElementSibling
ex3.innerText = `ex1.innerText = "Exercice 1"`
console.log(ex3);

//Ex4
let ex4 = document.querySelector('#users').id
//le .id a la fin va montrer le nom de l'Id
console.log(ex4);

//Ex5
let ex5 = document.querySelector('h1').classList // .classList qui va l'afficher dans un pseudo tableau DOMToken List

//Ou le .className a la fin va permettre de voir directement le nom de la classe
console.log(ex5);

//Ex6
let ex6 = document.querySelectorAll('h1')
ex6.forEach(element => {
    console.log(element.className);
});

//Ex7 
//Montre tous les attributs dans un pseudo tableau NamedNodeMap
let ex7 = document.querySelector('input').attributes
console.log(ex7);

//Ex8 //Recup la valeur d'un attribut
let ex8 = document.querySelector('input').getAttribute('type')
console.log(ex8);

//Ex9
//D'abord selectionner
//Ensuite changer. On ne peut pas faire les deux en une seule ligne directement !
let ex9 = document.querySelector('#inputPassword3');
ex9.setAttribute("type","password");

console.log(ex9);

//Ex10
//Sert aussi à la modification
ex9.setAttribute("type","color")


