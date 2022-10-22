let number = 0
let output = document.querySelector('.outPut')
let process = document.querySelector('.process')
let result = document.querySelector('.result')

process.addEventListener("keyup", function(event) {
    event.preventDefault();
    if (event.keyCode == '3') {
        process.innerHTML = '3'
        document.getElementById("three_btn").click();
    }
});




function addOne(){
  
    if(process.innerHTML == 0){
        process.innerHTML = '1'
    }
 else{

 
        process.innerHTML += '1' 
    }
}
function addTwo(){
  
    if(process.innerHTML == 0){
        process.innerHTML = '2'
    }
 else{
        process.innerHTML += '2' 
        }
}

function addThree(){
  
    if(process.innerHTML == 0){
        process.innerHTML = '3'
    }
 else{
        process.innerHTML += '3' 
        }
}
function addFour(){
  
    if(process.innerHTML == 0){
        process.innerHTML = '4'
    }
 else{
        process.innerHTML += '4' 
    }
}
function addFive(){
  
    if(process.innerHTML == 0){
        process.innerHTML = '5'
    }
 else{
        process.innerHTML += '5' 
     }
}
function addSix(){
  
    if(process.innerHTML == 0){
        process.innerHTML = '6'
    }
 else{
        process.innerHTML += '6' 
    }
}
function addSeven(){
  
    if(process.innerHTML == 0){
        process.innerHTML = '7'
    }
 else{
        process.innerHTML += '7' 
    }
}
function addEight(){
  
    if(process.innerHTML == 0){
        process.innerHTML = '8'
    }
     else{
        process.innerHTML += '8' 
        }
}
function addNine(){
  
    if(process.innerHTML == 0){
        process.innerHTML = '9'
    }
     else{
        process.innerHTML += '9' 
        }
}
function addZero(){
  
    if(process.innerHTML == 0){
        process.innerHTML = '0'
    }
 else{
        process.innerHTML += '0' 
            }
}
function concat(){
    if(process.innerHTML == 0){
        process.innerHTML = '+'
    }
     else{
        process.innerHTML += '+' 
       }
}
function subtract(){
    if(process.innerHTML == 0){
        process.innerHTML = '-'
    }
 else{
    process.innerHTML += '-'
        }
}
function multiplication(){
    if(process.innerHTML == 0){
        process.innerHTML = '*'
    }
 else{
    process.innerHTML += '*'
        }
}
function division(){
    if(process.innerHTML == 0){
        process.innerHTML = '/'
    }
 else{
    process.innerHTML += '/'
        }
}
function thesisForWard(){
    if(process.innerHTML == 0){
        process.innerHTML = '('
    }
     else{
    process.innerHTML += '('    }
}
function thesisBackWard(){
    if(process.innerHTML == 0){
        process.innerHTML = ')'
    }
     else{
    process.innerHTML += ')'    }
}
function dot(){

    if(process.innerHTML == 0){
        process.innerHTML = '.'
    }
 else{
    process.innerHTML += '.'
        }
}

function del(){

    if(process.innerHTML == 0){
        process.innerHTML =  '0'
    }
 else{
    process.innerHTML =  process.innerHTML.slice(0,-1)
    if(process.innerHTML.length == 0){
        process.innerHTML =  '0'

    }
        }
}
function clr(){
if(process.innerHTML != 0)
   process.innerHTML =  '0' 
    result.innerHTML = '';
   
}
function equal(){

    result.innerHTML =   eval(process.innerHTML) + "<b style='float:right;'> = </b>"   
}
