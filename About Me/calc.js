/*These are the variables that are placed for the first input, second input, the calculate button, and the calculation.*/
var button = document.getElementById("submitButton");
var input1 = document.getElementById('input1');
var input2 = document.getElementById('input2');
var answer;
var display = document.getElementById('display');
var dropdown = document.getElementById("dropdown");

button.addEventListener("click", doMath);
/*This begins the mathematical operations that will take place in order to recieve the answer for the user.*/
function doMath() {
/*This if statement takes the input of the first value and adds it to the second value, allowing the calculator to add the two values, and display their addition.*/
    if  (dropdown.value == "+"){
        answer = parseInt(input1.value) + parseInt(input2.value);
        display.innerHTML = answer;
    }
/*This if statement takes the input of the first value and subtracts it to the second value, allowing the calculator to subtract the two values, and display their subtraction.*/
    if (dropdown.value == "-"){
        answer = parseInt(input1.value) - parseInt(input2.value);
        display.innerHTML = answer;
    }
/*This if statement takes the input of the first value and multiplies it to the second value, allowing the calculator to multiply the two values, and display their multiplication.*/
    if (dropdown.value == "x"){
        answer = parseInt(input1.value) * parseInt(input2.value);
        display.innerHTML = answer;
    }
/*This if statement takes the input of the first value and divides it to the second value, allowing the calculator to divide the two values, and display their division.*/
    if (dropdown.value == "/"){
        answer = parseInt(input1.value) / parseInt(input2.value);
        display.innerHTML = answer;
    }
/*The following if statement is for taking the power of a number. This allows for the user to take a number and multiply it by itself, for a certain number of times. */
    if (dropdown.value == "^"){
        answer = Math.pow(input1.value,input2.value);
        display.innerHTML = answer;}
/*This if statement is for taking the square root of a number, by inputting a number into the first input box, the calculator will then take its square root.*/
    if (dropdown.value == "sqrt"){
        answer = Math.sqrt(input1.value);
        display.innerHTML = answer;
        }
/*This if statement is for taking the cubed root of a number, by inputting a number into the first input box, the calculator will then take its cubed root.*/
    if (dropdown.value == "cbrt"){
        answer = Math.cbrt(input1.value);
        display.innerHTML = answer;
    }
/*The following if statement will take the value of the first input box, and round it to the nearest number.*/
    if (dropdown.value == "round"){
        answer = Math.round(input1.value)
        display.innerHTML = answer;
    }
}