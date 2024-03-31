'use strict'
const heightinput = document.querySelector(".height")
const weightinput = document.querySelector(".weight")
const res = document.querySelector(".res")
const btn = document.querySelector(".btn")
btn.addEventListener("click", function(){
const height = parseFloat(heightinput.value)
const weight = parseFloat(weightinput.value)

if(isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0 ){
    res.textContent = "Please enter valid height and weight.";
    return
}

const heightmet = height / 100
const bmi = weight / (heightmet * heightmet)
res.textContent = `your BMI is: ${bmi.toFixed(2)}`
})



