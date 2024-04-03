


function insertText() {
  text= document.getElementById("lists_environnement").value
  document.getElementById("auchoix").value = text;
}



 
function data()
{
 a=document.getElementById("n1").value; //société
 b=document.getElementById("n2").value; //personne à contacter
 c=document.getElementById("n3").value; //code postal 
 d=document.getElementById("n4").value;    //ville
 e=document.getElementById("n5").value;  // email et address de l'enterprise

filtrecar = new RegExp("^[A-Za-z]+$")
filtrenum = new RegExp("^([0-9]{5})+$")

filtremail = new RegExp("^[_a-z0-9-]+@[_a-z0-9-]+.[a-z0-9]+$")  //email
resultat = filtrecar.test(a)

if(resultat==false)
{
  alert(
    "entrez au moins un caractère")
}

resultat = filtrecar.test(b)    //personne à contacter
  if(resultat==false)
  {
    alert("Entrez au moins un caractère")
  }

resultat = filtrecar.test(c)            //code postal
if (resultat==false)
{
  alert("Entrez au moins 5 caratères numériques")
}


resultat = filtrecar.test(d)       //ville
if (resultat==false)
{
  alert("Entrez au moins un caractère")
}


resultat = filtremail.test(e)   //email
if(resultat==false)
{
  alert("doit comporter le caractère '@")
}
}
 let remove = document.getElementById("choix")
let choixElement = document.getElementById("lists_environnement")
choixElement.addEventListener("change",() =>{remove.remove()})