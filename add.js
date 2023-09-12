
//..................EJERCICIO (1)..................................


// //........................1
// const person ={
//     nombre: "Jaime",
//     edad: "27",
// };
// console.log(person)
// //........................2.......

// console.log (person.nombre)

// //........................3.......

// console.log (person ) //se usa corchetes pero no pude colocarlo, mi teclado no me lo permite

// //........................4..

// person.apellido = "Durand"
// console.log (person.apellido)

// //........................5.....

// person.nombre = "Emanuel"
// console.log (person)

// //.......................6.........

// delete person.nombre;


//................EJERCICIO (2)............................................


// 1) Nos permite extraer valores y trabajar por ceparado en caso la estructura es muy grande o contiene muchos datos y valores.

const dato = {
    id: 10,
    nombre: "jaime",
    apellido: "durand",
    edad: 26,
    jovie: "futbol",
        familia:{
            pais:"peru",
            departamento: "lima",
                email:{
                    correo:"jaime@",
                    cel: 934028380
                }
        }
}

// console.log (dato.familia.pais.departamento)

const {id, apellido, 
  familia:{pais, departamento, 
    email:{correo, cel} }} = dato;

console.log (id);
console.log (apellido);
console.log (pais);
console.log (departamento);
console.log (correo);
console.log (cel);

// 2 y 3) Freezear sirve para no permitir el reemplazo ni la suma de un nuevo valor y propiedades. Tambien se tiene la opcion "seal", tiene casi las mismas funciones de "frezze" con la diferencia de que solo te permite realizar el cambio del valor mas no de los datos.

// const date = {
//     nombre: "emanuel",
//     apeelido: "durand",
//     objeto:{
//         pelota: "futbol",
//         casa: "comedor"
//     }
// }

// // Object.freeze(date)

// // date.nombre = "jaime"
// // date.piso = 2 
// // delete date.apeelido

// // console.log (date)

// Object.seal(date)

// date.nombre = "jaime"
// date.piso = 2 
// delete date.apeelido

// console.log (date)

// 4) Sirve para unir varios objetos en solo uno objeto, y hay dos maneras de unir dichos objetos.

// const dato = {
//     nombre: "jaime",
//     edad: 26,
//     contacto:{
//         email:"jaime@",
//         cel: 936028380
//     }
// }

// const historial = {
//     deporte: "futbol",
//     estudio: "bancaria",
// }

// //FORMA 1

// const datosUnidos = Object.assign(dato, historial);

// console.log (datosUnidos)

// //FORMA 2

// const datosUnidos2 = {...dato, ...historial};

// console.log (datosUnidos)


// 5) Sirve para hacer el llamado de dos valores de una forma concatenados por medio de "this" mas la propiedada correspondiente.

// const dato = {
//     nombre: "jaime",
//     edad: 26,
//         nombreCompleto2() {return `${this.nombre} - ${this.edad}`}
// }

// console.log (dato.nombreCompleto2());

