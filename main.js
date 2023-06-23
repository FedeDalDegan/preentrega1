bienvenida();

function bienvenida(){

    let usuario = prompt("Por favor, ingrese su nombre");
    let salu2 = ("Bienvenido " + usuario);

    if(usuario == ""){
        alert("Debe ingresar un nombre.");
        document.write("Ningun nombre fue especificado.");
        }else{
            alert(salu2);
            document.write("¡Hasta luego, " + usuario + "!");
        }
    console.log("El usuario es: " + usuario);
}

function calculadora(primerNum, segundoNum, operacion) {
    if(operacion == "/" && segundoNum == 0){
        alert("No es posible dividir por 0");
    }else if(operacion == "+"){
        return primerNum + segundoNum;
    }else if(operacion == "-"){
        return primerNum - segundoNum;
    }else if(operacion == "/"){
        return primerNum / segundoNum;
    }else if(operacion == "*"){
        return primerNum * segundoNum;
    }else{
        return ("Debe ingresar los datos pedidos.");
    }
}

let salir = "ESC";

while (salir != "Y" || salir != "y") {
    alert(calculadora(parseFloat(prompt("Ingrese un numero entero: ")),
    (parseFloat(prompt("Ingrese un segundo numero entero: "))), 
    prompt("Ingrese la operacion (+, -, * o /)")));
    salir = prompt("Escriba ESC para salir.");
    if(salir == "ESC"){
        break;
    }
}



