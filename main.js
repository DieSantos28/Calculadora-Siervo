function Bienvenido(){
    alert("Bienvenido! listo para sacar los cálculos de tu seguro?");
}

Bienvenido();

const suma = (num1, num2) => num1 + num2;
const resta = (num1, num2) => num1 - num2;
const división = (num1, num2) => num1 / num2;
const multiplicación = (num1, num2) => num1 * num2;

function mostrarValores ( operacion, num1, num2) {
    switch(operacion) {
        
        case "+":
            console.log( suma(num1,num2));
        break;

        case "-":
            console.log( resta(num1,num2));
        break;

        case "/":
            console.log( división(num1,num2));
        break;

        case "*":
            console.log( multiplicación(num1,num2));
        break;

        default:
          console.log("operación no valida")  
    }
}

let respuesta;
do{
    let num1, operacion, num2 
    do{
        num1=parseFloat(prompt("Ingrese el primer número deseado para la operación"))
        operacion=prompt("Ingrese una operación (+,-,*,/)")
        num2=parseFloat(prompt("Ingrese el segundo número deseado para la operación"))


        if(isNaN (num1)  || isNaN (num2)){
            console.log("Número no válido...");
        }
        if(num2 === 0 && operacion =="/"){
            console.log("No puedes dividir entre 0")
        }
    }while((isNaN(num1) || isNaN (num2)||(num2 === 0 && operacion == "/")))
    mostrarValores(operacion, num1, num2)
    do{
        respuesta = prompt("Desea realizar otra operación?").toLowerCase()
    }while (respuesta != "si" && respuesta != "no")
}while(respuesta != "no")