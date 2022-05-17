let button=document.querySelector('.count')
button.onclick=countPrice

function countPrice() {
let price1=document.querySelectorAll('[name="brand"]:checked')
let numbers1=[]

for(let i=0;i<price1.length;i++) {
let number=+price1[i].value
    numbers1.push(+number)
}
let result1=0
for (let item of numbers1) {
    result1+=item
}




let price2=document.querySelectorAll('[name="condition"]:checked')
let numbers2=[]
for(i=0;i<price2.length;i++) {
let number2=+price2[i].value
numbers2.push(+number2)
}
let result2=0
for (let item of numbers2) {
result2+=item
}


let numbers3=[]
let value3=document.querySelectorAll('[name="box"]:checked')
for (i=0;i<value3.length;i++) {
let number3=+value3[i].value
numbers3.push(+number3)
}
let result3=0
for (let item of numbers3){
result3+=item
}


let price=document.querySelector('.price')
price.innerHTML=result1+result2+result3
}