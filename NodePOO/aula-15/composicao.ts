interface AnimalInterface {
    nome: string
    idadeEmMeses: number
    comer: () => void
}

//Forma curta de escrever classes
class Animal implements AnimalInterface{   
    constructor(public nome: string, public idadeEmMeses: number){}

    comer(): void {
        console.log(`${this.nome} comendo`)
    }
}

class AnimalVoador extends Animal implements AnimalInterface{   
    constructor(public nome: string,
                public idadeEmMeses: number,
                penas?: boolean)
                {
                    super(nome, idadeEmMeses)
                }                   

    voa(){
        console.log(`${this.nome} voando`)
    }
}


const cachorro = new Animal('Mel', 10)
const mosca = new AnimalVoador('Mosca', 0.1)

mosca.voa()
cachorro.comer()

export{}