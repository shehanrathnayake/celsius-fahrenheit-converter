const celsius = document.querySelector(".celcius")
const farenheit = document.querySelector(".farenheit")
const farenToCel = document.querySelector("#farenToCel")
const celToFaren = document.querySelector("#celToFaren")

//For changing the HTML elements order
const temperature = document.querySelector(".temperature")
const celElement = temperature.querySelector(".celInput")
const equal = temperature.querySelector(".equal")
const farenElement = temperature.querySelector(".farenInput")

//Listening to farenheitToCelcius button
farenToCel.addEventListener("click", ()=>{

    //changing the .show and .remove classes
    farenToCel.classList.add("hide")
    farenToCel.classList.remove("show")
    celToFaren.classList.add("show")
    celToFaren.classList.remove("hide")

    //changing the HTML element order
    temperature.insertBefore(farenElement, celElement)
    temperature.insertBefore(equal, celElement)

    //setting placeholders
    farenheit.placeholder = 0
    celsius.placeholder = -17.78

    //changing edit access
    celsius.readOnly = true
    farenheit.readOnly = false

})

//Listening to celToFarenheit button
celToFaren.addEventListener("click", ()=>{

    //changing the .show and .remove classes
    celToFaren.classList.add("hide")
    celToFaren.classList.remove("show")
    farenToCel.classList.add("show")
    farenToCel.classList.remove("hide")

    //changing the HTML element order
    temperature.insertBefore(celElement, farenElement)
    temperature.insertBefore(equal, farenElement)

    //setting placeholders
    celsius.placeholder = 0
    farenheit.placeholder = 32

    //changing edit access
    farenheit.readOnly = true
    celsius.readOnly = false
})

//Listening to celcius value input
celsius.addEventListener("change", ()=>{

    //setting equations and values to farenheit input
    let value = (celcius.value * 9 / 5) + 32
    if (Math.floor(value) === value) {
        farenheit.value = value
    } else {
        farenheit.value = parseFloat(value.toFixed(2))
    }
})

//Listening to farenheit value input
farenheit.addEventListener("change", ()=>{

    //setting equations and values to celcius input
    let value = (farenheit.value - 32) * 5 / 9
    if (Math.floor(value) === value) {
        celsius.value = value
    } else {
        celsius.value = parseFloat(value.toFixed(2))
    }
})