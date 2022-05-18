let button = document.querySelector('.count')
button.onclick = count


function change() {
    
    const models = document.querySelector('.models')
    const newElement = document.createElement('div')
    if (document.querySelector('.brand').value == '5000') {
        newElement.innerHTML = '<select name="" id="bmwmodels"><option value="10">X5</option><option value="20">X6</option><option value="30">3</option></select>'
        models.appendChild(newElement)
    }
    if (document.querySelector('.brand').value == '6000') {
        newElement.innerHTML = '<select name="" id="mercedesmodels"><option value="10">a class</option><option value="20">c class</option><option value="30">e class</option></select>'
        models.appendChild(newElement)
    }
    if (document.querySelector('.brand').value == '4000') {
        
        newElement.innerHTML = '<select name="" id="audimodels"><option value="10">AudiTT</option><option value="20">7</option><option value="30">8</option></select>'
        models.appendChild(newElement)
        
    }
    if (document.querySelector('.brand').value == '3000') {
        newElement.innerHTML = '<select name="" id="volkswagenmodels"><option value="10">Polo</option><option value="20">Passat</option><option value="30">Golf</option></select>'
        models.appendChild(newElement)
    }
    if (document.querySelector('.brand').value == '2000') {
        newElement.innerHTML = '<select name="" id="toyotamodels"><option value="10">Land Cruiser</option><option value="20">Corolla</option><option value="30">Camry</option></select>'
        models.appendChild(newElement)
    }
}

function count() {
    const values = document.querySelectorAll('select')
    let prices = []



    for (let i = 0; i < values.length; i++) {
        let number = +values[i].value
        prices.push(+number)
    }
    let result = 0
    for (let price of prices) {
        result += price
    }


    const price = document.querySelectorAll("[name='box']:checked")
    let prices2 = []
    for (let i = 0; i < price.length; i++) {
        let value2 = +price[i].value
        prices2.push(+value2)
    }
    let result2 = 0
    for (let item of prices2) {
        result2 += item
    }

    const age = document.querySelectorAll('[name="age"]:checked')
    let numbers = []
    for (let i = 0; i < age.length; i++) {
        let price3 = +age[i].value
        numbers.push(+price3)
    }
    let result3 = 0
    for (let numer of numbers) {
        result3 += numer
    }

    let div = document.querySelector('.div')
    div.textContent = result2 + result + result3 + '$'
}