let array = []
if(JSON.parse(localStorage.getItem('item'))){
  array = JSON.parse(localStorage.getItem('item'))
}
let itemInput = document.querySelector('#text_input')
let listDiv = document.querySelector('#item_div')
let btn = document.querySelector('#btn')
let form = document.querySelector('#form')
let allDiv = document.querySelector('.all_div')
// let formHeader = document.querySelector('.form_div')


// let checkBoxCout = 0 
// let formHeader = document.querySelector('.form_div')
// formHeader.innerHTML = checkBoxCout


if(listDiv.childElementCount == 0){
  listDiv.append('Enter desired list item')
}
form.addEventListener('submit',(e)=>{
    e.preventDefault()
})


btn.addEventListener('click',display)
function display(){
if(itemInput.value != ''){

  array.push(itemInput.value)
  localStorage.setItem('item',JSON.stringify(array))
  itemInput.value = ''
  listDiv.innerHTML = ''
 
}


  for (let i = 0; i < array.length; i++) {
  let p = document.createElement('p')
  let btn1 = document.createElement('button')
  btn1.innerText = 'delete'
  btn1.classList.add('items_btn');
// checkBox.createAttribute('type','checkbox')
p.classList.add('list-items');
let checkbox = document.createElement('input')
checkbox.setAttribute('type','checkbox')
checkbox.classList.add('checkbox')



  p.innerHTML =JSON.parse(localStorage.getItem('item'))[i]
  p.appendChild(checkbox)
  p.appendChild(btn1)
  p.setAttribute('id',i);
  listDiv.appendChild(p)


  btn1.addEventListener('click',(e)=>{

     let value = e.target.parentElement.textContent.slice(0,-6)
    // console.log(e.target.parentElement.getAttribute('id'));
    //  let value = e.target.parentElement.getAttribute('id')
   array =  array.filter((item,indx)=> item != value )
   p.innerHTML = ''
   listDiv.removeChild(p)
  if(listDiv.childElementCount == 0){
    listDiv.append('Enter desired list item')
  }
      // array.splice(Number(e.target.parentElement.className),1)
      localStorage.setItem('item',JSON.stringify(array))
  

    })
    }
    
    
}










// let array = []
// array = JSON.parse(localStorage.getItem('item'))
// let itemInput = document.querySelector('#text_input')
// let ul = document.querySelector('#list_menu')
// let btn = document.querySelector('#btn')
// let form = document.querySelector('#form')



// form.addEventListener('submit',(e)=>{
//     e.preventDefault()
// })


// btn.addEventListener('click',display)
// function display(){

//   array.push(itemInput.value)
//   localStorage.setItem('item',JSON.stringify(array))
//   ul.innerHTML = ''

//   for (let i = 0; i < array.length; i++) {
//   let li = document.createElement('li')
//   let btn1 = document.createElement()
//   li.innerHTML =JSON.parse(localStorage.getItem('item'))[i]
//   ul.appendChild(li)
  
//     }

// }
