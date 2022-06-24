
const operator = prompt('Enter an operator (+, -, * or / ) to perform the calculation: ');  
  
// accept the number from the user through prompt box  
const number1 = parseFloat(prompt ('Enter the first number: '));  
const number2 = parseFloat(prompt ('Enter the second number: '));  
  
let result; // declaration of the variable.  
  
// use if, elseif and else keyword to define the calculator condition in JavaScript.  
if (operator == '+') { // addition operator to add two numbers  
    result = number1 + number2;  
}  
else if (operator == '-') { // substractiond operator to subtract two numbers  
    result = number1 - number2;  
}  
else if (operator == '*') { // multiplication operator to multiply two numbers  
    result = number1 * number2;  
}  
else if (operator == '/') {  
    result = number1 / number2; // division operator to divide two numbers  
}  
else{
    window.alert("Error!! Please follow the instructions"); 
}
  
// display the result of the Calculator  
window.alert(" The result is " + result);  