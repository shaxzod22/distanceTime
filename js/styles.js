let elForm = document.querySelector('.form')
let elInput = document.querySelector('.form__input')
let elBtn = document.querySelector('.form__btn')
let man = document.querySelector('.man')
let bike = document.querySelector('.bike')
let car = document.querySelector('.car')
let airplane = document.querySelector('.airplane')
let manSpeed = 3.6
let bikeSpeed = 20.1
let carSpeed = 70
let planeSpeed = 800

elForm.addEventListener('submit' , function(event) {
    event.preventDefault()
 
    let elInputValue = elInput.value

    man.textContent = `${Math.floor(elInputValue / manSpeed)}soat ${Math.round(((elInputValue / manSpeed) - Math.floor(elInputValue / manSpeed)) * 60)}d`

    bike.textContent = `${Math.floor(elInputValue / bikeSpeed)}soat ${Math.round(((elInputValue / bikeSpeed) - Math.floor(elInputValue / bikeSpeed)) * 60)}d`

    car.textContent = `${Math.floor(elInputValue / carSpeed)}soat ${Math.round(((elInputValue / carSpeed) - Math.floor(elInputValue / carSpeed)) * 60)}d`

    airplane.textContent = `${Math.floor(elInputValue / planeSpeed)}soat ${Math.round(((elInputValue / planeSpeed) - Math.floor(elInputValue / planeSpeed)) * 60)}d`
})