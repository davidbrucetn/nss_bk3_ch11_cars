import allCars from './cars.js'
import salesByWeek from './sales.js'

const carArticle = document.querySelector(".article__cars")

const displayAllCars = (cars) => {
    carArticle.innerHTML = `<h1>All Cars</h1>`

    const firstCar = cars[0];
    carArticle.innerHTML += `<br><h2>Car Properties</h2>`
    
    for (const key of Object.keys(firstCar)) {
        carArticle.innerHTML += `<div>${key}</div>`
    }

    carArticle.innerHTML += `<br>`

    cars.forEach(car => {
        //Iterate all of the value sof the current car
        for (const carProperty of Object.values(car)) {
            carArticle.innerHTML += `<div>${carProperty}</div>`
        }
        carArticle.innerHTML += `<br>`
    });

}


const displayExpandedCars = (cars) => {
    carArticle.innerHTML = `<h1>Expanded Car List</h1><br>`
    cars.forEach(car => {
        carArticle.innerHTML += `<hr/>`

        for (const entry of Object.entries(car)) {
            carArticle.innerHTML += `<div>${entry[0]}: ${entry[1]}</div>`
        }
    })
    
}

displayExpandedCars(allCars)

// displayAllCars(allCars)
const salesArticle = document.querySelector(".article__sales")

const salesReport = (salesByWeek) => {
    
    carArticle.innerHTML = `<h1>Weekly Sales Report</h1>`

    salesByWeek.forEach(sale => {
        carArticle.innerHTML += `<hr/>`
        carArticle.innerHTML += `<h2>${sale.sales_agent.first_name} ${sale.sales_agent.last_name}</h2><br>`
        for (const entry of Object.entries(sale.vehicle)) {
            carArticle.innerHTML += `<div>${entry[0]}: ${entry[1]}</div>`
        }
        carArticle.innerHTML += `<div><h4>Profit: $${sale.gross_profit}</h4></div>`
    })
    carArticle.innerHTML += `<hr/>`
    
}

salesReport(salesByWeek)

const searchInput = document.querySelector("#searchInput")
console.log(searchInput)
let searchSalesArray = [];
searchInput.addEventListener("keypress", function(event) {
    
    console.log(event.charCode)
    if (event.charCode === 13 ) {
        if ( event.target.value.length !==0 ) {
            event.preventDefault();
            console.log("Enter")
            const searchTerm = event.target.value;
            salesByWeek.forEach(sale => {
                for (const value of Object.values(sale.sales_agent)) {
                    if ( value.indexOf(searchTerm) !== -1 ) {
                        console.log(value.indexOf(searchTerm))
                        searchSalesArray.push(sale)
                    }
                }
            }) // end search loop
            if (searchSalesArray.length > 0) {
                salesArticle.innerHTML = ""
                salesReport(searchSalesArray)
                }
        } else {
            searchSalesArray = []
            salesArticle.innerHTML = `<h1>Weekly Sales Report - no data found</h1>`
            salesArticle.innerHTML += `<h2>Showing All Agents</h2>`
            salesReport(salesByWeek)
        }
    }
})