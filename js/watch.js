
function timeWatch(){
    let TimeHeader = document.querySelector('.date')
    let date = new Date()
let hh = date.getHours()
let mm = date.getMinutes()
let ss = date.getSeconds()
let session = 'AM'
if(ss < 10){

    ss = '0' + ss
}
if(mm < 10){

    mm = '0' + mm
}

if(hh > 12){

    hh =  hh - 12
    session = 'PM'
}
if(hh < 10){

    hh = '0' + hh
}
TimeHeader.innerHTML = hh + ':' + mm + ':' + ss +' '+ session
setTimeout(()=>{
    timeWatch()
},1000)
}



timeWatch()














let startBtn = document.querySelector('#start_btn')
let stopWatch = document.querySelector('#stop_watch')
let timeOut = null
let ms = 0
let sec = 0
let min = 0
let hour = 0

function startWatch(flag){

    if(flag){
        startBtn.disabled = true
    }
    timeOut =   setInterval(()=>{
        ms = parseInt(ms)
        sec = parseInt(sec)
        min = parseInt(min)
        hour = parseInt(hour)
        
++ms
if(ms == 100){
    sec+= 1
    ms = 0
}
if(sec == 60){
    min+= 1
    sec = 0
}
if(min == 60){
    hour+= 1
    min = 0
}

if(sec < 10){
    sec= '0' + sec
}
if(min < 10){
    min= '0' + min
}
if(hour < 10){
    hour= '0' + hour
}
stopWatch.innerHTML = hour + ':' + min + ':' + sec
    },10)
}



function pause(){
clearInterval(timeOut)
    startBtn.disabled = false
  
}

function reset(){
    ms = 0
    sec = 0
    min = 0
    hour = 0

    clearInterval(timeOut)
    startBtn.disabled = false
    stopWatch.innerHTML = '00' + ':' + '00' + ':' + '00'
}

//// counter functionality ////


let counter = document.querySelector('#counter_h1')

let count = 0

counter.innerHTML = count

function increment(){

    count = count +1
    counter.innerHTML = count
}

function decrement(){
    if(count <= 0 )return
    count = count -1
   
    counter.innerHTML = count
}


function rest(){
count = 0
counter.innerHTML = count
}