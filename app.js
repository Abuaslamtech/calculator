let result = "";

function calculator() {
  function evaluate(num) {
    result += num.value;
    answer.value = result;

    console.log(result);
  }

  // numbers
  one.addEventListener("click", () => {
    evaluate(one);
  });
  two.addEventListener("click", () => {
    evaluate(two);
  });
  three.addEventListener("click", () => {
    evaluate(three);
  });
  four.addEventListener("click", () => {
    evaluate(four);
  });
  five.addEventListener("click", () => {
    evaluate(five);
  });
  six.addEventListener("click", () => {
    evaluate(six);
  });
  seven.addEventListener("click", () => {
    evaluate(seven);
  });
  eight.addEventListener("click", () => {
    evaluate(eight);
  });
  nine.addEventListener("click", () => {
    evaluate(nine);
  });
  zero.addEventListener("click", () => {
    evaluate(zero);
  });

  // operators

  function operate(operator) {
    result += operator.value;
    answer.value = result;
    console.log(result);
  }
  add.addEventListener("click", () => {
    operate(add);
  });
  subtract.addEventListener("click", () => {
    operate(subtract);
  });
  multiply.addEventListener("click", () => {
    operate(multiply);
  });
  divide.addEventListener("click", () => {
    operate(divide);
  });
  percent.addEventListener("click", () => {
    operate(percent);
  });
  rightBracket.addEventListener("click", () => {
    operate(rightBracket);
  });
  leftBracket.addEventListener("click", () => {
    operate(leftBracket);
  });
  point.addEventListener("click", () => {
    evaluate(point);
  });
  equal.addEventListener("click", () => {
    result = eval(result);
    answer.value = result;
    console.log(eval(result));
  });

  clear.addEventListener("click", () => {
    answer.value = "";
    result = " ";
  });
}

calculator();
