export type Produto = {
    nome: string
    valor: number
}

// class Estabelecimento{
//     private endereco: string
//     private setor: string
//     private produtos: Produto[]

//     constructor(endereco: string, setor: string, p: Produto[]){
//         this.endereco = endereco
//         this.setor = setor
//         this.produtos = p
//     }
// }

//MODO ENCURTADO
class EstabelecimentoBase{
    private filaDeEspera: number
    constructor(
        private endereco: string,
        private setor: string,
        private produtos: Produto[],
        filaDeEspera?: number
    )
    
    {
        this.filaDeEspera = (filaDeEspera != null && filaDeEspera >= 0) ? filaDeEspera : 10;
    }

    public getFilaDeEspera(){
        return `Fila: ${this.filaDeEspera} pessoas`
    }

    public setFilaDeEspera(valorFila: number){
        if(valorFila <= 0){
            return
        }
        this.filaDeEspera = valorFila
    }


    retornaNomeDosProdutos() {
        return this.produtos.map(produto => `${produto.nome}: ${produto.valor}`)
    }

    diminuiFilaDeEspera(){
        if(this.filaDeEspera === 0){
            return console.log('atendimento finalizado com sucesso')
        }
        this.filaDeEspera -= 1
        console.log(`fila de espera esta em: ${this.filaDeEspera} pessoas`)
    }
}


const padaria = {
    endereco: 'Rua dos ipes, 312',
    setor: 'alimentação',
    produtos: [
        {nome: 'pão da padaria', valor: 0.80},
        {nome: 'arroz', valor: 10.80},
        {nome: 'leite', valor: 5.80},
        {nome: 'brigadeiro', valor: 1.50},
        {nome: 'carne', valor: -20}
    ],
    
    
     nomeDosProdutos() {
        return this.produtos.map(produto => `${produto.nome}: ${produto.valor}`)
        }
    
}


const padaria2 = {
    endereco: 'Rua dos carvalhos, 436',
    setor: 'alimentação',
    produtos: [
        {nome: 'pão de forma', valor: 4.80},
        {nome: 'arroz doce', valor: 10.80},
        {nome: 'leite longa vida', valor: 5.80},
        {nome: 'brigadeiro de pote', valor: 1.50},
        {nome: 'pastel de carne', valor: 15.50}
    ],
   
}

const padaria3 = new EstabelecimentoBase('Rua dos Gerânios, 879', 'alimentacao',
    [
        {nome: 'pão', valor: 0.80},
        {nome: 'arroz', valor: 10.80},
        {nome: 'leite', valor: 5.80},
        {nome: 'brigadeiro', valor: 1.50},
        {nome: 'carne', valor: -20}
    ],
    -4 //nao vai permitir setando valor padrao = 10
)


console.log(padaria2)
console.log(padaria3.retornaNomeDosProdutos())


//padaria3.diminuiFilaDeEspera()
padaria3.setFilaDeEspera(-100) //nao vai permitir valor negativo, irá setar valor padrao  = 10
padaria3.setFilaDeEspera(20)
console.log(padaria3.getFilaDeEspera())

console.log(padaria.nomeDosProdutos())