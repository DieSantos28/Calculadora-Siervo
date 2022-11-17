
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

const bajobtn = document.getElementById("bajobtn");

bajobtn.addEventListener("click", () => {
     Swal.fire({
        title:"Bajo Peso",
        text: "Aunque estar delgado a menudo puede ser saludable, tener bajo peso puede ser una preocupación si es el resultado de una mala nutrición o si estás embarazada o tienes otros problemas de salud. Por lo tanto, si tienes bajo peso, consulta a tu médico o dietista para hacerte una evaluación. Juntos, pueden planificar cómo llegar a tu peso ideal. Deberías de comer con más frecuencia, prueba eligir alimentos ricos en nutrientes, licuados y batidos de frutas. (Obtén mas consejos en nuestra sección).",
        icon: "warning",
        imageUrl:"https://help.trainingym.com/hs-fs/hubfs/Knowledge%20Base%20Import/downloads.intercomcdn.comio224063001581486c867dbb5303fcbc5deimage.png?width=453&name=downloads.intercomcdn.comio224063001581486c867dbb5303fcbc5deimage.png",
        background: "#84E3E0",
        backdrop: "#4C9896",
        confirmButtonText: "Continuar",
    })
})

const pesobtn = document.getElementById("pesobtn");

pesobtn.addEventListener("click", () => {
    Swal.fire({
        title:"Peso Normal",
        text: "Al parecer tienes un peso adecuado y seguro que una buena calidad de vida, aún así te recomendamos que sigas manteniendo un control de tu alimentación.",
        icon: "success",
        imageUrl:"https://help.trainingym.com/hs-fs/hubfs/Knowledge%20Base%20Import/downloads.intercomcdn.comio224063001581486c867dbb5303fcbc5deimage.png?width=453&name=downloads.intercomcdn.comio224063001581486c867dbb5303fcbc5deimage.png",
        background: "#44B056",
        backdrop: "#25602F",
        confirmButtonText: "Continuar",  
    })
})

const sobrebtn = document.getElementById("sobrebtn");

sobrebtn.addEventListener("click", () => {
    Swal.fire({
        title:"Sobrepeso",
        text: "El sobrepeso es un exceso de peso corporal más alto de lo que se considera saludable para una persona en relación con su edad, estatura y sexo, definido por un índice de masa corporal igual o superior a 25. Recomendamos; Consultar a un especialista para obtener un tratamiento adecuado, realizar actividad física regular y mantener una dieta balanceada y nutritiva. Más de 1.900 millones de adultos (en el año 2016, según la Organización Mundial de la Salud) sufren de sobrepeso.",
        icon: "warning",
        imageUrl:"https://help.trainingym.com/hs-fs/hubfs/Knowledge%20Base%20Import/downloads.intercomcdn.comio224063001581486c867dbb5303fcbc5deimage.png?width=453&name=downloads.intercomcdn.comio224063001581486c867dbb5303fcbc5deimage.png",
        background: "#FAC2A6",
        backdrop: "#B08773",
        confirmButtonText: "Continuar",
    })
})

const obebtn = document.getElementById("obebtn");

obebtn.addEventListener("click", () => {
    Swal.fire({
        title:"Obesidad",
        text: "La obesidad se relaciona de forma clara y directa con un gran número de patologías. Es causa de enfermedades cardiovasculares (hipertensión, diabetes, infarto de miocardio, ictus…) y, además, puede intervenir en el desarrollo de otras como el cáncer, la apnea del sueño, la infertilidad, artrosis o el hígado graso. Si bien existen varios tipos de obesidad, ya sea alimentaria o hereditaria entre otras, las recomendaciones que podemos ofrecerles son; Consultar a un especialista para obtener un tratamiento adecuado, realizar actividad física regular, mantener una dieta balanceada y nutritiva, unirse a grupos de apoyo, en casos severos, el médico puede prescribir el uso de medicamentos o una intervención quirúrgica. Alrededor de 650 millones de adultos (en el año 2016, según la Organización Mundial de la Salud) sufren de Obesidad.",
        icon: "error",
        imageUrl:"https://help.trainingym.com/hs-fs/hubfs/Knowledge%20Base%20Import/downloads.intercomcdn.comio224063001581486c867dbb5303fcbc5deimage.png?width=453&name=downloads.intercomcdn.comio224063001581486c867dbb5303fcbc5deimage.png",
        background: "#FF945E",
        backdrop: "#FFA07A",
        confirmButtonText: "Continuar",

    })
})


const listado = document.getElementById("listado");

const listadoComidas = "json/comidas.json";

fetch(listadoComidas)
    .then(respuesta => respuesta.json())
    .then(datos => {
        datos.forEach( producto => {
            listado.innerHTML += `<h3>Día: ${producto.nombre}</h3>
                                <strong>Comida Principal; ${producto.comidas}</strong>`
        })
    })
    .catch(error => console.log(error))
    .finally(() => console.log("Proceso Terminado"))

