var display =document.getElementById('display');

function addNumberTheCalculato(number){
    display.value= display.value + number;
    return display.value; 
}

function clearNumber(){
    display.value="";
    return display;
}

function addSing(sing){
    display.value += sing;
    return display.value;
}

function result() {
    var resultOperations = document.getElementById('display').value;
    if (resultOperations) {
        document.getElementById('display').value = eval(resultOperations);
    } else {
        console.log("Error");
    }
}

