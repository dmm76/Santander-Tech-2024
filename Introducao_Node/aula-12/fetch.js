//codigo de retorno da pagina
fetch('http://localhost:3000').then(
    response => response.text()
    .then(data => console.log(data))
)

//mesmo codigo com funcao assincrona
async function makeRequest(){
    const response = await fetch('http://localhost:3000')
    const data = await response.text()
    console.log(data)
}

makeRequest()