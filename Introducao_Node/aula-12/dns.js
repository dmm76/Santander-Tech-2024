const dns = require('node:dns')

const searchedUrl = 'google.com'

//retorno dns
dns.resolve4(searchedUrl, (err, addresses) =>{
    if(err){
        console.log('url nao encontrada')
    }
    console.log(addresses)
})

//retorno dns com promisses

async function bootstrap() {
    const searchedUrl = 'google.com'
    console.time('pesquisando url por DNS padrao')
    const addresses = await dns.promises.resolve4(searchedUrl)
    console.log(addresses)
    console.timeEnd('pesquisando url por DNS padrao')
    
    const nameServer = await dns.promises.resolveNs(searchedUrl)
    console.log(nameServer)

    const ipNS = await dns.promises.resolve4(nameServer[1])

    const resolver = new dns.Resolver()
    resolver.setServers(ipNS)

    console.time('Pesquisando url por DNS especifico')
    resolver.resolve4(searchedUrl, (error, addresses) => {
        if(error){
            console.error('Nao foi possivel encontrar ipv4')
        }
        console.log(addresses)
        console.timeEnd('Pesquisando url por DNS especifico')

    })
}

bootstrap()