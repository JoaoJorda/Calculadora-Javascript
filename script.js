var display =document.getElementById('display');

// função de adicionar numero ao display

function addNumberTheCalculato(number){
    display.value= display.value + number;
    return display.value; 
}

// função de limpar 

function clearNumber(){
    display.value="";
    return display;
}

//função de adicionar sinal 

function addSing(sing){
    display.value += sing;
    return display.value;
}

// Função de resultado 

function result() {
    var resultOperations = document.getElementById('display').value;
    if (resultOperations) {
        document.getElementById('display').value = eval(resultOperations);
    } else {
        console.log("Error");
    }
}

// esconder intens da calculadora cientifica


function viewScientific() {
    var viewScientificElements = document.getElementsByClassName('hide_function');

    for (var i = 0; i < viewScientificElements.length; i++) {
        var element = viewScientificElements[i];
        
        if (element.style.display === "none" || element.style.display === "") {
            element.style.display = "block";
        } else {
            element.style.display = "none";
        }
    }
}

// função cientifica

function sin(){
    var number = parseFloat(document.getElementById('display').value);
    var seno = Math.sin(number * Math.PI / 180);
    document.getElementById('display').value = seno;
}

function cos(){
    var number = parseFloat(document.getElementById('display').value);
    var cosseno = Math.cos(number *Math.PI /180);
    document.getElementById('display').value = cosseno;
}

function tan(){
    var number = parseFloat(document.getElementById('display').value);
    var tangente = Math.tan(number * Math.PI/180);
    document.getElementById('display').value = tangente;
}

function log(){
    var number = parseFloat(document.getElementById('display').value);
    var logaritimo = Math.log(number);
    document.getElementById('display').value = logaritimo;
}

function exp(){
    var number = parseFloat(document.getElementById('display').value);
    var exponencial = Math.exp(number);
    document.getElementById('display').value = exponencial;
}

function pi(){
    var display = document.getElementById('display');
    display.value +=Math.PI;
}