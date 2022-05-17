

let button=document.querySelector('.count')
button.onclick=count

function count(){
const values= document.querySelectorAll('select')
let prices=[]



for (let i=0;i<values.length;i++) {
    let number=+values[i].value
    prices.push(+number)
}
let result=0
for (let price of prices){
result+=price
}


const price=document.querySelectorAll("[name='box']:checked")
let prices2=[]
for (let i=0;i<price.length;i++){
    let value2=+price[i].value
    prices2.push(+value2)
}
let result2=0
for (let item of prices2) {
    result2+=item
}

const age = document.querySelectorAll('[name="age"]:checked')
let numbers=[]
for (let i=0;i<age.length;i++){
let price3=+age[i].value
    numbers.push(+price3)
}
let result3=0
for (let numer of numbers){
    result3+=numer
}

let div=document.querySelector('.div')
div.textContent=result2+result+result3+'$'
}