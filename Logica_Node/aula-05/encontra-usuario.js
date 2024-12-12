const listaDeContatos = ['Paulo', 'Selina', 'Roger', 'Zeca', 'Josue', 'Natalia', 'Bianaca']
    //const listaDeContatos = []
let encontrouUsuario = false
let contador = 0

do {

    const usuarioAtual = listaDeContatos[contador]
    if (usuarioAtual && usuarioAtual.startsWith('Z')) {
        encontrouUsuario = true
        console.log(`Usuario encontrado: ${usuarioAtual}`)
    }

    contador += 1
        // console.log(encontrouUsuario)

    if (contador >= listaDeContatos.length && encontrouUsuario === false) {
        console.log("Usuário não encontrado")
    }

} while (contador < listaDeContatos.length)