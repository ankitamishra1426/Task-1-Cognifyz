'use strict';
//selecting numbers//
const number1Input = document.getElementById("display-number1");
console.log(number1Input);
const number2Input = document.getElementById("display-number2");
console.log(number2Input);
//selecting button//
const sumButton = document.querySelector(".sum");
const reset= document.querySelector('.clear');
//dispalying result//
const resultDisplay = document.querySelector(".display-result");
//displaying numbers and sum //
sumButton.addEventListener("click", function(){
  const number1 = parseInt(number1Input.value);
  const number2 = parseInt(number2Input.value);
  const totalSum = number1 + number2;
  resultDisplay.textContent = totalSum;
  sumButton.style.background='#873737';
});
//reseting values//
reset.addEventListener("click", function(){
    number1Input.value='';
    number2Input.value='';
    resultDisplay.textContent='0';
    sumButton.style.background='#ef5555';
});
function greetDisplay(){
    let date= new Date();
    let hours = date.getHours();
    let greeting;
    if(hours < 12){
        greeting = "Good Morning User 🌄";
    }else if(hours < 17){
        greeting= "Good Afternoon User 🕑";
    }else {
        greeting="Good Evening User 🌆";
    }
   alert(greeting); 
}
greetDisplay();