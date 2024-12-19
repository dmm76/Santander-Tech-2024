import { receiveMessageOnPort } from "worker_threads"
import {Produto} from "../aula-14/01-poo"

interface EstabelecimentoInterface{
    endereco: string //por estar aqui no construtor tem que ser public
    setor: string
    filaDeEspera: number

    retornaNomeDosProdutos: () => string[]
    diminuiFilaDeEspera(): void
}
interface ReceitaInterface{
    remedios: string[]
    idenficacaoDoMedico: string
}
interface FarmaciaInterface extends EstabelecimentoInterface{
    compraRemedioPrescricao: (receita: ReceitaInterface) => void
}


class Estabelecimento implements EstabelecimentoInterface{
    protected _filaDeEspera: number
    
    constructor(
        public  endereco: string,
        public setor: string,
        protected produtos: Produto[],       
        filaDeEspera?: number
    )
    
    {
        this._filaDeEspera = (filaDeEspera != null && filaDeEspera >= 0) ? filaDeEspera : 10;
    }

    get filaDeEspera(){ //so esta aqui devido a interface - obrigatoriedade
        return this._filaDeEspera
    }

    public getFilaDeEspera(){
        return `Fila: ${this._filaDeEspera} pessoas`
    }

    public setFilaDeEspera(valorFila: number){
        if(valorFila <= 0){
            return
        }
        this._filaDeEspera = valorFila
    }


    retornaNomeDosProdutos() {
        return this.produtos.map(produto => `${produto.nome}: ${produto.valor}`)
    }

    diminuiFilaDeEspera(){
        if(this._filaDeEspera === 0){
            return console.log('atendimento finalizado com sucesso')
        }
        this._filaDeEspera -= 1
        console.log(`fila de espera esta em: ${this._filaDeEspera} pessoas`)
    }
}

class Farmacia extends Estabelecimento implements FarmaciaInterface {
    
    
    constructor(
        public  endereco: string,
        public setor: string,
        protected produtos: Produto[],       
        filaDeEspera?: number
    )
    
    {
        super(endereco, setor, produtos, filaDeEspera)
    }

   public compraRemedioPrescricao(receita: ReceitaInterface): void{
    const nomeDosRemediosReceitados = receita.remedios  
    const nomesDosProdutos = this.produtos.map(produto => produto.nome);

    const remediosDisponiveis = nomeDosRemediosReceitados.filter(
        produto => nomesDosProdutos.includes(produto)
    )

    if(remediosDisponiveis.length === 0){
        console.log('Remédios indisponiveis no estoque')
    }else
    console.log(`Remédios disponíveis: ${remediosDisponiveis.join(', ')}`);

   }
}

const supermercado = new Estabelecimento(
    'Rua dos ipes, 312',
    'alimentação',
    [
        {nome: 'pão da padaria', valor: 0.80},
        {nome: 'arroz', valor: 10.80},
        {nome: 'leite', valor: 5.80},
        {nome: 'brigadeiro', valor: 1.50},
        {nome: 'carne', valor: -20}
    ],
    25
)

const farmaciadoZe = new Farmacia(
    'Avenida 19 de Dezembro, 98',
    'medicamentos',
    [
        {nome: 'paracetamol', valor: 5.63},
        {nome: 'dipirona', valor: 3.56},
        {nome: 'aspirina', valor: 1.56},
        {nome: 'vitamina C', valor: 6.56},
        {nome: 'remédio controlado', valor: 26.56}
        
    ], 
    3
)

//console.log(supermercado.getFilaDeEspera())

//console.log(farmaciadoZe.retornaNomeDosProdutos())

farmaciadoZe.compraRemedioPrescricao({remedios:['aspirina', 'dipirona', 'shampoo'], idenficacaoDoMedico: '235689.65'})

farmaciadoZe.compraRemedioPrescricao({remedios:['shampoo'], idenficacaoDoMedico: '235689.66'})