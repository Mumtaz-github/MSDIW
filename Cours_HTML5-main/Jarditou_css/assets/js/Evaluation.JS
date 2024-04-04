
    
                                                 //Exercice 1 calcul nombre,moyen et vieux

// var jeune = 0
// var entre = 0
// var middle = 0
// var age = 0


// while(age< 100){
//      age = prompt("Veuillez entrer votre âge")
// if (age<20 ){
//     jeune++
// }

// if(age>40){
//         middle++
// }

// if(age=> 21 && age <= 39){
//     entre++
// } 

// if(age> 99){
//     middle++
//  break
// }
// }

// console.log("Vous êtes  " + jeune + " de personnes de moins de 20 ans") 
// console.log("Vous êtes en " + middle +" si l'age  plus de 40 ans" )
// console.log("vous êtes en " + entre +" si l'age egale ou plus 21 et egale ou moin de 39 ans")
// console.log("vous êtes en " + middle +" si l'age plus  99 ans")




                                                          // exercise 2 multiplication 
    /*
    myTable();
    function myTable (){
    var range=prompt ("Entrez votre valeur:");
    for(let i=1; i<=10;i++){
    let result=range*i;
    document.write(i+" x 10"+" = "+result+"<br>");
    }
    }
    */

 
                                                            //exercice 3 recherche d'un prénom

// var tab = ["audrey","aurelien", "flavien", "jeremy", "laurent", "melik", "nouara", "salem", "samuel", "stephane"];
// var  saisie = window.prompt(`Veuillez choisir un prénom parmi ${[...tab]}.`)
// if(tab.includes(saisie)){
// 	tab.splice(tab.indexOf(saisie),1);
// 	tab.push(" ");
// 	console.log(tab)
// }
// else{alert("erreur aucun prénom")}


//                                                              //exercice 4 tatal d'une commande

// let pu=parseFloat(prompt("unit price"))
// let qtecom=parseFloat(prompt(" la quantity"))
// let tot=pu*qtecom
// var remise,port,pap,livraport,reduc,total=0        //livraport = shipping to pay

//    if(qtecom>0){
//       if(tot>=100&&tot<=200){
//         remise=5
//         }
//       else if(tot>200&&tot<500){
//         remise=10                                     //remise = discount
//          }
//       else if(tot>=500){
//         remise=10
//         port=0
//         }

//       if(port!=0){
//         livraport=total*port/100
//       if(livraport<6&&port==2){
//         livraport=6}
//          }
//       else{
//         livraport=0
//           }reduc=tot*remise/100
//       pap=parseFloat(total)+parseFloat(livraport)            //pap =price to pay
//       total=parseFloat(tot)-parseFloat(reduc)
//       document.write("remise "+remise+"% either-"+reduc+"€ either "+total+"€frais de port "+port+"%")
//           }


                                                           // Exercice 5  Vérification d'un formularire
function insertText() {
    text= document.getElementById("myForm").value
    document.getElementById("auchoix").value = text;
  }

  function dada()
{
 a=document.getElementById("a").value; //nome
 b=document.getElementById("b").value;  //prenom
 c=document.getElementById("c").value;  //date de naissance
 d=document.getElementById("d").value;  //code postal
 e=document.getElementById("e").value;   //adress
 f=document.getElementById("f").value;   //ville
 g=document.getElementById("g").value;   //email

filtrecar = new RegExp("^[A-Za-z]+$")
filtrenum = new RegExp("^([0-9]{5})+$")
filtredate = new RegExp("/^[0-9]+-[0-9]+-[0-9]+$/") //date



filtremail = new RegExp("^[_a-z0-9-]+@[_a-z0-9-]+.[a-z0-9]+$") //email

resultat = filtrecar.test(a)   //nome
if(resultat==false)
{
  alert(
    "entrez votre nom svp")
}

resultat = filtrecar.test(b)  //prenome
  if(resultat==false)
  {
    alert("Entrez votre prenom svp ")
  }


resultat = filtredate.test(c)    //date de naissance
if (resultat==false)
{
  alert("Entrez votre date de naissance")
}


genre = document.getElementById("genre")  //gender feminin
genre2 = document.getElementById("genre2")    //gender musculin
if(genre.checked==false && genre.checked==false){
    alert("veuillez selectionner votre genre")
}


resultat = filtrecar.test(d)       //code postal
if (resultat==false)
{
  alert("Entrez votre code postal")
}


resultat = filtrecar.test(e)       //address
if (resultat==false)
{
  alert("Entrez la adress")
}


resultat = filtrecar.test(f)         //ville
if (resultat==false)
{
  alert("Entrez ville nom")
}


resultat = filtremail.test(g)        //email
if(resultat==false)
{
  alert("doit comporter le caractère '@")
}

box = document.getElementById("box")  //gender feminin
if(box.checked==false && box.checked==false){
  alert("veuillez cliquer check box")
}
}
 let remove = document.getElementById("choice")   //  selectionner un sujet, textarea
let choixElement = document.getElementById("myForm")
choixElement.addEventListener("change",() =>{remove.remove()})