const idade = 19
const temCnh = true
    //let numeroDePassageiros = 0

const podeDirigir = idade > 18 && temCnh

if (podeDirigir) {
    console.log('Pessoa esta habilitada')
        //numeroDePassageiros = 4
} else {
    console.log('Pessoa nao esta habilitada')
}

const numeroDePassageiros = podeDirigir ? `numero de passageiros: 4` : 0

console.log(numeroDePassageiros)