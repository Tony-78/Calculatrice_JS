const numberZero = document.getElementById("zero");
const numberOne = document.getElementById("one");
const numberTwo = document.getElementById("two");
const numberThree = document.getElementById("three");
const numberFour = document.getElementById("four");
const numberFive = document.getElementById("five");
const numberSix = document.getElementById("six");
const numberSeven = document.getElementById("seven");
const numberEight = document.getElementById("eight");
const numberNine = document.getElementById("nine");
const divide = document.getElementById("divide");
const multiply = document.getElementById("multiply");
const plus = document.getElementById("plus");
const minus = document.getElementById("minus");
const deleteNumber = document.getElementById("delete");
const dot = document.getElementById("dot");
const equal = document.getElementById("equal");
const memoryResult = document.getElementById("memory");
const resultDetails = document.getElementById("result-details");
const result = document.getElementById("result");

let sign = "";

// Afficher le(s) chiffre(s) ou symbole sur la partie détail du display

numberZero.onclick = () => {
  resultDetails.innerHTML += numberZero.innerHTML;
};

numberOne.onclick = () => {
  resultDetails.innerHTML += numberOne.innerHTML;
};

numberTwo.onclick = () => {
  resultDetails.innerHTML += numberTwo.innerHTML;
};

numberThree.onclick = () => {
  resultDetails.innerHTML += numberThree.innerHTML;
};

numberFour.onclick = () => {
  resultDetails.innerHTML += numberFour.innerHTML;
};

numberFive.onclick = () => {
  resultDetails.innerHTML += numberFive.innerHTML;
};

numberSix.onclick = () => {
  resultDetails.innerHTML += numberSix.innerHTML;
};

numberSeven.onclick = () => {
  resultDetails.innerHTML += numberSeven.innerHTML;
};

numberEight.onclick = () => {
  resultDetails.innerHTML += numberEight.innerHTML;
};

numberNine.onclick = () => {
  resultDetails.innerHTML += numberNine.innerHTML;
};

dot.onclick = () => {
  resultDetails.innerHTML += ".";
};

divide.onclick = () => {
  resultDetails.innerHTML += divide.innerHTML;
  sign = "/";
};

multiply.onclick = () => {
  resultDetails.innerHTML += multiply.innerHTML;
  sign = "*";
};

minus.onclick = () => {
  resultDetails.innerHTML += minus.innerHTML;
  sign = "-";
};

plus.onclick = () => {
  resultDetails.innerHTML += plus.innerHTML;
  sign = "+";
};

deleteNumber.onclick = () => {
    resultDetails.innerHTML = "";
    result.innerHTML = "";
};



equal.onclick = () => {
  // on separe les deux nombres par rapport au signe sauvegarder dans sign, sur lequel l'utilisateur a cliqué sous forme d'array
  let numbers_tab = resultDetails.innerHTML.split(sign);

  // on récupère les deux nombres
  let nb1 = Number(numbers_tab[0]);
  let nb2 = Number(numbers_tab[1]);
  let total = "";

  // on regarde quel signe a été sauvegardé dans la variable sign pour savoir quel type de calcul est à effectuer
  if (sign == "+") {
    total = nb1 + nb2;
  }

  if (sign == "-") {
    total = nb1 - nb2;
  }
  if (sign == "*") {
    total = nb1 * nb2;
  }
  if (sign == "/") {
    total = nb1 / nb2;
  }
  
  if (Number.isInteger(total)) {
    result.innerHTML = total;
  } else {
    result.innerHTML = (Math.round(total * 100)/100).toFixed(2);
  }
  
}

memoryResult.onclick = () => {
    resultDetails.innerHTML = result.innerHTML;
    result.innerHTML = "";
};