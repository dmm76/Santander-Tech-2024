type Constructor = new (...args: any[]) => {};
type GConstructor<T = {}> = new (...args: any[]) => T;
type AnimalProps = GConstructor<{ nome: string; idadeEmMeses: number }>;

function MixinVoa<TBase extends AnimalProps>(superClasse: TBase) {
    return class extends superClasse {
        constructor(...args: any[]) {
            super(...args); // Corrigido para passar os argumentos corretamente
        }

        voa() {
            console.log(`${this.nome} está voando`);
        }
    };
}

function MixinNada<TBase extends AnimalProps>(superClasse: TBase) {
    return class extends superClasse {
        constructor(...args: any[]) {
            super(...args); // Corrigido para passar os argumentos corretamente
        }

        nada() {
            console.log(`${this.nome} está nadando`);
        }
    };
}

function MixinAnda<TBase extends AnimalProps>(superClasse: TBase) {
    return class extends superClasse {
        constructor(...args: any[]) {
            super(...args); // Corrigido para passar os argumentos corretamente
        }

        anda() {
            console.log(`${this.nome} está andando`);
        }
    };
}

interface AnimalInterface {
    nome: string;
    idadeEmMeses: number;
    comer: () => void;
}

// Forma curta de escrever classes
class Animal implements AnimalInterface {
    public nome: string;
    public idadeEmMeses: number;

    constructor({ nome, idadeEmMeses }: { nome: string; idadeEmMeses: number }) {
        this.nome = nome;
        this.idadeEmMeses = idadeEmMeses;
    }

    comer(): void {
        console.log(`${this.nome} está comendo`);
    }
}
const CachoroMulti = MixinAnda(Animal)
const cachorro = new CachoroMulti({ nome: 'Mel', idadeEmMeses: 10 });

const MoscaMulti = MixinVoa(Animal); // Criamos uma classe derivada
const mosca = new MoscaMulti({ nome: 'Mosca', idadeEmMeses: 0.1 });

const PatoMulti = MixinAnda(MixinNada(MixinVoa(Animal)))
const pato = new PatoMulti({nome:'Carlos', idadeEmMeses: 5})



// Uso das instâncias
mosca.voa();
cachorro.comer();

pato.anda()
pato.nada()
pato.voa()
