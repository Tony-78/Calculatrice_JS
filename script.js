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
const comma = document.getElementById("comma");
const equal = document.getElementById("equal");

const resultDetails = document.getElementById("result-details");
const result = document.getElementById("result");

let sign = "";

// Methode fonction nommée

// numberZero.onclick = test;

// function test (){
//     resultDetails.innerHTML += numberZero.innerHTML;
// };

// Méthode fonction fléchée

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

comma.onclick = () => {
  resultDetails.innerHTML += comma.innerHTML;
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
  // on separe les deux nombre par rapport au signe sauvegarder dans calc, sur lequel l'utilisateur a cliquer sous forme de tableau
  let numbers_tab = resultDetails.innerHTML.split(sign);

  // on recupere les deux nombres different
  let nb1 = parseFloat(numbers_tab[0]);
  let nb2 = parseFloat(numbers_tab[1]);
  let total = "";

  // on regarde quel signe a été sauvegarder dans la variable calc pour savoir quel calcul effectué
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
  
  result.innerHTML = total; // on affiche le total ligne finale

}
   









