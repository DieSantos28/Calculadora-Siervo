function Bienvenido(){
    alert("Accediendo a Nutrivita, cargando una mejor calidad de vida...100%");
}

Bienvenido();


class Persona {
    constructor(nombre, email, peso, altura) {
        this.nombre = nombre; 
        this.email = email;
        this.peso = peso;
        this.altura = altura; 
    }

    calcularIMC() {
        let resultado = (this.peso / (this.altura * this.altura)) * 10000;
        return resultado.toFixed(2);
    }
}

const personas = [];

const idFormulario = document.getElementById("formulario");

idFormulario.addEventListener("submit", (e) => {
    e.preventDefault();
     

    const nombre = document.getElementById("nombre").value;
    const email = document.getElementById("email").value;
    const peso = document.getElementById("peso").value;
    const altura = document.getElementById("altura").value;
    
    const persona = new Persona(nombre, email, peso, altura);
    
    personas.push(persona);

    
    localStorage.setItem("Persona", JSON.stringify(personas));

    
    idFormulario.reset();

    mostrarInfo(persona);

})


const resultado = document.getElementById("infoUsuarios");

const mostrarInfo = (persona) => {
    let aux ="";
    aux += `<p class="resultado"> ${persona.nombre} tu Masa Corporal es de: </p>
            <p class="resultado"> IMC: ${persona.calcularIMC()} </p>`
    resultado.innerHTML = aux;
}

const botonAdmin = document.getElementById("admin");
const datosAdmin = document.getElementById("datosAdmin");

botonAdmin.addEventListener("click", () => {
    const personas = JSON.parse(localStorage.getItem("Persona"));
    let aux = "";
    personas.forEach(persona => {
        aux += `<hr><p class="resultado"> Nombre: ${persona.nombre} </p> 
                <p class="resultado"> Altura: ${persona.altura} </p>
                <p class="resultado"> Peso: ${persona.peso} </p> <hr>`
                
    });
    datosAdmin.innerHTML = aux; 
})

