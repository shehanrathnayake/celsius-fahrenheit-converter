const celsius = document.querySelector(".celsius")
const fahrenheit = document.querySelector(".fahrenheit")
const fahrenToCel = document.querySelector("#fahrenToCel")
const celToFahren = document.querySelector("#celToFahren")

//For changing the HTML elements order
const temperature = document.querySelector(".temperature")
const celElement = temperature.querySelector(".celInput")
const equal = temperature.querySelector(".equal")
const fahrenElement = temperature.querySelector(".fahrenInput")

//Listening to fahrenheitToCelsius button
fahrenToCel.addEventListener("click", ()=>{

    //changing the .show and .remove classes
    fahrenToCel.classList.add("hide")
    fahrenToCel.classList.remove("show")
    celToFahren.classList.add("show")
    celToFahren.classList.remove("hide")

    //changing the HTML element order
    temperature.insertBefore(fahrenElement, celElement)
    temperature.insertBefore(equal, celElement)

    //setting placeholders
    fahrenheit.placeholder = 0
    celsius.placeholder = -17.78

    //changing edit access
    celsius.readOnly = true
    fahrenheit.readOnly = false

})

//Listening to celToFahrenheit button
celToFahren.addEventListener("click", ()=>{

    //changing the .show and .remove classes
    celToFahren.classList.add("hide")
    celToFahren.classList.remove("show")
    fahrenToCel.classList.add("show")
    fahrenToCel.classList.remove("hide")

    //changing the HTML element order
    temperature.insertBefore(celElement, fahrenElement)
    temperature.insertBefore(equal, fahrenElement)

    //setting placeholders
    celsius.placeholder = 0
    fahrenheit.placeholder = 32

    //changing edit access
    fahrenheit.readOnly = true
    celsius.readOnly = false
})

//Listening to celsius value input
celsius.addEventListener("change", ()=>{

    //setting equations and values to fahrenheit input
    let value = (celsius.value * 9 / 5) + 32
    if (Math.floor(value) === value) {
        fahrenheit.value = value
    } else {
        fahrenheit.value = parseFloat(value.toFixed(2))
    }
})

//Listening to fahrenheit value input
fahrenheit.addEventListener("change", ()=>{

    //setting equations and values to celsius input
    let value = (fahrenheit.value - 32) * 5 / 9
    if (Math.floor(value) === value) {
        celsius.value = value
    } else {
        celsius.value = parseFloat(value.toFixed(2))
    }
})