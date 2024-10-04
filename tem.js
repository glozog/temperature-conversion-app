const textBox = document.getElementById("textbox")
const toFarenheit = document.getElementById("toFarenheit")
const toCelsius = document.getElementById("toCelsius")
const result = document.getElementById("result")
let temp;

// const toFarenheit = () => {
    //     temp = textBox.value
    //     result.innerHTML = temp * 9/5 + 32
    //     console.log(temp)
    // }

function convert(){

    if(toFarenheit.checked){
        temp = Number(textBox.value) 
        temp = temp * 9 / 5 + 32;
        result.textContent = temp.toFixed(1) + "F"
    }
     else if(toCelsius.checked){
        temp = Number(textBox.value) 
        temp = (temp - 32) * 5 / 9;
        result.textContent = temp.toFixed(1) + "C"
    }
    else{
        result.textContent = "Please select a unit"
    }
}