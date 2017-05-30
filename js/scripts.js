

var num1 = parseInt(prompt("Enter a number"));
var num2 = parseInt(prompt("Enter a second number number"));



function add(num1, num2){

  alert("Now let's add them");
  var result = parseInt(num1 + num2);

 alert(result);

  return result;
};




function divide(num1, num2){

  alert("Now let's divide them");
  var result = parseInt(num1/num2);

  alert("The answer is "+ result);
    return result;
};

add(num1, num2);

divide(num1, num2);
