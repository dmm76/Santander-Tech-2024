const listaNumeros = [33, 131, 155, 555, 222, -21, -56]
const usuarios = ["José", "Antorino"]
// for(let contador = 0; contador < listaNumeros.length; contador++){
//     console.log(listaNumeros[contador])
// }

//codigo declarativo

for(let numero of listaNumeros){
    console.log({numero})
}

for(let usuario of usuarios){
    console.log({usuario})
}

//comparacao com while - imperativo
console.log(`Print via While`)

let i = 0
while(i<listaNumeros.length){
    console.log(listaNumeros[i])
    i+=1
}