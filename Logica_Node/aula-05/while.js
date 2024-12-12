const nomeDeUsuarios = ["Joana", "Renata", "Cleber", "Zeca", "Douglas", "Patricia"]

console.log('Olá', nomeDeUsuarios[0])
console.log('Olá', nomeDeUsuarios[1])
console.log('Olá', nomeDeUsuarios[2])
console.log('Olá', nomeDeUsuarios[3])

let i = 0
const y = nomeDeUsuarios.length
console.log({ y })
while (i < y) {
    console.log(nomeDeUsuarios[i])
    i += 1
}