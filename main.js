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



const BicicletaDeEjemplo = {
    fabricante : "specialized",
    modelo : "rockhopper",
    año : "Este es un breve ejemplo de como sera una vez habilitado el servicio de nuestro seguro"   
};

console.log(typeof BicicletaDeEjemplo);
console.log(BicicletaDeEjemplo);




function Bicicleta(fabricante, modelo, fecha) {
    this.fabricante = fabricante;
    this.modelo = modelo;
    this.fecha = fecha;

}

let fabricante = prompt("Ingrese el nombre del fabricante de su bicicleta(Giant,Trek,Winner,Bmx,Specialized).");
let modelo = prompt("Ingrese el modelo de su bicicleta.(no todos los modelos se tomarán en cuenta");
let fecha = parseInt(prompt("Ingrese el año en el cual su bicicleta se lanzó al mercado.(Solo estaran disponibles los ultimos 5 años)"));

const bike = new Bicicleta (fabricante, modelo, fecha);
console.log(bike);

let array = [
    {fabricante: "Winner" , modelo: "Aloy", año: 2018},
    {fabricante: "Giant", modelo: "Trance 29", año: 2019},
    {fabricante: "Trek" , modelo: "Marlin 5", año: 2020},
    {fabricante: "Bmx" , modelo: "Squeeze", año: 2021},
    {fabricante: "Specialized" , modelo: "Rockhopper", año: 2022},
    
]

console.log("El seguro se podrá adquirir para los modelos que fueron lanzados al mercado hasta 5 años atrás(contando con 2022 inclusive):");

const margenAño = array.map(function(lista){
    return lista.año;
})

console.log(margenAño)

console.log("Estos son ejemplos de algunos de los modelos más populares:");

const ejemploModelo = array.map(function(lista){
    return lista.modelo;
})

console.log(ejemploModelo)

console.log("Este es el listado de fabricantes con los que tenemos el gusto de trabajar en conjunto");

const marcasTratadas = array.map(function(lista){
    return lista.fabricante;
})

console.log(marcasTratadas)


const tituloEncabezado = document.getElementById("tituloEncabezado");
const tutorial = document.getElementById("tutorial");
const datos = document.getElementById("datos");

tituloEncabezado.innerText = "Actualizacion! Nuestra pagina se encuentra (aún) momentaneamente, fuera de servicio, pero cada vez falta menos...";
datos.className = "info";

const arrayContactos = ["Gaston Fernandez - gastonfernandezbike@hotmail.com", "Diego Santos - diegosantosandresbike@hotmail.com", "Sebastian Siervo - sebasiervobike@hotmail.com"];
const listaContactos = document.getElementById("listaContactos");

class paquete {
    constructor(nombre, precio){
        this.nombre = nombre;
        this.precio = precio;
    }
}

const pabasico = new paquete("Regular", 50 );
const pamedium = new paquete("Medium", 100);
const pacompleto = new paquete("Complete", 200);

const arrayPaquetes  = [pabasico, pamedium, pacompleto];

const contenedorPaquetes = document.getElementById("contenedorPaquetes");

arrayPaquetes.forEach( paquete => {
        let div = document.createElement("div");
        div.innerHTML = `<p>${paquete.nombre}</p>
                         <p>Precio: $${paquete.precio}</p>
                         <button class= "btnSoli"> Solicitar Ahora </button>`;
    contenedorPaquetes.appendChild(div);
} )


for(let contacto of arrayContactos) {
    let itemLista = document.createElement("li");
    itemLista.innerText = contacto;
    listaContactos.appendChild(itemLista);
}

const caja = document.getElementById("caja");

caja.onmouseout = () => {
    console.log("Juego terminado!");
}
