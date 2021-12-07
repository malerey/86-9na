// funciones flecha 

// cuando tenemos un solo parametro en la funcion flecha, 
// el parentesis es optativo
// const duplicar = num1 => {
//   return num1 * 2
// }

// // retorno implicito 
// // cuando la funcion flecha NO tiene llaves luego de la flecha
// // y no tiene la palabra return, javascript asume que 
// // lo que la funcion retorna es lo que viene inmediatamente despues de la flecha
// // sirve para funciones muy sencillas (de una sola linea)

// const duplicar = num1 => num1 * 2 


// operador ternario

// if es una sentencia
// operador ternario es una expresion 


// funcion con if/else
// const edad = 17
// const mostrarMensajeMayorEdad = (edad) => {
//   if (edad >= 18) {
//     return "Podes ingresar a la pagina"
//   }
//   else {
//     return "No podes ingresar a la pagina"
//   }
// }

// // funcion con operador ternario
// const mostrarMensajeMayorEdad = (edad) => {
//   return edad >= 18 ? "Podes ingresar a la pagina" : "No podes ingresar a la pagina"
// }

// // funcion con operador ternario y retorno implicito 
// const mostrarMensajeMayorEdad = edad => edad >= 18 ? "Podes ingresar a la pagina" : "No podes ingresar a la pagina"


// const resultado = mostrarMensajeMayorEdad(29) // string 


// retorno implicito con filter, map, reduce, etc

// const array = ["maca", "nati", "caro", "celi", "bren", "rocio", "zuri", "gri"]


// const filtrarNombresConA = array => {
//   return array.filter((nombre) => {
//     return nombre.includes("a")
//   })
// }

// const filtrarNombresConA = array => array.filter((nombre) => nombre.includes("a"))


// operador de cortocircuito 
// es una expresion, y por lo tanto se puede retornar de una funcion 
// if (edad > 18) {
//   alert("mayor de 18")
// }

// // si la primera cosa es verdadera, hacer la segunda 
// // si la primera cosa no es verdadera, no hacer nada 

// edad > 18 && alert("mayor de 18")




// PROMESAS (javascript asincrono)

// consumimos promesas: vamos a tener metodos que nos RETORNAN promesas



// NO COPIEN, otakus 
// NO HACEMOS ESTO DESDE EL FRONT END, EL BACK SE ENCARGA DE CREAR LAS PROMESAS
// const alumnas = [
//   {
//     id: 1, 
//     nombre: "Mika", 
//     edad: 22
//   }, 
//   {
//     id: 2, 
//     nombre: "Natu", 
//     edad: 21
//   }
// ]

// const encontrarUsuario = (id) => {
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         const alumna = alumnas.find(alumna => alumna.id === id)
//         if (alumna) {
//         resolve(alumna)   // --> le voy a decir al FE que salió todo bien
//         }
//         else {
//           reject("La alumna no existe :(") // --> rechazar la promesa. informarle al FE que no todo salió bien
//         }
//      }, 3000)
//     }) 
// }

// encontrarUsuario(2)
// .then(res => console.log(res))


// DESDE EL FRONT CONSUMIMOS METODOS QUE NOS RETORNAN PROMESAS
const baseUrl = "https://reqres.in/api/"

// const obtenerUsuarios = () => {
//   fetch(baseUrl + "users")
//   .then(res => res.json())
//   .then(data => {
//     console.log(data)
//   })
// }

// async await 
const obtenerUsuarios = async () => {
  const res = await fetch(baseUrl + "users")
  const data = await res.json()
  console.log(data)
  return data
}

obtenerUsuarios()
.then(data => console.log(data))
// sintaxis alternativa para promesas


// otra manera de escribir promesas 
// async await es AZUCAR SINTACTICA "sugar syntax"

// siempre en una funcion
// esa funcion la identificamos como uan funcion ASINCRONA


