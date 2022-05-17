let button=document.querySelector('.button')
button.onclick=sumInput



let sum=0
function sumInput() {

let numbers=[]

for (;;) {
    let value= +prompt('Введите значение')

if (!value) break
if (value==isNaN) break
if (value==false) break
sum+=value
numbers.push(+value)
}
let result=document.querySelector('.result')
result.textContent=('сумма='+sum)
let sort =document.querySelector('.sort')
sort.textContent=numbers.sort()
}