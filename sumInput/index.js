const button=document.querySelector('.button')
button.onclick=sumInput



let sum=0
const sort =document.querySelector('.sort')
const result=document.querySelector('.result')
function sumInput() {

let numbers=[]

while (true) {
    let value= +prompt('Введите значение')

if (!value) break
if (value==isNaN) break
sum+=value
numbers.push(+value)
}
result.textContent=('сумма='+sum)
sort.textContent=numbers.sort()
}