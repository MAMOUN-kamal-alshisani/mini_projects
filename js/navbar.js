let navList = document.querySelector('#ul_menu')
let btn = document.querySelector('.nav_btn')
let icons = document.querySelector('#icon_links')
let header = document.querySelector('header')
let nav = document.querySelector('.nav')
let main = document.querySelector('main')
let mainStyle = {
    'display': 'flex',
    'flex-direction': 'row-reverse',
    'width': '90%',
    'flex-wrap': 'wrap',
    'align-content': 'stretch',
    'justify-content': 'flex-start',
}
function navbarToggel(){
    if(navList.classList[0] == 'nav_menu'){

        navList.setAttribute('class','navToggel')
         ////// change below
        icons.setAttribute('class','navToggel_links')
        header.style.paddingRight = '80px'
        header.style.top = '-22px'
        header.style.position = 'absolute'
        header.style.width = 'fit-content'
        header.style.height = '109vh'
       nav.style.width = 'fit-content'
       nav.style.height = '109vh'
    //    main.style =mainStyle
    }
    else{
        navList.setAttribute('class','nav_menu')
        ////// change below
        icons.setAttribute('class','links_div')

        header.style.position = 'unset'
        header.style.width = 'unset'
        header.style.height = 'unset'
       nav.style.width = 'unset'
       nav.style.height = 'unset'
    }

      
}

btn.addEventListener('click',navbarToggel)

// console.log(document.body.clientWidth);

window.addEventListener('resize',(e)=>{

    if(e.target.innerWidth >= '800'){

        if(navList.classList[0] == 'navToggel'){
    
            navList.setAttribute('class','nav_menu')
             ////// change below
            icons.setAttribute('class','links_div')
        }
        header.style.position = 'unset'
        header.style.width = 'unset'
        header.style.height = 'unset'
       nav.style.width = 'unset'
       nav.style.height = 'unset'

  
    }
})

let playerChoice = ''
let computerChoice = {}


// let choiceDiv = document.querySelector('.choiceDiv')
let imgContainer = document.querySelector('.img_div')
let chosenImg = document.querySelector('.chosenImg')



imgContainer.addEventListener('click',(e)=>{
    let player = document.querySelector('#player')
    let computer = document.querySelector('#computer')
    let result = document.querySelector('#result')

    let score = ''
computerChoice ={
1:'paper',
2:'rock',
3:'scissors'
}[Math.floor(Math.random() *3 + 1)]

playerChoice = e.target.id

// result.innerHTML = playerChoice


if(playerChoice == 'paper' &&  computerChoice =='paper'){
    score = 'tie'
}
if(playerChoice == 'scissors' &&  computerChoice =='scissors'){
    score = 'tie'
}
if(playerChoice == 'rock' &&  computerChoice =='rock'){
    score = 'tie'
}




if(playerChoice == 'rock' &&  computerChoice =='scissors'){
    score = 'player won'
}
if(playerChoice == 'paper' &&  computerChoice =='rock'){
    score = 'player won'
}
if(playerChoice == 'scissors' &&  computerChoice =='paper'){
    score = 'player won'
}



if(computerChoice == 'rock' &&  playerChoice =='scissors'){
    score = 'player lost'
}

if(computerChoice == 'paper' &&  playerChoice =='rock'){
    score = 'player lost'
}
if(computerChoice == 'scissors' &&  playerChoice =='paper'){
    score = 'player lost'
}


computer.innerHTML =`Computer\'s choice: <b> ${computerChoice}</b>`
player.innerHTML = `Player\'s choice: <b>${playerChoice}</b>` 
result.innerHTML =`Result: <b>${score}</b>`
})