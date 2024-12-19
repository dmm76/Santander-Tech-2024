class Carro {
    modelo: string;
    cor: string;
    ano: number;

    constructor(car?: { modelo: string; cor: string; ano: number }) {
        if (car) {
            this.modelo = car.modelo;
            this.cor = car.cor;
            this.ano = car.ano;
        } else {
            // Valores padrão caso nenhum parâmetro seja fornecido
            this.modelo = "Modelo Padrão";
            this.cor = "Branco";
            this.ano = 2000;
        }
    }

    info(): string {
        return `${this.modelo} ${this.ano} ${this.cor}`;
    }
}

/* Não modifique o código abaixo! */
export function execute(car?: { modelo: string; cor: string; ano: number }): string {
    return new Carro(car).info();
}

const carro1 = new Carro({modelo: 'Uno', cor: 'Dourado',ano: 2001});

console.log(carro1)