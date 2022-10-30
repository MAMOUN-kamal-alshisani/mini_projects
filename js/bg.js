
let Hexbtn = document.querySelector('#hex_btn')
let RGBbtn = document.querySelector('#rgb_btn')
let header = document.querySelector('#text_header')


function generateHex(){
let randoms = '0123456789ABCDEF'
let color = '#'

for (let i = 0; i < 6; i++) {

    color += randoms[Math.floor(Math.random() *randoms.length)]
}

return color
}

function generateRgb(){

    let color ='rgb('

    for (let i = 0; i < 3; i++) {
       
        color+= Math.floor(Math.random() *255 )+ ','
        
    }
 return color = color.slice(0,-1)  + ')'
    // return color = color  + ')'
}


Hexbtn.addEventListener('click',()=>{

    document.body.style.backgroundColor = generateHex()
header.innerHTML =`background color: ${generateHex()}`
    
})


RGBbtn.addEventListener('click',()=>{

    document.body.style.backgroundColor = generateRgb()
    header.innerHTML =`background color: ${generateRgb()}`
})