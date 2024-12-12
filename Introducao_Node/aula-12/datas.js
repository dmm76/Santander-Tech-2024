const { DateTime} = require('luxon')

const agora = DateTime.now()
console.log(agora.month)

 //devolve o mes 11 pq devolve a posicao de matriz do mes
console.log(new Date().getMonth()) //nativo JS
console.log(new Date().toLocaleString()) //nativo JS - ja respeita a data do computador
console.log(new Date().toLocaleString('en-US')) //nativo JS - ja respeita a data do computador

