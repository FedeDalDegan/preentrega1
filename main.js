


function bienvenida(){

    let usuario = prompt("Por favor, ingrese su nombre:");
    let salu2 = ("Bienvenido " + usuario);
    document.write("¡Hola " + usuario + "!");

    if(usuario == ""){
        alert("Debe ingresar un nombre.");
        }else{
            alert(salu2);
        }
}

let salir = "ESC";
while (salir != "Y" || salir != "y") {
    alert(calculadora(parseFloat(prompt("Ingrese un numero: ")),
    (parseFloat(prompt("Ingrese un segundo numero: "))), 
    prompt("Ingrese la operacion: ")));
    salir = prompt("Escriba ESC para salir.");
}

function calculadora(primerNum, segundoNum, operacion) {

    if(operacion == "/" && segundoNum == 0){
        alert("No es posible dividir por 0");
    }
    else if (operacion == "+") {
        return primerNum + segundoNum;
    }  else if (operacion == "-") {
        return primerNum - segundoNum;
    } else if (operacion == "/") {
        return primerNum / segundoNum;
    } else if (operacion == "*") {
        return primerNum * segundoNum;
    } else {
        return ("Debe ingresar los datos pedidos.");
    }
}


if(salir == "y" || salir == "Y"){
    alert("Nos veremos pronto " + usuario);
}

