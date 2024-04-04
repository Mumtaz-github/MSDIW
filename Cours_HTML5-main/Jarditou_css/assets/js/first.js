/* 
                                                                             exercise les variables 2

    Créer un script qui demande successivement à l'utilisateur son nom puis son prénom. 
    La page affichera les informations sur l'utilisateur via une "alert()"
var nom
var prenom
nom = prompt ("Saisissez votre nom")
prenom = prompt ("Saisissez votre prenom")
alert(nom)
alert(prenom)*/
 
/*Ecrire un programme qui calcule le produit de deux nombres entrés par l'utilisateur et affiche le résultat.!!!
var x ;
var y ;

x = prompt ("saisissez result");
y = prompt ("saisissez numbre")
 alert(x*y)
 */

 /*Ecrire un programme qui convertit des degrés Celsius en degrés Fahrenheit en utilisant la formule suivante :
let c = 50;
let f = 0 ;
c = prompt ("saissiez degrès")
 alert (F = (c *(9/5)) + 32);
*/

                                                                          //exercise les opérateurs

/* var a,b,c,d
   a = 100
   b = 100
   c =1.00
   d = true


   alert("Ceci est une chaînes de caractère:"+a);   

    a = b--;                         //appliquez à b l'opérateur de décrémentation
   console.log(b);
   
   alert(c+a);                      // ajoutez à c le valeur de a

   d=!d                             // inversez la valeur de d
   console.log(d)
   */
  




// 5. Les Conditions 

// let a = prompt("entrer un nombre ");                                                   Exercise 1 Parité

// if  (a%2 == 0) {
//    alert("ce nombre et pair")
// } else {
//    alert ("ce nombre est impair")
// }

// let naissance =prompt("Entre date de naissance");                                          Exercise 2 Age
//  let date = 2024;
 
//  age =  date -naissance; 

// if (age < 18) {
  
//    alert("tu as"+age+"ans donc tu est mineur")
// }else {
//    alert("tu as" +age+"ans donc tu est majeur")
// }

// let nombre01 = Number(prompt("Entre votre nombre01"));                                   Exercice 3 Calculette
// let operator = prompt("choissisez entre /,*,-, ou +")
// let nombre02 = Number(prompt("Entre vote nombre02"));

// if (operator == "+") {
//    console.log(nombre01+nombre02)
// }
//  else if (operator == "-") {
//    document.write(nombre01-nombre02)
// }
//  else if (operator == "*") {
//    document.write(nombre01 +"*"+nombre02+"="+nombre01*nombre02)
// }
//  else if (operator == "/" && nombre02!=0) {
//    document.write(nombre01/nombre02)
// }else {
//    alert ('operateur érroné ou on ne peut pas diviser par 0')
// }

/*
nb = prompt("entrer le nb")                                                               //example de bucles
console.log("Table de multiplication par"+nb);
console.log("=============================");


for (i=0; i<=10; i++)
{
    resultat = nb * i;

    document.write(nb +"*"+i+" = "+resultat );
    console.log(nb +"*"+i+" = "+resultat );
}

// instructions exécutées après le for (i vaut 10)
console.log("fin de la boucle");
*/



//   let prenom = [];                                                                           Exercise 1  Les Boucles
//   for(let i =0;i<10;i++){
//       prenom [i] = prompt("Saisissez le prénom N°"+i+" ou Clic sur Annuler pour arrêter le saisie");
//       if (prenom[i] == ""){
//          break
//       }
//       console.log("prenom");
//   }
// alert("Your name is " + prenom +"."+prenom.length);

//  
                                              

                                                    //Exercice 2 Entier inférieurs à N
/*
// var N = 0;
// var  int = prompt("veuillez saisissez le nombre");

// for (n = 10;  int >= 0; int--) {
//     alert(int);
//     console.log(n);
//     n - int;
// }

*/

/*
                                                                                           Exercice 3 moyenne   partie 6 Boucles

var n = 1;
var somme = 0;
var i = 0;


while (n>0) {
  n = parseInt(prompt ("Saisissez un nombre"));
  somme += n;
  i++;
}
console.log(somme);
console.log(somme/i);
*/

  /*                                                                            exercice 4 multiples         partie 6   boucles
  var n, x
  n = prompt ("Entre un premier nombre");
  x= prompt ("Etnrez un scond nombre");
  
  for (i=1; i<=n; i++)
  {
    console.log(i+"x"+x+"="+(x*i));

  }
  console.log("fin de la boucle");
  */



/*

  let word = "programming";
  var vowelCount = 0;
   
  for (let i = 0; i < word.length; i++) {
      let currentChar = word[i];
      if ('aeiouAEIOU'.includes(currentChar)) {
          vowelCount++;
          console.log(vowelCount);
      }
  }
   */

/*
                                                                         Exercice 5 Nombre de voyelles   dernier partie boucles

  function countVowels(word) {
    const vowels = ["a", "e", "i", "o", "u"]
      let count = 0;
      let start = 0;
  
      // loop through string to test if each character is a vowel

      while (start < word.length){
        const subword = word.substring(start, start +1);
        const index = vowels.indexOf(subword.toLowerCase());
        if (index !== -1) {
          count++;
        }
          start++;
      }
         return count;
      }
  
 
  const userword= prompt('Entrez un mot: ');
  alert('Nombre de voyekkes dabs " ' + userword + ' ": ' + countVowels(userword));

  */



           /*                                                                          Exercice#1 fonction 
  
let a = Number (prompt("Entrez un nombre"));
let b = Number (prompt("Entrez un multiplicateur"));
var resultat = produit(a,y);
var carre = produit(a, a);

function produit(a,b) {
  return a * a
}

let div_affichage = document.querySelector("#affichage");
let div_mmg = document.querySelector("#mmg");
div_mmg.innerHTML = "le cube de :"+x+" est égal à : "+carre
div_affichage.innerHTML = "le produit est égal à : "+resultat

*/


                                                                                   //Exercice 2  fonction        String Token
 
  /* 
    function strtok(str1,str2, n) {
    return str1.split(str2)[n-1]
   }
   var x="abcdkbcdkghdkjkdhsr";
   strtok(x,"d",3);


ou

function strtok(str1, str2, n){
  return str1.split(str2)[n-1]
}

var a ="robert;dupont;amiens;80000";
strtok(a, ";", 2)
*/

    /*                                                                                       Exercice myTableau
let myTableau = new Array();
var nb = prompt("Entrez le nombre d'invites")
for (var i =0; i<nb; i++)
{
  myTableau.push(prompt("Veuillez entrer le nom de l'invites n°"+(i+1)+" ;"));

}
console.log(myTableau)
console.log(myTableau.length)

*/

                                              