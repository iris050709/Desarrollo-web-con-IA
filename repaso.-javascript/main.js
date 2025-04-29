//VARIABLES
let nombre = "IRIS";
nombre = "IRIS J";

//CONSTANTES
const apellido = "CRUZ";

//OTRA VARIABLE
let altura = 161;

//MOSTRAR POR CONSOLA

console.log(nombre);
console.log(altura);

//CONCATENACION
let concatencion = nombre + "  " + apellido;

//SELECCIONAR ELEMENTOS DE LA PÁGINA
let datos = document.querySelector("#datos");
datos.innerHTML = `
    <hr/>
    <h1>Soy la caja de datos</h1>
    <h2>Mi nombre es: ${concatencion}</h2>
    <h3>Mido ${altura} cm</h3>
`;

//CONDICIONES
if(altura>=161){
    datos.innerHTML += "<h1>ERES UNA PERSONA ALTA</h1>"
}else{
    datos.innerHTML += "<h1>ERES UNA PERSONA BAJITA</h1>"
}

//BUCLES
for (let year = 2000; year <= 2023; year++) {
    datos.innerHTML += `<h2>ESTAMOS EN EL AÑO: ${year}</h2>`;
}

// ARRAYS

let nombres = ["Iris", "Art", "Pepe"];
let divNombres = document.querySelector("#nombres");
//divNombres.innerHTML = nombres[2];
divNombres.innerHTML = "<h1>LISTADO DE NOMBRES</h1><ul>";

/*nombres.forEach(nombre =>{
    divNombres.innerHTML += "<li>"+nombre+"</li>"
});*/

for (let nombre of nombres){
    divNombres.innerHTML += "<li>"+nombre+"</li>"
}
divNombres.innerHTML += "</ul>";

//funciones

const miInformacion = (nombre, altura) => {
    let misDatos = `
        <h1>Soy la caja de datos</h1>
        <h2>Mi nombre es: ${nombre}</h2>
        <h3>Mido ${altura} cm</h3>
    `;
    return misDatos;
}

const imprimir = () =>{
    let datos = document.querySelector("#datos");
    datos.innerHTML += miInformacion("Iriiiis", 162);
}
imprimir();