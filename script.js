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

    // Méthode clavier

document.onkeyup = (event) => {
    if (event.key == 0) {
        return zero();
    } else if (event.key == 1) {
        return one();
    } else if (event.key == 2) {
        return two();
    } else if (event.key == 3) {
        return three();
    } else if (event.key == 4) {
        return four();
    } else if (event.key == 5) {
        return five();
    } else if (event.key == 6) {
        return six();
    } else if (event.key == 7) {
        return seven();
    } else if (event.key == 8) {
        return eight();
    } else if (event.key == 9) {
        return nine();
    } else if (event.key == ".") {
        resultDetails.innerHTML += dot.innerHTML;
    } else if (event.key == "Escape") {
        resultDetails.innerHTML = "";
        result.innerHTML = "";
    } else if (event.key == "/") {
        resultDetails.innerHTML += divide.innerHTML;
        sign = "/";
    } else if (event.key == "*") {
        resultDetails.innerHTML += multiply.innerHTML;
        sign = "*";
    } else if (event.key == "-") {
        resultDetails.innerHTML += minus.innerHTML;
        sign = "-";
    } else if (event.key == "+") {
        resultDetails.innerHTML += plus.innerHTML;
        sign = "+";
    } else if (event.key == "Enter") {
        return enter();
    } else if (event.key == "m") {
        resultDetails.innerHTML = result.innerHTML;
        result.innerHTML = "";
    }
};

    // Méthode onclick

numberZero.addEventListener('click',zero);
function zero() {
    resultDetails.innerHTML += numberZero.innerHTML;
};

numberOne.addEventListener('click',one);
function one() {
    resultDetails.innerHTML += numberOne.innerHTML;
};

numberTwo.addEventListener('click',two);
function two() {
    resultDetails.innerHTML += numberTwo.innerHTML;
};

numberThree.addEventListener('click',three);
function three() {
    resultDetails.innerHTML += numberThree.innerHTML;
};

numberFour.addEventListener('click',four);
function four() {
    resultDetails.innerHTML += numberFour.innerHTML;
};

numberFive.addEventListener('click',five);
function five() {
    resultDetails.innerHTML += numberFive.innerHTML;
};

numberSix.addEventListener('click',six);
function six() {
    resultDetails.innerHTML += numberSix.innerHTML;
};

numberSeven.addEventListener('click',seven);
function seven() {
    resultDetails.innerHTML += numberSeven.innerHTML;
};

numberEight.addEventListener('click',eight);
function eight() {
    resultDetails.innerHTML += numberEight.innerHTML;
};

numberNine.addEventListener('click',nine);
function nine() {
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

memoryResult.onclick = () => {
    resultDetails.innerHTML = result.innerHTML;
    result.innerHTML = "";
};


// Fonction pour effectuer le calcul

equal.addEventListener('click', enter);

    function enter() {

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
        result.innerHTML = (Math.round(total * 100) / 100).toFixed(2);
    }
    }
