const listaDeNumeros = [25, 88, 71, 192, 333, 222, 10, 11, 62]
const listaPares = []
const listaImpares = []

let contador = 0

while (contador < listaDeNumeros.length) {
    //console.log(listaDeNumeros[contador])
    if (listaDeNumeros[contador] % 2 === 0) {
        //console.log(listaDeNumeros[contador])
        listaPares.push(listaDeNumeros[contador])
    } else {
        listaImpares.push(listaDeNumeros[contador])
    }
    contador += 1
}

console.log(listaImpares)
console.log(listaPares)

listaPares.map