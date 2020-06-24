import allCars from './cars.js'

const carArticle = document.querySelector(".article__cars")

const displayAllCars = (cars) => {
    carArticle.innerHTML = `<h1>All Car Properties</h1>`
    cars.forEach(car => {
        //Iterate all of the value sof the current car
        for (const carProperty of Object.values(car)) {
            carArticle.innerHTML += `<div>${carProperty}</div>`
        }
        carArticle.innerHTML += `<br>`
    });

}

displayAllCars(allCars)