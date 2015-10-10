var addTwoNumber = function(number1,number2){
    return number1+number2;
};
var multiplyTwoNumber = function(number1,number2){
    return number1*number2;
};
var subtractTwoNumber = function(number1,number2){
    return number1-number2;
};

var result1 = addTwoNumber(5,3);
var result2 = multiplyTwoNumber(5,3);
var result3 = subtractTwoNumber(5,3);

document.getElementById("result1").innerText = result1;
document.getElementById("result2").innerText = result2;
document.getElementById("result3").innerText = result3;