const { parse } = require('node:path')
const querystring = require('node:querystring')
const url = require('node:url')

const baseUrl = 'https://siteviagem.com.br'

const uri = querystring.stringify({
    destino: 'Rio de Janeiro',
    periodo: 'verão'
})

const fullUrl = `${baseUrl}/${uri}`

console.log(fullUrl)

//fazendo o reverso pegando a URI do site e transformando em objeto
const parseUri = querystring.parse(uri)

//testando as impressoes da convesao
console.log(uri)
console.log(parseUri)
console.log(parseUri.destino)

//tratando com node:URL
console.log(url.parse(fullUrl))

console.log("\nMudando de forma de sintaxe:\n")
//outra forma

const uri2 =querystring.escape('nome=São Paulo&teste=qualquer coisa')
console.log(uri2)

const unescapedUri2 = querystring.unescape(uri2)
console.log(unescapedUri2)