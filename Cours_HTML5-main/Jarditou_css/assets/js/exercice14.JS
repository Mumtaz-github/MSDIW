                                     // Exercice JS14: Les évènements
function myFunction(){
    var mot = document.getElementById("demo").value
    alert("Vous avez saisi : " + mot)
}

console.log('demo')

                                              //Exercice JS14: 2ém partie   Les événement

const myButton = document.getElementById("button1");
const myLabel = document.getElementById("label1");
const min = 0;
const max = 100;
let randomNum;

randomNum = Math.floor(Math.random() * max) + min;
console.log(randomNum)
//  myButton.onclick = 
  function verif(){ 
   myLabel.textContent = randomNum;
    var text = document.getElementById("textBox1").value;
    if (text<randomNum){
        alert("trop petit");   
    }
    if (text>randomNum){
        alert("trop grand");   
    }

    if (text == randomNum){
        alert("bravo");   
        }

}


