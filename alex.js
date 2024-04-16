let input1 = document.getElementById('input1')
let display = document.getElementById('display')

function convert(){

   // temp = (input1.value * 9/5) + 32
   // display.innerHTML = temp + '°F'

    if (input1.value == '') {alert('Fill the field')
        
    } else {
        temp = (input1.value * 9/5) + 32
        display.innerHTML = temp + '°F'
    }
}