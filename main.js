//Exo1
let div = document.getElementsByTagName('div')[2];
let firstDiv = div.firstElementChild;
console.log(firstDiv);
//Exo2
let lastDiv = div.lastElementChild;
console.log(lastDiv);

//Ex3
 let i = firstDiv.nextElementSibling.firstElementChild;

 console.log(i);

 //'Exo4
 let b = lastDiv.firstElementChild;

 console.log(b);

//5
 let iP = i.parentElement;
 console.log(iP);

 //6 Exo

 let bP = b.parentElement;

 console.log(bP);

 //7 Ex
 let firstchildLastDiv = firstDiv.nextElementSibling;

 console.log(firstchildLastDiv);
 