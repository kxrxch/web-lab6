const block = document.querySelector(".block")
const btn1 = document.querySelector(".btn1")
const calcBlock= document.querySelector(".calcBlock")
const result= document.querySelector(".result")
const firstInput= document.querySelector(".firstInput")
const secondInput= document.querySelector(".secondInput")
const btnAddition = document.querySelector(".btnAddition")
const btnSubtraction = document.querySelector(".btnSubtraction")
const btnMultiplication = document.querySelector(".btnMultiplication")
const btnDivision = document.querySelector(".btnDivision")

btn1.addEventListener("click",function () {
    calcBlock.style = "block"
    result.style="block"
    block.style = "display:none"
})

btnAddition.addEventListener("click", function (){
    result.innerText = +firstInput.value + +secondInput.value
})

btnSubtraction.addEventListener("click", function (){
    result.innerText = +firstInput.value - +secondInput.value
})

btnMultiplication.addEventListener("click", function (){
    result.innerText = +firstInput.value * +secondInput.value
})

btnDivision.addEventListener("click", function (){
    result.innerText =Math.round(+firstInput.value / +secondInput.value * 10) / 10
})

result.addEventListener("click", function (){
    result.innerHTML=(Math.round(Math.sqrt(result.innerText) * 10) / 10).toString()
})
